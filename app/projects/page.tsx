import ProjectTile from "./projectTile";
import { projects } from "./projects_db";

export default function(){
    return projects.map((proj) => <ProjectTile project={proj} />);
}