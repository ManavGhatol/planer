import { Journey, DestinationRegion, Story, GalleryItem, HorizontalMoment, InstagramPost } from '../types';

export const BRAND_INFO = {
  name: 'PARIKRAMA',
  tagline: 'THE CIRCLE OF NATURE',
  subheadline: 'ESCAPE THE ORDINARY.',
  manifesto: 'TRAILS • TREKS • CAMPS • WILDERNESS • STORIES',
  phone: '+91 98230 45678',
  whatsapp: '+919823045678',
  instagram: '@parikrama_adventures',
  email: 'explore@parikramaadventures.com',
  baseCities: ['Mumbai', 'Pune', 'Nashik', 'Delhi', 'Dehradun'],
};

export const FEATURED_JOURNEYS: Journey[] = [
  {
    id: 'kalsubai-highest-peak',
    title: 'KALSUBAI',
    subtitle: 'THE HIGHEST PEAK OF MAHARASHTRA',
    region: 'Western Ghats',
    location: 'Bhandardara, Maharashtra',
    duration: '3 Nights / 4 Days',
    nightsDays: '3N / 4D',
    difficulty: 'Moderate',
    altitude: '1,646 M (5,400 FT)',
    price: 4999,
    originalPrice: 6200,
    availableDates: ['26 Sept — 29 Sept', '03 Oct — 06 Oct', '10 Oct — 13 Oct', '24 Oct — 27 Oct'],
    seatsLeft: 4,
    totalSeats: 18,
    category: 'Trek',
    ecoScore: 98,
    treesPlanted: 2,
    plasticSaved: 18,
    floraFauna: ['Malabar Giant Squirrel', 'Karvi Wildflower Bloom', 'Crested Hawk-Eagle'],
    ecoCertification: 'Leave No Trace Master Certified',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1920&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Stand atop Maharashtra’s zenith. Climb the iconic steel ladders anchored into basalt cliffs as rolling monsoon clouds sweep past the Kalsubai Harishchandragad Wildlife Sanctuary. Wake up above an ocean of fog with views stretching to Bhandardara Lake.',
    tags: ['Summit Climb', 'Sunrise Cloud Ocean', 'Ladders of Sahyadri', 'Starlit Basecamp'],
    included: [
      'Private AC vehicle transport from Mumbai/Pune & return',
      'Dome camping tents (twin/triple sharing) with sleeping mats',
      'All meals: 3 Breakfasts, 3 Lunches, 3 Dinners (authentic local Maharashtrian cuisine)',
      'Certified Wilderness First Responders & technical mountaineering leads',
      'Forest department permits, sanctuary entry fees & local village taxes',
      'Parikrama expedition badge & certificate of summit completion'
    ],
    notIncluded: [
      'Personal trekking gear & rucksack',
      'Mineral water / packaged beverages outside designated meals',
      'Emergency evacuation insurance (available as add-on)'
    ],
    carryList: [
      {
        category: 'Footwear & Apparel',
        items: ['Ankle-support trekking shoes with deep lug grip', '2 moisture-wicking quick dry t-shirts', '2 comfortable trek track pants (avoid jeans)', 'Light fleece or windbreaker jacket']
      },
      {
        category: 'Gear & Essentials',
        items: ['30–40L backpack with rain cover', 'Headlamp or sturdy torch with extra batteries', '2-liter reusable water bladder or bottles', 'Quick-dry microfiber towel']
      },
      {
        category: 'Personal Care',
        items: ['Sunscreen (SPF 50+), lip balm, insect repellent', 'Personal medication kit & ORS sachets', 'Eco-friendly biodegradable wet wipes']
      }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Overnight Transit & Arrival at Bari Basecamp',
        distance: '180 km drive',
        duration: '5 hours',
        description: 'Board our luxury expedition bus from designated pick-up points across Mumbai and Pune. Late evening briefing by expedition leaders, scenic night drive through Kasara Ghats, reaching Bari village by dawn.',
        mealsIncluded: ['Midnight refreshments'],
        keyHighlights: ['Meet your fellow explorers', 'Stargazing on Kasara ascent', 'Hot chai at rustic trail-head']
      },
      {
        day: 2,
        title: 'Acclimatization, Village Trail & Sunset Ridge Walk',
        distance: '4.5 km',
        duration: '3.5 hours',
        description: 'Wake up to the aroma of authentic village Poha and black tea. Orientation hike around Bari paddy fields, stream crossings, and afternoon climbing technique briefing. Sunset vista over Arthur Lake.',
        mealsIncluded: ['Village Breakfast', 'Local Thali Lunch', 'Campfire Dinner'],
        keyHighlights: ['Bari organic farm walk', 'Ladder safety demonstration', 'Warm bonfire storytelling']
      },
      {
        day: 3,
        title: 'Summit Day: The Ladder Route to the Clouds',
        distance: '6.8 km ascent & descent',
        duration: '7 hours',
        description: 'Early 3:30 AM alpine alpine push. Traverse dark forest trails under headlamps, conquer the three iconic iron ladders bolted to sheer volcanic rock. Reach Kalsubai temple at 1,646m exactly for a golden sunrise piercing a sea of clouds.',
        mealsIncluded: ['Summit Pack Snack', 'Summit Breakfast', 'Traditional Pithla Bhakri Lunch', 'Celebratory Dinner'],
        keyHighlights: ['Golden hour summit panorama', 'Kalsubai Devi shrine blessings', 'Cloud inversion photography']
      },
      {
        day: 4,
        title: 'Waterfall Dip & Return Journey',
        distance: '190 km drive',
        duration: '6 hours',
        description: 'Lazy morning bath in crystal clear Pravara river rapids. Farewell debrief, distribution of summit badges, and return drive to Mumbai/Pune with stops for local ghat snacks.',
        mealsIncluded: ['Farm Fresh Breakfast', 'Lunch en route'],
        keyHighlights: ['River rejuvenation', 'Expedition photo exchange', 'Safe drop-offs']
      }
    ],
    meetingPoints: [
      { city: 'Mumbai', pickupLocation: 'Dadar (Pritam Hotel) / Thane (Teen Hath Naka)', pickupTime: '10:30 PM' },
      { city: 'Pune', pickupLocation: 'Fergusson College Main Gate / Wakad Bridge', pickupTime: '10:00 PM' },
      { city: 'Nashik', pickupLocation: 'Dwarka Circle', pickupTime: '01:30 AM' }
    ],
    faqs: [
      {
        question: 'Is Kalsubai suitable for first-time trekkers?',
        answer: 'Yes! While challenging due to steep ladders and continuous incline, our guides maintain a gentle pacing with regular hydration stops. Anyone with basic walking fitness can summit successfully.'
      },
      {
        question: 'Are the ladders safe during monsoon or mist?',
        answer: 'Extremely safe. The iron ladders are securely bolted into bedrock. Our leads assist every trekker step-by-step and carry safety lines if needed.'
      },
      {
        question: 'What are the toilet and washroom facilities at camp?',
        answer: 'At Bari basecamp, we partner with reputable village homestays providing clean, separated western and Indian washrooms with running water.'
      }
    ]
  },
  {
    id: 'ratangad-valley-of-flowers',
    title: 'RATANGAD',
    subtitle: "MAHARASHTRA'S VALLEY OF FLOWERS",
    region: 'Western Ghats',
    location: 'Ratanwadi, Maharashtra',
    duration: '2 Nights / 3 Days',
    nightsDays: '2N / 3D',
    difficulty: 'Moderate',
    altitude: '1,297 M (4,255 FT)',
    price: 3899,
    originalPrice: 4800,
    availableDates: ['20 Sept — 22 Sept', '27 Sept — 29 Sept', '04 Oct — 06 Oct', '18 Oct — 20 Oct'],
    seatsLeft: 7,
    totalSeats: 16,
    category: 'Trek',
    ecoScore: 99,
    treesPlanted: 2,
    plasticSaved: 16,
    floraFauna: ['Karvi Flower Bloom', 'Sonki Daisy', 'Malabar Giant Squirrel'],
    ecoCertification: 'Leave No Trace Level 3 Certified',
    heroImage: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1920&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Known as the "Jewel of Forts", Ratangad boasts the famous "Nedhe" (Eye of the Needle) — a natural wind-carved rock cavity atop the bastion. During post-monsoon, the plateaus burst into vivid violet Sonki and Karvi blossoms.',
    tags: ['Rock Cavity Nedhe', 'Wildflower Bloom', 'Cave Camping', 'Amruteshwar Temple'],
    included: [
      'Round-trip travel from Mumbai/Pune',
      'Cliffside tent / ancient cave stay experience',
      'All local meals (hot dal khichdi, village bhakri, fresh chai)',
      'Expert certified mountaineer team & permits',
      'Visit to 1,200-year-old Hemadpanthi Amruteshwar temple'
    ],
    notIncluded: ['Personal gear', 'Snacks during hike'],
    carryList: [
      { category: 'Clothing', items: ['Trek pants, quick-dry tees, wind-jacket, woolen cap for chilly night'] },
      { category: 'Gear', items: ['Sturdy shoes with good grip, torch/headlamp, 2.5L water bottle'] }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Drive through Western Ghats & Camp at Ratanwadi',
        description: 'Depart Mumbai/Pune in the evening. Arrive at the peaceful shores of Bhandardara reservoir, set up camp beside the ancient stone temple of Amruteshwar.',
        mealsIncluded: ['Late Dinner'],
        keyHighlights: ['Temple architecture', 'Lake breeze', 'Tent pitching tutorial']
      },
      {
        day: 2,
        title: 'Ascent to Ratangad & Exploration of Nedhe',
        description: 'Trek through dense deciduous forest, cross ancient rock bastions, explore Rani Mahal caves, and stand inside the natural rock needle with howling gale winds.',
        mealsIncluded: ['Camp Breakfast', 'Packed Lunch', 'Hot Village Dinner'],
        keyHighlights: ['Natural wind tunnel', 'Wildflower photography', 'Sunset over Alang-Madan-Kulang']
      },
      {
        day: 3,
        title: 'Descent via Samrad & Return',
        description: 'Morning descent through the gentle Samrad valley trail, debrief over traditional Misal Pav, and drive back to city drop-offs.',
        mealsIncluded: ['Breakfast', 'Traditional Lunch'],
        keyHighlights: ['Valley panoramas', 'Farewell circle']
      }
    ],
    meetingPoints: [
      { city: 'Mumbai', pickupLocation: 'Dadar TT / Thane Majiwada', pickupTime: '11:00 PM' },
      { city: 'Pune', pickupLocation: 'Swargate / Chandni Chowk', pickupTime: '10:30 PM' }
    ],
    faqs: [
      {
        question: 'What makes Ratangad special?',
        answer: 'The natural rock orifice called Nedhe where you can sit and watch clouds rush past at 50 km/h, and the 8-year Karvi blooming cycle across the plateau.'
      }
    ]
  },
  {
    id: 'nainital-misty-himalayan-ridges',
    title: 'NAINITAL',
    subtitle: 'MOUNTAINS. MIST. MEMORIES.',
    region: 'Uttarakhand Himalayas',
    location: 'Kumaon Hills, Uttarakhand',
    duration: '4 Nights / 5 Days',
    nightsDays: '4N / 5D',
    difficulty: 'Easy',
    altitude: '2,270 M (7,450 FT)',
    price: 8499,
    originalPrice: 10500,
    availableDates: ['01 Oct — 05 Oct', '15 Oct — 19 Oct', '29 Oct — 02 Nov', '12 Nov — 16 Nov'],
    seatsLeft: 5,
    totalSeats: 14,
    category: 'Mountains',
    ecoScore: 97,
    treesPlanted: 3,
    plasticSaved: 24,
    floraFauna: ['Himalayan Deodar', 'Himalayan Monal', 'Barking Deer'],
    ecoCertification: 'Himalayan Bio-Reserve Protector',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Beyond the tourist crowded mall road lies the pristine wilderness of Kumaon. Trek along pine-scented ridges from Naina Peak to Kilbury bird sanctuary, camp under starry Himalayan skies, and witness Trisul & Nanda Devi glowing at dawn.',
    tags: ['Himalayan Panorama', 'Pine Forests', 'Naina Peak Trek', 'Stargazing Camp'],
    included: [
      'Expedition SUV transfers from Kathgodam/Delhi & back',
      'Cozy mountain camp & heritage colonial cottage stays',
      'Daily curated mountain meals featuring Kumaoni dishes (Bhatt ki Churkani)',
      'Local naturalist guides for Himalayan birding & trails',
      'Boating across serene Sattal emerald lakes'
    ],
    notIncluded: ['Train/flight tickets to Delhi/Kathgodam', 'Personal shopping'],
    carryList: [
      { category: 'Warm Wear', items: ['Thermal innerwear, down jacket (-5°C rating), fleece gloves, woolen beanie'] },
      { category: 'Footwear', items: ['Comfortable trekking boots, 3 pairs woolen socks'] }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kumaon Foothills & Pine Trail Walk',
        description: 'Meet in Kathgodam / Delhi. Ascend winding Himalayan roads through Bhimtal. Check into our pine forest ridge camp. Afternoon nature stroll.',
        mealsIncluded: ['Dinner'],
        keyHighlights: ['Crisp mountain air', 'Bonfire with Pahadi folk music']
      },
      {
        day: 2,
        title: 'Naina Peak (China Peak) Alpine Summit Hike',
        description: 'Trek through thick oak and rhododendron forest to reach Naina Peak at 2,615m. 360-degree panorama of snow-capped Tibetan border peaks.',
        mealsIncluded: ['Breakfast', 'Packed Ridge Lunch', 'Hot Dinner'],
        keyHighlights: ['Highest point of Nainital', 'Trisul & Nanda Kot peaks view']
      },
      {
        day: 3,
        title: 'Kilbury Deep Woods & Bird Watching Expedition',
        description: 'Early morning expedition into Kilbury bird sanctuary with spotting scopes. Spot Himalayan Monal, laughingthrushes, and barking deer.',
        mealsIncluded: ['Breakfast', 'Lunch', 'Campfire Dinner'],
        keyHighlights: ['Himalayan wildlife', 'Forest tea picnic']
      },
      {
        day: 4,
        title: 'Sattal Seven Lakes Kayak & Wild Camp',
        description: 'Explore the interconnected emerald lakes of Sattal. Paddle across calm waters, hidden waterfall dip, and starlit open sky camp.',
        mealsIncluded: ['Breakfast', 'Lunch', 'Barbecue Dinner'],
        keyHighlights: ['Wild lake swim', 'Milky Way photography workshop']
      },
      {
        day: 5,
        title: 'Sunrise Ridge & Descent to Kathgodam',
        description: 'Final sunrise over the misty valleys. Souvenir tea tasting, farewell community circle, and descent to Kathgodam railway station.',
        mealsIncluded: ['Breakfast', 'Lunch'],
        keyHighlights: ['Himalayan tea tasting', 'Drop-off']
      }
    ],
    meetingPoints: [
      { city: 'Delhi', pickupLocation: 'Kashmere Gate Metro Station Gate 1', pickupTime: '09:00 PM' },
      { city: 'Kathgodam', pickupLocation: 'Kathgodam Railway Station Exit', pickupTime: '06:00 AM' }
    ],
    faqs: [
      {
        question: 'Will we see snow?',
        answer: 'From late October to February, high ridgelines receive snowfall, while crisp clear weather offers unobstructed views of greater Himalayan snow peaks.'
      }
    ]
  },
  {
    id: 'secret-waterfall-trail',
    title: 'SECRET WATERFALL',
    subtitle: 'THE TRAIL LESS TRAVELLED',
    region: 'Sahyadri Valleys',
    location: 'Tamhini Ghat, Maharashtra',
    duration: '2 Nights / 2 Days',
    nightsDays: '2N / 2D',
    difficulty: 'Easy',
    altitude: '650 M (2,130 FT)',
    price: 2999,
    originalPrice: 3800,
    availableDates: ['21 Sept — 22 Sept', '28 Sept — 29 Sept', '05 Oct — 06 Oct', '12 Oct — 13 Oct'],
    seatsLeft: 3,
    totalSeats: 15,
    category: 'Waterfall',
    ecoScore: 99,
    treesPlanted: 1,
    plasticSaved: 12,
    floraFauna: ['Malabar Gliding Frog', 'Wild Impatiens', 'Emerald Damselflies'],
    ecoCertification: 'Pristine Riparian Habitat Guardian',
    heroImage: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1920&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Hidden deep inside dense monsoon rainforests, this undisclosed cascade plunges into a secluded turquoise plunge pool. Cross babbling jungle streams on foot, walk under canopy vines, and plunge into nature’s most pristine infinity pool.',
    tags: ['Turquoise Pool', 'Stream Crossings', 'Rainforest Trek', 'Wild Plunge'],
    included: [
      'AC bus pickup from Mumbai & Pune',
      'Riverside camp accommodation with waterproof tents',
      'All local organic meals & hot snacks',
      'Life jackets for safe swimming in the plunge pool',
      'Wilderness leads with safety throw-ropes'
    ],
    notIncluded: ['Personal dry bags', 'Commercial photography gear insurance'],
    carryList: [
      { category: 'Water Gear', items: ['Quick dry shorts, spare clothing in waterproof ziplock bags, water shoes or floaters with grip'] },
      { category: 'Essentials', items: ['Waterproof phone pouch, insect repellent, 2L water'] }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Jungle Trek & Plunge Pool Discovery',
        description: 'Morning pickup from city hubs. Arrive at the trailhead shrouded in mist. Hike 4 km through lush jungle trails, 3 crystal stream crossings, arriving at the roaring amphitheater of the hidden falls.',
        mealsIncluded: ['Hot Poha Breakfast', 'Stream-side Packed Lunch', 'Tribal Dinner'],
        keyHighlights: ['Natural jacuzzi swimming', 'Canopy walk', 'Campfire under forest canopy']
      },
      {
        day: 2,
        title: 'Upstream Canyon Walk & Return',
        description: 'Sunrise bird watching, upstream bouldering to secondary cascade, relaxed community brunch, and return travel to cities.',
        mealsIncluded: ['Camp Breakfast', 'Traditional Lunch'],
        keyHighlights: ['Canyon photography', 'Drop-offs by 7 PM']
      }
    ],
    meetingPoints: [
      { city: 'Mumbai', pickupLocation: 'Vashi Plaza / Chembur Diamond Garden', pickupTime: '05:30 AM' },
      { city: 'Pune', pickupLocation: 'Chandni Chowk / Kothrud Stand', pickupTime: '06:15 AM' }
    ],
    faqs: [
      {
        question: 'Do I need to know how to swim?',
        answer: 'No! We provide high-buoyancy certified life jackets, and our trained leads are in the water with safety lines at all times.'
      }
    ]
  },
  {
    id: 'melghat-into-the-wild',
    title: 'MELGHAT',
    subtitle: 'INTO THE WILD',
    region: 'Satpura Tiger Reserve',
    location: 'Amravati, Maharashtra',
    duration: '3 Nights / 4 Days',
    nightsDays: '3N / 4D',
    difficulty: 'Moderate',
    altitude: '1,100 M (3,600 FT)',
    price: 6499,
    originalPrice: 8000,
    availableDates: ['02 Oct — 05 Oct', '16 Oct — 19 Oct', '06 Nov — 09 Nov', '20 Nov — 23 Nov'],
    seatsLeft: 6,
    totalSeats: 12,
    category: 'Safari',
    ecoScore: 100,
    treesPlanted: 4,
    plasticSaved: 28,
    floraFauna: ['Bengal Tiger', 'Sloth Bear', 'Forest Owlet', 'Ghost Tree'],
    ecoCertification: 'Tiger Corridor Conservation Partner',
    heroImage: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1920&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Venture into the raw teak forests of the Satpura mountain ranges. Melghat is a tiger sanctuary characterized by steep ravines, winding rivers, and indigenous Korku tribal culture. Track sloth bears, leopards, and flying squirrels on foot with tribal trackers.',
    tags: ['Tiger Reserve', 'Korku Tribal Trails', 'Starlight Jungle Camp', 'Night Safari'],
    included: [
      '4x4 Gypsy open-top safari drives (3 safaris)',
      'Forest department tented camp stay deep inside buffer zone',
      'Indigenous Korku tribal naturalist accompaniment',
      'All gourmet camp meals & evening barbecue',
      'Sanctuary permit and camera fees'
    ],
    notIncluded: ['Personal travel to Badnera/Nagpur junction', 'Alcoholic beverages'],
    carryList: [
      { category: 'Safari Wear', items: ['Earth-toned clothing (khaki, olive, brown - strictly no bright colors), sun hat, dust mask'] },
      { category: 'Optics', items: ['Binoculars (8x42 or 10x42 recommended), telephoto camera lens'] }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Entry into Satpura Buffer & Twilight River Walk',
        description: 'Assemble at Badnera/Nagpur. Scenic transfer into Melghat hills. Settle into eco-huts by Sipna river. Evening guided track looking for pugmarks.',
        mealsIncluded: ['Warm Lunch', 'Campfire Dinner'],
        keyHighlights: ['Pugmark cast demonstration', 'Korku tribal folk folklore']
      },
      {
        day: 2,
        title: 'Deep Core Safari & Chikhaldara Mist Point',
        description: 'Morning 5:30 AM open Gypsy safari through towering teak canopy. Afternoon ridge walk along Chikhaldara canyon and Hurricane Point.',
        mealsIncluded: ['Safari Breakfast', 'Lunch', 'Dinner'],
        keyHighlights: ['Sloth bear and leopard tracking', 'Canyon views']
      },
      {
        day: 3,
        title: 'Tribal Village Craft Trail & Night Patrol',
        description: 'Spend time learning organic farming with Korku villagers, sample wild honey, followed by an exhilarating nocturnal safari for civets and flying squirrels.',
        mealsIncluded: ['Breakfast', 'Tribal Feast', 'Barbecue Dinner'],
        keyHighlights: ['Ethical community immersion', 'Nocturnal wildlife']
      },
      {
        day: 4,
        title: 'Farewell Safari & Return Drive',
        description: 'Final early morning drive through the mist, breakfast in forest rest house, and transfer to railhead.',
        mealsIncluded: ['Breakfast', 'Farewell Lunch'],
        keyHighlights: ['Final birding records', 'Drop-off']
      }
    ],
    meetingPoints: [
      { city: 'Nagpur', pickupLocation: 'Nagpur Airport & Railway Station', pickupTime: '07:30 AM' },
      { city: 'Amravati / Badnera', pickupLocation: 'Badnera Junction Main Exit', pickupTime: '09:00 AM' }
    ],
    faqs: [
      {
        question: 'What animals can we expect to see?',
        answer: 'Melghat is home to Bengal tigers, Indian leopards, sloth bears, gaur (Indian bison), sambar, barking deer, flying squirrels, and over 250 species of birds.'
      }
    ]
  },
  {
    id: 'harishchandragad-cliff-of-cliffs',
    title: 'HARISHCHANDRAGAD',
    subtitle: 'THE CLIFF OF CLIFFS — KOKANKADA',
    region: 'Western Ghats',
    location: 'Ahmednagar, Maharashtra',
    duration: '2 Nights / 3 Days',
    nightsDays: '2N / 3D',
    difficulty: 'Challenging',
    altitude: '1,424 M (4,670 FT)',
    price: 3999,
    originalPrice: 4999,
    availableDates: ['19 Sept — 21 Sept', '26 Sept — 28 Sept', '10 Oct — 12 Oct', '17 Oct — 19 Oct'],
    seatsLeft: 2,
    totalSeats: 16,
    category: 'Trek',
    ecoScore: 98,
    treesPlanted: 2,
    plasticSaved: 16,
    floraFauna: ['Brocken Spectre Mist', 'Sonki Wildflower', 'Malabar Giant Squirrel'],
    ecoCertification: 'Ancient Biosphere Trail Sanctuary',
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Gaze into the staggering 1,800-foot concave drop of Kokankada — the dramatic cliff face resembling a cobra’s hood. Explore the ancient 6th-century Kedareshwar cave where a massive Shiva lingam sits submerged in ice-cold waters supported by a single ancient stone pillar.',
    tags: ['Kokankada Cliff', 'Kedareshwar Cave', 'Reverse Waterfall', 'Rock-cut Architecture'],
    included: [
      'Roundtrip transport from Mumbai/Pune',
      'Camp pitched near Kokankada cliff edge',
      'All local rustic meals & continuous hot chai',
      'Experienced mountaineers & first-aid equipment',
      'Heritage history guide for temple carvings'
    ],
    notIncluded: ['Personal trekking gear', 'Emergency transport outside itinerary'],
    carryList: [
      { category: 'Gear', items: ['Grippy hiking boots, headlamp, warm layers for night winds, 3L water capacity'] }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Night transit to Khireshwar & Dawn Ascent via Tolar Khind',
        description: 'Night journey from Mumbai/Pune. Ascend through the rocky passes of Tolar Khind, navigating rock-cut steps and steel chains.',
        mealsIncluded: ['Breakfast', 'Packed Lunch', 'Camp Dinner'],
        keyHighlights: ['Tolar Khind chain section', 'Ancient temples on the ridge']
      },
      {
        day: 2,
        title: 'Sunset Spectacle at Kokankada & Cave Exploration',
        description: 'Visit Kedareshwar cave and Pushkarni tank. Spend the afternoon marveling at the curved Kokankada overhang as sunset paints the Konkan plains.',
        mealsIncluded: ['Breakfast', 'Lunch', 'Bonfire Dinner'],
        keyHighlights: ['Circular rainbow phenomenon (Brocken spectre)', 'Cliffside camping']
      },
      {
        day: 3,
        title: 'Descent via Pachnai & Return',
        description: 'Gentle scenic descent through green meadows of Pachnai village. Warm lunch and return travel.',
        mealsIncluded: ['Breakfast', 'Village Thali Lunch'],
        keyHighlights: ['Pachnai stream walk', 'Safe drop-offs']
      }
    ],
    meetingPoints: [
      { city: 'Mumbai', pickupLocation: 'Dadar Asiad Bus Stand / Thane Majiwada', pickupTime: '10:00 PM' },
      { city: 'Pune', pickupLocation: 'Swargate / Shivaji Nagar', pickupTime: '10:30 PM' }
    ],
    faqs: [
      {
        question: 'What is the reverse waterfall phenomenon?',
        answer: 'During monsoon months, strong upward drafts of wind blowing against Kokankada blow the falling water backward straight into the air!'
      }
    ]
  }
];

