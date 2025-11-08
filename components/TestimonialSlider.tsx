"use client";

import * as React from "react";
// import Image from "next/image"; // Komponen Image dari Next.js terkadang error di environment non-Next.js
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"; // Impor plugin autoplay

// 1. Buat data mock untuk testimoni
const testimonials = [
  {
    quote:
      "Platform ini benar-benar mengubah cara kami menggalang dana. Transparan, cepat, dan sangat mudah digunakan. Luar biasa!",
    name: "Siti Aminah",
    title: "Project Manager, Hijau Lestari",
    avatar: "/placeholder-user.jpg", // Ganti dengan path ke gambar Anda
  },
  {
    quote:
      "Sebagai donatur, saya merasa jauh lebih aman berdonasi di sini. Saya bisa melacak aliran dana saya di blockchain.",
    name: "Budi Santoso",
    title: "Donatur Aktif",
    avatar: "/placeholder-user.jpg", // Ganti dengan path ke gambar Anda
  },
  {
    quote:
      "Awalnya saya ragu, tapi biaya gas yang rendah di Lisk membuat proyek kami berjalan. Fitur-fiturnya sangat membantu.",
    name: "Rian Hidayat",
    title: "Kreator Proyek",
    avatar: "/placeholder-user.jpg", // Ganti dengan path ke gambar Anda
  },
  {
    quote:
      "Dukungan komunitas dan transparansi adalah yang utama. Domain memberikannya. Sangat direkomendasikan!",
    name: "Dewi K.",
    title: "Pegiat Lingkungan",
    avatar: "/placeholder-user.jpg", // Ganti dengan path ke gambar Anda
  },
];

// 2. Buat komponen Section-nya
export function TestimonialSlider() {
  // Buat ref untuk menyimpan instance plugin
  const plugin = React.useRef(
    Autoplay({
      delay: 4000, // Delay 4 detik antar slide
      stopOnInteraction: false, // Tetap autoplay meski user berinteraksi
      stopOnMouseEnter: true, // Berhenti autoplay saat mouse di atas carousel
    })
  );

  return (
    <section
      id="testimonials"
      className="w-full py-16 md:py-24 bg-muted/50"
    >
      <div className="container px-4 md:px-6 mx-auto">
        {/* Judul Section */}
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

        {/* Komponen Carousel */}
        <Carousel
          // Masukkan plugin ke dalam carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6 flex flex-col items-start gap-4">
                      <blockquote className="text-lg font-medium text-foreground border-l-4 border-primary pl-4 italic">
                        &quot;{testimonial.quote}&quot;
                      </blockquote>
                      <div className="flex items-center gap-4 pt-4">
                        {/* Menggunakan tag <img> biasa untuk menghindari error kompilasi */}
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}