'use client';

import { useEffect, useRef } from 'react';
import type { Map as LeafletMap } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './page.module.css';

const DEFAULT_CENTER: [number, number] = [55.8642, -4.2518]; // Glasgow

export default function Maps() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    let cancelled = false;

    const initMap = async () => {
      if (!mapRef.current || cancelled) return;

      const L = await import('leaflet');

      // Evitar recriar no hot reload
      if (mapInstanceRef.current) return;

      const map = L.map(mapRef.current, {
        zoomControl: false,
        attributionControl: false,
      }).setView(DEFAULT_CENTER, 13);

      mapInstanceRef.current = map;

      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        {
          maxZoom: 19,
        }
      ).addTo(map);
    };

    initMap();

    return () => {
      cancelled = true;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div ref={mapRef} className={styles.map} />

      <div className={styles.overlay}>
        <h2 className={styles.title}>BrUk Couriers – Glasgow Live Map</h2>
        <p className={styles.subtitle}>
          Soon powered by <b>maps.bolla.network</b> with real-time routes.
        </p>
      </div>
    </div>
  );
}
