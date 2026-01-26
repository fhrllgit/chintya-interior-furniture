<template>
  <section class="bg-gray-50 py-16 md:py-24">
    <div class="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32">
      <div class="flex justify-center mb-6">
        <span class="inline-block px-6 py-2.5 rounded-full text-white text-sm font-semibold"
          style="background-color: #2C1810;">
          Paket Harga
        </span>
      </div>

      <div class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-3" style="color: #1a1a1a;">
          Pricelist Lengkap
        </h2>
        <p class="text-gray-600 text-sm md:text-base leading-relaxed">
          Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket dapat disesuaikan sesuai kebutuhan.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto mb-10">
        <div v-for="(plan, index) in plans" :key="index"
          class="relative rounded-3xl border-2 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
          :class="[
            plan.featured
              ? 'lg:-mt-4 lg:mb-0 lg:scale-[1.02] bg-white'
              : 'bg-white',
            plan.featured ? 'border-[#2C1810]' : 'border-gray-200']">
          <div class="rounded-t-3xl p-6" :style="{ backgroundColor: plan.featured ? '#2C1810' : '#1a2332' }">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-lg md:text-xl font-bold text-white">
                {{ plan.name }}
              </h3>
              <span v-if="plan.badge" class="px-2.5 py-1 rounded-full text-xs font-semibold" :style="{
                backgroundColor: plan.featured ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.15)',
                color: '#ffffff'}">
                {{ plan.badge }}
              </span>
            </div>
            <p class="text-gray-300 text-xs md:text-sm">
              {{ plan.subtitle }}
            </p>
          </div>

          <div class="p-6">
            <div class="mb-5">
              <div class="flex items-baseline gap-2 mb-1">
                <span class="text-2xl md:text-3xl font-bold" style="color: #1a1a1a;">
                  {{ plan.price }}
                </span>
                <span v-if="plan.discount" class="px-2 py-0.5 rounded-full text-xs font-bold text-white"
                  style="background-color: #2C1810;">
                  {{ plan.discount }}
                </span>
              </div>
              <p v-if="plan.originalPrice" class="text-xs text-gray-500 line-through">
                {{ plan.originalPrice }}
              </p>
            </div>

            <p class="text-gray-600 text-xs md:text-sm mb-5 leading-relaxed">
              {{ plan.description }}
            </p>

            <ul class="space-y-2.5 mb-6">
              <li v-for="(feature, idx) in plan.features" :key="idx" class="flex items-start gap-2.5">
                <div class="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5"
                  style="background-color: #2C1810;">
                  <svg class="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="text-xs md:text-sm text-gray-700">{{ feature }}</span>
              </li>
            </ul>

            <button @click="toggleFeatures(index)"
              class="flex items-center gap-2 text-xs md:text-sm font-semibold mb-5 transition-colors"
              :style="{ color: '#2C1810' }">
              <span>{{ plan.showAll ? 'Sembunyikan detail' : 'Lihat selengkapnya' }}</span>
              <svg class="w-3.5 h-3.5 transition-transform duration-300" :class="{ 'rotate-180': plan.showAll }"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <a :href="plan.ctaLink"
              class="block w-full py-3 rounded-full text-center font-semibold text-xs md:text-sm transition-all duration-300 hover:shadow-lg"
              :class="plan.featured ? 'text-white hover:opacity-90' : 'text-white hover:opacity-90'"
              :style="{ backgroundColor: plan.featured ? '#10b981' : '#10b981' }">
              <span class="inline-flex items-center gap-2">
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {{ plan.ctaText }}
              </span>
            </a>
          </div>
        </div>
      </div>

      <div class="flex pt-15 justify-center">
        <a href="#all-packages"
          class="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg border-2"
          style="color: #2C1810; border-color: #2C1810;"
          @mouseenter="e => { e.target.style.backgroundColor = '#2C1810'; e.target.style.color = '#ffffff'; }"
          @mouseleave="e => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#2C1810'; }">
          Lihat Semua Paket
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const plans = ref([
  {
    name: 'Paket Furniture Basic',
    badge: 'Best Value',
    subtitle: 'Furniture custom untuk ruangan kecil & menengah',
    price: 'Mulai 5 Juta',
    originalPrice: 'Mulai 7 Juta',
    discount: '-29%',
    description: 'Cocok untuk furniture custom 1-2 item. Fokus pada kualitas material dan finishing sempurna.',
    features: [
      'Desain 1 item furniture (meja, lemari, atau rak)',
      'Material kayu solid atau engineered wood',
      'Konsultasi desain gratis',
      'Finishing HPL atau duco',
      'Garansi 1 tahun'
    ],
    showAll: false,
    ctaText: 'Konsultasi Paket Basic',
    ctaLink: '#contact',
    featured: false
  },
  {
    name: 'Paket Interior Pro',
    badge: 'Paling Direkomendasikan',
    subtitle: 'Interior & furniture lengkap untuk satu ruangan',
    price: 'Mulai 15 Juta',
    originalPrice: 'Mulai 20 Juta',
    discount: '-25%',
    description: 'Paket terlengkap untuk transformasi satu ruangan. Desain premium dengan material berkualitas tinggi.',
    features: [
      'Desain interior complete 1 ruangan',
      'Furniture custom hingga 5 item',
      'Material premium (kayu solid, HPL import)',
      'Lighting & electrical plan',
      '3D rendering & visualisasi',
      'Project manager dedicated',
      'Garansi 2 tahun + maintenance'
    ],
    showAll: false,
    ctaText: 'Diskusi Paket Pro',
    ctaLink: '#contact',
    featured: true
  },
  {
    name: 'Paket Full House',
    badge: 'Premium Package',
    subtitle: 'Solusi complete untuk seluruh rumah atau kantor',
    price: 'Mulai 50 Juta',
    originalPrice: null,
    discount: null,
    description: 'Transformasi total dengan desain interior dan furniture custom untuk seluruh properti Anda.',
    features: [
      'Desain interior complete full house',
      'Furniture custom unlimited items',
      'Material premium + hardware import',
      'Smart home integration ready',
      'Landscape & outdoor furniture',
      'Tim dedicated + progress report',
      'Garansi 3 tahun + free maintenance 1 tahun'
    ],
    showAll: false,
    ctaText: 'Konsultasi Full House',
    ctaLink: '#contact',
    featured: false
  }
]);

const toggleFeatures = (index) => {
  plans.value[index].showAll = !plans.value[index].showAll;
};
</script>

<style scoped>
/* No additional styles needed */
</style>