import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import SkillBar from '../components/skill';
import TopSection from '../components/top';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="">
      <TopSection />
      <SkillBar name="Flutter" value={100} />
      <SkillBar name="React" value={30} />
    </div>
  );
}
