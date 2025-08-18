import { browser, i18n } from '#imports'
import { Button } from '@repo/ui/components/button'

import { cn } from '@repo/ui/lib/utils'
import { useAtomValue } from 'jotai'
import { toast } from 'sonner'

import { configFields } from '@/utils/atoms/config'
import { isAnyAPIKey } from '@/utils/config/config'
import { sendMessage } from '@/utils/message'
import { isIgnoreTabAtom } from '../atoms/ignore'

export default function ReadButton({ className }: { className?: string }) {
  const isIgnoreTab = useAtomValue(isIgnoreTabAtom)
  const providersConfig = useAtomValue(configFields.providersConfig)

  const requestReadArticle = async () => {
    if (!isAnyAPIKey(providersConfig)) {
      toast.error(i18n.t('noAPIKeyConfig.warning'))
      return
    }
    const [currentTab] = await browser.tabs.query({
      active: true,
      currentWindow: true,
    })
    if (currentTab.id) {
      sendMessage('popupRequestReadArticle', {
        tabId: currentTab.id,
      })
    }
  }

  return (
    <Button
      onClick={requestReadArticle}
      variant="outline"
      className={cn('border-primary', className)}
      disabled={isIgnoreTab}
    >
      {i18n.t('popup.read')}
    </Button>
  )
}
