<template>
    <div class="min-h-screen bg-gray-50">
        <div class="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-8 sm:py-12">
            <button @click="router.back()"
                class="inline-flex items-center text-[#8B4513] hover:text-[#6B3410] font-semibold mb-6 sm:mb-8 transition-colors">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
            </button>

            <div v-if="post" class="max-w-4xl mx-auto">
                <div class="w-full h-64 sm:h-96 md:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden mb-6 sm:mb-8">
                    <img :src="post.image" :alt="post.title" class="w-full h-full object-cover">
                </div>
                <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 mb-6 sm:mb-8">
                    <div class="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[#999] mb-4 sm:mb-6">
                        <div class="flex items-center gap-2">
                            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{{ post.date }}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span>{{ post.author }}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                            </svg>
                            <span>{{ post.category }}</span>
                        </div>
                    </div>

                    <h1
                        class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-4 sm:mb-6 leading-tight">
                        {{ post.title }}
                    </h1>

                    <p class="text-base sm:text-lg text-[#6b6b6b] leading-relaxed mb-6">
                        {{ post.excerpt }}
                    </p>
                </div>

                <div
                    class="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                    <div v-html="post.content" class="text-[#4a4a4a] leading-relaxed space-y-4 sm:space-y-6"></div>
                </div>

                <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 mt-6 sm:mt-8">
                    <h3 class="text-lg sm:text-xl font-bold text-[#1a1a1a] mb-4">Share this article</h3>
                    <div class="flex flex-wrap gap-3">
                        <button
                            class="flex items-center gap-2 bg-[#1877F2] hover:bg-[#166FE5] text-white px-4 py-2 rounded-lg transition-colors text-sm sm:text-base">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            Facebook
                        </button>
                        <button
                            class="flex items-center gap-2 bg-[#1DA1F2] hover:bg-[#1A91DA] text-white px-4 py-2 rounded-lg transition-colors text-sm sm:text-base">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                            Twitter
                        </button>
                        <button
                            class="flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white px-4 py-2 rounded-lg transition-colors text-sm sm:text-base">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            LinkedIn
                        </button>
                    </div>
                </div>

                <div class="mt-12 sm:mt-16">
                    <h2 class="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-6 sm:mb-8">Related Articles</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        <div v-for="related in relatedPosts" :key="related.id" @click="toBlogDetail(related.id)"
                            class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
                            <div class="h-48 overflow-hidden">
                                <img :src="related.image" :alt="related.title"
                                    class="w-full h-full object-cover hover:scale-110 transition-transform duration-300">
                            </div>
                            <div class="p-4 sm:p-5">
                                <p class="text-xs text-[#999] mb-2">{{ related.date }}</p>
                                <h3
                                    class="text-base sm:text-lg font-bold text-[#1a1a1a] line-clamp-2 hover:text-[#8B4513] transition-colors">
                                    {{ related.title }}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div v-else class="text-center py-16 sm:py-20">
                <p class="text-lg sm:text-xl text-[#6b6b6b]">Blog post not found</p>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const blogPostsData = {
    'featured-furniture-export': {
        id: 'featured-furniture-export',
        title: 'The Future of Indonesian Furniture Export Industry',
        excerpt: 'Discover the latest trends and insights in Indonesian furniture industry and our journey in international markets. Learn how Indonesian craftsmanship meets modern design.',
        date: '20 October 2022',
        author: 'Admin Chintya',
        category: 'Industry News',
        image: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=1200&h=800&fit=crop',
        content: `
            <p>The Indonesian furniture industry has experienced remarkable growth over the past decades, establishing itself as one of the major players in the global furniture market. This success story is built on a foundation of skilled craftsmanship, sustainable materials, and innovative designs that appeal to international buyers.</p>
            
            <h2>Market Overview</h2>
            <p>Indonesia's furniture exports have consistently grown, reaching billions of dollars annually. The country's strategic location, abundant natural resources, and competitive labor costs have made it an attractive destination for furniture manufacturing and export.</p>
            
            <h2>Key Success Factors</h2>
            <p>Several factors contribute to Indonesia's success in the furniture industry:</p>
            <ul>
                <li>Rich tradition of woodworking and craftsmanship</li>
                <li>Access to high-quality tropical hardwoods</li>
                <li>Skilled artisans with generations of experience</li>
                <li>Competitive pricing without compromising quality</li>
                <li>Ability to produce both traditional and contemporary designs</li>
            </ul>
            
            <h2>Sustainability and Innovation</h2>
            <p>Modern Indonesian furniture manufacturers are increasingly focusing on sustainable practices, using certified wood and eco-friendly materials. This shift not only protects the environment but also appeals to environmentally conscious consumers in developed markets.</p>
            
            <h2>Future Outlook</h2>
            <p>The future looks bright for Indonesian furniture exports. With continued investment in technology, design innovation, and sustainable practices, the industry is well-positioned to maintain and expand its global market share.</p>
        `
    },
    'indonesia-potential-furniture-export': {
        id: 'indonesia-potential-furniture-export',
        title: "Indonesia's Potential to be the Top Furniture Exporting Countries",
        excerpt: "Furniture refers to movable objects intended to support various human activities such as seating (e.g., stools, chairs, and sofas), eating",
        date: '18 October 2022',
        author: 'Admin Chintya',
        category: 'Export Analysis',
        image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=1200&h=800&fit=crop',
        content: `
            <p>Indonesia has emerged as a significant player in the global furniture market, with the potential to become one of the top furniture exporting countries in the world. This article explores the factors contributing to this potential and the strategies that can help realize this goal.</p>
            
            <h2>Current Market Position</h2>
            <p>Indonesia currently ranks among the top 10 furniture exporters globally, with major export destinations including the United States, Europe, and Japan. The country's furniture industry employs millions of workers and contributes significantly to the national economy.</p>
            
            <h2>Competitive Advantages</h2>
            <p>Indonesia possesses several competitive advantages that position it well for becoming a top furniture exporter:</p>
            <ul>
                <li>Abundant natural resources, particularly tropical hardwoods</li>
                <li>Large pool of skilled craftsmen</li>
                <li>Lower production costs compared to developed countries</li>
                <li>Strategic geographic location for Asian and Pacific markets</li>
                <li>Growing infrastructure and logistics capabilities</li>
            </ul>
            
            <h2>Challenges and Opportunities</h2>
            <p>While the potential is significant, the industry faces challenges such as ensuring sustainable forestry practices, maintaining quality standards, and competing with other low-cost producers. However, these challenges also present opportunities for differentiation through sustainable practices and premium quality products.</p>
        `
    },
    'indonesia-furniture-export-reaches': {
        id: 'indonesia-furniture-export-reaches',
        title: "Indonesia Furniture Export Reaches US$ 1.69 Billion",
        excerpt: "Furniture refers to movable objects intended to support various human activities such as seating (e.g., stools, chairs, and sofas), eating",
        date: '18 October 2022',
        author: 'Admin Chintya',
        category: 'Market Report',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=800&fit=crop',
        content: `
            <p>Indonesian furniture exports have reached an impressive milestone of US$ 1.69 billion, marking significant growth in the sector. This achievement reflects the industry's resilience and adaptability in the face of global economic challenges.</p>
            
            <h2>Export Growth Analysis</h2>
            <p>The furniture export figures represent a substantial increase from previous years, driven by several key factors including increased demand from major markets, improved product quality, and effective marketing strategies by Indonesian manufacturers.</p>
            
            <h2>Major Export Destinations</h2>
            <p>The primary markets for Indonesian furniture exports include:</p>
            <ul>
                <li>United States - accounting for the largest share</li>
                <li>European Union countries</li>
                <li>Japan and other Asian markets</li>
                <li>Middle Eastern countries</li>
                <li>Australia and New Zealand</li>
            </ul>
            
            <h2>Product Categories</h2>
            <p>The export portfolio is diverse, ranging from traditional wooden furniture to modern contemporary designs. Popular categories include bedroom furniture, living room sets, outdoor furniture, and office furniture.</p>
        `
    },
    'marketing-strategies-indonesian-furniture': {
        id: 'marketing-strategies-indonesian-furniture',
        title: "The Marketing Strategies for Indonesian Furniture in International Market",
        excerpt: "Furniture refers to movable objects intended to support various human activities such as seating (e.g., stools, chairs, and sofas), eating",
        date: '18 October 2022',
        author: 'Admin Chintya',
        category: 'Marketing Strategy',
        image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=1200&h=800&fit=crop',
        content: `
            <p>Successfully marketing Indonesian furniture in international markets requires a comprehensive strategy that leverages the country's unique strengths while addressing the specific needs and preferences of target markets.</p>
            
            <h2>Brand Positioning</h2>
            <p>Indonesian furniture manufacturers are increasingly focusing on building strong brand identities that emphasize quality, craftsmanship, and sustainability. This positioning helps differentiate Indonesian products from competitors in other low-cost manufacturing countries.</p>
            
            <h2>Digital Marketing Strategies</h2>
            <p>The digital age has opened new avenues for reaching international buyers:</p>
            <ul>
                <li>E-commerce platforms for B2B and B2C sales</li>
                <li>Social media marketing to showcase products and craftsmanship</li>
                <li>Virtual showrooms and 3D product visualization</li>
                <li>Content marketing highlighting Indonesian craftsmanship stories</li>
                <li>SEO optimization for international search visibility</li>
            </ul>
            
            <h2>Trade Shows and Exhibitions</h2>
            <p>Participation in international furniture trade shows remains crucial for building relationships with buyers, showcasing new designs, and staying informed about market trends. Major events in Milan, High Point, and Cologne provide valuable exposure for Indonesian manufacturers.</p>
            
            <h2>Sustainability Marketing</h2>
            <p>Emphasizing sustainable and eco-friendly practices has become increasingly important. Indonesian manufacturers are highlighting their use of certified wood, traditional crafting methods, and environmentally responsible production processes to appeal to conscious consumers.</p>
        `
    },
    
    'modern-interior-design-trends': {
        id: 'modern-interior-design-trends',
        title: 'Modern Interior Design Trends 2024',
        excerpt: 'Explore the latest interior design trends that are transforming homes and commercial spaces with innovative and sustainable approaches.',
        date: '15 October 2022',
        author: 'Admin Chintya',
        category: 'Interior Design',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop',
        content: `
            <p>The world of interior design is constantly evolving, and 2024 brings exciting new trends that blend functionality with aesthetic appeal. From sustainable materials to smart home integration, modern interior design is all about creating spaces that reflect personal style while embracing innovation.</p>
            
            <h2>Sustainable and Natural Materials</h2>
            <p>One of the biggest trends in modern interior design is the emphasis on sustainability. Designers are increasingly incorporating natural materials such as bamboo, rattan, reclaimed wood, and organic textiles. These materials not only reduce environmental impact but also bring warmth and texture to living spaces.</p>
            
            <h2>Biophilic Design Elements</h2>
            <p>Bringing nature indoors continues to be a dominant trend. Key elements include:</p>
            <ul>
                <li>Living walls and vertical gardens</li>
                <li>Large windows for natural light</li>
                <li>Indoor plants and greenery</li>
                <li>Natural color palettes inspired by nature</li>
                <li>Water features for calming ambiance</li>
            </ul>
            
            <h2>Multifunctional Spaces</h2>
            <p>With more people working from home, the demand for multifunctional spaces has increased. Modern interior design focuses on creating flexible areas that can serve multiple purposes throughout the day, from home offices to entertainment zones.</p>
            
            <h2>Smart Home Integration</h2>
            <p>Technology seamlessly blends with design through smart lighting systems, automated climate control, and integrated entertainment systems. The key is making technology invisible while maintaining convenience and functionality.</p>
        `
    },
    'minimalist-furniture-design': {
        id: 'minimalist-furniture-design',
        title: "Minimalist Furniture Design: Less is More",
        excerpt: "Minimalist furniture design emphasizes simplicity, functionality, and clean lines. Learn how to create beautiful spaces with minimal furniture pieces.",
        date: '14 October 2022',
        author: 'Admin Chintya',
        category: 'Furniture Design',
        image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200&h=800&fit=crop',
        content: `
            <p>Minimalist furniture design has become increasingly popular as people seek to create calm, uncluttered living spaces. This design philosophy emphasizes the principle that "less is more," focusing on essential pieces that combine form and function beautifully.</p>
            
            <h2>Core Principles of Minimalist Design</h2>
            <p>Minimalist furniture design is guided by several key principles that help create harmonious and functional spaces. Understanding these principles is essential for anyone looking to embrace this aesthetic in their home.</p>
            
            <h2>Characteristics of Minimalist Furniture</h2>
            <p>Minimalist furniture typically features:</p>
            <ul>
                <li>Clean, straight lines and simple geometric shapes</li>
                <li>Neutral color palettes with occasional accent colors</li>
                <li>High-quality materials like solid wood, metal, and glass</li>
                <li>Multi-functional pieces that serve multiple purposes</li>
                <li>Absence of unnecessary ornamentation or decoration</li>
            </ul>
            
            <h2>Benefits of Minimalist Furniture</h2>
            <p>Choosing minimalist furniture offers numerous advantages. It creates a sense of spaciousness even in smaller rooms, reduces visual clutter, makes cleaning and maintenance easier, and allows quality pieces to stand out. The timeless design also means these pieces remain stylish for years to come.</p>
            
            <h2>Implementing Minimalist Design</h2>
            <p>To successfully implement minimalist design, start by decluttering and keeping only essential items. Choose furniture pieces with clean lines and neutral colors. Focus on quality over quantity, investing in well-made pieces that will last. Create balance through careful placement and ensure each piece has a purpose in the space.</p>
        `
    },
    'custom-kitchen-cabinet-ideas': {
        id: 'custom-kitchen-cabinet-ideas',
        title: "Custom Kitchen Cabinet Ideas for Modern Homes",
        excerpt: "Transform your kitchen with custom cabinet designs that maximize storage and enhance aesthetics. Discover the latest trends in kitchen cabinetry.",
        date: '12 October 2022',
        author: 'Admin Chintya',
        category: 'Kitchen Design',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop',
        content: `
            <p>The kitchen is often called the heart of the home, and custom cabinets play a crucial role in both its functionality and aesthetic appeal. Modern custom kitchen cabinets offer endless possibilities for personalization, allowing homeowners to create spaces that perfectly match their lifestyle and design preferences.</p>
            
            <h2>Popular Cabinet Styles</h2>
            <p>Today's custom kitchen cabinets come in various styles to suit different tastes. Shaker-style cabinets remain timeless with their simple, recessed panel doors. Flat-panel or slab cabinets offer a sleek, contemporary look. Glass-front cabinets create visual interest and display opportunities, while open shelving provides easy access and an airy feel.</p>
            
            <h2>Material Selection</h2>
            <p>Choosing the right material is crucial for custom kitchen cabinets:</p>
            <ul>
                <li>Solid wood for durability and classic beauty</li>
                <li>MDF with high-quality laminate for budget-friendly options</li>
                <li>Plywood for strength and moisture resistance</li>
                <li>Thermofoil for easy maintenance and uniform color</li>
                <li>Metal cabinets for industrial or modern aesthetics</li>
            </ul>
            
            <h2>Storage Solutions</h2>
            <p>Modern custom cabinets maximize storage with innovative features like pull-out pantry systems, corner cabinet organizers, deep drawers for pots and pans, built-in spice racks, and vertical dividers for baking sheets and cutting boards.</p>
            
            <h2>Hardware and Finishes</h2>
            <p>The right hardware can elevate your cabinet design. Consider matte black handles for contemporary style, brass or gold finishes for luxury appeal, stainless steel for modern kitchens, leather pulls for unique texture, or handleless designs for minimalist aesthetics.</p>
            
            <h2>Color Trends</h2>
            <p>While white cabinets remain popular, we're seeing more bold color choices. Navy blue creates sophistication, sage green brings natural calm, charcoal gray offers modern elegance, and two-tone combinations add visual interest to kitchen spaces.</p>
        `
    },
    'sustainable-furniture-materials': {
        id: 'sustainable-furniture-materials',
        title: "Sustainable Materials in Furniture Manufacturing",
        excerpt: "Learn about eco-friendly materials and sustainable practices in furniture manufacturing that benefit both the environment and your home.",
        date: '10 October 2022',
        author: 'Admin Chintya',
        category: 'Sustainability',
        image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1200&h=800&fit=crop',
        content: `
            <p>As environmental awareness grows, the furniture industry is increasingly embracing sustainable materials and manufacturing practices. This shift not only helps protect our planet but also results in healthier, more durable furniture for our homes.</p>
            
            <h2>Why Sustainable Materials Matter</h2>
            <p>Traditional furniture manufacturing can have significant environmental impacts, from deforestation to chemical pollution. Sustainable materials help reduce these impacts while often providing superior quality and longevity. They also contribute to healthier indoor air quality by minimizing toxic emissions.</p>
            
            <h2>Popular Sustainable Materials</h2>
            <p>Several materials are leading the way in sustainable furniture production:</p>
            <ul>
                <li>FSC-certified wood from responsibly managed forests</li>
                <li>Bamboo, which grows rapidly and regenerates quickly</li>
                <li>Reclaimed and recycled wood giving new life to old materials</li>
                <li>Cork, a renewable resource harvested without harming trees</li>
                <li>Organic fabrics like organic cotton, linen, and hemp</li>
                <li>Recycled metals and plastics reducing waste</li>
            </ul>
            
            <h2>Sustainable Manufacturing Processes</h2>
            <p>Beyond materials, sustainable furniture manufacturing includes using water-based, low-VOC finishes, implementing energy-efficient production methods, minimizing waste through efficient design, and using renewable energy sources in facilities.</p>
            
            <h2>Benefits for Consumers</h2>
            <p>Choosing sustainable furniture offers multiple advantages. These pieces often last longer due to quality materials and construction, they improve indoor air quality with fewer toxic chemicals, they support ethical and environmentally responsible businesses, and they often feature timeless designs that don't follow fleeting trends.</p>
            
            <h2>Making Informed Choices</h2>
            <p>When shopping for sustainable furniture, look for certifications like FSC, GREENGUARD, or Cradle to Cradle. Ask manufacturers about their sourcing and production practices. Consider the furniture's full lifecycle, including durability and end-of-life disposal options. Support local artisans and manufacturers to reduce transportation impacts.</p>
        `
    }
};

const post = computed(() => blogPostsData[route.params.id]);

const relatedPosts = computed(() => {
    if (!post.value) return [];
    const allPosts = Object.values(blogPostsData).filter(p => p.id !== post.value.id);
    return allPosts.slice(0, 3).map(p => ({
        id: p.id,
        title: p.title,
        date: p.date,
        image: p.image
    }));
});

const toBlogDetail = (id) => {
    router.push(`/detail-blog/${id}`);
    window.scrollTo(0, 0);
};

onMounted(() => {
    window.scrollTo(0, 0);
});
</script>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.prose h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #1a1a1a;
}

.prose p {
    margin-bottom: 1rem;
    line-height: 1.8;
}

.prose ul {
    margin: 1rem 0;
    padding-left: 2rem;
    list-style-type: disc;
}

.prose li {
    margin-bottom: 0.5rem;
}
</style>