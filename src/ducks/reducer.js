import axios from "axios";

const initialState = {
  username: "",
  password: ""
};

const NEW_USERNAME = "NEW_USERNAME";
const NEW_PASSWORD = "NEW_PASSOWORD";

function reducer(state = initialState, action) {
  switch (action.type) {
    case NEW_USERNAME:
      return Object.assign({}, state, { username: action.payload });

    case NEW_PASSWORD:
      return Object.assign({}, state, { password: action.payload });

    default:
      return state;
  }
}

export default reducer;

export function registerUser(name) {
  return;
}
