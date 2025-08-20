import { Header, Hero, Gallery, About, Reservation, Footer } from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000015]">
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Gallery Section */}
        <Gallery />

        {/* About Section */}
        <About />

        {/* Reservation Section */}
        <Reservation />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
