import Document, { DocumentContext } from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'
import createCache from '@emotion/cache'

const { extractCritical } = createEmotionServer(createCache({ key: 'r-cov' }))

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    const { css, ids } = extractCritical(initialProps.html)

    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <style key="emotion-css" data-emotion-css={ids.join(' ')} dangerouslySetInnerHTML={{ __html: css }} />
      ]
    }
  }
}
