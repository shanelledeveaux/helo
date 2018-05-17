import axios from "axios";

const initialState = {
  username: "",
  id: 0,
  profilepic: ""
};

const HANDLE_USER = "HANDLE_USER";

export function handleUser(id, username, profilepic) {
  return {
    type: HANDLE_USER,
    payload: { id, username, profilepic }
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case HANDLE_USER:
      return Object.assign({}, state, {
        id: action.payload.id,
        username: action.payload.username,
        profilepic: action.payload.profilepic
      });

    default:
      return state;
  }
}
