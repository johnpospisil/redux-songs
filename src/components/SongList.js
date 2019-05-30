import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
  render() {
    console.log(this.props);
    return <div>SongList</div>;
  }
}

// This function has this name by convention.
// take the state object, run some computation on the data to make it appear as props
const mapStateToProps = (state) => {
  // console.log(state);
  return { songs: state.songs };
}

// the 'connect' function returns a function. We set 'SongList' as the input to that function.
export default connect(mapStateToProps)(SongList);