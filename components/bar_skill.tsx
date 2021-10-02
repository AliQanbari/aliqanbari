type SkillBarProps = {
    name: string
    value : number
}

export default function SkillBar(props: SkillBarProps){
    return (
        <div className="flex-col">
            <p className="text-lg">{props.name}</p>
            <div className="bg-gray-200 rounded-lg w-96 md:w-128 lg:w-128 xl:w-160 h-4">
                <div className="bg-q-purple-light rounded-lg h-4" style={{width: `${props.value}%`}}></div>
            </div>
        </div>
    );
}