// Test away
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
// import { toContain } from '@testing-library/jest-dom';

// import Dashboard from './Dashboard';
import Display from '../display/Display.js';
import Controls from '../controls/Controls.js';


// test('Dashboard renders correctly', () => {
//   render(<Dashboard />);
// });

test('shows Controls', () => {
    expect(render(<Display />)).toMatchSnapshot();
  });

test('shows Controls', () => {
    expect(render(<Controls />)).toMatchSnapshot();
});