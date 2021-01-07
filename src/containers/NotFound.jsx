import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/containers/NotFound.scss';

//based on https://dribbble.com/shots/3913847-404-page

document.addEventListener('mousemove', ((event) => {
  const pageX = window.innerWidth;
  const pageY = window.innerHeight;
  let mouseY = 0;
  let mouseX = 0;
  let xAxis = 0;
  let yAxis = 0;

  //verticalAxis
  mouseY = event.pageY;
  yAxis = (pageY / 2 - mouseY) / pageY * 300;
  //horizontalAxis
  mouseX = event.pageX / -pageX;
  xAxis = -mouseX * 100 - 100;

  document.querySelector('.box__ghost-eyes').style.transform = `translate(${xAxis}%, ${yAxis}%)`;

}));

const NotFound = () => (
  <div className='box'>
    <div className='box__ghost'>
      <div className='symbol' />
      <div className='symbol' />
      <div className='symbol' />
      <div className='symbol' />
      <div className='symbol' />
      <div className='symbol' />

      <div className='box__ghost-container'>
        <div className='box__ghost-eyes'>
          <div className='box__eye-left' />
          <div className='box__eye-right' />
        </div>
        <div className='box__ghost-bottom'>
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
      <div className='box__ghost-shadow' />
    </div>

    <div className='box__description'>
      <div className='box__description-container'>
        <div className='box__description-title'>Whoops!</div>
        <div className='box__description-text'>It seems like we couldn't find the page you were looking for</div>
      </div>

      <Link to='/' className='box__button'>Go back</Link>

    </div>

  </div>
);

export default NotFound;
