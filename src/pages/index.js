import Layout from "../components/layout";
import {useEffect, useState} from "react";



export default function IndexPage() {
    const [content, SetContent] = useState("");
    useEffect(() => {
        async function fetchHtml() {
            const text = await import("../../public/html/_index.html.txt");
            return SetContent(text.default);
        }
        fetchHtml();
    }, [])
    return (
        <Layout title={"test"}>
            <div dangerouslySetInnerHTML={{__html: content}}></div>
        </Layout>
    )
}