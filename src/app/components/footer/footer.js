import React from "react";
import "./footerStyles.css";
import { useRouter } from "next/navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa'; // Import FontAwesome icons

export default function CustomFooter() {

    return(
    <>
        <footer className="container-fluid">
        <div className="f_logo">
          <div>
            <a href="/">
            <img src="/logonew1.png" alt="logo" className="img-fluid logoImg" />
            </a>
          </div>
          <a href="/">
          <div className="f_logo-text">
            <h1>SATHYABAMA</h1>
            <div className="subtitle">
              <h3>INSTITUTE OF SCIENCE AND TECHNOLOGY</h3>
              <h3>(DEEMED TO BE UNIVERSITY)</h3>
              <h3>CATEGORY-1 UNIVERSITY BY UGC</h3>
            </div>
          </div>
          </a>
        </div>
        <div className="social-icons">
            <a href="https://www.facebook.com/SathyabamaOfficial"><FaFacebook /></a>
            <a href="https://x.com/SathyabamaSIST?t=BSEG7k6u4NcfwaXbA8NLZw&s=08%20"><FaTwitter /></a>
            <a href="https://www.youtube.com/@sathyabamaofficial"><FaYoutube /></a>
            <a href="https://www.linkedin.com/school/sathyabama-institute-of-science-&-technology-chennai/"><FaLinkedin /></a>
        </div>
        <div className="f_links">
            <a href="/routes/Events">EVENTS</a>
            <a href="/routes/Gallery">GALLERY</a>
            <a href="/routes/AboutUs">ABOUT US</a>
            <a href="/routes/ContactUs">CONTACT</a>
        </div>
        </footer>
    </>
        
        
    )
}
