export interface TimelineItem {
  year: string;
  era: string;
  title: string;
  description: string;
  highlight: string;
  icon: string;
}

export interface CultureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  accent: string;
  highlights: string[];
}

export interface PlaceItem {
  id: string;
  name: string;
  hindiName: string;
  builtBy: string;
  period: string;
  metroStation: string;
  description: string;
  foodConnection: string;
  image: string;
  tags: string[];
}

export interface StreetFoodItem {
  id: string;
  name: string;
  hindiName: string;
  tagline: string;
  flavorProfile: string[];
  description: string;
  famousSpot: string;
  spicyLevel: number; // 1-5
  isOurSpecial?: boolean;
  image: string;
}

export interface SpecialMenuItem {
  id: string;
  name: string;
  hindiName: string;
  icon: string;
  tagline: string;
  description: string;
  culturalNote: string;
  ingredients: string[];
  flavorScores: {
    spicy: number;
    tangy: number;
    sweet: number;
    creamy: number;
    fresh: number;
  };
  tasteTags: string[];
  prepMethod: string[];
  image: string;
  noFireHighlight: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  delhiFact: string;
}

export interface TeamMember {
  id: string;
  name: string;
  roleNumber: string;
  title: string;
  roleDescription: string;
  namePlaceholder: string;
  responsibilities: string[];
}

// 1. DELHI TIMELINE DATA
export const DELHI_TIMELINE: TimelineItem[] = [
  {
    year: "c. 1000 BCE",
    era: "Ancient Indraprastha",
    title: "The Mythological Epic Roots",
    description: "Referenced as Indraprastha in the Mahabharata, early archaeological layers around Purana Qila mark the dawn of civilization along the Yamuna.",
    highlight: "First known urban settlement on the banks of Yamuna river",
    icon: "🏛️"
  },
  {
    year: "1192 – 1526",
    era: "Delhi Sultanate",
    title: "Era of Citadel & Fortresses",
    description: "Ruled by the Mamluk, Khilji, Tughlaq, Sayyid, and Lodi dynasties, giving birth to iconic Indo-Islamic stone architecture including Qutub Minar.",
    highlight: "Synthesis of Persian arts with Indian craft and spicy street kebabs",
    icon: "⚔️"
  },
  {
    year: "1526 – 1857",
    era: "Mughal Empire & Shahjahanabad",
    title: "The Golden Cultural Zenith",
    description: "Emperor Shah Jahan founded Shahjahanabad (Old Delhi) in 1638, constructing the Lal Qila, Jama Masjid, and the bustling moonlit market of Chandni Chowk.",
    highlight: "Origin of Delhi's royal culinary heritage, saunth chutneys & fragrant sherbets",
    icon: "👑"
  },
  {
    year: "1911",
    era: "British Era",
    title: "Capital Proclamation",
    description: "King George V declared the shift of the capital from Calcutta to Delhi at the Delhi Durbar, commissioning architects Edwin Lutyens and Herbert Baker.",
    highlight: "Creation of broad tree-lined avenues and monumental symmetry",
    icon: "📜"
  },
  {
    year: "1947 – 1950",
    era: "Capital of Free India",
    title: "Heart of Independent India",
    description: "India Gate transformed into an immortal tribute to bravery, and New Delhi became the constitutional sovereign epicentre of the world's largest democracy.",
    highlight: "A welcoming melting pot of Punjabi, UP, and pan-Indian culinary traditions",
    icon: "🇮🇳"
  },
  {
    year: "Present Day",
    era: "AI & Innovation Era",
    title: "Global Tech & Cultural Metropolis",
    description: "A vibrant mega-city where ancient stone bastions harmonize with world-class rapid transit, universities, and cutting-edge artificial intelligence students.",
    highlight: "Bridging timeless Dilli hospitality with modern digital experiences",
    icon: "🚀"
  }
];

