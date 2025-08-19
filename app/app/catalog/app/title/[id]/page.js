import { demoMovies } from "@/app/lib/mock";
import Link from "next/link";

export default function TitlePage({ params }) {
  const movie = demoMovies.find(m => m.id === params.id);
  if (!movie) return <div>Not found.</div>;

  return (
    <div style={{display:"grid", gridTemplateColumns:"280px 1fr", gap:24, alignItems:"start"}}>
      <div>
        <div style={{border:"1px solid #e5e5e5", borderRadius:12, overflow:"hidden"}}>
          <img src={movie.poster} alt={movie.title} style={{width:"100%", height:380, objectFit:"cover"}} />
        </div>
      </div>
      <div>
        <h1 style={{fontSize:24, fontWeight:700}}>{movie.title}</h1>
        <p style={{color:"#555", marginTop:8}}>{movie.synopsis}</p>
        <p style={{fontSize:14, color:"#777", marginTop:8}}>
          {movie.year} • {movie.genres.join(" / ")}
        </p>
        <div style={{display:"flex", gap:12, marginTop:16}}>
          <Link href={`/watch/${movie.id}`} style={{padding:"10px 16px", background:"#ff0000", color:"#fff", borderRadius:8, fontWeight:600, textDecoration:"none"}}>Play</Link>
          <button style={{padding:"10px 16px", background:"#fff", border:"1px solid #ddd", borderRadius:8}}>+ Watchlist</button>
        </div>
      </div>
    </div>
  );
}
