import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import userEvent from "@testing-library/user-event";

import Navbar from "./Navbar";

// Mock the language switcher to isolate Navbar tests
vi.mock("../common/LanguageSwitcher", () => ({
  default: () => <button>Change Language</button>,
}));

const testI18n = i18n.createInstance();

await testI18n.init({
  lng: "en",
  resources: {
    en: {
      translation: {
        nav: {
          home: "Home",
          about: "About",
          partners: "Partners",
          contact: "Contact",
        },
      },
    },
  },
});

function renderNavbar({ isMobile = false } = {}) {
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: isMobile,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));

  const theme = createTheme();

  return render(
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        <I18nextProvider i18n={testI18n}>
          <Navbar />
        </I18nextProvider>
      </ThemeProvider>
    </MemoryRouter>,
  );
}
describe("Navbar", () => {
  it("renders the main navigation links", () => {
    renderNavbar();

    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Partners" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
  });

  it("opens the mobile navigation drawer", async () => {
    const user = userEvent.setup();

    renderNavbar({ isMobile: true });

    const menuButton = screen.getByRole("button", {
      name: "Open navigation menu",
    });

    await user.click(menuButton);

    expect(await screen.findByRole("link", { name: "Home" })).toBeVisible();
  });

  it("closes the mobile drawer after clicking a navigation link", async () => {
    const user = userEvent.setup();

    renderNavbar({ isMobile: true });

    await user.click(
      screen.getByRole("button", {
        name: "Open navigation menu",
      }),
    );

    const homeLink = await screen.findByRole("link", {
      name: "Home",
    });

    await user.click(homeLink);

    await waitFor(() => {
      expect(homeLink).not.toBeVisible();
    });
  });
  it("renders the language switcher on desktop", () => {
    renderNavbar();

    expect(screen.getByRole("button", { name: "Change Language" })).toBeInTheDocument();
  });
});
