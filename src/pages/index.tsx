import DocumentHead, { SITE_DESCRIPTION } from '../components/document-head'
import ExtLink from '../components/ext-link'
import styles from '../styles/page.module.css'

const RenderPage = () => (
  <div className={styles.container}>
    <DocumentHead />

    <div>
      <h2>{SITE_DESCRIPTION}</h2>
      <p>イラスト/勉強法/その他雑多に考えたことをメモします。</p>
      <h2>Contact</h2>
        <p>SNS Account : {' '}
        <ExtLink href="https://misskey.cloud/@luz">
          @luz
        </ExtLink>
        </p>
    </div>
  </div>
)

export default RenderPage
