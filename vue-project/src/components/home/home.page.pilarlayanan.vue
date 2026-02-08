<template>
    <section class="bg-white py-16 md:py-24">
        <div class="px-4 mt-5 sm:px-6 md:px-10 lg:px-20 xl:px-32">
            <div class="flex justify-center mb-6">
                <span class="inline-block px-6 py-2.5 rounded-full text-white text-xs font-semibold"
                    style="background-color: #2C1810;">
                    {{ t('service_badge') }}
                </span>
            </div>
            <div class="text-center max-w-3xl mx-auto mb-12">
                <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-3" style="color:#1a1a1a">
                    {{ t('service_title') }}
                </h1>
                <p class="text-gray-600 text-sm md:text-base leading-relaxed">
                    {{ t('service_desc') }}
                </p>
            </div>
            <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
                <div class="flex-1 w-full flex justify-center lg:justify-start">
                    <div class="w-full max-w-md lg:sticky lg:top-8">
                        <div class="p-26 md:p-20">
                            <img :src="logoCf" alt="Chintya Interior" />
                        </div>
                    </div>
                </div>
                <div class="flex-1 w-full space-y-5">
                    <div v-for="(service, index) in services" :key="index"
                        class="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center"
                                style="background-color:#2C1810">
                                <component :is="service.icon" class="w-6 h-6 md:w-7 md:h-7 text-white" />
                            </div>

                            <div class="flex-1">
                                <h3 class="text-base md:text-lg font-bold mb-2" style="color:#1a1a1a">
                                    {{ t(service.title) }}
                                </h3>
                                <p class="text-gray-600 text-xs md:text-sm leading-relaxed mb-3">
                                    {{ t(service.desc) }}
                                </p>
                                <ul class="space-y-1.5 mb-4">
                                    <li v-for="(feature, idx) in service.features" :key="idx"
                                        class="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                                        <svg class="w-3.5 h-3.5" style="color:#2C1810" fill="currentColor"
                                            viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        <span>{{ t(feature) }}</span>
                                    </li>
                                </ul>

                                <a href="#"
                                @click="router.push(service.to)"
                                    class="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold transition-all duration-300 hover:gap-2.5"
                                    style="color:#2C1810">
                                    <span>{{ t('service_detail') }}</span>
                                    <ArrowBigRightDash class="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useTranslate } from '@/composables/useTranslate'
import { useRouter } from 'vue-router'
import {
    CookingPot,
    BedDouble,
    Sofa,
    Briefcase,
    PanelsTopLeft,
    Wrench,
    ArrowBigRightDash
} from 'lucide-vue-next'
import logoCf from '@/assets/img/logoCF.png'

const { t } = useTranslate()
const router = useRouter()

const services = ref([
    {
        icon: CookingPot,
        title: 'service_kitchen_title',
        desc: 'service_kitchen_desc',
        features: [
            'service_kitchen_feature_1',
            'service_kitchen_feature_2',
            'service_kitchen_feature_3',
            'service_kitchen_feature_4'
        ],
        to: '/layanan'
    },
    {
        icon: BedDouble,
        title: 'service_bedroom_title',
        desc: 'service_bedroom_desc',
        features: [
            'service_bedroom_feature_1',
            'service_bedroom_feature_2',
            'service_bedroom_feature_3',
            'service_bedroom_feature_4'
        ],
        to: '/layanan'
    },
    {
        icon: Sofa,
        title: 'service_living_title',
        desc: 'service_living_desc',
        features: [
            'service_living_feature_1',
            'service_living_feature_2',
            'service_living_feature_3',
            'service_living_feature_4'
        ],
        to: '/layanan'
    },
    {
        icon: Briefcase,
        title: 'service_office_title',
        desc: 'service_office_desc',
        features: [
            'service_office_feature_1',
            'service_office_feature_2',
            'service_office_feature_3',
            'service_office_feature_4'
        ],
        to: '/layanan'
    },
    {
        icon: PanelsTopLeft,
        title: 'service_backdrop_title',
        desc: 'service_backdrop_desc',
        features: [
            'service_backdrop_feature_1',
            'service_backdrop_feature_2',
            'service_backdrop_feature_3',
            'service_backdrop_feature_4'
        ],
        to: '/layanan'
    },
    {
        icon: Wrench,
        title: 'service_custom_title',
        desc: 'service_custom_desc',
        features: [
            'service_custom_feature_1',
            'service_custom_feature_2',
            'service_custom_feature_3',
            'service_custom_feature_4'
        ],
        to: '/layanan'
    }
])
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
