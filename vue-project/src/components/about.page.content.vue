<template>
    <div class="relative w-full bg-[#2C1810] h-full overflow-hidden">
        <div class="flex pb-0 lg:pb-32 z-20 flex-col lg:flex-row">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                
                <div class="text-center mt-20 mb-8 items-center justify-center flex flex-col space-y-4 md:space-y-5 lg:space-y-8">
                    <!-- Badge -->
                   <span class="inline-block w-max bg-[#ffffff14] border border-[#ffffff63] text-white/90 px-4 py-2 rounded-full text-xs font-medium mb-4">
                    Tentang Kami        
                </span>
                    
                    <!-- Main Heading -->
                     <h1 class="lg:text-5xl md:text-3xl sm:text-xl text-md lg:mt-5 font-semibold text-white">
                        Chintya Interior & Furniture
                     </h1>
                    
                    <!-- Description -->
                    <p class="text-gray-300 md:text-md sm:text-sm text-xs lg:text-lg ">
                        Kami adalah partner terpercaya dalam mewujudkan interior impian Anda.<br class="hidden sm:block">
                        Menghadirkan desain berkualitas tinggi dengan sentuhan profesional dan elegan.
                    </p>
                    
                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto">
                        <button class="w-full cursor-pointer sm:w-auto px-5 py-2.5 sm:px-8 sm:py-3.5 bg-[#4A2C1F] text-white text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg ">
                            {{ t('Hubungi Kami') }}
                        </button>
                        <button class="w-full sm:w-auto px-5 py-2.5 sm:px-8 sm:py-3.5 bg-transparent border-2 border-white/30 hover:border-[#4A2C1F] text-white text-sm cursor-pointer font-semibold rounded-full transition-all duration-300">
                            {{ t('Lihat Portfolio') }}
                        </button>
                    </div>
                </div>

                <!-- Divider Line -->
                <div class="w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mb-8"></div>

                <!-- Statistics Section -->
                <div class="mb-8 text-center">
                    <h3 class="text-sm text-[#cacaca] tracking-[0.2em] uppercase" style="font-weight: 500;">
                        Sekilas Angka
                    </h3>
                </div>

                <!-- Stats Grid -->
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mx-auto">
                    
                    <!-- Stat 1 -->
                    <div class="text-center">
                        <div class="mb-4 ">
                            <h4 class="md:text-4xl text-xl font-bold text-white mb-1">
                                250<span>+</span>
                            </h4>
                        </div>
                        <p class="text-[#cacaca] text-[10px] md:text-xs uppercase" style="font-weight: 500;">
                            {{ t('Proyek Selesai') }}
                        </p>
                    </div>

                    <!-- Stat 2 -->
                    <div class="text-center group cursor-default">
                        <div class="mb-4">
                            <h4 class="md:text-4xl text-xl font-bold text-white mb-1">
                                180<span>+</span>
                            </h4>
                        </div>
                        <p class="text-[#cacaca] text-[10px] md:text-xs uppercase" style="font-weight: 500;">
                            {{ t('Klien Puas') }}
                        </p>
                    </div>

                    <!-- Stat 3 -->
                    <div class="text-center group cursor-default">
                        <div class="mb-4">
                            <h4 class="md:text-4xl text-xl font-bold text-white mb-1">
                                10<span>+</span>
                            </h4>
                        </div>
                        <p class="text-[#cacaca] text-[10px] md:text-xs uppercase" style="font-weight: 500;">
                            {{ t('Tahun Pengalaman') }}
                        </p>
                    </div>

                    <!-- Stat 4 -->
                    <div class="text-center group cursor-default">
                        <div class="mb-4">
                            <h4 class="md:text-4xl text-xl font-bold text-white mb-1">
                                20<span>+</span>
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
        <div class="absolute z-20 left-0 bottom-0 w-full">
            <img :src="svgwave" alt="Wave decoration" class="w-full">
        </div>
    </div>
</template>

<script setup>
import { useTranslate } from '@/composables/useTranslate'
import svgwave from '../assets/img/svgwave.png'
import imageBeranda from '../assets/img/codeBackdropTV.jpg'
import { EyeIcon } from '@heroicons/vue/24/outline'
const { t } = useTranslate()
</script>