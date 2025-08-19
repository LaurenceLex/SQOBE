import "./globals.css";

export const metadata = {
  title: "My Prime Clone",
  description: "Streaming front page like Prime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* JS for scroll buttons */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.querySelectorAll('.row').forEach(row => {
                const track = row.querySelector('.row-track');
                const left  = row.querySelector('.scroll-btn.left');
                const right = row.querySelector('.scroll-btn.right');
                if (!track || !left || !right) return;

                const step = () => Math.max(track.clientWidth * 0.9, 320);
                left.addEventListener('click',  () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
                right.addEventListener('click', () => track.scrollBy({ left:  step(), behavior: 'smooth' }));

                const updateEdges = () => {
                  const atStart = track.scrollLeft <= 2;
                  const atEnd = track.scrollWidth - track.clientWidth - track.scrollLeft <= 2;
                  row.classList.toggle('row--start', atStart);
                  row.classList.toggle('row--end',   atEnd);
                };
                track.addEventListener('scroll', updateEdges, { passive: true });
                window.addEventListener('resize', updateEdges);
                updateEdges();
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
