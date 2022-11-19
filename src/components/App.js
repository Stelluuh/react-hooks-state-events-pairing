import React from 'react';
import video from "../data/video.js";
import VideoContainer from './VideoContainer'
import CommentsContainer from './CommentsContainer.js';

function App() {
  

  return (
    <div className="App">
      <VideoContainer video={video}/>
      <CommentsContainer />
    </div>
  );
}

export default App;
