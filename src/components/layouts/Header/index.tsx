import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SearchInput } from './components/SearchInput'
import ConnectWallet from '../../common/ConnectWallet'

const Header = () => {
  const { t } = useTranslation(['header'])

  const [searchValue, setSearchValue] = useState<string>('')

  return (
    <div className="sticky top-0 h-10 bg-slate-100 text-slate-900 flex items-center p-8 border-b border-slate-300 justify-between w-screen z-99">
      <div className="flex gap-8 items-center">
        <p className="font-bold text-xl">Museum
          <span className="text-amber-400">NFT</span>
        </p>
        <SearchInput placeholder={t('searchPlaceholder')} onChange={setSearchValue} />
      </div>
      <div className="flex gap-8 font-semibold items-center">
        <p className="cursor-pointer hover:bg-slate-200 px-4 py-2 rounded-lg transition-all delay-[20ms]">{t('collections')}</p>
        <p className="cursor-pointer hover:bg-slate-200 px-4 py-2 rounded-lg transition-all delay-[20ms]">{t('sellItems')}</p>
        <p className="cursor-pointer hover:bg-slate-200 px-4 py-2 rounded-lg transition-all delay-[20ms]">{t('loans')}</p>
        <ConnectWallet />
      </div>
    </div>
  )
}

export default Header