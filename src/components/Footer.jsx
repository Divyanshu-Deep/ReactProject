import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className=" kilimanjaro_bottom_header_one section_padding_50 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Link to="/" pointer><p>Subscribe to get updates.</p></Link>
                        <p> All Rights Reserved by SuperMart. </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer
