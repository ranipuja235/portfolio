import profileImage from '../assets/profile-photo.jpeg'
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiServer,
  FiShield,
} from 'react-icons/fi'
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri'
import {
  SiJavascript,
  SiRedux,
  SiReactquery,
  SiTypescript,
} from 'react-icons/si'
import type {
  Experience,
  Highlight,
  NavItem,
  Profile,
  Project,
  Skill,
  SocialLink,
  Stat,
} from '../types'

export const profile: Profile = {
  name: 'Pujarani Sethy',
  role: 'Frontend Developer (React.js)',
  intro:
    'Frontend developer with 2+ years of experience building scalable React.js and TypeScript applications with a strong focus on product quality, performance, and clean user experience.',
  email: 'ranipuja235@gmail.com',
  availability: 'Immediate joiner for frontend and product-focused roles',
  location: 'Ahmedabad, India',
  profileImage,
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/', icon: FiGithub, external: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/pujarani-sethy-63a70225b', icon: FiLinkedin, external: true },
  { label: 'Email', href: 'mailto:ranipuja235@gmail.com', icon: FiMail, external: false },
]

export const heroStats: Stat[] = [
  { value: '2+ Years', label: 'Frontend development experience' },
  { value: 'Immediate', label: 'Available to join quickly' },
  { value: 'React + TS', label: 'Best fit for product teams' },
]

export const aboutHighlights: Highlight[] = [
  {
    title: 'Scalable frontend delivery',
    description:
      'I build reusable, maintainable React applications with TypeScript, structured state management, and API-driven workflows.',
  },
  {
    title: 'Performance-minded implementation',
    description:
      'I focus on optimizing render behavior, reducing unnecessary API calls, and keeping interfaces fast across dashboards and enterprise screens.',
  },
  {
    title: 'Product and user experience',
    description:
      'I enjoy translating requirements into clean UI flows that balance clarity, accessibility, and practical business needs.',
  },
]

export const skills: Skill[] = [
  { name: 'React.js', level: 94, icon: RiReactjsLine },
  { name: 'JavaScript', level: 90, icon: SiJavascript },
  { name: 'TypeScript', level: 88, icon: SiTypescript },
  { name: 'Tailwind CSS', level: 89, icon: RiTailwindCssFill },
  { name: 'Redux', level: 85, icon: SiRedux },
  { name: 'React Query', level: 83, icon: SiReactquery },
  { name: 'REST APIs', level: 90, icon: FiServer },
  { name: 'JWT Auth', level: 82, icon: FiShield },
]

export const projects: Project[] = [
  {
    category: 'enterprise',
    title: 'HRMS Platform',
    description:
      'Developed responsive HR workflows for employee management, attendance, permissions, and admin operations with a clean, role-aware interface.',
    techStack: ['React.js', 'TypeScript', 'Redux', 'REST APIs'],
    // githubUrl: 'https://github.com/',
    liveUrl: 'https://kemsys-timelog.azurewebsites.net',
    highlight: 'Built modular UI flows with role-based access and API-driven forms.',
  },
  {
    category: 'iot',
    title: 'IoT Dashboard',
    description:
      'Created a real-time dashboard experience for connected device monitoring with status indicators, live metrics, and operational visibility.',
    techStack: ['React.js', 'TypeScript', 'React Query', 'REST APIs'],
    // githubUrl: 'https://github.com/',
    liveUrl: 'https://kemsys.com/',
    highlight: 'Improved data handling and UI responsiveness for live IoT monitoring use cases.',
  },
  {
    category: 'mobility',
    title: 'Vehicle Monitoring System',
    description:
      'Designed monitoring interfaces for vehicle tracking, status insights, and operational visibility with reusable widgets and filterable views.',
    techStack: ['React.js', 'JavaScript', 'Tailwind CSS', 'JWT Auth'],
    // githubUrl: 'https://github.com/',
    liveUrl: 'https://kemsys.com/',
    highlight: 'Focused on dashboard usability, secure access flows, and performance optimization.',
  },
]

export const experienceItems: Experience[] = [
  {
    role: 'Frontend Developer',
    company: 'Kemsys Technologies Pvt Ltd',
    duration: '2024 - Present',
    projects: ['HRMS Project', 'IoT Dashboard', 'Vehicle Monitoring System'],
    summary:
      'Working on enterprise web, HRMS, and IoT applications with a strong emphasis on React-based UI development, backend integration, and production-ready user flows.',
    achievements: [
      'Delivered HRMS project modules for employee workflows, attendance handling, permissions, and admin-facing operations with responsive React interfaces.',
      'Optimized frontend performance through cleaner component patterns, improved rendering behavior, and better data flow management.',
      'Implemented RBAC-based UI handling for role-specific access and protected workflow visibility.',
      'Integrated REST APIs across dashboard and form modules to support real-time and transactional use cases.',
      'Built reusable, responsive interfaces that improved consistency across products and internal tools.',
    ],
  },
]
