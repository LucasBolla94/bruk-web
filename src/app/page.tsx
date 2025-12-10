import Menu from "@/components/Menu/page";
import Map from "@/components/Map/page";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Menu />
      <Map />
    </div>
    
  );
}