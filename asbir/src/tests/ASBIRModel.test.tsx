import { render, fireEvent, screen } from "@testing-library/react";
import { ASBIRModel } from "../ASBIRModel";
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom'

test("checks to make sure that error log has proper heading", () => {
// render the component on virtual dom
    render(
    <Router>
        <ASBIRModel />
    </Router>
    );
    expect(screen.getByText(`This is the Error Log`)).toBeInTheDocument()
})