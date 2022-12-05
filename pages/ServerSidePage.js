import ProductDetail from '../components/ProductDetail'

export async function getServerSideProps(context) {
  const res = await fetch(`https://dummyjson.com/products`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

function ServerSidePage({ data }) {
  return (
    <div className="container">
      <div className="row">
        {data.products.map((productData) => (
          <div
            key={productData['id']}
            className="column col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4"
          >
            <ProductDetail data={productData}></ProductDetail>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServerSidePage
