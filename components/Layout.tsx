import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";

export const Layout: React.FC = ({children}) => {
    return (
<div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            
            {/* <div>
               Welcome to my Blog !
            </div> */}

            <ul>
                <li><Link href="/"><a>Homepage</a></Link></li>
                <li><Link href="/Blog"><a>Blog</a></Link></li>
                <li><Link href="/First-article"><a>First article</a></Link></li>
                <li><Link href="/Second-article"><a>Second article</a></Link></li>
            </ul>
        </div>
      </nav>
      <div>{children}</div>
 </div>   
    )
  }



  export default Layout;