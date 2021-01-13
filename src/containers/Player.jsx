import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import NotFound from '../components/NotFound';
import '../assets/styles/containers/Player.scss';

const Player = (props) => {
  const { playing, match } = props;
  console.log('playing', playing);
  const { id } = match.params;

  const hasPlaying = Object.keys(playing).length > 0;

  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div>
      <div className='Player'>
        <video controls={true}>
          <source src={playing.source} type='video/mp4' />
        </video>
      </div>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
