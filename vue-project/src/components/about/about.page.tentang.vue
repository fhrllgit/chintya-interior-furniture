<template>
    <div class="relative flex items-center justify-center min-h-screen w-full bg-white">
        <div class="px-4 mt-25 md:mt-40 lg:mt-20 xl:mt-0 sm:px-6 md:px-10 lg:px-20 xl:px-32">
            <div class="text-center mb-12 lg:mb-30">
                <span
                    class="inline-block font-poppins w-max bg-[#2C1810] border-2 border-[#4A2C1F] text-white shadow-[#4a2c1f66] shadow md:px-5 md:py-2 py-1.5 px-4 rounded-full text-xs font-sm mb-4"
                    style="font-weight: 400;">
                    Tentang Kami
                </span>
                <h1 class="text-2xl sm:text-4xl font-poppins font-semibold text-[#2C1810] leading-tight max-w-5xl mx-auto">
                    Kami Hadir Untuk Mewujudkan Impian Anda.
                </h1>
            </div>
            <div class="lg:flex gap-10 lg:gap-16 items-center  w-full">
                <div class="flex-1 flex justify-center order-2 lg:order-1">
                    <div class="relative w-full max-w-[15rem] lg:max-w-md">
                        <div class="relative">
                            <img :src="logoCF" alt="Chintya Interior Furniture Logo"
                                class="w-full h-auto object-contain drop-shadow-2xl" />
                        </div>
                    </div>
                </div>

                <div style="font-weight: 400;"
                    class="flex-1 font-poppins mt-15 md:mt-25 lg:mt-0 text-xs md:text-[15px] text-[#2C1810] space-y-6 lg:space-y-8 order-1 lg:order-2">
                    <div>
                        <p class="leading-relaxed ">
                            Chintya Interior & Furniture hadir menjawab kebutuhan desain interior yang tidak hanya indah
                            secara visual, tetapi juga fungsional dan berkualitas tinggi, menghadirkan ruang modern yang
                            nyaman, rapi, dan berkarakter untuk setiap hunian Anda.
                        </p>
                    </div>

                    <div>
                        <p class="leading-relaxed">
                            Sejak 2006, kami telah dipercaya ratusan klien dari berbagai kalangan mulai dari hunian
                            pribadi yang ditata menyeluruh, hingga ruang usaha seperti toko, apotek, dan butik dengan
                            fokus menghadirkan interior dan furniture bernilai jangka panjang.
                        </p>
                    </div>

                    <div>
                        <p class="leading-relaxed">
                            Setiap proyek kami awali dengan memahami kebutuhan Anda secara mendalam. Kami percaya
                            interior terbaik bukan sekadar mengikuti tren, melainkan mencerminkan kepribadian dan gaya
                            hidup, dengan keseimbangan fungsi dan estetika jangka panjang.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useTranslate } from '@/composables/useTranslate'
import logoCF from '@/assets/img/logoCF.png'
const { t } = useTranslate()
</script>