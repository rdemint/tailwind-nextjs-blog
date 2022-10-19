import Image from 'next/image'
import Link from 'next/link'
import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'
import ThemeSwitch from '@/components/ThemeSwitch'
import MobileNav from '@/components/MobileNav'

export default function Header() {
  return (
    <header className="m-12 flex items-center justify-between">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Image src={siteMetadata.siteLogo} height="75" width="464" />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center text-base leading-5">
        <div className="flex hidden sm:block">
          {headerNavLinks.map((link) => (
            <div key={link.title} className="inline px-4 font-medium text-gray-900">
              <Link href={link.href}>{link.title}</Link>
            </div>
          ))}
        </div>
        <MobileNav />
      </div>
    </header>
  )
}
