'use client';

import dynamic from 'next/dynamic';
import styles from './page.module.css';

// Dynamically import the Map component to avoid SSR issues
const MapComponent = dynamic(() => import('../components/MapComponent'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>My Location Map</h1>
      <MapComponent />
    </main>
  );
} 