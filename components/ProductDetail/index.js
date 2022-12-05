import Image from 'next/image'

function ProductDetail({ data }) {
  return (
    <div>
      <h1>{data.title} </h1>
      <p>{data.description}</p>
      <Image
        src={data.thumbnail}
        alt={data.title}
        width={64}
        height={64}
      ></Image>
    </div>
  )
}

export default ProductDetail
