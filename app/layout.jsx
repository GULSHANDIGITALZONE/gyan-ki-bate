export const metadata = {
  title: "Gyan Ki Bate",
  description: "जीवन की कहानियाँ और सीख",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body style={{ fontFamily: "sans-serif", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
