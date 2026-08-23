import type { IconType } from 'react-icons';
import {
  SiSpringboot,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiRedis,
  SiApachekafka,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiIntellijidea,
  SiPostman,
  SiJira,
  SiVercel,
  SiFigma,
  SiLinux,
  SiNpm,
  SiSonarqube,
  SiAmazonwebservices,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import './SkillSection.css';

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

const technologies: Skill[] = [
  { name: 'Java', icon: FaJava, color: '#f89820' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6db33f' },
  { name: 'React', icon: SiReact, color: '#61dafb' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#5fa04e' },
  { name: 'Express', icon: SiExpress, color: '#ffffff' },
  { name: 'GraphQL', icon: SiGraphql, color: '#e10098' },
  { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
  { name: 'Redis', icon: SiRedis, color: '#ff4438' },
  { name: 'Kafka', icon: SiApachekafka, color: '#ffffff' },
  { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
  { name: 'CSS3', icon: SiCss3, color: '#1572b6' },
];

const tools: Skill[] = [
  { name: 'AWS', icon: SiAmazonwebservices, color: '#ff9900' },
  { name: 'Docker', icon: SiDocker, color: '#2496ed' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326ce5' },
  { name: 'Git', icon: SiGit, color: '#f05032' },
  { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
  { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088ff' },
  { name: 'IntelliJ IDEA', icon: SiIntellijidea, color: '#fe315d' },
  { name: 'VS Code', icon: VscVscode, color: '#0078d4' },
  { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
  { name: 'SonarQube', icon: SiSonarqube, color: '#4e9bcd' },
  { name: 'Jira', icon: SiJira, color: '#0052cc' },
  { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
  { name: 'Figma', icon: SiFigma, color: '#f24e1e' },
  { name: 'Linux', icon: SiLinux, color: '#fcc624' },
  { name: 'npm', icon: SiNpm, color: '#cb3837' },
];

const SkillRow = ({ items, reverse }: { items: Skill[]; reverse?: boolean }) => (
  <div className="marquee">
    <div className={reverse ? 'marquee-track reverse' : 'marquee-track'}>
      {[...items, ...items].map((skill, index) => {
        const Icon = skill.icon;
        return (
          <span className="skill-pill" key={`${skill.name}-${index}`}>
            <Icon className="skill-icon" style={{ color: skill.color }} />
            {skill.name}
          </span>
        );
      })}
    </div>
  </div>
);

const SkillSection = () => {
  return (
    <div className="skill-section">
      <SkillRow items={technologies} />
      <SkillRow items={tools} reverse />
    </div>
  );
};

export default SkillSection;
