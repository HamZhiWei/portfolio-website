import { useTranslation as useI18nTranslation } from 'react-i18next'

export type AppLanguage = 'en' | 'zh'

export function useTranslation(namespace?: string) {
  const { t, i18n, ready } = useI18nTranslation(namespace)

  const changeLanguage = (lng: AppLanguage) => {
    void i18n.changeLanguage(lng)
  }

  const language = (i18n.language.startsWith('zh') ? 'zh' : 'en') as AppLanguage

  return {
    t,
    i18n,
    ready,
    language,
    changeLanguage,
  }
}
