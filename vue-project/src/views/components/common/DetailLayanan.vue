<template>
    <div class="min-h-screen bg-gray-50">
        <div class="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-8 sm:py-12">
            <!-- Back Button -->
            <button @click="router.back()"
                class="inline-flex items-center text-[#8B4513] hover:text-[#6B3410] font-semibold mb-6 sm:mb-8 transition-colors">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                Kembali ke Layanan
            </button>
            <div v-if="service" class="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 mb-8 sm:mb-12">
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4 sm:mb-6">
                    {{ service.title }}
                </h1>

                <p class="text-base sm:text-lg text-[#6b6b6b] mb-6 sm:mb-8 leading-relaxed">
                    {{ service.fullDescription }}
                </p>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    <div class="bg-gray-50 rounded-lg sm:rounded-xl p-6 sm:p-8">
                        <h3 class="text-xl sm:text-2xl font-bold text-[#1a1a1a] mb-4 sm:mb-6">
                            Material Berkualitas
                        </h3>
                        <ul class="space-y-3 sm:space-y-4">
                            <li v-for="(material, index) in service.materials" :key="index" class="flex items-start">
                                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-[#8B4513] mr-3 flex-shrink-0 mt-0.5"
                                    fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="text-sm sm:text-base text-[#1a1a1a]">{{ material }}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="bg-amber-50 rounded-lg sm:rounded-xl p-6 sm:p-8 flex flex-col justify-between">
                        <div>
                            <h3 class="text-xl sm:text-2xl font-bold text-[#1a1a1a] mb-4">
                                Harga
                            </h3>
                            <p class="text-2xl sm:text-3xl font-bold text-[#8B4513] mb-6">
                                {{ service.price }}
                            </p>
                        </div>
                        <button
                            class="w-full bg-[#8B4513] hover:bg-[#6B3410] text-white font-semibold py-3 sm:py-4 px-6 rounded-lg sm:rounded-xl transition-colors text-sm sm:text-base">
                            Konsultasi Harga
                        </button>
                    </div>
                </div>
            </div>
            <div v-if="service">
                <h2 class="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-6 sm:mb-8">
                    Galeri
                </h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    <div v-for="(image, index) in service.gallery" :key="index" @click="openLightbox(index)"
                        class="relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer group aspect-[4/3]">
                        <img :src="image" :alt="`${service.title} ${index + 1}`"
                            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110">
                        <div
                            class="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                        </div>
                    </div>
                </div>
            </div>

            <div v-else class="text-center py-16 sm:py-20">
                <p class="text-lg sm:text-xl text-[#6b6b6b]">Layanan tidak ditemukan</p>
            </div>
        </div>

        <Transition name="fade">
            <div v-if="isLightboxOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
                @click="closeLightbox">
                <button @click="closeLightbox"
                    class="absolute top-4 right-4 sm:top-8 sm:right-8 text-white hover:text-gray-300 transition-colors z-10">
                    <svg class="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <button @click.stop="previousImage"
                    class="absolute left-2 sm:left-8 text-white hover:text-gray-300 transition-colors p-2 sm:p-4">
                    <svg class="w-8 h-8 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div @click.stop class="relative max-w-7xl max-h-[90vh] mx-4 sm:mx-8">
                    <img :src="service.gallery[currentImageIndex]" :alt="`${service.title} ${currentImageIndex + 1}`"
                        class="max-w-full max-h-[90vh] object-contain rounded-lg">
                    <div
                        class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                        {{ currentImageIndex + 1 }} / {{ service.gallery.length }}
                    </div>
                </div>

                <button @click.stop="nextImage"
                    class="absolute right-2 sm:right-8 text-white hover:text-gray-300 transition-colors p-2 sm:p-4">
                    <svg class="w-8 h-8 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const isLightboxOpen = ref(false);
const currentImageIndex = ref(0);

// Service Data
const servicesData = {
    'kitchen-set': {
        id: 'kitchen-set',
        title: 'Kitchen Set',
        fullDescription: 'Kitchen set custom dirancang sesuai kebutuhan dan ruang dapur Anda. Dengan berbagai pilihan finishing dan aksesoris modern.',
        price: 'Mulai dari Rp 2.500.000/meter',
        materials: [
            'Multiplek',
            'HPL Premium',
            'Handle Stainless',
            'Rel Laci Hidrolik'
        ],
        gallery: [
            'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop'
        ]
    },
    'lemari-custom': {
        id: 'lemari-custom',
        title: 'Lemari Custom',
        fullDescription: 'Lemari pakaian custom dengan desain yang efisien dan elegan. Sesuaikan dengan kebutuhan penyimpanan Anda.',
        price: 'Mulai dari Rp 2.000.000/meter',
        materials: [
            'Kayu Jati/Mahoni',
            'Finishing Duco/Natural',
            'Sliding System Premium',
            'Interior Organizer'
        ],
        gallery: [
            'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1595428773664-c5e9a4b0e9c3?w=1200&h=800&fit=crop'
        ]
    },
    'backdrop-interior': {
        id: 'backdrop-interior',
        title: 'Backdrop Interior',
        fullDescription: 'Backdrop TV dan dinding dekoratif yang mempercantik ruangan Anda dengan sentuhan modern dan minimalis.',
        price: 'Mulai dari Rp 1.500.000/meter',
        materials: [
            'HPL Motif',
            'Wall Panel 3D',
            'LED Strip Integration',
            'Cable Management System'
        ],
        gallery: [
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&h=800&fit=crop'
        ]
    },
    'furniture-custom': {
        id: 'furniture-custom',
        title: 'Furniture Custom',
        fullDescription: 'Furniture custom untuk berbagai kebutuhan ruangan. Dari meja kerja, rak buku, hingga furniture multifungsi.',
        price: 'Mulai dari Rp 1.800.000/unit',
        materials: [
            'Solid Wood',
            'Metal Frame Option',
            'Premium Finishing',
            'Custom Dimension'
        ],
        gallery: [
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=1200&h=800&fit=crop'
        ]
    }
};

const service = computed(() => servicesData[route.params.id]);

const openLightbox = (index) => {
    currentImageIndex.value = index;
    isLightboxOpen.value = true;
    document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
    isLightboxOpen.value = false;
    document.body.style.overflow = '';
};

const nextImage = () => {
    if (service.value) {
        currentImageIndex.value = (currentImageIndex.value + 1) % service.value.gallery.length;
    }
};

const previousImage = () => {
    if (service.value) {
        currentImageIndex.value = (currentImageIndex.value - 1 + service.value.gallery.length) % service.value.gallery.length;
    }
};

onMounted(() => {
    window.scrollTo(0, 0);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>