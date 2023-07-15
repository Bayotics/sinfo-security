import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const IncludedFeatures = () => {
    return(
        <div>
            <div className= "" id = "included-features-heading">
                <h1 className="text-bold text-black text-center">Supreme Information Security</h1>
                <p className="text-center mt-4">Selected features</p>
            </div>
            <div className="mt-4" id = "included-features-cards">
                <Row className='gap-4'>
                    <Col className=''>
                        <div className='border' id='included-features-card-item'>
                            <div className='' id = "card-item-inner">
                                <div id = "card-image">
                                    <i id='data-security' class="fa fa-database fa-4x" aria-hidden="true"></i>
                                </div>
                                <h4 className='text-center'>DATABASE SECUTRITY</h4>
                                <h6 id='card-p' className='text-center'>We ensure that your sensitive information remains confidential and inaccessible to unauthorized entities</h6>
                            </div>
                        </div>
                    </Col>
                    <Col className=''>
                        <div className='border' id='included-features-card-item'>
                            <div className='' id = "card-item-inner">
                                <div id = "card-image">
                                    <i id='data-security' class="fa fa-globe fa-4x" aria-hidden="true"></i>
                                </div>
                                <h4 className='text-center'>NETWORK SECURITY</h4>
                                <h6 id='card-p' className='text-center'>We employ the latest technologies, policies, and procedures to secure both your internal and external network infrastructure</h6>
                            </div>
                        </div>
                    </Col>
                    <Col className=''>
                        <div className='border' id='included-features-card-item'>
                            <div className='' id = "card-item-inner">
                                <div id = "card-image">
                                    <i id='data-security' class="fa fa-bug fa-4x" aria-hidden="true"></i>
                                </div>
                                <h4 className='text-center'>VULNERABILITY MANAGEMENT</h4>
                                <h6 id='card-p' className='text-center'>We help you identify and address vulnerabilities in your IT infrastructure before they are exploited by attackers.</h6>
                            </div>
                        </div>
                    </Col>
                    <Col className=''>
                        <div className='border' id='included-features-card-item'>
                            <div className='' id = "card-item-inner">
                                <div id = "card-image">
                                    <i id='data-security' class="fa fa-fire fa-4x" aria-hidden="true"></i>
                                </div>
                                <h4 className='text-center'>FIREWALL MANAGEMENT</h4>
                                <h6 id='card-p' className='text-center'>Data security ensures that sensitive information remains confidential and inaccessible to unauthorized entities</h6>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='gap-4' id = "cards-lower">
                    <Col className=''>
                        <div className='border' id='included-features-card-item'>
                            <div className='' id = "card-item-inner">
                                <div id = "card-image">
                                    <i id='data-security' class="fa fa-laptop fa-4x" aria-hidden="true"></i>
                                </div>
                                <h4 className='text-center'>ENDPOINT SECUTRITY</h4>
                                <h6 id='card-p' className='text-center'>We protect your desktops, laptops, servers, mobile devices, and other internet-enabled devices, from security threats</h6>
                            </div>
                        </div>
                    </Col>
                    <Col className=''>
                        <div className='border' id='included-features-card-item'>
                            <div className='' id = "card-item-inner">
                                <div id = "card-image">
                                    <i id='data-security' class="fa fa-search fa-4x" aria-hidden="true"></i>
                                </div>
                                <h4 className='text-center'>RISKS ASSESSMENT</h4>
                                <h6 id='card-p' className='text-center'>By getting an understanding of the risks faced by your digital assets, we make informed decisions about how to mitigate those risks effectively</h6>
                            </div>
                        </div>
                    </Col>
                    <Col className=''>
                        <div className='border' id='included-features-card-item'>
                            <div className='' id = "card-item-inner">
                                <div id = "card-image">
                                    <i id='data-security' class="fa fa-eye fa-4x" aria-hidden="true"></i>
                                </div>
                                <h4 className='text-center'>24/7 <br /> COVERAGE</h4>
                                <h6 id='card-p' className='text-center'>We help you identify and address vulnerabilities in your IT infrastructure before they are exploited by attackers.</h6>
                            </div>
                        </div>
                    </Col>
                    <Col className=''>
                        <div className='border' id='included-features-card-item'>
                            <div className='' id = "card-item-inner">
                                <div id = "card-image">
                                    <i id='data-security' class="fa fa-graduation-cap fa-4x" aria-hidden="true"></i>
                                </div>
                                <h4 className='text-center'>SECURITY TRAINING</h4>
                                <h6 id='card-p' className='text-center'>We teach employees about potential security risks and threats and provide them with the knowledge required to mitigate those threats</h6>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default IncludedFeatures