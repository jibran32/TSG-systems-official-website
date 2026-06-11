// EDIT: replace with real client quotes, or delete this section.
// Do not ship placeholder testimonials.
const QUOTES = [
  {
    text: "They didn't just build what we asked for — they understood the problem and shipped something better. The handover was clean and documented.",
    initials: "AK",
    name: "Client Name",
    role: "CEO, Company",
    delay: "",
  },
  {
    text: "The automations they set up saved our ops team hours every week. Reliable, well-monitored, and we actually own the whole thing.",
    initials: "MR",
    name: "Client Name",
    role: "Operations Lead, Company",
    delay: "d1",
  },
];

export default function Testimonials() {
  return (
    <section className="sec alt" id="clients">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">In their words</span>
          <h2>What working with us feels like.</h2>
        </div>
        <div className="quote-wrap">
          {QUOTES.map((q) => (
            <blockquote className={`quote reveal ${q.delay}`} key={q.initials}>
              <span className="mk">“</span>
              <p>{q.text}</p>
              <div className="who">
                <span className="av">{q.initials}</span>
                <div>
                  <b>{q.name}</b>
                  <small>{q.role}</small>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
