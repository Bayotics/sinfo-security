import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import linkedin from '../assets/Linkedin-Learning.png'
import verizon from '../assets/Verizon.png'
import quora from '../assets/Quora.png';
import kubeflow from '../assets/Kubeflow.png';
import spectranet from '../assets/spectranet.png';
import netCore from '../assets/Netcore.png';



const OurClients = () => {
    return (
        <div>
            <h3 className='text-center'>Handling Cyber risks for top frims worldwide</h3>
            <Row className='mt-4'>
                <Col>
                    <div className='' id='client-pic-main'>
                        <img src={linkedin} id='client-pic' alt = "our clients" />
                    </div>
                </Col>
                <Col>
                    <div className='' id='client-pic-main'>
                        <img src={verizon} id='client-pic' alt = "our clients" />
                    </div>
                </Col>
                <Col>
                    <div className='' id='client-pic-main'>
                        <img src={quora} id='client-pic' alt = "our clients" />
                    </div>
                </Col>
                <Col>
                    <div className='' id='client-pic-main'>
                        <img src={kubeflow} id='client-pic' alt = "our clients" />
                    </div>
                </Col>
                <Col>
                    <div className='' id='client-pic-main'>
                        <img src={spectranet} id='client-pic' alt = "our clients" />
                    </div>
                </Col>
                <Col>
                    <div className='' id='client-pic-main'>
                        <img src={netCore} id='client-pic' alt = "our clients" />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default OurClients