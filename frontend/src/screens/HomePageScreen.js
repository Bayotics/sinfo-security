import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import sinfoLogo from '../assets/sinfo-logo.png'
import wallpaper3 from '../assets/wallpaper4.jpg'
import IncludedFeatures from '../components/IncludedFeatures';
import OurClients from '../components/OurClients';
import Countdown from 'react-countdown';
import Productivity from '../components/Productivity';
import Blog from '../components/Blog';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import ScrollAnimation from 'react-animate-on-scroll';



const HomePageScreen = () => {

    const Completionist = () => <span>OFFER ENDED!</span>;
    const duration = 2629746000;
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <Completionist />;
    } else {
        return <span>{days} Days : {hours} Hours : {minutes} Minutes : {seconds} Seconds Left</span>;
    }
    };

    return(
        <div>
            <div className="main-banner">
                <div className="main-bg">
                    <Row className='w-100'>
                        <Col xs={4}>
                        </Col>
                        <Col className='banner-right' xs={8}>
                            <div id="banner-captions" className="">
                                <div id = "main-heading" className="">
                                    <div id = "main-heading-p">
                                        <p className="text-white text-bold ">PROTECT YOUR DIGITAL ASSETS WITH</p>
                                    </div>
                                    <h1 className=" text-white text-bold">Advanced <br /><span id='csc'>Cyber Security</span> <br />Solutions</h1>
                                    <div id = "main-heading-h2">
                                        <h2 className="text-white ">Supreme Information Security LLC Provides<br /> exceptional cybersecurity solutions to ensure the<br /> safety and protection of your digital assets</h2>
                                    </div>
                                    <div className="" id = "banner-button-container">
                                        <div className='fill-wrap'>
                                            <div className='btn btn-color btn-l-r'>
                                                GET STARTED
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="mt-4" id="about-us-main">
                <ScrollAnimation animateIn="fadeIn">
                    <Row className = "about-us-inner">
                        <Col className = "about-us-left">
                            <h1 className="text-bold text-center"><span id = "about-span">About</span> Us</h1>
                            <h6>Welcome to Supreme Information Security LLC.  We are a New York-based Information Security, Information Technology, and Project Management consulting firm regarded as the industry leader in Cyber Security and Project Management.
                            
                            <br />
                            {/* <br />
                                As part of its consulting and staff augmentation services, Supreme Information Security LLC manages and supports its clients' business and information technology needs.
                            <br /> */}
                            <br />
                                In the last five years, we have built a solid reputation as an entity proficient in Cyber Security with substantial expertise, experience in Project Management, and resources to identify, analyze, and mitigate risks and compliance threats for the public and private sectors</h6>
                        </Col>
                        {/* <Col className = "about-us-right">
                            <div className='' id = "about-us-logo">
                                <img id= "sinfo-logo"src={sinfoLogo} alt = "sinfo-logo" />
                            </div>
                        </Col> */}
                    </Row>
                </ScrollAnimation>                
            </div>
            <div className='' id = "masterclass">
                    <div  className='' id='masterclass-head'>
                        <h1 className='text-white text-center'>Attain Assurance in Your Security Solution</h1>
                    </div>
                    <div className='w-50' id = "masterclass-sub"><p className='text-white text-center'>Join Supreme Training's CyberSecurity MasterClass and Get Certified!
                        <br />
                        Coming up August 16
                        </p>
                        <div id='countdown-timer' className='text-white text-center text-bold'>
                            <Countdown
                                date={Date.now() + duration}
                                renderer={renderer}
                            />
                        </div>
                    </div>
                    <div className="masterclass-btn" id = "banner-button-container">
                        <div className='fill-wrap'>
                            <div className='btn btn-color btn-l-r'>
                                REGISTER NOW
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,192L80,186.7C160,181,320,171,480,176C640,181,800,203,960,202.7C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> 
            </div>
            <div className='mt-4 security-actions'>
                <ScrollAnimation animateIn="fadeIn">
                    <Row id='security-row'>
                        <Col>
                            <div className='' id = "security-actions-heading">
                                <h1>Modern Security Actions That Safeguard Your Business</h1>
                                <p>Consolidate your cybersecurity program on a unified platform to ensure comprehensive protection, detection, and response across all required areas. Continuously managed by our team of skilled professionals.</p>
                                <div className='fill-wrap-action' id = "actions-button">
                                    <div className='btn-action btn-color-action btn-l-r-action'>
                                        <h6 id = "action-btn-p" className='text-center'>REGISTER NOW</h6>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>   
                            <div id = "security-actions-heading-img">
                                <img src={wallpaper3} id='actions-img' alt = "security actions" />
                            </div>
                        </Col>                    
                    </Row>
                </ScrollAnimation>
            </div>
            <div className='' id='includedFeatures-main'>
                <ScrollAnimation animateIn="fadeIn"><IncludedFeatures /></ScrollAnimation>
            </div>
            <div className='' id='ourClients-main'>
                <ScrollAnimation animateIn="fadeIn"><OurClients /></ScrollAnimation>
            </div>
            <div className='' id='productivity-main'>
                <ScrollAnimation animateIn="fadeIn">
                    <Productivity />
                </ScrollAnimation>
            </div>
            <div className='' id = "blog-div">
                <ScrollAnimation animateIn="fadeIn">
                    <Blog />
                </ScrollAnimation>
            </div>
            <div className='' id = "testimonials-div">
                <ScrollAnimation animateIn="fadeIn">
                    <Testimonials />
                </ScrollAnimation>
            </div>
            <div id = "footer-div">
                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
        
    )
}

export default HomePageScreen;