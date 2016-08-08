/*
* @Author: asjmtz
* @Date:   2016-08-06 17:37:56
* @Last Modified by:   asjmtz
* @Last Modified time: 2016-08-07 14:20:34
*/

import reducers from './reducers'
import { init, addSong } from './actions'
import PlayBtn from './PlayBtn'
import NextBtn from './NextBtn'
import PrevBtn from './PrevBtn'
import Track from './Track'
import Duration from './Duration'
import CurrentTime from './CurrentTime'
import Playlist from './Playlist'
import Volume from './Volume'
import Player from './Player'

export {
	// function
	reducers,
	init,
	addSong,
	
	// Element
	PlayBtn,
	PrevBtn,
	NextBtn,
	Track,
	Duration,
	CurrentTime,
	Playlist,
	Volume,
	Player,
}