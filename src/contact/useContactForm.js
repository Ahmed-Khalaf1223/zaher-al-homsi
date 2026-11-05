import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

import { EMPTY_FORM, toWesternDigits, validateForm } from "./contactFormConfig";

// How long the result message stays visible before it hides itself.
const HIDE_STATUS_AFTER_MS = { success: 3000, error: 5000 };

/** All the contact-form state and the EmailJS submit logic; the UI only renders what this returns. */
export default function useContactForm() {
  // Form data
  const [formData, setFormData] = useState(EMPTY_FORM);

  // Form states
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(""); // "" | "success" | "error"
  const [isLoading, setIsLoading] = useState(false);

  // Hide the success / error message automatically
  useEffect(() => {
    if (!status) return;

    const timer = setTimeout(() => setStatus(""), HIDE_STATUS_AFTER_MS[status]);

    return () => clearTimeout(timer); // new status, typing, or unmount cancels the pending timer
  }, [status]);

  // Update form fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setStatus("");
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setIsLoading(true);
    setStatus("");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name.trim(),
          phone: toWesternDigits(formData.phone.trim()),
          email: formData.email.trim(),
          inquiry_type: formData.inquiry_type.trim(),
          message: formData.message.trim(),
        },
        publicKey,
      );

      setStatus("success");

      setFormData(EMPTY_FORM);

      setErrors({});
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return { formData, errors, status, isLoading, handleChange, handleSubmit };
}
