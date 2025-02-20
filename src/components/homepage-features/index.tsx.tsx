import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Serverless',
    description: (
      <>
        Pure P2P. Built completely with IPFS/IPNS/pubsub - no central server, database, HTTP endpoint or DNS.
      </>
    ),
  },
  {
    title: 'Adminless',
    description: (
      <>
        No global admins, moderators or rules. Your community is your cryptographic property.
      </>
    ),
  },
  {
    title: 'Fully decentralized',
    description: (
      <>
        The average user can run a Plebbit node by simply using a desktop app. Runs on 4GB of RAM.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}