export interface NavItem {
  title: string;
  path: string;
  specialty: 'all' | 'ortho' | 'spine' | 'cardiac' | 'general';
}

export const generalNavItems: NavItem[] = [
  { title: 'What is TEAM?', path: '/docs/overview', specialty: 'all' },
  { title: 'CDI Fundamentals', path: '/docs/fundamentals', specialty: 'all' }
];

export const procedureNavItems: NavItem[] = [
  { title: 'Lower Extremity Joint (LEJR)', path: '/docs/lejr', specialty: 'ortho' },
  { title: 'Surgical Hip Fracture (SHFFT)', path: '/docs/hip-fracture', specialty: 'ortho' },
  { title: 'Spinal Fusion', path: '/docs/spinal-fusion', specialty: 'spine' },
  { title: 'CABG x 3', path: '/docs/cabg', specialty: 'cardiac' },
  { title: 'Major Bowel Procedure', path: '/docs/major-bowel', specialty: 'general' }
];
