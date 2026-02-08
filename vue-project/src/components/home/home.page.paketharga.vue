<template>
    <section class="bg-white py-16 md:py-24">
        <div class="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32">
            <div class="flex justify-center mb-6">
                <span class="inline-block px-6 py-2.5 rounded-full text-white text-xs font-semibold bg-[#2C1810]">
                    {{ t('price_badge') }}
                </span>
            </div>

            <div class="text-center max-w-3xl mx-auto mb-12">
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-[#1a1a1a]">{{ t('price_title') }}</h2>
                <p class="text-gray-600 text-sm md:text-base leading-relaxed">{{ t('price_desc') }}</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto mb-10">
                <div v-for="(plan, index) in plans" :key="index"
                    class="relative cursor-pointer rounded-3xl border-2 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
                    :class="plan.featured ? 'border-[#2C1810] lg:-mt-4 lg:scale-[1.02]' : 'border-gray-200'">
                    <div class="rounded-t-3xl p-6" :style="{ backgroundColor: plan.featured ? '#2C1810' : '#1a2332' }">
                        <div class="flex items-center justify-between mb-2">
                            <h3 class="text-lg md:text-xl font-bold text-white">{{ t(plan.nameKey) }}</h3>

                            <span v-if="plan.badgeKey"
                                class="px-2.5 py-1 rounded-full text-xs font-semibold text-white truncate max-w-[140px]"
                                style="background-color: rgba(255,255,255,0.2)">
                                {{ t(plan.badgeKey) }}
                            </span>

                        </div>

                        <p class="text-gray-300 text-xs md:text-sm">{{ t(plan.subtitleKey) }}</p>
                    </div>

                    <div class="p-6">
                        <div class="mb-5">
                            <div class="flex items-baseline gap-2 mb-1">
                                <span class="text-2xl md:text-3xl font-bold text-[#1a1a1a]">{{ t(plan.priceKey)
                                }}</span>

                                <span v-if="plan.discount"
                                    class="px-2 py-0.5 rounded-full text-xs font-bold text-white bg-[#2C1810]">
                                    {{ plan.discount }}
                                </span>
                            </div>
                            <p v-if="plan.originalPriceKey" class="text-xs text-gray-500 line-through">{{
                                t(plan.originalPriceKey) }}</p>
                        </div>
                        <p class="text-gray-600 text-xs md:text-sm mb-5 leading-relaxed">{{ t(plan.descKey) }}</p>
                        <ul class="space-y-2.5 mb-6">
                            <li v-for="(featureKey, idx) in plan.featureKeys" :key="idx"
                                class="flex items-start gap-2.5">
                                <div class="w-4 h-4 rounded-full flex items-center justify-center mt-0.5 bg-[#2C1810]">
                                    <svg class="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                                            d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span class="text-xs md:text-sm text-gray-700">
                                    {{ t(featureKey) }}
                                </span>
                            </li>
                        </ul>

                        <button @click="toggleFeatures(index)"
                            class="flex cursor-pointer items-center gap-2 text-xs md:text-sm font-semibold mb-5 text-[#2C1810]">
                            <span>
                                {{ plan.showAll ? t('price_hide') : t('price_show_more') }}
                            </span>
                            <svg class="w-3.5 h-3.5 transition-transform duration-300"
                                :class="{ 'rotate-180': plan.showAll }" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div
                            class="w-full flex py-3 items-center justify-center gap-4 rounded-full text-center font-semibold text-xs md:text-sm text-white bg-gradient-to-br from-green-400 to-green-600 transition-all transition-transform duration-300 whatsapp-pulse overflow-hidden group">
                            <svg viewBox="0 0 24 24" class="w-5 h-5  fill-white drop-shadow-md" aria-hidden="true">
                                <path :d="siWhatsapp.path" />
                            </svg>
                            {{ t(plan.ctaKey) }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-center pt-16">
                <a href="#all-packages"
                    class="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-sm border-2 border-[#2C1810] text-[#2C1810] hover:bg-[#2C1810] hover:text-white transition-all duration-300">
                    {{ t('price_all_packages') }}
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useTranslate } from '@/composables/useTranslate'
import { siWhatsapp } from 'simple-icons'
const { t } = useTranslate()

const plans = ref([
    {
        nameKey: 'price_plan_basic_name',
        badgeKey: 'price_plan_basic_badge',
        subtitleKey: 'price_plan_basic_subtitle',
        priceKey: 'price_plan_basic_price',
        originalPriceKey: 'price_plan_basic_original',
        discount: '-29%',
        descKey: 'price_plan_basic_desc',
        featureKeys: [
            'price_plan_basic_feature_1',
            'price_plan_basic_feature_2',
            'price_plan_basic_feature_3',
            'price_plan_basic_feature_4',
            'price_plan_basic_feature_5'
        ],
        ctaKey: 'price_plan_basic_cta',
        ctaLink: '#contact',
        featured: false,
        showAll: false
    },
    {
        nameKey: 'price_plan_pro_name',
        badgeKey: 'price_plan_pro_badge',
        subtitleKey: 'price_plan_pro_subtitle',
        priceKey: 'price_plan_pro_price',
        originalPriceKey: 'price_plan_pro_original',
        discount: '-25%',
        descKey: 'price_plan_pro_desc',
        featureKeys: [
            'price_plan_pro_feature_1',
            'price_plan_pro_feature_2',
            'price_plan_pro_feature_3',
            'price_plan_pro_feature_4',
            'price_plan_pro_feature_5',
            'price_plan_pro_feature_6',
            'price_plan_pro_feature_7'
        ],
        ctaKey: 'price_plan_pro_cta',
        ctaLink: '#contact',
        featured: true,
        showAll: false
    },
    {
        nameKey: 'price_plan_full_name',
        badgeKey: 'price_plan_full_badge',
        subtitleKey: 'price_plan_full_subtitle',
        priceKey: 'price_plan_full_price',
        originalPriceKey: null,
        discount: null,
        descKey: 'price_plan_full_desc',
        featureKeys: [
            'price_plan_full_feature_1',
            'price_plan_full_feature_2',
            'price_plan_full_feature_3',
            'price_plan_full_feature_4',
            'price_plan_full_feature_5',
            'price_plan_full_feature_6',
            'price_plan_full_feature_7'
        ],
        ctaKey: 'price_plan_full_cta',
        ctaLink: '#contact',
        featured: false,
        showAll: false
    }
])

const toggleFeatures = (index) => {
    plans.value[index].showAll = !plans.value[index].showAll
}
</script>


<style scoped>
@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}

