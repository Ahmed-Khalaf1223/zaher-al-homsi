import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import ContactPreview from "./ContactPreview";

vi.mock("../../contact/ContactForm", () => ({
  default: () => <div>Test Contact Form</div>,
}));

vi.mock("../../contact/LocationSection", () => ({
  default: () => <div>Test Location Section</div>,
}));

const testI18n = i18n.createInstance();

await testI18n.init({
  lng: "en",
  resources: {
    en: {
      translation: {
        home: {
          contact: {
            title: "Contact Us",
            subtitle: "Let's work together",
            description: "Get in touch with us.",
          },
        },
      },
    },
  },
});

describe("ContactPreview", () => {
  it("renders contact content correctly", () => {
    render(
      <I18nextProvider i18n={testI18n}>
           <ContactPreview showLocation />
      </I18nextProvider>
    );

    expect(screen.getByText("Contact Us")).toBeInTheDocument();

    expect(
      screen.getByText("Let's work together")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Get in touch with us.")
    ).toBeInTheDocument();

    expect(screen.getByText("Test Contact Form")).toBeInTheDocument();

    expect(
      screen.getByText("Test Location Section")
    ).toBeInTheDocument();
  });
});