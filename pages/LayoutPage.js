import Layout from '../components/Layout'

function LayoutPage() {
  return (
    <>
      <div>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
      </div>
    </>
  )
}

LayoutPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default LayoutPage