// 2. DELHI CULTURE DATA
export const DELHI_CULTURE: CultureItem[] = [
  {
    id: "zubaan",
    title: "Dilli Ki Zubaan",
    subtitle: "Lyrical confluence of dialects",
    description: "A soulful blend of sweet Urdu poetry, robust Hindi, hearty Punjabi idioms, and English slang heard across university campuses and tea stalls.",
    icon: "🗣️",
    accent: "from-amber-500/20 to-orange-500/20",
    highlights: ["Poetry of Ghalib & Mir", "Colloquial 'Bhai' camaraderie", "Lively bargaining dialect"]
  },
  {
    id: "mehmaan",
    title: "Mehmaan-Nawazi",
    subtitle: "Legendary Hospitality & Big Hearts",
    description: "There is a reason the city is called 'Dilli Dilwalon Ki' (Delhi belongs to the large-hearted). Feeding a guest is considered sacred hospitality.",
    icon: "❤️",
    accent: "from-rose-500/20 to-red-500/20",
    highlights: ["Generous food portions", "Warm welcoming culture", "Community sharing tradition"]
  },
  {
    id: "bazaars",
    title: "Historic Bazaars",
    subtitle: "Scent of Spices & Silk",
    description: "From Khari Baoli (Asia's largest spice market) to Dilli Haat and Sarojini Nagar, Delhi’s markets are living, breathing sensory feasts.",
    icon: "🛍️",
    accent: "from-yellow-500/20 to-amber-500/20",
    highlights: ["Khari Baoli spice aromas", "Zari & Ittar attar oils", "Artisan crafts & pottery"]
  },
  {
    id: "festivals",
    title: "Festivals of Harmony",
    subtitle: "Celebrations that unite all",
    description: "Delhi lights up for Diwali, dresses up for Eid at Jama Masjid, dances for Holi, and celebrates 'Phool Walon Ki Sair' uniting diverse faiths.",
    icon: "🪔",
    accent: "from-emerald-500/20 to-teal-500/20",
    highlights: ["Jama Masjid Eid feasts", "Chandni Chowk Diwali lights", "Sufi basant celebrations"]
  },
  {
    id: "arts",
    title: "Sufi, Ghazal & Kathak",
    subtitle: "Melodies of Nizamuddin",
    description: "Thursday evening Qawwalis echoing at Hazrat Nizamuddin Dargah and classical Kathak gharanas echo Delhi's centuries-old devotion to melody.",
    icon: "🎵",
    accent: "from-purple-500/20 to-pink-500/20",
    highlights: ["Amir Khusrau's verses", "Live spiritual Qawwalis", "Classical Mughal courtesies"]
  },
  {
    id: "street-life",
    title: "Chai & Chaat Culture",
    subtitle: "The pulse of roadside conversations",
    description: "Life in Delhi unfolds at corner tea stalls and evening chaat corners, where heated debates, laughter, and crispy snacks happen every sunset.",
    icon: "☕",
    accent: "from-orange-500/20 to-red-500/20",
    highlights: ["Evening street gatherings", "Kulhad chai traditions", "Chaat corner social hubs"]
  }
];

