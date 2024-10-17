import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios";

// AsyncThunk 정의
const fetchClubList = createAsyncThunk("clubList/fetchClubList", async () => {
<<<<<<< HEAD
  const response = await fetch("http://localhost:4000/clubs");
=======
  const response = await fetch("http://3.133.122.248:4000/clubs");
>>>>>>> 1e99f21 (테스트)
  const data = await response.json();
  return data;
});

const fetchGetClub = createAsyncThunk("clubList/fetchGetClub", async (id) => {
<<<<<<< HEAD
  const response = await fetch(`http://localhost:4000/clubs/read2/${id}`);
=======
  const response = await fetch(`http://3.133.122.248:4000/clubs/read2/${id}`);
>>>>>>> 1e99f21 (테스트)
  const data = await response.json();
  return data;
});

const fetchGetClubMember = createAsyncThunk("clubs/fetchGetClubMember", async (clubMembers) => {
<<<<<<< HEAD
  const response = await axiosInstance.post(`http://localhost:4000/clubs/membersInfo`, clubMembers);
=======
  const response = await axiosInstance.post(`http://3.133.122.248:4000/clubs/membersInfo`, clubMembers);
>>>>>>> 1e99f21 (테스트)
  const data = await response.data;
  return data;
});

const fetchMeetingList = createAsyncThunk("meetingList/fetchMeetingList", async (clubNumber) => {
<<<<<<< HEAD
  const response = await fetch(`http://localhost:4000/meetings/${clubNumber}`);
=======
  const response = await fetch(`http://3.133.122.248:4000/meetings/${clubNumber}`);
>>>>>>> 1e99f21 (테스트)
  const data = await response.json();
  return data;
});

const fetchCategoryClubList = createAsyncThunk("CategoryClubList/fetchCategoryClubList", async (Category) => {
<<<<<<< HEAD
  const response = await fetch(`http://localhost:4000/clubs/category/${Category}`);
=======
  const response = await fetch(`http://3.133.122.248:4000/clubs/category/${Category}`);
>>>>>>> 1e99f21 (테스트)
  const data = await response.json();
  return data;
});

// Slice 정의
//클럽 리스트 가져오기
const clubList = createSlice({
  name: "clubList",
  initialState: { clubs: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClubList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchClubList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.clubs = action.payload;
      })
      .addCase(fetchClubList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

//클럽 하나 정보 가져오기
const getClub = createSlice({
  name: "getClub",
  initialState: { clubs: {}, status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetClub.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGetClub.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.clubs = action.payload;
      })
      .addCase(fetchGetClub.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

//클럽에 관련된 멤버들 정보 가져오기
const getClubMember = createSlice({
  name: "getClubMember",
  initialState: { getClubMembers: {}, status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetClubMember.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGetClubMember.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.getClubMembers = action.payload;
      })
      .addCase(fetchGetClubMember.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// 정모 리스트 가져오기
const meetingList = createSlice({
  name: "meetingList",
  initialState: { meetings: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeetingList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMeetingList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.meetings = action.payload;
      })
      .addCase(fetchMeetingList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

//카테고리 리스트 가져오기
const categoryClubList = createSlice({
  name: "categoryClubList",
  initialState: { clubs: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryClubList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategoryClubList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.clubs = action.payload;
      })
      .addCase(fetchCategoryClubList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// 리듀서 export
export const clubListReducer = clubList.reducer;
export const categoryClubListReducer = categoryClubList.reducer;
export const meetingListReducer = meetingList.reducer;
export const getClubReducer = getClub.reducer;
export const getClubMemberReducer = getClubMember.reducer;
export { fetchClubList, fetchGetClub, fetchMeetingList, fetchCategoryClubList, fetchGetClubMember };
