import { useState } from 'react';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      url: 'https://cdn.poehali.dev/projects/ac6fd5b3-0849-454b-ba22-650bd37658d2/files/705fb75b-9320-4216-b710-42e0e9bfbf28.jpg',
      alt: 'Masquerade Mask'
    },
    {
      url: 'https://cdn.poehali.dev/projects/ac6fd5b3-0849-454b-ba22-650bd37658d2/files/9e6d3963-0cbb-4e27-9e69-e27ee351f294.jpg',
      alt: 'Dancing in Mask'
    },
    {
      url: 'https://cdn.poehali.dev/projects/ac6fd5b3-0849-454b-ba22-650bd37658d2/files/705fb75b-9320-4216-b710-42e0e9bfbf28.jpg',
      alt: 'Luxury Mask'
    },
    {
      url: 'https://cdn.poehali.dev/projects/ac6fd5b3-0849-454b-ba22-650bd37658d2/files/9e6d3963-0cbb-4e27-9e69-e27ee351f294.jpg',
      alt: 'Night Party'
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/ac6fd5b3-0849-454b-ba22-650bd37658d2/files/980f5bef-be82-4abe-b27f-42199cfc35d7.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

      <div className="relative z-10">
        <header className="py-8 text-center animate-fade-in">
          <div className="neon-text-gold text-xl md:text-2xl font-semibold mb-4 animate-pulse-neon">
            Evening Masquerade
          </div>
          <h1 className="neon-text text-5xl md:text-7xl font-black mb-6 tracking-wider">
            VANILLA UNICORN
          </h1>
          <p className="neon-text-purple text-3xl md:text-4xl font-bold mb-8">
            Clube
          </p>
        </header>

        <section className="container mx-auto px-4 py-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Card className="bg-black/60 backdrop-blur-md border-2 border-primary/30 neon-border p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 neon-text-purple">
              Lineup
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-primary/10 rounded-lg border border-primary/30 hover:border-primary/60 transition-all hover:scale-105">
                <div className="text-xl font-semibold text-primary mb-2">Voodoo</div>
                <div className="text-sm text-muted-foreground">DJ</div>
              </div>
              <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/30 hover:border-secondary/60 transition-all hover:scale-105">
                <div className="text-xl font-semibold text-secondary mb-2">Melissa Vance</div>
                <div className="text-sm text-muted-foreground">DJ</div>
              </div>
              <div className="p-4 bg-primary/10 rounded-lg border border-primary/30 hover:border-primary/60 transition-all hover:scale-105">
                <div className="text-xl font-semibold text-primary mb-2">Maria Vance</div>
                <div className="text-sm text-muted-foreground">DJ</div>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <div className="p-4 bg-accent/10 rounded-lg border border-accent/40 hover:border-accent/70 transition-all hover:scale-105">
                <div className="text-xl font-semibold text-accent mb-2">DJ Suren Vance</div>
                <div className="text-sm text-muted-foreground">Headliner</div>
              </div>
            </div>
          </Card>
        </section>

        <section className="container mx-auto px-4 py-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-4xl font-bold text-center mb-12 neon-text">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer relative overflow-hidden rounded-lg border-2 border-primary/30 hover:border-primary transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-semibold neon-text-purple">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <img
                src={galleryImages[selectedImage].url}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-auto rounded-lg border-4 border-primary/50 neon-border"
              />
              <button
                className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center neon-border"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}

        <footer className="py-12 text-center text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-lg">
            <span className="neon-text-gold">Vanilla Unicorn</span> · Evening Masquerade
          </p>
          <p className="text-sm mt-2">Get ready for an unforgettable night</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
