import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions';
import playIcon from '../assets/img/play-icon.png';
import plusIcon from '../assets/img/plus-icon.png';
import removeIcon from '../assets/img/remove-icon.png';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      id, cover, title, year, contentRating, duration,
    });
  };

  const handleDeleteFavorite = () => {
    props.deleteFavorite(id);
  };

  return (
    !id ? (
      <>
        <p>La lista está vacía</p>
      </>
    ) :
      (
        <>
          <div className='Carousel--item'>
            <img className='Carousel--item__img' src={cover} alt={title} />
            <div className='Carousel--item__details'>
              <p className='Carousel--item__details--title'>{title}</p>
              <p className='Carousel--item__details--subtitle'>
                {`${year} | ${contentRating} | ${duration}`}
              </p>
              <div className='Carousel--item__details--buttons'>
                <img src={playIcon} alt='Play' />
                {
                  isList ? (
                    <img src={removeIcon} alt='Delete' onClick={handleDeleteFavorite} />
                  ) : (
                    <img src={plusIcon} alt='Plus' onClick={handleSetFavorite} />
                  )
                }
              </div>
            </div>
          </div>
        </>
      )
  );
};

CarouselItem.propTypes = {
  id: PropTypes.number,
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
