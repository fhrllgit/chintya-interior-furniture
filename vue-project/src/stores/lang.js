import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useLangStore = defineStore('lang', () => {
  const lang = ref(localStorage.getItem('lang') || 'id')

  const setLang = (code) => {
    lang.value = code
  }

  watch(lang, (val) => {
    localStorage.setItem('lang', val)
  })

  return { lang, setLang }
})
