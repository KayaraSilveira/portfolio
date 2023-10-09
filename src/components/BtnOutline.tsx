import styles from "../styles/BtnOutline.module.css"

type ButtonType = "button" | "submit" | "reset";

interface BtnOutlineProps {
    text: string; 
    type?: ButtonType;
    children: any;
}

export default function BtnOutline(props: BtnOutlineProps) {
    return <button type={props.type || "button"} className={`${styles.btnOutline} d-flex justify-content-center align-items-center`}>
        {props.children} 
        {props.text}
    </button>
}