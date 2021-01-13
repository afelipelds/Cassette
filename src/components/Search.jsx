import React from 'react';
import { connect } from 'react-redux';
import { searchVideo } from '../actions';
import '../assets/styles/components/Search.scss';

const Search = (props) => {
  const { searchVideo } = props;

  const handleInput = (event) => searchVideo(event.target.value);

  return (
    <section className='Main'>
      <div className='Main__container'>
        <h2 className='Main__container__title'>¿Qué quieres ver hoy?</h2>
        <input
          className='Main__container__input'
          type='text'
          name='searchVideo'
          id='searchVideo'
          placeholder='Buscar'
          onChange={handleInput}
        />
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  searchVideo,
};

export default connect(null, mapDispatchToProps)(Search);
