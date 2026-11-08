export type SkillLogoItem = {
  src: string
  alt: string
  title: string
}

const ICON = (slug: string) => `https://cdn.simpleicons.org/${slug}/7041C7`

export const skillLogos: SkillLogoItem[] = [
  { title: 'Java', alt: 'Java', src: ICON('openjdk') },
  { title: 'TypeScript', alt: 'TypeScript', src: ICON('typescript') },
  { title: 'JavaScript', alt: 'JavaScript', src: ICON('javascript') },
  { title: 'Python', alt: 'Python', src: ICON('python') },
  { title: 'SQL', alt: 'SQL', src: ICON('mysql') },
  { title: 'HTML', alt: 'HTML', src: ICON('html5') },
  { title: 'CSS', alt: 'CSS', src: ICON('css') },
  { title: 'React', alt: 'React', src: ICON('react') },
  { title: 'Next.js', alt: 'Next.js', src: ICON('nextdotjs') },
  { title: 'Tailwind CSS', alt: 'Tailwind CSS', src: ICON('tailwindcss') },
  { title: 'React Native', alt: 'React Native', src: ICON('react') },
  { title: 'Node.js', alt: 'Node.js', src: ICON('nodedotjs') },
  { title: 'Express.js', alt: 'Express.js', src: ICON('express') },
  { title: 'Django', alt: 'Django', src: ICON('django') },
  { title: 'MySQL', alt: 'MySQL', src: ICON('mysql') },
  { title: 'PostgreSQL', alt: 'PostgreSQL', src: ICON('postgresql') },
  { title: 'MongoDB', alt: 'MongoDB', src: ICON('mongodb') },
  { title: 'Firebase', alt: 'Firebase', src: ICON('firebase') },
  { title: 'Supabase', alt: 'Supabase', src: ICON('supabase') },
  { title: 'Git', alt: 'Git', src: ICON('git') },
  { title: 'GitHub', alt: 'GitHub', src: ICON('github') },
  { title: 'Docker', alt: 'Docker', src: ICON('docker') },
  { title: 'Postman', alt: 'Postman', src: ICON('postman') },
  { title: 'VS Code', alt: 'VS Code', src: ICON('visualstudiocode') },
  { title: 'Jest', alt: 'Jest', src: ICON('jest') },
  { title: 'Playwright', alt: 'Playwright', src: ICON('playwright') },
  { title: 'Blender', alt: 'Blender', src: ICON('blender') },
  { title: 'Autodesk Maya', alt: 'Autodesk Maya', src: ICON('autodesk') },
  { title: 'Unity', alt: 'Unity', src: ICON('unity') },
]
