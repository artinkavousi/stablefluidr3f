import { Inter } from 'next/font/google';
import { Effect } from '../effects/Effect';
import { ControlPanel } from '@/components/UI/ControlPanel';
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`w-full h-screen ${inter.className}`}>
      <ErrorBoundary>
        <Effect className="w-full h-full" />
        <ControlPanel />
      </ErrorBoundary>
    </main>
  );
}
