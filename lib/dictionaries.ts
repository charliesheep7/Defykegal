import type { Dictionary } from '@/types/dictionary'
import type { Locale } from 'lib/i18n'
import en from '../dictionaries/en.json'
import de from '../dictionaries/de.json'
import fr from '../dictionaries/fr.json'
import es from '../dictionaries/es.json'
import it from '../dictionaries/it.json'

// Typed as Record<Locale, Dictionary> so a missing or misspelled key in any
// locale fails the type check (and therefore `next build`).
export const dictionaries: Record<Locale, Dictionary> = { en, de, fr, es, it }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en
}
