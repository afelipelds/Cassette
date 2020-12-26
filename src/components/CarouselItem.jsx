import React from 'react';
import PropTypes from 'prop-types';
import playIcon from '../assets/img/play-icon.png';
import plusIcon from '../assets/img/plus-icon.png';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => {
  return (
    !year ? (
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
                <img src={plusIcon} alt='Plus' />
              </div>
            </div>
          </div>
        </>
      )
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}

export default CarouselItem;
