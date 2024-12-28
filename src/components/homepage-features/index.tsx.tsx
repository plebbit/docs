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
        Built completely with IPFS/IPNS/pubsub. No central server, database, HTTP endpoint or DNS - pure peer to peer.
      </>
    ),
  },
  {
    title: 'Adminless',
    description: (
      <>
        No global admins. Users have full property rights over their own content, and they decide how to moderate it.
      </>
    ),
  },
  {
    title: 'Fully Decentralized',
    description: (
      <>
        Running a Plebbit full node is extremely easy - just open a desktop app and keep it running. No blockchain to sync.
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