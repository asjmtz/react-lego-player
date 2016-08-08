/*
* @Author: asjmtz
* @Date:   2016-08-06 17:39:00
* @Last Modified by:   asjmtz
* @Last Modified time: 2016-08-07 11:29:55
*/

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { init } from './actions'

class Player extends Component{
	constructor(props){
		super(props)
	}

	componentDidMount(){
		const { dispatch, playlist, mode, volume } = this.props
		this.props.dispatch(init({
			playlist,
			mode,
			volume
		}))
	}


	render(){
		return (
			<div className="player">
				{this.props.children}
			</div>
		)
	}
}

Player.propTypes = {
	playlist: PropTypes.array,
	mode: PropTypes.oneOf(['single', 'random', 'order']),
	volume: PropTypes.number,
}
Player.defaultProps = {
	volume: 0.5,
	mode: 'order',
	playlist: [],
}
export default connect()(Player)