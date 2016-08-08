/*
* @Author: asjmtz
* @Date:   2016-08-06 17:39:00
* @Last Modified by:   asjmtz
* @Last Modified time: 2016-08-06 21:29:07
*/

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { next } from './actions'

class NextBtn extends Component{
	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
		this.props.dispatch(next())
	}

	render(){
		return (
			<div>
				<button onClick={this.handleClick}>next</button>
			</div>
		)
	}
}

export default connect()(NextBtn)