export const DESTINATION_REGIONS: DestinationRegion[] = [
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    state: 'Sahyadri Range',
    tag: 'Cradle of Forts & Monsoons',
    journeysCount: 14,
    coordinates: { x: 34, y: 56 },
    description: 'Jagged basalt pinnacles, mist-laden plateaus, and medieval Maratha hill forts that pierce the skies. The spiritual home of monsoon trekking.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    elevation: '600m – 1,646m',
    bestSeason: 'July – February'
  },
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    state: 'Kumaon & Garhwal',
    tag: 'Land of Gods & High Ridges',
    journeysCount: 8,
    coordinates: { x: 42, y: 26 },
    description: 'Towering Himalayan giants, alpine meadows (bugyals), ancient deodar woodlands, and emerald glacial tarns.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    elevation: '1,800m – 4,200m',
    bestSeason: 'September – June'
  },
  {
    id: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    state: 'Western Himalayas',
    tag: 'High Passes & Pine Valleys',
    journeysCount: 7,
    coordinates: { x: 38, y: 19 },
    description: 'Rugged gorges, high mountain passes, apple orchards, and secluded trails winding through Spiti and Parvati valleys.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    elevation: '2,000m – 4,800m',
    bestSeason: 'May – October'
  },
  {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    state: 'Satpura & Vindhya',
    tag: 'Tiger Territory & Ancient Teak',
    journeysCount: 5,
    coordinates: { x: 48, y: 48 },
    description: 'Dense deciduous jungle, raw river canyons, tribal homelands, and one of the world’s most pristine tiger reserves in Melghat and Satpura.',
    image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=800&q=80',
    elevation: '400m – 1,350m',
    bestSeason: 'October – April'
  },
  {
    id: 'goa',
    name: 'Goa & Konkan',
    state: 'Konkan Coastline',
    tag: 'Secret Waterfalls & Cliff Trails',
    journeysCount: 4,
    coordinates: { x: 32, y: 72 },
    description: 'Far from crowded beaches, discover Netravali’s bubbling lakes, Dudhsagar trails, and isolated cliffside sea caves.',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    elevation: '0m – 600m',
    bestSeason: 'August – February'
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    state: 'Aravalli Range & Thar',
    tag: 'Oldest Mountains & Desert Starlight',
    journeysCount: 3,
    coordinates: { x: 28, y: 38 },
    description: 'Hike across the eroded ancient Aravalli folds, camp under pristine desert dunes, and explore forgotten hill palaces.',
    image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=80',
    elevation: '300m – 1,722m',
    bestSeason: 'November – March'
  }
];

