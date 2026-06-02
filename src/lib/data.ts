// src/lib/data.ts

export const courses = [
  {
    name: "MBBS",
    slug: "mbbs",
    category: "Medical & Healthcare",
    duration: "5.5 Years",
    eligibility: "10+2 PCB with minimum 50% aggregate",
    degreeName: "Bachelor of Medicine and Bachelor of Surgery",
    entranceExam: "NEET UG",
    description: "MBBS is the premier undergraduate medical degree worldwide. The program is designed to create highly competent medical professionals capable of diagnosing, treating, and preventing illnesses. It involves rigorous academic study combined with extensive clinical rotations. Amets Educare specializes in securing management quota and merit seats in top institutions across India and abroad.",
    syllabus: [
      "First Year: Anatomy, Physiology, Biochemistry",
      "Second Year: Pathology, Microbiology, Pharmacology, Forensic Medicine",
      "Third Year: ENT, Ophthalmology, Community Medicine",
      "Fourth Year: Medicine, Surgery, OBG, Pediatrics",
      "Final Year: One Year Mandatory Clinical Internship"
    ],
    careerOptions: [
      "Medical Officer in Govt. Hospitals",
      "Specialist Surgeon (Post MS/MD)",
      "Private Practice / Clinic Owner",
      "Healthcare Administrator",
      "Clinical Researcher",
      "Armed Forces Medical Services",
      "Medical Academics / Professor",
      "Global Health Consultant"
    ],
    feeRange: {
      govt: "₹50K - ₹2L / year",
      private: "₹10L - ₹25L / year",
      abroad: "₹3L - ₹6L / year"
    },
    topStates: ["Karnataka", "Maharashtra", "Tamil Nadu", "Uttar Pradesh", "Gujarat"],
    faqs: [
      { question: "What is the NEET cutoff for MBBS in private colleges?", answer: "The cutoff varies yearly, but generally, a score of 250-300+ is required for good private colleges through management quota." },
      { question: "Can Amets Educare help with education loans for MBBS?", answer: "Yes, we provide complete documentation support to help you secure education loans from our banking partners." },
      { question: "Is MBBS abroad valid in India?", answer: "Yes, MBBS from NMC-approved universities abroad is fully valid, provided you clear the FMGE (NEXT) exam upon return." },
      { question: "What is the difference between state and all-India quota?", answer: "15% of seats in Govt medical colleges are reserved for All India Quota, while 85% are reserved for candidates domiciled in the specific state." },
      { question: "Are hostel facilities compulsory for MBBS students?", answer: "While not legally compulsory in all colleges, staying in a hostel is highly recommended due to the intensive 24/7 clinical schedules." },
      { question: "Can I get admission without a NEET score?", answer: "No, a valid qualifying NEET score is legally mandatory for pursuing MBBS anywhere in India or abroad." },
      { question: "What happens during the 1-year internship?", answer: "Students rotate through various hospital departments to gain hands-on clinical experience under supervision." },
      { question: "How does the NRI quota work?", answer: "NRI quota seats (usually 15% in private colleges) are reserved for NRIs, PIOs, OCIs, or wards of NRIs, and generally have higher fees." }
    ],
    metaTitle: "MBBS Admission 2026 | Top Medical Colleges & Counselling | Amets Educare",
    metaDescription: "Get expert admission guidance for MBBS in India and abroad. Explore top medical colleges, NEET cutoffs, fee structures, and management quota options."
  },
  {
    name: "BDS",
    slug: "bds",
    category: "Medical & Healthcare",
    duration: "5 Years",
    eligibility: "10+2 PCB with minimum 50% aggregate",
    degreeName: "Bachelor of Dental Surgery",
    entranceExam: "NEET UG",
    description: "BDS is the designated degree program for aspiring dentists. It focuses on diagnosing, preventing, and treating diseases of the oral cavity. The curriculum combines basic medical sciences with specialized dental skills. Dental professionals are in high demand both in India and globally.",
    syllabus: [
      "First Year: General Human Anatomy, Dental Anatomy, Histology",
      "Second Year: Pharmacology, Dental Materials, Pathology",
      "Third Year: General Medicine, General Surgery, Oral Pathology",
      "Fourth Year: Orthodontics, Oral Surgery, Prosthodontics",
      "Final Year: One Year Mandatory Rotatory Internship"
    ],
    careerOptions: [
      "Clinical Dentist",
      "Dental Surgeon",
      "Public Health Dentist",
      "Cosmetic Dental Specialist",
      "Oral Pathologist",
      "Dental Academics",
      "Government Dental Officer",
      "Forensic Odontologist"
    ],
    feeRange: {
      govt: "₹30K - ₹1L / year",
      private: "₹2L - ₹8L / year",
      abroad: "₹2L - ₹5L / year"
    },
    topStates: ["Maharashtra", "Karnataka", "Tamil Nadu", "Delhi NCR", "Kerala"],
    faqs: [
      { question: "Is NEET required for BDS?", answer: "Yes, NEET UG is the mandatory entrance exam for BDS admissions across India." },
      { question: "Can I open my own clinic immediately after BDS?", answer: "Yes, after completing the 5-year course and registering with the State Dental Council, you can start a private practice." },
      { question: "What are the higher study options after BDS?", answer: "MDS (Master of Dental Surgery) is the most popular postgraduate path, specializing in fields like Orthodontics or Oral Surgery." },
      { question: "Is BDS a good career option?", answer: "Absolutely. With rising awareness of oral hygiene and cosmetic dentistry, the demand for skilled dentists is growing rapidly." },
      { question: "What is the difference between MBBS and BDS?", answer: "MBBS focuses on overall human medicine, while BDS specializes exclusively in the oral cavity, jaw, and facial structures." },
      { question: "Do dental colleges provide practical patients?", answer: "Yes, reputable dental colleges have attached hospitals with high OPD footfall to ensure students get hands-on clinical practice." },
      { question: "Can I do BDS abroad?", answer: "Yes, many countries offer excellent dental programs that are recognized in India subject to screening tests." },
      { question: "How competitive is the BDS cutoff compared to MBBS?", answer: "BDS cutoffs are generally lower than MBBS, making it an excellent alternative for students passionate about healthcare." }
    ],
    metaTitle: "BDS Admission 2026 | Best Dental Colleges | Amets Educare",
    metaDescription: "Secure your seat in top Dental colleges for BDS. We provide complete counselling support, management quota admissions, and fee structure details."
  },
  {
    name: "BAMS",
    slug: "bams",
    category: "Medical & Healthcare",
    duration: "5.5 Years",
    eligibility: "10+2 PCB with minimum 50% aggregate",
    degreeName: "Bachelor of Ayurvedic Medicine and Surgery",
    entranceExam: "NEET UG",
    description: "BAMS integrates modern medical science with traditional Ayurvedic principles. This holistic healthcare degree is gaining massive global popularity as the world shifts toward natural, preventative medicine. Students learn anatomy alongside ancient herbal pharmacology and diagnostic techniques.",
    syllabus: [
      "First Year: Padartha Vigyan, Sanskrit, Rachana Sharir (Anatomy), Kriya Sharir (Physiology)",
      "Second Year: Dravyaguna Vigyan (Pharmacology), Roga Nidan (Pathology)",
      "Third Year: Swasthavritta, Prasuti Tantra (Gynaecology), Kaumarbhritya (Pediatrics)",
      "Fourth Year: Kayachikitsa (Internal Medicine), Shalya Tantra (Surgery)",
      "Final Year: One Year Clinical Internship"
    ],
    careerOptions: [
      "Ayurvedic Physician",
      "Medical Officer (AYUSH)",
      "Panchakarma Specialist",
      "Clinical Researcher",
      "Pharmacist (Ayurveda)",
      "Health & Wellness Consultant",
      "Dietician",
      "Academic Lecturer"
    ],
    feeRange: { govt: "₹20K - ₹50K / yr", private: "₹1.5L - ₹4L / yr", abroad: "N/A" },
    topStates: ["Maharashtra", "Gujarat", "Karnataka", "Uttar Pradesh", "Kerala"],
    faqs: [
      { question: "Is NEET required for BAMS?", answer: "Yes, NEET UG is required for admission to BAMS courses in India." },
      { question: "Can a BAMS doctor practice allopathy?", answer: "Certain states allow BAMS doctors to prescribe specific basic allopathic medicines in emergencies, but primarily they practice Ayurveda." },
      { question: "Is Sanskrit compulsory for BAMS?", answer: "Yes, Sanskrit is taught in the first year as many ancient Ayurvedic texts are written in it." },
      { question: "What is the scope of BAMS abroad?", answer: "There is a booming demand for Ayurvedic consultants in Europe, the USA, and the Middle East in the wellness sector." },
      { question: "Can BAMS doctors perform surgery?", answer: "Postgraduates in Shalya Tantra (Ayurvedic Surgery) are permitted to perform certain specific surgical procedures." },
      { question: "How is the Govt job sector for BAMS?", answer: "The Ministry of AYUSH regularly recruits BAMS graduates as Medical Officers for Govt hospitals and dispensaries." },
      { question: "What is Panchakarma?", answer: "It is a specialized Ayurvedic detoxification therapy taught during the course, which is highly lucrative in private practice." },
      { question: "Are BAMS degrees recognized globally?", answer: "The WHO recognizes Ayurveda, and BAMS is the official degree for this medical system in India." }
    ],
    metaTitle: "BAMS Admission 2026 | Top Ayurvedic Colleges | Amets Educare",
    metaDescription: "Pursue BAMS in top AYUSH-approved colleges. Complete guidance on NEET cutoffs, syllabus, fees, and career scope for Ayurvedic medicine."
  },
  {
    name: "BHMS",
    slug: "bhms",
    category: "Medical & Healthcare",
    duration: "5.5 Years",
    eligibility: "10+2 PCB with minimum 50% aggregate",
    degreeName: "Bachelor of Homeopathic Medicine and Surgery",
    entranceExam: "NEET UG",
    description: "BHMS provides comprehensive knowledge of the homeopathic medical system. It relies on the principle of 'like cures like' to treat acute and chronic illnesses without harsh side effects. The degree is heavily focused on specialized pharmacology and holistic patient diagnostics.",
    syllabus: [
      "First Year: Anatomy, Physiology, Homeopathic Pharmacy",
      "Second Year: Pathology, Microbiology, Forensic Medicine, Organon of Medicine",
      "Third Year: Surgery, Gynaecology, Materia Medica",
      "Fourth Year: Practice of Medicine, Community Medicine, Repertory",
      "Final Year: One Year Mandatory Clinical Internship"
    ],
    careerOptions: [
      "Homeopathic Physician",
      "AYUSH Medical Officer",
      "Medical Consultant",
      "Pharmacist (Homeopathy)",
      "Researcher",
      "Hospital Administrator",
      "Academician",
      "Public Health Specialist"
    ],
    feeRange: { govt: "₹20K - ₹50K / yr", private: "₹1L - ₹3L / yr", abroad: "N/A" },
    topStates: ["Maharashtra", "West Bengal", "Gujarat", "Karnataka", "UP"],
    faqs: [
      { question: "Is NEET mandatory for BHMS?", answer: "Yes, NEET UG is the qualifying exam required for BHMS admission." },
      { question: "Is Homeopathy popular in India?", answer: "India has the largest homeopathic infrastructure in the world, with massive patient reliance on this system for chronic diseases." },
      { question: "What is Materia Medica?", answer: "It is the encyclopedia of homeopathic therapeutic properties, a core subject in the BHMS curriculum." },
      { question: "Can I pursue MD after BHMS?", answer: "Yes, MD (Homeopathy) is available in various specialties like Repertory, Materia Medica, and Pediatrics." },
      { question: "Are Govt jobs available for BHMS?", answer: "Yes, graduates can apply for Medical Officer posts through UPSC and state PSC exams under the AYUSH ministry." },
      { question: "How long does it take to establish a private clinic?", answer: "Like any medical practice, it takes 2-3 years to build a loyal patient base based on clinical success rates." },
      { question: "Is BHMS globally recognized?", answer: "Homeopathy is widely practiced in Germany, France, and the UK, offering international career pathways." },
      { question: "What is the average salary for a BHMS fresher?", answer: "Freshers can expect ₹3L - ₹5L per annum initially, which scales significantly with private practice experience." }
    ],
    metaTitle: "BHMS Admission 2026 | Top Homeopathic Colleges | Amets Educare",
    metaDescription: "Expert counselling for BHMS admissions in India. Explore top colleges, fee structures, and the immense career scope of Homeopathic medicine."
  },
  {
    name: "B.Sc Nursing",
    slug: "nursing",
    category: "Medical & Healthcare",
    duration: "4 Years",
    eligibility: "10+2 PCB with minimum 45% aggregate",
    degreeName: "Bachelor of Science in Nursing",
    entranceExam: "NEET / State Entrance / College Level",
    description: "B.Sc Nursing is a professional healthcare degree focusing on patient care, recovery, and medical assistance. Nurses form the backbone of the global healthcare system. This program combines rigorous theoretical education with extensive practical ward duty.",
    syllabus: [
      "First Year: Anatomy, Physiology, Nutrition, Psychology, Nursing Foundations",
      "Second Year: Pharmacology, Pathology, Medical-Surgical Nursing, Genetics",
      "Third Year: Child Health Nursing, Mental Health Nursing, Sociology",
      "Fourth Year: Midwifery, Obstetrical Nursing, Community Health Nursing, Internship"
    ],
    careerOptions: [
      "Registered Nurse (RN)",
      "Nursing Superintendent",
      "Military Nurse",
      "Industrial Nurse",
      "Community Health Officer",
      "Nursing Tutor",
      "Clinical Instructor",
      "Overseas Healthcare Worker"
    ],
    feeRange: { govt: "₹10K - ₹30K / yr", private: "₹50K - ₹2L / yr", abroad: "₹2L - ₹4L / yr" },
    topStates: ["Kerala", "Karnataka", "Tamil Nadu", "Maharashtra", "Delhi"],
    faqs: [
      { question: "Is NEET required for B.Sc Nursing?", answer: "Some top institutes (like AIIMS, JIPMER, and AFMC) use NEET or conduct their own exams, but many private colleges admit based on 12th marks or state entrance tests." },
      { question: "Is there a demand for Indian nurses abroad?", answer: "Yes, there is a massive global shortage of nurses. Indian nurses are highly sought after in the UK, USA, Canada, and the Middle East." },
      { question: "Can male students apply for B.Sc Nursing?", answer: "Yes, male nursing is rapidly growing, and all major colleges accept male candidates, except a few specialized women-only institutes." },
      { question: "What is the difference between GNM and B.Sc Nursing?", answer: "GNM is a 3-year diploma, whereas B.Sc Nursing is a 4-year undergraduate degree offering better salary and career growth." },
      { question: "Are hostel stays mandatory?", answer: "Most nursing colleges require students to stay in hostels due to early morning and late-night clinical shift duties." },
      { question: "What is the salary of a Registered Nurse?", answer: "In Govt hospitals, starting salaries range from ₹50K-₹70K/month. Private hospitals pay ₹20K-₹40K initially. Overseas salaries are exceptionally high." },
      { question: "Can I do M.Sc Nursing later?", answer: "Yes, after completing B.Sc Nursing and gaining 1 year of clinical experience, you can pursue an M.Sc Nursing in various specialties." },
      { question: "What are the physical requirements?", answer: "Candidates must be medically fit to handle the physical demands of long clinical shifts and patient care." }
    ],
    metaTitle: "B.Sc Nursing Admission 2026 | Top Colleges & Fees | Amets Educare",
    metaDescription: "Start your noble career in healthcare. Get complete details on B.Sc Nursing admissions, entrance exams, top colleges, and global placement opportunities."
  },
  {
    name: "B.Tech",
    slug: "btech",
    category: "Engineering & Technical",
    duration: "4 Years",
    eligibility: "10+2 PCM with minimum 50% aggregate",
    degreeName: "Bachelor of Technology",
    entranceExam: "JEE Main / State Level Entrance / Private Exams (BITSAT, VITEEE)",
    description: "B.Tech is the foundational degree for aspiring engineers and technologists. With specializations ranging from Computer Science and Artificial Intelligence to Mechanical and Civil engineering, this program equips students with the analytical and technical skills required to drive modern industry.",
    syllabus: [
      "First Year: Engineering Mathematics, Physics, Chemistry, Basic Programming (Common for all)",
      "Second Year: Core Branch Subjects, Data Structures, Thermodynamics, Circuits",
      "Third Year: Advanced Core Subjects, Electives, Minor Projects, Industrial Training",
      "Fourth Year: Specialization Subjects, Major Capstone Project, Internships"
    ],
    careerOptions: [
      "Software Engineer / Developer",
      "Data Scientist / AI Specialist",
      "Systems Architect",
      "Mechanical/Civil Engineer",
      "Consultant",
      "Product Manager",
      "Research Scientist",
      "Entrepreneur"
    ],
    feeRange: { govt: "₹50K - ₹2L / yr", private: "₹1L - ₹4L / yr", abroad: "₹10L - ₹30L / yr" },
    topStates: ["Karnataka", "Tamil Nadu", "Maharashtra", "Delhi NCR", "Telangana"],
    faqs: [
      { question: "How can I get admission into top private B.Tech colleges?", answer: "Admission is primarily through JEE Main or specific university exams (VITEEE, SRMJEEE). Management quota seats are also available in top private colleges." },
      { question: "Which B.Tech branch has the highest placement rate?", answer: "Currently, Computer Science Engineering (CSE), Artificial Intelligence (AI), and Data Science offer the highest packages and placement rates." },
      { question: "What is the difference between B.E. and B.Tech?", answer: "Both hold the same academic value. B.E. (Bachelor of Engineering) leans slightly theoretical, while B.Tech is more practically and technically oriented." },
      { question: "Can Amets Educare help with management quota seats in B.Tech?", answer: "Yes, we facilitate direct admissions under management/NRI quotas in top-tier private engineering institutes." },
      { question: "Are internships mandatory in B.Tech?", answer: "Yes, AICTE mandates internships to bridge the gap between academic learning and industrial application." },
      { question: "Can a PCB student do B.Tech?", answer: "PCB students can pursue B.Tech in Biotechnology or Bioinformatics, but core branches require PCM." },
      { question: "What is the scope of higher education?", answer: "Graduates can pursue M.Tech (via GATE), MS abroad (via GRE), or an MBA (via CAT) for management roles." },
      { question: "How important are coding skills for non-IT branches?", answer: "Extremely important. Basic programming knowledge significantly boosts employability for Mechanical, Civil, and Electronics engineers." }
    ],
    metaTitle: "B.Tech Admission 2026 | Engineering Colleges | Amets Educare",
    metaDescription: "Secure B.Tech admissions in top engineering colleges across India. Expert guidance for JEE Main counselling, branch selection, and management quota."
  },
  {
    name: "MBA",
    slug: "mba",
    category: "Management",
    duration: "2 Years",
    eligibility: "Graduation in any stream with minimum 50% aggregate",
    degreeName: "Master of Business Administration",
    entranceExam: "CAT / MAT / XAT / CMAT / State Level",
    description: "An MBA is a globally recognized postgraduate degree designed to develop the skills required for careers in business and management. It provides a holistic view of enterprise operations, including finance, marketing, human resources, and strategy, unlocking senior leadership roles.",
    syllabus: [
      "First Year: Organizational Behavior, Managerial Economics, Financial Accounting, Marketing Management, Statistics",
      "Second Year: Strategic Management, Specialization Electives (Finance/HR/Marketing), Summer Internship Project"
    ],
    careerOptions: [
      "Marketing Manager",
      "Financial Analyst",
      "HR Director",
      "Operations Manager",
      "Management Consultant",
      "Investment Banker",
      "Product Manager",
      "Entrepreneur / CEO"
    ],
    feeRange: { govt: "₹1L - ₹3L / yr", private: "₹4L - ₹15L / yr", abroad: "₹15L - ₹50L / yr" },
    topStates: ["Maharashtra", "Delhi NCR", "Karnataka", "Gujarat", "Tamil Nadu"],
    faqs: [
      { question: "Do I need work experience to pursue an MBA?", answer: "While not mandatory for most Indian institutes, having 1-3 years of work experience gives you a significant edge during placements and class discussions." },
      { question: "What is the difference between PGDM and MBA?", answer: "MBA is a degree awarded by universities, while PGDM is a diploma awarded by autonomous institutes (like IIMs or XLRI). Both hold equal corporate value." },
      { question: "Which specialization should I choose?", answer: "Choose based on your aptitude. Marketing for creatives, Finance for analytical minds, HR for people skills, and IT for tech backgrounds." },
      { question: "Can I get direct admission to MBA colleges?", answer: "Yes, many reputed private B-Schools offer direct admission through management quota or based on graduation merit." },
      { question: "How crucial are communication skills?", answer: "Absolutely critical. Communication and presentation skills are the bedrock of management and heavily influence your final placements." },
      { question: "Are placements guaranteed?", answer: "Top tier B-schools boast 100% placement records. For others, it depends heavily on your networking, internships, and skill development during the 2 years." },
      { question: "What is an Executive MBA?", answer: "It is a specialized program designed for working professionals with 5+ years of experience, usually conducted on weekends or in an accelerated format." },
      { question: "Can engineers do an MBA?", answer: "Yes, engineers make up a large percentage of MBA cohorts. The analytical skills from engineering combined with management knowledge is highly sought after." }
    ],
    metaTitle: "MBA Admission 2026 | Top B-Schools & Direct Admission | Amets Educare",
    metaDescription: "Accelerate your corporate career with an MBA. Get expert counselling for top B-Schools, entrance exam strategies, and direct admission options."
  },
  {
    name: "LLB",
    slug: "llb",
    category: "Legal Studies",
    duration: "3 Years (Post-Grad) or 5 Years (Integrated)",
    eligibility: "Graduation (for 3-yr) or 10+2 (for 5-yr integrated)",
    degreeName: "Bachelor of Laws",
    entranceExam: "CLAT / LSAT / State Law Entrances",
    description: "LLB is the foundational professional degree for entering the legal profession. It covers constitutional, criminal, civil, and corporate law. The integrated 5-year program (e.g., BA LLB, BBA LLB) is incredibly popular for students directly out of high school.",
    syllabus: [
      "First Year: Constitutional Law, Law of Contract, Family Law, Legal Methods",
      "Second Year: Criminal Law, Property Law, Company Law, Administrative Law",
      "Third Year/Final: Environmental Law, Labour Law, Moot Courts, Drafting and Pleading"
    ],
    careerOptions: [
      "Litigating Lawyer",
      "Corporate Legal Counsel",
      "Judge / Judiciary Service",
      "Legal Advisor",
      "Public Prosecutor",
      "Legal Researcher / Academic",
      "Arbitrator",
      "Civil Services (UPSC)"
    ],
    feeRange: { govt: "₹10K - ₹50K / yr", private: "₹1L - ₹3L / yr", abroad: "₹10L - ₹25L / yr" },
    topStates: ["Delhi", "Maharashtra", "Karnataka", "West Bengal", "Telangana"],
    faqs: [
      { question: "Should I choose 3-year or 5-year LLB?", answer: "If you are in 12th, the 5-year integrated course saves a year. If you have already graduated, you must opt for the 3-year program." },
      { question: "Is CLAT compulsory for all law colleges?", answer: "CLAT is required for National Law Universities (NLUs), but many private and state colleges have their own entrances or admit based on merit." },
      { question: "What is a Moot Court?", answer: "A simulated court proceeding where students argue hypothetical cases to develop advocacy and drafting skills." },
      { question: "Can I practice law immediately after getting my degree?", answer: "You must pass the All India Bar Examination (AIBE) conducted by the Bar Council of India to practice in courts." },
      { question: "What is the scope of Corporate Law?", answer: "Corporate lawyers handle mergers, acquisitions, and compliance for MNCs, typically earning the highest starting salaries in the legal field." },
      { question: "Are internships important in law school?", answer: "Crucial. You must intern under senior advocates, NGOs, or law firms during breaks to build your CV and practical knowledge." },
      { question: "What is BBA LLB vs BA LLB?", answer: "BA LLB combines Arts subjects (Sociology, History) with Law, while BBA LLB combines Business subjects (Management, Accounting) with Law—ideal for corporate ambitions." },
      { question: "Can Amets Educare help with private law college admissions?", answer: "Yes, we provide direct admission guidance for top private law schools across India." }
    ],
    metaTitle: "LLB Admission 2026 | Top Law Colleges in India | Amets Educare",
    metaDescription: "Kickstart your legal career. Expert guidance for 3-year and 5-year integrated LLB admissions, CLAT preparation, and top law school placements."
  },
  {
    name: "B.Pharma",
    slug: "b-pharma",
    category: "Medical & Healthcare",
    duration: "4 Years",
    eligibility: "10+2 PCM/B with minimum 50% aggregate",
    degreeName: "Bachelor of Pharmacy",
    entranceExam: "State Entrances / Private College Exams",
    description: "B.Pharma is an undergraduate degree focused on the properties, manufacturing, and dispensing of drugs and medicines. With the Indian pharmaceutical industry booming globally, this degree offers immense scope in R&D, manufacturing, and healthcare sectors.",
    syllabus: [
      "First Year: Human Anatomy, Pharmaceutics, Pharmaceutical Analysis, Biochemistry",
      "Second Year: Pathophysiology, Pharmaceutical Microbiology, Pharmacology",
      "Third Year: Medicinal Chemistry, Industrial Pharmacy, Pharmacology II",
      "Fourth Year: Novel Drug Delivery Systems, Pharmacy Practice, Project Work"
    ],
    careerOptions: [
      "Pharmacist",
      "Drug Inspector",
      "Clinical Research Associate",
      "Quality Control Manager",
      "Medical Representative",
      "R&D Scientist",
      "Regulatory Affairs Officer",
      "Pharma Entrepreneur"
    ],
    feeRange: { govt: "₹20K - ₹60K / yr", private: "₹80K - ₹2L / yr", abroad: "N/A" },
    topStates: ["Maharashtra", "Gujarat", "Karnataka", "Telangana", "Punjab"],
    faqs: [
      { question: "Is NEET required for B.Pharma?", answer: "Generally no. Admissions are usually based on state-level entrance exams (like MHT-CET, KCET) or 12th board merit." },
      { question: "Can PCM students apply?", answer: "Yes, students with either PCM (Maths) or PCB (Biology) backgrounds are eligible for B.Pharma." },
      { question: "What is the difference between D.Pharma and B.Pharma?", answer: "D.Pharma is a 2-year diploma to open a medical shop, while B.Pharma is a 4-year degree leading to higher roles in R&D and manufacturing." },
      { question: "How to become a Drug Inspector?", answer: "After completing B.Pharma, you must clear the UPSC or State Public Service Commission exams to be appointed as a Drug Inspector." },
      { question: "Are there direct admission options?", answer: "Yes, many top private pharmacy colleges offer direct admission based on 12th marks or management quota." },
      { question: "Can I open a pharmacy store after B.Pharma?", answer: "Yes, the degree allows you to register with the State Pharmacy Council and obtain a license to open a medical store or wholesale business." },
      { question: "What are higher education options?", answer: "You can pursue M.Pharma in specializations like Pharmaceutics or Pharmacology, or pursue a Pharm.D." },
      { question: "Is the pharma industry growing in India?", answer: "India is known as the 'Pharmacy of the World,' being the largest provider of generic drugs globally, ensuring massive job security." }
    ],
    metaTitle: "B.Pharma Admission 2026 | Top Pharmacy Colleges | Amets Educare",
    metaDescription: "Explore B.Pharma admission processes, top colleges, syllabus, and lucrative career paths in the rapidly growing pharmaceutical industry."
  },
  {
    name: "D.Pharma",
    slug: "d-pharma",
    category: "Medical & Healthcare",
    duration: "2 Years",
    eligibility: "10+2 PCM/B with minimum 50% aggregate",
    degreeName: "Diploma in Pharmacy",
    entranceExam: "State level diploma entrances / Merit based",
    description: "D.Pharma is a short-term diploma course designed to train students in basic pharmacy practice. It is the minimum qualification required in India to practice as a pharmacist and open a retail medical store. It's a quick gateway into the healthcare sector.",
    syllabus: [
      "First Year: Pharmaceutics, Pharmaceutical Chemistry, Pharmacognosy, Human Anatomy",
      "Second Year: Pharmacology, Community Pharmacy, Hospital and Clinical Pharmacy, Pharmacy Law"
    ],
    careerOptions: [
      "Retail Pharmacist",
      "Hospital Pharmacist",
      "Medical Store Owner",
      "Medical Representative",
      "Pharmacy Assistant",
      "Wholesale Drug Distributor"
    ],
    feeRange: { govt: "₹10K - ₹20K / yr", private: "₹50K - ₹1L / yr", abroad: "N/A" },
    topStates: ["Maharashtra", "UP", "Karnataka", "Rajasthan", "MP"],
    faqs: [
      { question: "Can I open a medical shop after D.Pharma?", answer: "Yes, you can obtain a valid license from the State Pharmacy Council to operate a retail or wholesale medical store." },
      { question: "Can I pursue B.Pharma after D.Pharma?", answer: "Yes, through lateral entry, D.Pharma graduates can directly enter the 2nd year of the B.Pharma degree course." },
      { question: "What is the scope of D.Pharma?", answer: "It provides quick employment in retail and hospital pharmacies, and serves as a strong foundation for a pharmaceutical business." },
      { question: "Is there an internship requirement?", answer: "Yes, a minimum of 500 hours of practical training in a recognized hospital or pharmacy is mandatory." },
      { question: "Are D.Pharma jobs available in Govt hospitals?", answer: "Yes, State and Central Govt hospitals regularly hire D.Pharma holders as pharmacists." },
      { question: "What is the starting salary?", answer: "Starting salaries in retail/hospital setups range from ₹15K to ₹25K, but owning a pharmacy yields significantly higher income." },
      { question: "Is NEET required?", answer: "No, NEET is not required. Admission is strictly based on 12th marks or state diploma entrances." },
      { question: "How tough is the course?", answer: "It is moderately challenging, requiring good memorization of drugs, their uses, and basic chemistry." }
    ],
    metaTitle: "D.Pharma Admission 2026 | Eligibility & Scope | Amets Educare",
    metaDescription: "Get complete details on D.Pharma admissions, syllabus, and how to get your pharmacist license quickly. Direct admissions available."
  },
  {
    name: "B.Ed",
    slug: "bed",
    category: "Education",
    duration: "2 Years",
    eligibility: "Graduation in any stream with minimum 50%",
    degreeName: "Bachelor of Education",
    entranceExam: "State B.Ed Entrance / University Entrances",
    description: "B.Ed is a mandatory professional degree for anyone aspiring to become a teacher in upper primary or high schools in India. It focuses on pedagogical techniques, child psychology, and effective classroom management.",
    syllabus: [
      "First Year: Childhood and Growing Up, Contemporary India and Education, Learning and Teaching, Pedagogy of School Subject",
      "Second Year: Knowledge and Curriculum, Assessment for Learning, Creating an Inclusive School, 16-Week School Internship"
    ],
    careerOptions: [
      "School Teacher (TGT/PGT)",
      "Educational Administrator",
      "Curriculum Developer",
      "Education Counselor",
      "Online Educator",
      "Educational Content Writer"
    ],
    feeRange: { govt: "₹10K - ₹25K / yr", private: "₹40K - ₹1L / yr", abroad: "N/A" },
    topStates: ["UP", "Rajasthan", "Delhi", "Haryana", "Maharashtra"],
    faqs: [
      { question: "Is B.Ed compulsory for teaching?", answer: "Yes, as per NCTE norms, B.Ed is mandatory to teach in both government and recognized private schools." },
      { question: "Can I do B.Ed immediately after 12th?", answer: "You can opt for the 4-year integrated BA B.Ed or B.Sc B.Ed directly after 12th." },
      { question: "What is CTET / TET?", answer: "To get a Govt teaching job after B.Ed, you must clear the Central Teacher Eligibility Test (CTET) or state-level TET." },
      { question: "Can I pursue B.Ed through distance education?", answer: "Yes, IGNOU and other recognized universities offer distance B.Ed, but it usually requires prior teaching experience." },
      { question: "What is the school internship?", answer: "Students must complete a 16-week teaching practice session in real schools during their final year." },
      { question: "What are the job prospects?", answer: "Extremely high, given the continuous expansion of the education sector and regular Govt school recruitments." },
      { question: "Can an engineering graduate do B.Ed?", answer: "Yes, B.Tech graduates are eligible for B.Ed and are highly demanded as Math and Science teachers." },
      { question: "Does Amets Educare help with direct B.Ed admission?", answer: "Yes, we guide students for direct admissions in top NCTE-approved B.Ed colleges." }
    ],
    metaTitle: "B.Ed Admission 2026 | Become a Teacher | Amets Educare",
    metaDescription: "Complete guide to B.Ed admissions. Understand eligibility, entrance exams, and direct admission options in top education colleges."
  },
  {
    name: "BCA",
    slug: "bca",
    category: "Engineering & Technical",
    duration: "3 Years",
    eligibility: "10+2 (Any Stream) with minimum 50%",
    degreeName: "Bachelor of Computer Applications",
    entranceExam: "Merit Based / University Entrances",
    description: "BCA is a premier undergraduate program for students wishing to dive into the world of computer languages, software development, and IT. It acts as an excellent alternative to B.Tech CS for students from non-math backgrounds.",
    syllabus: [
      "First Year: C Programming, Web Development, Mathematics, Computer Fundamentals",
      "Second Year: Java, DBMS, Data Structures, Operating Systems",
      "Third Year: Python, Software Engineering, Computer Networks, Final Major Project"
    ],
    careerOptions: [
      "Software Developer",
      "System Analyst",
      "Web Designer",
      "Database Administrator",
      "Network Engineer",
      "IT Project Manager"
    ],
    feeRange: { govt: "₹15K - ₹30K / yr", private: "₹50K - ₹1.5L / yr", abroad: "N/A" },
    topStates: ["Karnataka", "Delhi NCR", "Maharashtra", "Tamil Nadu", "Punjab"],
    faqs: [
      { question: "Is Maths compulsory in 12th for BCA?", answer: "Not in all colleges. Many top universities accept students from Arts and Commerce streams without Maths." },
      { question: "BCA vs B.Tech CSE: Which is better?", answer: "B.Tech is a 4-year core engineering degree. BCA is 3 years and focuses purely on application development. Both offer similar entry-level IT roles." },
      { question: "What is MCA?", answer: "Master of Computer Applications (MCA) is the logical postgraduate progression after BCA, making your profile equivalent to a B.Tech." },
      { question: "Are placements good for BCA?", answer: "Yes, top IT firms like TCS, Infosys, and Wipro conduct mass recruitments for BCA graduates." },
      { question: "Can I learn AI and Data Science in BCA?", answer: "Yes, many modern BCA curriculums have integrated specializations in AI, Data Science, and Cloud Computing." },
      { question: "Is it a heavy coding course?", answer: "Yes, practical programming in C, C++, Java, and Python forms the core of the curriculum." },
      { question: "Does Amets Educare provide admission assistance?", answer: "Yes, we help students secure seats in premium BCA colleges across India based on merit." },
      { question: "Can I do an MBA after BCA?", answer: "Absolutely. An MBA in IT Management after a BCA is a highly lucrative career path." }
    ],
    metaTitle: "BCA Admission 2026 | Top IT Colleges | Amets Educare",
    metaDescription: "Launch your IT career with a BCA degree. Get admission guidance for top colleges, syllabus details, and placement insights."
  },
  {
    name: "M.Tech",
    slug: "mtech",
    category: "Engineering & Technical",
    duration: "2 Years",
    eligibility: "B.Tech/B.E. with minimum 50%",
    degreeName: "Master of Technology",
    entranceExam: "GATE / State Entrances",
    description: "M.Tech is a specialized postgraduate engineering program. It allows engineers to gain deep, research-oriented expertise in specific domains like VLSI Design, Artificial Intelligence, Structural Engineering, or Thermal Sciences.",
    syllabus: [
      "First Year: Advanced Core Subjects, Electives, Research Methodology, Seminars",
      "Second Year: Extensive Dissertation/Research Project, Industrial Training"
    ],
    careerOptions: [
      "Senior Technical Lead",
      "Research & Development Scientist",
      "Project Manager",
      "Engineering Academic/Professor",
      "Consultant",
      "Subject Matter Expert"
    ],
    feeRange: { govt: "₹30K - ₹60K / yr", private: "₹1L - ₹2.5L / yr", abroad: "₹15L - ₹40L / yr" },
    topStates: ["Maharashtra", "Karnataka", "Delhi NCR", "Tamil Nadu", "Telangana"],
    faqs: [
      { question: "Is GATE mandatory for M.Tech?", answer: "GATE is mandatory for IITs, NITs, and Govt scholarships, but many private universities have their own exams or admit based on B.Tech merit." },
      { question: "Do M.Tech students get a stipend?", answer: "Yes, students admitted through GATE to AICTE-approved institutions receive a monthly Govt stipend of ₹12,400." },
      { question: "Can I change my branch in M.Tech?", answer: "Usually, you must pursue M.Tech in a field related to your B.Tech, though some interdisciplinary branches (like Data Science) accept diverse backgrounds." },
      { question: "Is M.Tech better than MBA after B.Tech?", answer: "M.Tech is for those who want to stay in hardcore technical and R&D roles, while MBA is for transitioning into corporate management." },
      { question: "What is the importance of the final year thesis?", answer: "The thesis is critical. It defines your expertise area and is the primary talking point during technical placements or Ph.D. interviews." },
      { question: "Are placements good after M.Tech?", answer: "Yes, especially for specialized branches like AI, VLSI, and Robotics, where companies specifically look for post-grad experts." },
      { question: "Can Amets Educare help with private M.Tech admissions?", answer: "Yes, we assist with direct admissions in top-rated private engineering universities." },
      { question: "What is the difference between M.E. and M.Tech?", answer: "They are academically equivalent, just varying by university nomenclature." }
    ],
    metaTitle: "M.Tech Admission 2026 | Top Engineering Postgrad | Amets Educare",
    metaDescription: "Specialize in your engineering domain. Complete guide to M.Tech admissions, GATE counselling, and direct admission options."
  },
  {
    name: "LLM",
    slug: "llm",
    category: "Legal Studies",
    duration: "1 or 2 Years",
    eligibility: "LLB degree with minimum 50%",
    degreeName: "Master of Laws",
    entranceExam: "CLAT PG / University Exams",
    description: "LLM is a postgraduate law degree offering intensive specialization in areas such as Corporate Law, Human Rights, International Law, or Criminal Law. It is highly valued for academic, judicial, and top-tier corporate legal roles.",
    syllabus: [
      "Core: Law and Social Transformation, Constitutionalism, Legal Research Methodology",
      "Specialization subjects (e.g., Corporate Finance Law, Cyber Law)",
      "Extensive Dissertation and Research Paper Publication"
    ],
    careerOptions: [
      "Corporate Legal Head",
      "Senior Advocate",
      "Law Professor",
      "Judicial Magistrate",
      "International Legal Consultant",
      "Policy Analyst"
    ],
    feeRange: { govt: "₹20K - ₹40K / yr", private: "₹1L - ₹3L / yr", abroad: "₹15L - ₹45L / yr" },
    topStates: ["Delhi", "Maharashtra", "Karnataka", "West Bengal", "Gujarat"],
    faqs: [
      { question: "Is the LLM course 1 year or 2 years?", answer: "The UGC introduced the 1-year LLM format in India, which is currently the most popular, though some universities still offer the traditional 2-year program." },
      { question: "Why should I do an LLM?", answer: "It is essential if you want to enter legal academics (teaching), specialize deeply in corporate law, or enhance your profile for judicial exams." },
      { question: "Is CLAT PG mandatory?", answer: "For NLUs, CLAT PG is mandatory. PSUs also hire legal executives based on CLAT PG scores." },
      { question: "Can I do an LLM abroad?", answer: "Yes, an LLM from the UK or US is highly prestigious and gives you a massive edge in international corporate law firms." },
      { question: "What are the most demanded specializations?", answer: "Corporate Law, Intellectual Property Rights (IPR), and Cyber Law are currently the most lucrative specializations." },
      { question: "Does LLM involve practical court work?", answer: "LLM is heavily research-oriented rather than clinical. It focuses on jurisprudence and legal theories." },
      { question: "Can Amets Educare assist with LLM admissions?", answer: "Yes, we help law graduates secure admissions in top private universities for specialized LLM programs." },
      { question: "Can I work while doing LLM?", answer: "Regular LLM requires full-time attendance, but some universities offer evening or executive LLM programs for practicing advocates." }
    ],
    metaTitle: "LLM Admission 2026 | Specialization in Law | Amets Educare",
    metaDescription: "Advance your legal career with an LLM. Get expert guidance on CLAT PG, top specializations, and admissions to premier law schools."
  }
];

