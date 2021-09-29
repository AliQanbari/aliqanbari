type PackageCardProps = {
    title: string,
}

export default function PackageCard({ title }: PackageCardProps) {
    return (
        <div className="bg-q-purple py-8 px-16 mt-6">
            <h3 className="text-white font-bold italic text-lg text-center">{title}</h3>
        </div>
    );
};
