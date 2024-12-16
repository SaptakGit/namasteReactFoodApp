import { render,screen } from "@testing-library/react";
import RestaurentCard from "../RestaurentCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurentCard component with props Data", () => {
    render(
        <RestaurentCard resData={MOCK_DATA} />
    );

    const name = screen.getByText("Dhaka Biryani House");

    expect(name).toBeInTheDocument();
});

it("Should render RestaurentCard component with Promoted Label", () => {
    // Home Work - test Higher Order Component : withPromotedLabel()
});