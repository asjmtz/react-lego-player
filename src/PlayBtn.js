/*
* @Author: asjmtz
* @Date:   2016-08-06 17:39:00
* @Last Modified by:   asjmtz
* @Last Modified time: 2016-08-06 19:01:57
*/

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { play, pause } from './actions'

class PlayBtn extends Component{
	constructor(props){
		super(props)
		this.handlePause = this.handlePause.bind(this)
		this.handlePlay = this.handlePlay.bind(this)
	}

	handlePlay(){
		this.props.dispatch(play())
	}

	handlePause(){
		this.props.dispatch(pause())
	}

	render(){
		return (
			<div>
				{
					this.props.playing ? 
					<button onClick={this.handlePause}>pause</button> :
					<button onClick={this.handlePlay}>play</button>
				}
			</div>
		)
	}
}

const mapStateToProps = ({playing})=>{
	return {
		playing,
	}
}
export default connect(mapStateToProps)(PlayBtn)