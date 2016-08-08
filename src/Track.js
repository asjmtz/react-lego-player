/*
* @Author: asjmtz
* @Date:   2016-08-06 17:39:00
* @Last Modified by:   asjmtz
* @Last Modified time: 2016-08-06 23:55:22
*/

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { jumpTrack } from './actions'


class Track extends Component{
	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e){
		let trackBar = this.refs.trackBar.getBoundingClientRect()
		let left = trackBar.left
		let width = trackBar.width

		let per = ( e.clientX - left ) / width


		// console.log('jump', e.clientX, e.pageX, e.clientX - offsetLeft)
		this.props.dispatch(jumpTrack(per))
	}

	render(){
		let {duration, currentTime} = this.props
		let per = duration ? currentTime/duration * 100 : 0 
		return (
			<div className="track">
				<div className="track-bar" ref='trackBar' onMouseDown={this.handleClick}>
					<div className="track-progress-bar" style={{width: per+'%'}}></div>	
					<div className="track-cache"></div>	
				</div>
				<div className="track-circle" style={{left: per+'%'}}></div>	
			</div>
		)
	}
}

const mapStateToProps = ({duration, currentTime})=>{
	return {
		duration,
		currentTime,
	}
}
export default connect(mapStateToProps)(Track)