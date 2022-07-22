import Link from 'next/link';
import { Arrow } from '../Icons'
import cx from "classnames";
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Button } from '../Button';

import styles from './CSHeader.module.scss'

interface CaseStudyHeaderProps {
  title: string,
  // tags: Array<string>,
  overview: string,
  // children: any,
  forWhat?: string,
  timeline?: string,
  tools?: Array<string>,
  roles?: Array<string>,
  btnUrl?: string,
  process?: boolean
  sections?: Array<string>,
  csTitle?: string
}

const CaseStudyHeader: React.FC<CaseStudyHeaderProps> = ({
  title,
  // tags,
  overview,
  // children,
  forWhat,
  timeline,
  tools,
  roles,
  btnUrl,
  process,
  sections,
  csTitle
}) => {
  return (
    <>
      {process ? (
        <div className={cx(styles.caseStudyHeader, process && styles.process)}>
          <div className='container'>
            <div className={styles.workCta}>
              <Link href="/work">
                <span className={styles.linkArrow}>
                  <span className={styles.arrow}>
                    <Arrow />
                  </span>
                  work
                </span>
              </Link>
              &nbsp;/&nbsp;
              <Link href={"/work/" + csTitle}>
                <span className={styles.csLinkArrow}>
                  {csTitle}
                </span>
              </Link>
              <span className={styles.csLink}> / process</span>
            </div>

            <div className={styles.inner}>
              <div className={styles.csDetails}>
                <h1>{title}</h1>
                <div className={styles.content}>
                  {overview}
                </div>
              </div>

              <div className={styles.rightRail}>
                {/* Sections */}
                <div className={styles.rightRailItem}>
                  <span className={styles.itemTitle}>navigation</span>
                  <ul className={styles.navigation}>
                    {sections && sections.map((section, i) =>
                      <li key="key">
                        <AnchorLink href={'#' + section} key={sections[i]}>{section}</AnchorLink>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='container'>
          <div className={cx(styles.caseStudyHeader, process && styles.process)}>
            <div className={styles.workCta}>
              <Link href="/work">
                <span className={styles.linkArrow}>
                  <span className={styles.arrow}>
                    <Arrow />
                  </span>
                  work
                </span>
              </Link>
              <span className={styles.csLink}> / {title}</span>
            </div>

            <div className={styles.inner}>
              <div className={styles.csDetails}>
                <h1>{title}</h1>
                <div className={styles.content}>
                  {overview}
                </div>
                <div className={styles.actions}>
                  <Button
                    arrow
                    url={btnUrl}
                    label='View process'
                  />
                </div>
              </div>

              {forWhat && (
                <div className={styles.rightRail}>
                  {/* Roles */}
                  <div className={styles.rightRailItem}>
                    <span className={styles.itemTitle}>Role</span>
                    {roles && roles.map((role, i) =>
                      <span key={roles[i]}>{role}</span>
                    )}
                  </div>

                  {/* Tools */}
                  <div className={styles.rightRailItem}>
                    <span className={styles.itemTitle}>Tools</span>
                    {tools && tools.map((tool, i) =>
                      <span key={tools[i]}>{tool}</span>
                    )}
                  </div>

                  {/* Timeline */}
                  <div className={styles.rightRailItem}>
                    <span className={styles.itemTitle}>Timeline</span>
                    <span>{timeline}</span>
                  </div>

                  {/* For */}
                  <div className={styles.rightRailItem}>
                    <span className={styles.itemTitle}>For</span>
                    <span>{forWhat}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )
      }
    </>
  )
}

export default CaseStudyHeader;
