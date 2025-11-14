import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <>
      <meta name="algolia-site-verification" content="2977250D6730DBB7" />

      <Layout
        title={`${siteConfig.title}`}
        description="Trainium | Gestiona - Controla - Entrena"
      >
        <main>
          <HomepageFeatures />
        </main>
      </Layout>
    </>
  );
}