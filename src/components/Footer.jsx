import { useLang } from '../i18n'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="relative bg-background/70 py-10 px-4 text-center border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-muted-foreground text-xs font-body">{t('footer.copy')}</p>
      </div>
    </footer>
  )
}
