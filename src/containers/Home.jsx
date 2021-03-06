import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Header from '../components/Header';
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals, searchVideo }) => {
  return (
    <>
      <Header />
      <Search />

      { searchVideo.length > 0 && (
        <Categories title='Búsqueda'>
          <Carousel>
            {searchVideo?.map((item) => {
              return (
                <CarouselItem key={item.id} {...item} />
              );
            })}
          </Carousel>
        </Categories>
      )}

      { myList.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {myList?.map((item) => {
              return (
                <CarouselItem key={item.id} {...item} isList={true} />
              );
            })}
          </Carousel>
        </Categories>
      )}

      <Categories title='Originals'>
        <Carousel>
          {originals?.map((item) => {
            return (
              <CarouselItem key={item.id} {...item} />
            );
          })}
        </Carousel>
      </Categories>

      <Categories title='Trends'>
        <Carousel>
          {trends?.map((item) => {
            return (
              <CarouselItem key={item.id} {...item} />
            );
          })}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    searchVideo: state.searchVideo,
  };
};

export default connect(mapStateToProps, null)(Home);
