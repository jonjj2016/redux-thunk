 const postReducer = (state = [], action = {}) => {

     switch (action.type) {
         case "FETCH_POSTS":
             return action.payload
             break;

         default:
             return state
             break;
     }

 }
 export default postReducer