import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <>
    {/* <!-- Google tag (gtag.js) --> */}
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ZFZE480F9S"></Script>
    <Script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments)}
      gtag('js', new Date());

      gtag('config', 'G-ZFZE480F9S');
    </Script>
      {/* <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
        `}
      </Script> */}
    </>
  );
}