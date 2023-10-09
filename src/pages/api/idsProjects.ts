import projects from './bdprojects'

export default function idsProjects(req: any, res: any) {
    res.status(200).json(getIdsProjects())
}

export function getIdsProjects() {
    return projects.map((project) => ({
      params: { id: project.id.toString() },
  }));
}