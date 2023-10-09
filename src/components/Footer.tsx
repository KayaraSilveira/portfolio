import { BsFlower3 } from "react-icons/bs";
import styles from "../styles/Footer.module.css"

export default function Contact() {
    return <footer>
        <div className="container">
            <div className={`d-flex justify-content-end ${styles.footerText}`}>
                <p>Copyrights © 2023 - Developed by Kayara <BsFlower3></BsFlower3></p>
            </div>
        </div>
    </footer>
}