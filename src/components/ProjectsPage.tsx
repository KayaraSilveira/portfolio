import Link from 'next/link';
import Projects from './Projects';

export default function ProjectsPage() {
    return <div className="container">
                <div className="mt-5 mb-2">
                    <h4>Conheça meus principais <span className="yellow-txt">projetos</span></h4>
                </div>
                <Projects all={true}></Projects>
            </div>
}