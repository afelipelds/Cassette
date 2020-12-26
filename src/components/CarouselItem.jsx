import React from 'react';
import playIcon from '../assets/img/play-icon.png';
import plusIcon from '../assets/img/plus-icon.png';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => {
  return (
    !year ? (
      <>
        <p>Nothing to return</p>
      </>
    ) :
      (
        <>
          <div className='Carousel--item'>
            <img className='Carousel--item__img' src={cover} alt={title} />
            <div className='Carousel--item__details'>
              <div className='Carousel--item__details--buttons'>
                <img src={playIcon} alt='Play' />
                <img src={plusIcon} alt='Plus' />
              </div>
              <p className='Carousel--item__details--title'>{title}</p>
              <p className='Carousel--item__details--subtitle'>
                {`${year} | ${contentRating} | ${duration}`}
              </p>
            </div>
          </div>
        </>
      )
  );
};

export default CarouselItem;
