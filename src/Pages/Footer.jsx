import React from "react";
import "./footer.css";
import logo from "../assets/logo.svg";
const Footer = () => {
  return (
    <>
      <div className="FooterMain">
        <div className="hostingerDiv">
          <img src={logo} alt="hostinger" />
          <h2>
            - We are a web hosting company with a mission to help everyone who
            goes online succeed.
          </h2>
          <h2>
            - We accomplish this by continuously developing server technology,
            giving expert assistance, and ensuring a flawless online website
            hosting experience.
          </h2>
          <ul className="socialLinks">
            <li>
              <a
                href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEgFWBOCB0AuQAAAYNVqWOgor6X23m9nx9u2Qvum2phUTSHBFzq1MBDRKrHBxcTwest5vDB74_YgTlj9owEIokqqSxlcZLet5ED8nnW20qlqEdbeXAjHhyjPltmu6ySDYclxMY=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fhostinger-international"
                target="_blank"
                className="slink"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/Hostinger"
                target="_blank"
                className="slink"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/hostinger_global/"
                target="_blank"
                className="slink"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com/Hostinger"
                target="_blank"
                className="slink"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/HostingerAcademy"
                target="_blank"
                className="slink"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footers">
          <div className="Parts">
            <div className="footerSectionPart">
              <h3>HOSTING</h3>
              <div className="links">
                <a href="https://www.hostinger.in/web-hosting" target="_blank">
                  Web Hosting
                </a>
                <a href="https://www.hostinger.in/vps-hosting" target="_blank">
                  VPS Hosting
                </a>
                <a
                  href="https://www.hostinger.in/minecraft-server-hosting"
                  target="_blank"
                >
                  Minecraft Server Hosting
                </a>
                <a
                  href="https://www.hostinger.in/cyberpanel-vps-hosting"
                  target="_blank"
                >
                  CyberPanel Hosting
                </a>
                <a
                  href="https://www.hostinger.in/cloud-hosting"
                  target="_blank"
                >
                  Cloud Hosting
                </a>
                <a
                  href="https://www.hostinger.in/wordpress-hosting"
                  target="_blank"
                >
                  WordPress Hosting
                </a>
                <a
                  href="https://www.hostinger.in/email-hosting"
                  target="_blank"
                >
                  Email Hosting
                </a>
                <a href="https://www.hostinger.in/cms-hosting" target="_blank">
                  CMS Hosting
                </a>
                <a
                  href="https://www.hostinger.in/ecommerce-hosting"
                  target="_blank"
                >
                  Ecommerce Hosting
                </a>
                <a
                  href="https://www.hostinger.in/free-web-hosting"
                  target="_blank"
                >
                  Free Website Hosting
                </a>
                <a href="https://www.hostinger.in/online-store" target="_blank">
                  Online Store
                </a>
                <a
                  href="https://www.hostinger.in/website-builder"
                  target="_blank"
                >
                  Website Builder
                </a>
                <a href="https://www.hostinger.in/buy-hosting" target="_blank">
                  Buy Hosting
                </a>
              </div>
            </div>

            <div className="footerSectionPart">
              <h3>DOMAIN</h3>
              <div className="links">
                <a
                  href="https://www.hostinger.in/domain-name-search"
                  target="_blank"
                >
                  Domain Name Search
                </a>
                <a
                  href="https://www.hostinger.in/domain-transfer"
                  target="_blank"
                >
                  Domain Transfer
                </a>
                <a href="https://www.hostinger.in/free-domain" target="_blank">
                  Free Domain Name
                </a>
                <a
                  href="https://www.hostinger.in/tld/xyz-domain"
                  target="_blank"
                >
                  XYZ Domain
                </a>
                <a href="https://www.hostinger.in/cheap-domain" target="_blank">
                  Cheap Domains
                </a>
                <a href="https://www.hostinger.in/tld" target="_blank">
                  Domain Extensions
                </a>
                <a href="https://www.hostinger.in/whois" target="_blank">
                  WHOIS Lookup
                </a>
                <a
                  href="https://www.hostinger.in/free-ssl-certificate"
                  target="_blank"
                >
                  Free SSL Certificate
                </a>
              </div>
            </div>

            <div className="footerSectionPart">
              <h3>INFORMATION</h3>
              <div className="links">
                <a
                  href="https://www.hostinger.in/website-migration"
                  target="_blank"
                >
                  Migrate to Hostinger
                </a>
                <a
                  href="https://statuspage.hostinger.com/?_ga=2.202934354.236505534.1663414516-638964915.1663075039"
                  target="_blank"
                >
                  System Status
                </a>
                <a href="https://www.hostinger.in/affiliates" target="_blank">
                  Affiliate Program
                </a>
                <a
                  href="https://www.hostinger.in/payment-methods"
                  target="_blank"
                >
                  Payment Methods
                </a>
                <a href="https://www.hostinger.in/rewards" target="_blank">
                  Rewards
                </a>
                <a href="https://www.hostinger.in/reviews" target="_blank">
                  Reviews
                </a>
                <a href="https://www.hostinger.in/pricing" target="_blank">
                  Pricing
                </a>
                <a href="https://www.hostinger.in/sitemap" target="_blank">
                  Sitemap
                </a>
              </div>
            </div>

            <div className="footerSectionPart">
              <h3>LEGAL</h3>
              <div className="links">
                <a
                  href="https://www.hostinger.in/privacy-policy"
                  target="_blank"
                >
                  Privacy Policy
                </a>
                <a
                  href="https://www.hostinger.in/universal-terms-of-service-agreement"
                  target="_blank"
                >
                  Terms of Service
                </a>
              </div>

              <h3 id="secondLinkPart">HELP</h3>
              <div className="links">
                <a
                  href="https://www.hostinger.in/privacy-policy"
                  target="_blank"
                >
                  Tutorials
                </a>
                <a
                  href="https://www.hostinger.in/universal-terms-of-service-agreement"
                  target="_blank"
                >
                  Knowledge Base
                </a>
                <a
                  href="https://www.hostinger.in/privacy-policy"
                  target="_blank"
                >
                  Report Online Abuse
                </a>
              </div>
            </div>

            <div className="footerSectionPart lastPart">
              <h3>COMPANY</h3>
              <div className="links">
                <a href="https://www.hostinger.in/about" target="_blank">
                  About Hostinger
                </a>
                <a href="https://www.hostinger.in/technology" target="_blank">
                  Our Technology
                </a>
                <a
                  href="https://roadmap.hostinger.com/tabs/10-released"
                  target="_blank"
                >
                  Roadmap
                </a>
                <a
                  href="https://www.hostinger.in/customer-care"
                  target="_blank"
                >
                  Customer Care
                </a>
                <a
                  href="https://www.hostinger.com/blog/?_ga=2.121791944.236505534.1663414516-638964915.1663075039"
                  target="_blank"
                >
                  Blog
                </a>
              </div>
            </div>
          </div>

          <p>
            © 2022 - Design & Devloped By{" "}
            <a href="https://github.com/l33Z?tab=repositories" target="_blank">
              Zeel Rabadiya
            </a>{" "}
            👈
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
