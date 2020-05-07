import React from 'react';
import { shallow } from 'enzyme';
import Detail from './Detail';

describe('Detail', () => {
  it('matches a detail snapshot', () => {
    const wrapper = shallow(<Detail allies='allies' name='Ang' enemies='enemies' affiliation='affiliation' image='image' />);
    expect(wrapper).toMatchSnapshot();
  });
});
