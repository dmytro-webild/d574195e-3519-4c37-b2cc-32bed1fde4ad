import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Archivo } from "next/font/google";



export const metadata: Metadata = {
  title: "Casa de Guapos | Barbería Premium en Guayaquil",
  description: "Experimenta el mejor servicio de barbería en Guayaquil con Casa de Guapos. Cortes de navaja expertos, afeitados clásicos y atención personalizada. ¡Reserva tu cita hoy!",
  keywords: ["barbería, guayaquil, urdesa, corte de cabello, afeitado, barba, grooming masculino, salon de caballeros, peluquería hombre, barbería premium, cita online"],
  openGraph: {
    "title": "Casa de Guapos | Barbería Premium en Guayaquil",
    "description": "Experimenta el mejor servicio de barbería en Guayaquil con Casa de Guapos. Cortes de navaja expertos, afeitados clásicos y atención personalizada. ¡Reserva tu cita hoy!",
    "url": "https://www.casadeguapos.com",
    "siteName": "Casa de Guapos",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/full-shot-barber-hair-salon_23-2148242782.jpg",
        "alt": "Interior de barbería Casa de Guapos"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Casa de Guapos | Barbería Premium en Guayaquil",
    "description": "Experimenta el mejor servicio de barbería en Guayaquil con Casa de Guapos. Cortes de navaja expertos, afeitados clásicos y atención personalizada. ¡Reserva tu cita hoy!",
    "images": [
      "http://img.b2bpic.net/free-photo/full-shot-barber-hair-salon_23-2148242782.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${archivo.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
