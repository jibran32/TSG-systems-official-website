import ContactForm from "@/components/sections/ContactForm";
import { contact } from "@/content/sections";

/**
 * Contact screen body: the channel list (email/phone/studio/hours) beside the
 * message form. Channels are data-driven from content/sections; the form is the
 * only interactive (client) piece.
 */
export default function Contact() {
  return (
    <section className="sec" id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <div className="reveal">
            <ul className="channels">
              {contact.channels.map((c) => (
                <li className="channel" key={c.label}>
                  <span className="ic" aria-hidden="true">{c.icon}</span>
                  <div>
                    <small>{c.label}</small>
                    {c.href ? <a href={c.href}>{c.value}</a> : <b>{c.value}</b>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
