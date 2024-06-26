import { FC } from "react";
import { Link } from "react-router-dom";

const PageNavigation: FC = () => {
  return (
    <nav className="navbar">
      <Link to="" className="sidebar-toggler">
        <i data-feather="menu"></i>
      </Link>
      <div className="navbar-content">
        <h2 className="pt-2">Page title</h2>
        {/* <form className="search-form">
          <div className="input-group">
            <div className="input-group-text" />
            <input
              type="text"
              className="form-control"
              id="navbarForm"
              placeholder="Search here..."
            />
          </div>
        </form>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="blank-page.html#"
              id="languageDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="ms-1 me-1 d-none d-md-inline-block">
                <i className="flag-icon flag-icon-us" title="us" id="us1" />{" "}
                English
              </span>
            </a>
            <div className="dropdown-menu" aria-labelledby="languageDropdown">
              <a href="javascript:;" className="dropdown-item py-2">
                <i className="flag-icon flag-icon-us" title="us" id="us" />{" "}
                <span className="ms-1">English</span>
              </a>{" "}
              <a href="javascript:;" className="dropdown-item py-2">
                <i className="flag-icon flag-icon-fr" title="fr" id="fr" />{" "}
                <span className="ms-1">French</span>
              </a>{" "}
              <a href="javascript:;" className="dropdown-item py-2">
                <i className="flag-icon flag-icon-de" title="de" id="de" />{" "}
                <span className="ms-1">German</span>
              </a>{" "}
              <a href="javascript:;" className="dropdown-item py-2">
                <i className="flag-icon flag-icon-pt" title="pt" id="pt" />{" "}
                <span className="ms-1">Portuguese</span>
              </a>{" "}
              <a href="javascript:;" className="dropdown-item py-2">
                <i className="flag-icon flag-icon-es" title="es" id="es" />{" "}
                <span className="ms-1">Spanish</span>
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="blank-page.html#"
              id="appsDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            />
            <div className="dropdown-menu p-0" aria-labelledby="appsDropdown">
              <div className="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
                <p className="mb-0 fw-bold">
                  {" "}
                  <i className="feather feather-grid" /> Web Apps
                </p>
                <a href="/" className="text-muted">
                  <i data-feather="mail" /> Edit
                </a>
              </div>
              <div className="row g-0 p-1">
                <div className="col-3 text-center">
                  <a
                    href="../apps/chat.html"
                    className="dropdown-item d-flex flex-column align-items-center justify-content-center wd-70 ht-70"
                  >
                    <p className="tx-12">Chat</p>
                  </a>
                </div>
                <div className="col-3 text-center">
                  <a
                    href="../apps/calendar.html"
                    className="dropdown-item d-flex flex-column align-items-center justify-content-center wd-70 ht-70"
                  >
                    <p className="tx-12">Calendar</p>
                  </a>
                </div>
                <div className="col-3 text-center">
                  <a
                    href="../email/inbox.html"
                    className="dropdown-item d-flex flex-column align-items-center justify-content-center wd-70 ht-70"
                  >
                    <p className="tx-12">Email</p>
                  </a>
                </div>
                <div className="col-3 text-center">
                  <a
                    href="profile.html"
                    className="dropdown-item d-flex flex-column align-items-center justify-content-center wd-70 ht-70"
                  >
                    <p className="tx-12">Profile</p>
                  </a>
                </div>
              </div>
              <div className="px-3 py-2 d-flex align-items-center justify-content-center border-top">
                <a href="javascript:;">View all</a>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="blank-page.html#"
              id="messageDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            />
            <div
              className="dropdown-menu p-0"
              aria-labelledby="messageDropdown"
            >
              <div className="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
                <p>9 New Messages</p>
                <a href="javascript:;" className="text-muted">
                  Clear all
                </a>
              </div>
              <div className="p-1">
                <a
                  href="javascript:;"
                  className="dropdown-item d-flex align-items-center py-2"
                >
                  <div className="me-3">
                    <img
                      className="wd-30 ht-30 rounded-circle"
                      src="../../../assets/images/faces/face2.jpg"
                      alt="userr"
                    />
                  </div>
                  <div className="d-flex justify-content-between flex-grow-1">
                    <div className="me-4">
                      <p>Leonardo Payne</p>
                      <p className="tx-12 text-muted">Project status</p>
                    </div>
                    <p className="tx-12 text-muted">2 min ago</p>
                  </div>
                </a>{" "}
                <a
                  href="javascript:;"
                  className="dropdown-item d-flex align-items-center py-2"
                >
                  <div className="me-3">
                    <img
                      className="wd-30 ht-30 rounded-circle"
                      src="../../../assets/images/faces/face3.jpg"
                      alt="userr"
                    />
                  </div>
                  <div className="d-flex justify-content-between flex-grow-1">
                    <div className="me-4">
                      <p>Carl Henson</p>
                      <p className="tx-12 text-muted">Client meeting</p>
                    </div>
                    <p className="tx-12 text-muted">30 min ago</p>
                  </div>
                </a>{" "}
                <a
                  href="javascript:;"
                  className="dropdown-item d-flex align-items-center py-2"
                >
                  <div className="me-3">
                    <img
                      className="wd-30 ht-30 rounded-circle"
                      src="../../../assets/images/faces/face4.jpg"
                      alt="userr"
                    />
                  </div>
                  <div className="d-flex justify-content-between flex-grow-1">
                    <div className="me-4">
                      <p>Jensen Combs</p>
                      <p className="tx-12 text-muted">Project updates</p>
                    </div>
                    <p className="tx-12 text-muted">1 hrs ago</p>
                  </div>
                </a>{" "}
                <a
                  href="javascript:;"
                  className="dropdown-item d-flex align-items-center py-2"
                >
                  <div className="me-3">
                    <img
                      className="wd-30 ht-30 rounded-circle"
                      src="../../../assets/images/faces/face5.jpg"
                      alt="userr"
                    />
                  </div>
                  <div className="d-flex justify-content-between flex-grow-1">
                    <div className="me-4">
                      <p>Amiah Burton</p>
                      <p className="tx-12 text-muted">Project deatline</p>
                    </div>
                    <p className="tx-12 text-muted">2 hrs ago</p>
                  </div>
                </a>{" "}
                <a
                  href="javascript:;"
                  className="dropdown-item d-flex align-items-center py-2"
                >
                  <div className="me-3">
                    <img
                      className="wd-30 ht-30 rounded-circle"
                      src="../../../assets/images/faces/face6.jpg"
                      alt="userr"
                    />
                  </div>
                  <div className="d-flex justify-content-between flex-grow-1">
                    <div className="me-4">
                      <p>Yaretzi Mayo</p>
                      <p className="tx-12 text-muted">New record</p>
                    </div>
                    <p className="tx-12 text-muted">5 hrs ago</p>
                  </div>
                </a>
              </div>
              <div className="px-3 py-2 d-flex align-items-center justify-content-center border-top">
                <a href="javascript:;">View all</a>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="blank-page.html#"
              id="notificationDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="indicator">
                <div className="circle" />
              </div>
            </a>
            <div
              className="dropdown-menu p-0"
              aria-labelledby="notificationDropdown"
            >
              <div className="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
                <p>6 New Notifications</p>
                <a href="javascript:;" className="text-muted">
                  Clear all
                </a>
              </div>
              <div className="p-1">
                <a
                  href="javascript:;"
                  className="dropdown-item d-flex align-items-center py-2"
                >
                  <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3" />
                  <div className="flex-grow-1 me-2">
                    <p>New Order Recieved</p>
                    <p className="tx-12 text-muted">30 min ago</p>
                  </div>
                </a>{" "}
                <a
                  href="javascript:;"
                  className="dropdown-item d-flex align-items-center py-2"
                >
                  <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3" />
                  <div className="flex-grow-1 me-2">
                    <p>Server Limit Reached!</p>
                    <p className="tx-12 text-muted">1 hrs ago</p>
                  </div>
                </a>{" "}
                <a
                  href="javascript:;"
                  className="dropdown-item d-flex align-items-center py-2"
                >
                  <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                    <img
                      className="wd-30 ht-30 rounded-circle"
                      src="../../../assets/images/faces/face6.jpg"
                      alt="userr"
                    />
                  </div>
                  <div className="flex-grow-1 me-2">
                    <p>New customer registered</p>
                    <p className="tx-12 text-muted">2 sec ago</p>
                  </div>
                </a>{" "}
                <a
                  href="javascript:;"
                  className="dropdown-item d-flex align-items-center py-2"
                >
                  <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3" />
                  <div className="flex-grow-1 me-2">
                    <p>Apps are ready for update</p>
                    <p className="tx-12 text-muted">5 hrs ago</p>
                  </div>
                </a>{" "}
                <a
                  href="javascript:;"
                  className="dropdown-item d-flex align-items-center py-2"
                >
                  <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3" />
                  <div className="flex-grow-1 me-2">
                    <p>Download completed</p>
                    <p className="tx-12 text-muted">6 hrs ago</p>
                  </div>
                </a>
              </div>
              <div className="px-3 py-2 d-flex align-items-center justify-content-center border-top">
                <a href="javascript:;">View all</a>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="blank-page.html#"
              id="profileDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="wd-30 ht-30 rounded-circle"
                src="../../../assets/images/faces/face1.jpg"
                alt="profile"
              />
            </a>
            <div
              className="dropdown-menu p-0"
              aria-labelledby="profileDropdown"
            >
              <div className="d-flex flex-column align-items-center border-bottom px-5 py-3">
                <div className="mb-3">
                  <img
                    className="wd-80 ht-80 rounded-circle"
                    src="../../../assets/images/faces/face1.jpg"
                    alt=""
                  />
                </div>
                <div className="text-center">
                  <p className="tx-16 fw-bolder">Amiah Burton</p>
                  <p className="tx-12 text-muted">amiahburton@gmail.com</p>
                </div>
              </div>
              <ul className="list-unstyled p-1">
                <li className="dropdown-item py-2">
                  <a href="profile.html" className="text-body ms-0">
                    <span>Profile</span>
                  </a>
                </li>
                <li className="dropdown-item py-2">
                  <a href="javascript:;" className="text-body ms-0">
                    <span>Edit Profile</span>
                  </a>
                </li>
                <li className="dropdown-item py-2">
                  <a href="javascript:;" className="text-body ms-0">
                    <span>Switch User</span>
                  </a>
                </li>
                <li className="dropdown-item py-2">
                  <a href="javascript:;" className="text-body ms-0">
                    <span>Log Out</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default PageNavigation;
