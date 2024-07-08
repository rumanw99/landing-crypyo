/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import {
	BlogDropdownMenus,
	ContactDropdownMenus,
	DemoDropdownMenus,
	ElementsMegaMenu,
	PagesDropdownMenus,
} from "../navbar/menu-data";
import NavItem from "../navbar/nav-item";
import Navbar from "../navbar/navbar";
export default function HeaderErrorSix() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const handleCloseMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};
	return (
		<header className="site-header site-header--menu-right fugu-header-section" id="sticky-menu">
			<div className="container-fluid">
				<nav className="navbar site-navbar">
					<div className="brand-logo">
						<Link href={"/"}>
							{/* <img src="/images/logo/logo-black.svg" alt="" className="light-version-logo" /> */}
							<span style={{color:"white"}}>B2B Ultimate</span>
						</Link>
					</div>
					<div className="menu-block-wrapper">
						<div
							className={`menu-overlay ${isMobileMenuOpen ? "active" : null}`}
							onClick={handleCloseMobileMenu}
						></div>
						<nav className={`menu-block ${isMobileMenuOpen ? "active" : null}`} id="append-menu-header">
							<div className="mobile-menu-head">
								<div className="mobile-menu-close" onClick={handleCloseMobileMenu}>
									&times;
								</div>
							</div>

							<Navbar>
							<a href="/" style={{color:"white" , fontWeight:"500" , marginRight:"15px"}}>Home</a>
								<NavItem navItemText="Products" menuItems={PagesDropdownMenus} />
								{/* <NavItem navItemText="About" menuItems={ElementsMegaMenu} /> */}
								<a href="/about-dark" style={{color:"white" , fontWeight:"500" , marginRight:"40px", marginLeft:"20px"}}>About</a>
								{/* <NavItem navItemText="Blog" menuItems={BlogDropdownMenus} /> */}
								<a href="/blog-dark" style={{color:"white" , fontWeight:"500" , marginRight:"40px"}}>Blog</a>
								{/* <NavItem navItemText="Contact Us" menuItems={ContactDropdownMenus} /> */}
								<a href="/contact-dark" style={{color:"white" , fontWeight:"500" , marginRight:"40px"}}>Contact Us</a>
							</Navbar>
						</nav>
					</div>
					<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
						<a className="fugu--btn fugu--menu-btn3" href="service">
							Get Started
						</a>
					</div>

					<div className="mobile-menu-trigger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
						<span></span>
					</div>
				</nav>
			</div>
		</header>
	);
}
