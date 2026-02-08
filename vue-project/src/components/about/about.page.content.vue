<template>
    <div class="relative font-poppins w-full bg-[#2C1810] h-full">
        <div class="flex pb-0 lg:pb-32 z-20 flex-col lg:flex-row">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-26 lg:py-24">
                <div
                    class="text-center mt-20 mb-8 items-center justify-center flex flex-col space-y-4 md:space-y-5 lg:space-y-8">
                    <span
                        class="inline-block w-max bg-[#2C1810] border-2 border-[#4A2C1F] text-white/90 px-4 py-2 rounded-full text-xs font-medium mb-4">
                        Tentang Kami
                    </span>
                    <h1 class="lg:text-5xl md:text-3xl sm:text-xl text-md lg:mt-5 font-semibold text-white">
                        Chintya Interior & Furniture
                    </h1>
                    <p class="text-gray-300 md:text-md sm:text-sm text-xs lg:text-base ">
                        Kami adalah partner terpercaya dalam mewujudkan interior impian Anda,<br
                            class="hidden sm:block">
                        engan desain berkualitas tinggi yang dirancang secara profesional dan elegan.
                    </p>

                    <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto">
                        <button
                            class="w-full cursor-pointer sm:w-auto px-5 py-2.5 sm:px-8 sm:py-3.5 bg-[#4A2C1F] shadow-[#ffffff13] text-white text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-md ">
                            {{ t('Hubungi Kami') }}
                        </button>
                        <button
                            class="w-full sm:w-auto px-5 py-2.5 sm:px-8 sm:py-3.5 bg-transparent border-2 border-white/30 hover:border-[#fff] text-white text-sm hover:bg-[#cacaca23] cursor-pointer font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                            {{ t('Lihat Portfolio') }}
                        </button>
                    </div>
                </div>
                <div class="w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mb-8"></div>
                <div class="mb-8 text-center">
                    <h3 class="text-sm text-[#cacaca] tracking-[0.2em] uppercase" style="font-weight: 500;">
                        Sekilas Angka
                    </h3>
                </div>

                <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mx-auto">
                    <div class="text-center">
                        <div class="mb-4 ">
                            <h4 class="md:text-4xl text-xl font-bold text-white mb-1">
                                150<span>+</span>
                            </h4>
                        </div>
                        <p class="text-[#cacaca] text-[10px] md:text-xs uppercase" style="font-weight: 500;">
                            {{ t('Proyek Selesai') }}
                        </p>
                    </div>

                    <div class="text-center group cursor-default">
                        <div class="mb-4">
                            <h4 class="md:text-4xl text-xl font-bold text-white mb-1">
                                100<span>+</span>
                            </h4>
                        </div>
                        <p class="text-[#cacaca] text-[10px] md:text-xs uppercase" style="font-weight: 500;">
                            {{ t('Klien Puas') }}
                        </p>
                    </div>

                    <div class="text-center group cursor-default">
                        <div class="mb-4">
                            <h4 class="md:text-4xl text-xl font-bold text-white mb-1">
                                20<span>+</span>
                            </h4>
                        </div>
                        <p class="text-[#cacaca] text-[10px] md:text-xs uppercase" style="font-weight: 500;">
                            {{ t('Tahun Pengalaman') }}
                        </p>
                    </div>

                    <div class="text-center group cursor-default">
                        <div class="mb-4">
                            <h4 class="md:text-4xl text-xl font-bold text-white mb-1">
                                10<span>+</span>
                            </h4>
                        </div>
                        <p class="text-[#cacaca] text-[10px] md:text-xs uppercase" style="font-weight: 500;">
                            {{ t('Tim Profesional') }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Wave Background -->
        <div class="absolute z-20 left-0 mt-10 bottom-0 w-full">
            <img :src="svgwave" alt="Wave decoration" class="w-full">
        </div>
    </div>
</template>

<script setup>
import { useTranslate } from '@/composables/useTranslate'
import svgwave from '@/assets/img/svgwave.png'
import imageBeranda from '@/assets/img/codeBackdropTV.jpg'
import { EyeIcon } from '@heroicons/vue/24/outline'
const { t } = useTranslate()
</script>