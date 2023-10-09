import styles from "../styles/Logo.module.css"
import { BsFlower3 } from "react-icons/bs";

export default function Logo(props: any) {
    return <div className={`d-flex justify-content-between align-items-center ${styles.logo}`}>
                <div className={styles.flower}><BsFlower3/></div>
                <span>Kayara </span>
                {props.children}
            </div>
                   

}