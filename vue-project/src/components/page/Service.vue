<template>
    <div class="min-h-screen h-full">
        <div class="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-12 sm:py-16">
              <h2 class="text-xs sm:text-[15px] tracking-[0.1em] sm:tracking-[0.15em] font-light text-[#464646] uppercase">
                    LAYANAN CHINTYA INTERIOR
                </h2>
            <div class="mt-4 sm:mt-5 flex flex-col lg:flex-row lg:gap-8 xl:gap-12">
                <div class="flex-1/4">
                    <h1 class="text-3xl sm:text-4xl md:text-5xl leading-tight sm:leading-[1.1] max-w-full lg:max-w-160 text-[#1a1a1a]"
                        style="font-weight: 700;">
                    Pilih Layanan Interior & Furniture Sesuai Kebutuhan Anda
                    </h1>
                </div>
                <div class="flex-1 flex flex-col mt-6 lg:mt-0 text-md sm:text-md font-thin space-y-3 sm:space-y-1.5 text-[#6b6b6b]">
                    <p>Chintya Interior menghadirkan solusi interior dan furniture custom yang dirancang sesuai
                        kebutuhan dan karakter ruang Anda. Mulai dari kitchen set, lemari, backdrop TV, hingga furnitur
                        lainnya, kami mengutamakan desain fungsional, material berkualitas, dan pengerjaan yang rapi
                        agar setiap detail memberi kenyamanan serta nilai estetika yang tahan lama.
                    </p>
                </div>
            </div>
            <div class="w-20 sm:w-30 mt-8 sm:mt-10 mb-8 sm:mb-10 h-0.5 bg-amber-600"></div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                <div v-for="service in services" :key="service.id"
                    class="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
                    @click="toDetail(service.id)">
                    <div class="flex flex-col md:flex-row">
                        <div class="w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                            <img :src="service.image" :alt="service.title"
                                class="w-full h-full object-cover hover:scale-110 transition-transform duration-300">
                        </div>
                        <div class="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <h3 class="text-xl sm:text-2xl font-bold text-[#1a1a1a] mb-3 sm:mb-4">
                                    {{ service.title }}
                                </h3>
                                <p class="text-md sm:text-md font-thin space-y-3 sm:space-y-1.5 text-[#6b6b6b] mb-4 sm:mb-6 line-clamp-3">
                                    {{ service.description }}
                                </p>
                            </div>

                            <div class="flex flex-col">
                                <p class="text-lg sm:text-md font-semibold text-[#8B4513]">
                                    {{ service.price }}
                                </p>
                                <button class="inline-flex items-center text-[#8B4513] hover:text-[#6B3410] text-sm sm:text-base transition-colors" style="font-weight: 400;">
                                    Lihat Detail
                                    <svg class="size-3 sm:size-4 ml-2" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                                            d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const services = ref([
    {
        id: 'kitchen-set',
        title: 'Kitchen Set',
        description: 'Kitchen set custom dengan desain modern dan fungsional. Kami menggunakan material berkualitas tinggi untuk memastikan daya tahan dan estetika yang maksimal.',
        price: 'Mulai dari Rp 2.500.000/meter',
        image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop'
    },
    {
        id: 'lemari-custom',
        title: 'Lemari Custom',
        description: 'Lemari pakaian custom dengan desain yang efisien dan elegan. Sesuaikan dengan kebutuhan penyimpanan Anda.',
        price: 'Mulai dari Rp 2.000.000/meter',
        image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=600&fit=crop'
    },
    {
        id: 'backdrop-interior',
        title: 'Backdrop Interior',
        description: 'Backdrop TV dan dinding dekoratif yang mempercantik ruangan Anda dengan sentuhan modern dan minimalis.',
        price: 'Mulai dari Rp 1.500.000/meter',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop'
    },
    {
        id: 'furniture-custom',
        title: 'Furniture Custom',
        description: 'Furniture custom untuk berbagai kebutuhan ruangan. Dari meja kerja, rak buku, hingga furniture multifungsi.',
        price: 'Mulai dari Rp 1.800.000/unit',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop'
    }
]);

const toDetail = (id) => {
    router.push(`/detail-layanan/${id}`);
};
</script>

<style scoped>
.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>