// app/page.tsx — landing page
export default function Home() {
  return (
    <main>
      <iframe src="/landing.html" style={{width:'100%',height:'100vh',border:'none'}} />
    </main>
  )
}

// app/app/page.tsx — the actual learning app
export default function AppPage() {
  return (
    <main style={{position:'fixed',inset:0,background:'#0c0c0f'}}>
      <iframe src="/perps-quest.html" style={{position:'absolute',inset:0,width:'100%',height:'100%',border:'none'}} allow="clipboard-write" />
    </main>
  )
}