import Link from 'next/link';
import cx from "classnames";
import AnchorLink from 'react-anchor-link-smooth-scroll';

// components
import { Arrow, Button } from '../../index';

// styles
import styles from './CSHeader.module.scss'

// props
interface CSHeaderProps {
  title: string;
  // tags: Array<string>,
  overview: string;
  forWhat?: string;
  timeline?: string;
  tools?: Array<string>;
  roles?: Array<string>;
  btnUrl?: string;
  process?: boolean;
  sections?: Array<string>;
  csTitle?: string;
  label?: string;
  externalLink?: boolean;
  teams?: Array<string>;
  rightRail?: boolean;
}
export function CSHeader({
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
  csTitle,
  label = "View process",
  externalLink,
  teams,
  rightRail
}: CSHeaderProps) {
  return (
    <>
      {process ? (
        <div className={cx(styles.container, process && styles.process)}>
          <div className={cx(styles.caseStudyHeader)}>
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
                  <span className={styles.itemTitle}>contents</span>
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
        <div className={styles.container}>
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
                {btnUrl &&
                  <div className={styles.actions}>
                    {externalLink ? (
                      <Button
                        external
                        arrow
                        url={btnUrl}
                        label={label}
                      />
                    ) : (

                      <Button
                        arrow
                        url={btnUrl}
                        label={label}
                      />
                    )}
                  </div>
                }
              </div>

              {rightRail && (
                <div className={styles.rightRail}>
                  <div className={styles.details}>
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
                    {timeline &&
                      <div className={styles.rightRailItem}>
                        <span className={styles.itemTitle}>Timeline</span>
                        <span>{timeline}</span>
                      </div>
                    }

                    {/* For */}
                    {forWhat &&
                      <div className={styles.rightRailItem}>
                        <span className={styles.itemTitle}>For</span>
                        <span>{forWhat}</span>
                      </div>
                    }
                  </div>

                  {/* Team */}
                  {teams &&
                    <div className={styles.teamList}>
                      <span className={styles.itemTitle}>Team</span>
                      <div className={styles.teamNames}>
                        {teams && teams.map((team, i) =>
                          <span key={teams[i]}>{team},</span>
                        )}
                      </div>
                    </div>
                  }
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
