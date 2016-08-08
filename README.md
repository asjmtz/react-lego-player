# react-lego-player

A super simple and flexible React music player.


## Features

- Full functionality for music player, including play/pause, play mode, volume, playlist, track, duration, etc.
- High flexibility to customize player view and theme


## Dependencies

- [react](https://github.com/facebook/react)
- [redux](https://github.com/reactjs/redux)
- [react-redux](https://github.com/reactjs/react-redux)
- [Howler.js](https://github.com/goldfire/howler.js)

## Live Demos

WOP..

## Quick Start


### Step 1 - Install

```
 npm install --save react-lego-player
```

### Step 2 - Insert player/reduers to redux

```
import {createStore, combineReducers} from 'redux';
import {reducer as playerReducer} from 'redux-lego-player';
const reducers = {
  // ... your other reducers here ...
  player: playerReducer     
}
const reducer = combineReducers(reducers);
const store = createStore(reducer);

```

### Step 3 - DIY your player

```
import { Player, PlayBtn, NextBtn, PrevBtn, Track, Duration, CurrentTime, Playlist, Volume } from './Player'
import './custom-player.css'

const playlist = [
	{title: 'stars', file:'../music/1.mp3'},
	{title: 'road', file:'http://xxxx.mp3'},
]
class MyPlayer extends Component{
	
	render(){
		return (
			<div>
				<h1>Lego Player</h1>
				<Player playlist={playlist} mode="random" volume={0.5}>
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


```
That's all!! You have already built an awesome music player