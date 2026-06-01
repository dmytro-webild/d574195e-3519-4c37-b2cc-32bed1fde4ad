"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Award, CalendarCheck, Crown, Sparkles, Star, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSmall"
        background="fluid"
        cardStyle="gradient-radial"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Inicio",          id: "/"},
        {
          name: "Nosotros",          id: "#about"},
        {
          name: "Servicios",          id: "#services"},
        {
          name: "Productos",          id: "#products"},
        {
          name: "Precios",          id: "#pricing"},
        {
          name: "Testimonios",          id: "#testimonials"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Contacto",          id: "#contact"},
      ]}
      brandName="Casa de Guapos"
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EDyYpkv81DEDqMKR6uXi7rJRpX/uploaded-1780346773206-s2h2t5cs.png"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Casa de Guapos"
      description="Experimenta el aseo cinco estrellas por el que Casa de Guapos es conocido. Cortes de navaja expertos, genuina hospitalidad y un espacio acogedor diseñado para ti."
      buttons={[
        {
          text: "Reserva Tu Cita",          href: "#contact"},
      ]}
      slides={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EDyYpkv81DEDqMKR6uXi7rJRpX/uploaded-1780346773206-3dxpiqgs.jpg",          imageAlt: "Interior de barbería clásica y elegante"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EDyYpkv81DEDqMKR6uXi7rJRpX/uploaded-1780346773206-tsw2aum8.jpg",          imageAlt: "Barbero profesional trabajando en un cliente"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EDyYpkv81DEDqMKR6uXi7rJRpX/uploaded-1780346773206-szkgtgjp.jpg",          imageAlt: "Barbershop interior, general view"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-male-hairstylist-barber-shop_23-2147839825.jpg",          imageAlt: "Fachada moderna de Casa de Guapos"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-male-self-care-setting-still-life_23-2150326538.jpg",          imageAlt: "Herramientas de barbero vintage en exhibición"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/male-make-up-look-beauty-salon_23-2148784344.jpg",          imageAlt: "Barbero consultando a un cliente"},
      ]}
      autoplayDelay={4000}
      showDimOverlay={true}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Nuestra Excelencia en Números"
      metrics={[
        {
          icon: Star,
          label: "Calificación",          value: "5 Estrellas"},
        {
          icon: Users,
          label: "Clientes Satisfechos",          value: "+1,000"},
        {
          icon: CalendarCheck,
          label: "Años de Experiencia",          value: "+10"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardEight
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Corte de Cabello Personalizado",          description: "Diseñamos el corte perfecto que realza tu estilo y personalidad, utilizando técnicas modernas y clásicas.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-barber-finishing-haircut_23-2148298296.jpg",          imageAlt: "Hombre recibiendo un corte de cabello personalizado"},
        {
          title: "Afeitado Clásico a Navaja",          description: "Disfruta de un afeitado tradicional con toallas calientes, espuma rica y un acabado impecable para una piel suave.",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-bathroom_23-2150323118.jpg",          imageAlt: "Barbero realizando un afeitado clásico a navaja"},
        {
          title: "Recorte y Diseño de Barba",          description: "Expertos en dar forma y cuidar tu barba, con productos de alta calidad que la mantendrán saludable y definida.",          imageSrc: "http://img.b2bpic.net/free-photo/man-getting-his-beard-shaved-with-razor_107420-94801.jpg",          imageAlt: "Barbero recortando y diseñando una barba"},
      ]}
      title="Nuestros Servicios Premium"
      description="En Casa de Guapos, cada servicio está diseñado para la perfección. Desde cortes clásicos hasta afeitados de lujo, te garantizamos una experiencia inigualable."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "Pomada Clásica para el Cabello",          price: "$25.00",          imageSrc: "http://img.b2bpic.net/free-photo/expert-photography-equipment-recording-review-nd-filter-variable-nd-filter-review-camera-gear-equipment-video-ceator-influencer-social-media-star-distributing-online-content_482257-3766.jpg",          imageAlt: "Pomada para el cabello"},
        {
          id: "p2",          name: "Aceite Premium para Barba",          price: "$30.00",          imageSrc: "http://img.b2bpic.net/free-photo/man-doing-his-self-care-ritual_23-2149204960.jpg",          imageAlt: "Aceite para barba"},
        {
          id: "p3",          name: "Champú Fortificante para Hombres",          price: "$20.00",          imageSrc: "http://img.b2bpic.net/free-photo/man-holding-shaving-cream-bottle-with-copy-space_23-2148696646.jpg",          imageAlt: "Champú fortificante"},
        {
          id: "p4",          name: "Loción Post-Afeitado Calmante",          price: "$28.00",          imageSrc: "http://img.b2bpic.net/free-photo/tasty-raw-food-wooden-table-against-dark-wallpaper_23-2148101805.jpg",          imageAlt: "Loción post-afeitado"},
        {
          id: "p5",          name: "Bálsamo Modelador para Barba",          price: "$22.00",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-selfcare-products_23-2149313037.jpg",          imageAlt: "Bálsamo para barba"},
        {
          id: "p6",          name: "Kit de Afeitado Tradicional",          price: "$75.00",          imageSrc: "http://img.b2bpic.net/free-photo/toothbrush-natural-hair-brush_23-2148678023.jpg",          imageAlt: "Kit de afeitado"},
      ]}
      title="Nuestros Productos Exclusivos"
      description="Mantén tu estilo entre visitas con nuestra selección de productos de grooming de alta calidad, elegidos por nuestros expertos."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",          badge: "Popular",          badgeIcon: Sparkles,
          price: "$20",          subtitle: "Corte Rápido",          features: [
            "Corte de cabello estándar",            "Lavado y secado básico",            "Asesoramiento de estilo"],
        },
        {
          id: "pro",          badge: "Recomendado",          badgeIcon: Award,
          price: "$35",          subtitle: "Experiencia Completa",          features: [
            "Corte de cabello personalizado",            "Afeitado a navaja clásico",            "Masaje facial relajante",            "Productos premium"],
        },
        {
          id: "premium",          badge: "Exclusivo",          badgeIcon: Crown,
          price: "$50",          subtitle: "Día de Spa Masculino",          features: [
            "Corte de cabello y barba de autor",            "Afeitado de lujo con toalla caliente",            "Tratamiento facial hidratante",            "Productos exclusivos y obsequio"],
        },
      ]}
      title="Nuestros Precios"
      description="Explora nuestras opciones de servicios y elige el plan que mejor se adapte a tus necesidades de estilo y cuidado."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "Juan Pérez",          role: "Ejecutivo",          company: "Corporación XYZ",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-blond-bearded-male-dressed-black-leather-jacket_613910-11902.jpg",          imageAlt: "Retrato de Juan Pérez"},
        {
          id: "t2",          name: "Carlos Sánchez",          role: "Emprendedor",          company: "Innovate Labs",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-patient-table_23-2149103578.jpg",          imageAlt: "Retrato de Carlos Sánchez"},
        {
          id: "t3",          name: "Luis Gómez",          role: "Diseñador Gráfico",          company: "Creativa Publicidad",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/sucessful-bearded-businessman-white-shirt-is-posing-dark-photo-studio_613910-17276.jpg",          imageAlt: "Retrato de Luis Gómez"},
        {
          id: "t4",          name: "Diego Torres",          role: "Abogado",          company: "Lex Solutions",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-man-wearing-suit_23-2148831132.jpg",          imageAlt: "Retrato de Diego Torres"},
        {
          id: "t5",          name: "Marco Ríos",          role: "Ingeniero",          company: "Tecno Constructora",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-latin-man-smiling-confident-looking-side-street_839833-16493.jpg",          imageAlt: "Retrato de Marco Ríos"},
      ]}
      title="Lo Que Dicen Nuestros Clientes"
      description="La satisfacción de nuestros clientes es nuestra mejor carta de presentación. ¡Descubre por qué nos eligen!"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",          title: "¿Cómo puedo reservar una cita?",          content: "Puedes reservar tu cita directamente a través de nuestra página web en la sección de Contacto, llamándonos o visitando nuestra barbería."},
        {
          id: "f2",          title: "¿Qué métodos de pago aceptan?",          content: "Aceptamos efectivo, tarjetas de crédito/débito y pagos móviles para tu comodidad."},
        {
          id: "f3",          title: "¿Tienen servicios para barbas largas?",          content: "Sí, ofrecemos servicios especializados para el cuidado y diseño de barbas de todas las longitudes, utilizando productos de alta gama."},
        {
          id: "f4",          title: "¿Cuál es su política de cancelación?",          content: "Agradecemos que nos notifiques con al menos 24 horas de anticipación si necesitas cancelar o reprogramar tu cita."},
      ]}
      sideTitle="¿Preguntas Frecuentes?"
      sideDescription="Encuentra respuestas a las preguntas más comunes sobre nuestros servicios, reservas y experiencia en Casa de Guapos."
      faqsAnimation="slide-up"
      textPosition="left"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Agenda Tu Cita en Casa de Guapos"
      description="Estamos listos para transformarte. Contáctanos hoy mismo para reservar tu experiencia de grooming premium en Guayaquil."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Tu Nombre Completo",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Tu Correo Electrónico",          required: true,
        },
        {
          name: "phone",          type: "tel",          placeholder: "Tu Número de Teléfono",          required: false,
        },
      ]}
      multiSelect={{
        name: "service",        label: "Servicio de Interés",        options: [
          "Corte de Cabello",          "Afeitado a Navaja",          "Diseño de Barba",          "Experiencia Completa"],
      }}
      textarea={{
        name: "message",        placeholder: "Cuentanos sobre tu estilo deseado o tus dudas...",        rows: 4,
        required: false,
      }}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EDyYpkv81DEDqMKR6uXi7rJRpX/uploaded-1780346773206-szkgtgjp.jpg"
      imageAlt="Barbershop interior, general view"
      mediaAnimation="opacity"
      mediaPosition="right"
      buttonText="Enviar Mensaje y Reservar"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Casa de Guapos"
      columns={[
        {
          title: "Servicios",          items: [
            {
              label: "Cortes de Cabello",              href: "#services"},
            {
              label: "Afeitados",              href: "#services"},
            {
              label: "Diseño de Barba",              href: "#services"},
          ],
        },
        {
          title: "La Barbería",          items: [
            {
              label: "Sobre Nosotros",              href: "#about"},
            {
              label: "Testimonios",              href: "#testimonials"},
            {
              label: "Precios",              href: "#pricing"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Política de Privacidad",              href: "#"},
            {
              label: "Términos de Servicio",              href: "#"},
          ],
        },
        {
          title: "Síguenos",          items: [
            {
              label: "Instagram",              href: "https://www.instagram.com/casadeguapos/"},
          ],
        }
      ]}
      copyrightText="© 2024 Casa de Guapos. Todos los derechos reservados."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}