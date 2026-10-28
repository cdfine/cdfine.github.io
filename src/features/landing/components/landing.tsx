import { useTranslation } from 'react-i18next'

import headshot from '@/assets/carli-headshot.webp'
import { Image } from '@/components/image/image'
import { TranslationKeys } from '@/locales/translation-keys'

import { Bio } from './bio'

export const Landing = () => {
  const { t } = useTranslation()

  return (
    <section className="mx-auto grid w-full max-w-6xl gap-10 py-6 sm:py-10 md:grid-cols-[1fr_2fr] md:items-start md:gap-14 md:py-16 lg:gap-20">
      <div className="relative mx-auto w-56 sm:w-64 md:sticky md:top-10 md:w-full md:max-w-xs">
        <div
          aria-hidden="true"
          className="absolute -inset-3 rounded-full bg-accent opacity-70 blur-2xl"
        />
        <Image
          src={headshot}
          alt={t(TranslationKeys.LandingPhotoAlt)}
          width={800}
          height={796}
          loading="eager"
          fetchPriority="high"
          className="relative aspect-square w-full rounded-full object-cover shadow-xl ring-4 ring-card"
        />
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <h1 className="text-center text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-left lg:text-6xl">
            {t(TranslationKeys.LandingTitle)}
          </h1>
          <span
            aria-hidden="true"
            className="h-1 w-16 rounded-full bg-primary"
          />
        </div>
        <Bio />
      </div>
    </section>
  )
}
