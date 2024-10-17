import axiosInstance from "../utils/axios";

// 회원 여부 확인 API 호출
export const checkMembership = async (clubNumber, author) => {
  try {
<<<<<<< HEAD
    const response = await axiosInstance.get("http://localhost:4000/clubs/boards/membership", {
=======
    const response = await axiosInstance.get("http://3.133.122.248:4000/clubs/boards/membership", {
>>>>>>> 1e99f21 (테스트)
      params: { clubNumber, email: author },
    });
    return response.data.isMember;
  } catch (error) {
    console.error("회원 여부 확인 오류:", error);
    throw error;
  }
};

// 게시글 저장 API 호출
export const savePost = async (data) => {
  try {
<<<<<<< HEAD
    await axiosInstance.post("http://localhost:4000/clubs/boards/posts", data);
=======
    await axiosInstance.post("http://3.133.122.248:4000/clubs/boards/posts", data);
>>>>>>> 1e99f21 (테스트)
  } catch (error) {
    console.error("게시글 저장 오류:", error);
    throw error;
  }
};

// 투표 저장 API 호출
export const saveVote = async (data) => {
  try {
<<<<<<< HEAD
    await axiosInstance.post("http://localhost:4000/clubs/boards/votes", data);
=======
    await axiosInstance.post("http://3.133.122.248:4000/clubs/boards/votes", data);
>>>>>>> 1e99f21 (테스트)
  } catch (error) {
    console.error("투표 저장 오류:", error);
    throw error;
  }
};

// 게시물 목록을 가져오는 API 호출 (페이징 처리 전 )
// export const fetchPosts = async (clubNumber, page = 1) => {
//   try {
<<<<<<< HEAD
//     const response = await axiosInstance.get('http://localhost:4000/clubs/boards/all', {
=======
//     const response = await axiosInstance.get('http://3.133.122.248:4000/clubs/boards/all', {
>>>>>>> 1e99f21 (테스트)
//       params: { clubNumber, page, limit: 12 } // 페이지와 limit을 쿼리로 전달
//     });
//     return response.data;
//   } catch (error) {
//     console.error('게시물 목록 조회 오류:', error);
//     throw error;
//   }
// };

// 게시물 목록을 가져오는 API 호출 (페이징 처리 후 )
export const fetchPosts = async (clubNumber, page = 1, limit = 12, category = "") => {
  try {
<<<<<<< HEAD
    const response = await axiosInstance.get("http://localhost:4000/clubs/boards/all", {
=======
    const response = await axiosInstance.get("http://3.133.122.248:4000/clubs/boards/all", {
>>>>>>> 1e99f21 (테스트)
      params: { clubNumber, page, limit, category },
    });

    const { boards, totalBoards, totalPages } = response.data;

    if (!boards || typeof totalBoards !== "number" || typeof totalPages !== "number") {
      throw new Error("Invalid response data");
    }

    return { boards, totalBoards, totalPages };
  } catch (error) {
    console.error("게시물 목록 조회 오류:", error);
    throw error;
  }
};

// 게시물 조회
export const fetchPost = async (postId) => {
  try {
<<<<<<< HEAD
    const response = await axiosInstance.get(`http://localhost:4000/clubs/boards/posts/${postId}`);
=======
    const response = await axiosInstance.get(`http://3.133.122.248:4000/clubs/boards/posts/${postId}`);
>>>>>>> 1e99f21 (테스트)
    return response.data;
  } catch (error) {
    console.error("게시물 조회 오류:", error);
    throw error;
  }
};

// 게시물 삭제
export const deletePost = async (postId) => {
  try {
<<<<<<< HEAD
    await axiosInstance.delete(`http://localhost:4000/clubs/boards/posts/${postId}`);
=======
    await axiosInstance.delete(`http://3.133.122.248:4000/clubs/boards/posts/${postId}`);
>>>>>>> 1e99f21 (테스트)
  } catch (error) {
    console.error("게시물 삭제 오류:", error);
    throw error;
  }
};

// 게시물 업데이트
export const updatePost = async (postId, postData) => {
  try {
<<<<<<< HEAD
    await axiosInstance.put(`http://localhost:4000/clubs/boards/posts/${postId}`, postData);
=======
    await axiosInstance.put(`http://3.133.122.248:4000/clubs/boards/posts/${postId}`, postData);
>>>>>>> 1e99f21 (테스트)
  } catch (error) {
    console.error("게시물 업데이트 오류:", error);
    throw error;
  }
};

// 투표 정보 가져오기
export const fetchVote = async (voteId) => {
  try {
    const response = await axiosInstance.get(`/clubs/boards/votes/${voteId}`);
    return response.data;
  } catch (error) {
    console.error("투표 정보를 가져오는 중 오류 발생:", error);
    throw error;
  }
};

// 투표 요약 정보 가져오기
export const fetchVoteSummary = async (voteId) => {
  try {
    const response = await axiosInstance.get(`/clubs/boards/votes/${voteId}/summary`);
    return response.data;
  } catch (error) {
    console.error("투표 요약 정보를 가져오는 중 오류 발생:", error);
    throw error;
  }
};

// 투표하기
export const voteForOption = async (voteId, option, email) => {
  try {
    await axiosInstance.post(`/clubs/boards/votes/${voteId}/vote`, { option, email });
  } catch (error) {
    console.error("투표하기 중 오류 발생:", error);
    throw error;
  }
};

// 투표 취소하기
export const removeVote = async (voteId, option, email) => {
  try {
    await axiosInstance.put(`/clubs/boards/votes/${voteId}`, { option, email });
  } catch (error) {
    console.error("투표 취소 중 오류 발생:", error);
    throw error;
  }
};

// 투표 삭제하기
export const deleteVote = async (voteId) => {
  try {
    await axiosInstance.delete(`/clubs/boards/votes/${voteId}`);
  } catch (error) {
    console.error("투표 삭제 중 오류 발생:", error);
    throw error;
  }
};
