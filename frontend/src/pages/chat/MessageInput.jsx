import React, { useRef, useState } from "react";
import { Grid, TextField, Button, Box, IconButton, InputAdornment } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Picker from "@emoji-mart/react";
<<<<<<< HEAD
import SendRoundedIcon from "@mui/icons-material/SendRounded";
=======
import SendIcon from "@mui/icons-material/Send";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import TelegramIcon from "@mui/icons-material/Telegram";
import NearMeIcon from "@mui/icons-material/NearMe";
>>>>>>> 1e99f21 (테스트)

const MessageInput = ({ message, setMessage, handleSendMessage, handleKeyPress }) => {
  const [showPicker, setShowPicker] = useState(false);
  const messageInputRef = useRef(null);

  const handleEmojiClick = (emoji) => {
    if (emoji && messageInputRef.current) {
      const start = messageInputRef.current.selectionStart || 0;
      const end = messageInputRef.current.selectionEnd || 0;
      const newMessage = message.slice(0, start) + emoji.native + message.slice(end);
      setMessage(newMessage);

      setTimeout(() => {
        messageInputRef.current.selectionStart = messageInputRef.current.selectionEnd = start + emoji.native.length;
        messageInputRef.current.focus();
      }, 0);

      setShowPicker(false);
    }
  };

  const handleTogglePicker = () => {
    setShowPicker((prev) => !prev);
  };

  return (
    <Grid container sx={{ backgroundColor: "#F0F0F0", padding: 1.5, borderRadius: "0px 0px 10px 10px", borderTop: "1px solid #c1c1c1" }}>
      <Grid item xs={10} sm={11}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="메시지를 입력하세요"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          inputRef={messageInputRef}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton color="primary" onClick={handleTogglePicker}>
<<<<<<< HEAD
                  <EmojiEmotionsIcon sx={{ color: "#dbc7b5", fontSize: 32 }} />
=======
                  <EmojiEmotionsIcon sx={{ color: "grey", fontSize: 32 }} />
>>>>>>> 1e99f21 (테스트)
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
<<<<<<< HEAD
            backgroundColor: "white", // 항상 바탕색은 흰색 유지
            fontSize: "0.9rem", // 글씨 크기 약간 증가
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#6E3C21", // 포커스 시 테두리 색만 변경
              },
            },
          }}
        />

=======
            backgroundColor: "white",

            fontSize: "0.9rem", // 글씨 크기 약간 증가
          }}
        />
>>>>>>> 1e99f21 (테스트)
        {showPicker && (
          <Box sx={{ position: "absolute", bottom: 60 }}>
            <Picker onEmojiSelect={handleEmojiClick} />
          </Box>
        )}
      </Grid>
      <Grid item xs={0} sm={0} sx={{ display: "flex", justifyContent: "flex-end" }}>
        {" "}
        {/* 버튼을 오른쪽으로 붙이기 */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSendMessage}
          sx={{
<<<<<<< HEAD
            backgroundColor: "#dbc7b5",
=======
            backgroundColor: "#7c7c7c",
>>>>>>> 1e99f21 (테스트)
            width: 57,
            height: 57,
            aspectRatio: "0",
            margin: 0,
            "&:hover": {
<<<<<<< HEAD
              backgroundColor: "#a6836f", // 호버 시 버튼 배경 색상
=======
              backgroundColor: "#000000", // 호버 시 버튼 배경 색상
>>>>>>> 1e99f21 (테스트)
              "& .MuiSvgIcon-root": {
                color: "#ffffff", // 호버 시 아이콘 색상
              },
            },
          }}
        >
          <SendRoundedIcon /> {/* 아이콘으로 대체된 부분 */}
        </Button>
      </Grid>
    </Grid>
  );
};

export default MessageInput;
