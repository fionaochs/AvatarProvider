import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { EarthFireProvider } from '../../Hooks/EarthFireProvider';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(
      <EarthFireProvider>
        <App />
      </EarthFireProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
