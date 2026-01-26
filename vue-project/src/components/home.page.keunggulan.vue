<template>
  <section class="bg-white py-16 md:py-24">
    <div class="px-4 sm:px-6 mt-5 md:px-10 lg:px-20 xl:px-32">

      <div class="flex justify-center mb-6">
        <span class="inline-block px-6 py-2.5 rounded-full text-white text-xs"
          style="background-color: #2C1810; font-weight: 500;">
          {{ t('advantage_badge') }}
        </span>
      </div>

      <div class="text-center max-w-4xl mx-auto mb-16">
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" style="color: #1a1a1a;">{{ t('advantage_title') }}</h2>
        <p class="text-gray-600 text-sm md:text-base leading-relaxed">{{ t('advantage_desc') }}</p>
      </div>

      <div class="relative mb-12">
        <div ref="sliderRef" class="overflow-x-auto scroll-smooth hide-scrollbar" @scroll="updatePagination">
          <div class="flex gap-5 pb-4">
            <div v-for="(card, index) in cards" :key="index"
              class="flex-none cursor-grab w-[calc(100%-0.5rem)] sm:w-[calc(50%-0.625rem)] lg:w-[calc(25%-0.9375rem)] bg-white rounded-3xl border border-[#cacaca] shadow-sm p-6 hover:shadow-lg transition-all duration-300">
              <div class="w-14 shadow-lg h-14 rounded-2xl flex items-center justify-center mb-5"
                style="background-color: #2C1810;">
                <component :is="card.icon" class="w-7 h-7 text-white" />
              </div>
              <h3 class="text-lg font-bold mb-3 text-black">
                {{ t(card.titleKey) }}
              </h3>
              <p class="text-[#2C1810] leading-relaxed text-sm">
                {{ t(card.descKey) }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center gap-2 mb-15">
        <button v-for="(dot, index) in totalPages" :key="index" @click="scrollToPage(index)"
          class="h-2.5 rounded-full transition-all duration-300" :class="currentPage === index ? 'w-10' : 'w-2.5'"
          :style="{ backgroundColor: currentPage === index ? '#2C1810' : '#d1d5db' }"
          :aria-label="`Go to page ${index + 1}`"></button>
      </div>

    <div class="flex w-full gap-5 items-center justify-center">
      <button class="text-sm text-[#2C1810] cursor-pointer" style="font-weight: 700;">{{ t('advantage_btn_portfolio') }}</button>
      <span class="text-[#cacaca]">|</span>
      <button class="text-sm text-[#2C1810] cursor-pointer" style="font-weight: 700;">{{ t('advantage_btn_contact') }}</button>
    </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useTranslate } from '@/composables/useTranslate'

import {
  SparklesIcon,
  UsersIcon,
  CubeIcon,
  ShieldCheckIcon,
  ReceiptPercentIcon,
  ClockIcon
} from '@heroicons/vue/24/outline'

const { t } = useTranslate()

const sliderRef = ref(null)
const currentPage = ref(0)

const cards = ref([
  {
    icon: SparklesIcon,
    titleKey: 'advantage_card_1_title',
    descKey: 'advantage_card_1_desc'
  },
  {
    icon: UsersIcon,
    titleKey: 'advantage_card_2_title',
    descKey: 'advantage_card_2_desc'
  },
  {
    icon: CubeIcon,
    titleKey: 'advantage_card_3_title',
    descKey: 'advantage_card_3_desc'
  },
  {
    icon: ShieldCheckIcon,
    titleKey: 'advantage_card_4_title',
    descKey: 'advantage_card_4_desc'
  },
  {
    icon: ReceiptPercentIcon,
    titleKey: 'advantage_card_5_title',
    descKey: 'advantage_card_5_desc'
  },
  {
    icon: ClockIcon,
    titleKey: 'advantage_card_6_title',
    descKey: 'advantage_card_6_desc'
  }
])


const totalPages = computed(() => {
  return Math.ceil(cards.value.length / getCardsPerPage())
})

const updatePagination = () => {
  if (!sliderRef.value) return

  const slider = sliderRef.value
  const scrollLeft = slider.scrollLeft
  const cardWidth =
    slider.firstElementChild?.firstElementChild?.offsetWidth || 0
  const gap = 20

  const cardsPerPage = getCardsPerPage()
  const pageWidth =
    (cardWidth * cardsPerPage) + (gap * (cardsPerPage - 1))

  currentPage.value = Math.round(scrollLeft / pageWidth)
}

const scrollToPage = (pageIndex) => {
  if (!sliderRef.value) return

  const slider = sliderRef.value
  const cardWidth =
    slider.firstElementChild?.firstElementChild?.offsetWidth || 0
  const gap = 20
  const cardsPerPage = getCardsPerPage()
  const pageWidth =
    (cardWidth * cardsPerPage) + (gap * (cardsPerPage - 1))

  slider.scrollTo({
    left: pageWidth * pageIndex,
    behavior: 'smooth'
  })
}

const getCardsPerPage = () => {
  const width = window.innerWidth

  if (width < 640) return 1       
  if (width < 1024) return 2      
  return 4                       
}

const handleResize = () => {
  updatePagination()
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>