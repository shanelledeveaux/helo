import axios from "axios";

const initialState = {
  username: "",
  id: 0,
  profilepic: ""

  // posts: []
};

const HANDLE_USER = "HANDLE_USER";
// const GET_ALL_POSTS = "GET_ALL_POSTS";

export function handleUser(id, username, profilepic) {
  return {
    type: HANDLE_USER,
    payload: { id, username, profilepic }
  };
}

// export function getAllPosts(id, userposts, string) {
//   return {
//     type: GET_ALL_POSTS,
//     payload: axios.get(`/api/posts/${id}`, { userposts, string })
//   };
// }

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case HANDLE_USER:
      return Object.assign({}, state, {
        id: action.payload.id,
        username: action.payload.username,
        profilepic: action.payload.profilepic
      });

    // case GET_ALL_POSTS:
    //   return Object.assign({}, state, {
    //     posts: action.payload.data
    //   });

    default:
      return state;
  }
}
