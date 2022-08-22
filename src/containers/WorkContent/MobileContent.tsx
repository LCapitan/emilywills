import cx from "classnames";

// components
import { WorkCard, WorkDetails } from "../../components";

// styles
import styles from './WorkContent.module.scss';

export function MobileContent() {
  return (
    <div className={styles.workContent}>
      <h1 className="srOnly">work</h1>
      <div className={styles.wrapper}>
        <ul className={styles.workList}>
          <li className={cx(styles.workPiece)}>
            <div>
              <WorkCard
                imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649249335/eveimage_ldqbep.jpg"
                imgAlt="an illustration of people cleaning up the Earth"
                cardLink="/work/eve-planning"
              />

              <div className={styles.inner}>
                <WorkDetails
                  classes={cx(styles.workDetails)}
                  title="Eve"
                  subTitle="A digital platform that makes the journey for death more approachable and sustainable."
                  tags={[
                    'sustainability',
                    'service design',
                    'accessibility',
                    'machine learning',
                    'human-centered design'
                  ]}
                  url="/work/eve-planning"
                  label="view case study"
                />
              </div>
            </div>
          </li>
          <li className={cx(styles.workPiece)}>
            <div>
              <WorkCard
                imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649404890/Haven_watches_qknzk9.png"
                imgAlt="photo of Haven watches"
                cardLink="/work/haven"
              />
              <WorkDetails
                classes={cx(styles.workDetails)}
                title="Haven"
                subTitle="Wearable technology that provides personal safety and peace of mind for young women."
                tags={[
                  'ui/ux',
                  'product design',
                  'branding',
                  'strategy',
                  'human-centered design'
                ]}
                url="/work/haven"
                label="view project"
              />
            </div>
          </li>
          <li className={cx(styles.workPiece)}>
            <div>
              <WorkCard
                imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649263364/honsbuns_hxjmxq.jpg"
                imgAlt="an illustration of beautiful bunny"
                cardLink="/work/honsbuns"
              />
              <WorkDetails
                classes={cx(styles.workDetails)}
                title="Hon&#39;s Buns"
                subTitle="The baddest bunny-themed NFTs on the scene."
                tags={[
                  'ui/ux',
                  'web3',
                  'crypto',
                  'branding',
                  'strategy',
                  'illustration',
                  'accessibility',
                ]}
                url="/work/honsbuns"
                label="view project"
              />
            </div>
          </li>
          <li className={cx(styles.workPiece)}>
            <div>
              <WorkCard
                imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649404956/3m_ogowpq.png"
                imgAlt="a photo of 3M creating their post it note mural"
                cardLink="/work/3m-pride"
              />
              <WorkDetails
                classes={cx(styles.workDetails)}
                title="3M Pride"
                subTitle="3M partners with twin cities pride festival"
                tags={[
                  'ui/ux',
                  'environmental design'
                ]}
                url="/work/3m-pride"
                label="view project"
              />
            </div>
          </li>
          <li className={cx(styles.workPiece)}>
            <div>
              <WorkCard
                imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649267493/rvabowls_yn3zpg.jpg"
                imgAlt="a photo of an acai bowl from RVA Bowls"
                cardLink="/work/rvabowls"
              />
              <WorkDetails
                classes={cx(styles.workDetails)}
                title="RVA Bowls"
                subTitle="A restaurant, studio, and art gallery that gives back to the local community."
                tags={[
                  'ui/ux',
                  'product design',
                  'strategy',
                  'branding',
                  'web design'
                ]}
                url="/work/rvabowls"
                label="view project"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
