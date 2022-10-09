import { ChakraProvider, List } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import LogListItem from "../Components/LogListItem";
// import { LogListItem } from "../types";

const testProps = {
  stockItem: {
    timeStamp: "10/09/2022 08:35:33",
    data: [
      {
        code: "AFAIK",
        price: 263.08,
      },
    ],
  },
};
describe("<LogListItem/>", () => {
  it("renders", () => {
    const component = (
      <ChakraProvider>
        <List>
          <LogListItem {...testProps} />
        </List>
      </ChakraProvider>
    );
    render(component);
    const listElement = screen.getAllByRole("listitem")[0];

    expect(listElement).toBeInTheDocument();
  });
  it("has correct text", () => {
    const component = (
      <ChakraProvider>
        <List>
          <LogListItem {...testProps} />
        </List>
      </ChakraProvider>
    );
    render(component);
    const listElement = screen.getAllByRole("listitem")[0];

    expect(listElement).toHaveTextContent("Updates for 10/09/2022 08:35:33");
  });
});
