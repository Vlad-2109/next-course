import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import styles from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image
            src={logoImg.src}
            alt="A plate with food on it"
            priority
            width={80}
            height={80}
          />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href='/meals'>Browse meals</NavLink>
            </li>
            <li>
              <NavLink href='/community'>Foodies community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
