import React, { Component } from 'react';
 
class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar">
        <section id="buttons">
          <button id="previous" onClick={this.props.handlePrevClick}>
            <span><ion-icon name="skip-backward"></ion-icon></span> 
          </button>
          <button id="play-pause" onClick={this.props.handleSongClick} >
            <span className={this.props.isPlaying ? "icon ion-md-pause" : "ion-md-play"}></span>
          </button>
          <button id="next" onClick={this.props.handleNextClick} >
            <span className="icon ion-md-skip-forward"></span>
          </button>
         </section>
         <section id="time-control">
            <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
            <input 
             type="range" 
             className="seek-bar" 
             value={(this.props.currentTime / this.props.duration) || 0} 
             max="1" 
             min="0" 
             step="0.01"
             onChange={this.props.handleTimeChange} 
           />   
        </section>
        <section id="volume-control">
          <div><ion-icon name="volume-low"></ion-icon></div>
          <input
          type="range"
          className="seek-bar-bottom"
          value={(this.props.currentVolume)}
          min="0"
          max="1"
          step="0.01"
          onChange={this.props.handleVolumeChange}
         />
          <div><ion-icon name="volume-high"></ion-icon></div>
           {this.props.currentVolume}
      </section>
    </section>
    );
  }
}

export default PlayerBar;