// --- STATES ---

export const states = [
  { name: "Karnataka", slug: "karnataka", capital: "Bangalore", popularCities: ["Bangalore", "Mysore", "Mangalore", "Hubli"] },
  { name: "Maharashtra", slug: "maharashtra", capital: "Mumbai", popularCities: ["Mumbai", "Pune", "Nagpur", "Nashik"] },
  { name: "Tamil Nadu", slug: "tamil-nadu", capital: "Chennai", popularCities: ["Chennai", "Coimbatore", "Vellore", "Madurai"] },
  { name: "Delhi NCR", slug: "delhi-ncr", capital: "New Delhi", popularCities: ["New Delhi", "Noida", "Gurgaon", "Ghaziabad"] },
  { name: "Uttar Pradesh", slug: "uttar-pradesh", capital: "Lucknow", popularCities: ["Lucknow", "Kanpur", "Varanasi", "Agra"] },
  { name: "Madhya Pradesh", slug: "madhya-pradesh", capital: "Bhopal", popularCities: ["Indore", "Bhopal", "Gwalior", "Jabalpur"] },
  { name: "Rajasthan", slug: "rajasthan", capital: "Jaipur", popularCities: ["Jaipur", "Kota", "Jodhpur", "Udaipur"] },
  { name: "Gujarat", slug: "gujarat", capital: "Gandhinagar", popularCities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"] },
  { name: "Telangana", slug: "telangana", capital: "Hyderabad", popularCities: ["Hyderabad", "Warangal", "Nizamabad"] },
  { name: "Andhra Pradesh", slug: "andhra-pradesh", capital: "Amaravati", popularCities: ["Visakhapatnam", "Vijayawada", "Guntur"] },
  { name: "Kerala", slug: "kerala", capital: "Thiruvananthapuram", popularCities: ["Kochi", "Thiruvananthapuram", "Kozhikode"] },
  { name: "West Bengal", slug: "west-bengal", capital: "Kolkata", popularCities: ["Kolkata", "Darjeeling", "Siliguri"] },
  { name: "Punjab", slug: "punjab", capital: "Chandigarh", popularCities: ["Ludhiana", "Amritsar", "Jalandhar"] },
  { name: "Haryana", slug: "haryana", capital: "Chandigarh", popularCities: ["Gurgaon", "Faridabad", "Panipat"] },
  { name: "Bihar", slug: "bihar", capital: "Patna", popularCities: ["Patna", "Gaya", "Bhagalpur"] },
  { name: "Odisha", slug: "odisha", capital: "Bhubaneswar", popularCities: ["Bhubaneswar", "Cuttack", "Rourkela"] },
  { name: "Jharkhand", slug: "jharkhand", capital: "Ranchi", popularCities: ["Ranchi", "Jamshedpur", "Dhanbad"] },
  { name: "Chhattisgarh", slug: "chhattisgarh", capital: "Raipur", popularCities: ["Raipur", "Bhilai", "Bilaspur"] },
  { name: "Uttarakhand", slug: "uttarakhand", capital: "Dehradun", popularCities: ["Dehradun", "Roorkee", "Haridwar"] },
  { name: "Himachal Pradesh", slug: "himachal-pradesh", capital: "Shimla", popularCities: ["Shimla", "Dharamshala", "Mandi"] },
  { name: "Assam", slug: "assam", capital: "Dispur", popularCities: ["Guwahati", "Dibrugarh", "Silchar"] },
  { name: "Goa", slug: "goa", capital: "Panaji", popularCities: ["Panaji", "Vasco da Gama", "Margao"] },
  { name: "Chandigarh", slug: "chandigarh", capital: "Chandigarh", popularCities: ["Chandigarh"] },
  { name: "Pondicherry", slug: "pondicherry", capital: "Pondicherry", popularCities: ["Pondicherry", "Auroville"] },
  { name: "Jammu & Kashmir", slug: "jammu-kashmir", capital: "Srinagar", popularCities: ["Srinagar", "Jammu"] },
  { name: "Tripura", slug: "tripura", capital: "Agartala", popularCities: ["Agartala"] },
  { name: "Meghalaya", slug: "meghalaya", capital: "Shillong", popularCities: ["Shillong"] },
  { name: "Sikkim", slug: "sikkim", capital: "Gangtok", popularCities: ["Gangtok"] }
];

// --- COLLEGES (Sample Set of 30) ---

export const colleges = [
  { name: "Kasturba Medical College (KMC)", slug: "kmc-manipal", state: "Karnataka", city: "Manipal", courses: ["MBBS", "B.Sc Nursing", "MD", "MS"], type: "Private", established: 1953, rating: 4.8, annualFee: "₹17,70,000", recognition: "NMC Approved", hostel: true },
  { name: "Christian Medical College (CMC)", slug: "cmc-vellore", state: "Tamil Nadu", city: "Vellore", courses: ["MBBS", "B.Sc Nursing", "BDS"], type: "Private", established: 1900, rating: 4.9, annualFee: "₹50,000", recognition: "NMC Approved", hostel: true },
  { name: "M.S. Ramaiah Medical College", slug: "ms-ramaiah-bangalore", state: "Karnataka", city: "Bangalore", courses: ["MBBS", "MD", "MS"], type: "Private", established: 1979, rating: 4.6, annualFee: "₹10,92,000", recognition: "NMC Approved", hostel: true },
  { name: "Dr. D.Y. Patil Medical College", slug: "dy-patil-pune", state: "Maharashtra", city: "Pune", courses: ["MBBS", "BDS", "B.Sc Nursing"], type: "Deemed", established: 1996, rating: 4.5, annualFee: "₹25,00,000", recognition: "NMC Approved", hostel: true },
  { name: "Bharati Vidyapeeth Medical College", slug: "bharati-vidyapeeth-pune", state: "Maharashtra", city: "Pune", courses: ["MBBS", "BAMS", "BHMS"], type: "Deemed", established: 1989, rating: 4.4, annualFee: "₹21,00,000", recognition: "NMC Approved", hostel: true },
  { name: "KPC Medical College and Hospital", slug: "kpc-kolkata", state: "West Bengal", city: "Kolkata", courses: ["MBBS", "MD"], type: "Private", established: 2006, rating: 4.3, annualFee: "₹12,00,000", recognition: "NMC Approved", hostel: true },
  { name: "Symbiosis Institute of Business Management", slug: "sibm-pune", state: "Maharashtra", city: "Pune", courses: ["MBA", "Executive MBA"], type: "Deemed", established: 1978, rating: 4.8, annualFee: "₹11,00,000", recognition: "AICTE Approved", hostel: true },
  { name: "Vellore Institute of Technology (VIT)", slug: "vit-vellore", state: "Tamil Nadu", city: "Vellore", courses: ["B.Tech", "M.Tech", "BCA", "MBA"], type: "Deemed", established: 1984, rating: 4.7, annualFee: "₹1,98,000", recognition: "AICTE, UGC", hostel: true },
  { name: "SRM Institute of Science and Technology", slug: "srm-chennai", state: "Tamil Nadu", city: "Chennai", courses: ["B.Tech", "MBBS", "MBA", "BDS"], type: "Deemed", established: 1985, rating: 4.5, annualFee: "₹2,50,000", recognition: "AICTE, NMC", hostel: true },
  { name: "Manipal Institute of Technology (MIT)", slug: "mit-manipal", state: "Karnataka", city: "Manipal", courses: ["B.Tech", "M.Tech", "MCA"], type: "Deemed", established: 1957, rating: 4.6, annualFee: "₹3,35,000", recognition: "AICTE, NBA", hostel: true },
  { name: "RV College of Engineering", slug: "rvce-bangalore", state: "Karnataka", city: "Bangalore", courses: ["B.Tech", "M.Tech", "MCA"], type: "Private", established: 1963, rating: 4.7, annualFee: "₹1,00,000", recognition: "AICTE, VTU", hostel: true },
  { name: "BMS College of Engineering", slug: "bmsce-bangalore", state: "Karnataka", city: "Bangalore", courses: ["B.Tech", "MBA", "MCA"], type: "Private", established: 1946, rating: 4.6, annualFee: "₹88,000", recognition: "AICTE, VTU", hostel: true },
  { name: "Amity University", slug: "amity-noida", state: "Delhi NCR", city: "Noida", courses: ["B.Tech", "MBA", "LLB", "B.Pharma"], type: "Private", established: 2005, rating: 4.3, annualFee: "₹3,11,000", recognition: "UGC, BCI, PCI", hostel: true },
  { name: "Jindal Global Law School", slug: "jgls-sonipat", state: "Haryana", city: "Sonipat", courses: ["BA LLB", "BBA LLB", "LLM"], type: "Private", established: 2009, rating: 4.8, annualFee: "₹6,00,000", recognition: "BCI, UGC", hostel: true },
  { name: "Symbiosis Law School", slug: "sls-pune", state: "Maharashtra", city: "Pune", courses: ["BA LLB", "BBA LLB", "LLM"], type: "Deemed", established: 1977, rating: 4.7, annualFee: "₹3,80,000", recognition: "BCI", hostel: true },
  { name: "Narsee Monjee Institute of Management Studies", slug: "nmims-mumbai", state: "Maharashtra", city: "Mumbai", courses: ["MBA", "B.Tech", "B.Pharma"], type: "Deemed", established: 1981, rating: 4.7, annualFee: "₹10,50,000", recognition: "AICTE, UGC", hostel: true },
  { name: "SPJIMR", slug: "spjimr-mumbai", state: "Maharashtra", city: "Mumbai", courses: ["MBA"], type: "Private", established: 1981, rating: 4.8, annualFee: "₹20,50,000", recognition: "AICTE", hostel: true },
  { name: "Great Lakes Institute of Management", slug: "glim-chennai", state: "Tamil Nadu", city: "Chennai", courses: ["MBA"], type: "Private", established: 2004, rating: 4.6, annualFee: "₹11,50,000", recognition: "AICTE", hostel: true },
  { name: "Ramaiah Institute of Technology", slug: "msrit-bangalore", state: "Karnataka", city: "Bangalore", courses: ["B.Tech", "B.Arch", "MBA"], type: "Private", established: 1962, rating: 4.5, annualFee: "₹88,000", recognition: "AICTE", hostel: true },
  { name: "Sharda University", slug: "sharda-greater-noida", state: "Delhi NCR", city: "Greater Noida", courses: ["MBBS", "B.Tech", "BDS", "LLB"], type: "Private", established: 2009, rating: 4.2, annualFee: "₹12,69,000", recognition: "NMC, UGC, BCI", hostel: true },
  { name: "Galgotias University", slug: "galgotias-greater-noida", state: "Delhi NCR", city: "Greater Noida", courses: ["B.Tech", "MBA", "LLB", "BCA"], type: "Private", established: 2011, rating: 4.1, annualFee: "₹1,60,000", recognition: "UGC", hostel: true },
  { name: "Thapar Institute of Engineering and Technology", slug: "thapar-patiala", state: "Punjab", city: "Patiala", courses: ["B.Tech", "M.Tech", "MBA"], type: "Deemed", established: 1956, rating: 4.6, annualFee: "₹3,50,000", recognition: "AICTE, UGC", hostel: true },
  { name: "BITS Pilani", slug: "bits-pilani", state: "Rajasthan", city: "Pilani", courses: ["B.Tech", "B.Pharma", "MBA"], type: "Deemed", established: 1964, rating: 4.9, annualFee: "₹4,80,000", recognition: "UGC, PCI", hostel: true },
  { name: "PSG College of Technology", slug: "psg-coimbatore", state: "Tamil Nadu", city: "Coimbatore", courses: ["B.Tech", "MBA", "MCA"], type: "Private", established: 1951, rating: 4.6, annualFee: "₹85,000", recognition: "AICTE", hostel: true },
  { name: "Christ University", slug: "christ-bangalore", state: "Karnataka", city: "Bangalore", courses: ["BCA", "MBA", "BA LLB", "B.Ed"], type: "Deemed", established: 1969, rating: 4.5, annualFee: "₹1,50,000", recognition: "UGC, BCI", hostel: true },
  { name: "Kalinga Institute of Industrial Technology (KIIT)", slug: "kiit-bhubaneswar", state: "Odisha", city: "Bhubaneswar", courses: ["B.Tech", "MBBS", "LLB", "MBA"], type: "Deemed", established: 1992, rating: 4.5, annualFee: "₹3,50,000", recognition: "AICTE, NMC", hostel: true },
  { name: "JSS Medical College", slug: "jss-mysore", state: "Karnataka", city: "Mysore", courses: ["MBBS", "BDS", "B.Pharma"], type: "Deemed", established: 1984, rating: 4.5, annualFee: "₹18,50,000", recognition: "NMC, DCI", hostel: true },
  { name: "Saveetha Medical College", slug: "saveetha-chennai", state: "Tamil Nadu", city: "Chennai", courses: ["MBBS", "BDS", "B.Sc Nursing"], type: "Deemed", established: 2008, rating: 4.4, annualFee: "₹24,00,000", recognition: "NMC", hostel: true },
  { name: "SDM College of Medical Sciences", slug: "sdm-dharwad", state: "Karnataka", city: "Dharwad", courses: ["MBBS", "MD", "MS"], type: "Private", established: 2003, rating: 4.4, annualFee: "₹9,94,000", recognition: "NMC", hostel: true },
  { name: "Jamia Hamdard", slug: "jamia-hamdard-delhi", state: "Delhi NCR", city: "New Delhi", courses: ["MBBS", "B.Pharma", "BAMS"], type: "Deemed", established: 1989, rating: 4.6, annualFee: "₹14,00,000", recognition: "NMC, PCI, CCIM", hostel: true }
];

// --- STUDY ABROAD COUNTRIES ---

export const abroadCountries = [
  {
    name: "Russia", slug: "russia", flag: "🇷🇺", capital: "Moscow", currency: "Russian Ruble (RUB)", language: "Russian, English (Medium)",
    topUniversities: ["Kazan Federal University", "Bashkir State Medical University", "Crimea Federal University"],
    startingFee: "₹2,50,000 / year", duration: "6 Years", medium: "English", recognition: "NMC/MCI, WHO, ECFMG",
    climate: "Cold Winters, Mild Summers", indianFood: true, fmgePassRate: "High (Top 3 globally)"
  },
  {
    name: "Georgia", slug: "georgia", flag: "🇬🇪", capital: "Tbilisi", currency: "Georgian Lari (GEL)", language: "Georgian, English (Medium)",
    topUniversities: ["Tbilisi State Medical University", "Batumi Shota Rustaveli State University", "European University"],
    startingFee: "₹4,00,000 / year", duration: "6 Years", medium: "English", recognition: "NMC/MCI, WHO, ECFMG",
    climate: "Moderate European", indianFood: true, fmgePassRate: "Very High"
  },
  {
    name: "Kazakhstan", slug: "kazakhstan", flag: "🇰🇿", capital: "Astana", currency: "Kazakhstani Tenge (KZT)", language: "Kazakh, Russian, English",
    topUniversities: ["Al-Farabi Kazakh National University", "Astana Medical University", "Semey Medical University"],
    startingFee: "₹2,00,000 / year", duration: "5 Years", medium: "English", recognition: "NMC/MCI, WHO, ECFMG",
    climate: "Continental", indianFood: true, fmgePassRate: "Moderate to High"
  },
  {
    name: "Philippines", slug: "philippines", flag: "🇵🇭", capital: "Manila", currency: "Philippine Peso (PHP)", language: "English (Official), Filipino",
    topUniversities: ["Our Lady of Fatima University", "University of Perpetual Help", "Davao Medical School Foundation"],
    startingFee: "₹3,50,000 / year", duration: "5.5 Years (BS+MD)", medium: "English", recognition: "NMC/MCI, WHO, ECFMG",
    climate: "Tropical (Similar to Mumbai/Chennai)", indianFood: true, fmgePassRate: "Highest among foreign medical graduates"
  },
  {
    name: "Kyrgyzstan", slug: "kyrgyzstan", flag: "🇰🇬", capital: "Bishkek", currency: "Kyrgyzstani Som (KGS)", language: "Kyrgyz, Russian, English",
    topUniversities: ["Kyrgyz State Medical Academy", "Osh State University", "Asian Medical Institute"],
    startingFee: "₹1,80,000 / year", duration: "5 Years", medium: "English", recognition: "NMC/MCI, WHO",
    climate: "Continental, Snowy Winters", indianFood: true, fmgePassRate: "Moderate"
  },
  {
    name: "Nepal", slug: "nepal", flag: "🇳🇵", capital: "Kathmandu", currency: "Nepalese Rupee (NPR)", language: "Nepali, English",
    topUniversities: ["BP Koirala Institute of Health Sciences", "Manipal College of Medical Sciences", "Kathmandu University"],
    startingFee: "₹8,00,000 / year", duration: "5.5 Years", medium: "English", recognition: "NMC/MCI, WHO",
    climate: "Varied (Terai to Alpine)", indianFood: true, fmgePassRate: "Extremely High (Similar curriculum to India)"
  },
  {
    name: "Bangladesh", slug: "bangladesh", flag: "🇧🇩", capital: "Dhaka", currency: "Bangladeshi Taka (BDT)", language: "Bengali, English",
    topUniversities: ["Dhaka National Medical College", "Bangladesh Medical College", "Green Life Medical College"],
    startingFee: "₹6,00,000 / year", duration: "5 Years + 1 Year Internship", medium: "English", recognition: "NMC/MCI, WHO",
    climate: "Tropical Monsoon", indianFood: true, fmgePassRate: "Very High"
  }
];

// --- NAVIGATION DATA ---

export const navigationData = {
  mainNav: [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about-us" },
    { 
      title: "Courses", 
      href: "/courses",
      hasMegaMenu: true,
      categories: ["Medical & Healthcare", "Engineering & Technical", "Legal Studies", "Management", "Education"]
    },
    { 
      title: "Colleges", 
      href: "/colleges-universities",
      hasMegaMenu: true
    },
    { 
      title: "Study Abroad", 
      href: "/study-abroad",
      hasDropdown: true
    },
    { 
      title: "Admissions", 
      href: "/admissions",
      hasDropdown: true
    },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact-us" }
  ],
  footerQuickLinks: [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about-us" },
    { title: "All Courses", href: "/courses" },
    { title: "Top Colleges", href: "/colleges-universities" },
    { title: "Study MBBS Abroad", href: "/study-abroad/mbbs" },
    { title: "Admission Guidance", href: "/admissions" },
    { title: "Student Blog", href: "/blog" },
    { title: "Contact Support", href: "/contact-us" }
  ],
  legalLinks: [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms of Service", href: "/terms-of-service" },
    { title: "Refund Policy", href: "/refund-policy" }
  ]
};
