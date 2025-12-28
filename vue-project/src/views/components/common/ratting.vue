<template>
    <div ref="counterSection" class="w-full mb-20 mt-15 bg-gradient-to-br from-[#8B7355] to-[#6B5845] py-16 sm:py-20 md:py-24 lg:py-28">
        <div class="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
                <div class="flex flex-col items-center justify-center text-center group">
                    <div class="mb-3 sm:mb-4">
                        <div
                            class="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-2xl group-hover:bg-white/20 transition-all duration-300">
                            <svg class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                    <h3
                        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 sm:mb-3 tabular-nums">
                        {{ animatedProjects }}<span class="text-white/80">+</span>
                    </h3>
                    <p class="text-sm sm:text-base md:text-lg text-white/80 font-medium">
                        Completed Projects
                    </p>
                </div>
                <div class="flex flex-col items-center justify-center text-center group">
                    <div class="mb-3 sm:mb-4">
                        <div
                            class="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-2xl group-hover:bg-white/20 transition-all duration-300">
                            <svg class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                    </div>
                    <h3
                        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 sm:mb-3 tabular-nums">
                        {{ animatedClients }}
                    </h3>
                    <p class="text-sm sm:text-base md:text-lg text-white/80 font-medium">
                        Trusted Clients
                    </p>
                </div>
                <div class="flex flex-col items-center justify-center text-center group">
                    <div class="mb-3 sm:mb-4">
                        <div
                            class="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-2xl group-hover:bg-white/20 transition-all duration-300">
                            <svg class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                    <h3
                        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 sm:mb-3 tabular-nums">
                        {{ animatedYears }}
                    </h3>
                    <p class="text-sm sm:text-base md:text-lg text-white/80 font-medium">
                        Years Experience
                    </p>
                </div>
                <div class="flex flex-col items-center justify-center text-center group">
                    <div class="mb-3 sm:mb-4">
                        <div
                            class="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-2xl group-hover:bg-white/20 transition-all duration-300">
                            <svg class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                    <h3
                        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 sm:mb-3 tabular-nums">
                        {{ animatedExperts }}
                    </h3>
                    <p class="text-sm sm:text-base md:text-lg text-white/80 font-medium">
                        Professional & Experts
                    </p>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const counterSection = ref(null);
let observer = null;

// Target values
const targetProjects = 125;
const targetClients = 102;
const targetYears = 24;
const targetExperts = 50;

// Animated values
const animatedProjects = ref(0);
const animatedClients = ref(0);
const animatedYears = ref(0);
const animatedExperts = ref(0);

// Animation function
const animateValue = (start, end, duration, setter) => {
    const startTime = performance.now();
    const range = end - start;

    const step = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setter(Math.floor(start + range * easeOutQuart));

        if (progress < 1) {
            requestAnimationFrame(step);
        }
    };

    requestAnimationFrame(step);
};

onMounted(() => {
    if (!counterSection.value) return;

    observer = new IntersectionObserver(
        ([entry]) => {
            if (!entry.isIntersecting) return;

            animateValue(0, targetProjects, 2000, v => animatedProjects.value = v);
            animateValue(0, targetClients, 2200, v => animatedClients.value = v);
            animateValue(0, targetYears, 1800, v => animatedYears.value = v);
            animateValue(0, targetExperts, 2100, v => animatedExperts.value = v);

            observer.disconnect(); // jalan sekali
        },
        { threshold: 0.3 }
    );

    observer.observe(counterSection.value);
});

onBeforeUnmount(() => {
    if (observer) observer.disconnect();
});
</script>

<style scoped>
/* Ensure numbers use tabular nums for consistent width during animation */
.tabular-nums {
    font-variant-numeric: tabular-nums;
}
</style>