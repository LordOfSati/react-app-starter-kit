import React, { Component } from 'react'

class Footer extends Component {
    render () {
        return (
            <footer id="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <ul className="social-links">
                                <li>
                                    <a href="#" className="wow fadeInUp">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="wow fadeInUp" data-wow-delay=".1s">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="wow fadeInUp" data-wow-delay=".5s">
                                        <i className="fa fa-envelope"></i>
                                    </a>
                                </li>
                            </ul>
                            <ul className="links">
                                <li><a href="/policy">Privacy Policy</a></li>
                                <li><a href="/terms">Terms &amp; Conditions</a></li>
                                <li><a href="/faqs">FAQs</a></li>
                            </ul>
                            <p className="heart">
                                Made with &nbsp;
                                <span className="fa fa-heart fa-1x animated pulse"></span>
                            </p>
                            <p className="copyright">
                                Copyright © 2017
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer
