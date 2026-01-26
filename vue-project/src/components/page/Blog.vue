<template>
    <div class="min-h-screen bg-[#f5f5f5]">
        <div class="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-8 sm:py-16">
            <div class="text-center mb-8 sm:mb-12">
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-3 sm:mb-4">
                    Blog Kami
                </h1>
                <p class="text-sm sm:text-base text-[#6b6b6b] max-w-3xl mx-auto">
                    Artikel dan inspirasi seputar jasa pembuatan furniture interior custom untuk hunian dan ruang usaha
                    yang rapi fungsional dan berkualitas.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                <div class="lg:col-span-5">
                    <div v-if="currentFeaturedPost" @click="toBlogDetail(currentFeaturedPost.id)"
                        class="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer h-full">
                        <div class="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
                            <img :src="currentFeaturedPost.image" :alt="currentFeaturedPost.title"
                                class="w-full h-full object-cover hover:scale-110 transition-transform duration-300">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                                <p class="text-xs sm:text-sm mb-2 opacity-90">{{ currentFeaturedPost.date }}</p>
                                <h3 class="text-xl sm:text-2xl font-bold mb-3 leading-tight">
                                    {{ currentFeaturedPost.title }}
                                </h3>
                                <p class="text-sm opacity-90 line-clamp-2">
                                    {{ currentFeaturedPost.excerpt }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-7 space-y-4 sm:space-y-6">
                    <div v-for="post in currentBlogPosts" :key="post.id" @click="toBlogDetail(post.id)"
                        class="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
                        <div class="flex flex-col sm:flex-row">
                            <div class="w-full sm:w-48 md:w-56 h-48 sm:h-auto overflow-hidden flex-shrink-0">
                                <img :src="post.image" :alt="post.title"
                                    class="w-full h-full object-cover hover:scale-110 transition-transform duration-300">
                            </div>

                            <div class="flex-1 p-5 sm:p-6 flex flex-col justify-between">
                                <div>
                                    <h3
                                        class="text-lg sm:text-xl font-bold text-[#1a1a1a] mb-2 hover:text-[#8B4513] transition-colors line-clamp-2">
                                        {{ post.title }}
                                    </h3>
                                    <p class="text-xs sm:text-sm text-[#999] mb-3">
                                        {{ post.date }}
                                    </p>
                                    <p class="text-sm sm:text-base text-[#6b6b6b] line-clamp-2 sm:line-clamp-3">
                                        {{ post.excerpt }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="flex justify-center items-center gap-2 mt-8 sm:mt-12">
                <button @click="changePage(1)" :class="[
                    'w-10 h-10 sm:w-12 sm:h-12 rounded-lg font-semibold transition-colors',
                    currentPage === 1
                        ? 'bg-[#0F4C75] text-white'
                        : 'bg-white text-[#1a1a1a] border border-gray-300 hover:bg-gray-50']">1</button>
                <button @click="changePage(2)" :class="[
                    'w-10 h-10 sm:w-12 sm:h-12 rounded-lg font-semibold transition-colors',
                    currentPage === 2
                        ? 'bg-[#FFA500] text-white'
                        : 'bg-white text-[#1a1a1a] border border-gray-300 hover:bg-gray-50'
]">
                    2
                </button>
                <button @click="nextPage" :disabled="currentPage === 2" :class="[
                    'w-auto h-10 sm:h-12 px-4 rounded-lg font-semibold transition-colors',
                    currentPage === 2
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-[#1a1a1a] border border-gray-300 hover:bg-gray-50'
                ]">
                    Next »
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const currentPage = ref(1);

const page1Data = {
    featured: {
        id: 'featured-furniture-export',
        title: 'The Future of Indonesian Furniture Export Industry',
        excerpt: 'Discover the latest trends and insights in Indonesian furniture industry and our journey in international markets.',
        date: '20 October 2022',
        image: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800&h=600&fit=crop'
    },
    posts: [
        {
            id: 'indonesia-potential-furniture-export',
            title: "Indonesia's Potential to be the Top Furniture Exporting Countries",
            excerpt: "Furniture refers to movable objects intended to support various human activities such as seating (e.g., stools, chairs, and sofas), eating",
            date: '18 October 2022',
            image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=400&h=300&fit=crop'
        },
        {
            id: 'indonesia-furniture-export-reaches',
            title: "Indonesia Furniture Export Reaches US$ 1.69 Billion",
            excerpt: "Furniture refers to movable objects intended to support various human activities such as seating (e.g., stools, chairs, and sofas), eating",
            date: '18 October 2022',
            image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop'
        },
        {
            id: 'marketing-strategies-indonesian-furniture',
            title: "The Marketing Strategies for Indonesian Furniture in International Market",
            excerpt: "Furniture refers to movable objects intended to support various human activities such as seating (e.g., stools, chairs, and sofas), eating",
            date: '18 October 2022',
            image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&h=300&fit=crop'
        }
    ]
};

const page2Data = {
    featured: {
        id: 'modern-interior-design-trends',
        title: 'Modern Interior Design Trends 2024',
        excerpt: 'Explore the latest interior design trends that are transforming homes and commercial spaces with innovative and sustainable approaches.',
        date: '15 October 2022',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop'
    },
    posts: [
        {
            id: 'minimalist-furniture-design',
            title: "Minimalist Furniture Design: Less is More",
            excerpt: "Minimalist furniture design emphasizes simplicity, functionality, and clean lines. Learn how to create beautiful spaces with minimal furniture pieces.",
            date: '14 October 2022',
            image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=400&h=300&fit=crop'
        },
        {
            id: 'custom-kitchen-cabinet-ideas',
            title: "Custom Kitchen Cabinet Ideas for Modern Homes",
            excerpt: "Transform your kitchen with custom cabinet designs that maximize storage and enhance aesthetics. Discover the latest trends in kitchen cabinetry.",
            date: '12 October 2022',
            image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop'
        },
        {
            id: 'sustainable-furniture-materials',
            title: "Sustainable Materials in Furniture Manufacturing",
            excerpt: "Learn about eco-friendly materials and sustainable practices in furniture manufacturing that benefit both the environment and your home.",
            date: '10 October 2022',
            image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&h=300&fit=crop'
        }
    ]
};

// Computed properties for current page data
const currentFeaturedPost = computed(() => {
    return currentPage.value === 1 ? page1Data.featured : page2Data.featured;
});

const currentBlogPosts = computed(() => {
    return currentPage.value === 1 ? page1Data.posts : page2Data.posts;
});

// Pagination functions
const changePage = (page) => {
    currentPage.value = page;
    // window.scrollTo({ top: 0, behavior: 'smooth' });
};

const nextPage = () => {
    if (currentPage.value < 2) {
        currentPage.value++;
        // window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

const toBlogDetail = (id) => {
    router.push(`/detail-blog/${id}`);
};
</script>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>