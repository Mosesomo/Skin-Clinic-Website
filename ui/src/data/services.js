import { 
  Stethoscope,
  Clock,
  Search,
  Zap,
  Beaker,
  Heart
} from 'lucide-react';

export const services = [
  {
    id: 'acne-treatment',
    title: "Advanced Acne Treatment",
    description: "Comprehensive solutions for all types of acne using cutting-edge treatments",
    Icon: Stethoscope,
    image: "https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    shortDescription: "Expert treatment for all types of acne conditions",
    features: [
      "Personalized treatment plans",
      "Advanced laser therapy",
      "Medical-grade skincare",
      "Regular progress monitoring",
      "Scar prevention strategies",
      "Lifestyle recommendations"
    ],
    benefits: [
      "Clear, healthy skin",
      "Reduced scarring",
      "Improved confidence",
      "Long-term results"
    ],
    treatments: [
      "Topical medications",
      "Oral medications",
      "Chemical peels",
      "Light therapy",
      "Laser treatments"
    ]
  },
  {
    id: 'anti-aging',
    title: "Anti-Aging Solutions",
    description: "Turn back time with our advanced anti-aging treatments and procedures",
    Icon: Clock,
    image: "https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    shortDescription: "Restore youthful appearance with advanced treatments",
    features: [
      "Wrinkle reduction",
      "Skin tightening",
      "Collagen stimulation",
      "Volume restoration",
      "Texture improvement",
      "Preventive care plans"
    ],
    benefits: [
      "Younger-looking skin",
      "Improved skin texture",
      "Natural-looking results",
      "Long-lasting effects"
    ],
    treatments: [
      "Botox injections",
      "Dermal fillers",
      "Laser resurfacing",
      "Chemical peels",
      "Microdermabrasion"
    ]
  },
  {
    id: 'skin-cancer',
    title: "Skin Cancer Screening",
    description: "Early detection and prevention of skin cancer with expert diagnosis",
    Icon: Search,
    image: "https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    shortDescription: "Comprehensive skin cancer detection and prevention",
    features: [
      "Full-body examination",
      "Digital dermoscopy",
      "Regular monitoring",
      "Risk assessment",
      "Prevention strategies",
      "Follow-up care"
    ],
    benefits: [
      "Early detection",
      "Preventive care",
      "Peace of mind",
      "Expert monitoring"
    ],
    treatments: [
      "Skin examination",
      "Biopsy",
      "Surgical removal",
      "Radiation therapy",
      "Chemotherapy"
    ]
  },
  {
    id: 'laser-therapy',
    title: "Advanced Laser Therapy",
    description: "State-of-the-art laser treatments for various skin conditions",
    Icon: Zap,
    image: "https://images.pexels.com/photos/4046567/pexels-photo-4046567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    shortDescription: "Cutting-edge laser treatments for multiple skin concerns",
    features: [
      "Scar removal",
      "Hair removal",
      "Skin resurfacing",
      "Pigmentation treatment",
      "Vascular lesions",
      "Tattoo removal"
    ],
    benefits: [
      "Minimal downtime",
      "Precise treatment",
      "Long-lasting results",
      "Multiple conditions treated"
    ],
    treatments: [
      "CO2 laser resurfacing",
      "Fractional laser therapy",
      "IPL treatment",
      "Laser hair removal",
      "Vascular laser treatment"
    ]
  },
  {
    id: 'chemical-peels',
    title: "Chemical Peels",
    description: "Professional chemical peels for skin rejuvenation and texture improvement",
    Icon: Beaker,
    image: "https://images.pexels.com/photos/3985337/pexels-photo-3985337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    shortDescription: "Reveal fresher, younger-looking skin with chemical peels",
    features: [
      "Customized treatments",
      "Various peel strengths",
      "Minimal downtime",
      "Acne scar treatment",
      "Hyperpigmentation",
      "Skin renewal"
    ],
    benefits: [
      "Improved skin texture",
      "Reduced fine lines",
      "Even skin tone",
      "Brighter complexion"
    ],
    treatments: [
      "Superficial peels",
      "Medium-depth peels",
      "Deep peels",
      "Combination treatments",
      "Maintenance peels"
    ]
  },
  {
    id: 'dermal-fillers',
    title: "Dermal Fillers",
    description: "FDA-approved fillers for facial volume restoration and enhancement",
    Icon: Heart,
    image: "https://images.pexels.com/photos/7446987/pexels-photo-7446987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    shortDescription: "Restore volume and enhance facial features",
    features: [
      "Natural results",
      "Long-lasting effects",
      "Quick recovery",
      "Volume enhancement",
      "Wrinkle reduction",
      "Facial contouring"
    ],
    benefits: [
      "Immediate results",
      "Natural appearance",
      "Customizable treatment",
      "Minimal downtime"
    ],
    treatments: [
      "Hyaluronic acid fillers",
      "Calcium hydroxylapatite fillers",
      "Poly-L-lactic acid fillers",
      "Polymethylmethacrylate fillers",
      "Combination treatments"
    ]
  }
];

export const serviceCategories = [
  {
    id: "medical",
    title: "Medical Dermatology",
    services: ["acne-treatment", "skin-cancer"]
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dermatology",
    services: ["anti-aging", "dermal-fillers"]
  },
  {
    id: "treatments",
    title: "Specialized Treatments",
    services: ["laser-therapy", "chemical-peels"]
  }
]; 