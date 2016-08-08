/*
* @Author: asjmtz
* @Date:   2016-08-06 17:39:00
* @Last Modified by:   asjmtz
* @Last Modified time: 2016-08-07 21:11:59
*/

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { setVolume } from './actions'

class Volume extends Component{
	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e){
		let bar = this.refs.bar.getBoundingClientRect()
		let left = bar.left
		let width = bar.width

		let per = ( e.clientX - left ) / width

		this.props.dispatch(setVolume(per))
	}

	render(){
		const volume = this.props.volume
		return (
			<div className="volume">
				<div className="volume-bar" ref="bar" onClick={this.handleClick}>
					<div className="volume-progress-bar" style={{width: volume+'%'}}></div>
				</div>
				<div className="volume-circle" style={{left: volume+'%'}}></div>
			</div>
		)
	}
}

const mapStateToProps = ({volume})=>{
	return {
		volume: volume*100,
	}
}
export default connect(mapStateToProps)(Volume)