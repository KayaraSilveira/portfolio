import styles from "../styles/ProjectDetail.module.css"
import Image from 'next/image';
import { BsFlower3 } from "react-icons/bs";
import { useState, useEffect } from 'react'
import ProjectModel from "../model/project";
import { Carousel } from "react-bootstrap";
import Link from "next/link"
import BtnOutline from "./BtnOutline";
import {BsGithub} from "react-icons/bs"
import { BsGlobe2 } from "react-icons/bs"


interface ProjectProps {
    project: ProjectModel; 
}

export default function Project(props: ProjectProps) {
    
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: any, e: any) => {
        setIndex(selectedIndex);
    };
     
    function renderProject(project: ProjectModel) {
        return <>
            <h1>Projeto <span className="yellow-txt">{project.name}</span></h1>
            <div className="mt-5 row justify-content-center align-items-center"> 
                <div className="col-12 col-lg-8">
                    <Carousel className="text-center" activeIndex={index} onSelect={handleSelect}>
                        {project.images.map((image: string, i:number) => <Carousel.Item key={`${project.id}_${i}`} interval={4000}>
                            <Image
                                className={styles.imageCarousel}
                                src={`/projects/${image}`}
                                alt="Captura de tela do Projeto"
                                width={1333} 
                                height={750} 
                                />
                            </Carousel.Item>
                            )} 
                    </Carousel> 
                </div>  
                <div className="col-12 col-lg-4 mt-4">
                    <h4><span className="yellow-txt">Descrição</span> do projeto:</h4>
                    <p>
                        {project.longDescription}
                    </p> 
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-8 d-flex flex-column flex-lg-row">
                    <div className="my-4 col-12 col-lg-6">
                        <h4>Principais <span className="yellow-txt">funcionalidades</span>:</h4>
                        <ul>
                            {project.features.map((feature: string) => <li key={`${project.id}_${feature}`}><BsFlower3/>{feature}</li>)} 
                        </ul>
                    </div>
                    <div className="my-4 col-12 col-lg-6">
                        <h4>Principais <span className="yellow-txt">Tecnologias</span>:</h4>
                        <ul>
                            {project.tags.map((tag: string) => <li key={`${project.id}_${tag}`}><BsFlower3/>{tag}</li>)} 
                        </ul>
                    </div>
                </div>
                <div className="my-4 col-12 col-lg-4">
                        <h4>Onde <span className="yellow-txt">Encontrar </span>o projeto:<span className="yellow-txt"></span></h4>
                        <div className="text-center my-3">
                            <Link target="_blank" href={project.github}>
                                <BtnOutline text="Ver repositório">
                                    <BsGithub></BsGithub>
                                </BtnOutline>
                            </Link>
                        </div>
                        {project.deploy ? (
                        <div className="text-center my-4">
                            <Link target="_blank" href={project.deploy || ''}>
                                <BtnOutline text="Ir para site">
                                    <BsGlobe2/>
                                </BtnOutline>
                            </Link>
                        </div>
                    ) : null}
                </div>
            </div>
            
        </>
    }

    return <main>
            <div className="container my-4">
                {props.project ? (
                    renderProject(props.project)
                ) : (
                    <div>Projeto não encontrado.</div>
                )}
            </div>
        </main>
}