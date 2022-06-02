import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Легко использовать',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus был разработан с нуля, чтобы его можно было легко установить и
        используется для быстрого запуска вашего веб-сайта.
      </>
    ),
  },
  {
    title: 'Сосредоточьтесь на том, что важно',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus позволяет вам сосредоточиться на своих документах, а мы возьмем на себя всю работу по дому. Идти
        вперед и переместите документы в каталог <code>docs</code>.
      </>
    ),
  },
  {
    title: 'Работает на React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Расширьте или настройте макет своего веб-сайта, повторно используя React. Докузавр может
        быть расширен при повторном использовании одного и того же верхнего и нижнего колонтитула.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
