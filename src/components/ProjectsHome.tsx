import Link from 'next/link';
import BtnYellow from "./BtnYellow"
import Projects from './Projects';

export default function ProjectsHome() {
    return <section>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center my-5 flex-column flex-md-row">
                    <h3>Conheça alguns dos meus <span className="yellow-txt">projetos</span></h3>
                    <Link href='/projects'>
                        <BtnYellow text="Ver mais projetos"></BtnYellow>
                   </Link>
                </div>
                <Projects all={false}></Projects>
            </div>
        </section>

}