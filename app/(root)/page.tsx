// Fallback for hosts without redirect support. On Vercel, vercel.json redirects / to /en.
export default function RootPage() {
  return (
    <p style={{ fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <a href="/en">English</a> · <a href="/th">ไทย</a> · <a href="/zh">中文</a>
    </p>
  );
}
