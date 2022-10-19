import Image from 'next/image'
import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import MobileNav from '@/components/MobileNav'
import ThemeSwitch from '@/components/ThemeSwitch'

export default function Header() {
  return (
    <header className="mx-16 flex items-center justify-between py-10">
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
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link key={link.title} href={link.href}>
              <a className="m-4">{link.title}</a>
            </Link>
          ))}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}
