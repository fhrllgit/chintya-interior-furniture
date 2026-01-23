<template>
    <div class="relative w-full bg-[#2C1810] md:min-h-screen">
        <div class="flex pb-0 lg:pb-32 z-20  flex-col lg:flex-row">
            <!-- LEFT SECTION -->
            <div class="lg:flex-1 lg:items-center lg:justify-center flex-col bg-transparent flex px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
                <div class="w-full items-center justify-center mb-10 flex lg:hidden">
                    <div class="relative w-full max-w-60 sm:max-w-lg overflow-hidden">
                        <img 
                            class="w-full h-60 sm:h-100 object-cover" 
                            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80" 
                            alt="Modern Interior Design"
                        />
                    </div>
                </div>
                <div class="w-full lg:max-w-lg space-y-5">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-0.5 bg-white"></div>
                        <h2 class="text-[10px] tracking-[0.2em] font-semibold text-white uppercase">
                            Chintya Interior & Furniture
                        </h2>
                    </div>
                    <!-- LG -->
                    <h1 class="text-3xl hidden lg:block sm:text-4xl lg:text-5xl leading-tight text-white font-light" 
                        style="font-family: Georgia, serif;">
                        Jasa Pembuatan Interior &
                        Furniture Custom
                        Berkualitas
                    </h1>
                    <!-- < LG -->
                    <h1 class="text-2xl block lg:hidden sm:text-4xl lg:text-5xl leading-tight text-white font-light" 
                        style="font-family: Georgia, serif;">
                        Jasa Pembuatan Interior &
                        Furniture <br> Custom
                        Berkualitas
                    </h1>
                    <p class="text-sm max-w-lg sm:text-base text-gray-300 leading-relaxed" 
                       style="font-family: Georgia, serif;">
                        Wujudkan hunian impian Anda dengan desain profesional
                        bersama Chintya Interior & Furniture.
                    </p>
                    <!-- CTA -->
                      <div class="flex flex-col sm:flex-row gap-3 pt-2">
                        <button class="group relative overflow-hidden w-full sm:w-auto sm:px-8 py-2.5 px-5 rounded-full bg-white text-black text-sm font-medium transition-all duration-300 hover:bg-gray-100">
                            <span class="relative z-10">Mulai Sekarang</span>
                        </button>
                        <button class="group w-full sm:w-auto sm:px-8 py-2.5 px-5 rounded-full border border-white text-white text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black flex items-center justify-center gap-2">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <span>Lihat Portofolio</span>
                        </button>
                    </div>
                    <!-- Social Media -->
                    <div class="space-y-2 pt-4">
                        <p class="text-[10px] tracking-[0.15em] text-gray-400 font-medium uppercase">
                            Lihat Karya Terbaru Kami
                        </p>
                        <div class="flex text-white items-center gap-3">
                            <svg class="w-5 h-5 hover:text-gray-300 transition-colors cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
                            </svg>
                            <svg class="w-6 h-6 hover:text-gray-300 transition-colors cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16 8.24537V15.5C16 19.0899 13.0899 22 9.5 22C5.91015 22 3 19.0899 3 15.5C3 11.9101 5.91015 9 9.5 9C10.0163 9 10.5185 9.06019 11 9.17393V12.3368C10.5454 12.1208 10.0368 12 9.5 12C7.567 12 6 13.567 6 15.5C6 17.433 7.567 19 9.5 19C11.433 19 13 17.433 13 15.5V2H16C16 4.76142 18.2386 7 21 7V10C19.1081 10 17.3696 9.34328 16 8.24537Z"></path>
                            </svg>
                            <svg class="w-6 h-6 hover:text-gray-300 transition-colors cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- RIGHT -->
            <div class="flex-1 hidden lg:flex relative min-h-screen items-center justify-center py-20 pr-8">
                <div class="relative w-full h-full max-h-[700px] rounded-bl-[6rem] overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80"
                        alt="Luxury modern living room"
                        class="w-full h-full object-cover" 
                        loading="lazy" 
                    />
                </div>
            </div>
        </div>
        <div class="absolute z-20 left-0 bottom-0 w-full">
            <img class="" src="../../src/assets/img/svgwave.png" alt="">
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
</script>