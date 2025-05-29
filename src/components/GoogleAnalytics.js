import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <>
      {/* Carga asíncrona del script de Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-ZFZE480F9S"
      />

      {/* Inicialización de Google Analytics */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ZFZE480F9S');
        `}
      </Script>
    </>
  );
}