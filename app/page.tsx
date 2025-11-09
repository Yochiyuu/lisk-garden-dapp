// "use client" // Diperlukan untuk hook (useCallback) dan partikel
"use client";

import { TestimonialSlider } from "@/components/TestimonialSlider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DollarSign,
  Github,
  Gitlab,
  HandCoins,
  Package, // Ikon untuk "Buat"
  ShieldCheck,
  Target,
  Twitter,
  Users, // Ikon untuk "Donasi"
  Wallet,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Import untuk Partikel

const techPartners = [
  // Ini pakai logo
  { name: "Lisk", id: "lisk", logoSrc: null },
  { name: "Sepolia", id: "sepolia", logoSrc: null },
  { name: "Ethereum", id: "eth", logoSrc: null },
  { name: "Next.js", id: "nextjs", logoSrc: "/logos/nextjs.svg" },
  { name: "Vercel", id: "vercel", logoSrc: "/logos/vercel.svg" },
  { name: "Thirdweb", id: "thirdweb", logoSrc: "/logos/thirdweb.svg" },
  { name: "Solidity", id: "solidity", logoSrc: null },
  { name: "PannaSDK", id: "panna", logoSrc: null },
];

const globalStats = {
  totalRaised: "125 ETH",
  totalBackers: 893,
  totalProjects: 42,
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col">
        {/* ===== SECTION 1: HERO ===== */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
          {/* Konten */}
          <div className="container px-4 mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Kiri: Teks & CTA */}
              <div className="space-y-8 text-center lg:text-left animate-fade-in">
                <h1 className="text-5xl font-extrabold sm:text-6xl xl:text-7xl bg-gradient-to-br from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_2px_40px_rgba(99,102,241,0.25)]">
                  Donasi Taman Indonesia.
                </h1>

                <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
                  Platform crowdfunding transparan berbasis Lisk Blockchain
                  dengan smart contract otomatis.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    asChild
                    className="px-8 py-6 text-lg neon-button"
                  >
                    <Link href="/crowdfund">🚀 Luncurkan App</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="px-8 py-6 text-lg glass-outline"
                  >
                    <Link href="#features">Pelajari Fitur →</Link>
                  </Button>
                </div>
              </div>

              {/* ... (kode di atas tidak berubah) */}

              {/* Kanan: Statistik (Menggantikan Ikon) */}
              <div className="flex justify-center animate-fade-in-delay">
                {/* Kartu Statistik Glassmorphism (Diperbarui dengan Tema Biru/Cyan) */}
                <div
                  className="
            grid grid-cols-1 gap-6 w-full max-w-md p-0.5 // P-0.5 untuk border tipis gradien
            bg-gradient-to-br from-indigo-500/50 via-cyan-500/50 to-indigo-500/50 // Gradien border: Indigo -> Cyan -> Indigo
            rounded-2xl shadow-xl
            relative overflow-hidden
            group 
            before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[inherit] before:bg-gradient-to-br before:from-indigo-400 before:via-cyan-400 before:to-indigo-400 // Gradien hover: Indigo -> Cyan -> Indigo (Lebih Terang)
            before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500
          "
                >
                  <div
                    className="
              relative z-10
              grid grid-cols-1 gap-6 w-full bg-background/70 backdrop-blur-xl rounded-2xl p-6
              border border-white/5
              transition-all duration-300
              group-hover:scale-[0.99] group-hover:shadow-neon-blue // Shadow neon BIRU
            "
                  >
                    {/* Kartu Stat 1 */}
                    <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-background/50 to-background/30 border border-border/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1">
                      <div className="p-3 rounded-full bg-gradient-to-br from-primary/30 to-cyan-500/30 shadow-md">
                        {" "}
                        {/* Latar ikon: Primary -> Cyan */}
                        <DollarSign className="w-7 h-7 text-cyan-400 drop-shadow-[0_0_8px_rgba(22,163,221,0.7)]" />{" "}
                        {/* Ikon & shadow glow BIRU (Cyan-500 RGB) */}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Total Dana Terkumpul
                        </p>
                        <p className="text-3xl font-bold text-foreground">
                          {globalStats.totalRaised}
                        </p>
                      </div>
                    </div>

                    {/* Kartu Stat 2 */}
                    <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-background/50 to-background/30 border border-border/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1">
                      <div className="p-3 rounded-full bg-gradient-to-br from-primary/30 to-cyan-500/30 shadow-md">
                        <Users className="w-7 h-7 text-cyan-400 drop-shadow-[0_0_8px_rgba(22,163,221,0.7)]" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Total Donatur
                        </p>
                        <p className="text-3xl font-bold text-foreground">
                          {globalStats.totalBackers}
                        </p>
                      </div>
                    </div>

                    {/* Kartu Stat 3 */}
                    <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-background/50 to-background/30 border border-border/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1">
                      <div className="p-3 rounded-full bg-gradient-to-br from-primary/30 to-cyan-500/30 shadow-md">
                        <Package className="w-7 h-7 text-cyan-400 drop-shadow-[0_0_8px_rgba(22,163,221,0.7)]" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Total Proyek
                        </p>
                        <p className="text-3xl font-bold text-foreground">
                          {globalStats.totalProjects}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ... (kode di bawah tidak berubah) */}
            </div>
          </div>
        </section>

        {/* ===== SECTION 2: TECH PARTNERS (Slider Teknologi) ===== */}
        {/* Dipindahkan ke atas untuk membangun kepercayaan */}
        <section
          id="tech-slider"
          className="w-full py-16 md:py-24 bg-background"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-muted-foreground">
                Didukung oleh Teknologi Terkini
              </h2>
            </div>

            <div
              className="relative flex overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              }}
            >
              <div className="flex w-max animate-marquee-infinite">
                {/* Loop Pertama */}
                {techPartners.map((partner) => (
                  <div
                    key={partner.id}
                    className="mx-10 flex h-8 w-32 flex-shrink-0 items-center justify-center"
                  >
                    {partner.logoSrc ? (
                      <Image
                        src={partner.logoSrc}
                        alt={`${partner.name} Logo`}
                        width={128}
                        height={32}
                        className="h-full w-full object-contain transition-all duration-300 hover:scale-105"
                      />
                    ) : (
                      <span className="w-full text-center text-2xl font-medium text-muted-foreground transition-all duration-300 hover:scale-105">
                        {partner.name}
                      </span>
                    )}
                  </div>
                ))}

                {/* Loop Duplikat */}
                {techPartners.map((partner) => (
                  <div
                    key={`${partner.id}-dup`}
                    className="mx-10 flex h-8 w-32 flex-shrink-0 items-center justify-center"
                    aria-hidden="true"
                  >
                    {partner.logoSrc ? (
                      <Image
                        src={partner.logoSrc}
                        alt={`${partner.name} Logo`}
                        width={128}
                        height={32}
                        className="h-full w-full object-contain transition-all duration-300 hover:scale-105"
                      />
                    ) : (
                      <span className="w-full text-center text-2xl font-medium text-muted-foreground transition-all duration-300 hover:scale-105">
                        {partner.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 3: FEATURES ===== */}
        <section id="features" className="w-full py-16 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm font-medium text-primary">
                Fitur Unggulan
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Mengapa Memilih Domain?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Kami memanfaatkan kekuatan Lisk untuk menyediakan platform yang
                adil, transparan, dan efisien untuk penggalangan dana.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              {/* Kartu 1 (Putih Bersih) */}
              <Card className="bg-card shadow-sm hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center sm:text-left">
                  <div className="mb-4 flex justify-center sm:justify-start">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <ShieldCheck className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Transparan & Aman</h3>
                  <p className="text-muted-foreground">
                    Setiap pendanaan dicatat di blockchain. Kontrak pintar
                    mengelola dana, memastikan dana hanya cair saat target
                    tercapai.
                  </p>
                </CardContent>
              </Card>
              {/* Kartu 2 (Putih Bersih) */}
              <Card className="bg-card shadow-sm hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center sm:text-left">
                  <div className="mb-4 flex justify-center sm:justify-start">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <Zap className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Biaya Rendah</h3>
                  <p className="text-muted-foreground">
                    Dibangun di atas Lisk, kami menawarkan biaya transaksi yang
                    jauh lebih rendah dibandingkan platform tradisional.
                  </p>
                </CardContent>
              </Card>
              {/* Kartu 3 (Putih Bersih) */}
              <Card className="bg-card shadow-sm hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center sm:text-left">
                  <div className="mb-4 flex justify-center sm:justify-start">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Pendanaan Global</h3>
                  <p className="text-muted-foreground">
                    Akses pool pendana global tanpa batasan perbankan
                    tradisional. Siapapun, dimanapun, dapat berpartisipasi.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: HOW IT WORKS (Menggantikan About) ===== */}
        <section
          id="how-it-works"
          className="w-full py-16 md:py-24 bg-background"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm font-medium text-primary">
                Cara Kerja
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Mulai dalam 3 Langkah Mudah
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Proses kami dirancang agar sederhana dan aman, didukung penuh
                oleh smart contract.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              {/* Step 1 */}
              <Card className="bg-card shadow-sm hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Package className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">1. Buat Proyek</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Jelaskan ide Anda, tentukan target pendanaan, dan atur batas
                    waktu. Luncurkan kampanye Anda di blockchain.
                  </p>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="bg-card shadow-sm hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <HandCoins className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">2. Beri Dukungan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Jelajahi proyek dan beri donasi ke ide yang Anda sukai. Dana
                    Anda disimpan dengan aman di smart contract.
                  </p>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="bg-card shadow-sm hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Wallet className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">3. Capai Target</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Jika target tercapai, dana akan otomatis cair ke kreator.
                    Jika tidak, dana akan dikembalikan ke donatur.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ===== SECTION 5: TESTIMONIALS ===== */}
        <TestimonialSlider />

        {/* ===== SECTION 6: FINAL CTA ===== */}
        <section id="cta" className="w-full py-20 md:py-32 bg-muted/50">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl mb-6">
              Siap Membangun Masa Depan?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Jelajahi proyek inovatif atau mulai kampanye Anda sendiri hari
              ini. Bergabunglah dengan revolusi crowdfunding yang transparan.
            </p>
            <Button
              size="lg"
              asChild
              className="px-10 py-7 text-xl neon-button"
            >
              <Link href="/crowdfund">🚀 Luncurkan App Sekarang</Link>
            </Button>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="w-full bg-card border-t border-border py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-2xl font-bold text-foreground">Domain</h3>
              <p className="text-sm text-muted-foreground mt-2 max-w-xs">
                Platform crowdfunding transparan di atas Lisk Blockchain.
              </p>
              <div className="flex gap-4 mt-6">
                <Link
                  href="#"
                  aria-label="Twitter"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </Link>
                <Link
                  href="#"
                  aria-label="Github"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-6 h-6" />
                </Link>
                <Link
                  href="#"
                  aria-label="Gitlab"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Gitlab className="w-6 h-6" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Proyek</h4>
              <nav className="flex flex-col gap-3">
                <Link
                  href="/crowdfund"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  prefetch={false}
                >
                  Jelajahi Proyek
                </Link>
                <Link
                  href="/crowdfund"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  prefetch={false}
                >
                  Buat Proyek
                </Link>
                <Link
                  href="#how-it-works"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  prefetch={false}
                >
                  Cara Kerja
                </Link>
              </nav>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Perusahaan</h4>
              <nav className="flex flex-col gap-3">
                <Link
                  href="#how-it-works"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  prefetch={false}
                >
                  Tentang Kami
                </Link>
                <Link
                  href="#features"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  prefetch={false}
                >
                  Fitur
                </Link>
              </nav>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <nav className="flex flex-col gap-3">
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  prefetch={false}
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  prefetch={false}
                >
                  Privacy Policy
                </Link>
              </nav>
            </div>
          </div>

          <div className="border-t border-border mt-10 pt-8 text-center">
            <p className="text-xs text-muted-foreground">
              &copy; 2025 Domain. Dibangun di atas Lisk Sepolia.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
