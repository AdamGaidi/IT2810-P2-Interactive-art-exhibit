import React, { Component } from 'react';

const PlayButton = ({src}) => {
  return (
    <audio controls autoPlay loop preload='auto'> 
      <source src={src}/>
      This text displays if the audio tag isn't supported.
    </audio>
  )
}
// class PlayButton extends Component {
//   render() {
//     return (
//       <div className="App">
//         <audio controls autoPlay loop preload='auto'> 
//             <source src='http://localhost:3000/media/sound/scary/4.mp3'/>
//             This text displays if the audio tag isn't supported.
//         </audio>
//       </div>
//     );
// }
// }

export default PlayButton;
