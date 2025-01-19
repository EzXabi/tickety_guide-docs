import { Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import NextImage from 'next/image'
import 'nextra-theme-docs/style.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: "400", subsets: ["latin"], style: "normal" });

const navbar = <Navbar
  logo={<NextImage
    alt="Tickety"
    width={210}
    height={50}
    src="/logo_text.webp"
  />}
  projectLink="https://tickety.top/support"
/>

export const metadata = {
  title: {
    template: "Tickety Docs | %s",
    default: "Tickety Documentation"
  },
  description: "Official documentation for Tickety Discord bot"
}

export default async function DocsLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={poppins.className}
    >
      <Head
        backgroundColor={{
          dark: '#12141d',
          light: '#ffffff'
        }}
      />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          darkMode
          nextThemes={{
            defaultTheme: 'dark',
          }}
          navigation={true}
          sidebar={{
            defaultMenuCollapseLevel: 1
          }}
          footer={<></>}
          editLink={<></>}
          docsRepositoryBase={undefined}
          feedback={{content: <></>}}
        >
          {/* TODO: Make feedback redirect to support server */}
          {children}
        </Layout>
      </body>
    </html>
  )
}