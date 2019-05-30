import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
  render() {
    return <div>SongList</div>;
  }
}

// the 'connect' function returns a function. We set 'SongList' as the input to that function.
export default connect()(SongList);
