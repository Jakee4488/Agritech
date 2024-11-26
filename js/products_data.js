// js/products_data.js

const products = [
    {
        title: "Fruits",
        icon: "fas fa-apple-alt",
        category: "Nature’s sweetest offerings, fresh and juicy.",
        features: [
            "Freshly Harvested",
            "Export Quality",
            "Organic Options Available"
        ],
        backgroundImage: "../assets/images/fruits.jpg",
        products: [
            {
                id: "kashmiri-apples",
                name: "Kashmiri Apples",
                shortDescription: "Crisp and flavorful apples nurtured in the pristine orchards of Jammu and Kashmir.",
                detailedDescription: "Grown in high-altitude regions with minimal pesticide usage. Handpicked for quality, these apples offer a perfect balance of sweetness and tartness.",
                image: "assets/images/frutis/apple.jpg",
                category: "Fruits"
            },
            {
                id: "assamese-oranges",
                name: "Assamese Oranges",
                shortDescription: "Juicy and vibrant oranges from the lush orchards of Assam, harvested sustainably.",
                detailedDescription: "Rich in Vitamin C, these oranges are grown using eco-friendly farming practices ensuring seasonal freshness and exceptional flavor.",
                image: "assets/images/frutis/oranges.jpg",
                category: "Fruits"
            },
            {
                id: "hyderabadi-grapes",
                name: "Hyderabadi Grapes",
                shortDescription: "Sweet and succulent grapes cultivated in the fertile soils of Hyderabad.",
                detailedDescription: "Water-efficient irrigation and the use of organic fertilizers result in export-grade quality grapes with a rich sugar content.",
                image: "assets/images/frutis/grapes.jpg",
                category: "Fruits"
            },
            {
                id: "goan-pineapples",
                name: "Goan Pineapples",
                shortDescription: "Tropical pineapples from Goa, grown with respect for nature and local ecosystems.",
                detailedDescription: "No synthetic chemicals are used in the cultivation process, ensuring sustainably harvested pineapples bursting with flavor.",
                image: "assets/images/frutis/pineapple.jpg",
                category: "Fruits"
            },
            {
                id: "coorg-bananas",
                name: "Coorg Bananas",
                shortDescription: "Creamy and rich bananas from the verdant plantations of Coorg.",
                detailedDescription: "Eco-friendly cultivation methods and high potassium content make these freshly harvested bananas a nutritious choice.",
                image: "assets/images/frutis/banana.jpg",
                category: "Fruits"
            },
            {
                id: "kanyakumari-papayas",
                name: "Kanyakumari Papayas",
                shortDescription: "Sweet and buttery papayas from the southern tip of India, grown organically.",
                detailedDescription: "Pesticide-free farming ensures rich in antioxidants and locally sourced papayas with a smooth and sweet taste.",
                image: "assets/images/frutis/papaya.jpg",
                category: "Fruits"
            },
            {
                id: "punjab-guavas",
                name: "Punjab Guavas",
                shortDescription: "Fragrant and fiber-rich guavas from the fertile lands of Punjab.",
                detailedDescription: "Sustainable farming practices result in high vitamin content guavas, handpicked for ripeness to ensure the best quality.",
                image: "assets/images/frutis/guava.jpg",
                category: "Fruits"
            },
            {
                id: "maharashtrian-mangoes",
                name: "Maharashtrian Mangoes",
                shortDescription: "Luscious mangoes from Maharashtra, offering a taste of tradition and purity.",
                detailedDescription: "Rich in flavor and sustainably harvested, these diverse varieties of mangoes provide a premium selection for mango enthusiasts.",
                image: "assets/images/frutis/mango.jpg",
                category: "Fruits"
            },
            {
                id: "rajasthani-pomegranates",
                name: "Rajasthani Pomegranates",
                shortDescription: "Juicy and tangy pomegranates from the arid regions of Rajasthan.",
                detailedDescription: "Drought-resistant farming techniques and minimal water usage result in high antioxidant levels in these flavorful pomegranates.",
                image: "assets/images/frutis/pomegranate.jpg",
                category: "Fruits"
            },
            {
                id: "uttarakhand-plums",
                name: "Uttarakhand Plums",
                shortDescription: "Delicious plums from the hilly terrains of Uttarakhand, grown sustainably.",
                detailedDescription: "Organic farming methods and handpicked for quality ensure rich in vitamins, these plums are perfect for a healthy diet.",
                image: "assets/images/frutis/plumns.jpg",
                category: "Fruits"
            },
            {
                id: "tamil-nadu-lychees",
                name: "Tamil Nadu Lychees",
                shortDescription: "Exquisite lychees from Tamil Nadu, known for their sweet and aromatic flavor.",
                detailedDescription: "Eco-friendly cultivation and limited pesticide use make these freshly harvested lychees a delightful and healthy treat.",
                image: "assets/images/frutis/lychees.jpg",
                category: "Fruits"
            },
            {
                id: "kerala-jackfruits",
                name: "Kerala Jackfruits",
                shortDescription: "Massive and nutrient-packed jackfruits from the lush landscapes of Kerala.",
                detailedDescription: "Sustainable harvesting practices and high dietary fiber content make these jackfruits versatile for various culinary uses.",
                image: "assets/images/frutis/jackfruit.jpg",
                category: "Fruits"
            },
            {
                id: "custard-apple",
                name: "Custard Apple",
                shortDescription: "Creamy and flavorful custard apples from the lush orchards of India.",
                detailedDescription: "Grown using organic practices, these custard apples are rich in natural sweetness and packed with essential nutrients. A perfect tropical delight for any occasion.",
                image: "assets/images/frutis/custard_apple.jpg",
                category: "Fruits"
            },            
            {
                id: "andhra-pradesh-watermelons",
                name: "Andhra Pradesh Watermelons",
                shortDescription: "Refreshing watermelons from Andhra Pradesh, grown with care for the environment.",
                detailedDescription: "Sustainable irrigation and eco-friendly packaging, along with seedless varieties, make these watermelons perfect for hydrating and healthy snacking.",
                image: "assets/images/frutis/watermelon.jpg",
                category: "Fruits"
            },
            {
                id: "himachali-strawberries",
                name: "Himachali Strawberries",
                shortDescription: "Bright and sweet strawberries from the cool valleys of Himachal Pradesh.",
                detailedDescription: "Organic cultivation and handpicked for freshness ensure these strawberries are rich in antioxidants, perfect for a healthy lifestyle.",
                image: "assets/images/frutis/strawberry.jpg",
                category: "Fruits"
            }
        ]
    },
    {
        title: "Organic Fruits",
        icon: "fas fa-leaf",
        category: "Wholesome, pesticide-free goodness.",
        features: [
            "Certified Organic",
            "Sustainably Harvested",
            "Pesticide-Free Farming"
        ],
        backgroundImage: "../assets/images/organic_fruits.jpg",
        products: [
            {
                id: "organic-kinnaur-apples",
                name: "Organic Kinnaur Apples",
                shortDescription: "Premium organic apples from Kinnaur, cultivated without pesticides for pure taste.",
                detailedDescription: "Certified organic and sustainably harvested, these crisp and juicy apples are grown in harmony with nature, ensuring a pure and refreshing flavor.",
                image: "assets/images/frutis/apple.jpg",
                category: "Organic Fruits"
            },
            {
                id: "organic-nagpur-oranges",
                name: "Organic Nagpur Oranges",
                shortDescription: "Vibrant organic oranges from Nagpur, ensuring natural sweetness and quality.",
                detailedDescription: "Grown with organic practices, these oranges are rich in essential nutrients and come in environmentally friendly packaging, providing a naturally sweet and high-quality product.",
                image: "assets/images/frutis/oranges.jpg",
                category: "Organic Fruits"
            },
            {
                id: "organic-nashik-grapes",
                name: "Organic Nashik Grapes",
                shortDescription: "Premium organic grapes from Nashik, nurtured with eco-friendly methods.",
                detailedDescription: "No chemical pesticides are used in the cultivation of these organic grapes, resulting in sustainably farmed, sweet grapes with a high sugar content.",
                image: "assets/images/frutis/grapes.jpg",
                category: "Organic Fruits"
            },
            {
                id: "organic-kerala-bananas",
                name: "Organic Kerala Bananas",
                shortDescription: "Handpicked organic bananas from Kerala, offering natural goodness.",
                detailedDescription: "Certified organic farming ensures that these bananas are rich in vitamins and grown with eco-friendly methods, providing a fresh and healthy choice.",
                image: "assets/images/frutis/banana.jpg",
                category: "Organic Fruits"
            },
            {
                id: "organic-tamil-nadu-mangoes",
                name: "Organic Tamil Nadu Mangoes",
                shortDescription: "Delicious organic mangoes from Tamil Nadu, grown with care for the environment.",
                detailedDescription: "Pesticide-free farming, handpicked for flavor, and eco-friendly packaging ensure that these organic mangoes are both delicious and environmentally responsible.",
                image: "assets/images/frutis/mango.jpg",
                category: "Organic Fruits"
            },
            {
                id: "organic-maharashtra-figs",
                name: "Organic Maharashtra Figs",
                shortDescription: "Exquisite organic figs from Maharashtra, harvested sustainably for premium quality.",
                detailedDescription: "Organic certification and rich in fiber, these sustainably sourced figs are perfect for a healthy diet and gourmet culinary creations.",
                image: "assets/images/frutis/fig.jpg",
                category: "Organic Fruits"
            },
            {
                id: "organic-sikkim-apples",
                name: "Organic Sikkim Apples",
                shortDescription: "Crisp organic apples from Sikkim, cultivated in harmony with nature.",
                detailedDescription: "Pesticide-free farming and handpicked for quality ensure these organic apples are sustainably harvested, offering a fresh and pure taste.",
                image: "assets/images/frutis/apples.jpg",
                category: "Organic Fruits"
            },
            {
                id: "organic-gujarat-custard-apples",
                name: "Organic Gujarat Custard Apples",
                shortDescription: "Creamy custard apples from Gujarat, grown organically for a sweet and smooth taste.",
                detailedDescription: "Organic farming practices and rich in vitamins make these custard apples a sustainable and delicious choice for health-conscious consumers.",
                image: "assets/images/frutis/custard_apple.jpg",
                category: "Organic Fruits"
            },
            {
                id: "organic-odisha-bananas",
                name: "Organic Odisha Bananas",
                shortDescription: "Sweet organic bananas from Odisha, cultivated with eco-friendly methods.",
                detailedDescription: "Certified organic bananas with high potassium content are freshly harvested using sustainable practices, ensuring both taste and health benefits.",
                image: "assets/images/frutis/banana.jpg",
                category: "Organic Fruits"
            },
            {
                id: "organic-himachal-pradesh-cherries",
                name: "Organic Himachal Pradesh Cherries",
                shortDescription: "Juicy organic cherries from Himachal Pradesh, offering a burst of natural sweetness.",
                detailedDescription: "Organic certification and handpicked for ripeness ensure that these cherries are rich in antioxidants and sustainably harvested.",
                image: "assets/images/frutis/cherries.jpg",
                category: "Organic Fruits"
            },
            {
                id: "organic-punjab-peaches",
                name: "Organic Punjab Peaches",
                shortDescription: "Succulent organic peaches from Punjab, grown without synthetic chemicals.",
                detailedDescription: "Sustainable farming and freshly harvested practices result in organically grown peaches that are rich in vitamins and perfect for fresh consumption.",
                image: "assets/images/frutis/peaches.jpg",
                category: "Organic Fruits"
            },
            {
                id: "organic-karnataka-papayas",
                name: "Organic Karnataka Papayas",
                shortDescription: "Delicious organic papayas from Karnataka, nurtured with sustainable practices.",
                detailedDescription: "Pesticide-free cultivation and high antioxidant content make these organically grown papayas a healthy and environmentally friendly choice.",
                image: "assets/images/frutis/papaya.jpg",
                category: "Organic Fruits"
            },
            {
                id: "organic-bihar-guavas",
                name: "Organic Bihar Guavas",
                shortDescription: "Fragrant organic guavas from Bihar, offering natural sweetness and fiber.",
                detailedDescription: "Certified organic guavas, sustainably harvested and rich in vitamins, provide a nutritious and tasty option for health-conscious individuals.",
                image: "assets/images/frutis/guava.jpg",
                category: "Organic Fruits"
            },
            {
                id: "organic-rajasthan-figs",
                name: "Organic Rajasthan Figs",
                shortDescription: "Tangy organic figs from Rajasthan, grown in arid climates with sustainable methods.",
                detailedDescription: "Organic farming practices and rich in dietary fiber make these figs from Rajasthan a healthy and sustainably sourced fruit option.",
                image: "assets/images/frutis/fig.jpg",
                category: "Organic Fruits"
            },
            {
                id: "organic-west-bengal-mangoes",
                name: "Organic West Bengal Mangoes",
                shortDescription: "Sweet and juicy organic mangoes from West Bengal, cultivated with care.",
                detailedDescription: "Pesticide-free farming, handpicked for flavor, and eco-friendly packaging ensure that these organic mangoes are both delicious and environmentally responsible.",
                image: "assets/images/frutis/mango.jpg",
                category: "Organic Fruits"
            }
        ]
    },
    {
        title: "Vegetables",
        icon: "fas fa-carrot",
        category: "Farm-fresh greens for every plate.",
        features: [
            "Seasonal & Year-Round Availability",
            "Export Grade Quality",
            "Environmentally Friendly Packaging"
        ],
        backgroundImage: "assets/images/allvegetables.jpg",
        products: [
            {
                id: "punjab-potatoes",
                name: "Punjab Potatoes",
                shortDescription: "Starchy and versatile potatoes from the fertile fields of Punjab.",
                detailedDescription: "High yield varieties with minimal pesticide use, these fresh potatoes are harvested at peak freshness, ensuring excellent quality for all your culinary needs.",
                image: "assets/images/Vegetables/Potatoes.jpg",
                category: "Vegetables"
            },
            {
                id: "madhya-pradesh-onions",
                name: "Madhya Pradesh Onions",
                shortDescription: "Flavorful onions from Madhya Pradesh, perfect for every culinary need.",
                detailedDescription: "Sustainable farming practices ensure long shelf-life and rich flavor in these onions, freshly harvested for superior quality.",
                image: "assets/images/Vegetables/onions.jpg",
                category: "Vegetables"
            },
            {
                id: "uttar-pradesh-tomatoes",
                name: "Uttar Pradesh Tomatoes",
                shortDescription: "Juicy and ripe tomatoes from Uttar Pradesh, cultivated with care.",
                detailedDescription: "Eco-friendly farming methods and high vitamin C content make these tomatoes freshly picked and perfect for a variety of healthy and delicious dishes.",
                image: "assets/images/Vegetables/Tomatoes.jpg",
                category: "Vegetables"
            },
            {
                id: "gujarat-okra",
                name: "Gujarat Okra (Lady's Finger)",
                shortDescription: "Tender and crisp okra from Gujarat, ideal for a variety of dishes.",
                detailedDescription: "Sustainable cultivation and minimal water usage result in rich dietary fiber okra, perfect for healthy and delicious meals.",
                image: "assets/images/Vegetables/Okra.jpg",
                category: "Vegetables"
            },
            {
                id: "karnataka-brinjals",
                name: "Karnataka Brinjals (Eggplants)",
                shortDescription: "Smooth and glossy brinjals from Karnataka, perfect for diverse recipes.",
                detailedDescription: "Organic farming options and freshly harvested brinjals are high in antioxidants, making them a nutritious addition to any meal.",
                image: "assets/images/Vegetables/Brinjal.png",
                category: "Vegetables"
            },
            {
                id: "bihar-cauliflower",
                name: "Bihar Cauliflower",
                shortDescription: "White and crunchy cauliflower from Bihar, a staple in many households.",
                detailedDescription: "Sustainable farming practices and minimal pesticide use ensure that these freshly picked cauliflowers are perfect for a variety of culinary uses.",
                image: "assets/images/Vegetables/cauliflower.jpg",
                category: "Vegetables"
            },
            {
                id: "west-bengal-cabbages",
                name: "West Bengal Cabbages",
                shortDescription: "Crisp and green cabbages from West Bengal, perfect for salads and stir-fries.",
                detailedDescription: "Eco-friendly cultivation and high in vitamins K and C, these freshly harvested cabbages are ideal for healthy and flavorful meals.",
                image: "assets/images/Vegetables/cabbages.jpg",
                category: "Vegetables"
            },
            {
                id: "tamil-nadu-beans",
                name: "Tamil Nadu Beans",
                shortDescription: "Fresh green beans from Tamil Nadu, perfect for healthy meals.",
                detailedDescription: "Sustainable farming and rich in protein, these handpicked green beans are fresh and nutritious for a variety of dishes.",
                image: "assets/images/Vegetables/beans.jpg",
                category: "Vegetables"
            },
            {
                id: "himachal-pradesh-carrots",
                name: "Himachal Pradesh Carrots",
                shortDescription: "Sweet and crunchy carrots from Himachal Pradesh, grown in cool climates.",
                detailedDescription: "Organic farming methods and high in beta-carotene, these freshly harvested carrots are perfect for a healthy diet.",
                image: "assets/images/Vegetables/carrots.jpg",
                category: "Vegetables"
            },
            {
                id: "rajasthan-spinach",
                name: "Rajasthan Spinach",
                shortDescription: "Nutritious spinach from Rajasthan, cultivated with minimal resources.",
                detailedDescription: "Drought-resistant farming and high in iron and calcium make this sustainably harvested spinach a healthy choice for your meals.",
                image: "assets/images/Vegetables/spinach.jpg",
                category: "Vegetables"
            },
            {
                id: "sikkim-green-peas",
                name: "Sikkim Green Peas",
                shortDescription: "Tender green peas from Sikkim, perfect for soups and side dishes.",
                detailedDescription: "Organic farming methods and rich in protein, these sustainably harvested green peas are ideal for a variety of culinary uses.",
                image: "assets/images/Vegetables/Green-peas.jpg",
                category: "Vegetables"
            },
            {
                id: "andhra-pradesh-cucumber",
                name: "Andhra Pradesh Cucumber",
                shortDescription: "Refreshing cucumbers from Andhra Pradesh, ideal for salads and beverages.",
                detailedDescription: "Eco-friendly cultivation and high water content make these freshly harvested cucumbers perfect for hydrating and healthy recipes.",
                image: "assets/images/Vegetables/cucumbers.jpg",
                category: "Vegetables"
            },
            {
                id: "jharkhand-pumpkins",
                name: "Jharkhand Pumpkins",
                shortDescription: "Versatile pumpkins from Jharkhand, perfect for savory and sweet dishes.",
                detailedDescription: "Sustainable farming practices and rich in vitamins A and C ensure these freshly picked pumpkins are both nutritious and delicious.",
                image: "assets/images/Vegetables/pumpkins.jpg",
                category: "Vegetables"
            },
            {
                id: "mizoram-bell-peppers",
                name: "Mizoram Bell Peppers",
                shortDescription: "Colorful bell peppers from Mizoram, adding vibrant flavors to your meals.",
                detailedDescription: "Organic farming options and rich in antioxidants make these freshly harvested bell peppers a healthy and flavorful addition to any dish.",
                image: "assets/images/Vegetables/bellpeppers.jpg",
                category: "Vegetables"
            },
            {
                id: "chhattisgarh-bitter-gourd",
                name: "Chhattisgarh Bitter Gourd",
                shortDescription: "Health-packed bitter gourd from Chhattisgarh, known for its medicinal benefits.",
                detailedDescription: "Sustainable cultivation and rich in vitamins and minerals, these freshly picked bitter gourds are perfect for a healthy and nutritious diet.",
                image: "assets/images/Vegetables/bitter-gourd.jpg",
                category: "Vegetables"
            }
        ]
    },
    {
        title: "Organic Vegetables",
        icon: "fas fa-seedling",
        category: "Eco-friendly and pesticide-free vegetables.",
        features: [
            "Certified Organic",
            "Sustainably Harvested",
            "Pesticide-Free Farming"
        ],
        backgroundImage: "assets/images/organicvegetables.jpg",
        products: [
            {
                id: "organic-punjab-potatoes",
                name: "Organic Punjab Potatoes",
                shortDescription: "Organic potatoes from Punjab, cultivated without synthetic pesticides for pure taste.",
                detailedDescription: "Certified organic and sustainable farming practices ensure these freshly harvested potatoes are free from synthetic pesticides, offering a pure and delicious flavor.",
                image: "assets/images/Vegetables/potatoes.jpg",
                category: "Organic Vegetables"
            },
            {
                id: "organic-madhya-pradesh-onions",
                name: "Organic Madhya Pradesh Onions",
                shortDescription: "Flavorful organic onions from Madhya Pradesh, grown with natural methods.",
                detailedDescription: "Pesticide-free cultivation and long shelf-life practices make these organic onions a rich and flavorful addition to your kitchen.",
                image: "assets/images/Vegetables/onions.jpg",
                category: "Organic Vegetables"
            },
            {
                id: "organic-uttar-pradesh-tomatoes",
                name: "Organic Uttar Pradesh Tomatoes",
                shortDescription: "Juicy organic tomatoes from Uttar Pradesh, ensuring natural sweetness and quality.",
                detailedDescription: "Grown organically with high vitamin C content and freshly picked, these tomatoes are perfect for a variety of healthy and delicious recipes.",
                image: "assets/images/Vegetables/tomatoes.jpg",
                category: "Organic Vegetables"
            },
            {
                id: "organic-gujarat-okra",
                name: "Organic Gujarat Okra (Lady's Finger)",
                shortDescription: "Tender organic okra from Gujarat, perfect for a variety of dishes.",
                detailedDescription: "Certified organic and minimally water-used cultivation results in rich dietary fiber okra, sustainably harvested for premium quality.",
                image: "assets/images/Vegetables/okra.jpg",
                category: "Organic Vegetables"
            },
            {
                id: "organic-karnataka-brinjals",
                name: "Organic Karnataka Brinjals (Eggplants)",
                shortDescription: "Glossy organic brinjals from Karnataka, cultivated sustainably for premium quality.",
                detailedDescription: "Pesticide-free farming and freshly harvested practices make these organic brinjals high in antioxidants and perfect for a healthy diet.",
                image: "assets/images/Vegetables/brinjal.png",
                category: "Organic Vegetables"
            },
            {
                id: "organic-bihar-cauliflower",
                name: "Organic Bihar Cauliflower",
                shortDescription: "White organic cauliflower from Bihar, a staple in many households.",
                detailedDescription: "Certified organic and sustainable farming practices ensure these freshly picked cauliflowers are free from harmful chemicals, perfect for a variety of culinary uses.",
                image: "assets/images/Vegetables/cauliflower.jpg",
                category: "Organic Vegetables"
            },
            {
                id: "organic-west-bengal-cabbages",
                name: "Organic West Bengal Cabbages",
                shortDescription: "Crisp organic cabbages from West Bengal, perfect for salads and stir-fries.",
                detailedDescription: "Eco-friendly cultivation and high in vitamins K and C, these freshly harvested organic cabbages are ideal for healthy and flavorful meals.",
                image: "assets/images/Vegetables/cabbages.jpg",
                category: "Organic Vegetables"
            },
            {
                id: "organic-tamil-nadu-beans",
                name: "Organic Tamil Nadu Beans",
                shortDescription: "Fresh organic green beans from Tamil Nadu, perfect for healthy meals.",
                detailedDescription: "Certified organic and rich in protein, these handpicked green beans are fresh and nutritious for a variety of dishes.",
                image: "assets/images/Vegetables/beans.jpg",
                category: "Organic Vegetables"
            },
            {
                id: "organic-himachal-pradesh-carrots",
                name: "Organic Himachal Pradesh Carrots",
                shortDescription: "Sweet organic carrots from Himachal Pradesh, grown in cool climates.",
                detailedDescription: "Pesticide-free farming and high in beta-carotene make these freshly harvested organic carrots a healthy and delicious choice for your diet.",
                image: "assets/images/Vegetables/carrots.jpg",
                category: "Organic Vegetables"
            },
            {
                id: "organic-rajasthan-spinach",
                name: "Organic Rajasthan Spinach",
                shortDescription: "Nutritious organic spinach from Rajasthan, cultivated sustainably.",
                detailedDescription: "Certified organic and drought-resistant farming practices ensure that this freshly picked spinach is rich in iron and calcium, perfect for a healthy diet.",
                image: "assets/images/Vegetables/spinach.jpg",
                category: "Organic Vegetables"
            },
            {
                id: "organic-sikkim-green-peas",
                name: "Organic Sikkim Green Peas",
                shortDescription: "Tender organic green peas from Sikkim, perfect for soups and side dishes.",
                detailedDescription: "Organic farming methods and rich in protein, these sustainably harvested green peas are ideal for a variety of culinary uses.",
                image: "assets/images/Vegetables/green-peas.jpg",
                category: "Organic Vegetables"
            },
            {
                id: "organic-andhra-pradesh-cucumber",
                name: "Organic Andhra Pradesh Cucumber",
                shortDescription: "Refreshing organic cucumbers from Andhra Pradesh, ideal for salads and beverages.",
                detailedDescription: "Certified organic cultivation and high water content make these freshly harvested organic cucumbers perfect for hydrating and healthy recipes.",
                image: "assets/images/Vegetables/cucumbers.jpg",
                category: "Organic Vegetables"
            },
            {
                id: "organic-jharkhand-pumpkins",
                name: "Organic Jharkhand Pumpkins",
                shortDescription: "Versatile organic pumpkins from Jharkhand, perfect for savory and sweet dishes.",
                detailedDescription: "Pesticide-free cultivation and rich in vitamins A and C ensure these freshly picked organic pumpkins are both nutritious and delicious.",
                image: "assets/images/Vegetables/pumpkins.jpg",
                category: "Organic Vegetables"
            },
            {
                id: "organic-mizoram-bell-peppers",
                name: "Organic Mizoram Bell Peppers",
                shortDescription: "Colorful organic bell peppers from Mizoram, adding vibrant flavors to your meals.",
                detailedDescription: "Certified organic and rich in antioxidants, these freshly harvested bell peppers are a healthy and flavorful addition to any dish.",
                image: "assets/images/Vegetables/bellpeppers.jpg",
                category: "Organic Vegetables"
            },
            {
                id: "organic-chhattisgarh-bitter-gourd",
                name: "Organic Chhattisgarh Bitter Gourd",
                shortDescription: "Health-packed organic bitter gourd from Chhattisgarh, known for its medicinal benefits.",
                detailedDescription: "Organic farming practices and rich in vitamins and minerals, these freshly picked bitter gourds are perfect for a healthy and nutritious diet.",
                image: "assets/images/Vegetables/bitter-gourd.jpg",
                category: "Organic Vegetables"
            }
        ]
    },
    {
        title: "Food Grains",
        icon: "fas fa-seedling",
        category: "Staples that nourish the world.",
        features: [
            "High-Quality Grades",
            "Special Thick Rice for African Markets",
            "Export Certified"
        ],
        backgroundImage: "../assets/images/fruits.jpg",
        products: [
            {
                id: "basmati-rice",
                name: "Basmati Rice",
                shortDescription: "Aromatic and long-grained basmati rice from India, perfect for special occasions.",
                detailedDescription: "Grown in the fertile plains of Punjab and Haryana, this basmati rice is known for its distinctive fragrance and fluffy texture upon cooking. Ideal for biryanis and pilafs.",
                image: "../assets/images/products/basmati-rice.jpg",
                category: "Food Grains"
            },
            {
                id: "sona-masuri-rice",
                name: "Sona Masuri Rice",
                shortDescription: "Medium-grain Sona Masuri rice from Karnataka, versatile for daily use.",
                detailedDescription: "Light and non-sticky, Sona Masuri rice is a staple in South Indian households. Perfect for steamed rice, upma, and various curries.",
                image: "../assets/images/products/sona-masuri-rice.jpg",
                category: "Food Grains"
            },
            {
                id: "red-chana",
                name: "Red Chana",
                shortDescription: "Nutritious red chickpeas from Rajasthan, rich in protein and fiber.",
                detailedDescription: "Ideal for making chana masala, salads, and snacks, red chana is sustainably farmed and harvested to maintain its quality and nutritional value.",
                image: "../assets/images/products/red-chana.jpg",
                category: "Food Grains"
            },
            {
                id: "black-gram",
                name: "Black Gram (Urad Dal)",
                shortDescription: "Premium black gram from Uttar Pradesh, essential for South Indian cuisine.",
                detailedDescription: "High in protein and essential nutrients, black gram is perfect for making dosas, idlis, and various lentil-based dishes.",
                image: "../assets/images/products/black-gram.jpg",
                category: "Food Grains"
            },
            {
                id: "sambar-puli-rice",
                name: "Sambar Puli Rice",
                shortDescription: "Tangy flavored rice from Tamil Nadu, perfect for sambar and other curries.",
                detailedDescription: "Infused with tamarind and spices, Sambar Puli Rice adds a unique flavor to traditional South Indian dishes, enhancing the overall taste profile.",
                image: "../assets/images/products/sambar-puli-rice.jpg",
                category: "Food Grains"
            },
            {
                id: "mung-dal",
                name: "Mung Dal",
                shortDescription: "Soft and split mung dal from Gujarat, versatile for various recipes.",
                detailedDescription: "Rich in protein and easy to digest, mung dal is perfect for soups, stews, and making delicious dal-based dishes.",
                image: "../assets/images/products/mung-dal.jpg",
                category: "Food Grains"
            },
            {
                id: "jowar-flour",
                name: "Jowar Flour",
                shortDescription: "Gluten-free jowar (sorghum) flour from Maharashtra, ideal for healthy baking.",
                detailedDescription: "High in fiber and essential minerals, jowar flour is perfect for making rotis, bhakris, and various baked goods, catering to health-conscious consumers.",
                image: "../assets/images/products/jowar-flour.jpg",
                category: "Food Grains"
            },
            {
                id: "bajra-flour",
                name: "Bajra Flour",
                shortDescription: "Nutty-flavored bajra (pearl millet) flour from Rajasthan, great for hearty rotis.",
                detailedDescription: "Rich in iron and calcium, bajra flour is a staple in North Indian diets, perfect for making nutritious and filling rotis and other traditional breads.",
                image: "../assets/images/products/bajra-flour.jpg",
                category: "Food Grains"
            },
            {
                id: "tuber-vegetables",
                name: "Tuber Vegetables Mix",
                shortDescription: "A mix of premium tuber vegetables from India, perfect for versatile cooking.",
                detailedDescription: "Includes varieties like sweet potatoes, yams, and taro, all sustainably farmed and harvested to maintain their freshness and nutritional value.",
                image: "../assets/images/products/tuber-vegetables.jpg",
                category: "Food Grains"
            },
            {
                id: "finger-millet",
                name: "Finger Millet (Ragi)",
                shortDescription: "Nutritious finger millet from Karnataka, rich in calcium and iron.",
                detailedDescription: "Perfect for making ragi dosa, ragi roti, and other traditional recipes, finger millet is a staple for health-conscious households.",
                image: "../assets/images/products/finger-millet.jpg",
                category: "Food Grains"
            }
        ]
    },
    {
        title: "Pulses & Legumes",
        icon: "fas fa-drumstick-bite",
        category: "Protein-packed essentials for healthy living.",
        features: [
            "Wide Variety of Lentils",
            "Chickpeas & Beans",
            "Split and Whole Dal Varieties"
        ],
        backgroundImage: "../assets/images/fruits.jpg",
        products: [
            {
                id: "toor-dal",
                name: "Toor Dal (Pigeon Pea)",
                shortDescription: "High-protein toor dal from Maharashtra, essential for daily meals.",
                detailedDescription: "Rich in protein and fiber, toor dal is perfect for making sambar, dal fry, and various lentil-based dishes, catering to a healthy and balanced diet.",
                image: "../assets/images/products/toor-dal.jpg",
                category: "Pulses & Legumes"
            },
            {
                id: "chana-dal",
                name: "Chana Dal",
                shortDescription: "Nutritious chana dal from Uttar Pradesh, versatile for snacks and curries.",
                detailedDescription: "Packed with protein and essential nutrients, chana dal is ideal for making besan chilla, dal tadka, and various Indian snacks, enhancing the nutritional value of meals.",
                image: "../assets/images/products/chana-dal.jpg",
                category: "Pulses & Legumes"
            },
            {
                id: "masoor-dal",
                name: "Masoor Dal (Red Lentils)",
                shortDescription: "Quick-cooking masoor dal from Punjab, perfect for soups and stews.",
                detailedDescription: "Light and flavorful, masoor dal cooks quickly and is rich in protein, making it a favorite for hearty soups, stews, and nutritious lentil-based dishes.",
                image: "../assets/images/products/masoor-dal.jpg",
                category: "Pulses & Legumes"
            },
            {
                id: "green-mung-dal",
                name: "Green Mung Dal",
                shortDescription: "Fresh green mung dal from Gujarat, ideal for sprouting and salads.",
                detailedDescription: "High in vitamins and minerals, green mung dal is perfect for sprouting, making salads, and preparing light, nutritious dishes that are easy on the digestive system.",
                image: "../assets/images/products/green-mung-dal.jpg",
                category: "Pulses & Legumes"
            },
            {
                id: "black-gram-dal",
                name: "Black Gram Dal (Urad Dal)",
                shortDescription: "Protein-rich black gram dal from West Bengal, essential for South Indian cuisine.",
                detailedDescription: "High in protein and essential amino acids, black gram dal is perfect for making dosa, idli, vada, and various lentil-based curries, enhancing the protein intake of meals.",
                image: "../assets/images/products/black-gram-dal.jpg",
                category: "Pulses & Legumes"
            },
            {
                id: "rajma",
                name: "Rajma (Kidney Beans)",
                shortDescription: "Delicious rajma from Himachal Pradesh, perfect for hearty curries.",
                detailedDescription: "Rich in protein and fiber, rajma is ideal for making flavorful rajma masala, providing a nutritious and satisfying meal option.",
                image: "../assets/images/products/rajma.jpg",
                category: "Pulses & Legumes"
            },
            {
                id: "black-chana",
                name: "Black Chana",
                shortDescription: "Crunchy black chana from Rajasthan, great for snacks and salads.",
                detailedDescription: "High in protein and fiber, black chana is perfect for making chaat, salads, and healthy snacks, providing a nutritious crunch to meals.",
                image: "../assets/images/products/black-chana.jpg",
                category: "Pulses & Legumes"
            },
            {
                id: "kabuli-chickpeas",
                name: "Kabuli Chickpeas",
                shortDescription: "Premium kabuli chickpeas from Uttar Pradesh, ideal for hummus and curries.",
                detailedDescription: "Rich in protein and essential nutrients, kabuli chickpeas are perfect for making hummus, chana masala, and various Middle Eastern and Indian dishes, enhancing the culinary diversity.",
                image: "../assets/images/products/kabuli-chickpeas.jpg",
                category: "Pulses & Legumes"
            },
            {
                id: "soy-beans",
                name: "Soy Beans",
                shortDescription: "Nutrient-dense soy beans from Karnataka, versatile for various uses.",
                detailedDescription: "High in protein and essential fatty acids, soy beans are perfect for making tofu, soy milk, and various other plant-based products, catering to vegetarian and vegan diets.",
                image: "../assets/images/products/soy-beans.jpg",
                category: "Pulses & Legumes"
            },
            {
                id: "lima-beans",
                name: "Lima Beans",
                shortDescription: "Tender lima beans from Madhya Pradesh, perfect for soups and salads.",
                detailedDescription: "Rich in protein and fiber, lima beans are ideal for making hearty soups, stews, and nutritious salads, adding a creamy texture to dishes.",
                image: "../assets/images/products/lima-beans.jpg",
                category: "Pulses & Legumes"
            }
        ]
    },
    {
        title: "Coffee",
        icon: "fas fa-coffee",
        category: "Rich aroma, bold flavors, globally loved.",
        features: [
            "Arabica & Robusta",
            "Whole Beans & Ground",
            "High-Quality Export Grade"
        ],
        backgroundImage: "../assets/images/fruits.jpg",
        products: [
            {
                id: "monsooned-malabar",
                name: "Monsooned Malabar",
                shortDescription: "Unique Monsooned Malabar coffee beans from Kerala, known for their smooth flavor.",
                detailedDescription: "Processed through exposure to monsoon winds, Monsooned Malabar beans develop a mellow flavor with low acidity, perfect for a smooth and rich cup of coffee.",
                image: "../assets/images/products/monsooned-malabar.jpg",
                category: "Coffee"
            },
            {
                id: "coorg-coffee",
                name: "Coorg Coffee",
                shortDescription: "Premium coffee beans from Coorg, Karnataka, offering a robust flavor.",
                detailedDescription: "Grown in the lush plantations of Coorg, these beans are handpicked and processed to maintain their rich aroma and bold taste, ideal for espresso and dark roasts.",
                image: "../assets/images/products/coorg-coffee.jpg",
                category: "Coffee"
            },
            {
                id: "mysore-nuggets",
                name: "Mysore Nuggets",
                shortDescription: "High-grade Mysore Nuggets from Karnataka, celebrated for their full-bodied flavor.",
                detailedDescription: "Known for their large bean size and exceptional flavor profile, Mysore Nuggets are perfect for gourmet coffee enthusiasts seeking a strong and aromatic brew.",
                image: "../assets/images/products/mysore-nuggets.jpg",
                category: "Coffee"
            },
            {
                id: "babbar-south-coast",
                name: "Babbar South Coast",
                shortDescription: "Distinctive Babbar South Coast coffee from Karnataka, known for its smooth finish.",
                detailedDescription: "Grown along the coastal regions, Babbar South Coast coffee beans are harvested sustainably, offering a balanced flavor with hints of chocolate and nuts.",
                image: "../assets/images/products/babbar-south-coast.jpg",
                category: "Coffee"
            },
            {
                id: "araku-coffee",
                name: "Araku Coffee",
                shortDescription: "Organic Araku coffee from Andhra Pradesh, rich in flavor and aroma.",
                detailedDescription: "Cultivated in the Araku Valley, these organic coffee beans are known for their sweet and fruity undertones, providing a delightful and aromatic coffee experience.",
                image: "../assets/images/products/araku-coffee.jpg",
                category: "Coffee"
            },
            {
                id: "kannur-dark-roast",
                name: "Kannur Dark Roast",
                shortDescription: "Bold and intense dark roast coffee from Kannur, Kerala.",
                detailedDescription: "Perfect for those who prefer a strong and robust coffee, Kannur Dark Roast beans are expertly roasted to bring out deep flavors and a rich aroma.",
                image: "../assets/images/products/kannur-dark-roast.jpg",
                category: "Coffee"
            },
            {
                id: "sandalwood-coffee",
                name: "Sandalwood Coffee",
                shortDescription: "Infused Sandalwood coffee from Karnataka, offering a unique aromatic blend.",
                detailedDescription: "A fusion of high-quality coffee beans with natural sandalwood essence, providing a soothing and fragrant coffee experience.",
                image: "../assets/images/products/sandalwood-coffee.jpg",
                category: "Coffee"
            },
            {
                id: "belgian-roast",
                name: "Belgian Roast",
                shortDescription: "Rich Belgian Roast coffee from Tamil Nadu, perfect for a strong brew.",
                detailedDescription: "Expertly roasted to a dark finish, Belgian Roast coffee beans deliver a deep and intense flavor, ideal for those who enjoy a powerful and satisfying cup of coffee.",
                image: "../assets/images/products/belgian-roast.jpg",
                category: "Coffee"
            },
            {
                id: "java-mountain",
                name: "Java Mountain",
                shortDescription: "Exquisite Java Mountain coffee from Karnataka, known for its smooth taste.",
                detailedDescription: "Grown in the mountainous regions, Java Mountain coffee beans are prized for their balanced acidity and smooth, lingering finish, perfect for a refined coffee experience.",
                image: "../assets/images/products/java-mountain.jpg",
                category: "Coffee"
            },
            {
                id: "roasted-arabica",
                name: "Roasted Arabica",
                shortDescription: "Premium roasted Arabica beans from India, offering a delicate flavor.",
                detailedDescription: "Selected from the best Arabica plantations, these beans are roasted to perfection to enhance their natural sweetness and floral aroma, ideal for a light and flavorful brew.",
                image: "../assets/images/products/roasted-arabica.jpg",
                category: "Coffee"
            }
        ]
    },
    {
        title: "Spices",
        icon: "fas fa-pepper-hot",
        category: "A pinch of spice, a world of flavor.",
        features: [
            "Cardamom, Black Pepper, Cinnamon",
            "Turmeric, Red Chili, Cumin",
            "ISO Certified Quality"
        ],
        backgroundImage: "../assets/images/fruits.jpg",
        products: [
            {
                id: "valentine-cardamom",
                name: "Valentine Cardamom",
                shortDescription: "Premium cardamom pods from Kerala, known for their rich aroma.",
                detailedDescription: "Handpicked and sun-dried, Valentine Cardamom offers an intense and sweet flavor, perfect for culinary and medicinal uses.",
                image: "../assets/images/products/valentine-cardamom.jpg",
                category: "Spices"
            },
            {
                id: "kashmiri-black-pepper",
                name: "Kashmiri Black Pepper",
                shortDescription: "Freshly ground black pepper from Kashmir, adding heat and flavor.",
                detailedDescription: "High-quality black peppercorns from the fertile valleys of Kashmir, ground to perfection for a pungent and spicy kick in dishes.",
                image: "../assets/images/products/kashmiri-black-pepper.jpg",
                category: "Spices"
            },
            {
                id: "malabar-cinnamon",
                name: "Malabar Cinnamon",
                shortDescription: "Authentic Malabar cinnamon sticks from Kerala, enhancing sweet and savory dishes.",
                detailedDescription: "Harvested from the Malabar Coast, these cinnamon sticks are known for their strong and sweet aroma, perfect for baking, beverages, and marinades.",
                image: "../assets/images/products/malabar-cinnamon.jpg",
                category: "Spices"
            },
            {
                id: "haldi-turmeric",
                name: "Haldi Turmeric",
                shortDescription: "Organic haldi (turmeric) powder from Rajasthan, rich in color and flavor.",
                detailedDescription: "Certified organic turmeric is packed with antioxidants and offers a vibrant color and earthy flavor, essential for Indian curries and health supplements.",
                image: "../assets/images/products/haldi-turmeric.jpg",
                category: "Spices"
            },
            {
                id: "red-chili-powder",
                name: "Red Chili Powder",
                shortDescription: "Hot and vibrant red chili powder from Andhra Pradesh, perfect for spicy dishes.",
                detailedDescription: "Made from sun-dried chilies, this red chili powder adds heat and color to a variety of Indian and global cuisines, enhancing the flavor profile of dishes.",
                image: "../assets/images/products/red-chili-powder.jpg",
                category: "Spices"
            },
            {
                id: "jeera-cumin",
                name: "Jeera (Cumin)",
                shortDescription: "Freshly ground jeera (cumin) from Gujarat, essential for aromatic cooking.",
                detailedDescription: "Rich in earthy flavor and essential oils, jeera is a staple in Indian spice blends, perfect for curries, stews, and marinades.",
                image: "../assets/images/products/jeera-cumin.jpg",
                category: "Spices"
            },
            {
                id: "fennel-seeds",
                name: "Fennel Seeds",
                shortDescription: "Sweet and aromatic fennel seeds from Tamil Nadu, aiding digestion.",
                detailedDescription: "Used in various Indian sweets and savory dishes, fennel seeds offer a sweet, licorice-like flavor and are known for their digestive benefits.",
                image: "../assets/images/products/fennel-seeds.jpg",
                category: "Spices"
            },
            {
                id: "cloves-bhune",
                name: "Cloves Bhune",
                shortDescription: "Ground cloves from Karnataka, enhancing rich and flavorful dishes.",
                detailedDescription: "Known for their intense aroma and flavor, cloves Bhune are perfect for biryanis, desserts, and spice blends, adding depth to both sweet and savory dishes.",
                image: "../assets/images/products/cloves-bhune.jpg",
                category: "Spices"
            },
            {
                id: "mustard-seeds",
                name: "Mustard Seeds",
                shortDescription: "Pungent mustard seeds from Bihar, essential for pickles and tempering.",
                detailedDescription: "Mustard seeds add a spicy kick to dishes and are widely used in Indian pickles and tempering, providing both flavor and nutritional benefits.",
                image: "../assets/images/products/mustard-seeds.jpg",
                category: "Spices"
            },
            {
                id: "asafoetida-hing",
                name: "Asafoetida (Hing)",
                shortDescription: "Strong-flavored asafoetida from Uttar Pradesh, aiding digestion.",
                detailedDescription: "Known for its pungent aroma, asafoetida is essential in Indian cooking for adding umami and aiding digestion, especially in lentil dishes.",
                image: "../assets/images/products/asafoetida-hing.jpg",
                category: "Spices"
            }
        ]
    },
    {
        title: "Insecticides",
        icon: "fas fa-bug",
        category: "Protecting your crops, safeguarding yields.",
        features: [
            "Comprehensive pest control solutions",
            "Targets specific pests with precision",
            "Environmentally friendly"
        ],
        backgroundImage: "../assets/images/fruits.jpg",
        products: [
            {
                id: "larvicides",
                name: "Larvicides",
                shortDescription: "Effective larvicides for controlling harmful larvae.",
                detailedDescription: "Our range of larvicides includes specialized solutions for pests such as Helicoverpa, Spodoptera, Cutworms, Stem Borer, Fruit Borer, and Rootgrub. These products are formulated to target and eliminate larvae stages, preventing them from causing extensive damage to your crops.",
                image: "../assets/images/products/larvicides.jpg",
                category: "Insecticides"
            },
            {
                id: "miticides-sucking-pests",
                name: "Miticides & Sucking Pest Insecticides",
                shortDescription: "Miticides and insecticides targeting sucking pests.",
                detailedDescription: "Designed to combat red mites, white mites, thrips, leaf miners, spider mites, aphids, jashids, and millybugs, our miticides and sucking pest insecticides offer robust protection against these destructive pests. They ensure the health and vitality of your crops by effectively reducing pest populations.",
                image: "../assets/images/products/miticides-sucking-pests.jpg",
                category: "Insecticides"
            },
            {
                id: "fungicides",
                name: "Fungicides",
                shortDescription: "Advanced fungicides for preventing and treating fungal diseases.",
                detailedDescription: "Our fungicides are formulated to combat a wide range of fungal diseases including Tikka Leaf Spot, Rice Blast, Anthracnose, Late Blight, Early Blight, Powdery Mildew, Wilt, and Root Rot. These products ensure your crops remain healthy and free from debilitating fungal infections.",
                image: "../assets/images/products/fungicides.jpg",
                category: "Insecticides"
            },
            {
                id: "weedicides",
                name: "Weedicides",
                shortDescription: "Selective and general weedicides for all crop types.",
                detailedDescription: "Our weedicides are available in both selective and general formulations, catering to a diverse range of crops. They effectively eliminate unwanted weeds without harming your valuable crops, ensuring optimal growth and yield.",
                image: "../assets/images/products/weedicides.jpg",
                category: "Insecticides"
            },
            {
                id: "neem-oil",
                name: "Neem Oil",
                shortDescription: "Organic neem oil pesticide effective against a wide range of pests.",
                detailedDescription: "Derived from neem seeds, this oil acts as a natural pesticide, repelling insects and preventing fungal diseases without harming beneficial organisms.",
                image: "../assets/images/products/neem-oil.jpg",
                category: "Insecticides"
            },
            {
                id: "pyrethrum-powder",
                name: "Pyrethrum Powder",
                shortDescription: "Natural pyrethrum powder derived from chrysanthemum flowers.",
                detailedDescription: "A potent natural insecticide that quickly knocks down pests on contact, ideal for organic farming and safe for beneficial insects.",
                image: "../assets/images/products/pyrethrum-powder.jpg",
                category: "Insecticides"
            },
            {
                id: "spinosad",
                name: "Spinosad",
                shortDescription: "Biopesticide spinosad effective against caterpillars and thrips.",
                detailedDescription: "A microbial insecticide derived from soil bacteria, spinosad targets specific pests without affecting beneficial insects, ensuring balanced ecosystem health.",
                image: "../assets/images/products/spinosad.jpg",
                category: "Insecticides"
            },
            {
                id: "insecticidal-soap",
                name: "Insecticidal Soap",
                shortDescription: "Gentle insecticidal soap for controlling soft-bodied insects.",
                detailedDescription: "An eco-friendly solution that disrupts the cell membranes of soft-bodied pests like aphids and mites, providing effective control without environmental harm.",
                image: "../assets/images/products/insecticidal-soap.jpg",
                category: "Insecticides"
            },
            {
                id: "bacillus-thuringiensis",
                name: "Bacillus Thuringiensis (Bt)",
                shortDescription: "Biological insecticide Bt effective against caterpillars and beetles.",
                detailedDescription: "A naturally occurring bacterium that targets and kills specific insect pests, Bt is safe for humans, animals, and beneficial insects when used correctly.",
                image: "../assets/images/products/bacillus-thuringiensis.jpg",
                category: "Insecticides"
            },
            {
                id: "kaolin-clay",
                name: "Kaolin Clay",
                shortDescription: "Mineral-based kaolin clay repels a variety of insect pests.",
                detailedDescription: "Creates a protective barrier on plant surfaces, deterring pests by causing discomfort and preventing them from feeding or laying eggs.",
                image: "../assets/images/products/kaolin-clay.jpg",
                category: "Insecticides"
            },
            {
                id: "rotamix-spray",
                name: "Rotamix Spray",
                shortDescription: "Eco-friendly Rotamix spray for broad-spectrum pest control.",
                detailedDescription: "A versatile spray that targets a wide range of pests, including beetles, caterpillars, and mites, while being safe for beneficial insects and the environment.",
                image: "../assets/images/products/rotamix-spray.jpg",
                category: "Insecticides"
            },
            {
                id: "spinosad-dust",
                name: "Spinosad Dust",
                shortDescription: "Fine spinosad dust for treating soil and foliage pests.",
                detailedDescription: "An effective formulation for controlling pests in both soil and on plant surfaces, spinosad dust provides long-lasting protection without harming beneficial organisms.",
                image: "../assets/images/products/spinosad-dust.jpg",
                category: "Insecticides"
            },
            {
                id: "pyrethrin-liquids",
                name: "Pyrethrin Liquids",
                shortDescription: "Fast-acting pyrethrin liquids for immediate pest knockdown.",
                detailedDescription: "Derived from chrysanthemum flowers, pyrethrin liquids provide rapid pest control, suitable for use in gardens, greenhouses, and agricultural fields.",
                image: "../assets/images/products/pyrethrin-liquids.jpg",
                category: "Insecticides"
            },
            {
                id: "horticultural-oil",
                name: "Horticultural Oil",
                shortDescription: "Mineral-based horticultural oil for smothering insect pests.",
                detailedDescription: "Acts by suffocating pests such as scales, mites, and whiteflies, horticultural oil is an effective and environmentally friendly option for pest management.",
                image: "../assets/images/products/horticultural-oil.jpg",
                category: "Insecticides"
            }
        ]
    },
    {
        title: "Fertilizers",
        icon: "fas fa-seedling",
        category: "Empowering growth, naturally.",
        features: [
            "Comprehensive range of nutrient solutions tailored for various crops",
            "High-quality formulations ensuring optimal plant growth and yield",
            "Certified for quality and suitability for international markets"
        ],
        backgroundImage: "../assets/images/fruits.jpg",
        products: [
            {
                id: "urea-fertilizer",
                name: "Urea Fertilizer",
                shortDescription: "High-nitrogen urea fertilizer for robust crop growth.",
                detailedDescription: "Urea fertilizer is a key nitrogen source for crops, promoting vigorous growth and high yields. Ideal for a variety of agricultural applications, it enhances plant metabolism and overall health.",
                image: "../assets/images/products/urea-fertilizer.jpg",
                category: "Fertilizers"
            },
            {
                id: "dap-fertilizer",
                name: "DAP Fertilizer (Diammonium Phosphate)",
                shortDescription: "Balanced DAP fertilizer for optimal phosphorus and nitrogen supply.",
                detailedDescription: "DAP fertilizer provides essential phosphorus and nitrogen, enhancing root development and overall plant health. Suitable for a wide range of crops, it ensures balanced nutrient availability.",
                image: "../assets/images/products/dap-fertilizer.jpg",
                category: "Fertilizers"
            },
            {
                id: "potash-fertilizer",
                name: "Potash Fertilizer",
                shortDescription: "Rich potash fertilizer for improved fruit and flower production.",
                detailedDescription: "Potash fertilizer enhances the quality and size of fruits and flowers, strengthening plant stems and improving overall crop resilience. It plays a crucial role in water regulation and disease resistance.",
                image: "../assets/images/products/potash-fertilizer.jpg",
                category: "Fertilizers"
            },
            {
                id: "muriate-of-potash",
                name: "Muriate of Potash",
                shortDescription: "Soluble potassium chloride fertilizer for better nutrient uptake.",
                detailedDescription: "Muriate of Potash provides readily available potassium, essential for plant metabolism and stress resistance, ensuring healthy and productive crops. It aids in enzyme activation and photosynthesis.",
                image: "../assets/images/products/muriate-of-potash.jpg",
                category: "Fertilizers"
            },
            {
                id: "phosphatic-fertilizer",
                name: "Phosphatic Fertilizer",
                shortDescription: "Phosphorus-rich fertilizer for enhanced root and seed development.",
                detailedDescription: "Phosphatic fertilizers support strong root systems and improve seed quality, crucial for the early stages of plant growth and development. They facilitate energy transfer within plants, promoting overall vitality.",
                image: "../assets/images/products/phosphatic-fertilizer.jpg",
                category: "Fertilizers"
            },
            {
                id: "nitrogen-fertilizer",
                name: "Nitrogen Fertilizer",
                shortDescription: "High-quality nitrogen fertilizer for lush vegetative growth.",
                detailedDescription: "Nitrogen fertilizers are vital for leafy growth and overall plant vigor, ensuring healthy and green crops throughout the growing season. They enhance protein synthesis and chlorophyll formation.",
                image: "../assets/images/products/nitrogen-fertilizer.jpg",
                category: "Fertilizers"
            },
            {
                id: "super-phosphate",
                name: "Super Phosphate",
                shortDescription: "Concentrated super phosphate fertilizer for robust crop development.",
                detailedDescription: "Super phosphate enhances phosphorus availability in the soil, promoting strong root systems and improved crop yield and quality. It supports energy transfer and genetic transfer within plants.",
                image: "../assets/images/products/super-phosphate.jpg",
                category: "Fertilizers"
            },
            {
                id: "calcium-nitrate",
                name: "Calcium Nitrate",
                shortDescription: "Calcium nitrate fertilizer for improved soil structure and plant health.",
                detailedDescription: "Calcium nitrate strengthens plant cell walls and enhances nutrient uptake, leading to healthier and more resilient crops. It aids in preventing disorders like blossom end rot and improves overall soil quality.",
                image: "../assets/images/products/calcium-nitrate.jpg",
                category: "Fertilizers"
            },
            {
                id: "macro-nutrients",
                name: "Macro Nutrients Blend",
                shortDescription: "Balanced macro nutrients blend for comprehensive crop nutrition.",
                detailedDescription: "This blend provides essential macro nutrients like nitrogen, phosphorus, and potassium, ensuring balanced and healthy plant growth across various crop types. It supports overall plant metabolism and structural integrity.",
                image: "../assets/images/products/macro-nutrients.jpg",
                category: "Fertilizers"
            },
            {
                id: "organic-compost",
                name: "Organic Compost",
                shortDescription: "Rich organic compost for sustainable soil fertility.",
                detailedDescription: "Enhances soil structure and fertility naturally, promoting healthy plant growth without the use of synthetic chemicals. Organic compost improves water retention and supports beneficial soil microorganisms.",
                image: "../assets/images/products/organic-compost.jpg",
                category: "Fertilizers"
            }
        ]
    },
    {
        title: "Organic Fertilizers",
        icon: "fas fa-seedling",
        category: "Sustainable solutions for thriving crops.",
        features: [
            "Sustainable and eco-friendly nutrient sources",
            "Enhances soil health and promotes beneficial microbial activity",
            "Certified for quality and environmental safety"
        ],
        backgroundImage: "../assets/images/fruits.jpg",
        products: [
            {
                id: "compost",
                name: "Compost",
                shortDescription: "Premium organic compost enriched with natural nutrients.",
                detailedDescription: "Made from decomposed organic matter, this compost improves soil structure, enhances nutrient availability, and promotes sustainable plant growth. It fosters a healthy soil ecosystem and increases moisture retention.",
                image: "../assets/images/products/compost.jpg",
                category: "Organic Fertilizers"
            },
            {
                id: "vermicompost",
                name: "Vermicompost",
                shortDescription: "Nutrient-rich vermicompost produced using earthworms.",
                detailedDescription: "A superior form of compost, vermicompost is rich in beneficial microbes and essential nutrients, enhancing soil health and plant vitality. It improves soil aeration and promotes robust root development.",
                image: "../assets/images/products/vermicompost.jpg",
                category: "Organic Fertilizers"
            },
            {
                id: "bio-fertilizer",
                name: "Bio Fertilizer",
                shortDescription: "Natural bio fertilizer containing beneficial microorganisms.",
                detailedDescription: "Bio fertilizers enhance soil fertility by promoting microbial activity, improving nutrient uptake, and increasing crop resistance to pests and diseases. They support sustainable agricultural practices and reduce dependency on chemical fertilizers.",
                image: "../assets/images/products/bio-fertilizer.jpg",
                category: "Organic Fertilizers"
            },
            {
                id: "fish-emulsion",
                name: "Fish Emulsion",
                shortDescription: "Liquid fish emulsion fertilizer high in nitrogen and trace minerals.",
                detailedDescription: "An organic liquid fertilizer that provides a quick nutrient boost to plants, enhancing growth and foliage health without the use of synthetic chemicals. It stimulates microbial activity and improves soil structure.",
                image: "../assets/images/products/fish-emulsion.jpg",
                category: "Organic Fertilizers"
            },
            {
                id: "bone-meal",
                name: "Bone Meal",
                shortDescription: "High-phosphorus bone meal for strong root and flower development.",
                detailedDescription: "An excellent source of phosphorus and calcium, bone meal promotes robust root systems and vibrant flower production in plants. It enhances seed germination and overall plant resilience.",
                image: "../assets/images/products/bone-meal.jpg",
                category: "Organic Fertilizers"
            },
            {
                id: "seaweed-extract",
                name: "Seaweed Extract",
                shortDescription: "Organic seaweed extract fertilizer rich in micronutrients.",
                detailedDescription: "Enhances plant growth and resilience by providing essential micronutrients and growth hormones, promoting overall plant health and productivity. It improves soil fertility and stress tolerance in plants.",
                image: "../assets/images/products/seaweed-extract.jpg",
                category: "Organic Fertilizers"
            },
            {
                id: "kelp-fertilizer",
                name: "Kelp Fertilizer",
                shortDescription: "Natural kelp-based fertilizer promoting vigorous plant growth.",
                detailedDescription: "Derived from seaweed, kelp fertilizer provides essential nutrients and growth stimulants, enhancing plant vigor and stress tolerance. It supports healthy root development and improves soil microbiology.",
                image: "../assets/images/products/kelp-fertilizer.jpg",
                category: "Organic Fertilizers"
            },
            {
                id: "bat-guano",
                name: "Bat Guano",
                shortDescription: "Highly effective bat guano fertilizer rich in nitrogen and phosphorus.",
                detailedDescription: "An organic fertilizer with excellent nutrient content, bat guano boosts plant growth, improves soil structure, and enhances microbial activity. It increases plant resistance to diseases and pests.",
                image: "../assets/images/products/bat-guano.jpg",
                category: "Organic Fertilizers"
            },
            {
                id: "rock-phosphate",
                name: "Rock Phosphate",
                shortDescription: "Organic rock phosphate for slow-release phosphorus in soil.",
                detailedDescription: "Provides a long-term source of phosphorus, essential for energy transfer and root development in plants, promoting sustainable soil fertility. It aids in strengthening plant structures and enhancing overall crop quality.",
                image: "../assets/images/products/rock-phosphate.jpg",
                category: "Organic Fertilizers"
            },
            {
                id: "green-manure",
                name: "Green Manure",
                shortDescription: "Cover crops used as green manure to enrich soil organically.",
                detailedDescription: "Green manure crops improve soil structure, increase organic matter content, and enhance nutrient availability, supporting sustainable agricultural practices. They prevent soil erosion and suppress weed growth naturally.",
                image: "../assets/images/products/green-manure.jpg",
                category: "Organic Fertilizers"
            }
        ]
    }
];

window.products = products;
