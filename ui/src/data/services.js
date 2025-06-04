import { 
  Stethoscope,
  Clock,
  Search,
  Zap,
  Beaker,
  Heart,
  Shield,
  Users,
  Microscope,
  Syringe,
  Sparkles,
  Sun,
  Activity
} from 'lucide-react';

export const services = [
  {
    id: 'skin-diagnostics',
    slug: 'skin-diagnostics',
    title: "Comprehensive Skin Diagnostics",
    category: "Diagnostic Services",
    description: "Expert skin biopsies for histopathology and relevant laboratory tests for accurate diagnosis",
    Icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1260&h=750",
    duration: '45-60 minutes',
    availability: 'Monday to Friday',
    shortDescription: "Thorough diagnostic services for all skin conditions",
    features: [
      "Detailed skin examination",
      "Professional biopsies",
      "Laboratory testing",
      "Accurate diagnosis",
      "Treatment planning",
      "Regular monitoring"
    ],
    process: [
      {
        title: 'Initial Assessment',
        description: 'Comprehensive examination and medical history review'
      },
      {
        title: 'Diagnostic Testing',
        description: 'Skin biopsies and laboratory tests as needed'
      },
      {
        title: 'Results Analysis',
        description: 'Expert interpretation of test results'
      },
      {
        title: 'Treatment Planning',
        description: 'Development of personalized treatment strategy'
      }
    ],
    faqs: [
      {
        question: 'How long does the diagnostic process take?',
        answer: 'The initial assessment takes about an hour, with test results typically available within 3-5 business days.'
      },
      {
        question: 'Are skin biopsies painful?',
        answer: 'We use local anesthesia to minimize discomfort during biopsies. Most patients experience only mild discomfort.'
      },
      {
        question: 'Will my insurance cover diagnostic tests?',
        answer: 'Most diagnostic procedures are covered by insurance. We can help verify your coverage before proceeding.'
      }
    ]
  },
  {
    id: 'albinism-care',
    slug: 'albinism-care',
    title: "Specialized Albinism Care",
    category: "Specialized Care",
    description: "Dedicated care and support for individuals with albinism, including sun protection and skin cancer prevention",
    Icon: Shield,
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1260&h=750",
    duration: '45-60 minutes',
    availability: 'Monday to Friday',
    shortDescription: "Specialized care for individuals with albinism",
    features: [
      "Sun protection guidance",
      "Regular skin monitoring",
      "Cancer prevention",
      "Eye care coordination",
      "Supportive care",
      "Community resources"
    ],
    process: [
      {
        title: 'Initial Consultation',
        description: 'Comprehensive evaluation and care planning'
      },
      {
        title: 'Protection Strategy',
        description: 'Customized sun protection and skincare plan'
      },
      {
        title: 'Regular Monitoring',
        description: 'Scheduled check-ups and skin examinations'
      },
      {
        title: 'Support Services',
        description: 'Access to community resources and support groups'
      }
    ],
    faqs: [
      {
        question: 'How often should I schedule check-ups?',
        answer: 'We recommend quarterly check-ups for comprehensive monitoring and care adjustments.'
      },
      {
        question: 'What sun protection measures are recommended?',
        answer: 'We provide guidance on high-SPF sunscreens, protective clothing, and lifestyle modifications.'
      },
      {
        question: 'Do you coordinate with other specialists?',
        answer: 'Yes, we work closely with ophthalmologists and other specialists for comprehensive care.'
      }
    ]
  },
  {
    id: 'advanced-procedures',
    slug: 'advanced-procedures',
    title: "Advanced Dermatological Procedures",
    category: "Diagnostic Services",
    description: "State-of-the-art dermoscopy and cryotherapy services with detailed skin analysis",
    Icon: Zap,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1260&h=750",
    duration: '30-60 minutes',
    availability: 'Monday to Thursday',
    shortDescription: "Modern treatments using advanced medical technology",
    features: [
      "Dermoscopy analysis",
      "Cryotherapy",
      "Skin lesion removal",
      "Advanced treatments",
      "Modern equipment",
      "Expert procedures"
    ],
    process: [
      {
        title: 'Consultation',
        description: 'Assessment and procedure planning'
      },
      {
        title: 'Procedure Preparation',
        description: 'Equipment setup and patient preparation'
      },
      {
        title: 'Treatment',
        description: 'Precise procedure execution'
      },
      {
        title: 'Recovery Plan',
        description: 'Post-procedure care instructions and follow-up'
      }
    ],
    faqs: [
      {
        question: 'Are the procedures painful?',
        answer: 'Most procedures involve minimal discomfort. We use appropriate anesthesia when needed.'
      },
      {
        question: 'What is the recovery time?',
        answer: 'Recovery varies by procedure, typically ranging from immediate to a few days.'
      },
      {
        question: 'How many sessions are needed?',
        answer: 'The number of sessions depends on the specific procedure and condition being treated.'
      }
    ]
  },
  {
    id: 'community-outreach',
    slug: 'community-outreach',
    title: "Community Health Programs",
    category: "Community Services",
    description: "Dedicated outreach programs focusing on skin cancer screening and community education",
    Icon: Users,
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1260&h=750",
    duration: 'Varies',
    availability: 'By Schedule',
    shortDescription: "Supporting vulnerable populations through education and care",
    features: [
      "Community screening",
      "Health education",
      "Support groups",
      "Preventive care",
      "Resource access",
      "Ongoing support"
    ],
    process: [
      {
        title: 'Program Planning',
        description: 'Community needs assessment and program development'
      },
      {
        title: 'Implementation',
        description: 'Execution of health programs and screenings'
      },
      {
        title: 'Education',
        description: 'Community health education sessions'
      },
      {
        title: 'Follow-up',
        description: 'Ongoing support and resource connection'
      }
    ],
    faqs: [
      {
        question: 'How can our community participate?',
        answer: 'Contact us to schedule a community health program or screening event.'
      },
      {
        question: 'Are these services free?',
        answer: 'Many of our community programs are provided at no cost to participants.'
      },
      {
        question: 'What areas do you serve?',
        answer: 'We serve communities throughout the greater Nairobi area.'
      }
    ]
  },
  {
    id: 'skin-conditions',
    slug: 'skin-conditions',
    title: "General Skin Conditions",
    category: "General Dermatology",
    description: "Treatment for various skin, hair, and nail conditions with personalized care plans",
    Icon: Heart,
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1260&h=750",
    duration: '30-45 minutes',
    availability: 'Monday to Saturday',
    shortDescription: "Comprehensive care for all skin conditions",
    features: [
      "Personalized treatment",
      "Regular monitoring",
      "Condition management",
      "Preventive care",
      "Lifestyle guidance",
      "Follow-up care"
    ],
    process: [
      {
        title: 'Diagnosis',
        description: 'Thorough examination and condition assessment'
      },
      {
        title: 'Treatment Plan',
        description: 'Development of personalized care strategy'
      },
      {
        title: 'Implementation',
        description: 'Beginning of treatment and monitoring'
      },
      {
        title: 'Maintenance',
        description: 'Ongoing care and condition management'
      }
    ],
    faqs: [
      {
        question: 'What conditions do you treat?',
        answer: 'We treat a wide range of skin, hair, and nail conditions for patients of all ages.'
      },
      {
        question: 'How long is the typical treatment period?',
        answer: 'Treatment duration varies by condition, ranging from weeks to ongoing management.'
      },
      {
        question: 'Do you provide prescriptions?',
        answer: 'Yes, we prescribe both topical and oral medications as needed.'
      }
    ]
  },
  {
    id: 'venereal-disease',
    slug: 'venereal-disease',
    title: "Venereal Disease Consultation",
    category: "Specialized Care",
    description: "Confidential consultation and treatment for sexually transmitted infections",
    Icon: Shield,
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&q=80&w=1260&h=750",
    duration: '45-60 minutes',
    availability: 'Monday to Friday',
    shortDescription: "Professional care for STIs with complete privacy",
    features: [
      "Confidential care",
      "Expert diagnosis",
      "Treatment plans",
      "Prevention advice",
      "Partner notification",
      "Follow-up care"
    ],
    process: [
      {
        title: 'Private Consultation',
        description: 'Confidential discussion and examination'
      },
      {
        title: 'Testing',
        description: 'Comprehensive STI screening'
      },
      {
        title: 'Treatment',
        description: 'Appropriate medical intervention'
      },
      {
        title: 'Prevention',
        description: 'Education and preventive strategies'
      }
    ],
    faqs: [
      {
        question: 'Is my privacy protected?',
        answer: 'Yes, we maintain strict confidentiality for all consultations and treatments.'
      },
      {
        question: 'How long do test results take?',
        answer: 'Most results are available within 2-3 business days.'
      },
      {
        question: 'Do you provide partner notification?',
        answer: 'Yes, we offer confidential partner notification services.'
      }
    ]
  },
  {
    id: 'acne-treatment',
    slug: 'acne-treatment',
    title: 'Advanced Acne Treatment',
    category: 'Medical Dermatology',
    description: 'Comprehensive acne treatment using the latest medical advancements and personalized care plans.',
    image: 'https://images.unsplash.com/photo-1612528443702-f6741f70a049?auto=format&fit=crop&q=80',
    Icon: Microscope,
    duration: '30-45 minutes',
    availability: 'Monday to Saturday',
    features: [
      'Personalized treatment plans',
      'Advanced medication options',
      'Ongoing progress monitoring',
      'Dietary and lifestyle guidance',
      'Scar prevention strategies',
      'Regular follow-up care'
    ],
    process: [
      {
        title: 'Initial Consultation',
        description: 'Comprehensive skin analysis and medical history review'
      },
      {
        title: 'Treatment Planning',
        description: 'Customized treatment plan based on acne type and severity'
      },
      {
        title: 'Active Treatment',
        description: 'Implementation of prescribed medications and procedures'
      },
      {
        title: 'Monitoring & Adjustments',
        description: 'Regular follow-up visits to track progress and adjust treatment'
      }
    ],
    faqs: [
      {
        question: 'How long does it take to see results?',
        answer: 'Most patients start seeing improvements within 4-6 weeks of consistent treatment.'
      },
      {
        question: 'Is the treatment covered by insurance?',
        answer: 'Many medical acne treatments are covered by insurance. We can help verify your coverage.'
      },
      {
        question: 'Are there any side effects?',
        answer: 'Side effects vary by treatment type but are typically mild and temporary.'
      }
    ]
  },
  {
    id: 'laser-therapy',
    slug: 'laser-therapy',
    title: 'Laser Skin Therapy',
    category: 'Cosmetic Dermatology',
    description: 'State-of-the-art laser treatments for skin rejuvenation, hair removal, and various skin conditions.',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80',
    Icon: Zap,
    duration: '45-60 minutes',
    availability: 'Tuesday to Friday',
    features: [
      'Advanced laser technology',
      'Minimal downtime',
      'Customized settings',
      'Multiple skin concerns addressed',
      'Safe for all skin types',
      'Long-lasting results'
    ],
    process: [
      {
        title: 'Consultation & Assessment',
        description: 'Evaluation of skin condition and treatment goals'
      },
      {
        title: 'Treatment Preparation',
        description: 'Skin preparation and protective measures'
      },
      {
        title: 'Laser Procedure',
        description: 'Precise laser application with comfort measures'
      },
      {
        title: 'Aftercare',
        description: 'Post-treatment care instructions and follow-up plan'
      }
    ],
    faqs: [
      {
        question: 'Is laser therapy painful?',
        answer: 'Most patients experience minimal discomfort. We use cooling systems and topical numbing when needed.'
      },
      {
        question: 'How many sessions are needed?',
        answer: 'The number of sessions varies by condition, typically 4-6 treatments for optimal results.'
      },
      {
        question: 'What is the recovery time?',
        answer: 'Most patients return to normal activities immediately, though some redness may persist for 24-48 hours.'
      }
    ]
  }
];

export const serviceCategories = [
  {
    id: 'medical',
    title: 'Medical Dermatology',
    services: ['acne-treatment', 'skin-cancer-screening', 'psoriasis-treatment']
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dermatology',
    services: ['laser-therapy', 'chemical-peels', 'dermal-fillers']
  },
  {
    id: 'surgical',
    title: 'Surgical Procedures',
    services: ['skin-biopsy', 'mole-removal', 'scar-revision']
  },
  {
    id: "diagnostic",
    title: "Diagnostic Services",
    services: ["skin-diagnostics", "advanced-procedures"]
  },
  {
    id: "specialized",
    title: "Specialized Care",
    services: ["albinism-care", "venereal-disease"]
  },
  {
    id: "general",
    title: "General Dermatology",
    services: ["skin-conditions"]
  },
  {
    id: "community",
    title: "Community Services",
    services: ["community-outreach"]
  }
]; 