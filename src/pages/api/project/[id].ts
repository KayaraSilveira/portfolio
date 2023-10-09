import projects from '../bdprojects'

export default function projectId(req: any, res: any) {
    const queryId = +req.query.id
    const project = projects.filter(project => project.id === queryId)

    if (project.length === 1) {
        res.status(200).json(project[0].toObject())
    } else {
        res.status(204).send()
    }
}

export function getProjectId(queryId: number) {
    const project = projects.find(project => project.id === queryId);
    if (project) {
        const projectWithDeploy = {
            ...project.toObject(),
            deploy: project.deploy || null,
        };
        return projectWithDeploy;
    } else {
        return null;
    }
}