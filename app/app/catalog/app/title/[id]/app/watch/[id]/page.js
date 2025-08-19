export default function WatchPage({ params }) {
  return (
    <div>
      <h1 style={{fontSize:20, fontWeight:700, marginBottom:12}}>Playing: {params.id}</h1>
      <div style={{
        position:"relative", width:"100%", aspectRatio:"16/9",
        border:"1px solid #e5e5e5", borderRadius:12, background:"#f4f4f4",
        display:"flex", alignItems:"center", justifyContent:"center"
      }}>
        {/* Later we'll embed Mux here */}
        <div style={{color:"#666"}}>Player placeholder — Mux embed goes here</div>
      </div>
      <div style={{marginTop:12, color:"#666", fontSize:14}}>Subtitle & Dub selectors will appear here.</div>
    </div>
  );
}
