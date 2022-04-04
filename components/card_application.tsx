type ApplicationCardProps = {
    title: string,
    description: string
};

export default function ApplicationCard({ title, description }: ApplicationCardProps) {
    return (
        <div key={title} className="bg-white shadow-md rounded-md w-88 p-8 m-4">
            <h3 className="font-bold text-2xl text-center mb-4">{title}</h3>
            <p className="text-center text-lg">{description}</p>
        </div>
    );
};
