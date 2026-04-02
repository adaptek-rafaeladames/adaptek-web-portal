"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { en } from "@/lib/i18n/en";

const { contact } = en;

// Replace with your Formspree form ID after creating an account at formspree.io
// Account email: rafael.adames@adaptek.ai
// Set NEXT_PUBLIC_FORMSPREE_ID in .env.local
const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ID
    ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
    : "https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID";

type FormState = "idle" | "submitting" | "success" | "error";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  message: string;
};

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  role: "",
  message: "",
};

type FieldProps = {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  multiline?: boolean;
  rows?: number;
};

function Field({
  id,
  label,
  type = "text",
  required,
  value,
  onChange,
  error,
  multiline,
  rows = 4,
}: FieldProps) {
  const inputClasses = cn(
    "w-full rounded-xl border px-4 py-3 text-brand-charcoal text-sm placeholder-gray-400",
    "transition-colors duration-150",
    "focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent",
    error ? "border-red-400 bg-red-50" : "border-gray-200 bg-white hover:border-brand-orange"
  );

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-brand-charcoal mb-1.5"
      >
        {label}
        {required && (
          <span className="text-brand-orange ml-1" aria-label="required">
            *
          </span>
        )}
      </label>

      {multiline ? (
        <textarea
          id={id}
          name={id}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(inputClasses, "resize-none")}
          placeholder="Tell us about your organization and what you'd like AI to help with…"
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={inputClasses}
          placeholder={`Your ${label.toLowerCase()}…`}
        />
      )}

      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-1.5 text-xs text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}

/**
 * ContactSection — accessible contact form with client-side validation,
 * Formspree submission, success/error feedback, and keyboard-friendly fields.
 * Formspree form ID is read from NEXT_PUBLIC_FORMSPREE_ID env variable.
 */
export function ContactSection() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const setField = (field: keyof FormData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error on change
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Work email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.company.trim()) newErrors.company = "Company name is required.";
    if (!formData.message.trim()) newErrors.message = "Please tell us what you need help with.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState("submitting");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          company: formData.company,
          role: formData.role,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormState("success");
        setFormData(initialForm);
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-section bg-brand-offwhite"
    >
      <div className="container-content max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="orange" className="mb-4">
            {contact.sectionLabel}
          </Badge>
          <h2
            id="contact-heading"
            className="font-sans font-bold text-3xl md:text-4xl text-brand-charcoal mb-4"
          >
            {contact.headline}
          </h2>
          <p className="text-brand-charcoal-light text-lg leading-relaxed">
            {contact.subheadline}
          </p>
        </div>

        {/* Success message */}
        {formState === "success" && (
          <div
            role="alert"
            aria-live="polite"
            className="mb-8 p-6 bg-brand-green-light border border-brand-green rounded-2xl text-brand-charcoal text-center"
          >
            <p className="text-2xl mb-2" aria-hidden="true">✓</p>
            <p className="font-semibold font-sans">{contact.successMessage}</p>
          </div>
        )}

        {/* Error message */}
        {formState === "error" && (
          <div
            role="alert"
            aria-live="polite"
            className="mb-8 p-5 bg-red-50 border border-red-200 rounded-2xl text-red-700 text-sm text-center"
          >
            {contact.errorMessage}
          </div>
        )}

        {/* Form */}
        {formState !== "success" && (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white rounded-3xl shadow-card p-8 md:p-10 space-y-6"
            aria-label="Contact Adaptek form"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field
                id="firstName"
                label={contact.fields.firstName}
                required
                value={formData.firstName}
                onChange={setField("firstName")}
                error={errors.firstName}
              />
              <Field
                id="lastName"
                label={contact.fields.lastName}
                required
                value={formData.lastName}
                onChange={setField("lastName")}
                error={errors.lastName}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field
                id="email"
                label={contact.fields.email}
                type="email"
                required
                value={formData.email}
                onChange={setField("email")}
                error={errors.email}
              />
              <Field
                id="company"
                label={contact.fields.company}
                required
                value={formData.company}
                onChange={setField("company")}
                error={errors.company}
              />
            </div>

            <Field
              id="role"
              label={contact.fields.role}
              value={formData.role}
              onChange={setField("role")}
              error={errors.role}
            />

            <Field
              id="message"
              label={contact.fields.message}
              required
              value={formData.message}
              onChange={setField("message")}
              error={errors.message}
              multiline
              rows={5}
            />

            <div className="flex justify-end pt-2">
              <Button
                type="submit"
                disabled={formState === "submitting"}
                size="lg"
                aria-label={
                  formState === "submitting"
                    ? "Submitting your request…"
                    : contact.submit
                }
              >
                {formState === "submitting" ? "Sending…" : contact.submit}
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
