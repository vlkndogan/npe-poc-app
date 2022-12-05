function LayoutManager({ Component, pageProps }) {
  const hasLayout = Component.getLayout != undefined
  return hasLayout ? (
    <>{Component.getLayout(<Component {...pageProps} />)}</>
  ) : (
    <Component {...pageProps}></Component>
  )
}

export default LayoutManager
