import styles from "../styles/Header.module.css"
import Link from 'next/link';
import Logo from "./Logo";

interface HeaderProps {
    currentPage: string; 
}

export default function Header(props: HeaderProps) {
    return <header>
        <nav>
            <div className={`container ${styles.containerHeader}`}>
                <div className={`d-flex justify-content-between w-100 align-items-center ${styles.headerFlex}`}>
                    <Logo></Logo>
                    <ul className="d-flex justify-content-between align-items-center">
                        <li>
                            <Link className={`${props.currentPage === 'home' ? styles.active : ''} ${styles.navLink}`} href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className={`${props.currentPage === 'projects' ? styles.active : ''} ${styles.navLink}`} href="/projects">
                                Projetos
                            </Link>
                        </li>
                        <li>
                            <Link className={`${props.currentPage === 'contact' ? styles.active : ''} ${styles.navLink}`} href="/contact">
                                Contato
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

}