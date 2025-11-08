"use client";

import { Card, CardContent } from "@/components/ui/card";
// Kita tidak lagi butuh Carousel atau Autoplay
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";

// Data testimoni tetap sama
const testimonials = [
  {
    quote:
      "Platform ini benar-benar mengubah cara kami menggalang dana. Transparan, cepat, dan sangat mudah digunakan. Luar biasa!",
    name: "Siti Aminah",
    title: "Project Manager, Hijau Lestari",
    avatar: "/placeholder-user.jpg",
  },
  {
    quote:
      "Sebagai donatur, saya merasa jauh lebih aman berdonasi di sini. Saya bisa melacak aliran dana saya di blockchain.",
    name: "Budi Santoso",
    title: "Donatur Aktif",
    avatar: "/placeholder-user.jpg",
  },
  {
    quote:
      "Awalnya saya ragu, tapi biaya gas yang rendah di Lisk membuat proyek kami berjalan. Fitur-fiturnya sangat membantu.",
    name: "Rian Hidayat",
    title: "Kreator Proyek",
    avatar: "/placeholder-user.jpg",
  },
  {
    quote:
      "Dukungan komunitas dan transparansi adalah yang utama. Domain memberikannya. Sangat direkomendasikan!",
    name: "Dewi K.",
    title: "Pegiat Lingkungan",
    avatar: "/placeholder-user.jpg",
  },
];

export function TestimonialSlider() {
  // Kita tidak butuh plugin state lagi
  // const [plugin] = React.useState(() => ...);

  return (
    <section id="testimonials" className="w-full py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Judul Section (tidak berubah) */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm font-medium text-primary">
            Testimoni
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Apa Kata Mereka?
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            Dengarkan langsung dari para kreator dan donatur yang telah
            menggunakan platform kami.
          </p>
        </div>

        {/* --- INI BAGIAN YANG DIUBAH TOTAL --- */}
        {/* Mengadopsi struktur dari 'tech-slider' di page.tsx */}
        <div
          className="relative flex overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          {/* Kita pakai animasi yang sama dengan 'tech-slider' Anda */}
          <div className="flex w-max animate-marquee-infinite">
            {/* Loop Pertama */}
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                // Beri lebar agar konsisten, dan margin
                className="mx-4 w-96 flex-shrink-0"
              >
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6 flex flex-col items-start gap-4">
                      <blockquote className="text-lg font-medium text-foreground border-l-4 border-primary pl-4 italic">
                        &quot;{testimonial.quote}&quot;
                      </blockquote>
                      <div className="flex items-center gap-4 pt-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}

            {/* Loop Duplikat (Wajib ada untuk efek 'seamless') */}
            {testimonials.map((testimonial, index) => (
              <div
                key={`${index}-dup`}
                className="mx-4 w-96 flex-shrink-0"
                aria-hidden="true"
              >
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6 flex flex-col items-start gap-4">
                      <blockquote className="text-lg font-medium text-foreground border-l-4 border-primary pl-4 italic">
                        &quot;{testimonial.quote}&quot;
                      </blockquote>
                      <div className="flex items-center gap-4 pt-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* --- BATAS PERUBAHAN --- */}
      </div>
    </section>
  );
}