// 3. FAMOUS PLACES
export const FAMOUS_PLACES: PlaceItem[] = [
  {
    id: "india-gate",
    name: "India Gate",
    hindiName: "इण्डिया गेट",
    builtBy: "Sir Edwin Lutyens",
    period: "1921 – 1931",
    metroStation: "Central Secretariat / Khan Market",
    description: "A towering 42-metre war memorial standing at the eastern end of the Rajpath (Kartavya Path), surrounded by sprawling lush lawns that come alive every evening.",
    foodConnection: "World-famous for twilight strolls with roasted bhutta (corn), chana jor garam, and creamy ice-creams.",
    image: "/images/india_gate.jpg",
    tags: ["National Monument", "Kartavya Path", "Evening Gathering"]
  },
  {
    id: "red-fort",
    name: "Red Fort (Lal Qila)",
    hindiName: "लाल किला",
    builtBy: "Emperor Shah Jahan",
    period: "1638 – 1648",
    metroStation: "Lal Quila (Violet Line)",
    description: "The monumental red sandstone fortress that served as the primary residence of the Mughal Emperors for nearly 200 years and the stage for India's Prime Minister on Independence Day.",
    foodConnection: "Directly faces the entrance to Old Delhi's legendary food lane, where imperial court recipes evolved into street food.",
    image: "/images/red_fort.jpg",
    tags: ["UNESCO World Heritage", "Mughal Architecture", "Independence Symbol"]
  },
  {
    id: "qutub-minar",
    name: "Qutub Minar",
    hindiName: "क़ुतुब मीनार",
    builtBy: "Qutb-ud-din Aibak & Iltutmish",
    period: "1199 – 1220",
    metroStation: "Qutab Minar (Yellow Line)",
    description: "At 72.5 metres, this red sandstone fluted minaret is the tallest brick minaret in the world, surrounded by ancient iron pillars that have defied rust for 1,600 years.",
    foodConnection: "Surrounded by Mehrauli's heritage cafes blending historic stone arches with modern gastronomy.",
    image: "/images/qutub_minar.jpg",
    tags: ["UNESCO World Heritage", "Tallest Brick Minaret", "Mehrauli Heritage"]
  },
  {
    id: "jama-masjid",
    name: "Jama Masjid",
    hindiName: "जामा मस्जिद",
    builtBy: "Emperor Shah Jahan",
    period: "1650 – 1656",
    metroStation: "Jama Masjid (Violet Line)",
    description: "One of the largest and most magnificent mosques in India, constructed with red sandstone and white marble strips, holding up to 25,000 worshippers in its central courtyard.",
    foodConnection: "The epicenter of Matia Mahal lane, home of the legendary 'Mohabbat Ka Sharbat' and rose milk coolers.",
    image: "/images/jama_masjid.jpg",
    tags: ["Shahjahanabad", "Matia Mahal", "Historic Grandeur"]
  },
  {
    id: "chandni-chowk",
    name: "Chandni Chowk",
    hindiName: "चाँदनी चौक",
    builtBy: "Princess Jahanara Begum",
    period: "1650",
    metroStation: "Chandni Chowk (Yellow Line)",
    description: "Meaning 'Moonlight Square', this 370-year-old thoroughfare once featured reflecting canals under moonlit skies, now bustling with silver merchants, bookshops, and legendary eateries.",
    foodConnection: "The undisputed Street Food Capital of India, home to Paranthe Wali Gali, Natraj Dahi Bhalla, and spicy fruit chaat vendors.",
    image: "/images/chandni_chowk.jpg",
    tags: ["Food Capital", "Paranthe Wali Gali", "Old Delhi Magic"]
  }
];

// 4. STREET FOOD ITEMS
export const DELHI_STREET_FOODS: StreetFoodItem[] = [
  {
    id: "dahi-puri",
    name: "Dahi Puri",
    hindiName: "दही पूरी",
    tagline: "Crisp, creamy, tangy & explosive",
    flavorProfile: ["Crispy", "Creamy", "Tangy", "Spicy", "Sweet"],
    description: "Puffed golden semolina shells filled with spiced potato mash, drenched in whisked sweet curd, tamarind saunth chutney, and spicy mint sauce, crowned with crispy sev and ruby pomegranate pearls.",
    famousSpot: "Bengali Market & Chandni Chowk",
    spicyLevel: 3,
    isOurSpecial: true,
    image: "/images/dahi_puri.jpg"
  },
  {
    id: "mohabbat-sharbat",
    name: "Mohabbat Ka Sharbat",
    hindiName: "मोहब्बत का शरबत",
    tagline: "The love potion of Old Delhi",
    flavorProfile: ["Sweet", "Chilled", "Floral", "Refreshing", "Hydrating"],
    description: "A legendary summer cooler born right outside Jama Masjid gate. Combines chilled full-cream milk, aromatic Rooh Afza rose syrup, tender juicy watermelon cubes, and cooling sabja basil seeds.",
    famousSpot: "Matia Mahal, Jama Masjid, Old Delhi",
    spicyLevel: 1,
    isOurSpecial: true,
    image: "/images/mohabbat_sharbat.jpg"
  },
  {
    id: "fruit-chaat",
    name: "Delhi Fruit Chaat",
    hindiName: "दिल्ली फ्रूट चाट",
    tagline: "Vibrant, spicy & crisp fruit medley",
    flavorProfile: ["Fresh", "Spicy", "Tangy", "Zesty", "Crunchy"],
    description: "A colourful bowl of diced crisp apples, bananas, guavas, pineapples, and pomegranates tossed in fiery green chillies, roasted cumin, black salt, fresh mint, and special Delhi chaat masala.",
    famousSpot: "Janpath & Connaught Place",
    spicyLevel: 3,
    isOurSpecial: true,
    image: "/images/fruit_chaat.jpg"
  },
  {
    id: "chole-bhature",
    name: "Chole Bhature",
    hindiName: "छोले भटूरे",
    tagline: "Delhi's undisputed breakfast king",
    flavorProfile: ["Spicy", "Rich", "Aromatic", "Fluffy"],
    description: "Spicy dark chickpea gravy cooked with whole spices, served alongside balloon-like puffed bhaturas, pickled carrots, and green chillies.",
    famousSpot: "Sita Ram Diwan Chand, Paharganj",
    spicyLevel: 4,
    image: "/images/chole_bhature.jpg"
  },
  {
    id: "aloo-chaat",
    name: "Dilli Ki Aloo Chaat",
    hindiName: "आलू चाट",
    tagline: "Crispy potato tossed in saunth",
    flavorProfile: ["Crispy", "Spicy", "Tangy", "Hot"],
    description: "Golden potato cubes tossed in roasted cumin, dry mango powder, ginger juliennes, and spicy tamarind chutney.",
    famousSpot: "Prabhu Chaat Bhandar, UPSC Lane",
    spicyLevel: 4,
    image: "/images/aloo_chaat.jpg"
  },
  {
    id: "jalebi-rabri",
    name: "Jalebi with Rabri",
    hindiName: "जलेबी रबड़ी",
    tagline: "Crisp saffron swirls with thick cream",
    flavorProfile: ["Sweet", "Crisp", "Creamy", "Warm"],
    description: "Thick, syrupy golden swirls fried in pure ghee, served dripping warm alongside chilled reduced condensed milk (rabri).",
    famousSpot: "Old Famous Jalebi Wala, Dariba Kalan",
    spicyLevel: 1,
    image: "/images/jalebi_rabri.jpg"
  }
];

