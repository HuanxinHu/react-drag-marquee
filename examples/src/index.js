import React from 'react';
import { render } from 'react-dom';
import Marquee from '../../src/index';

const App = () => (
  <Marquee
    text="<strong>Lorem ipsum</strong> <em>dolor sit amet,</em> <u>consectetur adipisicing elit.</u> <s>Qui ea laboriosam molestiae corrupti eligendi sed error dolore consequuntur maxime saepe.</s>"
  />
)

render(<App />, document.getElementById('root'));