import styles from "../styles/ProjectDetail.module.css"
import Image from 'next/image';
import { BsFlower3 } from "react-icons/bs";
import { useState, useEffect } from 'react'
import ProjectModel from "../model/project";
import { Carousel } from "react-bootstrap";
import Link from "next/link"
import BtnOutline from "./BtnOutline";
import {BsGithub} from "react-icons/bs"


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
            <div className="row my-4">
                <div className="col-12 col-md-4 mb-4">
                    <h4><span className="yellow-txt">Descrição</span> do projeto:</h4>
                    <p className="mb-0">
                        {project.longDescription}
                    </p>
                </div>
                <div className="col-12 col-md-4 mb-4">
                    <h4>Principais <span className="yellow-txt">Tecnologias</span>:</h4>
                    <ul>
                        {project.tags.map((tag: string) => <li key={`${project.id}_${tag}`}><BsFlower3/>{tag}</li>)} 
                    </ul>
                </div>
                <div className="col-12 col-md-4 mb-4">
                    <h4>Principais <span className="yellow-txt">funcionalidades</span>:</h4>
                    <ul>
                        {project.features.map((feature: string) => <li key={`${project.id}_${feature}`}><BsFlower3/>{feature}</li>)} 
                    </ul>
                </div>
            </div>
            <div className="text-center mt-5">
                <h4>Algumas <span className="yellow-txt">Imagens</span> do projeto:</h4>  
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
            <div className="row my-5 justify-content-center align-items-center">
                <div className="col-12 col-md-6 text-center">
                    <Link target="_blank" href={project.github}>
                            <BtnOutline text="Ver repositório">
                                <BsGithub></BsGithub>
                            </BtnOutline>
                    </Link>
                </div>
                {project.deploy ? (
                    <div className="col-12 col-md-6 text-center">
                    <Link target="_blank" href={project.deploy || ''}>
                            <BtnOutline text="Ver repositório">
                                <BsGithub></BsGithub>
                            </BtnOutline>
                    </Link>
                </div>
                ) : null}
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