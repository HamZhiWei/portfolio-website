import { useTranslation } from '@/hooks/useTranslation'

export function LanguageSwitcher() {
  const { language, changeLanguage, t } = useTranslation()

  return (
    <div className="inline-flex items-center rounded-full border border-primary/20 bg-surface p-1 text-sm font-semibold">
      <button
        type="button"
        onClick={() => changeLanguage('en')}
        className={`rounded-full px-3 py-1 transition ${
          language === 'en' ? 'bg-primary text-white' : 'text-text-muted hover:text-primary'
        }`}
        aria-pressed={language === 'en'}
      >
        {t('language.en')}
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('zh')}
        className={`rounded-full px-3 py-1 transition ${
          language === 'zh' ? 'bg-primary text-white' : 'text-text-muted hover:text-primary'
        }`}
        aria-pressed={language === 'zh'}
      >
        {t('language.zh')}
      </button>
    </div>
  )
}
