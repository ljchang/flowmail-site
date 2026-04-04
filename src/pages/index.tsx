import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const features = [
  {
    title: 'Mental Contexts',
    description:
      'Organize email around how you think, not folder hierarchies. Cards are mental buckets for projects, people, and topics that give AI the context it needs.',
    icon: '\u2b22',
  },
  {
    title: 'Self-Improving AI',
    description:
      'Learns from every correction you make. FlowMail analyzes its mistakes, extracts patterns, and continuously refines its understanding of your preferences.',
    icon: '\u27f3',
  },
  {
    title: 'Focus Queue',
    description:
      'A GTD-inspired task flow that turns emails into clear next actions. Clarify, act, delegate, or defer \u2014 every item has a concrete next step.',
    icon: '\u25b6',
  },
  {
    title: 'Smart Drafting',
    description:
      'Context-aware responses that draw on your notes, relationships, and past interactions. Drafts that sound like you, not a chatbot.',
    icon: '\u270e',
  },
  {
    title: 'Calendar',
    description:
      'Bi-directional calendar sync with three views. Link events to your cards and let the AI plan follow-ups automatically.',
    icon: '\u29d6',
  },
  {
    title: 'AI Agent',
    description:
      'Natural language commands via Cmd+K. Search, draft, create plans, and manage your inbox \u2014 with progressive trust.',
    icon: '\u2726',
  },
];

function Hero(): ReactNode {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div>
          <div className={styles.heroLabel}>
            AI-Powered Email
            <span className={styles.betaBadge}>Beta</span>
          </div>
          <h1 className={styles.heroTitle}>
            Email that learns
            <br />
            how you think
          </h1>
          <p className={styles.heroSubtitle}>
            FlowMail organizes email around your mental contexts &mdash; not
            folders. Its AI learns from your corrections to classify, prioritize,
            and draft with increasing accuracy.
          </p>
          <div className={styles.heroCtas}>
            <Link className={styles.ctaPrimary} to="/docs/intro">
              Get Started &rarr;
            </Link>
            <Link
              className={styles.ctaSecondary}
              to="/docs/getting-started/download">
              Download
            </Link>
          </div>
        </div>
        <div className={styles.appPreview}>
          <div className={styles.windowDots}>
            <span className={`${styles.dot} ${styles.dotRed}`} />
            <span className={`${styles.dot} ${styles.dotYellow}`} />
            <span className={`${styles.dot} ${styles.dotGreen}`} />
          </div>
          <div className={styles.appLayout}>
            <div className={styles.sidebar}>
              <div className={styles.sidebarItem} />
              <div className={styles.sidebarItem} />
              <div
                className={`${styles.sidebarItem} ${styles.sidebarItemActive}`}
              />
              <div className={styles.sidebarItem} />
              <div className={styles.sidebarItem} />
            </div>
            <div className={styles.mainContent}>
              <div className={styles.contentBar} style={{width: '55%'}} />
              <div className={styles.contentBlock} />
              <div className={styles.contentBlock} />
              <div className={styles.contentBlock} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features(): ReactNode {
  return (
    <section className={styles.features}>
      <div className={styles.featuresInner}>
        <h2 className={styles.featuresTitle}>Built around how you work</h2>
        <p className={styles.featuresSubtitle}>
          Not another inbox with AI bolted on. FlowMail is designed from the
          ground up around cognitive workflows.
        </p>
        <div className={styles.featuresGrid}>
          {features.map((feature) => (
            <div key={feature.title} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const privacyItems = [
  'All data stored locally, encrypted',
  'No analytics or telemetry',
  'API keys in macOS Keychain',
  'Local AI by default',
];

function Privacy(): ReactNode {
  return (
    <section className={styles.privacy}>
      <div className={styles.privacyInner}>
        <h2 className={styles.privacyTitle}>Your data stays yours</h2>
        <div className={styles.privacyItems}>
          {privacyItems.map((item) => (
            <div key={item} className={styles.privacyItem}>
              <span className={styles.privacyCheck}>✓</span>
              {item}
            </div>
          ))}
        </div>
        <Link className={styles.privacyLink} to="/docs/security/overview">
          Learn more about security &amp; privacy &rarr;
        </Link>
      </div>
    </section>
  );
}

function BottomCta(): ReactNode {
  return (
    <section className={styles.bottomCta}>
      <h2 className={styles.bottomCtaTitle}>Ready to try FlowMail?</h2>
      <p className={styles.bottomCtaSubtitle}>
        Download the app and connect your email in minutes.
      </p>
      <Link
        className={styles.ctaPrimary}
        to="/docs/getting-started/download">
        Download for macOS
      </Link>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="AI-Powered Email Management"
      description="FlowMail organizes email around your mental contexts. AI-powered triage, self-improving classification, and smart drafting.">
      <Hero />
      <main>
        <Features />
        <Privacy />
        <BottomCta />
      </main>
    </Layout>
  );
}