export const HORIZONTAL_MOMENTS: HorizontalMoment[] = [
  {
    id: 'm1',
    stage: '01 / TREK',
    title: 'THE SILENT ASCENT',
    subtitle: 'Leaving the noise behind',
    description: 'Your boots strike wet earth and basalt steps. The forest wakes around you with the symphony of whistling thrushes and mountain wind.',
    altitude: '720 M',
    time: '05:30 AM',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'm2',
    stage: '02 / CAMP',
    title: 'SANCTUARY IN THE WILD',
    subtitle: 'A shelter under the sky',
    description: 'Setting up dome tents on a windswept plateau overlooking silver lakes and endless ridgelines as dusk casts deep indigo hues.',
    altitude: '1,150 M',
    time: '05:00 PM',
    image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'm3',
    stage: '03 / SUNSET',
    title: 'THE GOLDEN HORIZON',
    subtitle: 'Where earth dissolves into light',
    description: 'Sitting on the cliff edge with a cup of freshly brewed camp tea. The Sahyadri crags turn fiery amber as clouds catch the final solar rays.',
    altitude: '1,420 M',
    time: '06:45 PM',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'm4',
    stage: '04 / BONFIRE',
    title: 'STORIES & SPARKS',
    subtitle: 'Strangers becoming kin',
    description: 'Crackling teak logs send glowing embers into the cold mountain night. Shared laughter, acoustic melodies, and tales of past trails.',
    altitude: '1,150 M',
    time: '08:30 PM',
    image: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'm5',
    stage: '05 / WILDERNESS',
    title: 'THE STARRY OCEAN',
    subtitle: 'Infinity overhead',
    description: 'Far away from urban light pollution, the Milky Way core stretches crystal clear across the celestial dome. A profound cosmic stillness.',
    altitude: '1,300 M',
    time: '11:15 PM',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'm6',
    stage: '06 / SUMMIT',
    title: 'ABOVE THE CLOUDS',
    subtitle: 'The peak conquered',
    description: 'Standing at the iron temple of the highest pinnacle. An endless white sea of mist rolls beneath your feet like a silent ocean.',
    altitude: '1,646 M',
    time: '06:15 AM',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'm7',
    stage: '07 / MEMORY',
    title: 'ETCHED IN THE HEART',
    subtitle: 'Changed forever',
    description: 'You return home with mud on your boots, stories in your eyes, and a quiet strength that only the wilderness can bestow.',
    altitude: 'BASE',
    time: 'JOURNEY COMPLETE',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=85'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    caption: 'When you stand at 5,400 ft, every worry becomes a speck in the clouds. ⛰️ Kalsubai summit batch #44 conquering the ladder of dreams.',
    location: 'Kalsubai Peak, Maharashtra',
    likes: 2480,
    comments: 142,
    tag: '#KalsubaiSummit',
    isReel: true
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80',
    caption: 'The winds howling through the rock needle of Ratangad. Valley of wildflowers in full bloom this week! 🌸 Link in bio to book your seat.',
    location: 'Ratangad Fort, Western Ghats',
    likes: 3190,
    comments: 189,
    tag: '#NedheExperience'
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80',
    caption: 'We won’t geotag this one. Only those who walk the 4-hour jungle trail earn the right to swim in these emerald waters. 💧',
    location: 'Tamhini Jungle Trail',
    likes: 4510,
    comments: 312,
    tag: '#SecretWaterfall',
    isReel: true
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=80',
    caption: 'Million star hotel. No WiFi, but we promise you will find a much stronger connection. ⛺️ Join our weekend camp batch.',
    location: 'Bhandardara Lakeside',
    likes: 1980,
    comments: 94,
    tag: '#CampUnderStars'
  },
  {
    id: 'ig-5',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    caption: 'Nainital in autumn. Golden sunbeams cutting through cedar mist. Himalayan winter treks are officially open for booking! 🏔️',
    location: 'Naina Peak, Uttarakhand',
    likes: 3820,
    comments: 204,
    tag: '#HimalayanSeries'
  },
  {
    id: 'ig-6',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    caption: 'Standing at the 1,800 ft vertical drop of Kokankada. The clouds literally fly backwards here. Tag someone you’d take here! 🦅',
    location: 'Harishchandragad, Maharashtra',
    likes: 5240,
    comments: 420,
    tag: '#Kokankada',
    isReel: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'The Great Ladder Ascent',
    location: 'Kalsubai Peak, 1,646m',
    category: 'Sahyadri Treks',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85',
    ratio: 'portrait',
    elevation: '1,646 M',
    date: 'Monsoon Expedition'
  },
  {
    id: 'g2',
    title: 'Campfire Harmonies',
    location: 'Ratanwadi Valley',
    category: 'Campfire Nights',
    image: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=1400&q=85',
    ratio: 'landscape',
    elevation: '1,100 M',
    date: 'Autumn Trail'
  },
  {
    id: 'g3',
    title: 'Emerald Plunge Pool',
    location: 'Tamhini Canyon',
    category: 'Waterfalls',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=85',
    ratio: 'tall vertical',
    elevation: '620 M',
    date: 'Monsoon'
  },
  {
    id: 'g4',
    title: 'Himalayan Ridge Line',
    location: 'Kumaon Hills, Nainital',
    category: 'Himalayan Trails',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85',
    ratio: 'panoramic',
    elevation: '2,615 M',
    date: 'Autumn Frost'
  },
  {
    id: 'g5',
    title: 'The Eye of the Needle',
    location: 'Ratangad Fort',
    category: 'Sahyadri Treks',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1000&q=85',
    ratio: 'square',
    elevation: '1,297 M',
    date: 'Flower Season'
  },
  {
    id: 'g6',
    title: 'Solitude on the Edge',
    location: 'Kokankada Amphitheater',
    category: 'Sahyadri Treks',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85',
    ratio: 'landscape',
    elevation: '1,424 M',
    date: 'Winter Clear'
  },
  {
    id: 'g7',
    title: 'Teak Forest Wildlife Track',
    location: 'Melghat Tiger Reserve',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=85',
    ratio: 'portrait',
    elevation: '900 M',
    date: 'Winter Safari'
  },
  {
    id: 'g8',
    title: 'Starlight over Pitch Tents',
    location: 'Arthur Lake Plateau',
    category: 'Campfire Nights',
    image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=85',
    ratio: 'square',
    elevation: '850 M',
    date: 'Dark Sky Batch'
  }
];

