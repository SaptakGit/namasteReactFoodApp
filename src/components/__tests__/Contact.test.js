import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// Grouping the test cases. We can have Describe inside Describe and We can also have Multiple Describe.
describe("Contact Us Page Test Case", () => {

    // We can write 'it' instead of 'test'
    test("Should load Contact component", () => {

        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    });
    
    test("Should load button indise Contact component", () => {
    
        render(<Contact />);
    
        //const button = screen.getByRole("button");
        const button = screen.getByText("Submit");
    
        expect(button).toBeInTheDocument();
    });
    
    test("Should load input name indise Contact component", () => {
    
        render(<Contact />);
    
        //const button = screen.getByRole("button");
        const input = screen.getByPlaceholderText("Name");
    
        expect(input).toBeInTheDocument();
    });
    
    test("Should load 2 input name indise Contact component", () => {
    
        render(<Contact />);
    
        // Quering
        const inputBoxes = screen.getAllByRole("textbox");
    
        //console.log(inputBoxes); // => this returns the react element, which is besically an object.
    
        // expect(inputBoxes.length).not.toBe(3);
        expect(inputBoxes.length).toBe(2);
    });

});
