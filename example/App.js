import React, { Component } from 'react'
import { Player, PlayBtn, NextBtn, PrevBtn, Track, Duration, CurrentTime, Playlist, Volume } from 'react-lego-player'
import './css/player.scss'

const playlist = [
	{title: 'stars', file:'../music/1.mp3'},
	{title: 'road', file:'../music/2.mp3'},
]
class App extends Component{
	
	render(){
		return (
			<div>
				<h1>Lego Player :)</h1>
				<Player playlist={playlist} mode="random">
					<PrevBtn/>
					<PlayBtn/>
					<NextBtn/>
					<Volume></Volume>
					<Duration></Duration>
					<Track/>
					<CurrentTime></CurrentTime>

					<Playlist></Playlist>
				</Player>	
			</div>
		)
	}
}
export default App