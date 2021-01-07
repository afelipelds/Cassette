import React from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const Home = () => {
  const API = 'http://localhost:3000/initialState';
  const initialState = useInitialState(API);

  return (
    <>
      <Search />

      <Categories title='Mi lista'>
        <Carousel>
          {initialState.mylist?.map((item) => {
            return (
              <CarouselItem key={item.id} {...item} />
            );
          })}
        </Carousel>
      </Categories>

      <Categories title='Originals'>
        <Carousel>
          {initialState.originals?.map((item) => {
            return (
              <CarouselItem key={item.id} {...item} />
            );
          })}
        </Carousel>
      </Categories>

      <Categories title='Trend'>
        <Carousel>
          {initialState.trends?.map((item) => {
            return (
              <CarouselItem key={item.id} {...item} />
            );
          })}
        </Carousel>
      </Categories>

    </>
  );
};

export default Home;
