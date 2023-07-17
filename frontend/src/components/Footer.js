import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <div>
          <div className="main-footer">
            <div className='container text-white' id = "footer-div">
              <Row id='footer-inner' className='border-bottom'>
                  <Col>
                    <div className='w-50 border-bottom border-2 border-warning'>
                        <h5 className=''>Customer Service</h5>
                    </div>
                    <div id ="border-text">
                        <p>Monday - Friday: 08.00am to 05.00pm</p>
                        <p>weekends: 10.00am to 08.00pm</p>
                    </div>
                  </Col>
                  <Col>
                    <div className='w-50 border-bottom border-2 border-warning'>
                        <h5 className=''>Newsletter</h5>
                    </div>
                    <div id ="border-text">
                        <div className='form-group newsletter-main'>
                            <input className='p-2' id = "newsletter-box" type='email' placeholder='email address' />
                            <div className="footer-btn">
                                <div className="masterclass-btn w-100" id = "banner-button-container">
                                    <div className='fill-wrap w-100'>
                                        <div className='btn btn-color btn-l-r'>
                                            SUBMIT
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </Col>
                  <Col>
                    <div className='social-media-main'>
                        <div className='w-50 border-bottom border-2 border-warning' id='social-media'>
                            <h5 className=''>Social Media</h5>
                        </div>
                        <p className='mt-4'>Connect us on social media</p>
                            <div className="footer-top-box">
                                <ul>
                                    <li><a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fab fa-google-plus" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-rss" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fab fa-pinterest-p" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fab fa-whatsapp" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                    </div>
                  </Col>
              </Row>
              <Row className='mt-4' id = "footer-lower">
                <Col>
                     <div className='w-100 border-bottom border-2 border-warning'>
                        <h5 className=''>About Supreme Information</h5>
                    </div>
                    <div id ="border-text">
                        <p>We are a New York-based Information Security, Information Technology, and Project Management consulting firm regarded as the industry leader in Cyber Security and Project Management.
                      </p>
                    </div>
                </Col>
                <Col className='ml-0'>
                    <div className='w-100 border-bottom border-2 border-warning'>
                        <h5 className=''>Information</h5>
                    </div>
                    <div id = "border-text" className='text-white'>
                        <ul>
                            <Link className='nav-link text-white bold-text' to={"/aboutus"}><li>About Us</li></Link>
                            <Link className='nav-link text-white bold-text' to={"/"}><li>Customer Service</li></Link>
                            <Link className='nav-link text-white bold-text' to={"/"}><li>Terms and Conditions</li></Link>
                            <Link className='nav-link text-white bold-text' to={"/"}><li>Privacy Policy</li></Link>
                        </ul>
                    </div>
                </Col>
                <Col>
                    <div className='w-100 border-bottom border-2 border-warning'>
                        <h5 className=''>Contact Us</h5>
                    </div>
                     <div className="">
                        <div className="footer-link-contact mt-4">
                            <p><i className="fas fa-map-marker-alt"></i> .......,
                            </p>
                            <p><i className="fas fa-phone-square"></i><Link to={"tel:+1-6319336332"}>+1 (631) 933-6332</Link></p>
                            <p><i className="fas fa-envelope"></i> <Link to = {"mailto:ashobal@sinfosecurity.com"}>ashobal@sinfosecurity.com</Link></p>
                        </div>
                    </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
    )
}
export default Footer