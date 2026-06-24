import {  } from 'app/seo'
import { metadata as englishMetadata } from '../../about/page'

export const metadata = {
  ...englishMetadata,
  alternates: ('/about', { currentLanguage: 'ar' }),
}

export { default } from '../../about/page'
