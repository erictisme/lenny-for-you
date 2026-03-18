import { Hero } from "@/components/hero";
import { ProfileInput } from "@/components/profile-input";
import { Footer } from "@/components/footer";
import { BYOKToggle } from "@/components/byok-toggle";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="fixed top-4 right-4 z-50">
        <BYOKToggle />
      </div>
      <main className="w-full max-w-2xl">
        <Hero />
        <ProfileInput />
      </main>
      <Footer />
    </div>
  );
}
