import { render, fireEvent, screen } from "@testing-library/react";
import { Home } from "../Home";
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom'


test("checks to make sure that error log has proper heading", () => {
// render the component on virtual dom
    render(
    <Router>
        <Home />
    </Router>
    );
    expect(screen.getByText(`Welcome to the ASBIR Web App`)).toBeInTheDocument()
})


