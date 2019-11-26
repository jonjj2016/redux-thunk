import {
    combineReducers
} from 'redux'
import postReducer from './postReducer.reducer'
import usersReducer from './usersReducer'
export default combineReducers({
    posts: postReducer,
    user: usersReducer

})