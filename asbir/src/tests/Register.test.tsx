import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import {Register} from '../Register'
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom'

test("if the header is there", () => {
    render (
        <Router>
            <Register />
        </Router>
    )
    expect(screen.getByText('Register User')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
    expect(screen.getByText('Create User')).toBeInTheDocument();
    expect(screen.getByText('Already have an account? Login here.')).toBeInTheDocument();
});

test("whether the alert pops up when someone tries to register incorrectly", async () => {
    const alertMock = jest.spyOn(global.window,'alert').mockImplementation(); 
    const logSpy = jest.spyOn(global.console, 'log');
    render (
        <Router>
            <Register />
        </Router>
    )
    await fireEvent.click(screen.getByText('Create User'));
    await waitFor(() => {
        expect(logSpy).toHaveBeenCalled();
    })

    await waitFor(() => {
        expect(logSpy).toHaveBeenCalledTimes(1);
    })

    await waitFor(() => {
        expect(logSpy).toHaveBeenCalledWith('Firebase: Error (auth/invalid-email).');
    })
})