import React from "react";
import SkillBar from "./bar_skill";

export default function SkillsSection() {
    return (
        <section title="skills">
            <h2 className="text-4xl font-bold text-center mt-6">Skills</h2>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-8 mb-16">
                    <div className="flex flex-col items-center gap-4">
                        <h3 className="text-2xl font-bold mt-4">Frameworks</h3>
                        <SkillBar name="Flutter" value={98} />
                        <SkillBar name=".Net Core" value={80} />
                        <SkillBar name="React" value={60} />
                        <SkillBar name="Native Android" value={50} />
                        <SkillBar name="Unity" value={50} />
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <h3 className="text-2xl font-bold mt-4">Languages</h3>
                        <SkillBar name="Dart" value={99} />
                        <SkillBar name="Java" value={96} />
                        <SkillBar name="Kotlin" value={85} />
                        <SkillBar name="C#" value={80} />
                        <SkillBar name="HTML/CSS/JavaScript" value={75} />
                    </div>
                </div>
            </div>
        </section>
    );
};
