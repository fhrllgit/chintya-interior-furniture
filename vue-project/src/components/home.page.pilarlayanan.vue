<template>
    <section class="bg-white py-16 md:py-24">
        <div class="px-4 mt-5 sm:px-6 md:px-10 lg:px-20 xl:px-32">
            <div class="flex justify-center mb-6">
                <span class="inline-block px-6 py-2.5 rounded-full text-white text-xs font-semibold"
                    style="background-color: #2C1810;">
                    Pilar Layanan Kami
                </span>
            </div>

            <div class="text-center max-w-3xl mx-auto mb-12">
                <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-3" style="color: #1a1a1a;">
                    Solusi Interior & Furniture Terpercaya.
                </h1>
                <p class="text-gray-600 text-sm md:text-base leading-relaxed">
                    Kami menyediakan berbagai layanan interior dan furniture custom yang dirancang khusus untuk memenuhi
                    kebutuhan
                    rumah, kantor, dan komersial Anda dengan kualitas terbaik.
                </p>
            </div>

            <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
                <div class="flex-1 w-full lg:w-auto flex justify-center lg:justify-start">
                    <div class="w-full max-w-md lg:max-w-none lg:sticky lg:top-8">
                        <div class="p-26 md:p-20 ">
                            <img :src="logoCf" alt="">
                        </div>
                    </div>
                </div>

                <div class="flex-1 w-full space-y-5">
                    <div v-for="(service, index) in services" :key="index"
                        class="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                        <div class="flex items-start gap-4">
                            <div class="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center"
                                style="background-color: #2C1810;">
                                <component :is="service.icon" class="w-6 h-6 md:w-7 md:h-7 text-white" />
                            </div>

                            <div class="flex-1">
                                <h3 class="text-base md:text-lg font-bold mb-2" style="color: #1a1a1a;">
                                    {{ service.title }}
                                </h3>
                                <p class="text-gray-600 text-xs md:text-sm leading-relaxed mb-3">
                                    {{ service.description }}
                                </p>

                                <ul class="space-y-1.5 mb-4">
                                    <li v-for="(feature, idx) in service.features" :key="idx"
                                        class="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                                        <svg class="w-3.5 h-3.5 flex-shrink-0" style="color: #2C1810;"
                                            fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        <span>{{ feature }}</span>
                                    </li>
                                </ul>

                                <a href="#"
                                    class="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold transition-all duration-300 hover:gap-2.5"
                                    style="color: #2C1810;">
                                    <span>Lihat Detail</span>
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
import {
    ArrowRight,
    CookingPot,
    BedDouble,
    Sofa,
    Briefcase,
    PanelsTopLeft,
    Wrench,
    ArrowBigRightDash
} from 'lucide-vue-next'
import logoCf from '@/assets/img/logoCF.png'

const services = ref([
    {
        id: 1,
        icon: CookingPot,
        title: 'Kitchen Set',
        description: 'Dapur custom yang fungsional dan estetik dengan material berkualitas tinggi dan desain modern.',
        features: [
            'Custom cabinet & storage solution',
            'Material HPL premium atau duco',
            'Hardware & aksesoris berkualitas',
            'Instalasi profesional'
        ]
    },
    {
        id: 2,
        icon: BedDouble,
        title: 'Bedroom Set',
        description: 'Furniture kamar tidur lengkap yang nyaman dan elegan sesuai gaya hidup Anda.',
        features: [
            'Lemari pakaian custom',
            'Tempat tidur & nakas',
            'Meja rias & cermin',
            'Finishing premium pilihan'
        ]
    },
    {
        id: 3,
        icon: Sofa,
        title: 'Living Room',
        description: 'Ruang tamu yang memukau dengan furniture modern dan space-saving design.',
        features: [
            'TV cabinet & display unit',
            'Coffee table & side table',
            'Rak buku & penyimpanan',
            'Seating area custom'
        ]
    },
    {
        id: 4,
        icon: Briefcase,
        title: 'Home Office & Workspace',
        description: 'Ruang kerja produktif dengan furniture ergonomis dan storage maksimal.',
        features: [
            'Meja kerja custom size',
            'Rak & filing cabinet',
            'Cable management system',
            'Pencahayaan optimal'
        ]
    },
    {
        id: 5,
        icon: PanelsTopLeft,
        title: 'Backdrop & Wall Panel',
        description: 'Backdrop dekoratif yang mempercantik ruangan dengan material dan design pilihan.',
        features: [
            '3D wall panel',
            'TV backdrop custom',
            'Feature wall design',
            'Material HPL, wallpaper, kayu'
        ]
    },
    {
        id: 6,
        icon: Wrench,
        title: 'Custom Furniture',
        description: 'Furniture custom sesuai kebutuhan spesifik dengan desain unik dan fungsional.',
        features: [
            'Konsultasi desain gratis',
            'Berbagai pilihan material',
            'Ukuran & bentuk custom',
            'Quality control ketat'
        ]
    }
])
</script>


<style scoped>
/* No additional styles needed */
</style>