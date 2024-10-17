require("dotenv").config({
  path: process.env.NODE_ENV === "production" ? "./.env.production" : "./.env",
});
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const path = require("path");
const http = require("http");
const socketIo = require("socket.io");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const server = http.createServer(app);
// 환경 설정 확인 로그 추가
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("MONGO_URI:", process.env.MONGO_URI);
// allowedOrigins를 전역에서 사용하도록 선언
const allowedOrigins = ["https://clubing.co.kr", "https://www.clubing.co.kr"];

if (process.env.NODE_ENV === "development") {
  allowedOrigins.push("http://localhost:3000");  // 프론트엔드 도메인 추가
  allowedOrigins.push("http://localhost:4000");  // 백엔드 포트
  allowedOrigins.push("http://127.0.0.1:27017");  // 로컬 MongoDB 포트
}

// CORS 설정
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log(`Blocked by CORS: ${origin}`);  // 차단된 도메인 로그
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],  // 허용할 HTTP 메서드
  credentials: true,  // 쿠키와 인증 정보 허용
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],  // 허용할 헤더 확장 가능
  preflightContinue: false,  // 프리플라이트 요청 후 본 요청으로 이어질지 여부
  optionsSuccessStatus: 204,  // 프리플라이트 요청의 성공 상태 코드
};

// CORS 미들웨어 적용
app.use(cors(corsOptions));

// 프리플라이트 요청 처리 (OPTIONS 메서드)
app.options('*', cors(corsOptions));

const io = socketIo(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: true,
  },
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// HTTPS 리디렉션 (운영 환경에서만)
app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production" && req.headers["x-forwarded-proto"] !== "https") {
    return res.redirect(`https://${req.headers.host}${req.url}`);
  }
  next();
});
// 남은 시간 계산 함수 분리
function getTimeLeft(exp) {
  const currentTime = Math.floor(Date.now() / 1000);
  const timeLeft = exp - currentTime;
  if (timeLeft <= 0) return "만료됨";
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  return `${hours}시간 ${minutes}분 ${seconds}초 남음`;
}
app.use((req, res, next) => {
  const accessToken = req.cookies.accessToken;
  const refreshToken = req.cookies.refreshToken;
  next();
});
app.use("/profile", express.static(path.join(__dirname, "profile")));
app.use("/upload", express.static(path.join(__dirname, "upload")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/clubs", express.static(path.join(__dirname, "clubs")));
app.use("/meetings", express.static(path.join(__dirname, "meetings")));
app.use("/backgroundPic", express.static(path.join(__dirname, "backgroundPic")));
//라우터 미들웨어(채팅)
const chatroomsRouter = require("./src/routes/chatroom");
app.use("/clubs/chatrooms", chatroomsRouter);
//라우터 미들웨어(채팅이미지)
const chatimageRouter = require("./src/routes/chatimage");
app.use("/clubs/chatimage", chatimageRouter);
require("./src/routes/message")(io);
const boardsRouter = require("./src/routes/boards");
app.use("/clubs/boards", boardsRouter);
const galleriesRouter = require("./src/routes/galleries");
app.use("/clubs/gallery", galleriesRouter);
const clubsRouter = require("./src/routes/clubs");
app.use("/clubs", clubsRouter);
const eventRouter = require("./src/routes/events");
app.use("/events", eventRouter);
const meetingsRouter = require("./src/routes/meetings");
app.use("/meetings", meetingsRouter);
const repliesRouter = require("./src/routes/replies");
app.use("/replies", repliesRouter);
const BoardrepliesRouter = require("./src/routes/repliesBoard");
app.use("/replies/board", BoardrepliesRouter);
const usersRouter = require("./src/routes/users");
app.use("/users", usersRouter);
const userSignsRouter = require("./src/routes/userSigns");
app.use("/userSigns", userSignsRouter);
const kakao = require("./src/routes/kakao");
app.use("/kakao", kakao);
const startServer = async () => {
  try {
    console.log("MongoDB 연결 시도 중...");  // 연결 시도 로그 추가
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("몽고디비 연결 완료");
    server.listen(process.env.PORT, () => {
      console.log(`서버 시작 ${process.env.PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
};
startServer();
app.use(express.static(path.join(__dirname, "../frontend/build/")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/", "index.html"));
});