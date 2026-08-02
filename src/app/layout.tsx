import type { Metadata } from "next";
import Script from 'next/script';
import localFont from 'next/font/local';
import "./styles/globals.scss";
import "./styles/navbar.scss";
import "./styles/footer.scss";
import "./styles/home.scss";
import "./styles/blog.scss";
import "./styles/single-blog.scss";
import "./styles/services.scss";
import "./styles/contact.scss";
import "./styles/expertise.scss";
import "./styles/text-marquee.scss";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Poppins = localFont({
  src: [
    {
      path: './fonts/Poppins-Black.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-ExtraBold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Bold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-SemiBold.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Medium.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Regular.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Light.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
  ],
  variable: '--font-Poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "TwoPoints Studio | Creative & Marketing Agency",
  description: "We help brands grow through strategy, design, virtual product photography, 3D visuals, and powerful digital marketing solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Poppins.variable} antialiased`}>
        {/* Meta Pixel Code */}
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1941188220074431');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript><img height="1" width="1" style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1941188220074431&ev=PageView&noscript=1"
          /></noscript>
          {/* End Meta Pixel Code  */}
        <Toaster position="top-right" reverseOrder={false} /> 
          <Navbar />
            {children}
          <Footer />
      </body>
    </html>
  );
}
