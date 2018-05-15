import axios from "axios";

const initialState = {
  username: "",
  id: 0,
  profilepic: ""
};

const HANDLE_USER = "HANDLE_USER";

export function handleUser(username, id, profilepic) {
  return {
    type: HANDLE_USER,
    payload: { username, id, profilepic }
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case HANDLE_USER:
      return Object.assign({}, state, {
        username: action.payload.username,
        id: action.payload.id,
        profilepic: action.payload.profilepic
      });

    default:
      return state;
  }
}
