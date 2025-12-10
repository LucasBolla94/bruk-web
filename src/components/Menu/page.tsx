import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Menu() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.logoArea}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={60}
            className={styles.logo}
          />
          <span className={styles.brand}>BrUk Couriers</span>
        </div>

        <nav className={styles.menu}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/book-job" className={styles.link}>
            Book a Job
          </Link>
          <Link href="/services" className={styles.link}>
            Services
          </Link>
          <Link href="/about" className={styles.link}>
            About Us
          </Link>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
