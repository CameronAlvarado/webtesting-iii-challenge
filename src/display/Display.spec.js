// Test away!
import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

test('Display renders correctly', () => {
  render(<Display />);
});

test('Gate should initially be unlocked', () => {
    expect(Display.defaultProps.locked).toEqual(false)
  });