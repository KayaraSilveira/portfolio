import styles from "../styles/Projects.module.css"
import Link from 'next/link';
import Image from 'next/image';
import { BsFlower3 } from "react-icons/bs";
import { useState, useEffect } from 'react'
import ProjectModel from "../model/project";
import TagsFilter from "./TagsFilter";
import Loading from "./Loading";

interface ProjectsProps {
    all: boolean; 
}

export default function Projects(props: ProjectsProps) {

    const [projects, setProjects] = useState<ProjectModel[]>([])
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    async function getProjects() {
        const url = props.all ? '/api/pageProjects' : '/api/homeProjects';
        const res = await fetch(url)
        const projects = await res.json()
        setProjects(projects)
        setLoading(false);

    }

    useEffect(() => {
        getProjects()
      }, [])

    function handleTagClick(tag: string) {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    }
      

    function projectRender(project: ProjectModel) {
        if (selectedTags.length === 0 || project.tags.some((tag) => selectedTags.includes(tag))) {
            return <li className="col-lg-4 col-12 mb-4" key={project.id}>
                        <Link className={styles.projectLink} href={`project/${project.id}`}>
                            <h5>
                                <BsFlower3></BsFlower3> {project.name} 
                            </h5>
                            <Image
                                className="img-fluid"
                                src={`/projects/${project.cover}`}
                                alt="Projeto"
                                width={500} 
                                height={300} 
                                />
                            <ul className={styles.tagList}>
                                {project.tags.map((tag: string) => <li key={`${project.id}_${tag}`}>{tag}</li>)}   
                            </ul>
                            <p>
                                {project.description}
                            </p>
                            <p className={styles.viewProject}>Ver projeto</p>
                        </Link>
                    </li>
        } 
        else {
            return null
          }
    }

    return <div>
            {loading ? ( 
                <Loading/>
            ) : (
                <div>
                    {props.all && (
                        <TagsFilter tags={Array.from(new Set(projects.flatMap((project) => project.tags)))}
                            selectedTags={selectedTags}
                            onTagClick={handleTagClick}
                        />
                    )}
    
                    <ul className="row justify-content-start mb-5">
                        {projects.map(project => projectRender(project))}
                    </ul>
                </div>
            )}
        </div>   
}