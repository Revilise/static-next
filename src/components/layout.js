import Head from "next/head";

export default function Layout({title, children}) {
    return (
        <div className="container md nx-auto px-12">
            <Head>
                <title>{title}</title>
            </Head>
            <main>
                {children}
            </main>
        </div>
    )
}