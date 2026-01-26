<template>
    <div class="min-h-screen flex flex-col">
        <Sidebar />
        <main class="w-full relative">
            <router-view />
            <div class="fixed bottom-6 right-6 z-50">
                <div class="relative animate-float">
                    <div
                        class="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-red-500 to-red-400 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10 animate-bounce ring-4 ring-white badge-glow">
                        1
                    </div>

                    <div class="relative w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110 whatsapp-pulse overflow-hidden group">
                        <div class="absolute inset-0 shine-effect"></div>
                        <svg viewBox="0 0 24 24" class="w-10 h-10  fill-white drop-shadow-md" aria-hidden="true">
                            <path :d="siWhatsapp.path" />
                        </svg>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import Sidebar from '@/views/components/layout/Sidebar.vue'
import { siWhatsapp } from 'simple-icons'
</script>

<style scoped>
@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}

.whatsapp-pulse {
    animation: pulse 2s infinite, glow 2s ease-in-out infinite alternate;
    box-shadow: 0 10px 40px rgba(37, 211, 102, 0.4);
}

@keyframes pulse {
    0% {
        box-shadow: 0 10px 40px rgba(37, 211, 102, 0.4), 0 0 0 0 rgba(37, 211, 102, 0.7);
    }

    50% {
        box-shadow: 0 10px 40px rgba(37, 211, 102, 0.4), 0 0 0 15px rgba(37, 211, 102, 0);
    }

    100% {
        box-shadow: 0 10px 40px rgba(37, 211, 102, 0.4), 0 0 0 0 rgba(37, 211, 102, 0);
    }
}

@keyframes glow {
    0% {
        filter: brightness(1) saturate(1);
    }

    100% {
        filter: brightness(1.2) saturate(1.3);
    }
}

.badge-glow {
    animation: bounce 2s infinite, badgeGlow 1.5s ease-in-out infinite alternate;
}

@keyframes badgeGlow {
    0% {
        box-shadow: 0 4px 15px rgba(255, 71, 87, 0.5);
    }

    100% {
        box-shadow: 0 4px 25px rgba(255, 71, 87, 0.8), 0 0 20px rgba(255, 71, 87, 0.6);
    }
}

.shine-effect {
    background: linear-gradient(45deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent);
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
    animation: shine 3s infinite;
}

@keyframes shine {
    0% {
        transform: translateX(-100%) translateY(-100%) rotate(45deg);
    }

    100% {
        transform: translateX(100%) translateY(100%) rotate(45deg);
    }
}

.whatsapp-pulse:hover {
    animation: pulse 1s infinite, glow 1s ease-in-out infinite alternate;
}
</style>