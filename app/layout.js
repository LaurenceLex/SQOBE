import "./globals.css";
import SearchBar from "./components/SearchBar";

export const metadata = {
  title: "SQOBE",
  description: "Streaming reimagined",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
        <div className="logo">
  <img src="/logo.png" alt="SQOBE Logo" height="36" />
</div>
          <nav className="nav">
            <SearchBar />
          </nav>
        </header>

        <main>{children}</main>

        <footer className="footer">
          © {new Date().getFullYear()} SQOBE
        </footer>
      </body>
    </html>
  );
}
