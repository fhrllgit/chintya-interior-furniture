<template>
    <div class="md:px-0 px-4 py-8 sm:py-12 min-h-screen h-full">
        <div class="text-center items-center justify-center flex flex-col mb-8 sm:mb-12">
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-3">
                Galeri Kami
            </h1>
            <div class="w-20 sm:w-30 mb-3  h-0.5 bg-amber-600"></div>
            <p class="text-sm sm:text-md text-[#6b6b6b] max-w-2xl mx-auto">
                Anda dapat melihat galeri kami di sini, klik untuk melihat koleksi kami. Anda dapat melihat aktivitas
                harian kami dan produk-produk yang dibuat oleh Chintya Interior dengan berbagai Customer di seluruh
                Indonesia.
            </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div v-for="(image, index) in images" :key="index" @click="openLightbox(index)"
                class="relative overflow-hidden cursor-pointer group aspect-square sm:aspect-auto sm:h-64 md:h-72 lg:h-80">
                <img :src="image.src" :alt="image.alt"
                    class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110">
                <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                </div>
            </div>
        </div>

        <Transition name="fade">
            <div v-if="isLightboxOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
                @click="closeLightbox">
                <button @click="closeLightbox"
                    class="absolute cursor-pointer top-4 right-4 sm:top-8 sm:right-8 text-white hover:text-gray-300 transition-colors z-10">
                    <svg class="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <button @click.stop="previousImage"
                    class="absolute z-20 left-2 sm:left-8 text-white hover:text-gray-300 transition-colors p-2 sm:p-4">
                    <svg class="w-8 h-8 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div @click.stop class="relative max-w-7xl max-h-[90vh] mx-4 sm:mx-8">
                    <img :src="images[currentImageIndex].src" :alt="images[currentImageIndex].alt"
                        class="max-w-full max-h-[90vh] object-contain rounded-lg">
                    <div
                        class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                        {{ currentImageIndex + 1 }} / {{ images.length }}
                    </div>
                </div>

                <button @click.stop="nextImage"
                    class="absolute z-20 right-2 sm:right-8 text-white hover:text-gray-300 transition-colors p-2 sm:p-4">
                    <svg class="w-8 h-8 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </Transition>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const isLightboxOpen = ref(false);
const currentImageIndex = ref(0);
const images = [
    { src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop', alt: 'Living Room' },
    { src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop', alt: 'Modern Sofa' },
    { src: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=600&fit=crop', alt: 'Bedroom' },
    { src: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800&h=600&fit=crop', alt: 'Kitchen' },
    { src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop', alt: 'Rattan Furniture' },
    { src: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&h=600&fit=crop', alt: 'Dining Area' },
];

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
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
};

const previousImage = () => {
    currentImageIndex.value = (currentImageIndex.value - 1 + images.length) % images.length;
};

const handleKeydown = (e) => {
    if (!isLightboxOpen.value) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') previousImage();
};

if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeydown);
}
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