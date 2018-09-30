import React from 'react';
import Renderer from 'react-test-renderer';

import FormInput from '../FormInput';
import Filter from '../Filter';

describe('Tests for all screen', () => {
  it('should render FormInput without crashing', () => {
    const snap = Renderer.create(<FormInput />).toJSON();
    expect(snap).toMatchSnapshot();
  });
  
  it('should render Filter without crashing', () => {
    const snap = Renderer.create(<Filter />).toJSON();
    expect(snap).toMatchSnapshot();
  });

});