export const TRAVELER_STORIES: Story[] = [
  {
    id: 's1',
    author: 'Aarav Deshmukh',
    authorRole: 'Solo Trekker & Architect, Pune',
    location: 'Pune',
    destination: 'Kalsubai Peak Expedition',
    quote: 'WE CAME FOR THE TREK. WE LEFT WITH MEMORIES AND LIFELONG FRIENDS.',
    fullStory: 'I was hesitant to join a trek alone. But from the first midnight chai at Bari village to holding hands on the steep iron ladder in dense mist, Parikrama made us feel like an expedition family. Reaching the highest peak of Maharashtra as dawn broke over a sea of clouds is something I will carry with me forever.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    trekDate: 'September 2026',
    photosCount: 64
  },
  {
    id: 's2',
    author: 'Meera Iyer',
    authorRole: 'Wildlife Photographer, Mumbai',
    location: 'Mumbai',
    destination: 'Melghat Satpura Expedition',
    quote: 'PARIKRAMA DOES NOT DO TOURISM. THEY HONOR THE WILD.',
    fullStory: 'The knowledge of their local Korku tribal guides was breathtaking. We tracked a female leopard’s fresh pugmarks for two miles along a dry riverbed, and spent evenings by the fire hearing indigenous forest folklore that no travel guide book could ever teach you.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    trekDate: 'August 2026',
    photosCount: 112
  },
  {
    id: 's3',
    author: 'Rohan & Tanya Sen',
    authorRole: 'Adventure Couple, Delhi',
    location: 'Delhi',
    destination: 'Nainital Kumaon High Ridges',
    quote: 'THE MOST AUTHENTIC HIMALAYAN EXPERIENCE WE HAVE EVER HAD.',
    fullStory: 'Forget the crowded boat ride in town. Parikrama took us through hidden deodar trails, remote Sattal pine camps, and early morning ridgelines where Nanda Devi glowed pink in the morning sun. Zero rush, zero plastic, pure wilderness.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    trekDate: 'October 2026',
    photosCount: 88
  }
];

