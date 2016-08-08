/*
* @Author: asjmtz
* @Date:   2016-08-06 17:39:00
* @Last Modified by:   asjmtz
* @Last Modified time: 2016-08-06 21:29:17
*/

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { next, prev } from './actions'

class PrevBtn extends Component{
	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
		this.props.dispatch(prev())
	}

	render(){
		return (
			<div>
				<button onClick={this.handleClick}>prev</button>
			</div>
		)
	}
}

export default connect()(PrevBtn)