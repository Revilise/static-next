import Layout from "../components/layout";
import {useEffect, useState} from "react";

async function fetchHtml() {
    const text = await import("../../public/html/_index.html.txt");
    return text.default;
}

export default function IndexPage() {
    const [content, SetContent] = useState("");
    useEffect(async () => {
        SetContent(await fetchHtml());
    }, [])
    return (
        <Layout title={"test"}>
            <div dangerouslySetInnerHTML={{__html: content}}></div>
        </Layout>
    )
}