// 5. OUR SPECIAL COMPETITION MENU
export const OUR_COMPETITION_MENU: SpecialMenuItem[] = [
  {
    id: "dahi-puri-special",
    name: "Dahi Puri",
    hindiName: "शाही दही पूरी",
    icon: "🌶️",
    tagline: "Spicy, tangy, creamy explosion of flavours",
    description: "Crispy puris filled with potato and chickpeas, topped with creamy curd, green chutney, tangy tamarind chutney, sev and aromatic spices.",
    culturalNote: "Born out of Delhi's love for balancing contrasting sensations in a single bite — cold sweet curd meeting fiery saunth and crunchy gram flour sev.",
    ingredients: [
      "Crispy Puris (Golden Semolina Shells)",
      "Creamy Whisked Curd (Sweetened & Chilled)",
      "Boiled Potatoes (Spiced & Diced)",
      "Tender Chickpeas (Sprouted & Seasoned)",
      "Green Mint & Coriander Chutney",
      "Tangy Tamarind Saunth Chutney",
      "Fine Crispy Nylon Sev",
      "Delhi Roasted Chaat Masala",
      "Fresh Garden Coriander Leaves",
      "Ruby Red Pomegranate Pearls"
    ],
    flavorScores: {
      spicy: 65,
      tangy: 85,
      sweet: 75,
      creamy: 90,
      fresh: 80
    },
    tasteTags: ["🌶️ Spicy", "🍋 Tangy", "❤️ Sweet", "🥛 Creamy", "🌿 Fresh"],
    prepMethod: [
      "1. Gently crack the crown of crisp puris without breaking the base shell.",
      "2. Stuff with a spoonful of spiced potato and tender chickpea medley.",
      "3. Spoon chilled whisked sweet curd until puris are luxuriously filled.",
      "4. Drizzle fiery green mint chutney and tangy tamarind saunth reduction.",
      "5. Sprinkle roasted cumin chaat masala, generous nylon sev, coriander, and ruby pomegranate pearls."
    ],
    image: "/images/dahi_puri.jpg",
    noFireHighlight: "100% Assembly without cooking — ready crisp puris, pre-boiled spiced filling, and fresh chilled dairy."
  },
  {
    id: "mohabbat-sharbat-special",
    name: "Mohabbat Ka Sharbat",
    hindiName: "मोहब्बत का शरबत",
    icon: "❤️🌹",
    tagline: "Sweet, refreshing, watermelon + rose milk",
    description: "A refreshing Delhi-style drink combining watermelon, chilled milk and rose syrup, finished with sabja seeds and rose petals.",
    culturalNote: "Invented by Nawab Qureshi near Jama Masjid in Old Delhi, this drink is an ode to the romance and camaraderie ('Mohabbat') of Delhiites braving the scorching summer heat.",
    ingredients: [
      "Fresh Crisp Watermelon (Finely Chopped Cubes)",
      "Chilled Full-Cream Milk (Dairy Pure)",
      "Authentic Rooh Afza (Fragrant Herbal Rose Syrup)",
      "Pre-Soaked Sabja Seeds (Cooling Basil Seeds)",
      "Crushed Crystal Ice",
      "Edible Red Rose Petals",
      "Optional Light Cane Sugar & Cardamom hint"
    ],
    flavorScores: {
      spicy: 0,
      tangy: 15,
      sweet: 95,
      creamy: 88,
      fresh: 98
    },
    tasteTags: ["❤️ Sweet", "🥛 Creamy", "🌹 Floral", "🍉 Hydrating", "❄️ Chilled"],
    prepMethod: [
      "1. Pour chilled full-cream milk into an ornate glass vessel.",
      "2. Whisk in fragrant Rooh Afza rose syrup until a royal pink hue emerges.",
      "3. Fold in abundant freshly diced seedless ruby watermelon cubes.",
      "4. Add soaked gelatinous sabja (basil) seeds for cooling texture.",
      "5. Serve chilled over crushed ice, garnished with fragrant crimson rose petals."
    ],
    image: "/images/mohabbat_sharbat.jpg",
    noFireHighlight: "Zero thermal processing — pure natural cooling using chilled milk, fresh watermelon, and soaked botanical seeds."
  },
  {
    id: "fruit-chaat-special",
    name: "Delhi Fruit Chaat",
    hindiName: "दिल्ली फ्रूट चाट",
    icon: "🍎🌶️",
    tagline: "Spicy, tangy, zesty & freshly tossed",
    description: "A colourful, spicy and tangy fruit preparation inspired by Delhi's famous street-food culture.",
    culturalNote: "Popularized across Connaught Place and Chandni Chowk lanes as an energizing, guilt-free street snack combining natural orchard sweetness with Delhi's signature rock salt and roasted cumin zest.",
    ingredients: [
      "Crisp Royal Gala Apples",
      "Tender Ripe Bananas",
      "Crispy Pink Guava Slices",
      "Juicy Golden Pineapple Tidbits",
      "Ruby Pomegranate Arils",
      "Freshly Squeezed Citrus Lemon Juice",
      "Finely Minced Mild Green Chilli",
      "Fresh Hand-torn Garden Mint",
      "Chopped Fresh Green Coriander",
      "Secret Delhi Chaat Masala & Kala Namak (Black Salt)",
      "Mild Kashmiri Red Chilli Powder"
    ],
    flavorScores: {
      spicy: 70,
      tangy: 95,
      sweet: 80,
      creamy: 10,
      fresh: 100
    },
    tasteTags: ["🍎 Fresh", "🍋 Tangy", "🌶️ Spicy", "⚡ Zesty", "🌱 Nutritious"],
    prepMethod: [
      "1. Dice crisp fresh apples, ripe bananas, guavas, and pineapples into bite-sized cubes.",
      "2. Combine in a large wooden mixing bowl with ruby pomegranate arils.",
      "3. Squeeze freshly sliced lemon juice to coat and preserve orchard freshness.",
      "4. Toss with roasted cumin chaat masala, Himalayan black salt, and a pinch of Kashmiri chilli.",
      "5. Finish with shredded garden mint leaves and serve immediately crisp and zesty."
    ],
    image: "/images/fruit_chaat.jpg",
    noFireHighlight: "100% Raw botanical superfood — sliced live at the stall without fire, preserving full vitamins and enzymes."
  }
];

