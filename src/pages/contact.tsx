import Head from 'next/head'
import Header from '@/components/Header'
import EmailForm from '@/components/EmailForm'
import Footer from '@/components/Footer'
import BtnOutline from '@/components/BtnOutline'
import {BsGithub} from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import Link from "next/link"

export default function Projects() {
  return (
    <>
      <Head>
        <title>Kayara - Contato</title>
        <meta name="description" content="Desenvolvedora web Full Stack" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="desenvolvedora, fullstack, kayara, portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta lang="pt-BR" />
        <link rel="icon" href="/flower.svg" />
      </Head>
      <Header currentPage="contact"/>
      <main>
        <div className="container">
          <h1 className="mt-5">Entre em <span className="yellow-txt">contato</span> comigo:</h1>
          <p className='mb-0'>
              Sinta-se à vontade para entrar em contato comigo pelas redes sociais ou enviando um email.
           </p>
        </div>
      </main>
      <section>
        <div className="container">
          <h2 className="mt-5">Minhas <span className="yellow-txt">Redes Sociais</span>:</h2>
          <div className="d-flex justify-content-sm-start justify-content-center flex-wrap">
            <Link className='me-3 mt-2' target="_blank" href="https://github.com/KayaraSilveira">
                <BtnOutline text="GitHub">
                    <BsGithub></BsGithub>
                </BtnOutline>
            </Link>
            <Link className='me-3 mt-2' target="_blank" href="https://www.linkedin.com/in/kayara-silveira/">
                <BtnOutline text="Linkedin">
                    <BsLinkedin></BsLinkedin>
                </BtnOutline>
            </Link>
            <Link className='me-3 mt-2' target="_blank" href="https://www.instagram.com/kayarasilveira/">
                <BtnOutline text="Instagram">
                    <BsInstagram></BsInstagram>
                </BtnOutline>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
            <h2 className="mt-5">Me envie um <span className="yellow-txt">Email</span>:</h2>  
            <EmailForm/>
        </div>
      </section>
      <Footer/>
    </>
  )
}
