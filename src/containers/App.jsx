import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from './Login';
import Register from './Register';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const App = () => {
  const API = 'http://localhost:3000/initalState';
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });
  // useEffect( () => {
  //     fetch(API)
  //         .then( response => response.json() )
  //         .then( data => setVideos(data) ) /** Se asigna nuevos valores a videos */

  //         console.log(videos)
  // }, [] );

  return (
    <>
      <Header />
      {/* <Register /> */}
      <Search />
      {/* {videos.mylist.length > 0 && ( */}
      <Categories title='Mi lista'>
        <Carousel>
          {/* <CarouselItem /> */}
        </Carousel>
      </Categories>
      {/* )} */}

      <Categories title='Originals'>
        <Carousel>
          {/* <CarouselItem /> */}
        </Carousel>
      </Categories>

      {/* {videos.trends !== undefined && ( */}
      <Categories title='Trend'>
        <Carousel>
          {/* {videos.trends.map((item) => {
            // <CarouselItem key={item.id} {...item} />;
          })} */}
        </Carousel>
      </Categories>
      {/* )} */}
      {/* <Podcast /> */}
      {/* <Login /> */}
      <Footer />
    </>
  );
};

export default App;
