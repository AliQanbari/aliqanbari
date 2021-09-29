import React from 'react';
import ApplicationCard from '../components/card_application';
import SkillBar from '../components/bar_skill';
import TopSection from '../components/section_top';
import PackageCard from '../components/card_package';

export default function Home() {

  const applications = [
    { title: "Tile Tap", description: "5 different fun Games about tapping Tiles" },
    { title: "Prayer Times", description: "An Islamic calendar that can show you exact prayer times and play adhan" },
    { title: "Meme Box", description: "A Cross-Platform Meme Making Toolbox that includes meme templates and an image editor" },
  ];

  const playgrounds = [
    { title: 'OS Solver', link: 'https://os.aligator.ir' },
    { title: 'Shows', link: 'https://shows.aliqanbari.ir' },
    { title: 'Meme Templates', link: 'https://templates.aligator.ir' },
    { title: 'Ideas', link: 'https://ideas.aligator.ir' },
    { title: 'ChatBot', link: 'https://chatbot.aligator.ir' },
  ];

  const accounts = [
    { title: 'GitHub', icon: 'icons/github.svg', link: 'https://github.com/ali2236' },
    { title: 'Instagram', icon: 'icons/instagram.svg', link: 'https://www.instagram.com/aliqanbari.ir' },
    { title: 'LinkedIn', icon: 'icons/linkedin.svg', link: 'https://www.linkedin.com/in/ali-ghanbari-630aa817a' },
  ];

  const packages = ['localization_table', 'inherited_store', 'prefman', 'fanoos_project', 'abstract_date', 'loader', 'context_extentions', 'php_server_tree', 'future_or'];

  return <>
    <TopSection />
    {/* Skills Section */}
    <section title="skills">
      <h2 className="text-4xl font-bold text-center mt-6">Skills</h2>
      <div className="container mx-auto">
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
      </div>
    </section>
    {/* Applications */}
    <section title="applications">
      <div className="pb-16 pt-8 bg-q-purple-light">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-8">Applications</h2>
          <div className="flex flex-wrap justify-center">
            {applications.map(app => <ApplicationCard {...app} />)}
          </div>
        </div>
      </div>
    </section>
    {/* Packages */}
    <section title="packages">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center my-8">Packages</h2>
        <div className="flex flex-wrap justify-center mb-16">
          {packages.map(title => <PackageCard title={title} />)}
        </div>
      </div>
    </section>
    {/* Footer */}
    <footer>
      <div className="bg-q-purple-dark py-8">
      <div className="container mx-auto">
        <div className="xl:flex flex-wrap justify-center">
        <div className="mx-16 mt-8">
          <h5 className="text-q-purple-light font-bold text-2xl text-left">Ali Qanbari</h5>
          <p className="text-white opacity-80 text-left">This is Ali Qanbari’s Personal Website</p>
          <button className="bg-q-purple shadow-md rounded-md text-white px-8 py-3 text-lg font-bold mt-8 self-center lg:self-start hover:shadow-lg hover:bg-opacity-85">Contact Me</button>
        </div>
        <div className="mx-16 mt-8">
          <h5 className="text-q-purple-light text-2xl text-left">Applications</h5>
          {applications.map(app => <p className="text-q-pink opacity-60 hover:opacity-100 text-left my-1">{app.title}</p>)}
        </div>
        <div className="mx-16 mt-8">
          <h5 className="text-q-purple-light text-2xl text-left">Playgrounds</h5>
          {playgrounds.map(ply => <p className="text-q-pink opacity-60 hover:opacity-100 text-left my-1"><a href={ply.link}>{ply.title}</a></p>)}
        </div>
        <div className="mx-16 mt-8">
          <h5 className="text-q-purple-light text-2xl text-left">Accounts</h5>
          {accounts.map(ply => <a href={ply.link}><p className="my-2 text-q-pink opacity-60 hover:opacity-100 text-left"><img className="inline mr-2 pb-1" src={ply.icon} />{ply.title}</p></a>)}
        </div>
        </div>
        <p className="text-center text-q-purple-muted mt-16">Copyright © 2021 <a className="hover:text-q-purple-light" href="https://aligator.ir">Aligator.ir</a>, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </>;
}
