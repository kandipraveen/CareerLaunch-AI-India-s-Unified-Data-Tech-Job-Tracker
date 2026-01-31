
export enum Category {
  TECH_GIANTS = 'Corporate IT & Tech Giants',
  CONSULTING = 'Consulting & Analytics',
  BANKING = 'Banking & Finance',
  ELECTRONICS_PSU = 'Electronics / Technology PSUs',
  MANUFACTURING_PSU = 'Manufacturing & Metals PSUs',
  HEALTHCARE_PHARMA = 'Healthcare & Pharmaceutical',
  FINTECH_SAAS = 'FinTech & SaaS',
  GOVT_TECH = 'IT / Digital / Tech Government Bodies',
  SCIENTIFIC_GOVT = 'Scientific & Government (India)'
}

export interface Company {
  id: string;
  name: string;
  url: string;
  category: Category;
  description?: string;
}

export interface Job {
  id: string;
  companyId: string;
  companyName: string;
  title: string;
  location: string;
  link: string;
  postedDate: string;
  sourceType: 'Official Portal';
  category: string;
  roleType: 'SDE' | 'Data' | 'Core Engineering' | 'Management' | 'Other';
  experienceLevel: 'Fresher' | 'Junior' | 'Intern';
  skills: string[];
}

export interface ScanResult {
  jobs: Job[];
  sources: { title: string; uri: string }[];
}
