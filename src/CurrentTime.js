/*
* @Author: asjmtz
* @Date:   2016-08-06 17:39:00
* @Last Modified by:   asjmtz
* @Last Modified time: 2016-08-06 23:59:02
*/

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { formatTime } from './core'

class CurrentTime extends Component{

	render(){
		let {currentTime} = this.props
		return (
			<div className="current-time">
				{ formatTime(currentTime) }
			</div>
		)
	}
}

const mapStateToProps = ({currentTime})=>{
	return {
		currentTime,
	}
}
export default connect(mapStateToProps)(CurrentTime)