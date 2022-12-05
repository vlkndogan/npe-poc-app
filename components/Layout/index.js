import SiteHeader from '../SiteHeader'
function Layout(props) {
  return (
    <>
      <SiteHeader />
      {props.children}
    </>
  )
}

export default Layout
