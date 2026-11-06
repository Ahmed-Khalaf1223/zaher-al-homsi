import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import PartnerCard from "./PartnerCard";

const mockPartner = {
  id: "mando",
  title: "Mando",
  description: "A trusted business partner.",
  logo: "/images/mando.png",
};

function renderPartnerCard() {
  return render(
    <MemoryRouter>
      <PartnerCard partner={mockPartner} />
    </MemoryRouter>,
  );
}

describe("PartnerCard", () => {
  it("renders the partner title and description", () => {
    renderPartnerCard();

    expect(screen.getByText("Mando")).toBeInTheDocument();
    expect(screen.getByText("A trusted business partner.")).toBeInTheDocument();
  });

  it("renders the partner logo with the correct source and alt text", () => {
    renderPartnerCard();

    const logo = screen.getByRole("img", { name: "Mando" });

    expect(logo).toHaveAttribute("src", "/images/mando.png");
  });

  it("links to the correct partner details page", () => {
    renderPartnerCard();

    const card = screen.getByRole("link");

    expect(card).toHaveAttribute("href", "/partners/mando");
  });
});
