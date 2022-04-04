type SkillBarProps = {
    name: string
    value : number
}

export default function SkillBar(props: SkillBarProps){
    return (
        <div className="flex-col">
            <p className="text-lg">{props.name}</p>
            <div className="bg-gray-200 rounded-lg w-88 md:w-96 lg:w-96 xl:w-128 h-4">
                <div className="bg-q-purple-light rounded-lg h-4" style={{width: `${props.value}%`}}></div>
            </div>
        </div>
    );
}