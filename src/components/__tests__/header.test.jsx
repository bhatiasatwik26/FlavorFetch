import {render , screen} from '@testing-library/react'
import About from "../About"
import "@testing-library/jest-dom"

//test <---> it
test('should load header', () => {

    // render
    render(<About />);

    // query
    const heading = screen.getAllByRole('button');

    // expect
    expect(heading.length).toBe(3);
  });
  