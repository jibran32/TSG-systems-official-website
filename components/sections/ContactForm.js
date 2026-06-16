"use client";
import { useState } from "react";
import { site } from "@/content/site";
import { contact } from "@/content/sections";

/**
 * Contact form. Intentionally backend-free: on submit it composes a prefilled
 * mailto so the message lands in the studio inbox without storing anything or
 * needing a server. Swap the submit handler for a real API call later — the
 * markup and fields (driven by content/sections) stay the same.
 */
export default function ContactForm() {
  const { fields, submit, title, note } = contact.form;
  const [values, setValues] = useState(() => Object.fromEntries(fields.map((f) => [f.name, ""])));

  const update = (name) => (e) => setValues((v) => ({ ...v, [name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = `Project enquiry — ${values.name || "TSG Systems"}`;
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      values.company && `Company: ${values.company}`,
      "",
      values.message,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="contact-form reveal d1" onSubmit={onSubmit}>
      <h3>{title}</h3>
      {fields.map((f) => (
        <label className="field" key={f.name}>
          <span>
            {f.label}
            {f.required && <i aria-hidden="true"> *</i>}
          </span>
          {f.type === "textarea" ? (
            <textarea
              name={f.name}
              rows={5}
              placeholder={f.placeholder}
              required={f.required}
              value={values[f.name]}
              onChange={update(f.name)}
            />
          ) : (
            <input
              type={f.type}
              name={f.name}
              placeholder={f.placeholder}
              required={f.required}
              value={values[f.name]}
              onChange={update(f.name)}
            />
          )}
        </label>
      ))}
      <button type="submit" className="btn btn-primary" data-magnetic>
        {submit}
      </button>
      <p className="form-note">{note}</p>
    </form>
  );
}
