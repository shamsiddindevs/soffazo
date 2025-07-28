import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/components/language-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Sof Fazo – Professional Pol Lattalar Ishlab Chiqaruvchi Sex",
    template: "%s | Sof Fazo",
  },
  description:
    "Yuqori sifatli pol lattalar kerakmi? Sof Fazo - Toshkent shahrida joylashgan yetakchi pol lattalar ishlab chiqaruvchisi va eksport qiluvchi kompaniya.",
  keywords: [
    "Sof Fazo",
    "pol lattalar",
    "ishlab chiqaruvchi",
    "Toshkent",
    "O'zbekiston",
    "eksport",
    "professional pol lattalar",
    "sifatli pol lattalar",
    "lattalar ishlab chiqarish",
    "lattalar eksporti",
    "lattalar ishlab chiqarish Toshkent",
    "lattalar eksporti O'zbekiston",
    "lattalar ishlab chiqaruvchi Toshkent",
    "lattalar ishlab chiqaruvchi O'zbekiston",
    "lattalar eksporti Toshkent",
    "tozalash vositalari",
    "professional lattalar",  
    "pollattalar",
    "pollatta",
    "sifatli pol lattalar",
    "нетканое полотно",
    "купить нетканое полотно",
    "нетканый материал",
    "производитель нетканого полотна",
    "нетканое полотно Узбекистан",
    "половая тряпка",
    "производство тряпок Ташкент",
    "Uzbekistan textile export",
  ],
  authors: [{ name: "Sof Fazo", url: "https://soffazo.uz" }],
  creator: "SofFazo.uz",
  publisher: "SofFazo.uz",
  metadataBase: new URL("https://soffazo.uz"),
  openGraph: {
    title: "Sof Fazo – Pol Lattalar Ishlab Chiqaruvchi Kompaniya",
    description:
      "Toshkentdagi pol lattalar ishlab chiqarish va eksport qilish bo'yicha yetakchi kompaniya. Sifat, ishonch va eksport imkoniyatlari – Sof Fazo bilan.",
    url: "https://soffazo.uz",
    siteName: "Sof Fazo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sof Fazo toshkentda joylashgan pol lattalar ishlab chiqaruvchi va eksport qiluvchi kompaniya",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sof Fazo – Pol Lattalar Ishlab Chiqaruvchi Kompaniya – Toshkent",
    description: "Yuqori sifatli pol lattalar ishlab chiqaruvchisi va eksport qiluvchi brend  – SofFazo.uz",
    site: "@soffazo",
    creator: "@soffazo",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxSnippet: -1,
      maxVideoPreview: -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#fbbf24",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang= "uz" dir = "ltr" >
      <head>
      <script
          type="application/ld+json"
  dangerouslySetInnerHTML = {{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Sof Fazo",
      description: "Professional pol lattalar ishlab chiqaruvchi va eksport qiluvchi kompaniya  hamda  Toshkent shahrida joylashgan.",
      url: "https://soffazo.uz",
      logo: "https://soffazo.uz/logo.png",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toshkent",
        addressCountry: "UZ",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+998-90-123-45-67",
        contactType: "customer service",
      },
    }),
          }
}
        />
  </head>
  < body className = {`${geistSans.variable} ${geistMono.variable} antialiased`}>
    <LanguageProvider>{ children } </LanguageProvider>
    </body>
    </html>
  )
}
