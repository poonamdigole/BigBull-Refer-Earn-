import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Privacy.css'
import './Tercondi.css'
const PrivacyPolicy = () => {
  return (
    <Container className="terms-container container w-75 my-5 text-white">
      <Row>
        <Col>
          <h2>Privacy Policy</h2>

          <h4>1. Introduction</h4>
          <p>
            Welcome to BigBull. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and participate in our refer and earn program.
          </p>

          <h4>2. Information We Collect</h4>
          <p>
            2.1. <strong>Personal Information:</strong> We may collect personal information such as your name, email address, phone number, and payment details when you create an account or participate in the program.
          </p>
          <p>
            2.2. <strong>Non-Personal Information:</strong> We may collect non-personal information such as browser type, operating system, and browsing behavior to improve our services.
          </p>

          <h4>3. Use of Information</h4>
          <p>
            3.1. We use the information we collect to:
          </p>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Process transactions</li>
            <li>Communicate with you</li>
            <li>Improve our website and services</li>
            <li>Send promotional materials and offers</li>
          </ul>

          <h4>4. Sharing of Information</h4>
          <p>
            4.1. We may share your information with:
          </p>
          <ul>
            <li>Third-party service providers who perform services on our behalf</li>
            <li>Business partners to offer you certain products, services, or promotions</li>
            <li>Law enforcement or regulatory agencies if required by law</li>
          </ul>

          <h4>5. Security of Your Information</h4>
          <p>
            We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee its absolute security.
          </p>

          <h4>6. Your Rights</h4>
          <p>
            You have the right to access, correct, or delete your personal information. You can update your information through your account settings or by contacting us directly.
          </p>

          <h4>7. Changes to This Privacy Policy</h4>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h4>8. Contact Us</h4>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p>
            Email: support@bigbull.com
          </p>
          <p>
            Address: 123 BigBull Street,Ahmadnagar, India
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPolicy;
