import styles from "../styles/Logo.module.css"
import { BsFlower3 } from "react-icons/bs";

export default function Logo(props: any) {
    return <div className={`d-flex justify-content-between align-items-center ${styles.logo}`}>
                <h2><BsFlower3/></h2>
                <span>Kayara </span>
                {props.children}
            </div>
                   

}