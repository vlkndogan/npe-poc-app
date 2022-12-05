import DynamicLayout from '../components/DynamicLayout'
import layoutData from '../components/DynamicLayout/layout.json'

export function getStaticProps(context) {
  return {
    props: { layout: layoutData },
  }
}

function DynamicLayoutPage({ layout }) {
  return <DynamicLayout layout={layout}> </DynamicLayout>
}

export default DynamicLayoutPage
