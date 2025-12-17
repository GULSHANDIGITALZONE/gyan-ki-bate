import Header from "./components/Header";

export const metadata = {
  title: "Gyan Ki Bate",
  description: "जीवन की सच्ची कहानियाँ और उनसे मिलने वाली सीख",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        <Header />
        {children}
      </body>
    </html>
  );
}
