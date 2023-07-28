import React, { HTMLAttributes, PropsWithChildren, ReactElement, ReactPortal } from 'react'
import Header from '../Header'

type Props = PropsWithChildren & HTMLAttributes<HTMLDivElement>

const MainLayout: React.FC<Props> = (props) => {
  const { children, className } = props
  return (
    <>
      <main className="sm:flex h-screen max-h-screen min-h-screen font-plus">
        <div className={`flex-auto container-w ${className || ''}`}>
          <div className="min-h-screen flex flex-col">
            <div className="flex justify-center fixed w-full z-30 ">
              <Header />
            </div>
            <div className="mt-4 flex-grow bg-[#F4F5F6]">{children}</div>
          </div>
        </div>
      </main>
    </>
  )
}

export default React.memo(MainLayout)