// 6. QUIZ QUESTIONS
export const DELHI_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Which monument is famous for its tall red sandstone walls and hosted historical coronation ceremonies?",
    options: ["India Gate", "Red Fort (Lal Qila)", "Qutub Minar", "Lotus Temple"],
    correctIndex: 1,
    explanation: "Correct! 🎉 The Red Fort was constructed by Mughal Emperor Shah Jahan in 1638 and remains a symbol of Indian sovereignty.",
    delhiFact: "The Lal Qila was originally designated as 'Qila-e-Mubarak' (The Blessed Fort)."
  },
  {
    id: 2,
    question: "What is the key refreshing ingredient that makes Old Delhi's 'Mohabbat Ka Sharbat' unique?",
    options: ["Fresh Diced Watermelon", "Pineapple Pulp", "Tamarind Puree", "Mango Slice"],
    correctIndex: 0,
    explanation: "Spot on! 🎉 Crisp chunks of juicy watermelon are diced right into the chilled rose milk, creating its signature crunch.",
    delhiFact: "The drink was popularized right opposite the historic Jama Masjid in the Matia Mahal quarter."
  },
  {
    id: 3,
    question: "Which 370-year-old Old Delhi bazaar is globally renowned as the 'Street Food Capital of India'?",
    options: ["Connaught Place", "Sarojini Nagar", "Chandni Chowk", "Khan Market"],
    correctIndex: 2,
    explanation: "Brilliant! 🎉 Chandni Chowk was designed by Princess Jahanara in 1650 and houses legendary alleys like Paranthe Wali Gali.",
    delhiFact: "A canal used to run through Chandni Chowk reflecting the moon, giving it the name 'Moonlight Square'."
  },
  {
    id: 4,
    question: "What architectural world record does the 72.5-metre tall Qutub Minar hold?",
    options: ["Tallest marble dome", "Tallest brick minaret in the world", "Oldest clock tower", "Deepest underground stepwell"],
    correctIndex: 1,
    explanation: "Correct! 🎉 Built in 1199 CE, Qutub Minar is officially recognized as the world's tallest brick minaret.",
    delhiFact: "Nearby stands an ancient Iron Pillar that hasn't rusted for over 1,600 years due to metallurgical mastery."
  },
  {
    id: 5,
    question: "Why is Delhi culturally referred to as 'Dilli Dilwalon Ki' across the country?",
    options: [
      "Because of its geographical central location",
      "Because of its warm, generous and welcoming people",
      "Because of its metro rail network",
      "Because of its winter climate"
    ],
    correctIndex: 1,
    explanation: "Dil Se Dilliwala! ❤️ The phrase celebrates Delhi's warm hospitality, open-hearted banter, and love for sharing food.",
    delhiFact: "Hospitality ('Mehmaan-Nawazi') is considered an art form in Delhi's historic culture."
  }
];

