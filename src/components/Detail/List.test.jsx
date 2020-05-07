import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

const characters = [
  {
    id: 1,
    name: 'Ang',
    allies: 'all',
    affiliation: 'air', 
    enemies: 'fire nation',
    image: 'url'
  }
];

describe('List', () => {
  it('matches a List snapshot', () => {
    const wrapper = shallow(<List characters={characters} />);
    expect(wrapper).toMatchSnapshot();
  });
});
