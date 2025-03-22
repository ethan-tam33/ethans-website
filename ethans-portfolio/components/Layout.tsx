import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        {children}
      </main>
    </div>
  );
}