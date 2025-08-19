import "./globals.css";
import SearchBar from "./components/SearchBar";
import { Suspense } from "react";

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
            {/* Uses /public/logo.png */}
           <img src="/logo.png" alt="SQOBE Logo" height="120" />
          </div>
          <nav className="nav">
            {/* useSearchParams needs Suspense */}
            <Suspense fallback={null}>
              <SearchBar />
            </Suspense>
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
