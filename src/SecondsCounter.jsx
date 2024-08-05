import React from 'react';
import ReactDOM from 'react-dom/client';

const SecondsCounter = ({ seconds }) => {
  return <div>Seconds elapsed: {seconds}</div>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

let secondsElapsed = 0;

const updateCounter = () => {
  root.render(<SecondsCounter seconds={secondsElapsed} />);
  secondsElapsed++;
};

window.addEventListener('load', () => {
  updateCounter();
  setInterval(updateCounter, 1000);
});