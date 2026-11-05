import { Alert, Box, Grid, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

import { FIELDS } from "./contactFormConfig";
import useContactForm from "./useContactForm";
import CustomButton from "./../components/common/CustomButton";

export default function ContactForm() {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  const { formData, errors, status, isLoading, handleChange, handleSubmit } = useContactForm();

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ width: "100%" }}>
      <Grid container spacing={2}>
        {FIELDS.map(({ name, type, labelKey, autoComplete, inputMode, ltr, multiline, size }) => (
          <Grid key={name} size={size}>
            <TextField
              name={name}
              type={type}
              value={formData[name]}
              onChange={handleChange}
              error={!!errors[name]}
              helperText={errors[name] ? t(`home.contact.form.errors.${errors[name]}`) : ""}
              fullWidth
              size={multiline ? "medium" : "small"}
              multiline={multiline}
              rows={multiline ? 4 : undefined}
              autoComplete={autoComplete}
              placeholder={t(labelKey)}
              slotProps={{ htmlInput: { "aria-label": t(labelKey), ...(inputMode && { inputMode }), ...(ltr && { dir: "ltr" }) } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#fff",
                  borderRadius: 1,
                  ...(!multiline && { minHeight: 52 }),
                },
                ...(ltr && { "& input": { textAlign: isArabic ? "right" : "left" } }),
              }}
            />
          </Grid>
        ))}
        <Grid size={12}>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
            <CustomButton
              type="submit"
              disabled={isLoading}
              sx={{ boxShadow: "none", "&:hover": { boxShadow: "none", backgroundColor: "primary.dark" } }}
            >
              {isLoading ? t("home.contact.form.sending") : t("home.contact.form.submit")}
            </CustomButton>
          </Box>

          {status && (
            <Alert severity={status} sx={{ width: "100%", mt: 2 }}>
              {t(`home.contact.form.${status}`)}
            </Alert>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
