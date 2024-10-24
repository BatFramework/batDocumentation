import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Written in Python',
    Svg: require('@site/static/img/python.svg').default,
    description: (
      <>
        BatFramework is written in the Python programming language, using the pygame-ce
        library which is built on top of SDL. This grants users ease of use and 
        facilitates the understanding of the framework.
        
      </>
    ),
  },
  {
    title: 'Cross-Platform',
    ImgSrc: require('@site/static/img/platforms.png').default,
    description: (
      <>
        Being based on pygame-ce and thus SDL, batFramework projects can be compiled into
        executables for Linux, Windows, MacOS and WebAssembly. 
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('@site/static/img/opensource.svg').default,
    description: (
      <>
        BatFramework is open source and published on github. 
      </>
    ),
  },
];

function Feature({ Svg, ImgSrc, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : (
          <img src={ImgSrc} alt={title} className={styles.featureImg} role="img" />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
