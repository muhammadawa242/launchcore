// src/pages/AccountingPage.jsx

import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';
import FadeInSection from '../components/FadeInSection';
import ProcessStepperVertical from '../components/ProcessStepperVertical';
import styles from '../styles/ServicePage.module.css';
import newStyles from '../styles/ServicePageExtended.module.css';
import { BookOpen, TrendingUp, DollarSign, Archive, Compass, CheckSquare, Users, HelpCircle, Layers, PieChart, Lock, Check } from 'react-feather';

const accountingSteps = [
  { icon: <Layers size={28} />, title: "Setup & Onboarding", description: "We set you up on modern cloud accounting software and securely integrate with your bank accounts and payment systems." },
  { icon: <PieChart size={28} />, title: "Monthly Bookkeeping", description: "Each month, we categorize your transactions, reconcile your accounts, and ensure all financial data is accurately recorded." },
  { icon: <Lock size={28} />, title: "Financial Reporting", description: "We deliver a package of key financial statements (P&L, Balance Sheet) and provide insights into your business's performance." },
  { icon: <Check size={28} />, title: "Year-End Support", description: "We work with you to close your books and provide your auditors or tax advisors with all the necessary information for a smooth year-end." },
];

const AccountingPage = () => (
  <ServicePageLayout
    heroTitle="Meticulous Accounting & Bookkeeping"
    heroSubtitle="Gain a clear, accurate, and up-to-date view of your financial health with our professional accounting services."
    // --- THIS IS THE CORRECTED IMAGE URL ---
    heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1920"
  >
    <FadeInSection>
        <p className={styles.introText}>
          Accurate accounting is the bedrock of any successful business. It provides the critical data needed for strategic decision-making, ensures regulatory compliance, and offers peace of mind. Our team of certified accountants at LaunchCORE takes the burden of financial administration off your shoulders, allowing you to focus on innovation and growth.
        </p>
    </FadeInSection>
    <FadeInSection>
        <h2 className={styles.sectionHeading}>The LaunchCORE Advantage</h2>
        <div className={styles.featureGrid}>
            <div className={styles.featureCard}><h3><Compass size={24}/> Make Data-Driven Decisions</h3><p>With clean, organized, and up-to-date financial reports, you can confidently make decisions about budgeting, investment, and strategy.</p></div>
            <div className={styles.featureCard}><h3><CheckSquare size={24}/> Stay Audit-Ready, Always</h3><p>Our meticulous record-keeping ensures your books are always compliant with IFRS standards and ready for any potential audit or tax filing.</p></div>
            <div className={styles.featureCard}><h3><Users size={24}/> Scale with a Flexible Team</h3><p>Access a full accounting department's expertise—from bookkeeper to CFO—at a fraction of the cost of hiring a full-time in-house team.</p></div>
        </div>
    </FadeInSection>
    <FadeInSection>
        <h2 className={styles.sectionHeading}>How We Work With You</h2>
        <ProcessStepperVertical steps={accountingSteps} />
    </FadeInSection>
    <FadeInSection>
        <h2 className={styles.sectionHeading}>Our Accounting Services Include</h2>
        <div className={styles.featureGrid}>
            <div className={styles.featureCard}><h3><BookOpen size={24}/> Full-Cycle Bookkeeping</h3><p>From data entry and bank reconciliations to maintaining your general ledger, we manage your day-to-day financial records with precision.</p></div>
            <div className={styles.featureCard}><h3><TrendingUp size={24}/> Financial Reporting</h3><p>We prepare comprehensive monthly or quarterly reports, including Profit & Loss, Balance Sheets, and Cash Flow Statements.</p></div>
            <div className={styles.featureCard}><h3><DollarSign size={24}/> Payroll Management</h3><p>Ensure your employees are paid accurately and on time with our streamlined payroll processing services, fully compliant with WPS.</p></div>
            <div className={styles.featureCard}><h3><Archive size={24}/> Cloud Accounting</h3><p>We are experts in modern cloud-based software like Zoho Books and Xero, giving you 24/7 access to your financial data.</p></div>
        </div>
    </FadeInSection>
    <FadeInSection>
        <div className={newStyles.caseStudy}>
            <h4>Success Story: A Growing Creative Agency</h4>
            <blockquote>"As our agency grew, our finances became a mess of spreadsheets. LaunchCORE transitioned us to a cloud accounting system and now provides monthly reports that are easy to understand. For the first time, we have a clear picture of our project profitability and cash flow."</blockquote>
            <cite>— Fatima K., Managing Director of a Marketing Agency</cite>
        </div>
    </FadeInSection>
    <FadeInSection>
        <h2 className={styles.sectionHeading}>Frequently Asked Questions</h2>
        <div className={newStyles.faqContainer}>
            <details className={newStyles.faqItem}><summary><HelpCircle size={20} />Why can't I just use a simple spreadsheet?</summary><p>While spreadsheets are fine for very small businesses, they are prone to errors, not easily scalable, and don't provide the robust reporting needed for proper financial analysis. Professional accounting software ensures accuracy and compliance.</p></details>
            <details className={newStyles.faqItem}><summary><HelpCircle size={20} />Do I need audited financial statements?</summary><p>Many free zones require an annual audit. Additionally, audited financials are mandatory for Corporate Tax purposes and are often requested by banks for loans. Maintaining clean books makes the audit process faster and cheaper.</p></details>
            <details className={newStyles.faqItem}><summary><HelpCircle size={20} />What accounting software do you use?</summary><p>We are proficient in all major cloud accounting platforms, including Zoho Books, Xero, and QuickBooks Online. We can work with your existing system or recommend the best one for your specific business needs.</p></details>
        </div>
    </FadeInSection>
  </ServicePageLayout>
);

export default AccountingPage;
