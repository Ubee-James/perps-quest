// app/page.tsx
export default function Home() {
  return (
    <main style={{ height: '100vh', overflow: 'hidden', background: '#09090c' }}>
      <iframe
        src="/landing.html"
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        title="Perps Quest"
      />
    </main>
  )
}