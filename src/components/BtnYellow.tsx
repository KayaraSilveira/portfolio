import { FaArrowRightLong } from "react-icons/fa6";
import styles from "../styles/BtnYellow.module.css"

type ButtonType = "button" | "submit" | "reset";

interface BtnYellowProps {
    text: string; 
    type?: ButtonType;
    disabled?: boolean;
}

export default function BtnYellow(props: BtnYellowProps) {
    return <button type={props.type || "button"} className={styles.btnYellow} disabled={props.disabled}>
        {props.text} <FaArrowRightLong/>
    </button>
}