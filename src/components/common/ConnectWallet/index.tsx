import { memo } from 'react'
import { useTranslation } from 'react-i18next'

const ConnectWallet = () => {
  const { t } = useTranslation(['common'])
  return (
    <div className="bg-black rounded-xl text-white font-semibold px-4 py-2 text-sm cursor-pointer hover:bg-white border hover:border-black hover:text-black transition-all delay-75">{t("connectWallet")}</div>
  )
}

export default memo(ConnectWallet)