// 7. TEAM DATA
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "member-01",
    name: "Lohith S",
    roleNumber: "TEAM MEMBER 01",
    title: "Culinary Formulation & System Lead",
    roleDescription: "Led the selection, ingredient balancing, and authentic spice formulation of Delhi's no-fire menu.",
    namePlaceholder: "Lohith S",
    responsibilities: ["Dish Balance & Flavour Ratio", "Authentic Delhi Recipe Sourcing", "Quality & Hygiene Compliance"]
  },
  {
    id: "member-02",
    name: "Rithesh Balaji C M",
    roleNumber: "TEAM MEMBER 02",
    title: "Interactive System & Experience Engineering",
    roleDescription: "Engineered the mobile-first QR digital microsite, responsive architecture, and dynamic flavor radar.",
    namePlaceholder: "Rithesh Balaji C M",
    responsibilities: ["React/TypeScript Architecture", "Mobile Performance Optimization", "Interactive Quiz & State Engine"]
  },
  {
    id: "member-03",
    name: "Shridhar Pundalik T",
    roleNumber: "TEAM MEMBER 03",
    title: "Cultural Research & Content Curation",
    roleDescription: "Curated historical timelines, architectural insights, and verified cultural folklore of Old Delhi.",
    namePlaceholder: "Shridhar Pundalik T",
    responsibilities: ["Fact-checked Historical Data", "Monument & Street Food Stories", "Brand Voice & Visual Aesthetics"]
  },
  {
    id: "member-04",
    name: "Kedhar Basappa Mirje",
    roleNumber: "TEAM MEMBER 04",
    title: "Stall Presentation & Live Operations",
    roleDescription: "Coordinated table design, QR physical deployment, judge presentation flow, and live assembly.",
    namePlaceholder: "Kedhar Basappa Mirje",
    responsibilities: ["Stall & Table Presentation", "Judge Interaction Experience", "Hygienic Assembly Flow"]
  }
];
