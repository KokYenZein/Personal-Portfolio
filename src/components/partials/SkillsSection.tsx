import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import SectionTitle from '@/components/shared/SectionTitle';
import { skills } from '@/data/skills';
import Link from 'next/link';

const bgClasses = [
  'bg-indigo-500 text-indigo-900',
  'bg-yellow-400 text-yellow-900',
  'bg-pink-400 text-pink-900',
  'bg-purple-500 text-purple-100',
  'bg-green-500 text-green-100',
  'bg-blue-500 text-blue-100',
  'bg-red-500 text-red-100',
  'bg-slate-500 text-slate-100',
  'bg-teal-500 text-teal-100',
];

const bgClassesSkills = [
  'bg-indigo-200 text-indigo-900',
  'bg-yellow-100 text-yellow-900',
  'bg-pink-100 text-pink-900',
  'bg-purple-100 text-purple-100',
  'bg-green-200 text-green-100',
  'bg-blue-200 text-blue-100',
  'bg-red-200 text-red-100',
  'bg-slate-200 text-slate-100',
  'bg-teal-200 text-teal-100',
];

const getBackgroundClass = (index: number) => {
  return bgClasses[index % bgClasses.length];
};

const getBackgroundClassSkills = (index: number) => {
  return bgClassesSkills[index % bgClassesSkills.length];
};

const SkillsSection = () => {
  return (
    <>
      <SectionTitle>Skills</SectionTitle>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {skills.map((skill, index) => (
          <div key={index} 
          className={classNames('rounded-2xl py-8 px-4 text-center shadow-md md:px-8', getBackgroundClass(index))}>
            <Image src={skill.image} height={80} width={80} alt={skill.name} />
            <h4 className="mt-4 text-xl font-semibold">{skill.name}</h4>
            {skill.content.map((item, idx) => (
              <div key={idx} className="p-2 mt-2">
              <div className={classNames("bg-black-500 rounded flex items-center p-4 h-full justify-center", getBackgroundClassSkills(index))}>
                <img src={item.image} alt={item.name} className="h-8 w-8 inline-block mr-2" />
                <span className="title-font font-medium">{item.name}</span>
              </div>
            </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default SkillsSection;
