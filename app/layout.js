export const metadata = { title: "SQOBE" };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{background:"#fff",color:"#111",fontFamily:"Helvetica, Arial"}}>
        <header style={{borderBottom:"1px solid #eee",padding:"12px 16px"}}>
          <strong style={{color:"#ff0000",letterSpacing:"2px"}}>SQOBE</strong>
        </header>
        <main style={{maxWidth:960,margin:"24px auto",padding:"0 16px"}}>{children}</main>
      </body>
    </html>
  );
}
