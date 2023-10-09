import Head from 'next/head'
import Header from '@/components/Header'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ProjectsHome from '@/components/ProjectsHome'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kayara - Home</title>
        <meta name="description" content="Desenvolvedora web Full Stack" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="desenvolvedora, fullstack, kayara, portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta lang="pt-BR" />
        <link rel="icon" href="/flower.svg" />
      </Head>
      <Header currentPage="home"/>
      <About/>
      <Skills/>
      <ProjectsHome/>
      <Contact/>
      <Footer/>
    </>
  )
}
