<template>
    <div class="px-4 h-full mt-15 w-full sm:px-6 md:px-10 lg:px-20 xl:px-40 py-15">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
            <div v-for="item in arrItems" :key="item.name" class="bg-white justify-center rounded-2xl shadow p-4 sm:p-5 flex flex-col items-center space-y-3 sm:space-y-5">
                <div class="w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-xl">
                    <img class="w-full h-full object-cover bg-center" :src="item.img" alt="">
                </div>
                <span class="text-sm sm:text-md font-semibold text-center">{{ t(item.key) }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import backdrop from '@/assets/img/codeBackdropTV.jpg';
    import lemari from '@/assets/img/27012026almari.jpg'
    import kursi from '@/assets/img/kursi.png';
    import Meja from '@/assets/img/meja.png';
    import tempatTidur from '@/assets/img/tempatTidur.jpg';
    import custom from '@/assets/img/custom.jpg';
    import { useTranslate } from '@/composables/useTranslate'

const { t } = useTranslate()

const arrItems = [
  { key: 'mini_backdrop', img: backdrop },
  { key: 'mini_kursi', img: kursi },
  { key: 'mini_lemari', img: lemari },
  { key: 'mini_meja', img: Meja },
  { key: 'mini_tempat_tidur', img: tempatTidur },
  { key: 'mini_custom', img: custom }
]
</script>