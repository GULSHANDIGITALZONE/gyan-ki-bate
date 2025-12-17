import Link from "next/link";

export default function Header() {
  return (
    <header style={{
      background: "#0f172a",
      padding: "14px 20px",
      color: "white"
    }}>
      <div style={{
        maxWidth: 1000,
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h2 style={{ margin: 0 }}>Gyan Ki Bate</h2>

        <nav>
          <Link href="/" style={{ color: "white", marginRight: 15 }}>
            Home
          </Link>
          <Link href="/about" style={{ color: "white" }}>
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
