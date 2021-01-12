import React from 'react';
import '../assets/styles/components/Player.scss';

const Player = (props) => {

  return (
    <div>
      <div className='player'>
        <video controls={true}>
          <source src='' type='video/mp4' />
        </video>
      </div>
      <div className='player-back'>
        <button type='button'>
          Regresar
        </button>
      </div>
    </div>
  );
};

export default Player;
