// Language Translation Script
document.addEventListener("DOMContentLoaded", () => {

  const langSelector = document.getElementById("lang");




const translations = {
  en: {
    /* Header / Navigation */
    brand_tag: "Nourishing Communities",
    menu: "Menu",
    nav_home: "Home",
    nav_work: "Our Work",
    nav_products: "Products",
    nav_services: "Services",
    nav_impact: "Impact",
    nav_about: "About",
    nav_order: "Order / Quote",
    lang_label: "Language:",

    /* Hero Section */
    hero_title: "Nourishing Communities with Sustainable Farming",
    hero_subtitle: "Empowering Kalemie through Poultry, Cassava, Fruits & Processing",
    learn_more: "Learn More",
    hero_pill: "Fresh • Affordable • Sustainable",
    hero_quality: "Quality agro-foods grown and crafted in Kalemie.",
    hero_description: "We produce poultry, cassava flour, and fruit-based products with hygienic processing, local sourcing, and fair jobs for youth and women.",
    hero_order: "Place an Order",
    hero_quote: "Request a Quote",
    sample_prices: "Sample Prices",
    price_eggs: "Egg tray (30)",
    price_flour: "Cassava flour (1 kg)",
    price_chicken: "Whole chicken (1.5 kg)",

    /* Our Work Section */
    our_work_title: "🌱 Our Work at Kalemie Agro",
    our_work_subtitle: "Building food security and livelihoods through sustainable farming and processing.",
    work_poultry_title: "🐔 Poultry Farming",
    work_poultry_desc: "Supplying fresh eggs and quality chicken meat for households and businesses in Kalemie.",
    work_cassava_title: "🌿 Cassava Production",
    work_cassava_desc: "From farm to flour — we cultivate cassava and process it into hygienic, affordable flour.",
    work_fruit_title: "🍊 Fruit Cultivation & Juices",
    work_fruit_desc: "Growing local fruits and crafting natural juices, supporting healthier diets and reducing imports.",
    work_processing_title: "🏭 Processing & Value-Addition",
    work_processing_desc: "Turning harvests into packaged goods, creating jobs for youth and women in Kalemie.",
    impact_note: "💡 Impact: By combining farming with processing, we provide affordable food, empower communities, and strengthen Kalemie’s economy.",

   /* Products Section */
    products_title: "🛒 Our Products",
    products_subtitle: "Fresh, nutritious, and locally sourced agro-products from Kalemie.",

    /* Categories */
    category_poultry: "🐓 Poultry",
    category_fertilizers: "🌿 Fertilizers",
    category_cassava: "🌿 Cassava",
    category_fruits: "🍊 Fruits & Juices",
    category_future: "🌱 Future Crops",

    /* Poultry Products */
    product_eggs: "🥚 Fresh Eggs",
    product_eggs_desc: "Nutritious farm-fresh eggs, rich in protein and collected daily for guaranteed freshness.",
    product_chicken: "🍗 Fresh Chicken",
    product_chicken_desc: "Healthy, free-range chickens raised naturally for tender and flavorful meat.",
    product_chicken_meat: "🍖 Processed Chicken Meat",
    product_chicken_meat_desc: "Hygienically processed chicken meat — clean, safe, and ready for cooking in your favorite dishes.",
    product_value_poultry: "🔥 Smoked & Frozen Cuts",
    product_value_poultry_desc: "Convenient smoked chicken and frozen cuts — preserving taste, freshness, and nutrition for longer shelf life.",

    /* Fertilizers */
    manure_title: "🌱 Organic Manure",
    manure_desc: "Poultry-based fertilizer that enriches soil naturally and sustainably. Eco-friendly and highly effective in boosting soil fertility and crop yields.",
    compost_title: "🍂 Compost Mix",
    compost_desc: "Nutrient-rich compost made from organic waste, perfect for improving soil structure, water retention, and promoting healthy plant growth.",
    biofertilizer_title: "🧪 Biofertilizer",
    biofertilizer_desc: "Microbial-based fertilizer that enhances nutrient uptake, supports plant immunity, and promotes sustainable farming practices.",

    /* Cassava */
    product_flour: "🌾 Cassava Flour",
    product_flour_desc: "Finely processed cassava flour from locally grown roots, perfect for cooking and baking.",
    product_chips: "🍘 Cassava Chips",
    product_chips_desc: "Crunchy and tasty cassava chips, ideal as a healthy snack option.",
    product_starch: "🧂 Cassava Starch",
    product_starch_desc: "Pure cassava starch for household and industrial use.",

    /* Fruits & Juices */
    product_fruits: "🍍 Fresh Fruits",
    product_fruits_desc: "Locally grown fruits, hand-picked for freshness, quality, and taste.",
    product_juice: "🥤 Juices",
    product_juice_desc: "Refreshing juices made from mango, pineapple, and guava — natural and nutrient-rich.",
    product_jams: "🍯 Jams",
    product_jams_desc: "Sweet and healthy jams crafted from tropical fruits for your breakfast table.",
    product_dried: "🥭 Dried Fruits",
    product_dried_desc: "Naturally dried mangoes, pineapples, and bananas — perfect snacks full of energy.",

    /* Future Crops */
    product_maize: "🌽 Maize",
    product_maize_desc: "Upcoming maize cultivation to expand food supply and farming value chains.",
    product_beans: "🫘 Beans",
    product_beans_desc: "Nutrient-rich beans, grown locally to support food security.",
    product_vegetables: "🥦 Vegetables",
    product_vegetables_desc: "Fresh vegetables to promote healthy diets for local communities.",

    /* Button */
    btn_order: "🛒 Order Now",

    /* Services Section */
    services_title: "✨ Our Services",
    services_subtitle: "We go beyond products to provide services that empower farmers, businesses, and the local community.",
    service_poultry_title: "🐔 Poultry & Eggs Supply",
    service_poultry_desc: "Reliable supply of fresh eggs and processed chicken for households, restaurants, and retailers in Kalemie.",
    service_cassava_title: "🌿 Cassava & Flour Supply",
    service_cassava_desc: "We deliver hygienic cassava flour to bakeries, food vendors, and local markets at affordable prices.",
    service_fruits_title: "🍊 Fruit Cultivation & Juice Processing",
    service_fruits_desc: "Assistance with fruit cultivation, and processing into natural juices for local distribution and sales.",
    service_training_title: "📘 Training & Support",
    service_training_desc: "Capacity building and training for small farmers, youth, and women on sustainable agriculture and processing techniques.",
    service_packaging_title: "📦 Custom Orders & Packaging",
    service_packaging_desc: "Tailored packaging solutions and bulk order fulfillment for businesses, events, and community programs.",
    service_community_title: "🤝 Community Outreach",
    service_community_desc: "Programs to support food security, job creation, and economic empowerment in Kalemie.",

    /* Impact Section */
    impact_title: "🌍 Our Impact",
    impact_subtitle: "🌱 See how Kalemie Agro is transforming agriculture and livelihoods in the region.",
    impact_food: "Food Security",
    impact_food_desc: "Supplying fresh eggs, chicken, and local produce to ensure communities have access to nutritious food.",
    impact_sustainable: "Sustainable Farming",
    impact_sustainable_desc: "Implementing eco-friendly cultivation and processing practices that protect the land for future generations.",
    impact_jobs: "Job Creation",
    impact_jobs_desc: "Providing employment and skill development opportunities for youth and women in Kalemie.",
    impact_empower: "Community Empowerment",
    impact_empower_desc: "Supporting local farmers, entrepreneurs, and families to grow economically and socially stronger.",
    impact_growth: "Economic Growth",
    impact_growth_desc: "Boosting Kalemie's local economy through value-added processing and market access.",
    impact_environment: "Environmental Responsibility",
    impact_environment_desc: "Minimizing waste, using renewable resources, and encouraging sustainable practices across operations.",

    /* About Section */
about_title: "🌾 About Kalemie Agro",
about_subtitle: "🌱 Committed to sustainable farming, local empowerment, and nutritious food for all.",
about_mission_title: "🎯 Our Mission",
about_mission_desc: "🍎 To provide fresh, healthy, and affordable agro-foods while creating economic opportunities for youth and women in Kalemie.",
about_vision_title: "🔭 Our Vision",
about_vision_desc: "🏆 To be a leading agro-enterprise in the region, recognized for sustainability, community impact, and quality products.",
about_values_title: "💎 Our Values",
about_values_desc: "🤝 Integrity, 🌱 sustainability, 👥 community empowerment, ✅ quality, and 💡 innovation guide everything we do.",
about_why_title: "❓ Why Choose Us?",
about_why_desc: "🌾 We combine modern farming practices, hygienic processing, and local sourcing to deliver products you can trust.",
founder_note: "🌱 From Our Founder: \"Kalemie Agro is more than a farm — it’s a movement to nourish our communities, empower our people, and protect our land for future generations.\"",

    /* FAQ Section */
    faq_title: "FAQs",
    faq_delivery_q: "Do you deliver to schools and restaurants?",
    faq_delivery_a: "Yes. We offer scheduled bulk deliveries and contracts.",
    faq_lab_q: "Are your products lab-tested?",
    faq_lab_a: "We perform moisture checks for cassava flour and veterinary checks for poultry health.",
    faq_subscribe_q: "Can households subscribe for eggs?",
    faq_subscribe_a: "Absolutely. Weekly and monthly subscriptions are available for families.",
    faq_organic_q: "Do you use organic or chemical inputs?",
    faq_organic_a: "We focus on sustainable farming with minimal chemicals, prioritizing organic methods where possible.",
    faq_bulk_q: "How do I place a bulk order?",
    faq_bulk_a: "You can contact us directly via the booking form, phone, or WhatsApp to schedule large deliveries.",
    faq_future_q: "What future crops are you planning?",
    faq_future_a: "We are expanding into maize, beans, and seasonal vegetables to diversify food supply.",
    faq_visit_q: "Can I visit the farm?",
    faq_visit_a: "Yes! We welcome community visits, school tours, and partner inspections by appointment.",
    faq_training_q: "Do you provide training for farmers?",
    faq_training_a: "We occasionally host workshops on poultry care, cassava processing, and sustainable agriculture practices.",

    /* Contact Section */
    contact_title: "Place an Order or Request a Quote",
    contact_subtitle: "Fill out the form below and we’ll get back to you promptly.",
    contact_name: "Full Name",
    contact_email: "Email Address",
    contact_phone: "Phone Number",
    contact_type: "Request Type",
    contact_type_order: "Place an Order",
    contact_type_quote: "Request a Quote",
    contact_message: "Details / Special Instructions",
    contact_submit: "Submit",
    contact_info_title: "Contact Info",
    contact_address: "Kalemie Agro Farm, Kalemie, DR Congo",
    contact_email_info: "info@kalemieagro.com",
    contact_phone_info: "+243 123 456 789",
    contact_response_time: "We respond within 24 hours!",
    contact_service_area: "Service Area: Kalemie and surroundings. Weekday and weekend deliveries available.",
	/*button */
	back_to_top: "⬆️ Top",
	
    /* Footer */
   
    footer_brand_slogan: "From Farm to Table with Care",
    footer_quicklinks: "🔗 Quick Links",
    nav_home: "🏠 Home",
    nav_about: "👨‍🌾 About Us",
    nav_services: "🛠️ Services",
    nav_products: "🌿 Products",
    nav_contact: "✉️ Contact",
    footer_contact: "📞 Contact Us",
    contact_address: "📍 Address:",
    contact_email_info: "✉️ Email:",
    contact_phone_info: "☎️ Phone:",
    footer_follow: "🌐 Follow Us",
    footer_copyright: "Kalemie Agro. All rights reserved.",
	
	testimonials_title: "🌟 What Our Customers Say",
    testimonial_1: "\"Kalemie Agro’s poultry is always fresh and healthy. My family loves it!\" - Aline, Customer",
    testimonial_2: "\"Thanks to their cassava products, my restaurant saves costs and keeps quality high.\" - Joseph, Restaurant Owner",

    team_title: "👩‍🌾 Meet Our Team",
    team_member_1: "Djuma Kikombe - Founder & CEO",
    team_member_2: "Marie Kalume - Farm Manager",

    blog_title: "📰 Latest News",
    blog_1_title: "🌿 Sustainable Farming Tips",
    blog_1_summary: "Learn how Kalemie Agro is helping farmers grow cassava more efficiently.",
    blog_2_title: "🥚 Poultry Expansion",
    blog_2_summary: "We’ve added 500 new layer hens to boost egg production."
  },

  sw: {
    /* Header / Navigation */
    brand_tag: "Kuchangia Jamii",
    menu: "Menyu",
    nav_home: "Nyumbani",
    nav_work: "Kazi Yetu",
    nav_products: "Bidhaa",
    nav_services: "Huduma",
    nav_impact: "Athari",
    nav_about: "Kuhusu",
    nav_order: "Weka Agizo / Nukuu",
    lang_label: "Lugha:",

    /* Hero Section */
    hero_title: "Kuchangia Jamii Kupitia Kilimo Endelevu",
    hero_subtitle: "Kuwezesha Kalemie kupitia Kuku, Mihogo, Matunda & Usindikaji",
    learn_more: "Jifunze Zaidi",
    hero_pill: "Mbichi • Nafuu • Endelevu",
    hero_quality: "Bidhaa bora za kilimo zilizolimwa na kutengenezwa Kalemie.",
    hero_description: "Tunazalisha kuku, unga wa mihogo, na bidhaa za matunda kwa usindikaji safi, vyanzo vya ndani, na ajira bora kwa vijana na wanawake.",
    hero_order: "Weka Agizo",
    hero_quote: "Omba Nukuu",
    sample_prices: "Bei za Mfano",
    price_eggs: "Tray ya Mayai (30)",
    price_flour: "Unga wa Mihogo (1 kg)",
    price_chicken: "Kuku mzima (1.5 kg)",

    /* Our Work Section */
    our_work_title: "🌱 Kazi Yetu Kalemie Agro",
    our_work_subtitle: "Kujenga usalama wa chakula na maisha kupitia kilimo na usindikaji endelevu.",
    work_poultry_title: "🐔 Ufugaji wa Kuku",
    work_poultry_desc: "Kutoa mayai mapya na nyama bora ya kuku kwa kaya na biashara Kalemie.",
    work_cassava_title: "🌿 Kilimo cha Mihogo",
    work_cassava_desc: "Kutoka shambani hadi unga — tunakua mihogo na kusindika kuwa unga safi na nafuu.",
    work_fruit_title: "🍊 Kilimo cha Matunda & Juisi",
    work_fruit_desc: "Kukuza matunda ya ndani na kutengeneza juisi asilia kwa lishe bora na kupunguza uagizaji wa nje.",
    work_processing_title: "🏭 Usindikaji & Ongezeko la Thamani",
    work_processing_desc: "Kubadilisha mavuno kuwa bidhaa zilizofungwa, kuunda ajira kwa vijana na wanawake Kalemie.",
    impact_note: "💡 Athari: Tukichanganya kilimo na usindikaji, tunatoa chakula nafuu, kuwawezesha jamii, na kuimarisha uchumi wa Kalemie.",

    /* Products Section */
   products_title: "🛒 Bidhaa Zetu",
    products_subtitle: "Bidhaa safi, zenye lishe, na za asili kutoka Kalemie.",

    category_poultry: "🐓 Vyakula vya Kuku",
    category_fertilizers: "🌿 Mbolea",
    category_cassava: "🌿 Mihogo",
    category_fruits: "🍊 Matunda & Juisi",
    category_future: "🌱 Mazao ya Baadaye",

    product_eggs: "🥚 Mayai Freshi",
    product_eggs_desc: "Mayai ya shambani yenye lishe, yamekusudiwa kila siku kwa ubora wa hali ya juu.",
    product_chicken: "🍗 Kuku Freshi",
    product_chicken_desc: "Kuku wenye afya, waliolimwa kwa njia ya asili kwa nyama laini na ladha nzuri.",
    product_chicken_meat: "🍖 Nyama ya Kuku Iliyosindikwa",
    product_chicken_meat_desc: "Nyama ya kuku iliyosindikwa kwa usafi — salama na tayari kupikwa.",
    product_value_poultry: "🔥 Kuku Iliyokaangwa & Kutolewa Barafu",
    product_value_poultry_desc: "Kuku uliokaangwa na vipande vilivyo barafu — ladha na lishe iliyo hifadhiwa.",

    manure_title: "🌱 Mbolea ya Kuku",
    manure_desc: "Mbolea ya kuku inayoongeza rutuba ya udongo kwa njia ya asili na endelevu.",
    compost_title: "🍂 Mchanganyiko wa Komposti",
    compost_desc: "Komposti yenye virutubisho kutoka kwa taka za asili, bora kwa udongo na ukuaji wa mimea.",
    biofertilizer_title: "🧪 Biofertilizer",
    biofertilizer_desc: "Mbolea inayotumia vimelea kukuza upokeaji wa virutubisho na afya ya mimea.",

    product_flour: "🌾 Unga wa Mihogo",
    product_flour_desc: "Unga wa mihogo safi kutoka mizizi ya kienyeji, bora kwa kupika na kuoka.",
    product_chips: "🍘 Vipande vya Mihogo",
    product_chips_desc: "Vipande vya mihogo vilivyo krispi na vyenye ladha, chaguo bora la kitafunwa.",
    product_starch: "🧂 Staa ya Mihogo",
    product_starch_desc: "Staa safi ya mihogo kwa matumizi ya nyumbani na viwandani.",

    product_fruits: "🍍 Matunda Freshi",
    product_fruits_desc: "Matunda ya kienyeji, yamechaguliwa kwa ubora na ladha.",
    product_juice: "🥤 Juisi",
    product_juice_desc: "Juisi safi kutoka manga, nanasi, na goyava — zenye lishe.",
    product_jams: "🍯 Jam",
    product_jams_desc: "Jam tamu na yenye afya kutoka matunda ya tropiki.",
    product_dried: "🥭 Matunda Kavu",
    product_dried_desc: "Matunda kavu asili kama mango, nanasi, na ndizi — vitafunwa bora.",

    product_maize: "🌽 Mahindi",
    product_maize_desc: "Kilimo cha mahindi kijacho kuongeza chakula na thamani ya kilimo.",
    product_beans: "🫘 Maharagwe",
    product_beans_desc: "Maharagwe yenye lishe, yalimwa kwa kienyeji kusaidia usalama wa chakula.",
    product_vegetables: "🥦 Mboga",
    product_vegetables_desc: "Mboga safi zinazosaidia lishe bora kwa jamii.",

    btn_order: "🛒 Agiza Sasa",
    /* Services Section */
    services_title: "✨ Huduma Zetu",
    services_subtitle: "Zaidi ya bidhaa, tunatoa huduma zinazoimarisha wakulima, biashara na jamii.",
    service_poultry_title: "🐔 Ugavi wa Kuku & Mayai",
    service_poultry_desc: "Ugavi wa uhakika wa mayai mapya na kuku kwa kaya, migahawa na rejareja Kalemie.",
    service_cassava_title: "🌿 Ugavi wa Mihogo & Unga",
    service_cassava_desc: "Tuna deliver unga safi wa mihogo kwa mikate, wauzaji chakula na masoko kwa bei nafuu.",
    service_fruits_title: "🍊 Kilimo cha Matunda & Usindikaji wa Juisi",
    service_fruits_desc: "Kusaidia kilimo cha matunda na usindikaji wa juisi asilia kwa usambazaji na mauzo ya ndani.",
    service_training_title: "📘 Mafunzo & Usaidizi",
    service_training_desc: "Ujenzi wa uwezo na mafunzo kwa wakulima wadogo, vijana na wanawake juu ya kilimo endelevu na usindikaji.",
    service_packaging_title: "📦 Agizo Maalumu & Ufungaji",
    service_packaging_desc: "Ufumbaji maalumu na utoaji wa agizo kwa biashara, matukio na jamii.",
    service_community_title: "🤝 Uteteaji wa Jamii",
    service_community_desc: "Programu za kusaidia usalama wa chakula, uundaji wa ajira na uwezeshaji wa kiuchumi Kalemie.",

    /* Impact Section */
    impact_title: "🌍 Athari Zetu",
    impact_subtitle: "🌱 Angalia jinsi Kalemie Agro inavyobadilisha kilimo na maisha ya jamii.",
    impact_food: "Usalama wa Chakula",
    impact_food_desc: "Kutoa mayai mapya, kuku na mazao ya ndani ili kuhakikisha jamii inapata chakula chenye lishe.",
    impact_sustainable: "Kilimo Endelevu",
    impact_sustainable_desc: "Kutumia mbinu rafiki kwa mazingira katika kilimo na usindikaji ili kulinda ardhi kwa vizazi vijavyo.",
    impact_jobs: "Uundaji wa Ajira",
    impact_jobs_desc: "Kutoa fursa za ajira na ujuzi kwa vijana na wanawake Kalemie.",
    impact_empower: "Uwezeshaji wa Jamii",
    impact_empower_desc: "Kusaidia wakulima wa ndani, wajasiriamali na familia kiuchumi na kijamii.",
    impact_growth: "Ukuaji wa Uchumi",
    impact_growth_desc: "Kuongeza uchumi wa Kalemie kupitia usindikaji wa mazao na soko.",
    impact_environment: "Uwajibikaji wa Mazingira",
    impact_environment_desc: "Kupunguza taka, kutumia rasilimali endelevu, na kuhimiza mbinu endelevu katika shughuli.",

   /* About Section */
about_title: "🌾 Kuhusu Kalemie Agro",
about_subtitle: "🌱 Tumejizatiti kwa kilimo endelevu, uwezeshaji wa jamii, na chakula chenye lishe kwa wote.",
about_mission_title: "🎯 Dhamira Yetu",
about_mission_desc: "🍎 Kutoa bidhaa mbichi, zenye afya na nafuu huku tukiacha fursa za kiuchumi kwa vijana na wanawake Kalemie.",
about_vision_title: "🔭 Maono Yetu",
about_vision_desc: "🏆 Kuwa biashara ya kilimo inayoongoza katika eneo, ikitambulika kwa uendelevu, athari za jamii na bidhaa bora.",
about_values_title: "💎 Maadili Yetu",
about_values_desc: "🤝 Uadilifu, 🌱 uendelevu, 👥 uwezeshaji wa jamii, ✅ ubora, na 💡 ubunifu vinaongoza kila tunachofanya.",
about_why_title: "❓ Kwa Nini Utuchague?",
about_why_desc: "🌾 Tunachanganya mbinu za kisasa za kilimo, usindikaji safi, na vyanzo vya ndani kutoa bidhaa unaoweza kuziamini.",
founder_note: "🌱 Kutoka kwa Mwenza Mwanzilishi: \"Kalemie Agro ni zaidi ya shamba — ni harakati ya kuchangia jamii, kuwawezesha watu, na kulinda ardhi yetu kwa vizazi vijavyo.\"",

    /* FAQ Section */
    faq_title: "Maswali Yanayoulizwa Mara kwa Mara",
    faq_delivery_q: "Je, mnawasambazia shule na migahawa?",
    faq_delivery_a: "Ndiyo. Tunatoa usafirishaji wa mara kwa mara kwa wingi na mikatano.",
    faq_lab_q: "Je, bidhaa zenu zinapimwa maabara?",
    faq_lab_a: "Tunafanya ukaguzi wa unyevu kwa unga wa mihogo na ukaguzi wa afya ya kuku.",
    faq_subscribe_q: "Je, kaya zinaweza kujisajili kwa mayai?",
    faq_subscribe_a: "Ndiyo. Tunatoa usajili wa kila wiki na kila mwezi kwa familia.",
    faq_organic_q: "Je, mnatumia mbolea asili au kemikali?",
    faq_organic_a: "Tunazingatia kilimo endelevu na kemikali chache, tukipa kipaumbele kwa mbinu za asili kadri inavyowezekana.",
    faq_bulk_q: "Je, ninawezaje kuweka agizo kwa wingi?",
    faq_bulk_a: "Unaweza kuwasiliana nasi moja kwa moja kupitia fomu ya booking, simu, au WhatsApp kupanga usafirishaji mkubwa.",
    faq_future_q: "Ni mazao gani mnayopanga siku za usoni?",
    faq_future_a: "Tunaongeza kilimo cha mahindi, maharagwe na mboga za msimu ili kuongeza usambazaji wa chakula.",
    faq_visit_q: "Je, ninaweza kutembelea shamba?",
    faq_visit_a: "Ndiyo! Tunakaribisha ziara za jamii, shule, na ukaguzi wa washirika kwa miadi.",
    faq_training_q: "Je, mnatoa mafunzo kwa wakulima?",
    faq_training_a: "Mara kwa mara tunafanya warsha juu ya utunzaji wa kuku, usindikaji wa mihogo, na mbinu za kilimo endelevu.",

    /* Contact Section */
    contact_title: "Weka Agizo au Omba Nukuu",
    contact_subtitle: "Jaza fomu hapa chini na tutawasiliana nawe haraka.",
    contact_name: "Jina Kamili",
    contact_email: "Barua Pepe",
    contact_phone: "Nambari ya Simu",
    contact_type: "Aina ya Ombi",
    contact_type_order: "Weka Agizo",
    contact_type_quote: "Omba Nukuu",
    contact_message: "Maelezo / Maagizo Maalumu",
    contact_submit: "Tuma",
    contact_info_title: "Taarifa za Mawasiliano",
    contact_address: "Shamba la Kalemie Agro, Kalemie, DR Congo",
    contact_email_info: "info@kalemieagro.com",
    contact_phone_info: "+243 123 456 789",
    contact_response_time: "Tuna jibu ndani ya masaa 24!",
    contact_service_area: "Eneo la Huduma: Kalemie na maeneo ya jirani. Usafirishaji wa siku za wiki na wikendi unawezekana.",

	/*button */
	back_to_top: "⬆️ Juu",
    /* Footer */
    footer_brand_slogan: "Kutoka Shambani hadi Meza kwa Uangalifu",
    footer_quicklinks: "🔗 Viungo vya Haraka",
    nav_home: "🏠 Nyumbani",
    nav_about: "👨‍🌾 Kuhusu Sisi",
    nav_services: "🛠️ Huduma",
    nav_products: "🌿 Bidhaa",
    nav_contact: "✉️ Wasiliana",
    footer_contact: "📞 Wasiliana Nasi",
    contact_address: "📍 Anwani:",
    contact_email_info: "✉️ Barua pepe:",
    contact_phone_info: "☎️ Simu:",
    footer_follow: "🌐 Tufuate",
    footer_copyright: "Kalemie Agro. Haki zote zimehifadhiwa.",
	testimonials_title: "🌟 Maoni ya Wateja Wetu",
    testimonial_1: "\"Kuku wa Kalemie Agro huwa safi na wenye afya kila wakati. Familia yangu inaupenda!\" - Aline, Mteja",
    testimonial_2: "\"Shukrani kwa bidhaa zao za mihogo, mgahawa wangu unaokoa gharama na kudumisha ubora.\" - Joseph, Mmiliki wa Mgahawa",

    team_title: "👩‍🌾 Kutana na Timu Yetu",
    team_member_1: "Djuma Kikombe - Mwanzilishi & Mkurugenzi Mkuu",
    team_member_2: "Marie Kalume - Meneja wa Shamba",

    blog_title: "📰 Habari Mpya",
    blog_1_title: "🌿 Vidokezo vya Kilimo Endelevu",
    blog_1_summary: "Jifunze jinsi Kalemie Agro inavyosaidia wakulima kukuza mihogo kwa ufanisi zaidi.",
    blog_2_title: "🥚 Upanuzi wa Kuku",
    blog_2_summary: "Tumeongeza kuku wa mayai 500 ili kuongeza uzalishaji wa mayai."
  },

  fr: {
    /* Header / Navigation */
    brand_tag: "Nourrir les Communautés",
    menu: "Menu",
    nav_home: "Accueil",
    nav_work: "Notre Travail",
    nav_products: "Produits",
    nav_services: "Services",
    nav_impact: "Impact",
    nav_about: "À propos",
    nav_order: "Commande / Devis",
    lang_label: "Langue :",

    /* Hero Section */
    hero_title: "Nourrir les Communautés grâce à l'Agriculture Durable",
    hero_subtitle: "Autonomiser Kalemie grâce à la Volaille, le Manioc, les Fruits et la Transformation",
    learn_more: "En Savoir Plus",
    hero_pill: "Frais • Abordable • Durable",
    hero_quality: "Des produits agroalimentaires de qualité cultivés et préparés à Kalemie.",
    hero_description: "Nous produisons de la volaille, de la farine de manioc et des produits à base de fruits avec un traitement hygiénique, des sources locales et des emplois équitables pour les jeunes et les femmes.",
    hero_order: "Passer une Commande",
    hero_quote: "Demander un Devis",
    sample_prices: "Exemples de Prix",
    price_eggs: "Plateau d’œufs (30)",
    price_flour: "Farine de Manioc (1 kg)",
    price_chicken: "Poulet entier (1,5 kg)",

    /* Our Work Section */
    our_work_title: "🌱 Notre Travail chez Kalemie Agro",
    our_work_subtitle: "Renforcer la sécurité alimentaire et les moyens de subsistance grâce à l'agriculture durable et à la transformation.",
    work_poultry_title: "🐔 Élevage de Volaille",
    work_poultry_desc: "Fourniture d'œufs frais et de viande de poulet de qualité aux ménages et entreprises à Kalemie.",
    work_cassava_title: "🌿 Production de Manioc",
    work_cassava_desc: "De la ferme à la farine — nous cultivons le manioc et le transformons en farine hygiénique et abordable.",
    work_fruit_title: "🍊 Culture de Fruits & Jus",
    work_fruit_desc: "Cultiver des fruits locaux et produire des jus naturels pour des régimes plus sains et réduire les importations.",
    work_processing_title: "🏭 Transformation & Valeur Ajoutée",
    work_processing_desc: "Transformer les récoltes en produits emballés, créant des emplois pour les jeunes et les femmes à Kalemie.",
    impact_note: "💡 Impact : En combinant agriculture et transformation, nous fournissons des aliments abordables, autonomisons les communautés et renforçons l'économie de Kalemie.",

    /* Products Section */
     products_title: "🛒 Nos Produits",
    products_subtitle: "Produits agricoles frais, nutritifs et locaux de Kalemie.",

    category_poultry: "🐓 Volaille",
    category_fertilizers: "🌿 Engrais",
    category_cassava: "🌿 Manioc",
    category_fruits: "🍊 Fruits & Jus",
    category_future: "🌱 Cultures Futures",

    product_eggs: "🥚 Œufs Frais",
    product_eggs_desc: "Œufs frais de la ferme, riches en protéines et collectés quotidiennement pour garantir la fraîcheur.",
    product_chicken: "🍗 Poulet Frais",
    product_chicken_desc: "Poulets élevés naturellement pour une viande tendre et savoureuse.",
    product_chicken_meat: "🍖 Viande de Poulet Transformée",
    product_chicken_meat_desc: "Viande de poulet traitée hygiéniquement — propre, sûre et prête à cuisiner.",
    product_value_poultry: "🔥 Poulet Fumé & Surgelé",
    product_value_poultry_desc: "Poulet fumé et découpes surgelées — goût, fraîcheur et nutrition préservés.",

    manure_title: "🌱 Engrais Naturel",
    manure_desc: "Engrais à base de fumier de volaille qui enrichit naturellement et durablement le sol.",
    compost_title: "🍂 Mélange de Compost",
    compost_desc: "Compost riche en nutriments à partir de déchets organiques, parfait pour améliorer le sol et favoriser la croissance des plantes.",
    biofertilizer_title: "🧪 Biofertilisant",
    biofertilizer_desc: "Engrais microbien qui améliore l’absorption des nutriments et soutient la santé des plantes.",

    product_flour: "🌾 Farine de Manioc",
    product_flour_desc: "Farine de manioc finement transformée à partir de racines locales, parfaite pour la cuisine et la pâtisserie.",
    product_chips: "🍘 Chips de Manioc",
    product_chips_desc: "Chips de manioc croquantes et savoureuses, idéales comme collation saine.",
    product_starch: "🧂 Fécule de Manioc",
    product_starch_desc: "Fécule de manioc pure pour usage domestique et industriel.",

    product_fruits: "🍍 Fruits Frais",
    product_fruits_desc: "Fruits locaux, cueillis à la main pour la fraîcheur, la qualité et le goût.",
    product_juice: "🥤 Jus",
    product_juice_desc: "Jus rafraîchissants à base de mangue, ananas et goyave — naturels et riches en nutriments.",
    product_jams: "🍯 Confitures",
    product_jams_desc: "Confitures sucrées et saines élaborées à partir de fruits tropicaux.",
    product_dried: "🥭 Fruits Secs",
    product_dried_desc: "Mango, ananas et bananes séchés naturellement — collations parfaites et énergétiques.",

    product_maize: "🌽 Maïs",
    product_maize_desc: "Culture de maïs à venir pour augmenter l’approvisionnement alimentaire et la valeur agricole.",
    product_beans: "🫘 Haricots",
    product_beans_desc: "Haricots nutritifs cultivés localement pour soutenir la sécurité alimentaire.",
    product_vegetables: "🥦 Légumes",
    product_vegetables_desc: "Légumes frais pour promouvoir une alimentation saine dans les communautés.",

    btn_order: "🛒 Commander",
    /* Services Section */
    services_title: "✨ Nos Services",
    services_subtitle: "Nous allons au-delà des produits pour offrir des services qui autonomisent les agriculteurs, entreprises et la communauté locale.",
    service_poultry_title: "🐔 Fourniture de Volaille & Œufs",
    service_poultry_desc: "Fourniture fiable d'œufs frais et de poulet transformé pour ménages, restaurants et détaillants à Kalemie.",
    service_cassava_title: "🌿 Fourniture de Manioc & Farine",
    service_cassava_desc: "Nous livrons de la farine de manioc hygiénique aux boulangeries, vendeurs alimentaires et marchés locaux à prix abordables.",
    service_fruits_title: "🍊 Culture de Fruits & Transformation de Jus",
    service_fruits_desc: "Assistance à la culture de fruits et à la transformation en jus naturel pour distribution et vente locale.",
    service_training_title: "📘 Formation & Support",
    service_training_desc: "Renforcement des capacités et formation pour petits agriculteurs, jeunes et femmes sur l'agriculture durable et les techniques de transformation.",
    service_packaging_title: "📦 Commandes sur Mesure & Emballage",
    service_packaging_desc: "Solutions d'emballage personnalisées et exécution de commandes en gros pour entreprises, événements et programmes communautaires.",
    service_community_title: "🤝 Engagement Communautaire",
    service_community_desc: "Programmes pour soutenir la sécurité alimentaire, la création d'emplois et l'autonomisation économique à Kalemie.",

    /* Impact Section */
    impact_title: "🌍 Notre Impact",
    impact_subtitle: "🌱 Découvrez comment Kalemie Agro transforme l'agriculture et les moyens de subsistance dans la région.",
    impact_food: "Sécurité Alimentaire",
    impact_food_desc: "Fournir des œufs frais, du poulet et des produits locaux pour garantir un accès à une alimentation nutritive.",
    impact_sustainable: "Agriculture Durable",
    impact_sustainable_desc: "Mettre en œuvre des pratiques de culture et de transformation respectueuses de l'environnement pour protéger la terre pour les générations futures.",
    impact_jobs: "Création d'Emplois",
    impact_jobs_desc: "Offrir des opportunités d'emploi et de développement des compétences aux jeunes et aux femmes à Kalemie.",
    impact_empower: "Autonomisation Communautaire",
    impact_empower_desc: "Soutenir les agriculteurs, entrepreneurs et familles locaux pour grandir économiquement et socialement.",
    impact_growth: "Croissance Économique",
    impact_growth_desc: "Stimuler l'économie locale de Kalemie grâce à la transformation à valeur ajoutée et à l'accès aux marchés.",
    impact_environment: "Responsabilité Environnementale",
    impact_environment_desc: "Minimiser les déchets, utiliser des ressources renouvelables et promouvoir des pratiques durables dans toutes les opérations.",

    /* About Section */
about_title: "🌾 À propos de Kalemie Agro",
about_subtitle: "🌱 Engagés pour une agriculture durable, l'autonomisation locale et une alimentation nutritive pour tous.",
about_mission_title: "🎯 Notre Mission",
about_mission_desc: "🍎 Fournir des produits agroalimentaires frais, sains et abordables tout en créant des opportunités économiques pour les jeunes et les femmes à Kalemie.",
about_vision_title: "🔭 Notre Vision",
about_vision_desc: "🏆 Être une entreprise agroalimentaire leader dans la région, reconnue pour la durabilité, l'impact communautaire et la qualité de ses produits.",
about_values_title: "💎 Nos Valeurs",
about_values_desc: "🤝 Intégrité, 🌱 durabilité, 👥 autonomisation communautaire, ✅ qualité et 💡 innovation guident toutes nos actions.",
about_why_title: "❓ Pourquoi Nous Choisir ?",
about_why_desc: "🌾 Nous combinons des pratiques agricoles modernes, un traitement hygiénique et des sources locales pour offrir des produits de confiance.",
founder_note: "🌱 Message de Notre Fondateur : \"Kalemie Agro est plus qu'une ferme — c'est un mouvement pour nourrir nos communautés, autonomiser notre peuple et protéger nos terres pour les générations futures.\"",

    /* FAQ Section */
    faq_title: "FAQ",
    faq_delivery_q: "Livrez-vous aux écoles et restaurants ?",
    faq_delivery_a: "Oui. Nous proposons des livraisons groupées planifiées et des contrats.",
    faq_lab_q: "Vos produits sont-ils testés en laboratoire ?",
    faq_lab_a: "Nous effectuons des contrôles d'humidité pour la farine de manioc et des contrôles vétérinaires pour la santé de la volaille.",
    faq_subscribe_q: "Les ménages peuvent-ils s'abonner aux œufs ?",
    faq_subscribe_a: "Absolument. Des abonnements hebdomadaires et mensuels sont disponibles pour les familles.",
    faq_organic_q: "Utilisez-vous des intrants biologiques ou chimiques ?",
    faq_organic_a: "Nous privilégions l'agriculture durable avec peu de produits chimiques, en priorisant les méthodes biologiques lorsque c'est possible.",
    faq_bulk_q: "Comment passer une commande en gros ?",
    faq_bulk_a: "Vous pouvez nous contacter directement via le formulaire de réservation, par téléphone ou WhatsApp pour planifier de grandes livraisons.",
    faq_future_q: "Quelles cultures futures prévoyez-vous ?",
    faq_future_a: "Nous développons le maïs, les haricots et les légumes saisonniers pour diversifier l'approvisionnement alimentaire.",
    faq_visit_q: "Puis-je visiter la ferme ?",
    faq_visit_a: "Oui ! Nous accueillons des visites communautaires, scolaires et des inspections de partenaires sur rendez-vous.",
    faq_training_q: "Proposez-vous des formations pour les agriculteurs ?",
    faq_training_a: "Nous organisons occasionnellement des ateliers sur l'élevage de volaille, la transformation du manioc et les pratiques agricoles durables.",

    /* Contact Section */
    contact_title: "Passer une Commande ou Demander un Devis",
    contact_subtitle: "Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.",
    contact_name: "Nom Complet",
    contact_email: "Adresse E-mail",
    contact_phone: "Numéro de Téléphone",
    contact_type: "Type de Demande",
    contact_type_order: "Passer une Commande",
    contact_type_quote: "Demander un Devis",
    contact_message: "Détails / Instructions Spéciales",
    contact_submit: "Envoyer",
    contact_info_title: "Informations de Contact",
    contact_address: "Ferme Kalemie Agro, Kalemie, RDC",
    contact_email_info: "info@kalemieagro.com",
    contact_phone_info: "+243 123 456 789",
    contact_response_time: "Nous répondons sous 24 heures !",
    contact_service_area: "Zone de Service : Kalemie et environs. Livraisons en semaine et le week-end disponibles.",
	
	/*button */
	back_to_top: "⬆️ Haut",
    /* Footer */
    footer_brand_slogan: "De la ferme à la table avec soin",
    footer_quicklinks: "🔗 Liens rapides",
    nav_home: "🏠 Accueil",
    nav_about: "👨‍🌾 À propos",
    nav_services: "🛠️ Services",
    nav_products: "🌿 Produits",
    nav_contact: "✉️ Contact",
    footer_contact: "📞 Contactez-nous",
    contact_address: "📍 Adresse :",
    contact_email_info: "✉️ Email :",
    contact_phone_info: "☎️ Téléphone :",
    footer_follow: "🌐 Suivez-nous",
    footer_copyright: "Kalemie Agro. Tous droits réservés.",

	testimonials_title: "🌟 Ce que disent nos clients",
    testimonial_1: "\"La volaille de Kalemie Agro est toujours fraîche et saine. Ma famille l'adore !\" - Aline, Cliente",
    testimonial_2: "\"Grâce à leurs produits de manioc, mon restaurant réduit les coûts tout en maintenant une haute qualité.\" - Joseph, Propriétaire de restaurant",

    team_title: "👩‍🌾 Rencontrez notre équipe",
    team_member_1: "Djuma Kikombe - Fondateur & PDG",
    team_member_2: "Marie Kalume - Responsable de la ferme",

    blog_title: "📰 Dernières nouvelles",
    blog_1_title: "🌿 Conseils pour une agriculture durable",
    blog_1_summary: "Découvrez comment Kalemie Agro aide les agriculteurs à cultiver le manioc plus efficacement.",
    blog_2_title: "🥚 Expansion de la volaille",
    blog_2_summary: "Nous avons ajouté 500 nouvelles poules pondeuses pour augmenter la production d'œufs."
  },

  bi: {
    /* Header / Navigation */
    brand_tag: "Gufungura Imiryango",
    menu: "Ikarata",
    nav_home: "Ahabanza",
    nav_work: "Ibikorwa vyacu",
    nav_products: "Ibicuruzwa",
    nav_services: "Serivisi",
    nav_impact: "Ingaruka nziza",
    nav_about: "Ibiranga",
    nav_order: "Tegeka / Saba igiciro",
    lang_label: "Ururimi:",

  /* Hero Section */
  hero_title: "Gufungura Imiryango biciye mu buhinzi burama",
  hero_subtitle: "Guteza imbere Kalemie biciye mu nkoko, umwumbati, ivyamwa n'ugutunganya",
  learn_more: "Menya vyinshi",
  hero_pill: "Fishe • Ku giciro gito • Birama",
  hero_quality: "Ibifungurwa vyiza vy’ubuhinzi bikorerwa Kalemie.",
  hero_description: "Dukora inkoko, ifu y’umwumbati, n’ibivuye ku vyamwa dukoresheje isuku, dukura mu gihugu, kandi dufasha urwaruka n’abakenyezi kubona akazi.",
  hero_order: "Tegeka",
  hero_quote: "Saba igiciro",
  sample_prices: "Ibiciro vy’icitegererezo",
  price_eggs: "Ikarato y’amagi (30)",
  price_flour: "Ifu y’umwumbati (1 kg)",
  price_chicken: "Inkoko yose (1.5 kg)",

  /* Our Work Section */
  our_work_title: "🌱 Ibikorwa vyacu muri Kalemie Agro",
  our_work_subtitle: "Kugwiza ibifungurwa no guteza imbere imibereho biciye mu buhinzi burama n’ugutunganya.",
  work_poultry_title: "🐔 Ubworozi bw’inkoko",
  work_poultry_desc: "Gutanga amagi meza n’inyama z’inkoko nziza ku miryango n’amashirahamwe yo muri Kalemie.",
  work_cassava_title: "🌿 Umwumbati",
  work_cassava_desc: "Kuva ku murima gushika ku ifu — turarima umwumbati tukawutunganya mu ifu isukuye kandi ku giciro gito.",
  work_fruit_title: "🍊 Ivyo kurima ivyamwa &amp; imitobe",
  work_fruit_desc: "Kurima ivyamwa vyo mu gihugu no gukora imitobe karemano, bigafasha kurya neza no kugabanya ivyo dutumiza hanze.",
  work_processing_title: "🏭 Gutunganya &amp; Kwongeza agaciro",
  work_processing_desc: "Guhindura umwimbu mu bicuruzwa bipakiye, bikarema akazi ku rwaruka n’abakenyezi bo muri Kalemie.",
  impact_note: "💡 Ingaruka: Duhurije hamwe ubuhinzi n’ugutunganya, dutanga ibifungurwa ku giciro gito, dufasha imiryango, kandi dukomeza ubukungu bwa Kalemie.",

  /* Products Section */
  products_title: "🛒 Ibicuruzwa vyacu",
  products_subtitle: "Ibifungurwa bishasha, bifise intungamubiri, kandi bikorerwa Kalemie.",

  /* Categories */
  category_poultry: "🐓 Inkoko",
  category_fertilizers: "🌿 Ifumbire",
  category_cassava: "🌿 Umwumbati",
  category_fruits: "🍊 Ivyamwa &amp; Imitobe",
  category_future: "🌱 Imirima y’ahazaza",

  /* Poultry Products */
  product_eggs: "🥚 Amagi mashasha",
  product_eggs_desc: "Amagi y’inkoko yakuwe ku murima, afise intungamubiri, kandi akoranywa buri munsi kugira ngo agume afise ubuziranenge.",
  product_chicken: "🍗 Inkoko nshasha",
  product_chicken_desc: "Inkoko zakuze mu buryo karemano, zifise inyama zoroshe kandi ziryoshe.",
  product_chicken_meat: "🍖 Inyama z’inkoko zatunganijwe",
  product_chicken_meat_desc: "Inyama z’inkoko zatunganijwe mu buryo bw’isuku — zisukuye, zitekanye, kandi ziteguye gutekwa.",
  product_value_poultry: "🔥 Inkoko yotswe &amp; y’akazuyazi",
  product_value_poultry_desc: "Inkoko yotswe n’inyama z’akazuyazi — bigumiza uburyohe, isuku, n’intungamubiri kugira ngo bimare igihe kirekire.",

  /* Fertilizers */
  manure_title: "🌱 Ifumbire karemano",
  manure_desc: "Ifumbire ikorwa n’inkoko, yongera ubutare mu butaka mu buryo burama. Irengera ibidukikije kandi irafasha cane mu kwimbura.",
  compost_title: "🍂 Ifumbire y’ivyatsi",
  compost_desc: "Ifumbire ikungahaye ku ntungamubiri ikozwe mu bisigazwa karemano, ikongera ubutaka, ikagumiza amazi, kandi ikongera umwimbu.",
  biofertilizer_title: "🧪 Ifumbire ya mikorobe",
  biofertilizer_desc: "Ifumbire ikozwe n’imikorobe, ifasha ibiterwa gukura neza, kwihanganira indwara, no kurima mu buryo burama.",

  /* Cassava */
  product_flour: "🌾 Ifu y’umwumbati",
  product_flour_desc: "Ifu y’umwumbati yatunganijwe neza kuva ku mwumbati w’iwacu, ikwiriye guteka no gukora ibifungurwa.",
  product_chips: "🍘 Ibisate vy’umwumbati",
  product_chips_desc: "Ibisate vy’umwumbati biryoshe kandi bikomeye — ibifungurwa vyiza vy’akarusho.",
  product_starch: "🧂 Isukari y’umwumbati",
  product_starch_desc: "Isukari y’umwumbati isukuye ikoreshwa mu rugo no mu nganda.",

  /* Fruits &amp; Juices */
  product_fruits: "🍍 Ivyamwa bishasha",
  product_fruits_desc: "Ivyo kurima vyo mu gihugu, vyatoranijwe kugira bifise ubuziranenge n’uburyohe.",
  product_juice: "🥤 Imitobe",
  product_juice_desc: "Imitobe iryohera ikozwe mu manga, ananas, na guava — karemano kandi irimwo intungamubiri.",
  product_jams: "🍯 Ibisuguti",
  product_jams_desc: "Ibisuguti birimwo isukari n’intungamubiri bikozwe mu vyamwa vyo mu karere.",
  product_dried: "🥭 Ivyamwa vyumye",
  product_dried_desc: "Ivyo kurya vyumye nk’amanga, ananas, n’ibitoke — ibifungurwa vyuzuye inguvu.",

  /* Future Crops */
  product_maize: "🌽 Ibigori",
  product_maize_desc: "Ubwimbu bw’ibigori buzotangura vuba kugira ngo bwongere ibifungurwa n’agaciro k’uburimyi.",
  product_beans: "🫘 Ibitoke",
  product_beans_desc: "Ibitoke bifise intungamubiri, bikorerwa iwacu kugira ngo bifashe mu kurwanya inzara.",
  product_vegetables: "🥦 Imboga",
  product_vegetables_desc: "Imboga nshasha zigafasha kurya neza mu miryango yo mu gihugu.",

  /* Button */
  btn_order: "🛒 Tegeka ubu",

  /* Services Section */
  services_title: "✨ Serivisi zacu",
  services_subtitle: "Turarenza ibicuruzwa, dutanga serivisi zifasha abahinzi, amashirahamwe, n’imiryango yo mu gihugu.",
  service_poultry_title: "🐔 Gutanga inkoko &amp; amagi",
  service_poultry_desc: "Gutanga amagi mashasha n’inyama z’inkoko zatunganijwe ku miryango, amaresitora, n’abadandaza bo muri Kalemie.",
  service_cassava_title: "🌿 Gutanga umwumbati &amp; ifu",
  service_cassava_desc: "Dutanga ifu y’umwumbati isukuye ku masoko, abateka, n’abadandaza ku giciro gito.",
  service_fruits_title: "🍊 Kurima ivyamwa &amp; gutunganya imitobe",
  service_fruits_desc: "Gufasha mu kurima ivyamwa no gutunganya imitobe karemano igurishwa mu gihugu.",
  service_training_title: "📘 Amahugurwa &amp; Inkunga",
  service_training_desc: "Guhugura abahinzi bato, urwaruka, n’abakenyezi ku buhinzi burama n’ugutunganya.",
  service_packaging_title: "📦 Gutunganya ibipaki &amp; gutanga ibicuruzwa",
  service_packaging_desc: "Gutanga ibisubizo vy’ibipaki vyihariye n’ugutanga ibicuruzwa ku bwinshi ku mashirahamwe, ibirori, n’imigambi y’imiryango.",
  service_community_title: "🤝 Gufasha imiryango",
  service_community_desc: "Imigambi ifasha mu kurwanya inzara, kurema akazi, no guteza imbere ubukungu bwa Kalemie.",

  /* Impact Section */
  impact_title: "🌍 Ingaruka zacu",
  impact_subtitle: "🌱 Raba ukuntu Kalemie Agro ihindura uburimyi n’imibereho muri ako karere.",
  impact_food: "Umutekano w’ibifungurwa",
  impact_food_desc: "Gutanga amagi mashasha, inkoko, n’ibifungurwa bikorerwa iwacu kugira ngo imiryango ibone ibifungurwa bifise intungamubiri.",
  impact_sustainable: "Ubuhinzi burama",
  impact_sustainable_desc: "Gukoresha uburyo burengera ibidukikije mu kurima no gutunganya kugira ngo ubutaka bugume bufise ubuzima.",
  impact_jobs: "Kurema akazi",
  impact_jobs_desc: "Gutanga akazi n’amahugurwa ku rwaruka n’abakenyezi bo muri Kalemie.",
  impact_empower: "Guteza imbere imiryango",
  impact_empower_desc: "Gufasha abahinzi, abadandaza, n’imiryango kugira ngo bagire iterambere ry’ubukungu n’imibereho.",
  impact_growth: "Iterambere ry’ubukungu",
  impact_growth_desc: "Guteza imbere ubukungu bwa Kalemie biciye mu gutunganya no gushikana ibicuruzwa ku masoko.",
  impact_environment: "Kwubahiriza ibidukikije",
  impact_environment_desc: "Kugabanya umwavu, gukoresha ibikoresho bisubirwamwo, no guteza imbere uburyo burama mu bikorwa vyacu.",

  /* About Section */
  about_title: "🌾 Ibiranga Kalemie Agro",
  about_subtitle: "🌱 Twiyemeje uburimyi burama, guteza imbere abanyagihugu, no gutanga ibifungurwa bifise intungamubiri kuri bose.",
  about_mission_title: "🎯 Intumbero yacu",
  about_mission_desc: "🍎 Gutanga ibifungurwa bishasha, bifise intungamubiri, kandi ku giciro gito, tukarema amahirwe y’ubukungu ku rwaruka n’abakenyezi bo muri Kalemie.",
  about_vision_title: "🔭 Icyerekezo cacu",
  about_vision_desc: "🏆 Kuba ishirahamwe riyoboye mu buhinzi muri ako karere, rizwi ku burama, ingaruka nziza ku muryango, n’ibicuruzwa bifise ubuziranenge.",
  about_values_title: "💎 Indangagaciro zacu",
  about_values_desc: "🤝 Ukuri, 🌱 uburama, 👥 guteza imbere abanyagihugu, ✅ ubuziranenge, na 💡 udushasha ni indangagaciro ziduha intumbero.",
  about_why_title: "❓ Kubera iki mutuhitamwo?",
  about_why_desc: "🌾 Duhuza ubuhinga bugezweho mu buhinzi, gutunganya mu buryo bw’isuku, no gukura ibikoresho mu gihugu kugira dutange ibicuruzwa vyizewe.",
  founder_note: "🌱 Ijambo ry’Umushingantahe: \"Kalemie Agro si umurima gusa — ni umugambi wo gufungura imiryango, guteza imbere abantu bacu, no kurengera ubutaka bwacu ku banyuma.\"",

  /* FAQ Section */
  faq_title: "Ibibazo Bikunze Kubazwa",
  faq_delivery_q: "Muratanga ibicuruzwa ku mashure n’amarestora?",
  faq_delivery_a: "Ego. Dutanga ibicuruzwa ku bwinshi ku gihe hamwe n’amasezerano.",
  faq_lab_q: "Ibicuruzwa vyanyu birageragezwa mu biharuro?",
  faq_lab_a: "Turakora ubugerageza bw’ubushuhe ku ifu y’umwumbati hamwe n’ivyigwa vy’inkoko n’abaveterineri.",
  faq_subscribe_q: "Imiryango irashobora kwiyandikisha kugira ibone amagi?",
  faq_subscribe_a: "Yego cane. Hariho uburyo bwo kwiyandikisha ku ndwi no ku kwezi ku miryango.",
  faq_organic_q: "Mukoreshwa ifumbire karemano canke imiti?",
  faq_organic_a: "Duharanira uburimyi burama dukoresha imiti mikeya, tukaha agaciro ifumbire karemano aho bishoboka.",
  faq_bulk_q: "Noshobora gutegeka ibicuruzwa ku bwinshi gute?",
  faq_bulk_a: "Urashobora kutwandikira biciye ku fomu yo gutumako, terefone, canke WhatsApp kugira utegure itangwa ry’ibicuruzwa ku bwinshi.",
  faq_future_q: "Ni ibiterwa ibihe bitegekanijwe mu gihe kizokwira?",
  faq_future_a: "Turiko twagura ibikorwa mu bigori, ibitoke, n’imboga z’ibihe kugira twongere ibifungurwa.",
  faq_visit_q: "Noshobora gusura umurima?",
  faq_visit_a: "Yego! Turakira gusura kw’abanyagihugu, amashure, n’abafatanyabikorwa biciye ku masezerano.",
  faq_training_q: "Muratanga amahugurwa ku bahinzi?",
  faq_training_a: "Turategura amahugurwa ku bworozi bw’inkoko, gutunganya umwumbati, n’uburimyi burama.",

  /* Contact Section */
  contact_title: "Tegeka canke Saba Igiciro",
  contact_subtitle: "Nuzuza ifishi iri hasi, tukuzosubiza vuba.",
  contact_name: "Izina ryuzuye",
  contact_email: "Aderesi ya Email",
  contact_phone: "Numero ya Terefone",
  contact_type: "Ubwoko bw’ico usaba",
  contact_type_order: "Tegeka",
  contact_type_quote: "Saba Igiciro",
  contact_message: "Ibisobanuro / Ivyo wifuza vyihariye",
  contact_submit: "Rungika",
  contact_info_title: "Amakuru yo Kutwandikira",
  contact_address: "Umurima wa Kalemie Agro, Kalemie, RDC",
  contact_email_info: "info@kalemieagro.com",
  contact_phone_info: "+243 123 456 789",
  contact_response_time: "Turasubiza mu masaha 24!",
  contact_service_area: "Aho dukorera: Kalemie n’akarere kihegereye. Dutanga ibicuruzwa ku ndwi no mu mpera z’indwi.",
  back_to_top: "⬆️ Hejuru",

  /* Footer */
  footer_brand_slogan: "Kuva ku murima gushika ku meza — tubikora n’urukundo",
  footer_quicklinks: "🔗 Imiyoboro yihuta",
  nav_home: "🏠 Ahabanza",
  nav_about: "👨‍🌾 Ibiranga",
  nav_services: "🛠️ Serivisi",
  nav_products: "🌿 Ibicuruzwa",
  nav_contact: "✉️ Kutwandikira",
  footer_contact: "📞 Twandikire",
  contact_address: "📍 Aderesi:",
  contact_email_info: "✉️ Email:",
  contact_phone_info: "☎️ Terefone:",
  footer_follow: "🌐 Dukurikire",
  footer_copyright: "Kalemie Agro. Uburenganzira bwose burabitswe.",

  /* Testimonials */
  testimonials_title: "🌟 Ivyo Abakiriya Bavuga",
  testimonial_1: "\"Inkoko za Kalemie Agro ziba nshasha kandi zifise ubuzima. Umuryango wanje urazikunda!\" - Aline, Umukiriya",
  testimonial_2: "\"Kubera ibicuruzwa vy’umwumbati, resitora yanje irunguka kandi igumiza ubuziranenge.\" - Joseph, Umuyobozi wa Resitora",

  /* Team */
  team_title: "👩‍🌾 Menya Ikipe yacu",
  team_member_1: "Djuma Kikombe - Umushingantahe &amp; Umuyobozi Mukuru",
  team_member_2: "Marie Kalume - Umuyobozi w’Umurima",

  /* Blog */
  blog_title: "📰 Inkuru nshasha",
  blog_1_title: "🌿 Inama ku Bihinzi Burama",
  blog_1_summary: "Menya ukuntu Kalemie Agro ifasha abahinzi kurima umwumbati neza.",
  blog_2_title: "🥚 Kwagura Ubworozi bw’Inkoko",
  blog_2_summary: "Twongereye inkoko 500 zishobora gutanga amagi kugira twongere umwimbu."
}

};




  // Update all elements with data-i18n
  const updateLanguage = (lang) => {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if(translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  };

  // Initial language (default to English)
  updateLanguage(langSelector.value);

  // On change
  langSelector.addEventListener("change", (e) => {
    updateLanguage(e.target.value);
  });

});
