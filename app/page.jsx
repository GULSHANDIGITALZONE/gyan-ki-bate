import Link from "next/link";
import { posts } from "../data/posts";

export default function Home() {
  return (
    <main style={{ maxWidth: 900, margin: "auto", padding: 16 }}>
      <h1>Gyan Ki Bate</h1>

      {posts.map((post) => (
        <div key={post.slug} style={{
          border: "1px solid #ddd",
          borderRadius: 12,
          padding: 16,
          marginBottom: 20
        }}>
          <img src={post.image} width="100%" style={{ borderRadius: 10 }} />
          <h2>{post.title}</h2>
          <small>{post.date}</small>
          <p>{post.intro}</p>
          <Link href={`/story/${post.slug}`}>और पढ़ें →</Link>
        </div>
      ))}
    </main>
  );
}
