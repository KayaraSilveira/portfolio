import styles from "../styles/Skills.module.css"
import Image from 'next/image';
import { BsFlower3 } from "react-icons/bs";

export default function Skills() {
    return <section>
    <div className="container">
        <div className="row">
            <div className="col-md-6 d-flex flex-column justify-content-center">
                <h3>Minhas principais <span className="yellow-txt">habilidades</span></h3>
                <p></p>  
                <ul>
                    <li className={styles.skillName}><BsFlower3 className="iconList"></BsFlower3> Python</li>
                    <li className={styles.skillName}><BsFlower3 className="iconList"></BsFlower3> JavaScript</li>
                    <li className={styles.skillName}><BsFlower3 className="iconList"></BsFlower3> TypeScript</li>
                    <li className={styles.skillName}><BsFlower3 className="iconList"></BsFlower3> Django</li>
                    <li className={styles.skillName}><BsFlower3 className="iconList"></BsFlower3> React</li>
                    <li className={styles.skillName}><BsFlower3 className="iconList"></BsFlower3> Next.js</li>
                </ul>
            </div>
            <div className="col-md-6 text-center">
                <Image
                    className={styles.girlcode}
                    src="/girlcode.png"
                    alt="Desenho de uma menina programando"
                    width={640} 
                    height={565} 
                    />
            </div>
        </div>
    </div>
</section>

}