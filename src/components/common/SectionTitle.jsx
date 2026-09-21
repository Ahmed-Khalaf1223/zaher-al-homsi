import { Box, Typography } from "@mui/material";

export default function SectionTitle({ eyebrow, title, description, align = "center" }) {
  return (
    <Box
      sx={{
        textAlign: align,
        mb: 5,
      }}
    >
      {eyebrow && <Typography sx={{ fontWeight: 800, mb: 1, fontSize: { xs: 16, md: 24 } }}>{eyebrow}</Typography>}

      <Typography variant="h4" color="primary" sx={{ fontSize: { xs: 22, md: 30 }, fontWeight: 600 }}>
        {title}
      </Typography>

      {description && (
        <Typography sx={{ maxWidth: 750, mx: align === "center" ? "auto" : 0, mt: 2, lineHeight: 2, color: "text.secondary" }}>
          {description}
        </Typography>
      )}
    </Box>
  );
}
