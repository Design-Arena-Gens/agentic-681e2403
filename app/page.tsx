"use client";

import { motion } from "framer-motion";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.scene}>
        <div className={styles.skyGradient} />
        <CloudLayer />
        <CloudLayer offset styleName="mid" />
        <CloudLayer styleName="far" />
        <motion.div
          className={styles.hero}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <div className={styles.titleBlock}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            >
              Skyward Hustle
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            >
              A lone warrior defies gravity, sparring with the wind while an
              eagle mirrors his kung fu rhythm amongst the clouds.
            </motion.p>
          </div>
          <motion.div
            className={styles.characters}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.2 }}
          >
            <KungFuSilhouette />
            <EagleSilhouette />
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}

function CloudLayer({
  offset = false,
  styleName = "near"
}: {
  offset?: boolean;
  styleName?: "near" | "mid" | "far";
}) {
  return (
    <div
      className={`${styles.cloudLayer} ${styles[styleName]} ${
        offset ? styles.offset : ""
      }`}
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className={styles.cloud} />
      ))}
    </div>
  );
}

function KungFuSilhouette() {
  return (
    <motion.div
      className={styles.martialArtist}
      animate={{ y: ["0%", "-8%", "0%"] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg
        viewBox="0 0 160 120"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="warriorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1b2735" />
            <stop offset="100%" stopColor="#090a0f" />
          </linearGradient>
        </defs>
        <path
          fill="url(#warriorGradient)"
          d="M69 14c6 5 8 14 6 24l13 8 15-4 6 7-16 7 11 10-9 9 18 18-12 12-20-23-11 3-12 30-19-5 12-33-24 7 3-17 22-7-16-8 5-11 21 10 5-10-19-18 13-8-4-11 13-9z"
        />
        <path
          fill="#fff6"
          d="M103 38c7 3 8 10 3 14-5 4-12 2-13-4-1-5 4-12 10-10z"
        />
      </svg>
      <motion.div
        className={styles.energyTrail}
        animate={{ opacity: [0.4, 0.9, 0.4], scale: [0.9, 1.05, 0.9] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

function EagleSilhouette() {
  return (
    <motion.div
      className={styles.eagle}
      animate={{ y: ["0%", "5%", "0%"], rotate: ["-2deg", "2deg", "-2deg"] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg
        viewBox="0 0 220 140"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="eagleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1c304a" />
            <stop offset="100%" stopColor="#0a101d" />
          </linearGradient>
        </defs>
        <path
          fill="url(#eagleGradient)"
          d="M8 78c34-20 54-25 91-18 32-27 62-34 115-34-31 24-43 40-55 63 13 9 24 14 43 20-32 12-66 9-99-8-46 30-68 34-93 33 20-16 34-31 35-49-13 5-22 8-37 13z"
        />
        <path
          fill="#fff4"
          d="M154 36c8 3 11 10 4 14-8 4-15-3-12-9 2-4 5-6 8-5z"
        />
      </svg>
      <motion.div
        className={styles.wingFlare}
        animate={{ opacity: [0.2, 0.7, 0.2], scaleX: [1, 1.1, 1] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
