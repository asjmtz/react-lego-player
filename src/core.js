/*
* @Author: asjmtz
* @Date:   2016-08-06 16:13:04
* @Last Modified by:   asjmtz
* @Last Modified time: 2016-08-07 11:07:06
*/

import {Howl} from 'howler'

/**
 * Player class handles audio player's user interaction,
 * includes play, pause, volume, playlist, jump track, etc.
 * @param {Object} opts Shape of { playlist, index, volume }
 *                      {Array} playlist Array of { title, file }
 *                      {Number} index The index of active song in playlist
 *                      {Number} volume Volume of player, ranging from 0 to 1 
 *                      {String} mode The playing mode of player, including 'single' 'order' and 'random' 
 */
export default class Player {
	constructor({
		playlist=[], 
		index=0, 
		volume=1, 
		mode='single', 
		onload=()=>{}, 
		onend=()=>{}, 
		onplay=()=>{},
	} = {}){
		
		// player properties
		this.playlist = playlist
		this.index = index
		this.volume = volume
		this.duration = ''
		this.onplay = onplay
		this.onload = onload
		this.onend = onend

		this.changeMode(mode)

		this.playing = false;
		this.loading = false;
	}

	/**
	 * Play a song in playing accorind to index
	 * @param  {[type]} index Defaultly play the current index of song in playlist
	 */
	play(index){

		index = this.playlist[index] ? index : this.index
		let song = this.playlist[index]
		let sound

		if ( song.howl ) {
			sound = song.howl
		} else {
			sound = song.howl = new Howl({
				src: song.file,
				html5: true,
				onplay: () => {

					// set duration of playing song
					this.setDuration(sound.duration())

					// updating progress of song track
					// this.updateTrackProgress()
					this.playing = true;
					this.onplay()
				},
				onload: () => {
					this.onload()
					
					this.loading = false;
				},
				onend: () => {
					this.onend()

					// play next song according to the playing mode of player
					this.next()
				},
				onpause: () => {
					this.playing = false;
				}

			})
		}

		// if player is playing, stop the current track
		// this.playlist && this.playlist[this.index].howl && this.playlist[this.index].howl.stop()

		sound.play()
		this.loading = true;
		this.index = index;

	}

	pause(){
		let sound = this.playlist[ this.index ].howl
		sound.pause()
	}

	next(){
		const getNextIndex = {
			single: ()=>{
				return this.index
			},
			order: ()=>{
				return this.index + 1 >= this.playlist.length ? 0 : this.index + 1
			},
			random: ()=>{
				return Math.floor(this.playlist.length * Math.random())
			},
		}
		const nextIndex = getNextIndex[ this.mode ]()
		this.skipTo( nextIndex )

	}

	prev(){
		const getPrevIndex = {
			single: ()=>{
				return this.index
			},
			order: ()=>{
				return this.index > 0 ? this.index - 1 : this.playlist.length - 1
			},
			random: ()=>{
				return this.playlist.length * Math.floor(Math.random())
			},
		}
		const prevIndex = getPrevIndex[ this.mode ]()
		this.skipTo( prevIndex )

	}

	skipTo(index){
		if(this.playlist[this.index].howl){
			this.playlist[this.index].howl.stop()
			this.playlist[this.index].howl.seek(0)
		}

		this.play(index)
	}

	/**
	 * Add songs to playlist , and decide whether to play the new song
	 * @param {[type]}  playlist [description]
	 * @param {Boolean} isPlay   [description]
	 */
	addPlaylist(playlist, isPlayNew=false){
		if ( Array.isArray(playlist) && playlist.length ) {
			this.playlist = [ ...this.playlist, ...playlist]
			if ( isPlayNew ) {
				this.skipTo(this.playlist.length - playlist.length)
			}
		}
	}
	
	updateTrackProgress(){

		// this.
		// requestAnimationFrame(this.updateTrackProgress.bind(this))
	}

	/**
	 * Set the volume of player 
	 * @param {Number} volume 
	 */
	setVolume(volume){
		this.playlist[this.index].howl.volume(volume)
		this.volume = volume
	}

	/**
	 * Set the duration of currently playing song 
	 * @param {Number} duration 
	 */
	setDuration(duration){
		this.duration = duration
	}


	/**
	 * Get duration
	 */
	getDuration(){

	}

	/**
	 * Jump to new position of track
	 * @param  {Number} per Range from 0 to 1
	 */
	jumpTrack(per){
		let sound = this.playlist[this.index].howl
		if ( sound ) {
			sound.seek( this.duration * per )
		}
	}

	/**
	 * 
	 */
	 getCurrentTime(){
	 	let sound = this.playlist[this.index] && this.playlist[this.index].howl
		// console.log('get currentTime', sound, sound ? sound.seek() : 0)
		if ( sound && sound.playing() ) {
	 		return sound ? sound.seek() : 0
		}
	 }


	/**
	 * [changeMode description]
	 * @return {[type]} [description]
	 */
	changeMode(mode){
		this.mode = ['single', 'order', 'random'].indexOf(mode) >= 0 ? mode : 'single'
	}

}

/**
 * Format time from second to hh:mm:ss, if hour is 0, return mm:ss
 * @return {[type]} [description]
 */
export function formatTime(sec){
	const fixZero = (val) => val < 10 ? '0'+val : val
	let hour = Math.floor( sec / 3600 ) || 0
	let minute = Math.floor( sec % 3600 / 60 ) || 0
	let second = Math.round( sec - hour * 3600 - minute * 60) || 0
	
	return hour ? `${hour}:${fixZero(minute)}:${fixZero(second)}` : 
			`${fixZero(minute)}:${fixZero(second)}`
}

