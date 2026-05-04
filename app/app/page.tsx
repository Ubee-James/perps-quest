// app/app/page.tsx
export default function AppPage() {
  return (
    <main style={{ position: 'fixed', inset: 0, background: '#0c0c0f' }}>
      <iframe
        src="/perps-quest.html"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
        title="Perps Quest App"
        allow="clipboard-write"
      />
    </main>
  )
}