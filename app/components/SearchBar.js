"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

export default function SearchBar() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const q = params.get("q") || "";
  const genre = params.get("genre") || "All";

  const update = useCallback(
    (next) => {
      const sp = new URLSearchParams(params.toString());
      Object.entries(next).forEach(([k, v]) => {
        if (!v || v === "All") sp.delete(k);
        else sp.set(k, v);
      });
      router.push(`${pathname}?${sp.toString()}`);
    },
    [params, pathname, router]
  );

  return (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <input
        className="search"
        placeholder="Search titles…"
        defaultValue={q}
        onChange={(e) => update({ q: e.target.value })}
      />
      <select
        className="genre-select"
        defaultValue={genre}
        onChange={(e) => update({ genre: e.target.value })}
      >
        <option>All</option>
        <option>Action</option>
        <option>Thriller</option>
        <option>Drama</option>
        <option>Comedy</option>
        <option>Documentary</option>
        <option>Romance</option>
        <option>Science Fiction</option>
        <option>Fantasy</option>
        <option>Horror</option>
        <option>Kids</option>
      </select>
    </div>
  );
}
