export interface NavItem {
  title: string;
  path: string;
  specialty: 'all' | 'ortho' | 'spine' | 'cardiac' | 'general';
}

export interface ProcedureNavItem {
  title: string;
  slug: string;      // e.g., 'lejr'
  refSlug: string;   // e.g., 'lejr' or 'shfft' (ref file route slug)
  specialty: 'ortho' | 'spine' | 'cardiac' | 'general';
}

export const generalNavItems: NavItem[] = [
  { title: 'What is TEAM?', path: '/docs/overview', specialty: 'all' },
  { title: 'CDI Fundamentals', path: '/docs/fundamentals', specialty: 'all' },
  { title: 'How H&P Becomes a DRG', path: '/docs/documentation-to-drg', specialty: 'all' },
  { title: 'Surgical Decisions', path: '/docs/surgical-decisions', specialty: 'all' }
];

export const procedureNavItems: ProcedureNavItem[] = [
  { title: 'Lower Extremity Joint (LEJR)', slug: 'lejr', refSlug: 'lejr', specialty: 'ortho' },
  { title: 'Surgical Hip Fracture (SHFFT)', slug: 'hip-fracture', refSlug: 'shfft', specialty: 'ortho' },
  { title: 'Spinal Fusion', slug: 'spinal-fusion', refSlug: 'spinal-fusion', specialty: 'spine' },
  { title: 'CABG', slug: 'cabg', refSlug: 'cabg', specialty: 'cardiac' },
  { title: 'Major Bowel Procedure', slug: 'major-bowel', refSlug: 'major-bowel', specialty: 'general' }
];

export const referenceNavItems: NavItem[] = [
  { title: 'DRG Payment Essentials', path: '/docs/reference/drg-payments', specialty: 'all' },
  { title: 'CC/MCC Specificity Guide', path: '/docs/reference/cc-mcc', specialty: 'all' },
  { title: 'General HCC Reference', path: '/docs/reference/hcc', specialty: 'all' },
  { title: 'APR-DRG SOI/ROM Guide', path: '/docs/reference/apr-drg', specialty: 'all' },
  { title: 'Patient Safety Indicators (PSI)', path: '/docs/reference/psi', specialty: 'all' }
];

