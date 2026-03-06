// app/page.tsx
import Navbar from '@/components/layout/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="text-center mt-10">مرحباً بكم في مكتبة السودان</h1>
      </main>
    </>
  );
}