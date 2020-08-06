import Document, {
    Html,
    Main,
    NextScript
} from 'next/document'
// import { useRouter } from 'next/router'
import Head from 'next/head'



class MyDocument extends Document {
    static async getInitialProps(ctx) {

        const initialProps = await Document.getInitialProps(ctx)
        return {
            ...initialProps
        }
    }
    render() {
        return ( <Html lang = "en" >
            <Head />
            <body >
            <Main />
            <NextScript / >
            </body>
        </Html>
        )
    }

}
export default MyDocument