<template>
    <section class="bg-gray-50 min-h-screen py-25 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32">
        <div class="max-w-7xl mx-auto">
            <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
                <div class="flex-1">
                    <span
                        class="inline-block text-xs bg-[#2C1810] border border-[#ffffff63] text-white px-4 py-2 rounded-full font-medium mb-5 shadow-lg">
                        Insight & Artikel
                    </span>
                    <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black mb-4 leading-tight font-semibold">
                        Bagi pengetahuan, dorong inovasi.
                    </h1>
                    <p class="text-[#2C1810] text-sm max-w-3xl leading-relaxed">
                        Arsip pemikiran kami tentang strategi konten, arsitektur teknologi, dan cara tim digital
                        bergerak
                        lincah dalam menghadirkan pengalaman web yang relevan.
                    </p>
                </div>
                <button
                    class="bg-[#2C1810] text-sm text-white px-7 py-3.5 rounded-full cursor-pointer hover:bg-[#1a0f0a] transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-xl hover:scale-105">
                    Lihat semua artikel
                </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <article 
                    v-for="article in arrArtikel" 
                    :key="article.id"
                    class="bg-white rounded-[1.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-[1.03] hover:-translate-y-2 group cursor-pointer">
                    <div class="relative overflow-hidden aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200">
                        <img :src="article.image" :alt="currentLang === 'id' ? article.title.id : article.title.en"
                            class="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-95" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div class="p-7 space-y-4">
                        <h3 style="font-weight: 600;"
                            class="text-[1.1rem] leading-[1.35]  text-black group-hover:text-[#2C1810] transition-colors duration-300 min-h-[3.6rem]">
                            {{ currentLang === 'id' ? article.title.id : article.title.en }}
                        </h3>

                        <div class="flex items-center gap-2 text-[#2C1810]/60 text-sm font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{{ currentLang === 'id' ? article.date.id : article.date.en }}</span>
                        </div>
                        <p class="text-gray-600 text-sm leading-[1.7] line-clamp-2 min-h-[3.4rem]">
                            {{ currentLang === 'id' ? article.description.id : article.description.en }}
                        </p>
                        <div class="flex justify-end pt-3 border-t border-[#cacaca]">
                            <button
                                class="inline-flex items-center gap-2 text-[#2C1810] font-semibold text-sm hover:gap-4 transition-all group/link">
                                <span
                                    class="relative text-xs after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#2C1810] group-hover/link:after:w-full after:transition-all">
                                    Baca Selengkapnya
                                </span>
                                <ArrowLeft
                                    class="w-4 h-4 rotate-180 group-hover/link:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import dataArtikel from '@/data/data.artikel'
import { ArrowLeft } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import { useLangStore } from '@/stores/lang'
import { useTranslate } from '@/composables/useTranslate'

const { t } = useTranslate()
const router = useRouter()
const langStore = useLangStore()
const currentLang = computed(() => langStore.lang)
const arrArtikel = ref([])

onMounted(() => {
    const shuffled = [...dataArtikel].sort(() => 0.5 - Math.random())
    arrArtikel.value = shuffled.slice(0, 3)
})
</script>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>