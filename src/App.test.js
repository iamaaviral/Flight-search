import React from 'react';
import Renderer from 'react-test-renderer';

import App from './App'

describe('Tests for App screen', () => {
  it('should render App without crashing', () => {
    const snap = Renderer.create(<App />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
