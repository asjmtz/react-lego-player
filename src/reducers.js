/*
* @Author: zhangtuzi
* @Date:   2016-08-06 14:27:00
* @Last Modified by:   asjmtz
* @Last Modified time: 2016-08-07 11:39:53
*/

import {ACTION} from './actions'

const defaultState = {
	playlist: [] ,
	index: 0,
	volume: 1,
	mode: 'single',
	duration: 0,
	currentTime: 0,
	
}

const reducers = {
	[ACTION.INIT]: (state, actionBody)=>{
		return actionBody
	},
	[ACTION.ADD_SONG]: (state, {playlist, isPlay}) => {
		playlist = Array.isArray( playlist ) ? playlist : []

		return {
			playlist: [ ...state.playlist, ...playlist],
		}
	},
	[ACTION.DEL_SONG]: (state, {index}) => {
		// const playlist = state.playlist.filter((item, itemIndex)=>{
		// 	return itemIndex !== index
		// })
		return {
			playlist
		}
	},
	[ACTION.LOADED]: (state, {loading, duration})=>{
		return {
			loading,
			duration,
		}
	},
	[ACTION.PLAY]: (state, {index, playing, loading}) => {
		return {
			index,
			playing,
			loading,
		}
	},
	[ACTION.PAUSE]: (state, {playing}) => {
		return{
			playing,
		}
	},
	[ACTION.NEXT]: (state, {index}) => {
		return{
			index,
		}
	},
	[ACTION.PREV]: (state, {index}) => {
		return {
			index,
		}
	},
	[ACTION.SKIP_TO]: (state, {index}) => {
		return {
			index,
		}
	},
	[ACTION.SET_VOLUME]: (state, {volume}) => {
		return{
			volume,
		}
	},
	[ACTION.JUMP_TRACK]: (state, action) => {},
	[ACTION.SET_PROPS]: (state, action) => {
		return{
			playing: action.playing,
			duration: action.duration,
		}
	},
	[ACTION.SET_CURRENT_TIME]: (state, {currentTime}) => {
		return{
			currentTime,
		}
	}
}

const combineReducers = (reducers) => {
	return (state, action) => {

		// action expects action.type
		let actionBody = {}
		Object.keys(action).forEach((key)=>{
			key !== 'type' && (actionBody[key] = action[key])
		})
		let newState = typeof reducers[ action.type ] === 'function' ?  
			reducers[ action.type ](state, actionBody) : {}
		return {
			...defaultState,
			...state,
			...newState,
		}	
	}
}


export default combineReducers(reducers)