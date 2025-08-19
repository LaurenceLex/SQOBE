"use client";
import Link from "next/link";
import { useRef } from "react";

export default function Row({ title, items }) {
  const rowRef = useRef(null);

  const scroll = (dir) => {
    if (rowRef.current) {
      const scrollAmount = dir === "left" ? -400 : 400;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="row">
      <h2 className="row-title">{title}</h2>
      <div className="row-wrapper">
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          ‹
        </button>
        <div className="row-items" ref={rowRef}>
          {items.map((m) => (
            <Link key={m.id} href={`/title/${m.id}`} className="card">
              <img src={m.posterUrl} alt={m.title} />
              <p>{m.title}</p>
            </Link>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scroll("right")}>
          ›
        </button>
      </div>
    </section>
  );
}
