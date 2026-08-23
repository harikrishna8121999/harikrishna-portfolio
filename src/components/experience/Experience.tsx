import { useState } from 'react';
import { RiShareBoxFill } from 'react-icons/ri';
import ExperienceCard from './ExperienceCard';
import { userImages } from '../../data/images';
import './Experience.css';

const experiences = [
  {
    company: 'Poppulo',
    role: 'Software Development Engineer 2',
    dates: 'Jul 2024 - Present',
    location: 'Bengaluru',
    status: 'present',
    logoUrl: userImages.misc.poppulo,
    links: [{ url: 'https://www.poppulo.com/', icon: <RiShareBoxFill /> }],
    description: [
      'Promoted from SDE-1 to SDE-2 on the strength of delivery and feature ownership.',
      'Delivered full-stack features for a large-scale enterprise email content platform — drag-and-drop builders, templates, and microsites.',
      'Contributed backend work routing application data through AWS Lambda to data science services, powering the platform’s first AI-driven Email Auto-Translation feature.',
      'Owned Email Preview Text and Emoji Support end to end, coordinating with Product and Design through to full-stack delivery.',
      'Helped plan and bootstrap a next-gen Template Manager: t-shirt sizing, architecture discussions, and repository setup.',
      'Refactored legacy UI with reusable LESS mixins, cutting page redirects and smoothing out the editing experience.',
      'Supported production incidents and CI pipeline issues to keep releases stable.',
    ],
  },
  {
    company: 'Sacumen',
    role: 'Software Developer (Java)',
    dates: 'Dec 2023 - Jul 2024',
    location: 'Bengaluru',
    status: 'past',
    logoUrl: userImages.misc.sacumen,
    links: [{ url: 'https://www.sacumen.com/', icon: <RiShareBoxFill /> }],
    description: [
      'Built cybersecurity integration connectors that consumed REST and GraphQL APIs to normalize third-party tool data into the Brinqa platform.',
      'Worked against OAuth and API-key secured APIs, applying page and cursor-based pagination to process large datasets efficiently.',
    ],
  },
  {
    company: 'Synechron',
    role: 'Junior Associate',
    dates: 'Aug 2021 - Dec 2023',
    location: 'Bengaluru',
    status: 'past',
    logoUrl: userImages.misc.synechron,
    links: [{ url: 'https://www.synechron.com/', icon: <RiShareBoxFill /> }],
    description: [
      'Developed a full-stack payment simulation platform implementing ISO 8583 message processing for Visa and Mastercard.',
      'Led technical POCs and client deployments, partnering with stakeholders to demonstrate enterprise readiness.',
    ],
  },
];

const Experience = () => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  return (
    <ul className="experience-timeline">
      {experiences.map((exp, idx) => (
        <ExperienceCard
          key={exp.company}
          company={exp.company}
          role={exp.role}
          dates={exp.dates}
          location={exp.location}
          status={exp.status}
          logoUrl={exp.logoUrl}
          links={exp.links}
          description={exp.description}
          isExpanded={expandedIdx === idx}
          onToggle={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
        />
      ))}
    </ul>
  );
};

export default Experience;
