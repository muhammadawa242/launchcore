// src/pages/VatServicesPage.jsx
import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';
import FadeInSection from '../components/FadeInSection';
import ProcessStepperVertical from '../components/ProcessStepperVertical';
import styles from '../styles/ServicePage.module.css';
import newStyles from '../styles/ServicePageExtended.module.css';
import { Percent, CheckSquare, FileText, RefreshCw, AlertTriangle, Shield, Book, HelpCircle, Trello, GitMerge, Send, DollarSign } from 'react-feather';

const vatSteps = [
  { icon: <Trello size={28} />, title: "Registration & Review", description: "We first assess your need for VAT registration and review your business transactions to ensure correct VAT treatment from the start." },
  { icon: <GitMerge size={28} />, title: "Data Compilation", description: "Each filing period, we collect and review your sales and purchase invoices to ensure all data is accurate and complete for the VAT return." },
  { icon: <Send size={28} />, title: "Return Preparation & Filing", description: "We prepare the VAT return, share it with you for approval, and file it with the FTA on your behalf before the deadline." },
  { icon: <DollarSign size={28} />, title: "Payment & Reconciliation", description: "We advise on the payment of any VAT due and perform reconciliations to ensure your VAT records match your accounting books." },
];

const VatServicesPage = () => (
  <ServicePageLayout
    heroTitle="Comprehensive VAT Services"
    heroSubtitle="Ensure complete VAT compliance with our expert services, from registration and filing to advisory and reconciliation."
    heroImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1920"
  >
    <FadeInSection><p className={styles.introText}>Value Added Tax (VAT) is a core component of the UAE's fiscal landscape. Mismanagement can lead to significant penalties, cash flow issues, and business disruption. LaunchCORE provides a full suite of VAT services to ensure your business accurately calculates, collects, and remits VAT, keeping you in good standing with the FTA.</p></FadeInSection>
    <FadeInSection><h2 className={styles.sectionHeading}>The LaunchCORE Advantage</h2><div className={styles.featureGrid}><div className={styles.featureCard}><h3><AlertTriangle size={24}/> Mitigate Penalty Risks</h3><p>Our proactive approach and deep knowledge of VAT law help you avoid common errors in calculation and filing that can lead to heavy fines.</p></div><div className={styles.featureCard}><h3><Shield size={24}/> Maintain a Healthy Cash Flow</h3><p>We help you manage your VAT payables and recover refundable input tax credits promptly, ensuring tax doesn't negatively impact your working capital.</p></div><div className={styles.featureCard}><h3><Book size={24}/> Achieve Peace of Mind</h3><p>With our experts handling your VAT obligations, you can have confidence that your business is fully compliant, freeing you to focus on your customers.</p></div></div></FadeInSection>
    <FadeInSection><h2 className={styles.sectionHeading}>Our VAT Management Cycle</h2><ProcessStepperVertical steps={vatSteps} /></FadeInSection>
    <FadeInSection><h2 className={styles.sectionHeading}>Our VAT Expertise</h2><div className={styles.featureGrid}><div className={styles.featureCard}><h3><Percent size={24}/> VAT Registration & De-registration</h3><p>We assess your mandatory or voluntary registration requirements and manage the entire application process with the FTA.</p></div><div className={styles.featureCard}><h3><FileText size={24}/> VAT Return Filing</h3><p>Accurate and timely preparation and submission of your periodic VAT returns, ensuring all input and output tax is correctly accounted for.</p></div><div className={styles.featureCard}><h3><CheckSquare size={24}/> VAT Compliance Review</h3><p>We conduct health checks on your systems to identify potential areas of non-compliance and recommend corrective actions.</p></div><div className={styles.featureCard}><h3><RefreshCw size={24}/> VAT Refund & Reconciliation</h3><p>We assist in preparing and submitting VAT refund applications and reconciling your VAT accounts with your financial records.</p></div></div></FadeInSection>
    <FadeInSection><div className={newStyles.caseStudy}><h4>Success Story: A Restaurant Group</h4><blockquote>"Managing VAT across our multiple restaurant locations was a nightmare. LaunchCORE streamlined the entire process. Their team now handles our quarterly filings, and they recently helped us successfully claim a significant VAT refund we weren't even aware we were eligible for."</blockquote><cite>— Ali M., Operations Manager of an F&B Group</cite></div></FadeInSection>
    <FadeInSection><h2 className={styles.sectionHeading}>Frequently Asked Questions</h2><div className={newStyles.faqContainer}><details className={newStyles.faqItem}><summary><HelpCircle size={20} />What is the threshold for VAT registration?</summary><p>The mandatory registration threshold is an annual turnover of AED 375,000. The voluntary registration threshold is AED 187,500. We can help you determine if you need to register.</p></details><details className={newStyles.faqItem}><summary><HelpCircle size={20} />What is Input VAT and Output VAT?</summary><p>Output VAT is the tax you collect from your customers on sales. Input VAT is the tax you pay to your suppliers on purchases. Your VAT liability is the difference between the Output VAT and the Input VAT you can recover.</p></details><details className={newStyles.faqItem}><summary><HelpCircle size={20} />What records do I need to keep for VAT?</summary><p>You must keep all tax invoices for both sales and purchases, as well as ledgers, credit/debit notes, and records of all goods and services. These records must generally be kept for a minimum of 5 years.</p></details></div></FadeInSection>
  </ServicePageLayout>
);

export default VatServicesPage;
