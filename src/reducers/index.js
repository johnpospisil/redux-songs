const songReducer = () => {
  return [
    { title: 'Jump', duration: '4:05' },
    { title: 'All Star', duration: '2:35' },
    { title: 'Chicken Wing', duration: '4:05' },
    { title: 'The Artichoke Stomp', duration: '3:02' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};