/*
* @Author: asjmtz
* @Date:   2016-08-06 17:39:00
* @Last Modified by:   asjmtz
* @Last Modified time: 2016-08-06 23:59:12
*/

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { formatTime } from './core'


class Duration extends Component{

	render(){
		let {duration} = this.props
		return (
			<div className="duration">
				{ formatTime(duration) }
			</div>
		)
	}
}

const mapStateToProps = ({duration})=>{
	return {
		duration,
	}
}
export default connect(mapStateToProps)(Duration)