// Test away!
import React from 'react';
import { render } from '@testing-library/react';
import { toContain } from '@testing-library/jest-dom';

import Display from './Display';

// test('Display renders correctly', () => {
//   render(<Display />);
// });

test('Gate should initially be unlocked', () => {
    expect(Display.defaultProps.locked).toEqual(false)
});

test('Gate should initially be closed', () => {
    expect(Display.defaultProps.closed).toEqual(false)
});

describe("display proper results", () => {
    describe("describe proper colors", () => {
        it("has a green unlock and a green open", () => {
            const display = render(<Display closed={false} locked={false} />)
            display.getByText('Open')
            display.getByText('Unlocked')

            expect(display.getByText('Open').className).toContain('green-led')
            expect(display.getByText('Unlocked').className).toContain('green-led')
        });
        it("has a green unlock red closed", () => {
            const display = render(<Display closed={true} locked={true}/>)
            display.getByText('Closed')
            display.getByText('Unlocked')

            expect(display.getByText('Closed').className).toContain('red-led')
            expect(display.getByText('Unlocked').className).toContain('green-led')

        })
    })
})