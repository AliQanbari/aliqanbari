type SkillBarProps = {
    name: string
    value : number
}

export default function SkillBar(props: SkillBarProps){
    return (
        <div className="flex-col">
            <p className="text-md">{props.name}</p>
            <div className="bg-gray-200 rounded-lg w-96 h-3">
                <div className="bg-indigo-400 rounded-lg h-3" style={{width: `${props.value}%`}}></div>
            </div>
        </div>
    );
}