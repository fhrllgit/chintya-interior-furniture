<template>
  <div class="min-h-[500px] flex items-center justify-center px-4 py-12 sm:px-6 md:px-10">
    <div class="max-w-2xl w-full text-center space-y-8">
      <div class="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
        <svg class="w-full h-full text-[#2C1810] animate-float" viewBox="0 0 200 200" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="currentColor" stroke-width="2" opacity="0.08" />
          <circle cx="100" cy="100" r="60" stroke="currentColor" stroke-width="2" opacity="0.12" />
          <path d="M50 90C50 85 53 82 58 82H142C147 82 150 85 150 90V95H50V90Z" stroke="currentColor" stroke-width="3"
            stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.7" />
          <rect x="45" y="95" width="110" height="35" rx="3" stroke="currentColor" stroke-width="3" fill="none"
            opacity="0.7" />
          <line x1="45" y1="130" x2="45" y2="145" stroke="currentColor" stroke-width="3" stroke-linecap="round"
            opacity="0.7" />
          <line x1="155" y1="130" x2="155" y2="145" stroke="currentColor" stroke-width="3" stroke-linecap="round"
            opacity="0.7" />
          <circle cx="135" cy="65" r="12" stroke="currentColor" stroke-width="3" fill="none" />
          <line x1="144" y1="74" x2="153" y2="83" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
        </svg>

        <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          <span class="w-2 h-2 rounded-full bg-[#2C1810]/30 animate-bounce-dot" style="animation-delay: 0s"></span>
          <span class="w-2 h-2 rounded-full bg-[#2C1810]/30 animate-bounce-dot" style="animation-delay: 0.2s"></span>
          <span class="w-2 h-2 rounded-full bg-[#2C1810]/30 animate-bounce-dot" style="animation-delay: 0.4s"></span>
        </div>
      </div>

      <div class="space-y-4 px-4">
        <h3 class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a0f0a] leading-tight">
          {{ title }}
        </h3>
        <p class="text-base sm:text-sm text-gray-600 leading-relaxed max-w-xl mx-auto">
          {{ description }}
        </p>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
        <button v-if="showRetry" @click="$emit('retry')"
          class="inline-flex cursor-pointer items-center gap-2 px-6 py-3 bg-[#2C1810] text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-[#1a0f0a] hover:scale-105 active:scale-95 whitespace-nowrap group">
          <svg class="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" fill="none"
            stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          {{ retryText }}
        </button>
        <button v-if="showBackHome" @click="router.push('/')"
          class="inline-flex cursor-pointer items-center gap-2 px-6 py-3 bg-white text-[#2C1810] border-2 border-[#2C1810] rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-[#2C1810] hover:text-white hover:scale-105 active:scale-95 whitespace-nowrap group">
          <svg class="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none"
            stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          {{ backHomeText }}
        </button>
      </div>

      <slot name="extra-content"></slot>

    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  title: {
    type: String,
    default: 'Data Tidak Ditemukan'
  },
  description: {
    type: String,
    default: 'Maaf, produk atau data yang Anda cari tidak tersedia saat ini. Silakan coba kata kunci lain atau kembali ke halaman utama.'
  },
  showRetry: {
    type: Boolean,
    default: true
  },
  showBackHome: {
    type: Boolean,
    default: true
  },
  retryText: {
    type: String,
    default: 'Coba Lagi'
  },
  backHomeText: {
    type: String,
    default: 'Kembali ke Beranda'
  }
})
const emit = defineEmits(['retry', 'back-home'])
</script>

<style scoped>
@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-15px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

@keyframes bounce-dot {

  0%,
  100% {
    transform: translateY(0);
    opacity: 0.3;
  }

  50% {
    transform: translateY(-10px);
    opacity: 1;
  }
}

.animate-bounce-dot {
  animation: bounce-dot 1.5s ease-in-out infinite;
}

@media (max-width: 640px) {
  .min-h-\[500px\] {
    min-height: 400px;
  }
}
</style>