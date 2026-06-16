/**
 * The shared section header: mono eyebrow, display heading, and an optional
 * lead paragraph. Used by every content section so the structure and reveal
 * behaviour stay consistent (and editable in one place).
 */
export default function SectionHeading({ eyebrow, title, lead, className = "" }) {
  return (
    <div className={`sec-head reveal ${className}`.trim()}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}
