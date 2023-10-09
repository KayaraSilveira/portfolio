import Head from 'next/head'
import Header from '@/components/Header'
import EmailForm from '@/components/EmailForm'
import Footer from '@/components/Footer'

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
            <h4 className="my-5">Me envie um Email para <span className="yellow-txt">Contato</span>:</h4>
            <EmailForm/>
        </div>
      </main>
      <Footer/>
    </>
  )
}
