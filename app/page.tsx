import Footer from "../components/footer";
import ApplicationsSection from "../components/section_applications";
import SkillsSection from "../components/section_skills";
import StudentProjectsSection from "../components/section_stprojects";
import TopSection from "../components/section_top";
import { applications } from "../lib/Application";


export default function() {

  const playgrounds = [
    { title: 'OS Solver', link: 'https://os.aligator.ir' },
    { title: 'Shows', link: 'https://shows.aliqanbari.ir' },
    { title: 'Meme Templates', link: 'https://templates.aligator.ir' },
    { title: 'Ideas', link: 'https://ideas.aligator.ir' },
    { title: 'ChatBot', link: 'https://chatbot.aligator.ir' },
  ];

  const accounts = [
    { title: 'GitHub', icon: 'icons/github.svg', link: 'https://github.com/ali2236' },
    { title: 'Instagram', icon: 'icons/instagram.svg', link: 'https://www.instagram.com/aligator2236' },
    { title: 'LinkedIn', icon: 'icons/linkedin.svg', link: 'https://www.linkedin.com/in/ali-ghanbari-630aa817a' },
  ];

  return <>
    <TopSection />
    <SkillsSection />
    <ApplicationsSection applications={applications} />
    <StudentProjectsSection />
    <Footer {...{applications, playgrounds, accounts}} />
  </>;
}
