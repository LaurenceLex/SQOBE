import "./globals.css";

export const metadata = { title: "SQOBE" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="sqobe-header">
          <div className="sqobe-shell" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <a href="/" className="sqobe-logo">SQOBE</a>
            <nav style={{display:"flex",gap:16,fontSize:14}}>
              <a href="/catalog">Catalog</a>
              <a href="/watchlist">Watchlist</a>
              <a href="/account">Account</a>
            </nav>
          </div>
        </header>
        <main className="sqobe-shell" style={{padding:"24px 16px"}}>
          {children}
        </main>
      </body>
    </html>
  );
}
