import { Project } from './projects_db';


export default function(props : {project : Project}){
    return <div>
        <h3>{props.project.name}</h3>
        <div>{props.project.tech.map((t) => <p>{t} </p>)}</div>
    </div>
}