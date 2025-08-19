import Link from "next/link";
import { demoMovies } from "../lib/mock";

export default function CatalogPage() {
  return (
    <div>
      <h1>Catalog</h1>
      <ul>
        {demoMovies.map(m => (
          <li key={m.id}>
            <Link href={`/title/${m.id}`}>{m.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
