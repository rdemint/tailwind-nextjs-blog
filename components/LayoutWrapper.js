import Header from '@/components/Header'
import SectionContainer from './SectionContainer'
import Footer from '@/components/Footer'

const LayoutWrapper = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
      <SectionContainer>
        <main className="mb-auto">{children}</main>
        <Footer />
      </SectionContainer>
    </div>
  )
}

export default LayoutWrapper
