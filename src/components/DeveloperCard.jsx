export default function DeveloperCard({ name, role, skills }) {
  return (
      <article className="rounded-xl border border-slate-200 p-5 shadow-sm">

      <h2 className="text-xl font-bold">{name}</h2>
      <p className="mt-2 text-slate-600">Role: {role}</p>
      <h3 className="mt-4 font-semibold">Skills:</h3>

      <ul className="mt-2 list-disc pl-5">
        {skills.map((skill) => (
          <li key={skill.id}>{skill}</li>
        ))}
          </ul>

    </article>
  );
}
