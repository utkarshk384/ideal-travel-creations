import Document, {
  Html,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
  Head,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body>
          <div className="overlay" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
