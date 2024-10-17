<<<<<<< HEAD
import React, { useState } from "react";
import { Grid, Typography, IconButton } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import SearchIcon from "@mui/icons-material/Search";

const ChatHeader = ({ title, onFileUpload, setShowSearchInput }) => {
=======
import React from "react";
import { Grid, Typography, IconButton } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const ChatHeader = ({ title, onFileUpload }) => {
>>>>>>> 1e99f21 (테스트)
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    if (onFileUpload) {
      onFileUpload(files); // 파일 업로드 핸들러 호출
    }
  };

<<<<<<< HEAD
  const toggleSearchInput = () => {
    setShowSearchInput((prev) => !prev);
  };

=======
>>>>>>> 1e99f21 (테스트)
  // 조건에 따라 제목을 잘라내는 함수
  const truncatedTitle = title.length > 16 ? `${title.slice(0, 16)}...` : title;

  return (
<<<<<<< HEAD
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      sx={{
        margin: 0,
        backgroundColor: "#D5D3CB",
        padding: 2,
        borderBottom: "1px solid #202020",
        borderRadius: "10px 10px 0px 0px",
      }}
    >
      {/* 채팅방 이름 (왼쪽) */}
      <Grid item sx={{ flexGrow: 1 }}>
=======
    <Grid container alignItems="center" justifyContent="space-between" sx={{ margin: 0, backgroundColor: "#a67153", padding: 2, borderBottom: "1px solid #c1c1c1", borderRadius: "10px 10px 0px 0px" }}>
      <Grid item>
>>>>>>> 1e99f21 (테스트)
        <Typography
          variant="h3"
          sx={{
            textAlign: "left",
            fontSize: 38,
<<<<<<< HEAD
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontFamily: "KCC-Hanbit",
            color: "#202020",
=======
            whiteSpace: "nowrap", // 텍스트가 한 줄로 유지되게 함
            overflow: "hidden", // 넘치는 부분을 숨김
            textOverflow: "ellipsis", // 넘치는 부분에 `...` 표시
            fontFamily: "KCC-Hanbit", // 폰트 지정
            color: "black",
>>>>>>> 1e99f21 (테스트)
          }}
        >
          {truncatedTitle ? `${truncatedTitle}` : "채팅방"}
        </Typography>
      </Grid>
<<<<<<< HEAD

      <Grid item>
        <IconButton color="primary" aria-label="search" component="span" onClick={toggleSearchInput}>
          <SearchIcon sx={{ color: "#30231c", fontSize: 40 }} />
        </IconButton>
      </Grid>

      {/* 아이콘 간격 추가 */}
      <Grid item sx={{ marginLeft: 1 }}>
        {" "}
        {/* 검색 아이콘과 사진 아이콘 사이 간격 */}
        <input type="file" multiple onChange={handleFileChange} style={{ display: "none" }} id="file-upload" />
        <label htmlFor="file-upload">
          <IconButton color="primary" aria-label="add" component="span">
            <PhotoCameraIcon sx={{ color: "#30231c", fontSize: 40 }} />
=======
      <Grid item>
        <input type="file" multiple onChange={handleFileChange} style={{ display: "none" }} id="file-upload" />
        <label htmlFor="file-upload">
          <IconButton color="primary" aria-label="add" component="span">
            <PhotoCameraIcon sx={{ color: "black", fontSize: 40 }} />
>>>>>>> 1e99f21 (테스트)
          </IconButton>
        </label>
      </Grid>
    </Grid>
  );
};

export default ChatHeader;
