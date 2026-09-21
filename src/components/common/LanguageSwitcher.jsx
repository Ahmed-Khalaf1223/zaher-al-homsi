import { Button } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";
export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const changeLanguage = () => {
    i18n.changeLanguage(isArabic ? "en" : "ar");
  };
  return (
    <Button
      onClick={changeLanguage}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 0.7,
        color: "inherit",
        fontWeight: 700,
        px: 1.5,
        py: 0.7,
        borderRadius: 2,
        textTransform: "none",
        "&:hover": { color: "primary.main" },
      }}
    >
      {" "}
      <LanguageIcon sx={{ fontSize: 20 }} /> {isArabic ? "En" : "العربية"}{" "}
    </Button>
  );
}
