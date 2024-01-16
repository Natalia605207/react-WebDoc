import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import Help from './Help';

export default function Footer() {
    return (
      <div>
        <div>
        <Help />
        </div>
        <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted text-light bg-dark'>
          <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div className='me-5 d-none d-lg-block text-light bg-dark'>
              <span>Get connected with us on social networks:</span>
            </div>
    
            <div>
              <a href='https://www.facebook.com' className='me-4 text-light bg-dark'>
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href='https://www.twitter.com' className='me-4 text-light bg-dark'>
                <MDBIcon fab icon="twitter" />
              </a>
              <a href='https://www.instagram.com' className='me-4 text-light bg-dark'>
                <MDBIcon fab icon="instagram" />
              </a>
              <a href='https://www.linkedin.com' className='me-4 text-light bg-dark'>
                <MDBIcon fab icon="linkedin" />
              </a>
            </div>
          </section>
    
          <section className=''>
            <MDBContainer className='text-center text-md-start mt-2'>
              <MDBRow className='mt-2'>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>
                    <MDBIcon icon="gem" className="me-3 text-light bg-dark" />
                    <a href='/' className='text-light bg-dark text-decoration-none'>WebDoc</a>
                  </h6>
                  <p className='text-light bg-dark'>
                    We are always ready to help you. Just contact us any way you like
                    and you will get the feedback at once.
                  </p>
                </MDBCol>
    
                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 text-light bg-dark'>
                  <h6 className='text-uppercase fw-bold mb-4'>Useful Links</h6>
                  <p>
                    <a href='/' className='text-light bg-dark'>
                      Home
                    </a>
                  </p>
                  <p>
                    <a href='/doctors' className='text-light bg-dark'>
                      Doctors
                    </a>
                  </p>
                  <p>
                    <a href='/about' className='text-light bg-dark'>
                      Our company
                    </a>
                  </p>
                </MDBCol>
    
                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 text-light bg-dark'>
                  <h6 className='text-uppercase fw-bold mb-4'>Customer care</h6>
                  <p>
                    <a href='/faqs' className='text-light bg-dark'>
                      FAQs
                    </a>
                  </p>
                  <p>
                    <a href='/privacy' className='text-light bg-dark'>
                      Privacy policy
                    </a>
                  </p>
                  <p>
                    <a href='mailto:natalyaobukhova87@gmail.com' className='text-light bg-dark'>
                      Help
                    </a>
                  </p>
                </MDBCol>
    
                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4 text-light bg-dark'>
                  <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                  <p>
                    <MDBIcon icon="home" className="me-2" />
                    New York, NY 10519, US
                  </p>
                  <p>
                    <MDBIcon icon="envelope" className="me-3" />
                    <a href='mailto:natalyaobukhova87@gmail.com' className='text-reset text-decoration-none'>
                    info@web.doctor
                    </a>
                  </p>
                  <p>
                    <MDBIcon icon="phone" className="me-3" /> 
                    <a href='tel:+79168391700 + 01 234 567 88' className='text-reset text-decoration-none'>
                    + 01 234 567 88
                    </a>
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
    
          <div className='text-center p-4 text-light' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2021 Copyright: WebDoc.com
          </div>
        </MDBFooter>
        </div>
      );
}