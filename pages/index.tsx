import React from 'react';
import ApplicationCard from '../components/card_application';
import SkillBar from '../components/bar_skill';
import TopSection from '../components/section_top';
import PackageCard from '../components/card_package';

export default function Home() {
  return <>
    <TopSection />
    <div className="container">
      {/* Skills Section */}
      <section title="skills">
        <h2 className="text-4xl font-bold text-center mt-6">Skills</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 mb-16">
          <div className="flex flex-col items-center gap-3">
            <h3 className="text-xl font-bold mt-4">Frameworks</h3>
            <SkillBar name="Flutter" value={98} />
            <SkillBar name=".Net Core" value={80} />
            <SkillBar name="React" value={60} />
            <SkillBar name="Native Android" value={50} />
            <SkillBar name="Unity" value={50} />
          </div>
          <div className="flex flex-col items-center gap-3">
            <h3 className="text-xl font-bold mt-4">Languages</h3>
            <SkillBar name="Dart" value={99} />
            <SkillBar name="Java" value={96} />
            <SkillBar name="Kotlin" value={85} />
            <SkillBar name="C#" value={80} />
            <SkillBar name="HTML/CSS/JavaScript" value={75} />
          </div>
        </div>
      </section>
      {/* Applications */}
      <section title="applications">
        <div className="pb-16 pt-8 bg-q-purple-light">
          <h2 className="text-4xl font-bold text-center text-white">Applications</h2>
          <div className="grid place-content-center">
            <ApplicationCard title="Tile Tap" description="5 different fun Games about tapping Tiles" />
            <ApplicationCard title="Prayer Times" description="An Islamic calendar that can show you exact prayer times and play adhan" />
            <ApplicationCard title="Meme Box" description="A Cross-Platform Meme Making Toolbox that includes meme templates and an image editor" />
          </div>
        </div>
      </section>
      {/* Packages */}
      <section title="packages">
        <h2 className="text-4xl font-bold text-center mt-6">Packages</h2>
        <div className="grid place-content-center mb-16">
          {['localization_table', 'inherited_store', 'prefman', 'fanoos_project', 'abstract_date', 'loader', 'context_extentions', 'php_server_tree', 'future_or']
          .map(title => <PackageCard title={title} />)}
        </div>
      </section>
    </div>
  </>;
}
