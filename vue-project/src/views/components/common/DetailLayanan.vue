<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div class="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-8 sm:py-12 md:py-16">
            <button @click="router.back()"
                class="inline-flex items-center gap-2 text-[#8B4513] hover:text-[#6B3410] font-semibold mb-8 sm:mb-10 transition-all duration-300 group">
                <svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                <span>Kembali ke Layanan</span>
            </button>
            <div v-if="service">
                <div class="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 mb-8 sm:mb-12 border border-gray-100">
                    <div
                        class="inline-flex items-center gap-2 bg-[#8B4513]/10 text-[#8B4513] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Premium Service
                    </div>
                    <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4 sm:mb-6">
                        {{ service.title }}
                    </h1>

                    <p class="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-4xl">
                        {{ service.fullDescription }}
                    </p>
                    <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
                        <div
                            class="lg:col-span-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="p-2 bg-[#8B4513]/10 rounded-lg">
                                    <svg class="w-6 h-6 text-[#8B4513]" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 class="text-xl sm:text-2xl font-bold text-gray-900">
                                    Material Berkualitas
                                </h3>
                            </div>

                            <ul class="space-y-4">
                                <li v-for="(material, index) in service.materials" :key="index"
                                    class="flex items-start group hover:translate-x-2 transition-transform duration-300">
                                    <div class="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#8B4513]/10 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-[#8B4513]/20 transition-colors">
                                        <svg class="w-3 h-3 sm:w-4 sm:h-4 text-[#8B4513]" fill="currentColor"
                                            viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <span class="text-sm sm:text-base md:text-lg text-gray-700 font-medium">{{ material }}</span>
                                </li>
                            </ul>
                        </div>

                        <div class="lg:col-span-2 bg-gradient-to-br from-[#8B4513]/10 to-[#8B4513]/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-[#8B4513]/30 shadow-lg">
                            <div>
                                <div class="flex items-center gap-3 mb-4">
                                    <div class="p-2 bg-white rounded-lg shadow-sm">
                                        <svg class="w-6 h-6 text-[#8B4513]" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 class="text-xl sm:text-2xl font-bold text-gray-900">
                                        Harga
                                    </h3>
                                </div>

                                <div class="mb-6">
                                    <p class="text-xs sm:text-sm text-[#8B4513] font-medium mb-2">Starting from</p>
                                    <p class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#8B4513]">
                                        {{ service.price }}
                                    </p>
                                </div>
                            </div>

                            <button
                                class="w-full bg-gradient-to-r from-[#8B4513] to-[#6B3410] hover:from-[#6B3410] hover:to-[#8B4513] text-white font-bold py-4 px-6 rounded-xl sm:rounded-2xl transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2 group">
                                <span>Konsultasi Harga</span>
                                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="mb-8">
                    <div class="flex items-center gap-3 mb-6 sm:mb-8">
                        <div class="p-2 bg-[#8B4513]/10 rounded-lg">
                            <svg class="w-6 h-6 text-[#8B4513]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                            Galeri Proyek
                        </h2>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        <div v-for="(image, index) in service.gallery" :key="index" @click="openLightbox(index)"
                            class="relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer group aspect-[4/3] bg-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            <img :src="image" :alt="`${service.title} ${index + 1}`"
                                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            </div>

                            <div
                                class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100">
                                <div class="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl">
                                    <svg class="w-6 h-6 sm:w-8 sm:h-8 text-[#8B4513]" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                            </div>

                            <div class="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span class="text-xs font-bold text-[#8B4513]">{{ index + 1 }} / {{
                                    service.gallery.length }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else class="text-center py-20 sm:py-32">
                <div
                    class="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-full mb-6">
                    <svg class="w-10 h-10 sm:w-12 sm:h-12 text-gray-400" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <p class="text-lg sm:text-xl text-gray-500 font-medium">Layanan tidak ditemukan</p>
            </div>
        </div>

        <Transition name="fade">
            <div v-if="isLightboxOpen"
                class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
                @click="closeLightbox">
                <button @click="closeLightbox"
                    class="absolute top-4 right-4 sm:top-8 sm:right-8 text-white hover:text-[#8B4513] transition-colors z-10 p-2 hover:bg-white/10 rounded-full">
                    <svg class="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <button @click.stop="previousImage"
                    class="absolute left-4 sm:left-8 text-white hover:text-[#8B4513] transition-all p-3 hover:bg-white/10 rounded-full">
                    <svg class="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div @click.stop class="relative max-w-7xl max-h-[90vh] mx-4 sm:mx-8">
                    <img :src="service.gallery[currentImageIndex]" :alt="`${service.title} ${currentImageIndex + 1}`"
                        class="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl">
                    <div
                        class="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-full shadow-xl">
                        <span class="text-sm sm:text-base font-bold">
                            {{ currentImageIndex + 1 }} / {{ service.gallery.length }}
                        </span>
                    </div>
                </div>

                <button @click.stop="nextImage"
                    class="absolute right-4 sm:right-8 text-white hover:text-[#8B4513] transition-all p-3 hover:bg-white/10 rounded-full">
                    <svg class="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

const servicesData = {
    'kitchen-set': {
        id: 'kitchen-set',
        title: 'Kitchen Set',
        fullDescription: 'Kitchen set custom dirancang sesuai kebutuhan dan ruang dapur Anda. Dengan berbagai pilihan finishing dan aksesoris modern, kami menciptakan dapur yang tidak hanya cantik namun juga sangat fungsional untuk aktivitas memasak sehari-hari.',
        price: 'Rp 2.500.000/meter',
        materials: [
            'Multiplek Premium Grade A',
            'HPL Anti-Scratch & Waterproof',
            'Handle Stainless Steel 304',
            'Rel Laci Hidrolik Soft-Close'
        ],
        gallery: [
            'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=800&fit=crop'
        ]
    },
    'lemari-custom': {
        id: 'lemari-custom',
        title: 'Lemari Custom',
        fullDescription: 'Lemari pakaian custom dengan desain yang efisien dan elegan. Sesuaikan dengan kebutuhan penyimpanan Anda, mulai dari lemari pakaian, lemari sepatu, hingga walk-in closet dengan sistem organizer yang rapi dan terstruktur.',
        price: 'Rp 2.000.000/meter',
        materials: [
            'Kayu Jati/Mahoni Solid',
            'Finishing Duco/Natural High Quality',
            'Sliding System Premium Silent',
            'Interior Organizer Modular'
        ],
        gallery: [
            'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1595428773664-c5e9a4b0e9c3?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&h=800&fit=crop'
        ]
    },
    'backdrop-interior': {
        id: 'backdrop-interior',
        title: 'Backdrop Interior',
        fullDescription: 'Backdrop TV dan dinding dekoratif yang mempercantik ruangan Anda dengan sentuhan modern dan minimalis. Dilengkapi dengan sistem pencahayaan LED dan cable management yang tersembunyi untuk tampilan yang bersih dan elegan.',
        price: 'Rp 1.500.000/meter',
        materials: [
            'HPL Motif Premium',
            'Wall Panel 3D Textured',
            'LED Strip RGB Integration',
            'Cable Management System'
        ],
        gallery: [
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1200&h=800&fit=crop'
        ]
    },
    'furniture-custom': {
        id: 'furniture-custom',
        title: 'Furniture Custom',
        fullDescription: 'Furniture custom untuk berbagai kebutuhan ruangan. Dari meja kerja, rak buku, hingga furniture multifungsi yang dapat disesuaikan dengan ruang dan gaya hidup Anda. Setiap piece dirancang dengan detail dan kualitas terbaik.',
        price: 'Rp 1.800.000/unit',
        materials: [
            'Solid Wood Premium',
            'Metal Frame Industrial Grade',
            'Premium Finishing UV Coating',
            'Custom Dimension & Design'
        ],
        gallery: [
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&h=800&fit=crop'
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