// src/pages/BusinessSetupPage.jsx
import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';
import FadeInSection from '../components/FadeInSection';
import ProcessStepperVertical from '../components/ProcessStepperVertical';
import styles from '../styles/ServicePage.module.css';
import newStyles from '../styles/ServicePageExtended.module.css';
import { Briefcase, FileText, Globe, Shield, Zap, Target, Users, HelpCircle, UserCheck, Edit, Award, Coffee } from 'react-feather';

const setupSteps = [
  { icon: <Coffee size={28} />, title: "Consultation & Strategy", description: "We start by understanding your business model, goals, and budget to recommend the optimal company structure and jurisdiction." },
  { icon: <Edit size={28} />, title: "Documentation & Application", description: "Our team assists you in preparing all required documents and submits the application on your behalf, ensuring complete accuracy." },
  { icon: <UserCheck size={28} />, title: "Approval & Issuance", description: "We follow up proactively with government authorities, manage any queries, and secure your trade license and legal documents." },
  { icon: <Award size={28} />, title: "Post-Setup Support", description: "Your journey doesn't end here. We assist with bank account opening, visa processing, and other essential post-incorporation services." },
];

const BusinessSetupPage = () => (
  <ServicePageLayout
    heroTitle="Seamless Business Setup in the UAE"
    heroSubtitle="From initial idea to official launch, we provide end-to-end guidance for establishing your company on solid ground."
    heroImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1920"
  >
    <FadeInSection><p className={styles.introText}>Launching a new venture in the UAE offers immense opportunities, but navigating the legal and administrative landscape can be complex. At LaunchCORE, we specialize in simplifying this process, ensuring your business is structured for success, compliance, and long-term growth from day one.</p></FadeInSection>
    <FadeInSection><h2 className={styles.sectionHeading}>The LaunchCORE Advantage</h2><div className={styles.featureGrid}><div className={styles.featureCard}><h3><Zap size={24}/> Launch Faster</h3><p>Our deep understanding of government processes and established relationships allow us to navigate bureaucracy efficiently, cutting down your setup time significantly.</p></div><div className={styles.featureCard}><h3><Target size={24}/> Avoid Costly Mistakes</h3><p>Choosing the wrong jurisdiction or license type can have long-term financial consequences. We provide expert advice to ensure you make the right choice from the start.</p></div><div className={styles.featureCard}><h3><Users size={24}/> A Single Point of Contact</h3><p>Forget juggling multiple agencies. Your dedicated LaunchCORE consultant manages everything, providing you with clear, consistent communication and peace of mind.</p></div></div></FadeInSection>
    <FadeInSection><h2 className={styles.sectionHeading}>Our Streamlined Process</h2><ProcessStepperVertical steps={setupSteps} /></FadeInSection>
    <FadeInSection><h2 className={styles.sectionHeading}>What's Included in Our Setup Services</h2><div className={styles.featureGrid}><div className={styles.featureCard}><h3><Briefcase size={24}/> Company Formation</h3><p>Expert advice on choosing the right legal structure—Mainland, Free Zone, or Offshore—and handling all registration formalities.</p></div><div className={styles.featureCard}><h3><FileText size={24}/> Licensing & Visas</h3><p>We manage trade license applications, renewals, and amendments, as well as employee and investor visa processing.</p></div><div className={styles.featureCard}><h3><Shield size={24}/> PRO Services</h3><p>Our dedicated Public Relations Officers handle all government documentation, approvals, and clearances efficiently.</p></div><div className={styles.featureCard}><h3><Globe size={24}/> Bank Account Opening</h3><p>Leverage our network and expertise to facilitate a smooth and quick corporate bank account opening process.</p></div></div></FadeInSection>
    <FadeInSection><div className={newStyles.caseStudy}><h4>Success Story: E-Commerce Startup</h4><blockquote>"We needed to launch our online retail business in Dubai before the peak season. LaunchCORE not only advised us on the best e-commerce license in a free zone but also fast-tracked our application and bank account setup. We were operational a full month ahead of schedule, which was invaluable."</blockquote><cite>— Sarah L., Founder of a Tech Gadget Store</cite></div></FadeInSection>
    <FadeInSection><h2 className={styles.sectionHeading}>Frequently Asked Questions</h2><div className={newStyles.faqContainer}><details className={newStyles.faqItem}><summary><HelpCircle size={20} />What is the difference between a Mainland and a Free Zone company?</summary><p>A Mainland company allows you to trade directly with the local UAE market without restriction, but often requires a local service agent. A Free Zone company typically offers 100% foreign ownership and tax exemptions but is generally restricted to doing business within its specific zone or internationally.</p></details><details className={newStyles.faqItem}><summary><HelpCircle size={20} />How long does the business setup process take?</summary><p>The timeline varies depending on the jurisdiction and business activity. On average, a free zone company can be established in 1-2 weeks, while a mainland company might take 2-4 weeks. We provide a clear timeline estimate during our initial consultation.</p></details><details className={newStyles.faqItem}><summary><HelpCircle size={20} />What documents do I need to provide?</summary><p>Typically, you will need passport copies for all shareholders, a business plan, and proof of address. Depending on the business activity, additional attestations or qualifications may be required. We will provide you with a comprehensive checklist.</p></details></div></FadeInSection>
  </ServicePageLayout>
);

export default BusinessSetupPage;
