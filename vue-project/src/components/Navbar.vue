<template>
    <header class="relative">
        <transition name="slide-down">
            <div v-show="showNavbar" :class="[
                'flex fixed top-0 z-20 h-16 md:h-20 py-3 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 w-full items-center justify-between transition-colors duration-300',
                isScrolled ? 'bg-[#8B7355] md:bg-white md:shadow' : 'bg-transparent']">
                <div>
                    <h1 class="text-xl sm:text-2xl md:text-[1.5rem] text-white md:text-black font-serif">Chintya
                        Furniture</h1>
                </div>
                <nav class="md:flex hidden items-center gap-6 lg:gap-8 text-sm lg:text-base">
                    <RouterLink v-for="item in arrNavItems" :to="item.to" :key="item">
                        <button class="cursor-pointer hover:text-[#8B7355] transition-colors">{{ item.name }}</button>
                    </RouterLink>
                </nav>
                <div class="md:flex hidden items-center justify-center border-2 border-[#aba8a895] hover:bg-[#8B7355] hover:text-white hover:border-[#8B7355] transition-all w-36 lg:w-40 text-xs lg:text-sm cursor-pointer font-semibold text-center py-2 rounded-3xl">
                    <button class="cursor-pointer">Konsultasi</button>
                </div>
                <button @click="toggleMenu" class="md:hidden flex p-2 -mr-2" aria-label="Toggle menu">
                    <svg v-if="!isMenuOpen" class="size-6 text-white cursor-pointer" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
                    </svg>
                    <svg v-else class="size-6 text-white cursor-pointer" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z">
                        </path>
                    </svg>
                </button>
            </div>
        </transition>

        <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 -translate-y-4"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-4">
            <div v-if="isMenuOpen" class="flex md:hidden bg-white shadow-lg fixed top-16 left-0 right-0 z-10 w-full">
                <nav class="flex flex-col w-full items-center justify-center space-y-4 py-6 px-4">
                    <div v-for="item in arrNavItems">
                        <button
                            class="cursor-pointer w-full text-center py-2 hover:bg-gray-100 rounded-lg transition-colors">{{
                            item.name }}</button>
                    </div>
                    <button
                        class="cursor-pointer w-full max-w-xs border-2 border-[#8B7355] bg-[#8B7355] text-white font-semibold py-3 rounded-3xl mt-4 hover:bg-[#6d5a43] transition-colors">Konsultasi</button>
                </nav>
            </div>
        </transition>
    </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)
const showNavbar = ref(true)
const isScrolled = ref(false)
let lastScroll = 0

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

const arrNavItems = [
    { name: 'Beranda', to: { path: '/', hash: '#beranda' } },
    { name: 'Tentang Kami', to: { path: '/', hash: '#tentang-kami' } },
    { name: 'Galeri', to: { path: '/', hash: '#galeri' } },
    { name: 'Layanan', to: { path: '/', hash: '#layanan' } },
    { name: 'Blog', to: { path: '/', hash: '#blog' } },
    { name: 'Kontak', to: { path: '/', hash: '#kontak' } },
]

const handleScroll = () => {
    const currentScroll = window.scrollY
    isScrolled.value = currentScroll > 10

    if (currentScroll > lastScroll && currentScroll > 80) {
        showNavbar.value = false
    } else {
        showNavbar.value = true
    }

    lastScroll = currentScroll
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>


<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
    transition: transform 0.4s ease, opacity 0.4s ease;
}

.slide-down-enter-from {
    transform: translateY(-100%);
    opacity: 0;
}

.slide-down-enter-to {
    transform: translateY(0);
    opacity: 1;
}

.slide-down-leave-from {
    transform: translateY(0);
    opacity: 1;
}

.slide-down-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}
</style>