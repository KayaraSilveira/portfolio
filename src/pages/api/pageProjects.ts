import projects from './bdprojects'

export default function pageProjects(req: any, res: any) {
    console.log('chamou api que pega todos projetos');
    res.status(200).json(projects.map(project => project.toObject()))
}