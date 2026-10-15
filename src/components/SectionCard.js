export default function SectionCard({ title, children }) {
  return (
    <section className="rounded-xl border p-5">
      <h2 className="mb-4 text-xl font-bold">{title}</h2>

      {children}
    </section>
  );
}
