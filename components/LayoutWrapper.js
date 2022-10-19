import SectionContainer from './SectionContainer'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const LayoutWrapper = ({ children }) => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <SectionContainer>
        <main className="mb-auto">{children}</main>
        <Footer />
      </SectionContainer>
    </div>
  )
}

export default LayoutWrapper
