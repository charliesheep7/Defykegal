import SectionContainer from './SectionContainer'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between font-sans">
        <main className="mb-auto">{children}</main>
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
