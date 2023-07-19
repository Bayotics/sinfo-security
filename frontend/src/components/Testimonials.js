import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import client1 from '../assets/client1.jpg';
import client2 from '../assets/client2.jpg';
import client3 from '../assets/client3.jpg';


const Testimonials = () => {
    return (
        <div className="mt-4 testimonials-section text-white">
            <h5 className='text-center text-black text-bold'>TESTIMONIALS</h5>
            <div id='testimonial-cap'>
                <h1 className='text-center text-black text-bold'>We are dedicated and knowledgeable collaborators.</h1>
                <h6 className='text-center text-black'>At our company, we greatly recognize that customer feedback is essential in guiding us towards improvement and ensuring we deliver the best possible service.</h6>
            </div>
            <Row className='gap-4' id='main-testimonial-cards'>
                <Col className='border' id='testimonial-card-main'>
                    <div className='text-center testimonial-card'>
                         <div className='d-flex justify-content-center' id = "testimonial-pfp">
                            <img src={client1} alt='client1' id= "testimonial-pic"
                                style={{borderRadius: "50%"}}
                            />
                        </div>
                        <div id='testimonial-text'>
                            <p>
                                <span>
                                    <i class="fa fa-quote-left" aria-hidden="true"></i></span>We at Cashfree were looking for a partner that had the capabilities to help us develop a successful Security Token Offering (STO) campaign.

Supreme information is for us the main point of contact when we have cybersecurity-related challenges. Yall are the best. Thank you very much
                                <i class="fa fa-quote-right" aria-hidden="true"></i>
                            </p>
                        </div>
                        <p className='text-center text-bold'> Jane</p>
                        <p className='text-center'>Product Manager Cashfree</p>
                    </div>
                </Col>
                <Col className='border' id='testimonial-card-main-two'>
                    <div className='text-center testimonial-card'>
                         <div className='d-flex justify-content-center' id = "testimonial-pfp">
                            <img src={client2} alt='client1' id= "testimonial-pic"
                                style={{borderRadius: "50%"}}
                            />
                        </div>
                        <div id='testimonial-text'>
                            <p>
                                <span>
                                    <i class="fa fa-quote-left" aria-hidden="true"></i></span> I have to admit we were struggling to find a reliable partner but Supreme information was there to solve our problems. From pen-testing our apps to auditing the smart contracts and implementing various security measures within our company, Supreme information offered all the support we needed.
                                <i class="fa fa-quote-right" aria-hidden="true"></i>
                            </p>
                        </div>
                        <p className='text-center text-bold'>Olivia</p>
                        <p className='text-center'>Db Administrator</p>
                    </div>
                </Col>
                <Col className='border' id='testimonial-card-main-three'>
                    <div className='text-center testimonial-card'>
                         <div className='d-flex justify-content-center' id = "testimonial-pfp">
                            <img src={client3} alt='client1' id= "testimonial-pic"
                                style={{borderRadius: "50%"}}
                            />
                        </div>
                        <div id='testimonial-text'>
                            <p>
                                <span>
                                    <i class="fa fa-quote-left" aria-hidden="true"></i></span> I approached Bit Sentinel a couple of years ago when we needed a trustworthy cybersecurity partner with whom to develop BIS Threat Map. The team coordinated by Andrei proved to be very efficient & flexible in our collaboration. 
                                <i class="fa fa-quote-right" aria-hidden="true"></i>
                            </p>
                        </div>
                        <p className='text-center text-bold'>Ella</p>
                        <p className='text-center'>Backend developer</p>
                    </div>
                </Col>
                <Col className='border' id='testimonial-card-main-four'>
                    <div className='text-center testimonial-card'>
                         <div className='d-flex justify-content-center' id = "testimonial-pfp">
                            <img src={client1} alt='client1' id= "testimonial-pic"
                                style={{borderRadius: "50%"}}
                            />
                        </div>
                        <div id='testimonial-text'>
                            <p>
                                <span>
                                    <i class="fa fa-quote-left" aria-hidden="true"></i></span> I have to admit we were struggling to find a reliable partner but Supreme information was there to solve our problems. From pen-testing our apps to auditing the smart contracts and implementing various security measures within our company, Supreme information offered all the support we needed.
                                <i class="fa fa-quote-right" aria-hidden="true"></i>
                            </p>
                        </div>
                        <p className='text-center text-bold'>Lizzy</p>
                        <p className='text-center'>Product manager</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default Testimonials