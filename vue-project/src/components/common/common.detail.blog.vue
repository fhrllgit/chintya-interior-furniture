<template>
    <Sidebar />
    <div v-if="article" class="min-h-screen">
        <div class="lg:mt-50 md:mt-40 mt-26 w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32">
            <div class="flex flex-wrap gap-2 sm:gap-2.5 items-center font-medium text-xs sm:text-sm text-[#2C1810]">
                <router-link to="/" class="cursor-pointer hover:text-black flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>Beranda</span>
                </router-link>
                <ChevronRight class="w-3.5 h-3.5 sm:w-4 sm:h-4" stroke-width="2" />
                <router-link to="/blog" class="cursor-pointer hover:text-black">
                    Blog
                </router-link>
                <ChevronRight class="w-3.5 h-3.5 sm:w-4 sm:h-4" stroke-width="2" />
                <span>{{ article.category }}</span>
                <ChevronRight class="w-3.5 h-3.5 sm:w-4 sm:h-4" stroke-width="2" />
                <span class="text-black font-medium truncate max-w-[120px] sm:max-w-[200px] md:max-w-none">
                    {{ currentLang === 'id' ? article.title.id : article.title.en }}
                </span>
            </div>
        </div>

        <div
            class="px-4 md:space-y-6 space-y-4 sm:space-y-5 lg:space-y-8 sm:px-6 mt-6 sm:mt-8 md:px-10 lg:px-20 xl:px-32">
            <div class="flex items-center gap-3 sm:gap-4 cursor-pointer" @click="router.push('/blog')">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-5 h-5 sm:w-6 sm:h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                </svg>
                <button class="text-sm sm:text-sm cursor-pointer font-semibold">Kembali ke Blog</button>
            </div>

            <div
                class="py-1.5 px-4 sm:px-5 bg-[#2c181019] shadow text-[#2C1810] text-xs sm:text-sm font-bold uppercase rounded-full w-max">
                <p>{{ article.category }}</p>
            </div>

            <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-6xl font-semibold text-black leading-tight">
                {{ currentLang === 'id' ? article.title.id : article.title.en }}
            </h1>

            <div class="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
                <div class="flex items-center gap-1.5 sm:gap-2">
                    <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{{ currentLang === 'id' ? article.date.id : article.date.en }}</span>
                </div>
                <div class="flex items-center gap-1.5 sm:gap-2">
                    <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>1 menit baca</span>
                </div>
                <div class="flex items-center gap-1.5 sm:gap-2">
                    <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span class="truncate">Chintya Furniture</span>
                </div>
            </div>
        </div>

        <div class="px-4 sm:px-6 mt-5 sm:mt-6 md:px-10 lg:px-20 xl:px-32 pb-12 sm:pb-16">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
                <!-- Content kanan -->
                <div class="lg:col-span-8">
                    <div class="bg-white rounded-xl sm:rounded-3xl shadow-lg overflow-hidden">
                        <div class="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
                            <img :src="article.image" :alt="currentLang === 'id' ? article.title.id : article.title.en"
                                class="w-full h-full object-cover" />
                        </div>
                        <div class="p-4 sm:p-6 md:p-8 lg:p-10">
                            <div class="prose prose-sm text-sm sm:text-md sm:prose-base lg:prose-lg max-w-none article-content"
                                v-html="formatContent(currentLang === 'id' ? article.content.id : article.content.en)">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Content kiri artikel populer -->
                <div class="lg:col-span-4 hidden lg:block">
                    <div class="sticky" style="top: 120px;">
                        <div class="bg-white rounded-3xl border border-[#2C1810] shadow-lg p-6">
                            <div class="flex gap-3 w-max items-center mb-6">
                                <div class="p-2 bg-[#2C1810]/10 rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-[#2C1810]" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>

                                <div class="flex flex-col justify-center">
                                    <h3 class="text-lg font-semibold text-black leading-tight">
                                        Artikel Populer
                                    </h3>
                                    <p class="text-xs text-gray-600 m-0 leading-tight">
                                        Paling banyak di baca customer.
                                    </p>
                                </div>
                            </div>

                            <!-- V-for populer -->
                            <div class="space-y-3">
                                <article v-for="(popular, index) in popularArticles" :key="popular.id"
                                    @click="navigateToArticle(popular.id)" class="group cursor-pointer">
                                    <div
                                        class="flex gap-4 bg-[#2c18100e] border border-[#2C1810] p-3 overflow-hidden rounded-2xl items-center justify-center hover:bg-[#2c181015] transition-colors duration-300">
                                        <div class="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden bg-gray-100">
                                            <img :src="popular.image"
                                                :alt="currentLang === 'id' ? popular.title.id : popular.title.en"
                                                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                        </div>
                                        <div class="flex-1 min-w-0">
                                            <span
                                                class="inline-block bg-[#2C1810] text-white px-2.5 text-center py-0.5 rounded-full mb-2"
                                                style="font-size: 10px; font-weight: 400;">
                                                {{ popular.category }}
                                            </span>
                                            <h4
                                                class="font-bold text-xs text-[#1a0f0a] group-hover:text-[#2C1810] transition-colors duration-300 line-clamp-2 mb-1">
                                                {{ currentLang === 'id' ? popular.title.id : popular.title.en }}
                                            </h4>
                                            <div class="flex items-center gap-1 text-xs text-gray-500">
                                                <svg class="w-3 h-3" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <span>{{ formatDate(popular.date) }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Coppy Link -->
            <div class="md:mt-20 sm:mt-16 mt-10">
                <div class="mt-6 sm:mt-8 bg-white w-max rounded-xl sm:rounded-2xl p-4 sm:p-6">
                    <h3 class="text-lg sm:text-xl font-semibold text-[#1a0f0a] mb-3 sm:mb-4">Bagikan Artikel</h3>
                    <div class="flex flex-wrap gap-2 sm:gap-3">
                        <!-- Facebook -->
                        <button @click="shareToFacebook"
                            class="inline-flex cursor-pointer items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#1877F2] text-white rounded-full text-sm sm:text-base font-semibold hover:bg-[#0d65d9] transition-all duration-300 hover:scale-105">
                            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            <span class="hidden sm:inline">Facebook</span>
                        </button>
                        <!-- Twitter -->
                        <button @click="shareToTwitter"
                            class="inline-flex cursor-pointer items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#1DA1F2] text-white rounded-full text-sm sm:text-base font-semibold hover:bg-[#0d8dd9] transition-all duration-300 hover:scale-105">
                            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                            <span class="hidden sm:inline">Twitter</span>
                        </button>
                        <!-- LinkedIn -->
                        <button @click="shareToLinkedIn"
                            class="inline-flex cursor-pointer items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#0A66C2] text-white rounded-full text-sm sm:text-base font-semibold hover:bg-[#004182] transition-all duration-300 hover:scale-105">
                            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            <span class="hidden sm:inline">LinkedIn</span>
                        </button>
                        <!-- Copy Link -->
                        <button @click="copyLink"
                            class="inline-flex cursor-pointer items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-200 text-gray-800 rounded-full text-sm sm:text-base font-semibold hover:bg-gray-300 transition-all duration-300 hover:scale-105">
                            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            <span class="hidden sm:inline">Salin Link</span>
                        </button>
                    </div>
                </div>
            </div>

            <div v-if="relatedArticles.length > 0" class="md:mt-40 sm:mt-32 mt-20">
                <div class="sm:space-y-4 space-y-2">
                    <h1 class="text-2xl font-semibold">Artikel Terkait</h1>
                    <p class="text-sm text-[#2C1810]">Baca artikel lain nya yang mungkin menarik buat anda.</p>
                </div>
                <div class="grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <article v-for="related in relatedArticles" :key="related.id" @click="navigateToArticle(related.id)"
                        class="bg-white rounded-[1.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-[1.03] hover:-translate-y-2 group">
                        <div
                            class="relative overflow-hidden aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200">
                            <img :src="related.image" :alt="currentLang === 'id' ? related.title.id : related.title.en"
                                class="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-95" />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            </div>
                            <span
                                class="inline-block absolute top-5 left-5 z-20 bg-gray-100 text-gray-700 px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium mb-1.5 sm:mb-2">
                                {{ related.category }}
                            </span>
                        </div>
                        <div class="p-5 flex flex-col h-full gap-1.5">
                            <div class="flex items-center gap-1.5 sm:gap-2 text-xs text-[#2C1810] mb-1.5 sm:mb-2">
                                <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span class="uppercase" style="font-weight: 600;">{{ currentLang === 'id' ?
                                    related.date.id : related.date.en }}</span>
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span style="font-weight: 600;">1 MENIT</span>
                            </div>
                            <h4
                                class="font-bold text-sm sm:text-lg text-[#1a0f0a] group-hover:text-[#2C1810] transition-colors duration-300 line-clamp-2 mb-1.5 sm:mb-2">
                                {{ currentLang === 'id' ? related.title.id : related.title.en }}
                            </h4>
                            <p class="text-xs sm:text-sm text-gray-600 line-clamp-2 mb-2">
                                {{ currentLang === 'id' ? related.excerpt.id : related.excerpt.en }}
                            </p>
                            <div class="border-t flex justify-end justify-center py-2 border-t-[#cacaca]">
                                <button
                                    class="inline-flex cursor-pointer items-center gap-1 text-[#2C1810] font-semibold text-xs sm:text-sm group-hover:gap-2 transition-all duration-300">
                                    Baca artikel
                                    <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, watch, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import dataArtikel from '@/data/data.artikel'
import { useLangStore } from '@/stores/lang'
import { useTranslate } from '@/composables/useTranslate'
import Sidebar from '@/views/components/layout/Sidebar.vue'
import { ChevronRight, ArrowLeft } from 'lucide-vue-next'

const { t } = useTranslate()
const langStore = useLangStore()
const currentLang = computed(() => langStore.lang)
const route = useRoute()
const router = useRouter()

const article = computed(() => {
    return dataArtikel.find(
        item => item.id === Number(route.params.id)
    )
})

const relatedArticles = computed(() => {
    if (!article.value) return []
    return dataArtikel
        .filter(item =>
            item.category === article.value.category &&
            item.id !== article.value.id
        )
        .slice(0, 3)
})

const popularArticles = computed(() => {
    if (!article.value) return []
    const others = dataArtikel.filter(item => item.id !== article.value.id)
    const shuffled = others.sort(() => 0.5 - Math.random())
    return shuffled.slice(0, 5)
})

onMounted(() => {
    console.log(`📊 Total artikel populer yang ditampilkan: ${popularArticles.value.length} (MAX: 5)`)
})

const formatContent = (content) => {
    if (!content) return ''
    const paragraphs = content.trim().split('\n\n')

    return paragraphs.map(para => {
        const trimmed = para.trim()
        if (/^\d+\./.test(trimmed)) {
            return `<p class="ml-6 mb-4 leading-relaxed">${trimmed}</p>`
        }
        return `<p class="mb-4 leading-relaxed">${trimmed}</p>`
    }).join('')
}

const formatDate = (dateObj) => {
    if (currentLang.value === 'id') {
        const parts = dateObj.id.split(' ')
        return `${parts[0]} ${parts[1]}`
    } else {
        const parts = dateObj.en.split(' ')
        return `${parts[0]} ${parts[1]}`
    }
}

const navigateToArticle = (id) => {
    router.push(`/detail-blog/${id}`)

}

const shareToFacebook = () => {
    const url = encodeURIComponent(window.location.href)
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
}

const shareToTwitter = () => {
    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent(currentLang.value === 'id' ? article.value.title.id : article.value.title.en)
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank')
}

const shareToLinkedIn = () => {
    const url = encodeURIComponent(window.location.href)
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank')
}

const copyLink = async () => {
    try {
        await navigator.clipboard.writeText(window.location.href)
        alert('Link berhasil disalin!')
    } catch (err) {
        console.error('Failed to copy:', err)
    }
}

watch(article, (val) => {
    if (!val) {
        router.replace({ name: 'NotFound' })
    }
}, { immediate: true })
</script>

<style scoped lang="postcss">
@reference "tailwindcss";

/* Article Content Styling */
:deep(.article-content) {
    @apply text-gray-700 text-base leading-relaxed;
}

:deep(.article-content p) {
    @apply mb-4;
}

:deep(.article-content h2) {
    @apply text-2xl font-bold mt-8 mb-4;
    color: #1a0f0a;
}

:deep(.article-content h3) {
    @apply text-xl font-bold mt-6 mb-3;
    color: #1a0f0a;
}

:deep(.article-content ul),
:deep(.article-content ol) {
    @apply ml-6 mb-4 space-y-2;
}

:deep(.article-content li) {
    @apply leading-relaxed;
}

:deep(.article-content a) {
    @apply underline transition-colors;
    color: #2C1810;
}

:deep(.article-content a:hover) {
    color: #1a0f0a;
}

:deep(.article-content strong) {
    @apply font-bold;
    color: #1a0f0a;
}

:deep(.article-content blockquote) {
    @apply border-l-4 pl-4 italic my-4 text-gray-600;
    border-color: #2C1810;
}

/* Line Clamp */
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Sticky Sidebar */
@media (min-width: 1024px) {
    .sticky {
        position: sticky;
        top: 1.5rem;
    }
}
</style>
