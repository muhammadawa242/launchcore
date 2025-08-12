// src/pages/CompliancePage.jsx
import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';
import FadeInSection from '../components/FadeInSection';
import ProcessStepperVertical from '../components/ProcessStepperVertical';
import styles from '../styles/ServicePage.module.css';
import newStyles from '../styles/ServicePageExtended.module.css';
import { Shield, Layers, File, Target, AlertTriangle, Book, Award, HelpCircle, Eye, Edit2, Send, Repeat } from 'react-feather';

const complianceSteps = [
  { icon: <Eye size={28} />, title: "Applicability Assessment", description: "We analyze your business activities and legal structure to identify exactly which regulations (ESR, UBO, AML) apply to you." },
  { icon: <Edit2 size={28} />, title: "Policy & Procedure Setup", description: "We assist in drafting and implementing the necessary internal policies and registers required to demonstrate compliance." },
  { icon: <Send size={28} />, title: "Annual Filings & Reporting", description: "Our team manages the preparation and submission of all required notifications and annual reports to the relevant authorities." },
  { icon: <Repeat size={28} />, title: "Ongoing Monitoring", description: "We keep you informed of any changes in regulations and help you maintain your compliance framework year after year." },
];

const CompliancePage = () => (
  <ServicePageLayout
    heroTitle="Regulatory Compliance & Governance"
    heroSubtitle="Navigate the complex web of business regulations with confidence. We keep your business secure, compliant, and reputable."
    heroImage="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1920"
  >
    <FadeInSection><p className={styles.introText}>In today's ever-changing business world, maintaining regulatory compliance is not just a legal requirement—it's a cornerstone of good governance and a key factor in building trust with clients, banks, and investors. Our compliance services provide a proactive framework to ensure your operations adhere to all relevant laws and standards.</p></FadeInSection>
    <FadeInSection><h2 className={styles.sectionHeading}>The LaunchCORE Advantage</h2><div className={styles.featureGrid}><div className={styles.featureCard}><h3><AlertTriangle size={24}/> Avoid Severe Penalties</h3><p>Non-compliance with regulations like AML and ESR can lead to substantial fines and business interruptions. We help you stay on the right side of the law.</p></div><div className={styles.featureCard}><h3><Award size={24}/> Enhance Your Reputation</h3><p>A strong compliance posture demonstrates that your business operates with integrity, enhancing your reputation with financial institutions and partners.</p></div><div className={styles.featureCard}><h3><Book size={24}/> Simplify Complex Rules</h3><p>We translate complex legal jargon into clear, actionable steps, taking the guesswork out of your compliance obligations.</p></div></div></FadeInSection>
    <FadeInSection><h2 className={styles.sectionHeading}>Our Compliance Management Approach</h2><ProcessStepperVertical steps={complianceSteps} /></FadeInSection>
    <FadeInSection><h2 className={styles.sectionHeading}>Our Compliance Framework</h2><div className={styles.featureGrid}><div className={styles.featureCard}><h3><Shield size={24}/> Anti-Money Laundering (AML)</h3><p>We help designated businesses develop robust AML/CFT policies, conduct risk assessments, and file necessary reports.</p></div><div className={styles.featureCard}><h3><Layers size={24}/> Economic Substance Reg. (ESR)</h3><p>Assistance with ESR assessment, notification filing, and report submission to demonstrate adequate economic presence in the UAE.</p></div><div className={styles.featureCard}><h3><File size={24}/> Ultimate Beneficial Owner (UBO)</h3><p>We ensure your UBO register is accurately maintained and submitted to the relevant authorities as required by law.</p></div><div className={styles.featureCard}><h3><Target size={24}/> Corporate Governance</h3><p>Advisory services to help you establish strong governance structures, define roles, and ensure ethical business conduct.</p></div></div></FadeInSection>
    <FadeInSection><div className={newStyles.caseStudy}><h4>Success Story: A Real Estate Brokerage</h4><blockquote>"As a Designated Non-Financial Business, AML compliance was a major concern for us. LaunchCORE built our entire AML policy from scratch and trained our staff. Knowing our compliance is handled professionally lets us focus on our clients."</blockquote><cite>— Michael C., Managing Partner of a Brokerage Firm</cite></div></FadeInSection>
    <FadeInSection><h2 className={styles.sectionHeading}>Frequently Asked Questions</h2><div className={newStyles.faqContainer}><details className={newStyles.faqItem}><summary><HelpCircle size={20} />What is UBO and does it apply to me?</summary><p>Ultimate Beneficial Owner (UBO) regulations require most companies in the UAE to identify and maintain a register of the individuals who ultimately own or control the business. This applies to nearly all mainland and free zone companies.</p></details><details className={newStyles.faqItem}><summary><HelpCircle size={20} />What are Economic Substance Regulations (ESR)?</summary><p>ESR requires companies that conduct certain "Relevant Activities" (like banking, insurance, or holding company activities) to demonstrate that they have genuine economic substance and activity in the UAE. Failure to comply leads to significant penalties.</p></details><details className={newStyles.faqItem}><summary><HelpCircle size={20} />Who is considered a "Designated Non-Financial Business" for AML?</summary><p>This category includes specific business types that are at a higher risk for money laundering, such as real estate brokers, dealers in precious metals, auditors, accountants, and corporate service providers. These businesses have enhanced AML compliance obligations.</p></details></div></FadeInSection>
  </ServicePageLayout>
);

export default CompliancePage;
