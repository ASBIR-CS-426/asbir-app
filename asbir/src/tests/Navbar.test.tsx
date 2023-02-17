import { render, fireEvent, screen } from "@testing-library/react";
import Navbar from "../Navbar";
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom'


test("checks to make sure that the navbar populates properly", () => {
    const navProps = {
        firstLink: '/test1',
        firstInfo: 'Test1',
        secondLink: '/test2',
        secondInfo: 'Test2',
        thirdLink: '/test3',
        thirdInfo: 'Test3',
    }  

    render(
        <Router>
            <Navbar {...navProps}/>
        </Router>
    );
    expect(screen.getByText("Test1")).toBeInTheDocument();
    expect(screen.getByText("Test2")).toBeInTheDocument();
    expect(screen.getByText("Test3")).toBeInTheDocument(); 
})