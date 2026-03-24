/**
 * Lucid The Artistry — Project Data
 * Real project imagery
 */

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: "Commercial" | "Residential" | "Duplex" | "Walkthrough" | "Virtual Tour" | "Farmhouse" | "Cutsection";
  type: "Interior" | "Exterior" | "Both" | "Animation";
  year: string;
  client?: string;
  location?: string;
  coverImage: string;
  images: string[];
  video?: string;
  videoThumbnail?: string;
  featured: boolean;
  aspectRatio: "portrait" | "landscape" | "square";
  tags?: string[];
};

export const projects: Project[] = [
  {
    "id": "1",
    "slug": "bliss-empire-vadodara",
    "title": "Bliss Empire Vadodara",
    "category": "Commercial",
    "type": "Exterior",
    "year": "2024",
    "coverImage": "/lucid-project-data/COMMERCIAL/BLISS EMPIRE VADODARA/EXTERIOR/P_Commercial Corner 04-c.webp",
    "images": [
      "/lucid-project-data/COMMERCIAL/BLISS EMPIRE VADODARA/EXTERIOR/P_Commercial Corner 04-c.webp",
      "/lucid-project-data/COMMERCIAL/BLISS EMPIRE VADODARA/EXTERIOR/P_Commercial Front02-c.webp",
      "/lucid-project-data/COMMERCIAL/BLISS EMPIRE VADODARA/EXTERIOR/P_Commercial Side View-c.webp"
    ],
    "featured": true,
    "aspectRatio": "landscape",
    "tags": [
      "commercial",
      "architecture"
    ]
  },
  {
    "id": "2",
    "slug": "central-square-bharuch",
    "title": "Central Square Bharuch",
    "category": "Commercial",
    "type": "Exterior",
    "year": "2024",
    "coverImage": "/lucid-project-data/COMMERCIAL/CENTRAL SQUARE BHARUCH/EXTERIOR/Pacnhbatti 505 Front_Cam01-a.webp",
    "images": [
      "/lucid-project-data/COMMERCIAL/CENTRAL SQUARE BHARUCH/EXTERIOR/Pacnhbatti 505 Front_Cam01-a.webp",
      "/lucid-project-data/COMMERCIAL/CENTRAL SQUARE BHARUCH/EXTERIOR/Pacnhbatti 505 Gallary Closeup_Cam01-a.webp",
      "/lucid-project-data/COMMERCIAL/CENTRAL SQUARE BHARUCH/EXTERIOR/Pacnhbatti 505 Gate_Cam01-a.webp",
      "/lucid-project-data/COMMERCIAL/CENTRAL SQUARE BHARUCH/EXTERIOR/Pacnhbatti 505 High 2nd_Cam01-a.webp",
      "/lucid-project-data/COMMERCIAL/CENTRAL SQUARE BHARUCH/EXTERIOR/Pacnhbatti 505 Left Corner_Cam01-a..webp",
      "/lucid-project-data/COMMERCIAL/CENTRAL SQUARE BHARUCH/EXTERIOR/Pacnhbatti 505 Right_Cam.webp",
      "/lucid-project-data/COMMERCIAL/CENTRAL SQUARE BHARUCH/EXTERIOR/Pacnhbatti 505 Shops Closeup_Cam01-a.webp"
    ],
    "featured": true,
    "aspectRatio": "landscape",
    "tags": [
      "commercial",
      "architecture"
    ]
  },
  {
    "id": "3",
    "slug": "city-gold-bharuch",
    "title": "City Gold Bharuch",
    "category": "Commercial",
    "type": "Exterior",
    "year": "2024",
    "coverImage": "/lucid-project-data/COMMERCIAL/CITY GOLD BHARUCH/EXTERIOR/Dungari Comercial Front_Cam02-v01.webp",
    "images": [
      "/lucid-project-data/COMMERCIAL/CITY GOLD BHARUCH/EXTERIOR/Dungari Comercial Front_Cam02-v01.webp",
      "/lucid-project-data/COMMERCIAL/CITY GOLD BHARUCH/EXTERIOR/Dungari Comercial Left_Cam02-v01.webp",
      "/lucid-project-data/COMMERCIAL/CITY GOLD BHARUCH/EXTERIOR/Dungari Comercial Right_Cam02-v01.webp",
      "/lucid-project-data/COMMERCIAL/CITY GOLD BHARUCH/EXTERIOR/Dungari Iner Comercial_Cam-v01.webp",
      "/lucid-project-data/COMMERCIAL/CITY GOLD BHARUCH/EXTERIOR/Dungari Terece Restaurant_Cam01-v01.webp"
    ],
    "featured": true,
    "aspectRatio": "landscape",
    "tags": [
      "commercial",
      "architecture"
    ]
  },
  {
    "id": "4",
    "slug": "inspirom-vadodara",
    "title": "Inspirom Vadodara",
    "category": "Commercial",
    "type": "Exterior",
    "year": "2024",
    "coverImage": "/lucid-project-data/COMMERCIAL/INSPIROM VADODARA/EXTERIOR/6K_Nimitbhai Commercial Corner Night_Cam-c.webp",
    "images": [
      "/lucid-project-data/COMMERCIAL/INSPIROM VADODARA/EXTERIOR/6K_Nimitbhai Commercial Corner Night_Cam-c.webp",
      "/lucid-project-data/COMMERCIAL/INSPIROM VADODARA/EXTERIOR/6K_Nimitbhai Commercial Corner_Cam_c.webp",
      "/lucid-project-data/COMMERCIAL/INSPIROM VADODARA/EXTERIOR/6K_Nimitbhai Commercial Front_Cam_c.webp",
      "/lucid-project-data/COMMERCIAL/INSPIROM VADODARA/EXTERIOR/6K_Nimitbhai Commercial High_Cam-c.webp"
    ],
    "featured": true,
    "aspectRatio": "landscape",
    "tags": [
      "commercial",
      "architecture"
    ]
  },
  {
    "id": "5",
    "slug": "k10-index-vadodara",
    "title": "K10 Index Vadodara",
    "category": "Commercial",
    "type": "Exterior",
    "year": "2024",
    "coverImage": "/lucid-project-data/COMMERCIAL/K10 INDEX VADODARA/EXTERIOR/6K K10 Index Center Atrea-b.webp",
    "images": [
      "/lucid-project-data/COMMERCIAL/K10 INDEX VADODARA/EXTERIOR/6K K10 Index Center Atrea-b.webp",
      "/lucid-project-data/COMMERCIAL/K10 INDEX VADODARA/EXTERIOR/6K K10 Index Right Side Top View_c.webp",
      "/lucid-project-data/COMMERCIAL/K10 INDEX VADODARA/EXTERIOR/6K_K10 Index Front View-b.webp",
      "/lucid-project-data/COMMERCIAL/K10 INDEX VADODARA/EXTERIOR/6K_K10 Index Remp Entry View-c.webp",
      "/lucid-project-data/COMMERCIAL/K10 INDEX VADODARA/EXTERIOR/6K_K10 Index Side View-d.webp",
      "/lucid-project-data/COMMERCIAL/K10 INDEX VADODARA/EXTERIOR/K10 Index Left Corner View-c.webp"
    ],
    "featured": true,
    "aspectRatio": "landscape",
    "tags": [
      "commercial",
      "architecture"
    ]
  },
  {
    "id": "6",
    "slug": "krishna-commercial-anand",
    "title": "Krishna Commercial Anand",
    "category": "Commercial",
    "type": "Exterior",
    "year": "2024",
    "coverImage": "/lucid-project-data/COMMERCIAL/KRISHNA COMMERCIAL ANAND/EXTERIOR/Krishna Commercial Closeup_Cam01-b.webp",
    "images": [
      "/lucid-project-data/COMMERCIAL/KRISHNA COMMERCIAL ANAND/EXTERIOR/Krishna Commercial Closeup_Cam01-b.webp",
      "/lucid-project-data/COMMERCIAL/KRISHNA COMMERCIAL ANAND/EXTERIOR/Krishna Commercial Front_Cam01-b.webp",
      "/lucid-project-data/COMMERCIAL/KRISHNA COMMERCIAL ANAND/EXTERIOR/Krishna Commercial Right Corner_Cam02-b.webp",
      "/lucid-project-data/COMMERCIAL/KRISHNA COMMERCIAL ANAND/INTERIOR/Krishna Commercial Besment_Cam-c.webp",
      "/lucid-project-data/COMMERCIAL/KRISHNA COMMERCIAL ANAND/INTERIOR/Krishna Commercial First Floor Foyer.webp",
      "/lucid-project-data/COMMERCIAL/KRISHNA COMMERCIAL ANAND/INTERIOR/Krishna Commercial First Floor_Cam-c.webp"
    ],
    "featured": true,
    "aspectRatio": "landscape",
    "tags": [
      "commercial",
      "architecture"
    ]
  },
  {
    "id": "7",
    "slug": "krishna-platina-vadodara",
    "title": "Krishna Platina Vadodara",
    "category": "Commercial",
    "type": "Exterior",
    "year": "2024",
    "coverImage": "/lucid-project-data/COMMERCIAL/KRISHNA PLATINA VADODARA/EXTERIOR/6K_Subhashbhai Commercial Inside_Cam01-b.webp",
    "images": [
      "/lucid-project-data/COMMERCIAL/KRISHNA PLATINA VADODARA/EXTERIOR/6K_Subhashbhai Commercial Inside_Cam01-b.webp",
      "/lucid-project-data/COMMERCIAL/KRISHNA PLATINA VADODARA/EXTERIOR/6K_Subhashbhai Commercial Left Side_Cam-c.webp",
      "/lucid-project-data/COMMERCIAL/KRISHNA PLATINA VADODARA/EXTERIOR/6K_Subhashbhai Commercial Outside_Cam_02.webp",
      "/lucid-project-data/COMMERCIAL/KRISHNA PLATINA VADODARA/EXTERIOR/6k_Subhashbhai Commercial Night_Cam-d.webp",
      "/lucid-project-data/COMMERCIAL/KRISHNA PLATINA VADODARA/EXTERIOR/6k_Subhashbhai Commercial Right Side Night_Cam-d.webp"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "commercial",
      "architecture"
    ]
  },
  {
    "id": "8",
    "slug": "padam-avenue-vadodara",
    "title": "Padam Avenue Vadodara",
    "category": "Commercial",
    "type": "Exterior",
    "year": "2024",
    "coverImage": "/lucid-project-data/COMMERCIAL/PADAM AVENUE VADODARA/EXTERIOR/6K_Jigar Bhai Front_Cam01-c.webp",
    "images": [
      "/lucid-project-data/COMMERCIAL/PADAM AVENUE VADODARA/EXTERIOR/6K_Jigar Bhai Front_Cam01-c.webp",
      "/lucid-project-data/COMMERCIAL/PADAM AVENUE VADODARA/EXTERIOR/6K_Jigar Bhai Right Side Night Corrner Cam03-e.webp"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "commercial",
      "architecture"
    ]
  },
  {
    "id": "9",
    "slug": "r-one-commercail-hydrabad",
    "title": "R-one Commercail Hydrabad",
    "category": "Commercial",
    "type": "Exterior",
    "year": "2024",
    "coverImage": "/lucid-project-data/COMMERCIAL/R-ONE COMMERCAIL HYDRABAD/EXTERIOR/Metalok Commecial Corner Cam New-a-5-6.webp",
    "images": [
      "/lucid-project-data/COMMERCIAL/R-ONE COMMERCAIL HYDRABAD/EXTERIOR/Metalok Commecial Corner Cam New-a-5-6.webp",
      "/lucid-project-data/COMMERCIAL/R-ONE COMMERCAIL HYDRABAD/EXTERIOR/Metalok_Bridge Road Cam-a.webp",
      "/lucid-project-data/COMMERCIAL/R-ONE COMMERCAIL HYDRABAD/EXTERIOR/Metalok_Closeup Cam New.webp",
      "/lucid-project-data/COMMERCIAL/R-ONE COMMERCAIL HYDRABAD/EXTERIOR/Metalok_High Cam New-a.webp",
      "/lucid-project-data/COMMERCIAL/R-ONE COMMERCAIL HYDRABAD/EXTERIOR/Metalok_High Cam1-a.webp",
      "/lucid-project-data/COMMERCIAL/R-ONE COMMERCAIL HYDRABAD/EXTERIOR/Metalok_Highway Bridge Long New-a.webp",
      "/lucid-project-data/COMMERCIAL/R-ONE COMMERCAIL HYDRABAD/EXTERIOR/Metalok_Highway Long Cam-a2.webp",
      "/lucid-project-data/COMMERCIAL/R-ONE COMMERCAIL HYDRABAD/EXTERIOR/Metalok_Highway Long Evening New-a.webp",
      "/lucid-project-data/COMMERCIAL/R-ONE COMMERCAIL HYDRABAD/EXTERIOR/Metalok_Long Night Cam-a.webp",
      "/lucid-project-data/COMMERCIAL/R-ONE COMMERCAIL HYDRABAD/EXTERIOR/Metalok_Road Side Cam1-a.webp"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "commercial",
      "architecture"
    ]
  },
  {
    "id": "10",
    "slug": "sarva-signature-vadodara",
    "title": "Sarva Signature Vadodara",
    "category": "Commercial",
    "type": "Exterior",
    "year": "2024",
    "coverImage": "/lucid-project-data/COMMERCIAL/SARVA SIGNATURE VADODARA/EXTERIOR/6K_Ankurbhai Bhayli Front_Cam01-d.webp",
    "images": [
      "/lucid-project-data/COMMERCIAL/SARVA SIGNATURE VADODARA/EXTERIOR/6K_Ankurbhai Bhayli Front_Cam01-d.webp",
      "/lucid-project-data/COMMERCIAL/SARVA SIGNATURE VADODARA/EXTERIOR/6K_Ankurbhai Bhayli Left Side Corner Night_Cam01-d.webp",
      "/lucid-project-data/COMMERCIAL/SARVA SIGNATURE VADODARA/EXTERIOR/6K_Ankurbhai Bhayli Left Side Corner_Cam01-d.webp"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "commercial",
      "architecture"
    ]
  },
  {
    "id": "11",
    "slug": "vs-monolith-vadodara",
    "title": "Vs Monolith Vadodara",
    "category": "Commercial",
    "type": "Exterior",
    "year": "2024",
    "coverImage": "/lucid-project-data/COMMERCIAL/VS MONOLITH VADODARA/EXTERIOR/Vihav Commercial Corner Cam 1-a.webp",
    "images": [
      "/lucid-project-data/COMMERCIAL/VS MONOLITH VADODARA/EXTERIOR/Vihav Commercial Corner Cam 1-a.webp",
      "/lucid-project-data/COMMERCIAL/VS MONOLITH VADODARA/EXTERIOR/Vihav Commercial Fountain Foyar Cam25-a.webp",
      "/lucid-project-data/COMMERCIAL/VS MONOLITH VADODARA/EXTERIOR/Vihav Commercial Front Cam5-a.webp",
      "/lucid-project-data/COMMERCIAL/VS MONOLITH VADODARA/EXTERIOR/Vihav Commercial Garden Cam9-a.webp",
      "/lucid-project-data/COMMERCIAL/VS MONOLITH VADODARA/EXTERIOR/Vihav Commercial Garden Long Cam16-a.webp",
      "/lucid-project-data/COMMERCIAL/VS MONOLITH VADODARA/EXTERIOR/Vihav Commercial Garden Top Cam26-a.webp",
      "/lucid-project-data/COMMERCIAL/VS MONOLITH VADODARA/EXTERIOR/Vihav Commercial Right Front Cam4-a.webp",
      "/lucid-project-data/COMMERCIAL/VS MONOLITH VADODARA/EXTERIOR/Vihav Commercial Top Cam8-a.webp"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "commercial",
      "architecture"
    ]
  },
  {
    "id": "12",
    "slug": "yogi-florencia-vadodara",
    "title": "Yogi Florencia Vadodara",
    "category": "Commercial",
    "type": "Exterior",
    "year": "2024",
    "coverImage": "/lucid-project-data/COMMERCIAL/YOGI FLORENCIA VADODARA/EXTERIOR/6K_Nileshbhai Brambhatt Corner Day_c.webp",
    "images": [
      "/lucid-project-data/COMMERCIAL/YOGI FLORENCIA VADODARA/EXTERIOR/6K_Nileshbhai Brambhatt Corner Day_c.webp",
      "/lucid-project-data/COMMERCIAL/YOGI FLORENCIA VADODARA/EXTERIOR/6K_Nileshbhai Brambhatt Front_c.webp",
      "/lucid-project-data/COMMERCIAL/YOGI FLORENCIA VADODARA/EXTERIOR/6K_Nileshbhai Commercial_Lobby 1st Cam_c.webp",
      "/lucid-project-data/COMMERCIAL/YOGI FLORENCIA VADODARA/EXTERIOR/6K_Nileshbhai Corner Night View_c.webp",
      "/lucid-project-data/COMMERCIAL/YOGI FLORENCIA VADODARA/EXTERIOR/6K_Nileshbhai_Commercial Top View-c.webp",
      "/lucid-project-data/COMMERCIAL/YOGI FLORENCIA VADODARA/EXTERIOR/6K_Nileshbhai_Corner SIde View-c.webp"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "commercial",
      "architecture"
    ]
  },
  {
    "id": "13",
    "slug": "cutsections-portfolio",
    "title": "Cutsections Portfolio",
    "category": "Cutsection",
    "type": "Interior",
    "year": "2024",
    "coverImage": "/lucid-project-data/CUTSECTIONS/3K_Ganshyambhai Akota Cutsection_Cam-b.webp",
    "images": [
      "/lucid-project-data/CUTSECTIONS/3K_Ganshyambhai Akota Cutsection_Cam-b.webp",
      "/lucid-project-data/CUTSECTIONS/4K_FF Floor Cutsection_C.webp",
      "/lucid-project-data/CUTSECTIONS/4K_GF Floor Cutsection_C.webp",
      "/lucid-project-data/CUTSECTIONS/4K_Hiren Bhai Type C 4 BHK_Cutsection_C.webp",
      "/lucid-project-data/CUTSECTIONS/4K_Hiren Bhai Type D 4 BHK_Cutsection-b.webp",
      "/lucid-project-data/CUTSECTIONS/4K_Hiren Bhai Type E 4 BHK_Cutsection.webp",
      "/lucid-project-data/CUTSECTIONS/4K_Hiren Bhai_Section B-d.webp",
      "/lucid-project-data/CUTSECTIONS/4K_Hiren Bhai_Section_A.origRGB.0000-d.webp",
      "/lucid-project-data/CUTSECTIONS/4K_Seven Nine Imperia 2BHK Cutsection-c.webp",
      "/lucid-project-data/CUTSECTIONS/4K_Seven Nine Imperia 3BHK Cutsection-c.webp",
      "/lucid-project-data/CUTSECTIONS/4K_Shaunak Bhai Cutsection Penthouse DE One_Cam-d.webp",
      "/lucid-project-data/CUTSECTIONS/4K_Shaunak Bhai Cutsection Penthouse DE Tow_Cam-d.webp",
      "/lucid-project-data/CUTSECTIONS/4K_Shaunak Bhai Cutsection Penthouse F Typical-d.webp",
      "/lucid-project-data/CUTSECTIONS/4K_Shaunak Bhai Cutsection Penthouse F_Cam-d.webp",
      "/lucid-project-data/CUTSECTIONS/4K_Shaunak Bhai Cutsection Type_DE-d.webp",
      "/lucid-project-data/CUTSECTIONS/4K_Shaunak Bhai Cutsection Type_d.webp",
      "/lucid-project-data/CUTSECTIONS/4K_Shaunak Bhai Cutsection Type_f-d.webp",
      "/lucid-project-data/CUTSECTIONS/Havelock 3BHK Cutsection Cam_01_b.webp",
      "/lucid-project-data/CUTSECTIONS/Havelock 4BHK Cutsection02 Cam_01-a.webp",
      "/lucid-project-data/CUTSECTIONS/Havelock 4BHK Cutsection02 Cam_01_b.webp",
      "/lucid-project-data/CUTSECTIONS/Madhuban Cutsection AB-c.webp",
      "/lucid-project-data/CUTSECTIONS/Madhuban Status Cutsection CD-c.webp",
      "/lucid-project-data/CUTSECTIONS/Saunak Bhai Cutsection_Cam01-c.webp",
      "/lucid-project-data/CUTSECTIONS/cutsection_3bhk CCC-c.webp"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "cutsection",
      "interior",
      "architecture"
    ]
  },
  {
    "id": "14",
    "slug": "abhlod-farm-halol",
    "title": "Abhlod Farm Halol",
    "category": "Farmhouse",
    "type": "Exterior",
    "year": "2024",
    "coverImage": "/lucid-project-data/FARMHOUSE/ABHLOD FARM HALOL/EXTERIOR/6K_ABHLOD Farm Street Night View-c.webp",
    "images": [
      "/lucid-project-data/FARMHOUSE/ABHLOD FARM HALOL/EXTERIOR/6K_ABHLOD Farm Street Night View-c.webp",
      "/lucid-project-data/FARMHOUSE/ABHLOD FARM HALOL/EXTERIOR/6K_ABHLOD Farm Unit Front View-c.webp",
      "/lucid-project-data/FARMHOUSE/ABHLOD FARM HALOL/EXTERIOR/6K_ABHLOD Farm Unit Top View-b.webp",
      "/lucid-project-data/FARMHOUSE/ABHLOD FARM HALOL/EXTERIOR/6K_ABHLOD Farm Unit1-c.webp",
      "/lucid-project-data/FARMHOUSE/ABHLOD FARM HALOL/EXTERIOR/6K_Abhilod Farmhouse Club 2nd_Cam-c.webp",
      "/lucid-project-data/FARMHOUSE/ABHLOD FARM HALOL/EXTERIOR/6K_Abhilod Farmhouse Club Pool_Cam-c.webp",
      "/lucid-project-data/FARMHOUSE/ABHLOD FARM HALOL/EXTERIOR/6K_Abhilod Farmhouse Club_Cam-c.webp"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "farmhouse",
      "architecture"
    ]
  },
  {
    "id": "15",
    "slug": "lush-meadow-ekta-nagar",
    "title": "Lush Meadow Ekta Nagar",
    "category": "Farmhouse",
    "type": "Exterior",
    "year": "2024",
    "coverImage": "/lucid-project-data/FARMHOUSE/LUSH MEADOW EKTA NAGAR/Kathanpur Club Entry_Cam01-a.webp",
    "images": [
      "/lucid-project-data/FARMHOUSE/LUSH MEADOW EKTA NAGAR/Kathanpur Club Entry_Cam01-a.webp",
      "/lucid-project-data/FARMHOUSE/LUSH MEADOW EKTA NAGAR/Kathanpur Club Top 2nd_Cam01-v01.webp",
      "/lucid-project-data/FARMHOUSE/LUSH MEADOW EKTA NAGAR/Kathanpur Club Top_Cam01-a.webp",
      "/lucid-project-data/FARMHOUSE/LUSH MEADOW EKTA NAGAR/Kathanpur Gate 2nd_Cam-v01.webp",
      "/lucid-project-data/FARMHOUSE/LUSH MEADOW EKTA NAGAR/Kathanpur Gate Front_Cam-v01.webp",
      "/lucid-project-data/FARMHOUSE/LUSH MEADOW EKTA NAGAR/Kathanpur Gate_Cam-a.webp",
      "/lucid-project-data/FARMHOUSE/LUSH MEADOW EKTA NAGAR/Kathanpur Outer Units left_Cam-v01.webp",
      "/lucid-project-data/FARMHOUSE/LUSH MEADOW EKTA NAGAR/Kathanpur Pool 2nd_Cam01-v01.webp",
      "/lucid-project-data/FARMHOUSE/LUSH MEADOW EKTA NAGAR/Kathanpur Pool Night_Cam01-v01.webp",
      "/lucid-project-data/FARMHOUSE/LUSH MEADOW EKTA NAGAR/Kathanpur Pool_Cam01-v01.webp",
      "/lucid-project-data/FARMHOUSE/LUSH MEADOW EKTA NAGAR/Kathanpur Top_Cam-v01.webp",
      "/lucid-project-data/FARMHOUSE/LUSH MEADOW EKTA NAGAR/Kathanpur Units Corner_Cam01-v01.webp",
      "/lucid-project-data/FARMHOUSE/LUSH MEADOW EKTA NAGAR/Kathanpur Units Front_Cam01-v01.webp",
      "/lucid-project-data/FARMHOUSE/LUSH MEADOW EKTA NAGAR/Kathanpur Units Left_Cam01-v01.webp",
      "/lucid-project-data/FARMHOUSE/LUSH MEADOW EKTA NAGAR/Kathanpur Units Pool_Cam01-v01.webp"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "farmhouse",
      "architecture"
    ]
  },
  {
    "id": "16",
    "slug": "vedanta-greens-halol",
    "title": "Vedanta Greens Halol",
    "category": "Farmhouse",
    "type": "Exterior",
    "year": "2024",
    "coverImage": "/lucid-project-data/FARMHOUSE/VEDANTA GREENS HALOL/EXTERIOR/6K_Vedanta Greens 2nd Club House01-c.webp",
    "images": [
      "/lucid-project-data/FARMHOUSE/VEDANTA GREENS HALOL/EXTERIOR/6K_Vedanta Greens 2nd Club House01-c.webp",
      "/lucid-project-data/FARMHOUSE/VEDANTA GREENS HALOL/EXTERIOR/6K_Vedanta Greens Club House-b.webp",
      "/lucid-project-data/FARMHOUSE/VEDANTA GREENS HALOL/EXTERIOR/6K_Vedanta Greens Entry Gate_Cam01-c.webp",
      "/lucid-project-data/FARMHOUSE/VEDANTA GREENS HALOL/EXTERIOR/6K_Vedanta Greens Garden View-c.webp",
      "/lucid-project-data/FARMHOUSE/VEDANTA GREENS HALOL/EXTERIOR/6K_Vedanta Greens Top_Cam-b.webp",
      "/lucid-project-data/FARMHOUSE/VEDANTA GREENS HALOL/EXTERIOR/6K_Vedanta Greens Unit Cam A_Cam01-c.webp",
      "/lucid-project-data/FARMHOUSE/VEDANTA GREENS HALOL/EXTERIOR/6K_Vedanta Greens Unit Cam B_Cam01-c.webp",
      "/lucid-project-data/FARMHOUSE/VEDANTA GREENS HALOL/EXTERIOR/6K_Vedanta Greens Unit Cam C_Cam01-c.webp",
      "/lucid-project-data/FARMHOUSE/VEDANTA GREENS HALOL/EXTERIOR/6K_Vedanta Greens Unit Cam F_Cam01-c.webp",
      "/lucid-project-data/FARMHOUSE/VEDANTA GREENS HALOL/EXTERIOR/Vedanta Greens Emphy Theater View-c.webp",
      "/lucid-project-data/FARMHOUSE/VEDANTA GREENS HALOL/EXTERIOR/Vedanta Greens Garden View-b.webp"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "farmhouse",
      "architecture"
    ]
  }
];

/** Featured projects for homepage hero grid (first 6) */
export const featuredProjects = projects.filter((p) => p.featured);

/** All projects for masonry grid */
export function getProjects(category?: string) {
  if (!category || category === "All") return projects;
  return projects.filter((p) => p.category === category);
}

/** Get project by slug */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** All unique categories for filter */
export const categories = [
  "All",
  "Commercial",
  "Residential",
  "Duplex",
  "Walkthrough",
  "Virtual Tour",
  "Farmhouse",
  "Cutsection"
] as const;
