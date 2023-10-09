import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Project from '@/components/ProjectDetail'
import BtnBack from '@/components/BtnBack'
import { getIdsProjects } from '../api/idsProjects'
import { getProjectId } from '../api/project/[id]'

export async function getStaticPaths() {
    const paths = getIdsProjects();
    return { paths, fallback: false };
}

export async function getStaticProps({ params } : any) {  
    const project = getProjectId(+params.id)
    return { props: { project } };
}

export default function Projects({project} : any) {

    return (
        <>
            <Head>
                <title>Kayara - Projeto</title>
                <meta name="description" content="Desenvolvedora web Full Stack" />
                <meta charSet="UTF-8" />
                <meta name="keywords" content="desenvolvedora, fullstack, kayara, portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta lang="pt-BR" />
                <link rel="icon" href="/flower.svg" />
            </Head>
            <Header currentPage="project"/>
            <div className="container">
                <div className="my-4">
                    <BtnBack/>
                </div>
            </div>
            {project !== null ? <Project project={project}/> : <p>Projeto não encontrado</p>}
            <Footer/>
        </>
    )
}
