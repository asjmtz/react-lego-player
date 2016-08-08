/*
* @Author: asjmtz
* @Date:   2016-08-06 17:49:38
* @Last Modified by:   asjmtz
* @Last Modified time: 2016-08-07 11:39:30
*/
import Player from './core'

const INIT = 'player.init'
const ADD_SONG = 'player.addSong'
const PLAY = 'player.play'
const PAUSE = 'player.pause'
const NEXT = 'player.next'
const PREV = 'player.prev'
const SKIP_TO = 'player.skipTo'
const SET_VOLUME = 'player.setVolume'
const JUMP_TRACK = 'player.jumpTrack'
const LOADED = 'player.loaded'
const SET_PROPS = 'player.setProps'
const SET_CURRENT_TIME = 'player.setCurrentTime'

export const ACTION = { INIT, ADD_SONG, PLAY, PAUSE, NEXT, PREV, SKIP_TO, SET_VOLUME, JUMP_TRACK, LOADED, SET_PROPS, SET_CURRENT_TIME }

var player

const updateTrack = ()=>{

	return (dispatch) => {

		const currentTime = player.getCurrentTime.apply(player)
		if ( typeof currentTime === 'number' ) {
			dispatch({
				type: SET_CURRENT_TIME,
				currentTime,
			})

		}

		if ( player && player.playing ) {
			requestAnimationFrame(() => {
				dispatch( updateTrack() )
			})
		}

	}

}

export const init = (opts) => {
	return (dispatch) => {
		player = new Player({ 
			...opts,
			onload: ()=>{
				dispatch(loaded())		
			} ,
			onplay: ()=>{
				dispatch( setProps({playing: true, duration: player.duration}) )
				dispatch( updateTrack() )
			},
			onend: ()=>{
				dispatch( setProps({playing: false}) )
			}
		})

		dispatch( {
			type: INIT,
			...opts,
		})
	}

}

export const addSong = (playlist, isPlay) => {
	player.addSong(playlist, isPlay)
	return {
		type: ADD_SONG,
		playlist,
		index: player.index,
	}
}

const loaded = ( ) => {
	return {
		type: LOADED,
		loading: false,
	}
}

export const play = (index) => {
	if( player ){

		player.play(index)
		return {
			type: PLAY,
			index: player.index,
			playing: true,
			loading: false,
		}
	} 
	return {
		type: 'NULL',
	}
}

export const pause = (index) => {
	if ( player) {
		player.pause()
		return {
			type: PAUSE,
			playing: false
		}
	} 
	return {}
}

export const next = () => {
	player.next()
	return {
		type: NEXT,
		index: player.index,
	}
}
export const prev = () => {
	player.prev()
	return {
		type: PREV,
		index: player.index,
	}
}

export const skipTo = (index) => {
	player.skipTo(index)
	return {
		type: SKIP_TO,
		index: player.index,
	}
}

export const setVolume = (volume) => {
	player.setVolume(volume)
	return {
		type: SET_VOLUME,
		volume,
	}
}
export const jumpTrack = (per) => {
	player.jumpTrack(per)
	return {
		type: JUMP_TRACK,

	}
}

const setProps = (props) => {
	return {
		type: SET_PROPS,
		...props
	}
}


