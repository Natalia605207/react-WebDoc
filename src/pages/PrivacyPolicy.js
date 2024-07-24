import React from "react";
import "../App.css";
import Footer from "../components/Footer";
import { ScrollToTopBtn } from "../components/ScrollToTopBtn";
import { useAuth0 } from "@auth0/auth0-react";

function PrivacyPolicy() {
    const { isAuthenticated } = useAuth0();
    return(
        !isAuthenticated && (
        <div>
        <div className="privacy">
            <h1 className="heading-policy">Privacy Policy</h1>
            <p className="privacy-passage">This privacy policy ("policy") will help you understand how WebDoc LLC ("us", "we", "our") uses and protects the data you provide to us when you visit and use https://www.webdoc.com ("blog", "service").</p>
            <p className="privacy-passage">We reserve the right to change this policy at any given time, of which you will be promptly updated. If you want to make sure that you are up to date with the latest changes, we advise you to frequently visit this page.</p>
            <h2 className="subheading-policy">What User Data We Collect</h2>
            <p className="privacy-passage">When you visit the blog, we may collect the following data:</p>
            <ul>
                <li className="privacy-passage">Your IP address.</li>
                <li className="privacy-passage">Your contact information and email address.</li>
                <li className="privacy-passage">Other information such as interests and preferences.</li>
                <li className="privacy-passage">Data profile regarding your online behaviour on our blog.</li>
            </ul>
            <h2 className="subheading-policy">Why We Collect Your Data</h2>
            <p className="privacy-passage">We are collecting your data for several reasons:</p>
            <ul>
                <li className="privacy-passage">To better understand your needs.</li>
                <li className="privacy-passage">To improve our services and products.</li>
                <li className="privacy-passage">To send you promotional emails containing the information we think you will find interesting.</li>
                <li className="privacy-passage">To contact you to fill out surveys and participate in other types of market research.</li>
                <li className="privacy-passage">To customize our blog according to your online behavior and personal preferences.</li>
            </ul>
            <h2 className="subheading-policy">Safeguarding and Securing the Data</h2>
            <p className="privacy-passage">WebDoc LLC is committed to securing your data and keeping it confidential. WebDoc LLC has done all in its power to prevent data theft, unauthorized access, and disclosure by implementing the latest technologies and software, which help us safeguard all the information we collect online.</p>
            <h2 className="subheading-policy">Our Cookie Policy</h2>
            <p className="privacy-passage">Once you agree to allow our blog to use cookies, you also agree to use the data it collects regarding your online behavior (analyze web traffic, web pages you visit and spend the most time on).</p>
            <p className="privacy-passage">The data we collect by using cookies is used to customize our blog to your needs. After we use the data for statistical analysis, the data is completely removed from our systems.</p>
            <p className="privacy-passage">Please note that cookies don't allow us to gain control of your computer in any way. They are strictly used to monitor which pages you find useful and which you do not so that we can provide a better experience for you.</p>
            <p className="privacy-passage">If you want to disable cookies, you can do it by accessing the settings of your internet browser. You can visit https://www.internetcookiesforaall.com, which contains comprehensive information on how to do this on a wide variety of browsers and devices.</p>
            <h2 className="subheading-policy">Restricting the Collection of your Personal Data</h2>
            <p className="privacy-passage">At some point, you might wish to restrict the use and collection of your personal data. You can achieve this by doing the following:</p>
            <p className="privacy-passage">When you are filling the forms on the blog, make sure to check if there is a box which you can leave unchecked, if you don't want to disclose your personal information.</p>
            <p className="privacy-passage">If you have already agreed to share your information with us, feel free to contact us via email and we will be more than happy to change this for you.</p>
            <p className="privacy-passage">WebDoc LLC will not lease, sell or distribute your personal information to any third parties, unless we have your permission. We might do so if the law forces us. Your personal information will be used when we need to send you promotional materials if you agree to this privacy policy.</p>
            <h2 className="subheading-policy">Jurisdiction for Dispute Resolution</h2>
            <p className="privacy-passage">For the settlement of disputes arising from this policy, English law will be fully applied. Any disputes must be filed in the court of the district where the company's headquarters are located.</p>
        </div>
        <Footer />
        <ScrollToTopBtn />
        </div>
    )
)}

export default PrivacyPolicy;