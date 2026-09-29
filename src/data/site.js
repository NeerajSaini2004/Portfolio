// Contact details and public profile links transcribed from the supplied resume.
export const profile = {
  email: 'Neerajboy756@gmail.com',
  phone: '+91 9783600140',
  github: 'https://github.com/NeerajSaini2004',
  linkedin: 'https://www.linkedin.com/in/NeerajSaini19',
  resume: '/resume.pdf',
}

export const projects = [
  {
    number: '01', title: 'SmartBook Sharing', subtitle: 'Academic marketplace',
    description: 'A full-stack marketplace that helps students buy and sell second-hand books and study materials with confidence.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay'],
    features: ['Verified student onboarding', 'Role-based access & authentication', 'Escrow payments and order tracking'],
    visual: 'market', live: 'https://online-book-sharing-system-client.onrender.com', github: 'https://github.com/NeerajSaini2004/Online-book-sharing-system-',
  },
  {
    number: '02', title: 'Placement Portal', subtitle: 'Connecting students & recruiters',
    description: 'A web-based placement portal built to streamline student-recruiter interaction and campus hiring.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    features: ['Student profiles and job postings', 'Company dashboards and application tracking', 'Admin workflows for shortlisting and reports'],
    visual: 'portal', live: '', github: '',
  },
  {
    number: '03', title: 'Learning Management System', subtitle: 'Learning, organized',
    description: 'A responsive learning platform for managing courses, supporting student learning and bringing progress into one clear dashboard.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    features: ['Course management', 'Student learning dashboard', 'Secure authentication'],
    visual: 'learning', live: '', github: 'https://github.com/NeerajSaini2004/FULL-STACK-MERN-WEB-D/tree/main/LMS',
  },
  {
    number: '04', title: 'Network Bandwidth Dashboard', subtitle: 'North Western Railway · Internship project',
    description: 'A monitoring and analysis dashboard built to track network bandwidth and surface high-usage events.',
    tags: ['Python', 'HTML', 'CSS', 'JavaScript', 'PRTG'],
    features: ['Real-time network data and bandwidth trends', 'Threshold-based high-usage alerts', 'Downtime tracking and automated notifications'],
    visual: 'bandwidth', live: '', github: '',
  },
  {
    number: '05', title: 'English Learning Platform', subtitle: 'Practice with purpose',
    description: 'An approachable place to build English skills through vocabulary, grammar and thoughtfully organized learning resources.',
    tags: ['React', 'JavaScript', 'Node.js', 'MongoDB'],
    features: ['Vocabulary and grammar learning', 'Curated learning resources', 'Responsive, user-friendly interface'],
    visual: 'english', live: '', github: '',
  },
]

export const skills = {
  Languages: ['C', 'C++', 'Java', 'Python', 'SQL'],
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'],
  'Data & platform': ['MongoDB', 'MySQL', 'ServiceNow', 'Flow Designer'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'PRTG'],
}

export const codingProfiles = [
  {
    name: 'GeeksforGeeks', mark: 'GfG', subtitle: 'Practice & problem solving',
    stats: [['178', 'Problems solved']],
    url: 'https://www.geeksforgeeks.org/profile/enneerl4yc',
    button: 'View GFG Profile',
  },
  {
    name: 'LeetCode', mark: 'LC', subtitle: 'Data structures & algorithms',
    stats: [['178', 'Problems solved'], ['75', 'Easy'], ['94', 'Medium'], ['9', 'Hard'], ['1485', 'Contest rating'], ['3', 'Contests attended'], ['2', 'Badges']],
    url: 'https://leetcode.com/u/neeraj_01_/',
    button: 'View LeetCode Profile',
  },
  {
    name: 'CodeChef', mark: 'CC', subtitle: 'Competitive programming',
    stats: [['852', 'Problems solved'], ['13', 'Contests participated'], ['1374', 'Current rating'], ['5412', 'Global rank'], ['1★', 'Star rating']],
    url: 'https://www.codechef.com/users/neeraj_saini19',
    button: 'View CodeChef Profile',
  },
]
