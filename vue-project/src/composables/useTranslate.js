import { useLangStore } from '@/stores/lang'
import { messages } from '@/lang/messages'

export function useTranslate() {
  const langStore = useLangStore()

  const t = (key) => {
    return messages[langStore.lang]?.[key] || key
  }

  return { t }
}
