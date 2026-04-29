/**
 * Lucid The Artistry — Project Data
 * Real project imagery
 */

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: "Commercial" | "Residential" | "Residential High Rise" | "Duplex" | "Walkthrough" | "Virtual Tour" | "Farmhouse" | "Cutsection";
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
    "id": "1",
    "slug": "satyam-surya-manathan",
    "title": "SATYAM SURYA MANATHAN",
    "category": "Residential High Rise",
    "type": "Both",
    "year": "2024",
    "location": "MANATHAN",
    "coverImage": "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/EXTERIOR/1. Satyam Surya Left_Cam01a.jpg",
    "images": [
      "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/EXTERIOR/1. Satyam Surya Left_Cam01a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/EXTERIOR/2. Satyam Surya Front_Cam01-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/EXTERIOR/2. Satyam Surya Left Long_Cam-b.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/EXTERIOR/Dron View.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/EXTERIOR/Satyam Surya Garden 2nd_Cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/EXTERIOR/Satyam Surya Garden Closeup_Cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/EXTERIOR/Satyam Surya Garden_Cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/EXTERIOR/Satyam Surya High 2nd_Cam01-b2.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/EXTERIOR/Satyam Surya High_Cam01-b2.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/EXTERIOR/Satyam Surya Homes Box Cricket_Cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/EXTERIOR/Satyam Surya Homes Gazibo_Cam.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/EXTERIOR/Satyam Surya Play Area_Cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/EXTERIOR/Satyam Surya Pool 2nd_Cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/EXTERIOR/Satyam Surya Pool Night_Cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/INTERIOR/Banquet Hall Cam 01-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/INTERIOR/Banquet Hall Cam 02_a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/INTERIOR/Indoor Game Cam 01-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/INTERIOR/Indoor Game Cam 02-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/INTERIOR/Satyam Surya Foyer-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/INTERIOR/Satyam Surya Gym-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/INTERIOR/Satyam Surya Kids Play Area.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/INTERIOR/Satyam Surya Spa.jpg"
    ],
    "featured": true,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "high-rise",
      "architecture"
    ]
  },
  {
    "id": "2",
    "slug": "palm-iconic-ahemedabad",
    "title": "PALM ICONIC AHEMEDABAD",
    "category": "Residential High Rise",
    "type": "Both",
    "year": "2024",
    "location": "AHEMEDABAD",
    "coverImage": "/RESIDENCIALV HIGH RISE APPARTMENTS/2. PALM ICONIC AHEMEDABAD/Exterior/DJI_0056.jpg",
    "images": [
      "/RESIDENCIALV HIGH RISE APPARTMENTS/2. PALM ICONIC AHEMEDABAD/Exterior/DJI_0056.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/2. PALM ICONIC AHEMEDABAD/Exterior/Palm Icon Club 1st Cam_revised 6K.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/2. PALM ICONIC AHEMEDABAD/Exterior/Palm Icon Multycourt Cam3 6K.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/2. PALM ICONIC AHEMEDABAD/Exterior/Palm Icon Parking_Cam 6K-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/2. PALM ICONIC AHEMEDABAD/Exterior/Palm Iconic Balcony Cam.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/2. PALM ICONIC AHEMEDABAD/Exterior/Palm Iconic High Cam-v02.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/2. PALM ICONIC AHEMEDABAD/Exterior/Palm Iconic Left Coener Cam.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/2. PALM ICONIC AHEMEDABAD/Interiors/Foyer cam.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/2. PALM ICONIC AHEMEDABAD/Interiors/Gameroom Cam.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/2. PALM ICONIC AHEMEDABAD/Interiors/Gym Cam.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/2. PALM ICONIC AHEMEDABAD/Interiors/Living Cam 3.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/2. PALM ICONIC AHEMEDABAD/Interiors/Multi Purpose Hall.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "high-rise",
      "architecture"
    ]
  },
  {
    "id": "3",
    "slug": "serenity-shivam-ahmedabad",
    "title": "SERENITY SHIVAM AHMEDABAD",
    "category": "Residential High Rise",
    "type": "Both",
    "year": "2024",
    "location": "AHMEDABAD",
    "coverImage": "/RESIDENCIALV HIGH RISE APPARTMENTS/3. SERENITY SHIVAM AHMEDABAD/EXTERIOR/1 Gate 1st Cam_v003.jpg",
    "images": [
      "/RESIDENCIALV HIGH RISE APPARTMENTS/3. SERENITY SHIVAM AHMEDABAD/EXTERIOR/1 Gate 1st Cam_v003.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/3. SERENITY SHIVAM AHMEDABAD/EXTERIOR/1 High Night_v02.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/3. SERENITY SHIVAM AHMEDABAD/EXTERIOR/1. Right Corner Cam-b.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/3. SERENITY SHIVAM AHMEDABAD/EXTERIOR/Back Front Long Cam_v001.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/3. SERENITY SHIVAM AHMEDABAD/EXTERIOR/Corner High Cam_v002.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/3. SERENITY SHIVAM AHMEDABAD/EXTERIOR/Front Long Cam_v002.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/3. SERENITY SHIVAM AHMEDABAD/EXTERIOR/Left Corner Cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/3. SERENITY SHIVAM AHMEDABAD/EXTERIOR/Left Corner LOng Cam-b.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/3. SERENITY SHIVAM AHMEDABAD/EXTERIOR/Serenity Shivam Clubhouse_Cam01-b.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/3. SERENITY SHIVAM AHMEDABAD/EXTERIOR/Serenity Shivam Garden 4th_Cam01-b.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/3. SERENITY SHIVAM AHMEDABAD/EXTERIOR/Serenity Shivam Garden_Cam01-c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/3. SERENITY SHIVAM AHMEDABAD/EXTERIOR/Serenity Shivam Gazibo_Cam01-b.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/3. SERENITY SHIVAM AHMEDABAD/EXTERIOR/Serenity Shivam Top View-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/3. SERENITY SHIVAM AHMEDABAD/EXTERIOR/Serenity Shivam Yoga_Cam01_v002.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "high-rise",
      "architecture"
    ]
  },
  {
    "id": "4",
    "slug": "aishwarayam-garden-rajkot",
    "title": "AISHWARAYAM GARDEN RAJKOT",
    "category": "Residential High Rise",
    "type": "Both",
    "year": "2024",
    "location": "RAJKOT",
    "coverImage": "/RESIDENCIALV HIGH RISE APPARTMENTS/4. AISHWARAYAM GARDEN RAJKOT/EXTERIOR/1. Aishwariyam Corner  Cam.jpg",
    "images": [
      "/RESIDENCIALV HIGH RISE APPARTMENTS/4. AISHWARAYAM GARDEN RAJKOT/EXTERIOR/1. Aishwariyam Corner  Cam.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/4. AISHWARAYAM GARDEN RAJKOT/EXTERIOR/Aishwariyam Front Cam_56-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/4. AISHWARAYAM GARDEN RAJKOT/EXTERIOR/Aishwariyam Garden Foyer Entry_Cam-f01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/4. AISHWARAYAM GARDEN RAJKOT/EXTERIOR/Aishwariyam Gate Cam -3-6.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/4. AISHWARAYAM GARDEN RAJKOT/EXTERIOR/Balcony cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/4. AISHWARAYAM GARDEN RAJKOT/EXTERIOR/Game area Cam 55-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/4. AISHWARAYAM GARDEN RAJKOT/EXTERIOR/Garden Cam_48.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/4. AISHWARAYAM GARDEN RAJKOT/INTERIOR/Banquet Hall.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/4. AISHWARAYAM GARDEN RAJKOT/INTERIOR/Game Room01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/4. AISHWARAYAM GARDEN RAJKOT/INTERIOR/GYM Cam.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/4. AISHWARAYAM GARDEN RAJKOT/INTERIOR/Library cam.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/4. AISHWARAYAM GARDEN RAJKOT/INTERIOR/Passage02 Cam.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/4. AISHWARAYAM GARDEN RAJKOT/INTERIOR/Sqush Room 1.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/4. AISHWARAYAM GARDEN RAJKOT/INTERIOR/Sqush Room.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/4. AISHWARAYAM GARDEN RAJKOT/INTERIOR/Theater cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/4. AISHWARAYAM GARDEN RAJKOT/INTERIOR/Toddler Room cam.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/4. AISHWARAYAM GARDEN RAJKOT/INTERIOR/Yoga Room.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "high-rise",
      "architecture"
    ]
  },
  {
    "id": "5",
    "slug": "festival-vibes-ahemdabad",
    "title": "FESTIVAL VIBES AHEMDABAD",
    "category": "Residential High Rise",
    "type": "Both",
    "year": "2024",
    "location": "AHEMDABAD",
    "coverImage": "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/EXTERIOR/1. Front Cam-a.jpg",
    "images": [
      "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/EXTERIOR/1. Front Cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/EXTERIOR/DJI_20250804172904_0721_D.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/EXTERIOR/Festival Vibes C Sityting_Cam01-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/EXTERIOR/Festival Vibes Car In Basement Long Cam01-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/EXTERIOR/Festival Vibes Dack Sitting_Cam02-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/EXTERIOR/Festival Vibes Dack Sitting_Front Cam01-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/EXTERIOR/Festival Vibes Evening Cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/EXTERIOR/Festival Vibes Garden jUla Cam01-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/EXTERIOR/Festival Vibes Garden jUla Closeup Cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/EXTERIOR/Festival Vibes Garden Low Cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/EXTERIOR/Festival Vibes Garden Top_Cam01-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/EXTERIOR/Festival Vibes Garden_Cam01-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/EXTERIOR/Festival Vibes Garden_Cam02-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/EXTERIOR/Festival Vibes Gate Cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/EXTERIOR/Festival Vibes Gate Closeup Cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/EXTERIOR/Festival Vibes Path_Cam01-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/EXTERIOR/Festival Vibes Play Area Cam01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/EXTERIOR/Festival Vibes Pool Cam01-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/EXTERIOR/Festival Vibes Pool Top Cam01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/EXTERIOR/Festival Vibes Sclupture Long Cam01-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/EXTERIOR/Festival Vibes Sitting of pool side-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/EXTERIOR/Festival Vibes Tennis Court_Cam01-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/EXTERIOR/Festival Vibes Yoga Area_Cam01-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/INTERIOR/Cafe Cam.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/INTERIOR/Disco Cam.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/INTERIOR/Foyer cam.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/INTERIOR/Game Room cam.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/INTERIOR/Library Cam.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/INTERIOR/Theatre Room.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "high-rise",
      "architecture"
    ]
  },
  {
    "id": "6",
    "slug": "rameshwer-festival-ahemedabad",
    "title": "Rameshwer Festival AHEMEDABAD",
    "category": "Residential High Rise",
    "type": "Both",
    "year": "2024",
    "location": "AHEMEDABAD",
    "coverImage": "/RESIDENCIALV HIGH RISE APPARTMENTS/6. Rameshwer Festival AHEMEDABAD/EXTERIOR/Rameshwer Play Area 2nd_Cam01-v01.jpg",
    "images": [
      "/RESIDENCIALV HIGH RISE APPARTMENTS/6. Rameshwer Festival AHEMEDABAD/EXTERIOR/Rameshwer Play Area 2nd_Cam01-v01.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "high-rise",
      "architecture"
    ]
  },
  {
    "id": "7",
    "slug": "aura-bharuch",
    "title": "AURA BHARUCH",
    "category": "Residential High Rise",
    "type": "Both",
    "year": "2024",
    "location": "BHARUCH",
    "coverImage": "/RESIDENCIALV HIGH RISE APPARTMENTS/7 AURA BHARUCH/EXTERIOR/Kosamadi 612 Besment 1st_Cam01-a.jpg",
    "images": [
      "/RESIDENCIALV HIGH RISE APPARTMENTS/7 AURA BHARUCH/EXTERIOR/Kosamadi 612 Besment 1st_Cam01-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/7 AURA BHARUCH/INTERIOR/Foyer cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/7 AURA BHARUCH/INTERIOR/Game Room Cam _BF-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/7 AURA BHARUCH/INTERIOR/Game Room Cam_G-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/7 AURA BHARUCH/INTERIOR/GYM Cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/7 AURA BHARUCH/INTERIOR/Kosamadi 612 Besment Parking_Cam01-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/7 AURA BHARUCH/INTERIOR/Library Cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/7 AURA BHARUCH/INTERIOR/Toddler Room Cam-a.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "high-rise",
      "architecture"
    ]
  },
  {
    "id": "8",
    "slug": "raj-empire-nasik",
    "title": "RAJ EMPIRE NASIK",
    "category": "Residential High Rise",
    "type": "Both",
    "year": "2024",
    "location": "NASIK",
    "coverImage": "/RESIDENCIALV HIGH RISE APPARTMENTS/8. RAJ EMPIRE NASIK/EXTERIOR/1. Jaybhaveresi Left_Cam03-a.jpg",
    "images": [
      "/RESIDENCIALV HIGH RISE APPARTMENTS/8. RAJ EMPIRE NASIK/EXTERIOR/1. Jaybhaveresi Left_Cam03-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/8. RAJ EMPIRE NASIK/EXTERIOR/Jaybhaveres iFront Night-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/8. RAJ EMPIRE NASIK/EXTERIOR/Jaybhaveresi Back Corner cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/8. RAJ EMPIRE NASIK/EXTERIOR/Jaybhaveresi Back High_Cam3-001-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/8. RAJ EMPIRE NASIK/EXTERIOR/Jaybhaveresi Down_Cam3-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/8. RAJ EMPIRE NASIK/EXTERIOR/Jaybhaveresi Front High_Cam04-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/8. RAJ EMPIRE NASIK/EXTERIOR/Jaybhaveresi Front_Cam04-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/8. RAJ EMPIRE NASIK/EXTERIOR/Jaybhaveresi Gate High_Cam04-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/8. RAJ EMPIRE NASIK/EXTERIOR/Jaybhaveresi Right_Cam -a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/8. RAJ EMPIRE NASIK/EXTERIOR/Jaybhaveresi Swimmigpool_Cam3-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/8. RAJ EMPIRE NASIK/EXTERIOR/Jaybhaveresi Terrace Acupressure Cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/8. RAJ EMPIRE NASIK/EXTERIOR/Jaybhaveresi Terrace Cricket Cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/8. RAJ EMPIRE NASIK/EXTERIOR/Jaybhaveresi Terrace Kids Area-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/8. RAJ EMPIRE NASIK/EXTERIOR/Jaybhaveresi Terrace telescope cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/8. RAJ EMPIRE NASIK/EXTERIOR/Jaybhaveresi Terrace Temple Cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/8. RAJ EMPIRE NASIK/EXTERIOR/Jaybhaveresi Top_Cam04-a.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "high-rise",
      "architecture"
    ]
  },
  {
    "id": "9",
    "slug": "arcadia-ahemdabad",
    "title": "ARCADIA AHEMDABAD",
    "category": "Residential High Rise",
    "type": "Both",
    "year": "2024",
    "location": "AHEMDABAD",
    "coverImage": "/RESIDENCIALV HIGH RISE APPARTMENTS/9. ARCADIA AHEMDABAD/EXTERIOR/6K_Arcadia Tarrace 2nd Cam New-c.jpg",
    "images": [
      "/RESIDENCIALV HIGH RISE APPARTMENTS/9. ARCADIA AHEMDABAD/EXTERIOR/6K_Arcadia Tarrace 2nd Cam New-c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/9. ARCADIA AHEMDABAD/EXTERIOR/6K_Arcadia Tarrace 2nd Cam-c.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "high-rise",
      "architecture"
    ]
  },
  {
    "id": "9",
    "slug": "vraj-shrushti-nasik",
    "title": "VRAJ SHRUSHTI NASIK",
    "category": "Residential High Rise",
    "type": "Both",
    "year": "2024",
    "location": "NASIK",
    "coverImage": "/RESIDENCIALV HIGH RISE APPARTMENTS/9. VRAJ SHRUSHTI NASIK/EXTERIOR/Vraj Shrushti Shops Closeup_Cam-a.jpg",
    "images": [
      "/RESIDENCIALV HIGH RISE APPARTMENTS/9. VRAJ SHRUSHTI NASIK/EXTERIOR/Vraj Shrushti Shops Closeup_Cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/9. VRAJ SHRUSHTI NASIK/EXTERIOR/Vraj Shrushti Shops Terece 2nd_Cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/9. VRAJ SHRUSHTI NASIK/EXTERIOR/Vraj Shrushti Shops Terece_Cam-a.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "high-rise",
      "architecture"
    ]
  },
  {
    "id": "10",
    "slug": "arcadia-111-ahmedabad",
    "title": "ARCADIA 111 AHMEDABAD",
    "category": "Residential High Rise",
    "type": "Both",
    "year": "2024",
    "location": "AHMEDABAD",
    "coverImage": "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/EXTERIOR/1. Arcadia111 Corner Cam-a.jpg",
    "images": [
      "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/EXTERIOR/1. Arcadia111 Corner Cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/EXTERIOR/Arcadia111 Back Side Long Cam_v003.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/EXTERIOR/Arcadia111 Closeup Cam_v003.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/EXTERIOR/Arcadia111 Front Night Cam-b.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/EXTERIOR/Arcadia111 Living Gallary 1st Cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/EXTERIOR/Arcadia111 Pool  Top Cam_v003.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/EXTERIOR/Arcadia111 Pool Night_Cam-b.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/EXTERIOR/Arcadia111 SG highway Cam_v003.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/EXTERIOR/Arcadia111 Top View_v002.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/EXTERIOR/Terrace Cam_v002.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/INTERIOR/Arcadia111 Bed Gallary 1st Cam-b.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/INTERIOR/Banquet Hall_v002.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/INTERIOR/BEDROOM_v001.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/INTERIOR/CARD Room_v002.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/INTERIOR/Foyer_v002.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/INTERIOR/Game room _v002.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/INTERIOR/Gym cam_v03.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/INTERIOR/GYM_v001.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/INTERIOR/Living room cam_v003.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/INTERIOR/Terrace Cam_v002.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/INTERIOR/Theatre_01_v002.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/INTERIOR/Toddler Room_01_v002.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/INTERIOR/Yogaroom_v002.jpg"
    ],
    "featured": true,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "high-rise",
      "architecture"
    ]
  },
  {
    "id": "11",
    "slug": "sculpture-ahamedabad",
    "title": "SCULPTURE AHAMEDABAD",
    "category": "Residential High Rise",
    "type": "Both",
    "year": "2024",
    "location": "AHAMEDABAD",
    "coverImage": "/RESIDENCIALV HIGH RISE APPARTMENTS/11. SCULPTURE AHAMEDABAD/EXTERIOR/1. Sculpture Varad Left_Cam02-v01.jpg",
    "images": [
      "/RESIDENCIALV HIGH RISE APPARTMENTS/11. SCULPTURE AHAMEDABAD/EXTERIOR/1. Sculpture Varad Left_Cam02-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/11. SCULPTURE AHAMEDABAD/EXTERIOR/Sculpture Varad Back Left_Cam02-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/11. SCULPTURE AHAMEDABAD/EXTERIOR/Sculpture Varad Front_Cam02-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/11. SCULPTURE AHAMEDABAD/EXTERIOR/Sculpture Varad Garden 2nd_Cam01-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/11. SCULPTURE AHAMEDABAD/EXTERIOR/Sculpture Varad Garden_Cam02-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/11. SCULPTURE AHAMEDABAD/EXTERIOR/Sculpture Varad Gazibo Front_Cam02-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/11. SCULPTURE AHAMEDABAD/EXTERIOR/Sculpture Varad Gazibo_Cam02-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/11. SCULPTURE AHAMEDABAD/EXTERIOR/Sculpture Varad Left Long_Cam02-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/11. SCULPTURE AHAMEDABAD/EXTERIOR/Sculpture Varad Playarea_Cam02-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/11. SCULPTURE AHAMEDABAD/EXTERIOR/Sculpture Varad Sitting_Cam02-v01.jpg"
    ],
    "featured": true,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "high-rise",
      "architecture"
    ]
  },
  {
    "id": "12",
    "slug": "aditya-antilia-ahmedabad",
    "title": "ADITYA ANTILIA AHMEDABAD",
    "category": "Residential High Rise",
    "type": "Both",
    "year": "2024",
    "location": "AHMEDABAD",
    "coverImage": "/RESIDENCIALV HIGH RISE APPARTMENTS/12. ADITYA ANTILIA AHMEDABAD/EXTERIOR/1. Aditya 24mt Front-c.jpg",
    "images": [
      "/RESIDENCIALV HIGH RISE APPARTMENTS/12. ADITYA ANTILIA AHMEDABAD/EXTERIOR/1. Aditya 24mt Front-c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/12. ADITYA ANTILIA AHMEDABAD/EXTERIOR/Aditya Antilia Back Corner_Cam-c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/12. ADITYA ANTILIA AHMEDABAD/EXTERIOR/Aditya Antilia Back Front_Cam-c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/12. ADITYA ANTILIA AHMEDABAD/EXTERIOR/Aditya Antilia Right Side Back View-c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/12. ADITYA ANTILIA AHMEDABAD/EXTERIOR/Aditya Antilia Top 1st_Cam_c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/12. ADITYA ANTILIA AHMEDABAD/EXTERIOR/Aditya Childrens Play Area_c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/12. ADITYA ANTILIA AHMEDABAD/EXTERIOR/Aditya Entrance Foyer_c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/12. ADITYA ANTILIA AHMEDABAD/EXTERIOR/Aditya Front Day-c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/12. ADITYA ANTILIA AHMEDABAD/EXTERIOR/Aditya Gate 1st Cam-c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/12. ADITYA ANTILIA AHMEDABAD/EXTERIOR/Balcony View.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/12. ADITYA ANTILIA AHMEDABAD/INTERIOR/Aditya Living room cam_c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/12. ADITYA ANTILIA AHMEDABAD/INTERIOR/foyer-c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/12. ADITYA ANTILIA AHMEDABAD/INTERIOR/Game Room.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/12. ADITYA ANTILIA AHMEDABAD/INTERIOR/Gym_b.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/12. ADITYA ANTILIA AHMEDABAD/INTERIOR/Multipurpose hall_b.jpg"
    ],
    "featured": true,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "high-rise",
      "architecture"
    ]
  },
  {
    "id": "13",
    "slug": "palladium-highstreet-selvas",
    "title": "PALLADIUM HIGHSTREET SELVAS",
    "category": "Residential High Rise",
    "type": "Both",
    "year": "2024",
    "location": "SELVAS",
    "coverImage": "/RESIDENCIALV HIGH RISE APPARTMENTS/13. PALLADIUM HIGHSTREET SELVAS/EXTERIOR/1. Palladium Highstreet Club_Cam-v01.jpg",
    "images": [
      "/RESIDENCIALV HIGH RISE APPARTMENTS/13. PALLADIUM HIGHSTREET SELVAS/EXTERIOR/1. Palladium Highstreet Club_Cam-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/13. PALLADIUM HIGHSTREET SELVAS/EXTERIOR/Palladium Highstreet Front_Cam-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/13. PALLADIUM HIGHSTREET SELVAS/EXTERIOR/Palladium Highstreet Garden_Cam-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/13. PALLADIUM HIGHSTREET SELVAS/EXTERIOR/Palladium Highstreet High_Cam-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/13. PALLADIUM HIGHSTREET SELVAS/EXTERIOR/Palladium Highstreet M Court_Cam-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/13. PALLADIUM HIGHSTREET SELVAS/EXTERIOR/Palladium Highstreet Right_Cam-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/13. PALLADIUM HIGHSTREET SELVAS/EXTERIOR/Palladium Highstreet Shops Closeup_Cam-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/13. PALLADIUM HIGHSTREET SELVAS/EXTERIOR/Palladium Highstreet Shops Front_Cam-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/13. PALLADIUM HIGHSTREET SELVAS/EXTERIOR/Palladium Highstreet Shops Left_Cam-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/13. PALLADIUM HIGHSTREET SELVAS/EXTERIOR/Palladium Highstreet Tample_Cam-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/13. PALLADIUM HIGHSTREET SELVAS/EXTERIOR/Palladium Highstreet Top_Cam-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/13. PALLADIUM HIGHSTREET SELVAS/INTERIOR/Banquet Hall Cam-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/13. PALLADIUM HIGHSTREET SELVAS/INTERIOR/Foyar Cam-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/13. PALLADIUM HIGHSTREET SELVAS/INTERIOR/Game Room.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/13. PALLADIUM HIGHSTREET SELVAS/INTERIOR/Gym Cam.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/13. PALLADIUM HIGHSTREET SELVAS/INTERIOR/Theatre Cam-v01.jpg"
    ],
    "featured": true,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "high-rise",
      "architecture"
    ]
  },
  {
    "id": "14",
    "slug": "solitair-plazo-bharuch",
    "title": "SOLITAIR PLAZO BHARUCH",
    "category": "Residential High Rise",
    "type": "Both",
    "year": "2024",
    "location": "BHARUCH",
    "coverImage": "/RESIDENCIALV HIGH RISE APPARTMENTS/14. SOLITAIR PLAZO BHARUCH/EXTERIOR/1. Tavra Corner Day-a .jpg",
    "images": [
      "/RESIDENCIALV HIGH RISE APPARTMENTS/14. SOLITAIR PLAZO BHARUCH/EXTERIOR/1. Tavra Corner Day-a .jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/14. SOLITAIR PLAZO BHARUCH/EXTERIOR/Tavra Foyer Entry_Cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/14. SOLITAIR PLAZO BHARUCH/EXTERIOR/Tavra Gate Night Cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/14. SOLITAIR PLAZO BHARUCH/EXTERIOR/Tavra Gazibo Sitting Cam-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/14. SOLITAIR PLAZO BHARUCH/EXTERIOR/Tavra Multy Court Area-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/14. SOLITAIR PLAZO BHARUCH/EXTERIOR/Tavra Path Entry Cam-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/14. SOLITAIR PLAZO BHARUCH/EXTERIOR/Tavra Play Area-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/14. SOLITAIR PLAZO BHARUCH/EXTERIOR/Tavra Rain Darnce Area-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/14. SOLITAIR PLAZO BHARUCH/EXTERIOR/Tavra Shop Closeup Night_Cam-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/14. SOLITAIR PLAZO BHARUCH/EXTERIOR/Tavra Tarrace Box Cricket Night-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/14. SOLITAIR PLAZO BHARUCH/EXTERIOR/Tavra Tarrace Cafe-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/14. SOLITAIR PLAZO BHARUCH/EXTERIOR/Tavra Tarrace Pickel Ball Area-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/14. SOLITAIR PLAZO BHARUCH/EXTERIOR/Tavra Tarrace Sitting Cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/14. SOLITAIR PLAZO BHARUCH/EXTERIOR/Tavra Top 1st Cam-v01.jpg"
    ],
    "featured": true,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "high-rise",
      "architecture"
    ]
  },
  {
    "id": "15",
    "slug": "sahjanand-nandelav-bharuch",
    "title": "SAHJANAND NANDELAV BHARUCH",
    "category": "Residential High Rise",
    "type": "Both",
    "year": "2024",
    "location": "BHARUCH",
    "coverImage": "/RESIDENCIALV HIGH RISE APPARTMENTS/15. SAHJANAND NANDELAV BHARUCH/EXTERIOR/1. S Nandelav Front Night_Cam01-b.jpg",
    "images": [
      "/RESIDENCIALV HIGH RISE APPARTMENTS/15. SAHJANAND NANDELAV BHARUCH/EXTERIOR/1. S Nandelav Front Night_Cam01-b.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/15. SAHJANAND NANDELAV BHARUCH/EXTERIOR/S Nandelav Gallary_Cam02-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/15. SAHJANAND NANDELAV BHARUCH/EXTERIOR/S Nandelav Garden 2nd_Cam02-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/15. SAHJANAND NANDELAV BHARUCH/EXTERIOR/S Nandelav Garden_Cam_02-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/15. SAHJANAND NANDELAV BHARUCH/EXTERIOR/S Nandelav Gate_Cam01-v01.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/15. SAHJANAND NANDELAV BHARUCH/EXTERIOR/S Nandelav Gate_Cam01-v02.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/15. SAHJANAND NANDELAV BHARUCH/EXTERIOR/S Nandelav Left Night_Cam01-option - 2.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/15. SAHJANAND NANDELAV BHARUCH/EXTERIOR/Sahajanand Nandelav Front_Cam-v02.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/15. SAHJANAND NANDELAV BHARUCH/EXTERIOR/Sahajanand Nandelav Left_Cam-a.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/15. SAHJANAND NANDELAV BHARUCH/EXTERIOR/Sahajanand Nandelav Top View-v01.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "high-rise",
      "architecture"
    ]
  },
  {
    "id": "16",
    "slug": "omkar-skyline-vadodara",
    "title": "OMKAR SKYLINE VADODARA",
    "category": "Residential High Rise",
    "type": "Both",
    "year": "2024",
    "location": "VADODARA",
    "coverImage": "/RESIDENCIALV HIGH RISE APPARTMENTS/16. OMKAR SKYLINE VADODARA/EXTERIOR/1. 6K_Donilbhai Cam 3 Day View_c.jpg",
    "images": [
      "/RESIDENCIALV HIGH RISE APPARTMENTS/16. OMKAR SKYLINE VADODARA/EXTERIOR/1. 6K_Donilbhai Cam 3 Day View_c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/16. OMKAR SKYLINE VADODARA/EXTERIOR/6K_Donilbhai Cam 2 Front View_c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/16. OMKAR SKYLINE VADODARA/EXTERIOR/6K_Donilbhai Cam 3 Night-d.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/16. OMKAR SKYLINE VADODARA/EXTERIOR/6K_Donilbhai Cam 4 Tower Closeup Night View-c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/16. OMKAR SKYLINE VADODARA/EXTERIOR/6K_Donilbhai Cam 7 Gate Long View_c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/16. OMKAR SKYLINE VADODARA/EXTERIOR/6K_Donilbhai Cam Right Night View_c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/16. OMKAR SKYLINE VADODARA/EXTERIOR/6K_Donilbhai Cam17 Garden NIght View-c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/16. OMKAR SKYLINE VADODARA/EXTERIOR/6K_Donilbhai Cam18 Pool View-c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/16. OMKAR SKYLINE VADODARA/EXTERIOR/6K_Donilbhai Cam29 Gate Night View-d.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/16. OMKAR SKYLINE VADODARA/EXTERIOR/6K_Donilbhai Cam30 Corner View_c.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "high-rise",
      "architecture"
    ]
  },
  {
    "id": "17",
    "slug": "siddheshwaray-parafield-vadodara",
    "title": "Siddheshwaray Parafield VADODARA",
    "category": "Residential High Rise",
    "type": "Both",
    "year": "2024",
    "location": "VADODARA",
    "coverImage": "/RESIDENCIALV HIGH RISE APPARTMENTS/17. Siddheshwaray Parafield VADODARA/EXTERIOR/1. 6K_Manishbhai Siddheshwer Left_Cam01-c.jpg",
    "images": [
      "/RESIDENCIALV HIGH RISE APPARTMENTS/17. Siddheshwaray Parafield VADODARA/EXTERIOR/1. 6K_Manishbhai Siddheshwer Left_Cam01-c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/17. Siddheshwaray Parafield VADODARA/EXTERIOR/6K_Manishbhai S_Garden 1st Cam01-c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/17. Siddheshwaray Parafield VADODARA/EXTERIOR/6K_Manishbhai Siddheshwer Closeup_Cam01-c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/17. Siddheshwaray Parafield VADODARA/EXTERIOR/6K_Manishbhai Siddheshwer Front_Cam01-c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/17. Siddheshwaray Parafield VADODARA/EXTERIOR/6K_Manishbhai Siddheshwer Garden 3rd_Cam-c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/17. Siddheshwaray Parafield VADODARA/EXTERIOR/6K_Manishbhai Siddheshwer Gate_Cam01-c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/17. Siddheshwaray Parafield VADODARA/EXTERIOR/6K_Manishbhai Siddheshwer High_Cam01-c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/17. Siddheshwaray Parafield VADODARA/EXTERIOR/6K_Manishbhai Siddheshwer Pool_Cam01-c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/17. Siddheshwaray Parafield VADODARA/EXTERIOR/6K_Manishbhai Siddheshwer Top_Cam01-c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/17. Siddheshwaray Parafield VADODARA/EXTERIOR/Manishbhai Siddheshwer Right_Cam01-c.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "high-rise",
      "architecture"
    ]
  },
  {
    "id": "18",
    "slug": "rudransh-antilia-vadodara",
    "title": "RUDRANSH ANTILIA VADODARA",
    "category": "Residential High Rise",
    "type": "Both",
    "year": "2024",
    "location": "VADODARA",
    "coverImage": "/RESIDENCIALV HIGH RISE APPARTMENTS/18. RUDRANSH ANTILIA VADODARA/EXTERIOR/1. Dhanraj Right Corner View-c.jpg",
    "images": [
      "/RESIDENCIALV HIGH RISE APPARTMENTS/18. RUDRANSH ANTILIA VADODARA/EXTERIOR/1. Dhanraj Right Corner View-c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/18. RUDRANSH ANTILIA VADODARA/EXTERIOR/Dhanraj and Sons Pool_Cam-c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/18. RUDRANSH ANTILIA VADODARA/EXTERIOR/Dhanraj Balcony Cam_c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/18. RUDRANSH ANTILIA VADODARA/EXTERIOR/Dhanraj Club 1st Cam-c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/18. RUDRANSH ANTILIA VADODARA/EXTERIOR/Dhanraj Club 2nd Cam-c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/18. RUDRANSH ANTILIA VADODARA/EXTERIOR/Dhanraj Front Vie_c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/18. RUDRANSH ANTILIA VADODARA/EXTERIOR/Dhanraj Gate View_c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/18. RUDRANSH ANTILIA VADODARA/EXTERIOR/Dhanraj Left Night Cam_d.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/18. RUDRANSH ANTILIA VADODARA/EXTERIOR/Dhanraj Top View-b.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "high-rise",
      "architecture"
    ]
  },
  {
    "id": "19",
    "slug": "atmiya-sellenite-vadodara",
    "title": "ATMIYA SELLENITE VADODARA",
    "category": "Residential High Rise",
    "type": "Both",
    "year": "2024",
    "location": "VADODARA",
    "coverImage": "/RESIDENCIALV HIGH RISE APPARTMENTS/19. ATMIYA SELLENITE VADODARA/EXTERIOR/1. 8K_Aakashbhai Aatmiya Road Side Long View-d.jpg",
    "images": [
      "/RESIDENCIALV HIGH RISE APPARTMENTS/19. ATMIYA SELLENITE VADODARA/EXTERIOR/1. 8K_Aakashbhai Aatmiya Road Side Long View-d.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/19. ATMIYA SELLENITE VADODARA/EXTERIOR/6K_Aakashbhai Aatmiya Bilding Closeup-c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/19. ATMIYA SELLENITE VADODARA/EXTERIOR/6K_Aakashbhai Aatmiya Cafe 1st Cam_c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/19. ATMIYA SELLENITE VADODARA/EXTERIOR/6K_Aakashbhai Aatmiya Pool 1st Cam_c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/19. ATMIYA SELLENITE VADODARA/EXTERIOR/6K_Aakashbhai Aatmiya Pool 2nd Cam-b.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/19. ATMIYA SELLENITE VADODARA/EXTERIOR/6K_Aakashbhai Aatmiya Tarrace 2nd Cam-b.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/19. ATMIYA SELLENITE VADODARA/EXTERIOR/6K_Aakashbhai Aatmiya Tower 2nd Cam-b.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/19. ATMIYA SELLENITE VADODARA/EXTERIOR/8K_Aakashbhai Aatmiya Entrance-d.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/19. ATMIYA SELLENITE VADODARA/EXTERIOR/8K_Aakashbhai Aatmiya Gate 1st Cam-d.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/19. ATMIYA SELLENITE VADODARA/EXTERIOR/8K_Aakashbhai Aatmiya Gate 2nd Cam-c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/19. ATMIYA SELLENITE VADODARA/EXTERIOR/8K_Aakashbhai Aatmiya Tarrace 1st Cam-d.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "high-rise",
      "architecture"
    ]
  },
  {
    "id": "20",
    "slug": "ratnam-parkview-vadodara",
    "title": "RATNAM PARKVIEW VADODARA",
    "category": "Residential High Rise",
    "type": "Both",
    "year": "2024",
    "location": "VADODARA",
    "coverImage": "/RESIDENCIALV HIGH RISE APPARTMENTS/20.RATNAM PARKVIEW VADODARA/EXTERIOR/1. Ratnam PArkview Gate CAm_01-d.jpg",
    "images": [
      "/RESIDENCIALV HIGH RISE APPARTMENTS/20.RATNAM PARKVIEW VADODARA/EXTERIOR/1. Ratnam PArkview Gate CAm_01-d.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/20.RATNAM PARKVIEW VADODARA/EXTERIOR/6K_Ratnam Parkview Pool_Cam-c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/20.RATNAM PARKVIEW VADODARA/EXTERIOR/6K_Ratnam PArkview Top View.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/20.RATNAM PARKVIEW VADODARA/EXTERIOR/Ratnam PArkview Back Long CAm_06_c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/20.RATNAM PARKVIEW VADODARA/EXTERIOR/Ratnam PArkview Clubhouse Corner CAm_12.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/20.RATNAM PARKVIEW VADODARA/EXTERIOR/Ratnam PArkview Clubhouse Front CAm_18.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/20.RATNAM PARKVIEW VADODARA/EXTERIOR/Ratnam Parkview Gallary_Cam.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/20.RATNAM PARKVIEW VADODARA/EXTERIOR/Ratnam PArkview Multipurpose Court CAm_07.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/20.RATNAM PARKVIEW VADODARA/EXTERIOR/Ratnam Parkview Pool Back Top_Cam.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/20.RATNAM PARKVIEW VADODARA/EXTERIOR/Ratnam PArkview Temple CAm_03.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "high-rise",
      "architecture"
    ]
  },
  {
    "id": "21",
    "slug": "toran-residence-vadodara",
    "title": "TORAN RESIDENCE VADODARA",
    "category": "Residential High Rise",
    "type": "Both",
    "year": "2024",
    "location": "VADODARA",
    "coverImage": "/RESIDENCIALV HIGH RISE APPARTMENTS/21. TORAN RESIDENCE VADODARA/EXTERIOR/1. 6K_Bhadreshbhai Sevasi Right Corner Tower-c.jpg",
    "images": [
      "/RESIDENCIALV HIGH RISE APPARTMENTS/21. TORAN RESIDENCE VADODARA/EXTERIOR/1. 6K_Bhadreshbhai Sevasi Right Corner Tower-c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/21. TORAN RESIDENCE VADODARA/EXTERIOR/6K_Bhadreshbhai Sevasi Club House Front-c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/21. TORAN RESIDENCE VADODARA/EXTERIOR/6K_Bhadreshbhai Sevasi Club House_c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/21. TORAN RESIDENCE VADODARA/EXTERIOR/6K_Bhadreshbhai Sevasi Gate View-c.jpg",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/21. TORAN RESIDENCE VADODARA/EXTERIOR/6K_Bhadreshbhai Sevasi Left Corner Tower-c.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "high-rise",
      "architecture"
    ]
  },
  {
    "id": "1",
    "slug": "happy-mall",
    "title": "Happy Mall",
    "category": "Commercial",
    "type": "Both",
    "year": "2024",
    "coverImage": "/COMMERCIAL/1. Happy Mall/Exterior/1. S Happy Mall Right Corner_Cam03-c.jpg",
    "images": [
      "/COMMERCIAL/1. Happy Mall/Exterior/1. S Happy Mall Right Corner_Cam03-c.jpg",
      "/COMMERCIAL/1. Happy Mall/Exterior/6K Entry cam 02-c.jpg",
      "/COMMERCIAL/1. Happy Mall/Exterior/Passage Cam 15-b.jpg",
      "/COMMERCIAL/1. Happy Mall/Exterior/S Happy Mall Front_Cam03_v002.jpg",
      "/COMMERCIAL/1. Happy Mall/Exterior/S Happy Mall Side Front01_v002.jpg",
      "/COMMERCIAL/1. Happy Mall/Exterior/S Happy Mall Top Cam02_v003.jpg",
      "/COMMERCIAL/1. Happy Mall/Exterior/Theater Lobby-b.jpg"
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
    "slug": "bliss-empire-vadodara",
    "title": "Bliss Empire Vadodara",
    "category": "Commercial",
    "type": "Both",
    "year": "2024",
    "coverImage": "/COMMERCIAL/10. BLISS EMPIRE VADODARA/EXTERIOR/P_Commercial Corner 04-c.jpg",
    "images": [
      "/COMMERCIAL/10. BLISS EMPIRE VADODARA/EXTERIOR/P_Commercial Corner 04-c.jpg",
      "/COMMERCIAL/10. BLISS EMPIRE VADODARA/EXTERIOR/P_Commercial Front02-c.jpg",
      "/COMMERCIAL/10. BLISS EMPIRE VADODARA/EXTERIOR/P_Commercial Side View-c.jpg"
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
    "slug": "padam-avenue-vadodara",
    "title": "Padam Avenue Vadodara",
    "category": "Commercial",
    "type": "Both",
    "year": "2024",
    "coverImage": "/COMMERCIAL/11. PADAM AVENUE VADODARA/EXTERIOR/6K_Jigar Bhai Front_Cam01-c.jpg",
    "images": [
      "/COMMERCIAL/11. PADAM AVENUE VADODARA/EXTERIOR/6K_Jigar Bhai Front_Cam01-c.jpg",
      "/COMMERCIAL/11. PADAM AVENUE VADODARA/EXTERIOR/6K_Jigar Bhai Right Side Night Corrner Cam03-e.jpg"
    ],
    "featured": false,
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
    "type": "Both",
    "year": "2024",
    "coverImage": "/COMMERCIAL/2. CENTRAL SQUARE BHARUCH/EXTERIOR/1. Pacnhbatti 505 Right_Cam.jpg",
    "images": [
      "/COMMERCIAL/2. CENTRAL SQUARE BHARUCH/EXTERIOR/1. Pacnhbatti 505 Right_Cam.jpg",
      "/COMMERCIAL/2. CENTRAL SQUARE BHARUCH/EXTERIOR/Pacnhbatti 505 Front_Cam01-a.jpg",
      "/COMMERCIAL/2. CENTRAL SQUARE BHARUCH/EXTERIOR/Pacnhbatti 505 Gallary Closeup_Cam01-a.jpg",
      "/COMMERCIAL/2. CENTRAL SQUARE BHARUCH/EXTERIOR/Pacnhbatti 505 Gate_Cam01-a.jpg",
      "/COMMERCIAL/2. CENTRAL SQUARE BHARUCH/EXTERIOR/Pacnhbatti 505 High 2nd_Cam01-a.jpg",
      "/COMMERCIAL/2. CENTRAL SQUARE BHARUCH/EXTERIOR/Pacnhbatti 505 Left Corner_Cam01-a..jpg",
      "/COMMERCIAL/2. CENTRAL SQUARE BHARUCH/EXTERIOR/Pacnhbatti 505 Shops Closeup_Cam01-a.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "commercial",
      "architecture"
    ]
  },
  {
    "id": "3",
    "slug": "k10-index-vadodara",
    "title": "K10 Index Vadodara",
    "category": "Commercial",
    "type": "Both",
    "year": "2024",
    "coverImage": "/COMMERCIAL/3. K10 INDEX VADODARA/EXTERIOR/6K_K10 Index Remp Entry View-c.jpg",
    "images": [
      "/COMMERCIAL/3. K10 INDEX VADODARA/EXTERIOR/6K_K10 Index Remp Entry View-c.jpg",
      "/COMMERCIAL/3. K10 INDEX VADODARA/EXTERIOR/6K_K10 Index Side View-d.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "commercial",
      "architecture"
    ]
  },
  {
    "id": "4",
    "slug": "city-gold-bharuch",
    "title": "City Gold Bharuch",
    "category": "Commercial",
    "type": "Both",
    "year": "2024",
    "coverImage": "/COMMERCIAL/4. CITY GOLD BHARUCH/EXTERIOR/Dungari Comercial Left_Cam02-v01.jpg",
    "images": [
      "/COMMERCIAL/4. CITY GOLD BHARUCH/EXTERIOR/Dungari Comercial Left_Cam02-v01.jpg",
      "/COMMERCIAL/4. CITY GOLD BHARUCH/EXTERIOR/Dungari Comercial Right_Cam02-v01.jpg",
      "/COMMERCIAL/4. CITY GOLD BHARUCH/EXTERIOR/Dungari Iner Comercial_Cam-v01.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "commercial",
      "architecture"
    ]
  },
  {
    "id": "5",
    "slug": "vs-monolith-vadodara",
    "title": "Vs Monolith Vadodara",
    "category": "Commercial",
    "type": "Both",
    "year": "2024",
    "coverImage": "/COMMERCIAL/5. VS MONOLITH VADODARA/EXTERIOR/1. Vihav Commercial Corner Cam 1-a.jpg",
    "images": [
      "/COMMERCIAL/5. VS MONOLITH VADODARA/EXTERIOR/1. Vihav Commercial Corner Cam 1-a.jpg",
      "/COMMERCIAL/5. VS MONOLITH VADODARA/EXTERIOR/Vihav Commercial Fountain Foyar Cam25-a.jpg",
      "/COMMERCIAL/5. VS MONOLITH VADODARA/EXTERIOR/Vihav Commercial Front Cam5-a.jpg",
      "/COMMERCIAL/5. VS MONOLITH VADODARA/EXTERIOR/Vihav Commercial Garden Cam9-a.jpg",
      "/COMMERCIAL/5. VS MONOLITH VADODARA/EXTERIOR/Vihav Commercial Garden Long Cam16-a.jpg",
      "/COMMERCIAL/5. VS MONOLITH VADODARA/EXTERIOR/Vihav Commercial Garden Top Cam26-a.jpg",
      "/COMMERCIAL/5. VS MONOLITH VADODARA/EXTERIOR/Vihav Commercial Right Front Cam4-a.jpg",
      "/COMMERCIAL/5. VS MONOLITH VADODARA/EXTERIOR/Vihav Commercial Top Cam8-a.jpg"
    ],
    "featured": false,
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
    "type": "Both",
    "year": "2024",
    "coverImage": "/COMMERCIAL/6. KRISHNA COMMERCIAL ANAND/INTERIOR/Krishna Commercial Besment_Cam-c.jpg",
    "images": [
      "/COMMERCIAL/6. KRISHNA COMMERCIAL ANAND/INTERIOR/Krishna Commercial Besment_Cam-c.jpg",
      "/COMMERCIAL/6. KRISHNA COMMERCIAL ANAND/INTERIOR/Krishna Commercial First Floor Foyer.jpg",
      "/COMMERCIAL/6. KRISHNA COMMERCIAL ANAND/INTERIOR/Krishna Commercial First Floor_Cam-c.jpg"
    ],
    "featured": false,
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
    "type": "Both",
    "year": "2024",
    "coverImage": "/COMMERCIAL/7. KRISHNA PLATINA VADODARA/EXTERIOR/1. 6k_Subhashbhai Commercial Night_Cam-d.jpg",
    "images": [
      "/COMMERCIAL/7. KRISHNA PLATINA VADODARA/EXTERIOR/1. 6k_Subhashbhai Commercial Night_Cam-d.jpg",
      "/COMMERCIAL/7. KRISHNA PLATINA VADODARA/EXTERIOR/6K_Subhashbhai Commercial Left Side_Cam-c.jpg",
      "/COMMERCIAL/7. KRISHNA PLATINA VADODARA/EXTERIOR/6k_Subhashbhai Commercial Right Side Night_Cam-d.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "commercial",
      "architecture"
    ]
  },
  {
    "id": "1",
    "slug": "greenleaf-heritage-2",
    "title": "Greenleaf Heritage 2",
    "category": "Residential",
    "type": "Both",
    "year": "2024",
    "coverImage": "/RESIDENCIAL VILLAS/1. GREENLEAF HERITAGE 2/EXTERIOR/1. Vishalbhai TP 24 Unit Front_Cam-v01.jpg",
    "images": [
      "/RESIDENCIAL VILLAS/1. GREENLEAF HERITAGE 2/EXTERIOR/1. Vishalbhai TP 24 Unit Front_Cam-v01.jpg",
      "/RESIDENCIAL VILLAS/1. GREENLEAF HERITAGE 2/EXTERIOR/Vishalbhai Gate_Cam-v01.jpg",
      "/RESIDENCIAL VILLAS/1. GREENLEAF HERITAGE 2/EXTERIOR/Vishalbhai Terrce_Cam-v01.jpg",
      "/RESIDENCIAL VILLAS/1. GREENLEAF HERITAGE 2/EXTERIOR/Vishalbhai Unit Garden_Cam-v01.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "villa",
      "architecture"
    ]
  },
  {
    "id": "11",
    "slug": "akshar-vihar-2-vadodara",
    "title": "Akshar Vihar 2 Vadodara",
    "category": "Residential",
    "type": "Both",
    "year": "2024",
    "coverImage": "/RESIDENCIAL VILLAS/11. AKSHAR VIHAR 2 VADODARA/EXTERIOR/1. Vipulbhai Tarsali Front_Cam-c.jpg",
    "images": [
      "/RESIDENCIAL VILLAS/11. AKSHAR VIHAR 2 VADODARA/EXTERIOR/1. Vipulbhai Tarsali Front_Cam-c.jpg",
      "/RESIDENCIAL VILLAS/11. AKSHAR VIHAR 2 VADODARA/EXTERIOR/Vipulbhai Tarsali Gate_Cam-c.jpg",
      "/RESIDENCIAL VILLAS/11. AKSHAR VIHAR 2 VADODARA/EXTERIOR/Vipulbhai Tarsali Street_Cam_c.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "villa",
      "architecture"
    ]
  },
  {
    "id": "12",
    "slug": "pushpak-vadodara",
    "title": "Pushpak Vadodara",
    "category": "Residential",
    "type": "Both",
    "year": "2024",
    "coverImage": "/RESIDENCIAL VILLAS/12. PUSHPAK VADODARA/EXTERIOR/2. Jentibhai Front Cam_21_c.jpg",
    "images": [
      "/RESIDENCIAL VILLAS/12. PUSHPAK VADODARA/EXTERIOR/2. Jentibhai Front Cam_21_c.jpg",
      "/RESIDENCIAL VILLAS/12. PUSHPAK VADODARA/EXTERIOR/Jentibhai Club 1st Cam_c.jpg",
      "/RESIDENCIAL VILLAS/12. PUSHPAK VADODARA/EXTERIOR/Jentibhai Road Side Corner_Cam_c.jpg",
      "/RESIDENCIAL VILLAS/12. PUSHPAK VADODARA/EXTERIOR/Jentibhai Road Side Top_Cam_c.jpg",
      "/RESIDENCIAL VILLAS/12. PUSHPAK VADODARA/EXTERIOR/Jentibhai Sitting 1st Cam_b.jpg",
      "/RESIDENCIAL VILLAS/12. PUSHPAK VADODARA/EXTERIOR/Jentibhai Sitting Cam_c.jpg",
      "/RESIDENCIAL VILLAS/12. PUSHPAK VADODARA/EXTERIOR/Jentibhai Tarrace View_c.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "villa",
      "architecture"
    ]
  },
  {
    "id": "2",
    "slug": "g-solitair-vadodara",
    "title": "G Solitair Vadodara",
    "category": "Residential",
    "type": "Both",
    "year": "2024",
    "coverImage": "/RESIDENCIAL VILLAS/2. G SOLITAIR VADODARA/EXTERIOR/Kiranbhai Bhayali Unit Corner Cam-a.jpg",
    "images": [
      "/RESIDENCIAL VILLAS/2. G SOLITAIR VADODARA/EXTERIOR/Kiranbhai Bhayali Unit Corner Cam-a.jpg",
      "/RESIDENCIAL VILLAS/2. G SOLITAIR VADODARA/EXTERIOR/Kiranbhai Bhayali Unit Front Cam-a.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "villa",
      "architecture"
    ]
  },
  {
    "id": "3",
    "slug": "darshnam-kingsville-vadodara",
    "title": "Darshnam Kingsville Vadodara",
    "category": "Residential",
    "type": "Both",
    "year": "2024",
    "coverImage": "/RESIDENCIAL VILLAS/3. DARSHNAM KINGSVILLE VADODARA/exterior/Darshanam Unit Front View-b.jpg",
    "images": [
      "/RESIDENCIAL VILLAS/3. DARSHNAM KINGSVILLE VADODARA/exterior/Darshanam Unit Front View-b.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "villa",
      "architecture"
    ]
  },
  {
    "id": "4",
    "slug": "keystone-mention-vadodara",
    "title": "Keystone Mention Vadodara",
    "category": "Residential",
    "type": "Both",
    "year": "2024",
    "coverImage": "/RESIDENCIAL VILLAS/4. KEYSTONE MENTION VADODARA/EXTERIOR/Keystone Mension Cam 13-b.jpg",
    "images": [
      "/RESIDENCIAL VILLAS/4. KEYSTONE MENTION VADODARA/EXTERIOR/Keystone Mension Cam 13-b.jpg",
      "/RESIDENCIAL VILLAS/4. KEYSTONE MENTION VADODARA/EXTERIOR/Pool Cam-v01.jpg",
      "/RESIDENCIAL VILLAS/4. KEYSTONE MENTION VADODARA/EXTERIOR/Vihav Road Club 1st Cam-v02.jpg",
      "/RESIDENCIAL VILLAS/4. KEYSTONE MENTION VADODARA/EXTERIOR/Vihav Road Club 2nd Cam-a.jpg",
      "/RESIDENCIAL VILLAS/4. KEYSTONE MENTION VADODARA/EXTERIOR/Vihav Road Front View-v02.jpg",
      "/RESIDENCIAL VILLAS/4. KEYSTONE MENTION VADODARA/INTERIOR/Banquet-v01.jpg",
      "/RESIDENCIAL VILLAS/4. KEYSTONE MENTION VADODARA/INTERIOR/Bedroom -v01.jpg",
      "/RESIDENCIAL VILLAS/4. KEYSTONE MENTION VADODARA/INTERIOR/Dubble hight Cam-v01.jpg",
      "/RESIDENCIAL VILLAS/4. KEYSTONE MENTION VADODARA/INTERIOR/GameRoom-v01.jpg",
      "/RESIDENCIAL VILLAS/4. KEYSTONE MENTION VADODARA/INTERIOR/Gym-v01.jpg",
      "/RESIDENCIAL VILLAS/4. KEYSTONE MENTION VADODARA/INTERIOR/Kitchain Cam-v01.jpg",
      "/RESIDENCIAL VILLAS/4. KEYSTONE MENTION VADODARA/INTERIOR/Living Cam 1-v01.jpg",
      "/RESIDENCIAL VILLAS/4. KEYSTONE MENTION VADODARA/INTERIOR/Living Cam 2-v01.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "villa",
      "architecture"
    ]
  },
  {
    "id": "6",
    "slug": "selenite-villa-vadodara",
    "title": "Selenite Villa Vadodara",
    "category": "Residential",
    "type": "Both",
    "year": "2024",
    "coverImage": "/RESIDENCIAL VILLAS/6. SELENITE VILLA VADODARA/EXTERIOR/1. Selenite Villa Front View_c.jpg",
    "images": [
      "/RESIDENCIAL VILLAS/6. SELENITE VILLA VADODARA/EXTERIOR/1. Selenite Villa Front View_c.jpg",
      "/RESIDENCIAL VILLAS/6. SELENITE VILLA VADODARA/EXTERIOR/Sellenite Villa Gate View_c.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "villa",
      "architecture"
    ]
  },
  {
    "id": "7",
    "slug": "akshat-luxuria-bharuch",
    "title": "Akshat Luxuria Bharuch",
    "category": "Residential",
    "type": "Both",
    "year": "2024",
    "coverImage": "/RESIDENCIAL VILLAS/7. AKSHAT LUXURIA BHARUCH/EXTERIOR/Nandlav Bharuch Gate_Cam-a.jpg",
    "images": [
      "/RESIDENCIAL VILLAS/7. AKSHAT LUXURIA BHARUCH/EXTERIOR/Nandlav Bharuch Gate_Cam-a.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "villa",
      "architecture"
    ]
  },
  {
    "id": "8",
    "slug": "atlantis-bharuch",
    "title": "Atlantis Bharuch",
    "category": "Residential",
    "type": "Both",
    "year": "2024",
    "coverImage": "/RESIDENCIAL VILLAS/8. ATLANTIS BHARUCH/EXTERIOR/Atlantis Type-B Gallary_Cam01-v01.jpg",
    "images": [
      "/RESIDENCIAL VILLAS/8. ATLANTIS BHARUCH/EXTERIOR/Atlantis Type-B Gallary_Cam01-v01.jpg",
      "/RESIDENCIAL VILLAS/8. ATLANTIS BHARUCH/EXTERIOR/Atlantis Type-B Street_Cam01-v01.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "villa",
      "architecture"
    ]
  },
  {
    "id": "9",
    "slug": "al-safa-bharuch",
    "title": "Al-Safa Bharuch",
    "category": "Residential",
    "type": "Both",
    "year": "2024",
    "coverImage": "/RESIDENCIAL VILLAS/9. AL-SAFA BHARUCH/EXTERIOR/Duplex Furkanbhai Gate_Cam-v01.jpg",
    "images": [
      "/RESIDENCIAL VILLAS/9. AL-SAFA BHARUCH/EXTERIOR/Duplex Furkanbhai Gate_Cam-v01.jpg",
      "/RESIDENCIAL VILLAS/9. AL-SAFA BHARUCH/EXTERIOR/Duplex Furkanbhai Units Corner_Cam-a.jpg",
      "/RESIDENCIAL VILLAS/9. AL-SAFA BHARUCH/EXTERIOR/Duplex Furkanbhai Units Front_Cam-a.jpg",
      "/RESIDENCIAL VILLAS/9. AL-SAFA BHARUCH/EXTERIOR/Duplex Furkanbhai Units Sitting_Cam-v01.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "residential",
      "villa",
      "architecture"
    ]
  },
  {
    "id": "1",
    "slug": "lush-meadow-ekta-nagar",
    "title": "Lush Meadow Ekta Nagar",
    "category": "Farmhouse",
    "type": "Both",
    "year": "2024",
    "coverImage": "/FARMHOUSE/1. LUSH MEADOW EKTA NAGAR/1. Kathanpur Units Front_Cam01-v01.jpg",
    "images": [
      "/FARMHOUSE/1. LUSH MEADOW EKTA NAGAR/1. Kathanpur Units Front_Cam01-v01.jpg",
      "/FARMHOUSE/1. LUSH MEADOW EKTA NAGAR/Kathanpur Club Entry_Cam01-a.jpg",
      "/FARMHOUSE/1. LUSH MEADOW EKTA NAGAR/Kathanpur Club Top 2nd_Cam01-v01.jpg",
      "/FARMHOUSE/1. LUSH MEADOW EKTA NAGAR/Kathanpur Club Top_Cam01-a.jpg",
      "/FARMHOUSE/1. LUSH MEADOW EKTA NAGAR/Kathanpur Gate 2nd_Cam-v01.jpg",
      "/FARMHOUSE/1. LUSH MEADOW EKTA NAGAR/Kathanpur Gate Front_Cam-v01.jpg",
      "/FARMHOUSE/1. LUSH MEADOW EKTA NAGAR/Kathanpur Gate_Cam-a.jpg",
      "/FARMHOUSE/1. LUSH MEADOW EKTA NAGAR/Kathanpur Outer Units left_Cam-v01.jpg",
      "/FARMHOUSE/1. LUSH MEADOW EKTA NAGAR/Kathanpur Pool 2nd_Cam01-v01.jpg",
      "/FARMHOUSE/1. LUSH MEADOW EKTA NAGAR/Kathanpur Pool Night_Cam01-v01.jpg",
      "/FARMHOUSE/1. LUSH MEADOW EKTA NAGAR/Kathanpur Pool_Cam01-v01.jpg",
      "/FARMHOUSE/1. LUSH MEADOW EKTA NAGAR/Kathanpur Top_Cam-v01.jpg",
      "/FARMHOUSE/1. LUSH MEADOW EKTA NAGAR/Kathanpur Units Corner_Cam01-v01.jpg",
      "/FARMHOUSE/1. LUSH MEADOW EKTA NAGAR/Kathanpur Units Left_Cam01-v01.jpg",
      "/FARMHOUSE/1. LUSH MEADOW EKTA NAGAR/Kathanpur Units Pool_Cam01-v01.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "farmhouse",
      "architecture"
    ]
  },
  {
    "id": "3",
    "slug": "vedanta-greens-halol",
    "title": "Vedanta Greens Halol",
    "category": "Farmhouse",
    "type": "Both",
    "year": "2024",
    "coverImage": "/FARMHOUSE/3. VEDANTA GREENS HALOL/EXTERIOR/6K_Vedanta Greens 2nd Club House01-c.jpg",
    "images": [
      "/FARMHOUSE/3. VEDANTA GREENS HALOL/EXTERIOR/6K_Vedanta Greens 2nd Club House01-c.jpg",
      "/FARMHOUSE/3. VEDANTA GREENS HALOL/EXTERIOR/6K_Vedanta Greens Club House-b.jpg",
      "/FARMHOUSE/3. VEDANTA GREENS HALOL/EXTERIOR/Vedanta Greens Garden View-b.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "farmhouse",
      "architecture"
    ]
  },
  {
    "id": "360",
    "slug": "output",
    "title": "Output",
    "category": "Virtual Tour",
    "type": "Animation",
    "year": "2024",
    "coverImage": "/360 virtual/360 output/Satyam Surya Homes Kharghar 360_0001.jpg",
    "images": [
      "/360 virtual/360 output/Satyam Surya Homes Kharghar 360_0001.jpg",
      "/360 virtual/360 output/Satyam Surya Homes Kharghar 360_00011.jpg",
      "/360 virtual/360 output/Satyam Surya Homes Kharghar 360_0002.jpg",
      "/360 virtual/360 output/Satyam Surya Homes Kharghar 360_0003.jpg",
      "/360 virtual/360 output/Satyam Surya Homes Kharghar 360_0004.jpg",
      "/360 virtual/360 output/Satyam Surya Homes Kharghar 360_0005.jpg",
      "/360 virtual/360 output/Satyam Surya Homes Kharghar 360_0006.jpg",
      "/360 virtual/360 output/Satyam Surya Homes Kharghar 360_0007.jpg",
      "/360 virtual/360 output/Satyam Surya Homes Kharghar 360_0008.jpg",
      "/360 virtual/360 output/Satyam Surya Homes Kharghar 360_0009.jpg",
      "/360 virtual/360 output/Satyam Surya Homes Kharghar 360_0010.jpg",
      "/360 virtual/360 output/Satyam Surya Homes Kharghar 360_0012.jpg",
      "/360 virtual/360 output/Satyam Surya Homes Kharghar 360_0013.jpg",
      "/360 virtual/360 output/Satyam Surya Homes Kharghar 360_0014.jpg",
      "/360 virtual/360 output/Satyam Surya Homes Kharghar 360_0015.jpg",
      "/360 virtual/360 output/Satyam Surya Homes Kharghar 360_0016.jpg",
      "/360 virtual/360 output/Satyam Surya Homes Kharghar 360_0018.jpg",
      "/360 virtual/360 output/Satyam Surya Homes Kharghar 360_0019.jpg",
      "/360 virtual/360 output/Satyam Surya Homes Kharghar 360_0020.jpg",
      "/360 virtual/360 output/Satyam Surya Homes Kharghar 360_0021.jpg",
      "/360 virtual/360 output/Satyam Surya Homes Kharghar 360_0022.jpg"
    ],
    "featured": false,
    "aspectRatio": "landscape",
    "tags": [
      "virtual-tour",
      "360",
      "architecture"
    ]
  }
];

/** Get first project slug for a given category (used for home page category links) */
export function getFirstProjectSlug(category: string): string | null {
  const match = projects.find((p) => p.category === category);
  return match ? match.slug : null;
}
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
  "Residential High Rise",
  "Commercial",
  "Residential",
  "Duplex",
  "Walkthrough",
  "Virtual Tour",
  "Farmhouse",
  "Cutsection"
] as const;

/**
 * Returns the previous and next project within the same category.
 * No wrap-around: first project has no prev, last project has no next.
 */
export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
  categoryProjects: Project[];
} {
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { prev: null, next: null, categoryProjects: [] };

  const categoryProjects = projects.filter(
    (p) => p.category === project.category
  );
  const idx = categoryProjects.findIndex((p) => p.slug === slug);

  const prev = idx > 0 ? categoryProjects[idx - 1] : null;
  const next = idx < categoryProjects.length - 1 ? categoryProjects[idx + 1] : null;

  return { prev, next, categoryProjects };
}
