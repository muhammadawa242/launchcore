// src/pages/CorporateTaxPage.jsx
import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';
import FadeInSection from '../components/FadeInSection';
import ProcessStepperVertical from '../components/ProcessStepperVertical';
import styles from '../styles/ServicePage.module.css';
import newStyles from '../styles/ServicePageExtended.module.css';
import { FilePlus, Target, BarChart2, Book, Zap, Shield, HelpCircle, Activity, File, Send, Star } from 'react-feather';

const taxSteps = [
  { icon: <Activity size={28} />, title: "Tax Impact Assessment", description: "We review your business activities and financial statements to determine your specific obligations under the new CT law." },
  { icon: <File size={28} />, title: "Registration & Setup", description: "We handle your company's registration with the FTA and help set up compliant accounting practices for accurate tax tracking." },
  { icon: <Send size={28} />, title: "Calculation & Filing", description: "Our team meticulously prepares your corporate tax return, ensuring all calculations are correct before filing with the authorities." },
  { icon: <Star size={28} />, title: "Ongoing Advisory", description: "We provide continuous support and advice on the tax implications of major business decisions throughout the year." },
];

const CorporateTaxPage = () => (
  <ServicePageLayout
    heroTitle="Expert Corporate Tax Solutions"
    heroSubtitle="Navigate the UAE Corporate Tax landscape with confidence. We ensure full compliance and strategic tax planning."
    heroImage="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1920"
  >
    <FadeInSection><p className={styles.introText}>The introduction of Corporate Tax in the UAE marks a significant shift in the business environment. Proactive and strategic tax management is no longer optional—it's essential for financial health. LaunchCORE's tax professionals are here to guide you through every requirement, ensuring your business remains compliant and tax-optimized.</p></FadeInSection>
    <FadeInSection><h2 className={styles.sectionHeading}>The LaunchCORE Advantage</h2><div className={styles.featureGrid}><div className={styles.featureCard}><h3><Shield size={24}/> Ensure 100% Compliance</h3><p>We stay ahead of regulatory changes from the Federal Tax Authority (FTA), so you can be confident your business fully adheres to the law, avoiding penalties.</p></div><div className={styles.featureCard}><h3><Target size={24}/> Optimize Your Tax Position</h3><p>Our experts analyze your financials to identify all legal deductions and reliefs, ensuring you don't pay more tax than necessary.</p></div><div className={styles.featureCard}><h3><Zap size={24}/> Focus on Your Business</h3><p>Let us handle the complexities of tax calculations and filings. Free up your time and resources to focus on what you do best: growing your business.</p></div></div></FadeInSection>
    <FadeInSection><h2 className={styles.sectionHeading}>Our Tax Compliance Process</h2><ProcessStepperVertical steps={taxSteps} /></FadeInSection>
    <FadeInSection><h2 className={styles.sectionHeading}>Our Corporate Tax Services Include</h2><div className={styles.featureGrid}><div className={styles.featureCard}><h3><FilePlus size={24}/> Tax Registration</h3><p>We handle the entire process of registering your business with the FTA, ensuring accuracy and timeliness.</p></div><div className={styles.featureCard}><h3><Book size={24}/> Tax Accounting</h3><p>Assistance in maintaining tax-compliant accounting records and preparing financial statements ready for tax calculations.</p></div><div className={styles.featureCard}><h3><Target size={24}/> Strategic Planning</h3><p>We analyze your business structure and transactions to develop tax-efficient strategies that minimize liability legally.</p></div><div className={styles.featureCard}><h3><BarChart2 size={24}/> Filing & Compliance</h3><p>Expert preparation and submission of your annual Corporate Tax returns, ensuring you meet all regulatory deadlines.</p></div></div></FadeInSection>
    <FadeInSection><div className={newStyles.caseStudy}><h4>Success Story: Established Trading Company</h4><blockquote>"We were concerned about how the new corporate tax would impact our bottom line. LaunchCORE conducted a full impact assessment and identified several areas for optimization. Their proactive approach not only made us fully compliant but also saved us a significant amount in our first year's tax liability."</blockquote><cite>— Ahmed R., CFO of a Dubai-based Trading LLC</cite></div></FadeInSection>
    <FadeInSection><h2 className={styles.sectionHeading}>Frequently Asked Questions</h2><div className={newStyles.faqContainer}><details className={newStyles.faqItem}><summary><HelpCircle size={20} />Who needs to register for Corporate Tax?</summary><p>All businesses operating in the UAE, including those in free zones, are required to register for Corporate Tax, with very few exceptions. Even if your profit is below the taxable threshold, registration is mandatory.</p></details><details className={newStyles.faqItem}><summary><HelpCircle size={20} />What is the Corporate Tax rate?</summary><p>The standard Corporate Tax rate is 9% on taxable income exceeding AED 375,000. Taxable income below this threshold is subject to a 0% rate.</p></details><details className={newStyles.faqItem}><summary><HelpCircle size={20} />Are Free Zone companies exempt?</summary><p>Qualifying Free Zone Persons can benefit from a 0% rate on "Qualifying Income." However, they must meet strict criteria, maintain audited financial statements, and will be subject to the 9% rate on any non-qualifying income. Determining this status is a key part of our advisory service.</p></details></div></FadeInSection>
  </ServicePageLayout>
);

export default CorporateTaxPage;
