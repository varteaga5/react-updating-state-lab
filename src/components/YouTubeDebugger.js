// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {
    constructor(props) {
        super(props);
        this.state = {   
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            } }
    }

    handleBitClick = (e) => {
        this.setState({
            settings: {
            ...this.state.settings, bitrate: 12 }
            })
    }
    handleResClick = (e) => {
        this.setState({
            settings: {
            ...this.state.settings, video: {
                ...this.state.settings.video,
                resolution: '720p' }
        }})
    }

    render() { 
        return ( 
            <React.Fragment>
            <button onClick={this.handleBitClick} className='bitrate' >bitrate: {this.state.settings.bitrate}</button>
            <button onClick={this.handleResClick} className='resolution'>resolution: {this.state.settings.video.resolution}</button> 
            </React.Fragment>
            );
    }
}
 
export default YouTubeDebugger;