export const COMMUNITY_STATS = [
  { label: 'EXPLORERS', value: 1250, suffix: '+', desc: 'Adventurers guided into the wild' },
  { label: 'JOURNEYS', value: 65, suffix: '+', desc: 'Curated expeditions executed' },
  { label: 'DESTINATIONS', value: 24, suffix: '+', desc: 'Remote peaks, canyons & sanctuaries' },
  { label: 'STORIES', value: 150, suffix: '+', desc: 'Unforgettable documentary memories' }
];

export const WHY_FEATURES = [
  {
    number: '01',
    title: 'CURATED JOURNEYS',
    subtitle: 'No generic sightseeing or packed tour buses',
    desc: 'Every expedition is reconnoitred by experienced mountaineers. We scout secret trails, hidden water pools, and remote camps away from commercial crowds.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
  },
  {
    number: '02',
    title: 'LOCAL KNOWLEDGE',
    subtitle: 'Deeply rooted in tribal & village communities',
    desc: 'We collaborate directly with local mountain villagers, providing sustainable income and gaining intimate insights into terrain, folklore, and organic local meals.',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80'
  },
  {
    number: '03',
    title: 'SAFETY FIRST',
    subtitle: 'Certified Wilderness First Responders on every trek',
    desc: 'Our leads hold certified mountaineering institute accreditations. We carry technical safety lines, comprehensive trauma kits, oximeters, and GPS trail telemetry.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'
  },
  {
    number: '04',
    title: 'SMALL GROUPS',
    subtitle: 'Intimate batches capped at 14–18 explorers',
    desc: 'We reject massive 50-person herds. Small groups foster authentic camaraderie, lower environmental impact, and give every trekker personalized attention.',
    image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=80'
  },
  {
    number: '05',
    title: 'AUTHENTIC TRAILS',
    subtitle: 'Off-beat ridgelines and untouched sanctuaries',
    desc: 'From the natural rock window of Ratangad to the tiger ravines of Melghat, we guide you where nature is still untamed, raw, and spiritually commanding.',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80'
  },
  {
    number: '06',
    title: 'RESPONSIBLE TRAVEL',
    subtitle: 'Strict Leave No Trace & carbon mindful ethics',
    desc: 'We clean up trails on every return journey. No single-use plastic, respect for local habitats, and carbon-offset contributions to local conservation projects.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
  }
];
