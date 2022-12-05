import Image from 'next/image'
import Link from 'next/link'
import styles from './SiteHeader.module.scss'
import { logo } from '../Images'
export default function SiteHeader() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Image src={logo} alt="" layout="responsive" />
          </div>
          <Link href="/">Home</Link>
          <Link href="/StandardPage">No Layout</Link>
          <Link href="/LayoutPage">Layout</Link>
          <Link href="/DynamicLayoutPage">Dynamic Layout</Link>
        </div>
        <div className={styles.right}>
          {
            <a href="" className="cta">
              Sign In
            </a>
          }
        </div>
      </div>
    </>
  )
}
