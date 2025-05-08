import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Tercondi.css'
const TermsAndConditions = () => {
  return (
    <div>
    <Container className="terms-container container w-75 my-5 text-white">
      <Row>
        <Col>
          <h2>Terms and Conditions</h2>

          <h4>1. Introduction</h4>
          <p>
            Welcome to BigBull. These Terms and Conditions ("Terms") govern your use of our refer and earn program.
            By participating in the Program, you agree to these Terms. If you do not agree, please refrain from participating.
          </p>

          <h4>2. Eligibility</h4>
          <p>
            2.1. To participate, you must be at least 18 years old and reside in a region where such promotions are legally permitted.
          </p>
          <p>
            2.2. Employees of BigBull, its affiliates, and their immediate family members are not eligible to participate.
          </p>

          <h4>3. Program Participation</h4>
          <p>
            3.1. To join the Program, you must create an account on our website and accept these Terms.
          </p>
          <p>
            3.2. You will receive a unique referral link to share with friends and family.
          </p>
          <p>
            3.3. A successful referral occurs when a referred user signs up using your referral link and meets the conditions specified by
            BigBull, such as making a qualifying purchase or performing a specific action.
          </p>

          <h4>4. Rewards</h4>
          <p>
            4.1. The rewards structure is detailed on our website and may include cash, discounts, credits, or other incentives.
          </p>
          <p>
            4.2. Rewards will be credited to your account within 2 days after the referred user completes the required actions.
          </p>
          <p>
            4.3. Rewards are non-transferable and cannot be exchanged for cash unless specified otherwise.
          </p>
          <p>
            4.4. BigBull reserves the right to modify or terminate the rewards program at any time, with or without notice.
          </p>

          <h4>5. Restrictions</h4>
          <p>
            5.1. Referrals must be genuine. Any attempt to manipulate the Program through fraudulent or unethical means, such as creating fake
            accounts, will result in disqualification and forfeiture of rewards.
          </p>
          <p>
            5.2. You agree not to spam or excessively promote your referral link in a manner that could annoy or inconvenience others.
          </p>

          <h4>6. Termination and Changes</h4>
          <p>
            6.1. BigBull reserves the right to terminate your participation in the Program if you violate these Terms or engage in
            fraudulent activities.
          </p>
          <p>
            6.2. We may modify these Terms at any time. The revised Terms will be effective immediately upon posting on our website. Your
            continued participation in the Program indicates your acceptance of the revised Terms.
          </p>

          <h4>7. Limitation of Liability</h4>
          <p>
            7.1. BigBull will not be liable for any indirect, incidental, or consequential damages arising from your participation in
            the Program.
          </p>
          <p>
            7.2. We do not guarantee that the Program will be available at all times or that it will be free from errors or interruptions.
          </p>

          <h4>8. Governing Law</h4>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of
            laws principles.
          </p>

          <h4>9. Contact Us</h4>
          <p>
            If you have any questions or concerns about these Terms or the Program, please contact us at [Your Contact Information].
          </p>
        </Col>
      </Row>
    </Container>
    </div>
  );
};
export default TermsAndConditions;
