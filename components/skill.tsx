type SkillBarProps = {
    name: string
    value : number
}

export default function SkillBar(props: SkillBarProps){
    return (
        <div className="flex-col">
            <p>{props.name}</p>
            <div className="bg-gray-200 rounded-r-lg w-64 h-4">
                <div className="bg-indigo-400 rounded-r-lg h-4" style={{width: `${props.value}%`}}></div>
            </div>
        </div>
    );
}