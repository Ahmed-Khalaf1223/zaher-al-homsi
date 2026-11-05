export const EMPTY_FORM = { name: "", phone: "", email: "", inquiry_type: "", message: "" };

// One entry per input: add / remove a field here and the form follows.
export const FIELDS = [
  { name: "name", type: "text", labelKey: "home.contact.form.name", autoComplete: "name", size: { xs: 12, sm: 6 } },
  { name: "phone", type: "tel", labelKey: "home.contact.form.phone", autoComplete: "tel", inputMode: "tel", ltr: true, size: { xs: 12, sm: 6 } },
  { name: "email", type: "email", labelKey: "home.contact.form.email", autoComplete: "email", size: { xs: 12, sm: 6 } },
  { name: "inquiry_type", type: "text", labelKey: "home.contact.form.type", size: { xs: 12, sm: 6 } },
  { name: "message", labelKey: "home.contact.form.notes", multiline: true, size: 12 },
];

// Arabic-Indic (٠-٩) and Persian (۰-۹) digits -> 0-9
export const toWesternDigits = (value) => value.replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d)).replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValidPhone = (value) => {
  const normalized = toWesternDigits(value);
  const digitsCount = normalized.replace(/\D/g, "").length; // spaces, dashes and + are not counted
  return /^\+?[\d\s\-()]+$/.test(normalized) && digitsCount >= 7 && digitsCount <= 15;
};

// Each rule returns an error key (see home.contact.form.errors.*) or null. Fields with no rule are optional.
const RULES = {
  name: (v) => (v ? null : "required"),
  phone: (v) => (!v ? "required" : isValidPhone(v) ? null : "invalidPhone"),
  email: (v) => (!v ? "required" : EMAIL_REGEX.test(v) ? null : "invalidEmail"),
  inquiry_type: (v) => (v ? null : "required"),
};

// Returns { fieldName: errorKey } - an empty object means the form is valid.
export const validateForm = (formData) => {
  const errors = {};

  Object.entries(RULES).forEach(([name, rule]) => {
    const error = rule(formData[name].trim());
    if (error) errors[name] = error;
  });

  return errors;
};
