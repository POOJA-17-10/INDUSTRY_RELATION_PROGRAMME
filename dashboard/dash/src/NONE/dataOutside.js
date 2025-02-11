const dataOutside = [
    {
      sNo: 1,
      location: 'Coimbatore',
      companyAddress: '123 XYZ Street',
      companyName: 'Company A',
      hrname:'Mr A',
      personName: 'John Doe',
      designation: 'Manager',
      domain: 'IT',
      programName: 'Software Development Workshop',
      totalStudents: 50,
      venue: 'SF Seminar Hall 1',
      date: '2024-08-01',
      mode: 'Online',
      referrer: 'Prof. Smith',
    },
    {
      sNo: 2,
      location: 'Chennai',
      companyAddress: '456 ABC Avenue',
      companyName: 'Company B',
      personName: 'Jane Smith',
      designation: 'Senior Engineer',
      domain: 'Electronics',
      programName: 'Circuit Design Seminar',
      totalStudents: 30,
      venue: 'SF Seminar Hall 2',
      date: '2024-08-05',
      mode: 'Offline',
      referrer: 'Dr. Johnson',
    },
    {
      sNo: 3,
      location: 'Bangalore',
      companyAddress: '789 DEF Road',
      companyName: 'Company C',
      personName: 'Alice Brown',
      designation: 'Team Lead',
      domain: 'Aerospace',
      programName: 'Aerospace Engineering Basics',
      totalStudents: 40,
      venue: 'Aero Seminar Hall',
      date: '2024-08-10',
      mode: 'Online',
      referrer: 'Dr. Williams',
    },
    {
      sNo: 4,
      location: 'Erode',
      companyAddress: '101 GHI Street',
      companyName: 'Company D',
      personName: 'Bob Davis',
      designation: 'Project Manager',
      domain: 'Textile',
      programName: 'Textile Manufacturing Techniques',
      totalStudents: 25,
      venue: 'Textile Seminar Hall',
      date: '2024-08-15',
      mode: 'Offline',
      referrer: 'Prof. Adams',
    },
    {
      sNo: 5,
      location: 'Hyderabad',
      companyAddress: '202 JKL Boulevard',
      companyName: 'Company E',
      personName: 'Carol Evans',
      designation: 'Operations Head',
      domain: 'IT',
      programName: 'Cybersecurity Essentials',
      totalStudents: 60,
      venue: 'SF Seminar Hall 3',
      date: '2024-08-20',
      mode: 'Online',
      referrer: 'Dr. Clark',
    },
    {
      sNo: 6,
      location: 'Coimbatore',
      companyAddress: '303 MNO Lane',
      companyName: 'Company F',
      personName: 'David Foster',
      designation: 'HR Manager',
      domain: 'Human Resources',
      programName: 'Effective Communication Strategies',
      totalStudents: 35,
      venue: 'SF Seminar Hall 1',
      date: '2024-08-25',
      mode: 'Offline',
      referrer: 'Prof. Parker',
    },
    {
      sNo: 7,
      location: 'Chennai',
      companyAddress: '404 PQR Drive',
      companyName: 'Company G',
      personName: 'Eve Turner',
      designation: 'Chief Engineer',
      domain: 'Mechanical',
      programName: 'Advanced Robotics',
      totalStudents: 45,
      venue: 'SF Seminar Hall 2',
      date: '2024-08-28',
      mode: 'Online',
      referrer: 'Dr. Hamilton',
    },
    {
      sNo: 8,
      location: 'Bangalore',
      companyAddress: '505 STU Street',
      companyName: 'Company H',
      personName: 'Frank Lee',
      designation: 'Product Manager',
      domain: 'IT',
      programName: 'Product Management 101',
      totalStudents: 50,
      venue: 'SF Seminar Hall 3',
      date: '2024-09-01',
      mode: 'Offline',
      referrer: 'Dr. Lopez',
    },
    {
      sNo: 9,
      location: 'Erode',
      companyAddress: '606 VWX Avenue',
      companyName: 'Company I',
      personName: 'Grace Kim',
      designation: 'Research Scientist',
      domain: 'Biotechnology',
      programName: 'Genetic Engineering Overview',
      totalStudents: 20,
      venue: 'SF Seminar Hall 1',
      date: '2024-09-05',
      mode: 'Online',
      referrer: 'Prof. Hernandez',
    },
    {
      sNo: 10,
      location: 'Hyderabad',
      companyAddress: '707 YZA Boulevard',
      companyName: 'Company J',
      personName: 'Henry Scott',
      designation: 'CTO',
      domain: 'IT',
      programName: 'AI and Machine Learning',
      totalStudents: 70,
      venue: 'Aero Seminar Hall',
      date: '2024-09-10',
      mode: 'Offline',
      referrer: 'Prof. Davis',
    },
    {
      sNo: 11,
      location: 'Coimbatore',
      companyAddress: '808 BCD Road',
      companyName: 'Company K',
      personName: 'Irene Wilson',
      designation: 'Lead Developer',
      domain: 'Software',
      programName: 'Agile Development Workshop',
      totalStudents: 55,
      venue: 'SF Seminar Hall 2',
      date: '2024-09-15',
      mode: 'Online',
      referrer: 'Prof. Young',
    },
    {
      sNo: 12,
      location: 'Chennai',
      companyAddress: '909 EFG Street',
      companyName: 'Company L',
      personName: 'Jack White',
      designation: 'System Architect',
      domain: 'IT',
      programName: 'Cloud Computing Basics',
      totalStudents: 65,
      venue: 'SF Seminar Hall 3',
      date: '2024-09-20',
      mode: 'Offline',
      referrer: 'Dr. Phillips',
    },
    {
      sNo: 13,
      location: 'Bangalore',
      companyAddress: '101 HIJ Avenue',
      companyName: 'Company M',
      personName: 'Karen Black',
      designation: 'Engineering Director',
      domain: 'Civil Engineering',
      programName: 'Sustainable Building Techniques',
      totalStudents: 40,
      venue: 'SF Seminar Hall 1',
      date: '2024-09-25',
      mode: 'Online',
      referrer: 'Dr. Anderson',
    },
    {
      sNo: 14,
      location: 'Erode',
      companyAddress: '202 KLM Road',
      companyName: 'Company N',
      personName: 'Leo Brown',
      designation: 'Operations Manager',
      domain: 'Manufacturing',
      programName: 'Lean Manufacturing Principles',
      totalStudents: 30,
      venue: 'SF Seminar Hall 2',
      date: '2024-09-30',
      mode: 'Offline',
      referrer: 'Prof. Taylor',
    },
    {
      sNo: 15,
      location: 'Hyderabad',
      companyAddress: '303 NOP Street',
      companyName: 'Company O',
      personName: 'Megan Blue',
      designation: 'Chief Analyst',
      domain: 'Finance',
      programName: 'Data Analytics for Finance',
      totalStudents: 75,
      venue: 'SF Seminar Hall 3',
      date: '2024-10-05',
      mode: 'Online',
      referrer: 'Dr. King',
    },
    {
      sNo: 16,
      location: 'Coimbatore',
      companyAddress: '404 QRS Avenue',
      companyName: 'Company P',
      personName: 'Nina Green',
      designation: 'HR Specialist',
      domain: 'Human Resources',
      programName: 'Talent Acquisition Strategies',
      totalStudents: 30,
      venue: 'SF Seminar Hall 1',
      date: '2024-10-10',
      mode: 'Offline',
      referrer: 'Prof. Lee',
    },
    {
      sNo: 17,
      location: 'Chennai',
      companyAddress: '505 TUV Boulevard',
      companyName: 'Company Q',
      personName: 'Oscar Black',
      designation: 'Marketing Head',
      domain: 'Marketing',
      programName: 'Digital Marketing Trends',
      totalStudents: 45,
      venue: 'SF Seminar Hall 2',
      date: '2024-10-15',
      mode: 'Online',
      referrer: 'Dr. Campbell',
    },
    {
      sNo: 18,
      location: 'Bangalore',
      companyAddress: '606 WXY Road',
      companyName: 'Company R',
      personName: 'Pamela White',
      designation: 'Lead Designer',
      domain: 'Design',
      programName: 'UI/UX Design Workshop',
      totalStudents: 50,
      venue: 'SF Seminar Hall 3',
      date: '2024-10-20',
      mode: 'Offline',
      referrer: 'Prof. Mitchell',
    },
    {
      sNo: 19,
      location: 'Erode',
      companyAddress: '707 ZAB Street',
      companyName: 'Company S',
      personName: 'Quincy Brown',
      designation: 'Logistics Manager',
      domain: 'Logistics',
      programName: 'Supply Chain Optimization',
      totalStudents: 35,
      venue: 'SF Seminar Hall 1',
      date: '2024-10-25',
      mode: 'Online',
      referrer: 'Dr. Evans',
    },
    {
      sNo: 20,
      location: 'Hyderabad',
      companyAddress: '808 BCD Avenue',
      companyName: 'Company T',
      personName: 'Rachel Green',
      designation: 'Compliance Officer',
      domain: 'Regulatory',
      programName: 'Regulatory Compliance Basics',
      totalStudents: 40,
      venue: 'SF Seminar Hall 2',
      date: '2024-10-30',
      mode: 'Offline',
      referrer: 'Prof. Hall',
    }
    
  ];
  
  export default dataOutside;
  