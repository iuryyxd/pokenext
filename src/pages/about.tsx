import Image from "next/image";
import styles from "../styles/About.module.scss";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi doloribus
        eligendi quis blanditiis perspiciatis sint error quae nisi similique
        itaque vitae harum, molestias consequatur voluptas esse deserunt veniam
        atque? Dolore?
      </p>
      <Image src="/images/charizard.png" width={300} height={300} alt="charizard" />
    </div>
  );
}
