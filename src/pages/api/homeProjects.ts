import projects from './bdprojects'

export default function homeProjects(req: any, res: any) {
    console.log('chamou api que pega 3 projeto');
    const firstThreeProjects = projects.slice(0, 3);
    res.status(200).json(firstThreeProjects.map(project => project.toObject()))
}