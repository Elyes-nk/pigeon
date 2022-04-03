const authReducer = (state, action) => {
    switch (action.type) {
      case "INIT":
        return {
          user: action.user,
        };
      case "LOGIN":
        return {
          user: action.user,
        };
      case "LOGOUT":
        return {
          user: null,
        }; 
      default:
        return state;
    }
  };
  
  export default authReducer;
  