import Head from 'next/head'
import Header from '@/components/Header'
import ProjectsPage from '@/components/ProjectsPage'
import Footer from '@/components/Footer'

export default function Projects() {
  return (
    <>
      <Head>
        <title>Kayara - Projetos</title>
        <meta name="description" content="Desenvolvedora web Full Stack" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="desenvolvedora, fullstack, kayara, portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta lang="pt-BR" />
        <link rel="icon" href="/flower.svg" />
      </Head>
      <Header currentPage="projects"/>
      <main>
        <ProjectsPage/>
      </main>
      <Footer/>
    </>
  )
}
