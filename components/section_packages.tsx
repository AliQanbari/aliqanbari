import React from "react";
import PackageCard from "./card_package";

type PackagesSectionProps = {
    packages: string[],
}

export default function PackagesSection({ packages }: PackagesSectionProps) {
    return (
        <section title="packages">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center my-8">Packages</h2>
                <div className="flex flex-wrap justify-center mb-16">
                    {packages.map(title => <PackageCard title={title} />)}
                </div>
            </div>
        </section>
    );
};
