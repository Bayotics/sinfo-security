import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import sinfoLogo from '../assets/sinfo-logo.png'

const HomePageScreen = () => {
    return(
        <div>
            <div className="main-banner">
                <div className="main-bg">
                <div id="banner-captions" className="">
                        <div id = "main-heading" className="">
                            <p className="text-white text-center">PROTECT YOUR DIGITAL PRESENCE</p>
                            <h1 className=" text-white text-center">Advanced Cyber Security Solutions</h1>
                            <h2 className="text-white text-center">Supreme Information Security LLC Provides exceptional cybersecurity solutions to ensure the safety and protection of your digital assets</h2>
                            <div className="" id = "banner-button-container">
                                <div className='fill-wrap'>
                                    <div className='btn btn-color btn-l-r'>
                                        GET STARTED
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            <div className="mt-4" id="about-us-main">
                <p className="text-center">Effectively oversee data and their vulnerabilities throughout your <span className="risk-analysis">Security Tools</span></p>
                <Row className = "about-us-inner">
                    <Col>
                        <h1><span id = "about-span">About</span> Us</h1>
                        <h6>Welcome to Supreme Information Security LLC.  We are a New York-based Information Security, Information Technology, and Project Management consulting firm regarded as the industry leader in Cyber Security and Project Management.
                        
                        <br />
                        <br />
                            As part of its consulting and staff augmentation services, Supreme Information Security LLC manages and supports its clients' business and information technology needs.
                        <br />
                        <br />
                            In the last five years, we have built a solid reputation as an entity proficient in Cyber Security with substantial expertise, experience in Project Management, and resources to identify, analyze, and mitigate risks and compliance threats for the public and private sectors</h6>
                    </Col>
                    <Col>
                        <div className='' id = "about-us-logo">
                            <img id= "sinfo-logo"src={sinfoLogo} alt = "sinfo-logo" />
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='' id = "masterclass">
                    <h1 className='text-white text-center'>Attain Assurance in Your Security Solution</h1>
                    <div className='w-50' id = "masterclass-sub"><p className='text-white text-center'>Join Supreme Training's CyberSecurity MasterClass and Get Certified!
                    <br />
                    Coming up August 16
                    </p></div>
                    <div className="masterclass-btn" id = "banner-button-container">
                        <div className='fill-wrap'>
                            <div className='btn btn-color btn-l-r'>
                                REGISTER NOW
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        
    )
}

export default HomePageScreen;