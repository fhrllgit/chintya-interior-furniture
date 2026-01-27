<template>
    <header class="relative">
        <transition name="slide-down">
            <div v-show="showNavbar"
                class="flex bg-[#2C1810] md:bg-[#2C1810] text-white fixed top-0 z-90 h-17 sm:h-22 py-3 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 w-full items-center justify-between transition-colors duration-300">
                <div class="flex items-center gap-3">
                    <img class="sm:w-8 sm:h-8 w-6 h-6 object-contain" :src="logoCF" alt="">
                    <div class="sm:flex flex-col hidden">
                        <h1 class="text-xl sm:text-lg font-semibold md:text-[1.2rem] text-white md:text-white">Chintya
                            Furniture</h1>
                        <p class="text-xs text-[#cacaca]">{{ t('title_logo') }}</p>
                    </div>
                </div>
                <nav class="lg:flex hidden items-center gap-6 lg:gap-8 text-sm lg:text-sm">
                    <RouterLink v-for="item in arrNavItems" :to="item.to" :key="item">
                        <button style="font-weight: 500;"
                            class="cursor-pointer text-[#b8b7b7] hover:text-white transition-colors">{{ t(item.key)
                            }}</button>
                    </RouterLink>
                </nav>
                <div class="lg:flex gap-7 hidden items-center justify-center">
                    <div class="relative group inline-block">
                        <div
                            class="flex px-3.5 py-2 text-[#cacaca] hover:text-white rounded-xl cursor-pointer hover:bg-[#5A3A2A] items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                            <button class="flex items-center justify-center gap-2  rounded">
                                <span class="text-sm">{{ currenLabel.icons }}</span>
                                <span class="text-sm">{{ currenLabel.label }}</span>
                            </button>
                        </div>
                        <!-- hover lang desktop-->
                        <div class="absolute z-50 right-0 border-3 bg-[#5A3A2A] border-[#5A3A2A] mt-2 w-50 overflow-hidden rounded-2xl shadow-lg invisible opacity-0 group-hover:visible
                         group-hover:opacity-100 transition-all duration-200">
                            <button v-for="item in languages" :key="item.code" @click="changeLanguage(item.code)"
                                class="w-full flex justify-between items-center px-4 py-4 cursor-pointer text-left text-sm transition"
                                :class="item.code === currenLabel.code
                                    ? 'bg-[#5A3A2A] text-white font-semibold'
                                    : 'bg-[#2C1810] text-white'">
                                {{ item.icons }}
                                {{ item.label }}
                                <svg v-if="item.code === langStore.lang" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                    class="size-4 text-white">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <span @click="isSearch = true"
                        class="hover:border-3 hover:border-[#5A3A2A] hover:bg-[#5a3a2a70] w-12 h-12 rounded-full flex items-center justify-center  cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" class="size-5 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </span>
                </div>
                <div class="flex items-center justify-center gap-5">
                    <button @click="isSearch = true"
                        class="lg:hidden border-2 border-[#ffffff63] hover:border-white hover:bg-[#ffffff23] cursor-pointer rounded-xl flex p-2 -mr-2"
                        aria-label="Toggle menu">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-5 sm:size-6 text-white cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                    <button @click="toggleMenu"
                        class="lg:hidden border-2 border-[#ffffff63] hover:border-white hover:bg-[#ffffff23] cursor-pointer rounded-xl flex p-2 -mr-2"
                        aria-label="Toggle menu">
                        <svg v-if="!isMenuOpen" class="size-5 sm:size-6 text-white cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
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
            </div>
        </transition>

        <!-- MOBILE MENU -->
        <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 -translate-y-4"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-4">
            <div v-if="isMenuOpen"
                class="flex flex-col lg:hidden border-t-2 border-t-[#5A3A2A] bg-[#2C1810] shadow-lg fixed mt-17 sm:mt-22 left-0 right-0 z-50 w-full">
                <nav class="flex flex-col w-full items-center justify-center space-y-4 py-6 px-4 sm:px-8">
                    <RouterLink @click="isMenuOpen = false" :key="item.name" :to="item.to" v-for="item in arrNavItems"
                        class="cursor-pointer w-full text-start px-4 text-white py-3 hover:bg-[#ffffff23] rounded-lg transition-colors">
                        {{ t(item.key) }}
                    </RouterLink>
                </nav>
                <div class="items-center justify-center px-4 sm:px-8">
                    <div class="flex gap-5 w-full border-t py-3 border-t-[#5A3A2A]">
                        <button v-for="item in languages" :key="item.code" @click="changeLanguage(item.code)"
                            class="w-full gap-3  flex flex-1 rounded-2xl justify-center items-center px-4 py-4 cursor-pointer text-left text-sm transition"
                            :class="item.code === currenLabel.code
                                ? 'bg-[#fff] text-black font-semibold'
                                : 'bg-[#ffffff23] border border-[#ffffff63] text-white font-semibold'">
                            {{ item.icons }}
                            {{ item.label }}
                            <svg v-if="item.code === langStore.lang" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-4 text-black">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </transition>
        <!-- SEARCH -->
        <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 -translate-y-4"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-4">
            <div v-if="isSearch"
                class="fixed gap-5 flex px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 mt-17 sm:mt-22 z-30 border-t-2 border-t-[#5A3A2A] bg-[#2C1810] w-full items-center justify-center h-25">
                <div
                    class="w-full flex gap-2 px-4 items-center justify-center rounded-4xl  bg-[#ffffff23] h-13 border-2 border-[#ffffff63]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6 text-[#ffffff8d]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input type="text" :placeholder="t('search')"
                        class="w-full h-full placeholder:text-sm text-[#ffffff85] bg-transparent placeholder:text-[#ffffff85]  outline-none" />
                </div>
                <span @click="isSearch = false" style="font-weight: 500;"
                    class="h-13 w-18 text-sm hover:text-white hover:bg-[#ffffff23] cursor-pointer text-[#ffffff85] flex items-center justify-center bg-[#706f6e45] rounded-4xl">{{
                    t('cancel') }}</span>
            </div>
        </transition>
    </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useLangStore } from '@/stores/lang'
import { useTranslate } from '@/composables/useTranslate'
import logoCF from '@/assets/img/logoCF.png'

const isMenuOpen = ref(false)
const showNavbar = ref(true)
const isSearch = ref(false)

const langStore = useLangStore()
const { t } = useTranslate()

const languages = [
    { icons: '🇮🇩', code: 'id', label: 'Indonesia' },
    { icons: '🇬🇧', code: 'en', label: 'English' },
]

const changeLanguage = (code) => {
    langStore.setLang(code)
    isMenuOpen.value = false
}

const currenLabel = computed(() =>
    languages.find(l => l.code === langStore.lang)
)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

const arrNavItems = [
    { key: 'beranda', to: '/beranda' },
    { key: 'tentang', to: '/tentang' },
    { key: 'layanan', to: '/layanan' },
    { key: 'galeri', to: '/galeri/:id' },
    { key: 'blog', to: '/blog' },
    { key: 'kontak', to: '/kontak' },
]
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