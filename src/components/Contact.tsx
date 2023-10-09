import styles from "../styles/Contact.module.css"
import BtnYellow from "./BtnYellow"
import Link from "next/link"
import Logo from "./Logo";
import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { FaEnvelope } from "react-icons/fa6"

export default function Contact() {
    return <section className="my-4">
        <div className="container">
            <h3>Entre em <span className="yellow-txt">Contato</span> comigo </h3>
            <p>
                Sinta-se à vontade para entrar em contato comigo para discutir projetos interessantes na área de desenvolvimento de software.
            </p>
            <div className="d-flex align-items-center flex-column flex-md-row">
                <div className="col-md-6 col-12 d-flex align-items-start justify-content-center flex-column">
                    <div className={styles.links}> 
                        <Logo>
                            <div> • 
                                <Link aria-label="Ir para Linkedin" title="Ir para Linkedin" target="_blank" href='https://www.linkedin.com/in/kayara-silveira/'>
                                    <BsLinkedin></BsLinkedin>
                                </Link>
                                <Link aria-label="Ir para GitHub" title="Ir para GitHub" target="_blank" href='https://github.com/KayaraSilveira'>
                                    <BsGithub></BsGithub>
                                </Link>  
                            </div>
                        </Logo> 
                    </div>
                    <div>
                        <span><FaEnvelope></FaEnvelope> silveira.kayara@gmail.com</span>
                    </div>
                </div>
                <div className="col-md-6 col-12 d-flex align-items-start justify-content-start justify-content-md-end mt-4">
                   <Link href='/contact'>
                        <BtnYellow text="Enviar email agora"></BtnYellow>
                   </Link>
                </div>
            </div>
        </div>
    </section>
}