import React from 'react';
import TopSection from '../components/section_top';
import SkillsSection from '../components/section_skills';
import ApplicationsSection from '../components/section_applications';
import PackagesSection from '../components/section_packages';
import Footer from '../components/footer';

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
    <SkillsSection />
    <ApplicationsSection applications={applications} />
    <PackagesSection packages={packages} />
    <Footer {...{applications, playgrounds, accounts}} />
  </>;
}
