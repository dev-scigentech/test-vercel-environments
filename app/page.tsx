import { Geist, Geist_Mono } from "next/font/google";

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5 px-4">
      <div className="text-center max-w-2xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 
            className="text-6xl md:text-7xl font-light tracking-tight text-foreground text-balance"
            style={{ fontFamily: geist.style.fontFamily }}
          >
            Hello
          </h1>
          <p 
            className="text-xl md:text-2xl text-secondary font-light leading-relaxed"
            style={{ fontFamily: geist.style.fontFamily }}
          >
            Welcome to your new beginning
          </p>
        </div>

        <div className="pt-8">
          <button
            className="inline-block px-8 py-3 bg-primary text-background rounded-full font-medium hover:bg-accent transition-colors duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/50"
            style={{ fontFamily: geist.style.fontFamily }}
          >
            Get Started
          </button>
        </div>

        <div className="pt-16 text-sm text-secondary/60">
          <p style={{ fontFamily: geistMono.style.fontFamily }}>
            Built with Next.js & Tailwind
          </p>
        </div>
      </div>
    </main>
  );
}
