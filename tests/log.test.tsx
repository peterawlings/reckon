import { ChakraProvider, List } from "@chakra-ui/react";
import { fireEvent, render, screen } from "@testing-library/react";
import Log from "../Components/Log";

const testProps = {
  data: [
    {
      timeStamp: "10/09/2021 08:35:30",
      data: [
        {
          code: "AFAIK",
          price: 263.07,
        },
      ],
    },
  ],
  changePause: () => {},
  logPaused: true,
};
describe("<Log/>", () => {
  it("renders a list", () => {
    const component = (
      <ChakraProvider>
        <Log {...testProps} />
      </ChakraProvider>
    );
    render(component);
    const listElement = screen.getAllByRole("list");
    expect(listElement[0]).toBeInTheDocument();
  });
  it("show resume on pause button click", () => {
    const component = (
      <ChakraProvider>
        <Log {...testProps} />
      </ChakraProvider>
    );
    render(component);
    const element = screen.getByRole("button");
    fireEvent.click(element);
    expect(element).toHaveTextContent("Resume");
  });
});
