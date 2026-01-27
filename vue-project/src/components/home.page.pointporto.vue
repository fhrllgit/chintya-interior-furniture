<template>
    <section class="bg-[#2C1810] min-h-screen py-20 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32">
        <div class="max-w-7xl mx-auto">
            <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
                <div class="flex-1">
                    <span class="inline-block bg-[#ffffff14] border border-[#ffffff63] text-white/90 px-4 py-2 rounded-full text-xs font-medium mb-4">{{
                            t('point_portfolio_badge') }}</span>
                    <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-4 leading-tight font-semibold">
                        {{ t('point_portfolio_title') }}
                    </h1>
                    <p class="text-[#cacaca] text-sm max-w-3xl leading-relaxed">
                        {{ t('point_portfolio_desc') }}
                    </p>
                </div>
                <button @click="router.push('/galeri')"
                    class="bg-white text-[#2C1810] px-6 py-3 text-sm cursor-pointer rounded-full font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                    {{ t('point_button_view_gallery') }}
                </button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <article v-for="item in dataRandom" :key="item.id"
                    class="bg-white/98 backdrop-blur-sm rounded-[1.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-[1.03] hover:-translate-y-2 group">
                    <div class="relative p-5 pb-0">
                        <span
                            class="absolute top-8 left-8 z-10 bg-[#2C1810] text-white h-8 px-4 flex items-center rounded-full text-xs font-semibold max-w-[140px] truncate">
                            {{ item.category }}
                        </span>
                        <div class="relative rounded-[1.5rem] overflow-hidden aspect-[5/4]">
                            <img :src="item.image" :alt="item.title[currentLang]"
                                class="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" />
                        </div>
                    </div>
                    <div class="px-7 py-6 space-y-4">
                        <h3 style="font-weight: 600;" class="text-[1.1rem] leading-[1.35]  text-black group-hover:text-[#2C1810] transition-colors duration-300 min-h-[3.6rem]">
                            {{ item.title[currentLang] }}
                        </h3>
                        <p class="text-[#2C1810] text-xs leading-[1.65] line-clamp-4 min-h-[4.5rem]">
                            {{ item.description[currentLang] }}
                        </p>
                        <div class="flex justify-end pt-3 border-t border-[#cacaca]">
                            <button
                                class="inline-flex items-center gap-2 text-[#2C1810] font-semibold text-xs hover:gap-4 transition-all group/link">
                                <span
                                    class="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#2C1810] group-hover/link:after:w-full after:transition-all">
                                    {{ t('point_button_detail_case') }}
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
import dataPortfolio from '@/data/data.portofolio'
import { ArrowLeft } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import { useLangStore } from '@/stores/lang'
import { useTranslate } from '@/composables/useTranslate'

const { t } = useTranslate()
const router = useRouter()
const langStore = useLangStore()
const currentLang = computed(() => langStore.lang)
const dataRandom = ref([])

onMounted(() => {
    const shuffled = [...dataPortfolio].sort(() => 0.5 - Math.random())
    dataRandom.value = shuffled.slice(0, 3)
})
</script>

<style scoped>
.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>