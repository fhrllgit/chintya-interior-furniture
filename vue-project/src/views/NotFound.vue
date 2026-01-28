<template>
  <div
    class="min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 md:px-10 bg-gradient-to-br from-gray-50 to-gray-100">
    <div class="max-w-4xl w-full text-center space-y-10">
      <div class="relative">
        <div class="relative inline-block">
          <h1
            class="text-[120px] sm:text-[160px] md:text-[200px] lg:text-[240px] font-black text-[#2C1810]/10 leading-none select-none">
            404
          </h1>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg class="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 text-[#2C1810] animate-float" viewBox="0 0 200 200"
              fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 90C50 85 53 82 58 82H142C147 82 150 85 150 90V95H50V90Z" stroke="currentColor"
                stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" />
              <rect x="45" y="95" width="110" height="35" rx="3" stroke="currentColor" stroke-width="4" fill="none" />
              <line x1="45" y1="130" x2="45" y2="145" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
              <line x1="155" y1="130" x2="155" y2="145" stroke="currentColor" stroke-width="4" stroke-linecap="round" />

              <circle cx="100" cy="60" r="8" fill="currentColor" opacity="0.8" />
              <path d="M100 75 Q100 68, 105 65 Q110 62, 110 55 Q110 48, 105 45 Q100 42, 95 45" stroke="currentColor"
                stroke-width="3" stroke-linecap="round" fill="none" opacity="0.8" />
            </svg>
          </div>
        </div>

        <div class="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div class="absolute top-[20%] left-[10%] w-3 h-3 bg-[#2C1810]/20 rounded-full animate-float-slow"></div>
          <div class="absolute top-[30%] right-[15%] w-2 h-2 bg-[#2C1810]/20 rounded-full animate-float-slower"></div>
          <div class="absolute bottom-[25%] left-[20%] w-4 h-4 bg-[#2C1810]/20 rounded-full animate-float"></div>
          <div class="absolute bottom-[20%] right-[10%] w-2.5 h-2.5 bg-[#2C1810]/20 rounded-full animate-float-slow">
          </div>
        </div>
      </div>

      <div class="space-y-5 px-4 relative z-10">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a0f0a] leading-tight">
          {{ title }}
        </h2>
        <p class="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          {{ description }}
        </p>
      </div>

      <div v-if="showSearch" class="max-w-xl mx-auto px-4">
        <div class="relative">
          <input type="text" v-model="searchQuery" @keyup.enter="handleSearch" placeholder="Cari produk furniture..."
            class="w-full px-6 py-4 pr-14 rounded-full border-2 border-gray-200 focus:border-[#2C1810] focus:outline-none transition-all duration-300 text-gray-700 placeholder:text-gray-400" />
          <button @click="handleSearch"
            class="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-[#2C1810] text-white rounded-full hover:bg-[#1a0f0a] transition-all duration-300 hover:scale-105">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
        <button @click="router.push('/')"
          class="inline-flex items-center gap-2 px-8 py-4 bg-[#2C1810] text-white rounded-full font-semibold text-base transition-all duration-300 shadow-xl hover:shadow-2xl hover:bg-[#1a0f0a] hover:scale-105 active:scale-95 whitespace-nowrap group">
          <svg class="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none"
            stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          {{ homeButtonText }}
        </button>

        <button v-if="showBackButton" @click="$emit('go-back')"
          class="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2C1810] border-2 border-[#2C1810] rounded-full font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-[#2C1810] hover:text-white hover:scale-105 active:scale-95 whitespace-nowrap group">
          <svg class="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none"
            stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {{ backButtonText }}
        </button>
      </div>

      <div v-if="showQuickLinks" class="pt-6 px-4">
        <p class="text-sm text-gray-500 mb-4 font-medium">Atau kunjungi halaman populer:</p>
        <div class="flex flex-wrap gap-3 justify-center">
          <button v-for="link in quickLinks" :key="link.label" @click="router.push(link.path)"
            class="px-5 py-2.5 cursor-pointer bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:border-[#2C1810] hover:text-[#2C1810] hover:shadow-md transition-all duration-300 hover:scale-105">
            {{ link.label }}
          </button>
        </div>
      </div>

      <slot name="extra-content"></slot>

    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  title: {
    type: String,
    default: 'Oops! Halaman Tidak Ditemukan'
  },
  description: {
    type: String,
    default: 'Sepertinya furnitur yang Anda cari telah dipindahkan atau tidak pernah ada di sini. Mari kita bantu Anda menemukan yang tepat.'
  },
  homeButtonText: {
    type: String,
    default: 'Kembali ke Beranda'
  },
  backButtonText: {
    type: String,
    default: 'Halaman Sebelumnya'
  },
  showBackButton: {
    type: Boolean,
    default: true
  },
  showSearch: {
    type: Boolean,
    default: true
  },
  showQuickLinks: {
    type: Boolean,
    default: true
  },
  quickLinks: {
    type: Array,
    default: () => [
      { label: 'Layanan', path: '/layanan' },
      { label: 'Blog', path: '/blog' },
      { label: 'Galery', path: '/gallery' },
      { label: 'Tentang', path: '/tentang' }
    ]
  }
})

const emit = defineEmits(['go-home', 'go-back', 'search', 'quick-link'])

const searchQuery = ref('')

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    emit('search', searchQuery.value)
  }
}
</script>

<style scoped>
@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-20px);
  }
}

@keyframes float-slow {

  0%,
  100% {
    transform: translateY(0px) translateX(0px);
  }

  50% {
    transform: translateY(-15px) translateX(5px);
  }
}

@keyframes float-slower {

  0%,
  100% {
    transform: translateY(0px) translateX(0px);
  }

  50% {
    transform: translateY(-10px) translateX(-5px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 4s ease-in-out infinite;
}

.animate-float-slower {
  animation: float-slower 5s ease-in-out infinite;
}

/* Input Focus Ring Custom */
input:focus {
  box-shadow: 0 0 0 3px rgba(44, 24, 16, 0.1);
}

/* Responsive Text Size */
@media (max-width: 640px) {
  h1 {
    font-size: 100px;
  }
}
</style>