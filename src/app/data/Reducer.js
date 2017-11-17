import { combineReducers } from 'redux'
import postReducer from './posts/PostReducer.js'

export default combineReducers({ posts: postReducer })
