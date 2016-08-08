/*
* @Author: asjmtz
* @Date:   2016-08-06 17:39:00
* @Last Modified by:   asjmtz
* @Last Modified time: 2016-08-07 11:40:57
*/

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { skipTo } from './actions'

class Playlist extends Component{
	constructor(props){
		super(props)
		this.handleChangeSong = this.handleChangeSong.bind(this)
	}
	handleChangeSong(index){
		return (e)=>{
			this.props.dispatch(skipTo(index))
		}
	}
	render(){
		const { playlist, index } = this.props
		return (
			<div className="playlist">
				{
					playlist.map((item, i)=>{
						let className = `playlist-item ${i === index ? 'active': ''}`
						return (
							<div className={className} key={i} onClick={this.handleChangeSong(i)}>
								{item.title}
							</div>
						)
					})
				}
			</div>
		)
	}
}

const mapStateToProps = ({playlist, index})=>{
	return {
		playlist, 
		index,
	}
}
export default connect(mapStateToProps)(Playlist)