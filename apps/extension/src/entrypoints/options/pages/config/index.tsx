import { i18n } from '#imports'
import { PageLayout } from '../../components/page-layout'
import { ResetConfig } from './reset-config'

export function ConfigPage() {
  return (
    <PageLayout title={i18n.t('options.config.title')} innerClassName="[&>*]:border-b [&>*:last-child]:border-b-0">
      <ResetConfig />
    </PageLayout>
  )
}
