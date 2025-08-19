import Link from "next/link";
import { demoMovies } from "@/app/lib/mock";

export default function Catalog() {
  return (
    <div>
      <h1 style={{fontSize:24, fontWeight:700, marginBottom:16}}>Catalog</h1>
      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(160px,1fr))", gap:16}}>
        {demoMovies.map(m => (
          <Link key={m.id} href={`/title/${m.id}`} style={{textDecoration:"none", color:"#111"}}>
            <div style={{border:"1px solid #e5e5e5", borderRadius:12, overflow:"hidden"}}>
              <img src={m.poster} alt={m.title} style={{width:"100%", height:240, objectFit:"cover"}} />
            </div>
            <div style={{marginTop:6, fontSize:14}}>{m.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
