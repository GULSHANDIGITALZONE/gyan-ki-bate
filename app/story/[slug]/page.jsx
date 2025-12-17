import { posts } from "../../../data/posts";

export default function StoryPage({ params }) {
  const post = posts.find(p => p.slug === params.slug);

  if (!post) return <p>Story not found</p>;

  return (
    <main style={{ maxWidth: 800, margin: "auto", padding: 16 }}>
      <h1>{post.title}</h1>
      <small>{post.date}</small>

      <p style={{ whiteSpace: "pre-line" }}>{post.story}</p>

      <hr />
      <h2>🌱 सीख</h2>
      <ul>
        {post.lesson.map((l, i) => <li key={i}>{l}</li>)}
      </ul>
    </main>
  );
}
