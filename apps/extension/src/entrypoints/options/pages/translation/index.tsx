import { i18n } from '#imports'
import { PageLayout } from '../../components/page-layout'
import { AlwaysTranslate } from './always-translate'
import { CustomTranslationStyle } from './custom-translation-style'
import { PersonalizedPrompt } from './personalized-prompt'
import { RequestRate } from './request-rate'
import { TranslationMode } from './translation-mode'

export function TranslationPage() {
  return (
    <PageLayout title={i18n.t('options.translation.title')} innerClassName="[&>*]:border-b [&>*:last-child]:border-b-0">
      {import.meta.env.DEV ?? <TranslationMode /> }
      <CustomTranslationStyle />
      <RequestRate />
      <AlwaysTranslate />
      <PersonalizedPrompt />
    </PageLayout>
  )
}
