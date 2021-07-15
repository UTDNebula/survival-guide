import React, { ReactNode } from "react"
import { useStaticQuery, graphql, PageRendererProps , Link } from "gatsby"
import Footer from "./Footer"
import Header from "./Header"

interface Props extends PageRendererProps {
  title: string
  children: ReactNode
}

export default function Layout(props: Props): JSX.Element {
  const { children } = props
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="min-h-screen h-full">
      <Header siteTitle={data.site.siteMetadata?.title || `UTD Survival Guide`} />
      <div className="flex">
        <div className="flex-1">
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

/*
const Layout = ({ children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`
  // const isRootPath = location.pathname === rootPath

  
  let header

  if (isRootPath) {
    header = <Header></Header>
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }
  
  
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  )
}

export default Layout
*/