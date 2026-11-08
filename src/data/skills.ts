export type SkillGroupId =
  | 'languages'
  | 'frontend'
  | 'backend'
  | 'tools'
  | 'multimedia'

export type SkillGroup = {
  id: SkillGroupId
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    id: 'languages',
    items: ['Java', 'TypeScript', 'JavaScript', 'Python', 'SQL'],
  },
  {
    id: 'frontend',
    items: ['HTML', 'CSS', 'React.js', 'Next.js', 'Tailwind CSS', 'React Native'],
  },
  {
    id: 'backend',
    items: [
      'Node.js',
      'Express.js',
      'Django',
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Firebase',
      'Supabase',
    ],
  },
  {
    id: 'tools',
    items: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code', 'Jest', 'Playwright'],
  },
  {
    id: 'multimedia',
    items: ['Blender', 'Autodesk Maya', 'Unity'],
  },
]
