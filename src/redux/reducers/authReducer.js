const initialState = {
  user : null,
  error : false,
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "INIT":
        return {
          user: action.user,
          error: false
        };
      case "LOGIN":
        return {
          user: action.user,
          error: false
        };
      case "LOGIN_FAILURE":
        return {
            user: null,
            error: true
        };
      case "REGISTER":
        return {
          user: action.user,
          error: false
        };
      case "LOGOUT":
        return {
          user: null,
          error: false
        }; 
      default:
        return state;
    }
  };
  
  export default authReducer;
  