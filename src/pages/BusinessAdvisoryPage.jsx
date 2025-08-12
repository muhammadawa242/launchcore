// src/pages/BusinessAdvisoryPage.jsx
import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';
import FadeInSection from '../components/FadeInSection';
import ProcessStepperVertical from '../components/ProcessStepperVertical';
import styles from '../styles/ServicePage.module.css';
import newStyles from '../styles/ServicePageExtended.module.css';
import { Compass, BarChart2, DollarSign, Users, Award, TrendingUp, HelpCircle, Search, MessageSquare, BarChart, Clock } from 'react-feather';

const advisorySteps = [
  { icon: <Search size={28} />, title: "Deep Dive & Analysis", description: "We start by conducting a thorough review of your financial health, business model, and market position." },
  { icon: <MessageSquare size={28} />, title: "Strategic Workshop", description: "We meet with your leadership team to present our findings, define key performance indicators (KPIs), and align on strategic goals." },
  { icon: <BarChart size={28} />, title: "Action Plan & Modeling", description: "We develop a detailed action plan and create financial forecasts and models to project the impact of our recommended strategies." },
  { icon: <Clock size={28} />, title: "Quarterly Reviews", description: "We meet with you regularly to review progress against KPIs, adapt to changing market conditions, and provide ongoing guidance." },
];

const BusinessAdvisoryPage = () => (
  <ServicePageLayout
    heroTitle="Strategic Business Advisory"
    heroSubtitle="Turn financial data into your most powerful asset. We provide the strategic insights you need to drive growth and profitability."
    heroImage="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1920"
  >
    <FadeInSection><p className={styles.introText}>Beyond compliance and record-keeping, your financial data tells a story. Our business advisory services help you read that story, identify opportunities, manage risks, and make informed decisions that propel your business forward. We act as your strategic partner, moving beyond the numbers to focus on your ultimate success.</p></FadeInSection>
    <FadeInSection><h2 className={styles.sectionHeading}>The LaunchCORE Advantage</h2><div className={styles.featureGrid}><div className={styles.featureCard}><h3><Award size={24}/> Gain Clarity & Direction</h3><p>We translate complex financial data into a clear, actionable roadmap, helping you set realistic goals and the strategies to achieve them.</p></div><div className={styles.featureCard}><h3><TrendingUp size={24}/> Enhance Profitability</h3><p>Our analysis goes beyond surface-level numbers to identify your most profitable services, customers, and opportunities for cost savings.</p></div><div className={styles.featureCard}><h3><Users size={24}/> Access Executive Expertise</h3><p>Benefit from the strategic oversight of a Chief Financial Officer (CFO) to guide your major decisions, without the expense of a full-time hire.</p></div></div></FadeInSection>
    <FadeInSection><h2 className={styles.sectionHeading}>Our Advisory Engagement Model</h2><ProcessStepperVertical steps={advisorySteps} /></FadeInSection>
    <FadeInSection><h2 className={styles.sectionHeading}>Our Advisory Focus Areas</h2><div className={styles.featureGrid}><div className={styles.featureCard}><h3><Compass size={24}/> Strategic Growth Planning</h3><p>We help you develop actionable business plans, set realistic KPIs, and create a roadmap for sustainable expansion.</p></div><div className={styles.featureCard}><h3><BarChart2 size={24}/> Financial Modeling</h3><p>From cash flow projections to budget forecasting, we build robust financial models to support strategic initiatives and fundraising.</p></div><div className={styles.featureCard}><h3><DollarSign size={24}/> Profitability Analysis</h3><p>We dive deep into your revenue streams and cost structures to identify opportunities for improving margins and overall profitability.</p></div><div className={styles.featureCard}><h3><Users size={24}/> Virtual CFO Services</h3><p>Gain the benefit of a high-level financial executive without the full-time cost. Our vCFO services provide ongoing strategic oversight.</p></div></div></FadeInSection>
    <FadeInSection><div className={newStyles.caseStudy}><h4>Success Story: A Scaling SaaS Company</h4><blockquote>"We were growing fast but our profits weren't keeping up. LaunchCORE's advisory team built a financial model that showed us our customer acquisition cost was too high. Based on their advice, we refocused our marketing strategy and saw a 30% increase in profitability within six months."</blockquote><cite>— John D., CEO of a Tech Startup</cite></div></FadeInSection>
    <FadeInSection><h2 className={styles.sectionHeading}>Frequently Asked Questions</h2><div className={newStyles.faqContainer}><details className={newStyles.faqItem}><summary><HelpCircle size={20} />Is my business big enough for advisory services?</summary><p>Business advisory is valuable for companies at any stage. For startups, we help build a solid foundation. For growing businesses, we help scale sustainably. It's about getting expert guidance before you make critical decisions.</p></details><details className={newStyles.faqItem}><summary><HelpCircle size={20} />What's the difference between accounting and advisory?</summary><p>Accounting looks at the past—it records and reports on what has already happened. Advisory looks to the future—it uses that historical data to help you make better decisions for what's next.</p></details><details className={newStyles.faqItem}><summary><HelpCircle size={20} />How much do advisory services cost?</summary><p>We offer flexible engagement models, from one-off strategic projects to ongoing retainer-based Virtual CFO services. We tailor the scope and cost to your specific needs and budget, ensuring a clear return on your investment.</p></details></div></FadeInSection>
  </ServicePageLayout>
);

export default BusinessAdvisoryPage;
