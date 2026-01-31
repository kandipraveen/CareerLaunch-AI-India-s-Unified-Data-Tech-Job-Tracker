
import { Category, Company } from './types';

export const COMPANIES: Company[] = [
  // Corporate IT & Tech Giants
  { id: 'google', name: 'Google India', url: 'https://www.google.com/about/careers/', category: Category.TECH_GIANTS },
  { id: 'microsoft', name: 'Microsoft India', url: 'https://careers.microsoft.com/india', category: Category.TECH_GIANTS },
  { id: 'amazon', name: 'Amazon India', url: 'https://www.amazon.jobs/en/locations/india', category: Category.TECH_GIANTS },
  { id: 'tcs', name: 'TCS', url: 'https://www.tcs.com/careers', category: Category.TECH_GIANTS },
  { id: 'infosys', name: 'Infosys', url: 'https://www.infosys.com/careers', category: Category.TECH_GIANTS },
  { id: 'wipro', name: 'Wipro', url: 'https://careers.wipro.com', category: Category.TECH_GIANTS },
  { id: 'ibm', name: 'IBM India', url: 'https://www.ibm.com/in-en/careers', category: Category.TECH_GIANTS },
  { id: 'sap', name: 'SAP India', url: 'https://www.sap.com/india/about/careers.html', category: Category.TECH_GIANTS },
  { id: 'oracle', name: 'Oracle India', url: 'https://www.oracle.com/in/careers/', category: Category.TECH_GIANTS },
  { id: 'zoho', name: 'Zoho', url: 'https://www.zoho.com/careers/jobdetails/', category: Category.TECH_GIANTS },

  // Consulting & Analytics
  { id: 'accenture', name: 'Accenture India', url: 'https://www.accenture.com/in-en/careers', category: Category.CONSULTING },
  { id: 'deloitte', name: 'Deloitte India', url: 'https://www.deloitte.com/in/en/careers.html', category: Category.CONSULTING },
  { id: 'pwc', name: 'PwC India', url: 'https://www.pwc.in/careers.html', category: Category.CONSULTING },
  { id: 'ey', name: 'EY India', url: 'https://www.ey.com/en_in/careers', category: Category.CONSULTING },
  { id: 'kpmg', name: 'KPMG India', url: 'https://home.kpmg/in/en/home/careers.html', category: Category.CONSULTING },
  { id: 'bcg', name: 'Boston Consulting Group', url: 'https://careers.bcg.com/global/en/locations/india', category: Category.CONSULTING },
  { id: 'mckinsey', name: 'McKinsey & Company', url: 'https://www.mckinsey.com/careers', category: Category.CONSULTING },
  { id: 'sigmoid', name: 'Sigmoid', url: 'https://www.sigmoid.com/careers', category: Category.CONSULTING },
  { id: 'evalueserve', name: 'Evalueserve', url: 'https://jobs.evalueserve.com', category: Category.CONSULTING },
  { id: 'protiviti', name: 'Protiviti India', url: 'https://www.protiviti.com/in-en/careers', category: Category.CONSULTING },
  { id: 'capgemini', name: 'Capgemini India', url: 'https://www.capgemini.com/in-en/careers/', category: Category.CONSULTING },
  { id: 'dxc', name: 'DXC Technology', url: 'https://careers.dxc.com/', category: Category.CONSULTING },
  { id: 'thirdeye', name: 'ThirdEye Data', url: 'https://thirdeyedata.ai/current-openings/', category: Category.CONSULTING },
  { id: 'sganalytics', name: 'SG Analytics', url: 'https://www.sganalytics.com/careers/', category: Category.CONSULTING },
  { id: 'manthan', name: 'Manthan', url: 'https://www.manthan.com/careers/', category: Category.CONSULTING },

  // Banking & Finance
  { id: 'sbi', name: 'SBI', url: 'https://sbi.co.in/web/careers', category: Category.BANKING },
  { id: 'ibps', name: 'IBPS', url: 'https://www.ibps.in', category: Category.BANKING },
  { id: 'pnb', name: 'PNB', url: 'https://www.pnbindia.in/Recruitments.aspx', category: Category.BANKING },
  { id: 'unionbank', name: 'Union Bank', url: 'https://www.unionbankofindia.co.in', category: Category.BANKING },
  { id: 'hdfc', name: 'HDFC Bank', url: 'https://www.hdfcbank.com/personal/about-us/careers', category: Category.BANKING },
  { id: 'icici', name: 'ICICI Bank', url: 'https://www.icicibank.com/about-us/careers', category: Category.BANKING },
  { id: 'axis', name: 'Axis Bank', url: 'https://www.axis.bank.in/careers', category: Category.BANKING },

  // Electronics / Technology PSUs
  { id: 'ecil', name: 'ECIL', url: 'https://www.ecil.co.in/careers.html', category: Category.ELECTRONICS_PSU },
  { id: 'bel', name: 'BEL', url: 'https://bel-india.in/careers', category: Category.ELECTRONICS_PSU },
  { id: 'bhel', name: 'BHEL', url: 'https://www.bhel.com/careers', category: Category.ELECTRONICS_PSU },
  { id: 'railtel', name: 'RailTel', url: 'https://www.railtelindia.com/careers', category: Category.ELECTRONICS_PSU },
  { id: 'ntpc', name: 'NTPC', url: 'https://www.ntpc.co.in/careers', category: Category.ELECTRONICS_PSU },
  { id: 'powergrid', name: 'Power Grid', url: 'https://www.powergrid.in/career', category: Category.ELECTRONICS_PSU },
  { id: 'ongc', name: 'ONGC', url: 'https://ongcindia.com/web/eng/careers', category: Category.ELECTRONICS_PSU },
  { id: 'bosch', name: 'Bosch India', url: 'https://www.bosch.in/careers/', category: Category.ELECTRONICS_PSU },
  { id: 'siemens', name: 'Siemens India', url: 'https://www.siemens.com/in/en/company/jobs.html', category: Category.ELECTRONICS_PSU },
  { id: 'honeywell', name: 'Honeywell India', url: 'https://www.honeywell.com/in/en/careers', category: Category.ELECTRONICS_PSU },
  { id: 'qualcomm', name: 'Qualcomm India', url: 'https://www.qualcomm.com/company/careers', category: Category.ELECTRONICS_PSU },
  { id: 'intel', name: 'Intel India', url: 'https://jobs.intel.com/', category: Category.ELECTRONICS_PSU },
  { id: 'ather', name: 'Ather Energy', url: 'https://www.atherenergy.com/careers', category: Category.ELECTRONICS_PSU },
  { id: 'ti', name: 'Texas Instruments', url: 'https://careers.ti.com/', category: Category.ELECTRONICS_PSU },
  { id: 'nxp', name: 'NXP Semiconductors', url: 'https://www.nxp.com/company/about-nxp/careers', category: Category.ELECTRONICS_PSU },
  { id: 'cisco', name: 'Cisco India', url: 'https://jobs.cisco.com/', category: Category.ELECTRONICS_PSU },

  // Manufacturing & Metals PSUs
  { id: 'rinl', name: 'RINL (Vizag Steel)', url: 'https://www.vizagsteel.com/careers', category: Category.MANUFACTURING_PSU },
  { id: 'sail', name: 'SAIL', url: 'https://www.sail.co.in/en/careers', category: Category.MANUFACTURING_PSU },
  { id: 'nalco', name: 'NALCO', url: 'https://nalcoindia.com/careers', category: Category.MANUFACTURING_PSU },
  { id: 'tatasteel', name: 'Tata Steel', url: 'https://www.tatasteel.com/careers/', category: Category.MANUFACTURING_PSU },
  { id: 'tatagroup', name: 'Tata Group Jobs', url: 'https://www.tata.com/careers', category: Category.MANUFACTURING_PSU },
  { id: 'jsw', name: 'JSW Steel', url: 'https://www.jsw.in/careers', category: Category.MANUFACTURING_PSU },
  { id: 'midhani', name: 'MIDHANI', url: 'https://midhani-india.in/careers', category: Category.MANUFACTURING_PSU },

  // Healthcare & Pharmaceutical
  { id: 'sunpharma', name: 'Sun Pharma', url: 'https://careers.sunpharma.com/', category: Category.HEALTHCARE_PHARMA },
  { id: 'drreddys', name: 'Dr. Reddy’s', url: 'https://careers.drreddys.com/', category: Category.HEALTHCARE_PHARMA },
  { id: 'cipla', name: 'Cipla', url: 'https://careers.cipla.com/', category: Category.HEALTHCARE_PHARMA },
  { id: 'biocon', name: 'Biocon', url: 'https://www.biocon.com/careers/', category: Category.HEALTHCARE_PHARMA },
  { id: 'zydus', name: 'Zydus', url: 'https://zyduslife.com/career.html', category: Category.HEALTHCARE_PHARMA },
  { id: 'lupin', name: 'Lupin', url: 'https://www.lupin.com/careers/', category: Category.HEALTHCARE_PHARMA },
  { id: 'glenmark', name: 'Glenmark', url: 'https://glenmarkpharma.com/careers/', category: Category.HEALTHCARE_PHARMA },
  { id: 'torrent', name: 'Torrent Pharma', url: 'https://www.torrentpharma.com/careers/', category: Category.HEALTHCARE_PHARMA },
  { id: 'divis', name: 'Divi’s', url: 'https://www.divislabs.com/careers/', category: Category.HEALTHCARE_PHARMA },
  { id: 'granules', name: 'Granules', url: 'https://www.granulesindia.com/careers/', category: Category.HEALTHCARE_PHARMA },
  { id: 'aurobindo', name: 'Aurobindo', url: 'https://www.aurobindo.com/careers/', category: Category.HEALTHCARE_PHARMA },
  { id: 'gland', name: 'Gland Pharma', url: 'https://www.glandpharma.com/careers/', category: Category.HEALTHCARE_PHARMA },
  { id: 'hetero', name: 'Hetero', url: 'https://www.hetero.com/life-at-hetero', category: Category.HEALTHCARE_PHARMA },

  // FinTech & SaaS
  { id: 'paytm', name: 'Paytm', url: 'https://paytm.com/careers/', category: Category.FINTECH_SAAS },
  { id: 'phonepe', name: 'PhonePe', url: 'https://www.phonepe.com/careers/', category: Category.FINTECH_SAAS },
  { id: 'razorpay', name: 'Razorpay', url: 'https://razorpay.com/jobs/', category: Category.FINTECH_SAAS },
  { id: 'freshworks', name: 'Freshworks', url: 'https://www.freshworks.com/company/careers/', category: Category.FINTECH_SAAS },

  // IT / Digital / Tech Government Bodies
  { id: 'nic', name: 'National Informatics Centre (NIC)', url: 'https://www.nic.in/recruitment/', category: Category.GOVT_TECH },
  { id: 'uidai', name: 'UIDAI', url: 'https://uidai.gov.in/careers/', category: Category.GOVT_TECH },
  { id: 'meity', name: 'MeitY', url: 'https://www.meity.gov.in/recruitment', category: Category.GOVT_TECH },
  { id: 'negd', name: 'NeGD', url: 'https://negd.gov.in/careers', category: Category.GOVT_TECH },

  // Scientific & Government (India)
  { id: 'isro', name: 'ISRO (Indian Space Research Organisation)', url: 'https://www.isro.gov.in/Careers.html', category: Category.SCIENTIFIC_GOVT },
  { id: 'drdo', name: 'DRDO (Defence Research and Development Organisation)', url: 'https://drdo.gov.in/drdo/en/offerings/careers', category: Category.SCIENTIFIC_GOVT },
  { id: 'barc', name: 'BARC (Bhabha Atomic Research Centre)', url: 'https://www.barc.gov.in/careers/', category: Category.SCIENTIFIC_GOVT },
  { id: 'cdac', name: 'C-DAC (Centre for Development of Advanced Computing)', url: 'https://careers.cdac.in/', category: Category.SCIENTIFIC_GOVT },
];

export const ROLE_DEFINITIONS = {
  DATA: [
    'Data Analyst', 'Junior Data Analyst', 'Data Scientist', 'Associate Data Scientist',
    'Data Engineer', 'Business Data Analyst', 'MIS Analyst', 'Power BI Developer', 'Tableau Developer',
    'AI Engineer', 'ML Engineer', 'Applied Scientist', 'NLP Associate'
  ],
  SOFTWARE: [
    'Software Engineer', 'Software Developer', 'SDE', 'Python Developer', 'Java Developer',
    'Backend Engineer', 'SQL Developer', 'Junior DBA', 'Cloud Engineer', 'DevOps Engineer'
  ],
  CORE: [
    'IoT Engineer', 'Embedded Systems Engineer', 'Firmware Engineer', 'Edge AI Engineer',
    'Smart Manufacturing Engineer', 'Automation Engineer', 'PLC Engineer'
  ],
  MANUFACTURING: [
    'Metallurgical Engineer', 'Materials Engineer', 'Production Engineer', 'Quality Engineer',
    'Graduate Engineer Trainee', 'GET', 'Junior Engineer'
  ]
};
