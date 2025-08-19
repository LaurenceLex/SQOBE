import "./globals.css";

export const metadata = {
  title: "SQOBE",
  description: "Streaming reimagined",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="logo">SQOBE</div>
          <nav className="nav">
            <input type="text" placeholder="Search..." className="search" />
            <select className="genre-select">
              <option>All Genres</option>
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
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">© 2025 SQOBE</footer>
      </body>
    </html>
  );
}
