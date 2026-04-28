// app/page.tsx
export default function Home() {
  return (
    <main style={{ height: '100vh', width: '100%', margin: 0, padding: 0, overflow: 'hidden' }}>
      <iframe
        src="/perps-quest.html"
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        title="Perps Quest"
        allow="clipboard-write"
      />
    </main>
  );
}