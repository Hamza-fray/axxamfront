import React, {useContext, useEffect, useState} from 'react';
import './Wrapper.css';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
// import 'src/components/additional-classes.css';
// import 'src/components/builder-styles.css';
// import 'src/components/grid-and-effects.css';
// import 'src/components/icons-fonts.min.css';
// import 'src/components/widget-socials-admin.css';
const Wrapper =()=>{
    return(
        <>
            <div className="logo-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="header-primary-nav">
                            <div className="container">
                                <div className="row">
                                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                                        <Container>
                                            <Navbar.Brand href="#home">About us</Navbar.Brand>
                                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                            <Navbar.Collapse id="responsive-navbar-nav">
                                                <Nav className="me-auto">
                                                    <NavDropdown title="PAGES" id="collasible-nav-dropdown">
                                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.3">PAGES</NavDropdown.Item>
                                                        <NavDropdown.Divider />
                                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                                    </NavDropdown>
                                                    <NavDropdown title="PAGES" id="collasible-nav-dropdown">
                                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.3">PAGES</NavDropdown.Item>
                                                        <NavDropdown.Divider />
                                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                                    </NavDropdown>
                                                    <NavDropdown title="PAGES" id="collasible-nav-dropdown">
                                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.3">PAGES</NavDropdown.Item>
                                                        <NavDropdown.Divider />
                                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                                    </NavDropdown>
                                                </Nav>
                                                <Nav>
                                                    <NavDropdown title="PAGES" id="collasible-nav-dropdown">
                                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.3">PAGES</NavDropdown.Item>
                                                        <NavDropdown.Divider />
                                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                                    </NavDropdown>
                                                    <Nav.Link eventKey={2} href="#memes">
                                                        HOME
                                                    </Nav.Link>
                                                </Nav>
                                            </Navbar.Collapse>
                                        </Container>
                                    </Navbar>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
{/*        <div className="logo-wrapper">*/}
{/*            <div className="container">*/}
{/*                <div className="row">*/}
{/*                    <div className="site-logo">*/}
{/*                        <img src=""*/}
{/*                             alt=""*/}
{/*                             title=""/>*/}
{/*                    </div>*/}

{/*                    <div className="site-logo col-lg-3 col-md-3 col-sm-12" itemScope="itemscope" itemType="https://schema.org/Organization">*/}
{/*                        <h1 id="the-title" className="site-title"></h1>*/}
{/*                        <h2 className="site-description"></h2>*/}
{/*                        <a href="http://dash.themes.zone/" rel="home" title="Dash Store" itemProp="url">*/}
{/*                            <img src="http://dash.themes.zone/wp-content/uploads/2016/06/Logo1.png"*/}
{/*                                 alt="Premium Woocommerce Theme" itemProp="logo"/>*/}
{/*                        </a>*/}
{/*                    </div>*/}
{/*                    /!*----------------------------------------------------------------------*!/*/}
{/*                    <div className="hgroup-sidebar col-lg-9 col-md-12 col-sm-12">*/}
{/*                        <div id="dash_search-2" className="widget widget_dash_search">*/}
{/*                            <form className="pt-searchform" method="get" action="http://dash.themes.zone">*/}
{/*                                <input id="s" name="s" type="text" className="searchtext" value=""*/}
{/*                                       placeholder="Text here..." tabIndex="1"/>*/}

{/*                                    <select className="search-select" name="product_cat">*/}
{/*                                        <option value="">All Categories</option>*/}
{/*                                        <option value="accessories">Accessories</option>*/}
{/*                                        <option value="armchairs">Armchairs</option>*/}
{/*                                        <option value="bedding">Bedding</option>*/}
{/*                                        <option value="bedroom">Bedroom</option>*/}
{/*                                        <option value="coffee-tables">Coffee Tables</option>*/}
{/*                                        <option value="design-collections">Design Collections</option>*/}
{/*                                        <option value="home-office">Home Office</option>*/}
{/*                                        <option value="kitchen-dining">Kitchen &amp; Dining</option>*/}
{/*                                        <option value="lightings">Lightings</option>*/}
{/*                                        <option value="living-room">Living Room</option>*/}
{/*                                        <option value="office-chairs">Office Chairs</option>*/}
{/*                                        <option value="pillows">Pillows</option>*/}
{/*                                        <option value="shelves">Shelves</option>*/}
{/*                                        <option value="sofas">Sofas</option>*/}
{/*                                        <option value="soft-collection">Soft Collection</option>*/}
{/*                                        <option value="storage">Storage</option>*/}
{/*                                        <option value="unique-collection">Unique Collection</option>*/}
{/*                                        <option value="variables">Variables</option>*/}
{/*                                        <option value="works-collection">Works Collection</option>*/}
{/*                                    </select>*/}
{/*                                    <button id="searchsubmit" className="search-button" title="Find" tabIndex="2"><i*/}
{/*                                        className="custom-icon-search"></i></button>*/}

{/*                                    <input type="hidden" name="post_type" value="product" />*/}
{/*                            </form>*/}

{/*                        </div>*/}

{/*                        <div id="woocommerce_widget_cart-2" className="widget woocommerce widget_shopping_cart">*/}
{/*                            <div className="heading"><i className="custom-icon-basket"></i> <a*/}
{/*                                className="cart-contents"><span className="count">0</span></a>*/}
{/*                            </div>*/}
{/*                            <div className="widget_shopping_cart_content">*/}

{/*                                <p className="woocommerce-mini-cart__empty-message">No products in the cart.</p>*/}


{/*                            </div>*/}





{/*                        </div>*/}
{/*                    </div>*/}
{/*/!*----------------------------------------------------------------------------------*!/*/}

{/*                </div>*/}
{/*            </div>*/}
{/*        </div>*/}

        </>
    );
}
export default Wrapper;