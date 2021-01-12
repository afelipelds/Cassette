import React from 'react';
import '../assets/styles/containers/Player.scss';

const Player = (props) => {

  return (
    <div>
      <div className='Player'>
        <video controls={true}>
          <source src='' type='video/mp4' />
        </video>
      </div>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  );
};

export default Player;
