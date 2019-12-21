React-drag-marquee
===========

A simple react marquee component

Install with npm:
```sh
npm install react-drag-marquee
```

## Demo 
[Demo Link](https://huanxinhu.github.io/react-drag-marquee/)

## Example
```jsx
import React, { Component} from 'react';
import Marquee from 'react-drag-marquee';

class App extends Component {
  render() {
    return (
      <Marquee
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ea laboriosam molestiae corrupti eligendi sed error dolore consequuntur maxime saepe. Nam corrupti velit autem incidunt, aut atque mollitia ipsa obcaecati."
      />
    )
  }
}
```

## Props
### text
the marquee text
- Type: string
- Default: `''`

### freq
the interval time(millisecond) for the marquee
- Type: number
- Default: `15`

### offset
the move offset(px) for every interval time.
- Type: number
- Default: `1`