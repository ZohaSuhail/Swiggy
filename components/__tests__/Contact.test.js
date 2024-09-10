import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
    test("Should load contact us component", () => {
        render(<Contact />);

        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();
    });

    test("Should load button innside Contact component", () => {
        render(<Contact />);

        const button = screen.getByRole("button");

        expect(button).toBeInTheDocument();
    });

    test("Should load inputboxes inside Contact component", () => {
        render(<Contact />);

        const inputboxes = screen.getAllByRole("textbox");

        //console.log(inputboxes.length);

        expect(inputboxes.length).toBe(2);
    });
});

