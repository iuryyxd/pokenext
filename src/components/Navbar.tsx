import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/images/pokeball.png"
          width={30}
          height={30}
          alt="Pokenext logo"
        />
        <h1>Pokenext</h1>
      </div>

      <ul className={styles.link__items}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </header>
  );
}
