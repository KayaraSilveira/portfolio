import styles from "../styles/Loading.module.css"
import { BsFlower3 } from "react-icons/bs";

export default function Loading() {
    return <div className={`${styles.loading} my-5 text-center`}>
                <div className={styles.loadingIcons}>
                    <BsFlower3 className={styles.icon1} />
                    <BsFlower3 className={styles.icon2} />
                    <BsFlower3 className={styles.icon3} />
                </div>
            </div>
                   

}