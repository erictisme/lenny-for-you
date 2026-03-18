import { Hero } from "@/components/hero";
import { ProfileInput } from "@/components/profile-input";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <main className="w-full max-w-2xl">
        <Hero />
        <ProfileInput />
      </main>
      <Footer />
    </div>
  );
}
