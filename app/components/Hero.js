import Link from "next/link";

export default function Hero({ item }) {
  return (
    <section style={{marginBottom:24}}>
      <div style={{position:"relative", overflow:"hidden", border:"1px solid #e5e5e5", borderRadius:16}}>
        <img src={item.backdrop} alt={item.title} style={{width:"100%", height:360, objectFit:"cover"}} />
        <div style={{
          position:"absolute", inset:0,
          background:"linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0.7), transparent)"
        }}/>
        <div style={{position:"absolute", left:16, bottom:16, right:16}}>
          <h1 style={{fontSize:32, margin:0}}>{item.title}</h1>
          <p style={{maxWidth:700, color:"#444", marginTop:8}}>{item.synopsis}</p>
          <div style={{display:"flex", gap:12, marginTop:12}}>
            <Link href={`/title/${item.id}`} style={{
              padding:"10px 16px", background:"#ff0000", color:"#fff",
              borderRadius:8, fontWeight:600, textDecoration:"none"
            }}>Play</Link>
            <Link href={`/title/${item.id}`} style={{
              padding:"10px 16px", background:"#fff", border:"1px solid #ddd",
              borderRadius:8, textDecoration:"none", color:"#111"
            }}>Details</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
