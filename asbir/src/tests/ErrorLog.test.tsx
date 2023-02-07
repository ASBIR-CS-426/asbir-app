import { render, fireEvent, screen } from "@testing-library/react";
import { ErrorLog } from "../ErrorLog";
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom'

// const mockedUsedNavigate = jest.fn();
// jest.mock('react-router-dom', () => ({
//    ...jest.requireActual('react-router-dom'),
//   useNavigate: () => mockedUsedNavigate,
// }));

// const mockedUsedLocation = jest.fn();
// jest.mock('react-router-dom', () => ({
//    ...jest.requireActual('react-router-dom'),
//   useLocation: () => mockedUsedLocation,
// }));
//
test("checks to make sure that error log has proper heading", () => {
// render the component on virtual dom
    render(
    <Router>
        <ErrorLog />
    </Router>
    );
    expect(screen.getByText(`This is the Error Log`)).toBeInTheDocument()
})