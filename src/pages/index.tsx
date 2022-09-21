import DocumentHead from '../components/document-head'
import ExtLink from '../components/ext-link'
import styles from '../styles/page.module.css'

const RenderPage = () => (
  <div className={styles.container}>
    <DocumentHead />

    <div>
      <h2>備忘録</h2>
      <p>思いついたことをメモします。</p>
      <p>イラスト/勉強法/その他雑多に。</p>
      <p>
        Contact Information : {' '}
        <ExtLink href="https://misskey.cloud/@luz">
          @luz
        </ExtLink>
      </p>
    </div>
  </div>
)

export default RenderPage
