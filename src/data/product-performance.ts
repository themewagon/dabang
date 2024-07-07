interface ProductPerformanceData {
  id: number;
  assigned: string;
  role: string;
  name: string;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  budget: number;
}

export const rows: ProductPerformanceData[] = [
  {
    id: 1,
    assigned: 'Sunil Joshi',
    role: 'Web Designer',
    name: 'Elite Admin',
    priority: 'Low',
    budget: 3.9,
  },
  {
    id: 2,
    assigned: 'Andrew McDownland',
    role: 'Project Manager',
    name: 'Real Homes WP Theme',
    priority: 'Medium',
    budget: 24.5,
  },
  {
    id: 3,
    assigned: 'Christopher Jamil',
    role: 'Project Manager',
    name: 'MedicalPro WP Theme',
    priority: 'High',
    budget: 12.8,
  },
  {
    id: 4,
    assigned: 'Nirav Joshi',
    role: 'Frontend Engineer',
    name: 'Hosting Press HTML',
    priority: 'Critical',
    budget: 2.4,
  },
  {
    id: 5,
    assigned: 'Amy Adams',
    role: 'Backend Developer',
    name: 'Ecommerce Platform',
    priority: 'High',
    budget: 15.0,
  },
  {
    id: 6,
    assigned: 'John Doe',
    role: 'Full Stack Developer',
    name: 'Social Media App',
    priority: 'Medium',
    budget: 18.5,
  },
  {
    id: 7,
    assigned: 'Jane Smith',
    role: 'UI/UX Designer',
    name: 'Design System',
    priority: 'Low',
    budget: 8.1,
  },
  {
    id: 8,
    assigned: 'Robert Brown',
    role: 'DevOps Engineer',
    name: 'Cloud Infrastructure',
    priority: 'Critical',
    budget: 22.3,
  },
  {
    id: 9,
    assigned: 'Laura Wilson',
    role: 'Mobile Developer',
    name: 'Mobile Banking App',
    priority: 'Medium',
    budget: 19.0,
  },
  {
    id: 10,
    assigned: 'James Taylor',
    role: 'Data Scientist',
    name: 'AI Research Project',
    priority: 'High',
    budget: 30.2,
  },
  {
    id: 11,
    assigned: 'Emily Davis',
    role: 'QA Engineer',
    name: 'Testing Automation',
    priority: 'Low',
    budget: 7.6,
  },
  {
    id: 12,
    assigned: 'Michael Miller',
    role: 'Security Specialist',
    name: 'Security Enhancement',
    priority: 'Critical',
    budget: 20.4,
  },
  {
    id: 13,
    assigned: 'Sarah White',
    role: 'Product Manager',
    name: 'New Product Launch',
    priority: 'High',
    budget: 25.0,
  },
  {
    id: 14,
    assigned: 'Daniel Lee',
    role: 'Frontend Developer',
    name: 'Marketing Website',
    priority: 'Medium',
    budget: 9.9,
  },
  {
    id: 15,
    assigned: 'Grace Kim',
    role: 'Content Strategist',
    name: 'Content Management',
    priority: 'Low',
    budget: 4.7,
  },
];
