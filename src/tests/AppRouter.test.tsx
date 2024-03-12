import React from 'react'
import { describe, test, expect } from "vitest";
import { AppRouter } from "../components/09-useContext/AppRouter";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import { MemoryRouter} from "react-router-dom";
import { NavBar } from '../components/09-useContext/NavBar'; // Adjust the import path as necessary

describe('NavBar Component Tests', () => {
  test('should render the NavBar component', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    // Example assertion: Check if the NavBar contains a link with text "Home"
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    // You can add more assertions here to check for other elements like "About" and "Login" links
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });
});