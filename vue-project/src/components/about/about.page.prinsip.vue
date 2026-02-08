<template>
    <!-- Section Nilai & Prinsip Kerja -->
    <div class="relative font-poppins w-full bg-white">
        <div class="px-6 py-16 sm:px-10 lg:px-16 sm:py-20 lg:py-24">

            <!-- Header Section -->
            <div class="text-center mb-12 lg:mb-16 max-w-4xl mx-auto">
                <!-- Badge -->
                <span
                    class="inline-block font-poppins w-max bg-[#2C1810] border-2 border-[#4A2C1F] text-white shadow-[#4a2c1f66] shadow md:px-5 md:py-2 py-1.5 px-4 rounded-full text-xs font-sm mb-4"
                    style="font-weight: 400;">
                    Prinsip Kami
                </span>

                <!-- Main Heading -->
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2C1810] mt-4 mb-4">
                    Nilai yang kami bawa ke setiap proyek.
                </h2>

                <!-- Subtitle -->
                <p class="text-gray-600 text-sm md:text-base leading-relaxed">
                    Prinsip kerja yang memandu setiap proses desain, memastikan kualitas, fungsi, estetika, dan nilai
                    jangka panjang.
                </p>
            </div>

            <!-- Grid Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 max-w-7xl mx-auto">
                <div v-for="(item, index) in principles" :key="index"
                    class="group relative bg-gradient-to-br cursor-pointer from-gray-50 to-white rounded-4xl p-8 border border-[#4a2c1f0f] hover:border-[#2c181051] shadow-sm hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 overflow-hidden">
                    <div
                        class="absolute -top-10 -right-10 w-32 h-32 bg-[#cacaca59] rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>

                    <div class="relative w-16 border-4 border-white h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform duration-300"
                        :class="item.iconBg">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon" />
                        </svg>
                    </div>

                    <!-- Title -->
                    <h3 class="relative z-10 text-xl sm:text-xl font-bold text-[#1a1a1a] mb-4">
                        {{ item.title }}
                    </h3>

                    <!-- Description with line-clamp-3 -->
                    <p class="relative z-10 text-[#2C1810] text-sm md:text-[15px] leading-relaxed line-clamp-2">
                        {{ item.description }}
                    </p>

                    <!-- Number - bottom left corner -->
                    <div
                        class="absolute bottom-6 right-6 text-7xl font-bold text-[#cacaca21] group-hover:text-[#cacaca3c] transition-colors duration-300 select-none leading-none">
                        {{ String(index + 1).padStart(2, '0') }}
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTranslate } from '@/composables/useTranslate'
const { t } = useTranslate()

const principles = ref([
  {
    title: 'Mendengarkan Dulu',
    description: 'Memahami kebutuhan, rutinitas, dan visi sebelum memulai desain.',
    iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600',
    icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z'
  },
  {
    title: 'Desain yang Hidup',
    description: 'Desain nyaman, fungsional, dan indah untuk aktivitas sehari-hari.',
    iconBg: 'bg-gradient-to-br from-green-500 to-green-600',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    title: 'Detail Tanpa Kompromi',
    description: 'Ketelitian detail menentukan kualitas, daya tahan, dan estetika.',
    iconBg: 'bg-gradient-to-br from-purple-500 to-purple-600',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
  },
  {
    title: 'Proses yang Jelas',
    description: 'Timeline, anggaran, dan progres dikomunikasikan secara transparan.',
    iconBg: 'bg-gradient-to-br from-orange-500 to-orange-600',
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
  },
  {
    title: 'Timeless, Bukan Trending',
    description: 'Desain relevan jangka panjang, melampaui tren sesaat.',
    iconBg: 'bg-gradient-to-br from-rose-500 to-rose-600',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
  }
])

</script>