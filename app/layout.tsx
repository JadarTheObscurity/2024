import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
// fontawesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export async function generateMetadata(): Promise<Metadata> {
  const image = "https://sitcon.org/2024/cfp/og.png";
  const title = "SITCON 2024 Call For Paper";
  const description =
    "學生計算機年會（Students’ Information Technology Conference）自 2013 年發起，以學生為本、由學生自發舉辦，長期投身學生資訊教育與推廣開源精神，鼓勵學生們成為實踐者，貢獻程式碼、打造並部署服務、透過實際行動推動專案，最後將這些結晶分享出去，讓更多人能關注你認為重要的議題，打造更緊密的社群。";
  const metadata: Metadata = {
    title,
    authors: [{ name: "SITCON" }],
    keywords: "SITCON, SITCON 2024",
    description,
    metadataBase: new URL("https://sitcon.org/2024/"),
    openGraph: {
      type: "website",
      locale: "zh_TW",
      url: "https://sitcon.org/2024/",
      title,
      description,
      siteName: "SITCON",
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      creator: "@sitcontw",
      site: "@sitcontw",
      card: "summary_large_image",
      images: image,
      title,
      description,
    },
  };
  return metadata;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Noto+Sans+TC:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GVRT4CHSQJ"
        ></script>
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-GVRT4CHSQJ');`,
          }}
        />
        <Script
          id="pancake"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `console.log("%c美味的蓬蓬鬆餅都在這裡！%c https://pancake.tw ", "background-color: #13AA13; color: white; padding: 5px;", "background-color: #f2f2f2; color: white; padding: 5px;");`,
          }}
        />
      </head>
      <body className="font-sans leading-8 overflow-x-hidden">{children}</body>
    </html>
  );
}
