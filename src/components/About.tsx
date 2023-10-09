import styles from "../styles/About.module.css"
import Image from 'next/image';

export default function About() {
    return <main>
    <div className="container">
        <div className="row py-5 flex-row-reverse">
            <div className="col-md-6 d-flex flex-column align-items-center justify-content-center text-center">
                <h1>Oi, eu sou a Kayara</h1>
                <h2><span className="yellow-txt">Full Stack</span> Developer</h2>
                <p className={styles.description}>
                    Estudante de Ciência da Computação na Universidade Federal de Pelotas. 
                    Desenvolvedora Web com mais de 2 anos de experiência como Full Stack.
                </p>
                <Image
                    className={styles.bee}
                    src="/bee.png"
                    alt="Abelha"
                    width={100} 
                    height={90} 
                />
            </div>
            <div className={`col-md-6 img-about text-center d-flex flex-column align-items-center justify-content-center text-center ${styles.imgColumn}`}>
            <Image
                priority={true}
                className={styles.imgCircle}
                src="/kayara.jpeg"
                alt="Foto de Kayara"
                width={350} 
                height={350} 
                />
            </div>
        </div>
    </div>
</main>

}