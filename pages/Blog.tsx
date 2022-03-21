import Link from "next/link";
import React from "react";
import MyButton from "../components/Button";
import Layout from "../components/Layout";

const Blog: React.FC = () => {
    return (
        <>
        <Layout>
        <div>
            Blog Page
            <h1>Les dossiers et tutos bricolage</h1> 
       </div>
        <div>
            <ul>
                <li><Link href="/First-article"><a>First article</a></Link></li>
            </ul>   
        
            <MyButton/>
        </div>
        </Layout>
        </>
    )
}

export default Blog;