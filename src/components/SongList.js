import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary" onClick={() => this.props.selectSong(song)}>Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    // console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// This function has this name by convention.
// take the state object, run some computation on the data to make it appear as props
const mapStateToProps = (state) => {
  console.log(state);
  return { songs: state.songs };
}

// the 'connect' function returns a function. We set 'SongList' as the input to that function.
export default connect(mapStateToProps, { selectSong })(SongList);