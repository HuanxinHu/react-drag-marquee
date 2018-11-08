import React from 'react';
import { render } from 'react-dom';
import Marquee from '../../src/index';

const App = () => (
  <Marquee
    freq={30}
    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ea laboriosam molestiae corrupti eligendi sed error dolore consequuntur maxime saepe. Nam corrupti velit autem incidunt, aut atque mollitia ipsa obcaecati."
  />
)

render(<App />, document.getElementById('root'));