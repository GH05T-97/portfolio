import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-83C46M483K" ></script>
        <script>
          {
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-83C46M483K')`
          }
        </script>
      </body>
    </html>
  )
}