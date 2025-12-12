import Head from 'next/head'

export default function Home() {
  return (
    <div className="landing-container">
      <Head>
        <title>Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="video-wrapper">
        <iframe
          className="video-embed"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </main>
    </div>
  )
}
