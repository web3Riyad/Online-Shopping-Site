export default function SearchBar({ search, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(event) => onSearchChange(event.target.value)}
      className="my-6 w-full rounded-lg border p-3"
    />
  );
}
