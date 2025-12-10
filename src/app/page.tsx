import Menu from "@/components/Menu/page";
import Maps from "@/components/Maps/page";
import Login from "@/components/Login/page";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      
      {/* TOPO */}
      <div className={styles.menu}>
        <Menu />
      </div>

      {/* CONTEÚDO */}
      <div className={styles.content}>
        <div className={styles.maps}>
          <Maps />
        </div>

        <Login />
      </div>

    </div>
  );
}