.whatsapp-pulse {
    animation: pulse 2s infinite, glow 2s ease-in-out infinite alternate;
    box-shadow: 0 10px 40px rgba(37, 211, 102, 0.4);
}

@keyframes pulse {
    0% {
        box-shadow: 0 10px 40px rgba(37, 211, 102, 0.4), 0 0 0 0 rgba(37, 211, 102, 0.7);
    }

    50% {
        box-shadow: 0 10px 40px rgba(37, 211, 102, 0.4), 0 0 0 15px rgba(37, 211, 102, 0);
    }

    100% {
        box-shadow: 0 10px 40px rgba(37, 211, 102, 0.4), 0 0 0 0 rgba(37, 211, 102, 0);
    }
}

@keyframes glow {
    0% {
        filter: brightness(1) saturate(1);
    }

    100% {
        filter: brightness(1.2) saturate(1.3);
    }
}

.badge-glow {
    animation: bounce 2s infinite, badgeGlow 1.5s ease-in-out infinite alternate;
}

.shine-effect {
    background: linear-gradient(45deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent);
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
    animation: shine 3s infinite;
}

@keyframes shine {
    0% {
        transform: translateX(-100%) translateY(-100%) rotate(45deg);
    }

    100% {
        transform: translateX(100%) translateY(100%) rotate(45deg);
    }
}
</style>
