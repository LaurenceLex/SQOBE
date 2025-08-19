import Link from "next/link";

export default function Row({ title, items }) {
  return (
    <section style={{marginBottom:24}}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom:8}}>
        <h2 style={{fontSize:18, margin:0, fontWeight:700}}>{title}</h2>
        <Link href="/catalog" style={{fontSize:14, color:"#ff0000", textDecoration:"none"}}>See all</Link>
      </div>
      <div style={{display:"flex", gap:16, overflowX:"auto", paddingBottom:8}}>
        {items.map(m => (
          <Link key={m.id} href={`/title/${m.id}`} style={{minWidth:180, textDecoration:"none", color:"#111"}}>
            <div style={{border:"1px solid #e5e5e5", borderRadius:12, overflow:"hidden"}}>
              <img src={m.poster} alt={m.title} style={{width:180, height:260, objectFit:"cover"}} />
            </div>
            <div style={{marginTop:6, fontSize:14, whiteSpace:"nowrap", textOverflow:"ellipsis", overflow:"hidden"}}>{m.title}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
