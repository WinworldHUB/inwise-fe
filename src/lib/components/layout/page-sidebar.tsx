import { FC } from "react";
import { Link } from "react-router-dom";

interface PageSideBarProps {
  items?: MenuItem[];
  selectedItemIndex?: number;
  onMenuItemClick?: (menuIndex: number) => void;
}

const PageSideBar: FC<PageSideBarProps> = ({
  items,
  selectedItemIndex = 0,
  onMenuItemClick,
}) => {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <Link to="" className="sidebar-brand">
          In<span>wise</span>
        </Link>
        <div className="sidebar-toggler not-active">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="sidebar-body">
        <ul className="nav">
          {(items ?? []).map((item, index) => (
            <li
              className={`nav-item ${
                selectedItemIndex === index ? "active" : ""
              }`}
              onClick={() => onMenuItemClick?.(index)}
            >
              <Link to={item.route} className="nav-link">
                <i className="link-icon" data-feather={item.featherIcon} />
                <span className="link-title">{item.title}</span>
              </Link>
            </li>
          ))}
          {/* <li className="nav-item nav-category">web apps</li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="blank-page.html#emails"
              role="button"
              aria-expanded="false"
              aria-controls="emails"
            >
              <i className="link-icon" data-feather="mail" />
              <span className="link-title">Email</span>
              <i className="link-arrow" data-feather="chevron-down" />
            </a>
            <div className="collapse" id="emails">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a href="../email/inbox.html" className="nav-link">
                    Inbox
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../email/read.html" className="nav-link">
                    Read
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../email/compose.html" className="nav-link">
                    Compose
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a href="../apps/chat.html" className="nav-link">
              <i className="link-icon" data-feather="message-square" />
              <span className="link-title">Chat</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="../apps/calendar.html" className="nav-link">
              <i className="link-icon" data-feather="calendar" />
              <span className="link-title">Calendar</span>
            </a>
          </li>
          <li className="nav-item nav-category">Components</li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="blank-page.html#uiComponents"
              role="button"
              aria-expanded="false"
              aria-controls="uiComponents"
            >
              <i className="link-icon" data-feather="feather" />
              <span className="link-title">UI Kit</span>
              <i className="link-arrow" data-feather="chevron-down" />
            </a>
            <div className="collapse" id="uiComponents">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a
                    href="../ui-components/accordion.html"
                    className="nav-link"
                  >
                    Accordion
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../ui-components/alerts.html" className="nav-link">
                    Alerts
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../ui-components/badges.html" className="nav-link">
                    Badges
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="../ui-components/breadcrumbs.html"
                    className="nav-link"
                  >
                    Breadcrumbs
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../ui-components/buttons.html" className="nav-link">
                    Buttons
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="../ui-components/button-group.html"
                    className="nav-link"
                  >
                    Button group
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../ui-components/cards.html" className="nav-link">
                    Cards
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../ui-components/carousel.html" className="nav-link">
                    Carousel
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../ui-components/collapse.html" className="nav-link">
                    Collapse
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="../ui-components/dropdowns.html"
                    className="nav-link"
                  >
                    Dropdowns
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="../ui-components/list-group.html"
                    className="nav-link"
                  >
                    List group
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="../ui-components/media-object.html"
                    className="nav-link"
                  >
                    Media object
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../ui-components/modal.html" className="nav-link">
                    Modal
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../ui-components/navs.html" className="nav-link">
                    Navs
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../ui-components/navbar.html" className="nav-link">
                    Navbar
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="../ui-components/pagination.html"
                    className="nav-link"
                  >
                    Pagination
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../ui-components/popover.html" className="nav-link">
                    Popovers
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../ui-components/progress.html" className="nav-link">
                    Progress
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="../ui-components/scrollbar.html"
                    className="nav-link"
                  >
                    Scrollbar
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="../ui-components/scrollspy.html"
                    className="nav-link"
                  >
                    Scrollspy
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../ui-components/spinners.html" className="nav-link">
                    Spinners
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../ui-components/tabs.html" className="nav-link">
                    Tabs
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../ui-components/tooltips.html" className="nav-link">
                    Tooltips
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="blank-page.html#advancedUI"
              role="button"
              aria-expanded="false"
              aria-controls="advancedUI"
            >
              <i className="link-icon" data-feather="anchor" />
              <span className="link-title">Advanced UI</span>
              <i className="link-arrow" data-feather="chevron-down" />
            </a>
            <div className="collapse" id="advancedUI">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a href="../advanced-ui/cropper.html" className="nav-link">
                    Cropper
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="../advanced-ui/owl-carousel.html"
                    className="nav-link"
                  >
                    Owl carousel
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../advanced-ui/sortablejs.html" className="nav-link">
                    SortableJs
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="../advanced-ui/sweet-alert.html"
                    className="nav-link"
                  >
                    Sweet Alert
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="blank-page.html#forms"
              role="button"
              aria-expanded="false"
              aria-controls="forms"
            >
              <i className="link-icon" data-feather="inbox" />
              <span className="link-title">Forms</span>
              <i className="link-arrow" data-feather="chevron-down" />
            </a>
            <div className="collapse" id="forms">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a href="../forms/basic-elements.html" className="nav-link">
                    Basic Elements
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="../forms/advanced-elements.html"
                    className="nav-link"
                  >
                    Advanced Elements
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../forms/editors.html" className="nav-link">
                    Editors
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../forms/wizard.html" className="nav-link">
                    Wizard
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="blank-page.html#charts"
              role="button"
              aria-expanded="false"
              aria-controls="charts"
            >
              <i className="link-icon" data-feather="pie-chart" />
              <span className="link-title">Charts</span>
              <i className="link-arrow" data-feather="chevron-down" />
            </a>
            <div className="collapse" id="charts">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a href="../charts/apex.html" className="nav-link">
                    Apex
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../charts/chartjs.html" className="nav-link">
                    ChartJs
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../charts/flot.html" className="nav-link">
                    Flot
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../charts/peity.html" className="nav-link">
                    Peity
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../charts/sparkline.html" className="nav-link">
                    Sparkline
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="blank-page.html#tables"
              role="button"
              aria-expanded="false"
              aria-controls="tables"
            >
              <i className="link-icon" data-feather="layout" />
              <span className="link-title">Table</span>
              <i className="link-arrow" data-feather="chevron-down" />
            </a>
            <div className="collapse" id="tables">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a href="../tables/basic-table.html" className="nav-link">
                    Basic Tables
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../tables/data-table.html" className="nav-link">
                    Data Table
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="blank-page.html#icons"
              role="button"
              aria-expanded="false"
              aria-controls="icons"
            >
              <i className="link-icon" data-feather="smile" />
              <span className="link-title">Icons</span>
              <i className="link-arrow" data-feather="chevron-down" />
            </a>
            <div className="collapse" id="icons">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a href="../icons/feather-icons.html" className="nav-link">
                    Feather Icons
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../icons/flag-icons.html" className="nav-link">
                    Flag Icons
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../icons/mdi-icons.html" className="nav-link">
                    Mdi Icons
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item nav-category">Pages</li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="blank-page.html#general-pages"
              role="button"
              aria-expanded="false"
              aria-controls="general-pages"
            >
              <i className="link-icon" data-feather="book" />
              <span className="link-title">Special pages</span>
              <i className="link-arrow" data-feather="chevron-down" />
            </a>
            <div className="collapse" id="general-pages">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a href="blank-page.html" className="nav-link">
                    Blank page
                  </a>
                </li>
                <li className="nav-item">
                  <a href="faq.html" className="nav-link">
                    Faq
                  </a>
                </li>
                <li className="nav-item">
                  <a href="invoice.html" className="nav-link">
                    Invoice
                  </a>
                </li>
                <li className="nav-item">
                  <a href="profile.html" className="nav-link">
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pricing.html" className="nav-link">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a href="timeline.html" className="nav-link">
                    Timeline
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="blank-page.html#authPages"
              role="button"
              aria-expanded="false"
              aria-controls="authPages"
            >
              <i className="link-icon" data-feather="unlock" />
              <span className="link-title">Authentication</span>
              <i className="link-arrow" data-feather="chevron-down" />
            </a>
            <div className="collapse" id="authPages">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a href="../auth/login.html" className="nav-link">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../auth/register.html" className="nav-link">
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="blank-page.html#errorPages"
              role="button"
              aria-expanded="false"
              aria-controls="errorPages"
            >
              <i className="link-icon" data-feather="cloud-off" />
              <span className="link-title">Error</span>
              <i className="link-arrow" data-feather="chevron-down" />
            </a>
            <div className="collapse" id="errorPages">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a href="../error/404.html" className="nav-link">
                    404
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../error/500.html" className="nav-link">
                    500
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item nav-category">Docs</li>
          <li className="nav-item">
            <a
              href="../../../../documentation/docs.html"
              target="_blank"
              className="nav-link"
            >
              <i className="link-icon" data-feather="hash" />
              <span className="link-title">Documentation</span>
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default PageSideBar;
