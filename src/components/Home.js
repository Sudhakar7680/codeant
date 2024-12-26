import React, { useState } from 'react';
import './Home.css';
import icon from "../assets/icon.svg";
import home from '../assets/home.svg';
import code from '../assets/frame3.svg';
import cloud from '../assets/frame1.svg';
import use from '../assets/frame2.svg';
import setting from '../assets/frame4.svg';
import support from '../assets/frame5.svg';
import logout from '../assets/frame6.svg';
import database from '../assets/database.svg';
import refresh from '../assets/refresh.svg';
import search from '../assets/search.svg';

const repositories = [
  { name: 'design-system', type: 'Public', language: 'React', size: '7320 KB', updated: '1 day ago' },
  { name: 'codeant-ci-app', type: 'Private', language: 'Javascript', size: '5871 KB', updated: '2 days ago' },
  { name: 'analytics-dashboard', type: 'Private', language: 'Python', size: '4521 KB', updated: '5 days ago' },
  { name: 'mobile-app', type: 'Public', language: 'Swift', size: '3096 KB', updated: '3 days ago' },
  { name: 'e-commerce-platform', type: 'Private', language: 'Java', size: '6210 KB', updated: '6 days ago' },
  { name: 'blog-website', type: 'Public', language: 'HTML/CSS', size: '1876 KB', updated: '4 days ago' },
  { name: 'social-network', type: 'Private', language: 'PHP', size: '5432 KB', updated: '7 days ago' },
];

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRepositories = repositories.filter((repo) => 
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-container">
      <div className={`overlay ${isSidebarOpen ? "active" : ""}`} onClick={toggleSidebar}>

      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="image-icon">
            <img src={icon} alt="CodeAnt AI" className="logo" />
            <h3>CodeAnt AI</h3>
          </div>
          <select className="user-select">
            <option>UtkarshDhairyaProjects</option>
            <option>Another User</option>
            <option>Sample Project</option>
          </select>
        </div>
        <ul className="sidebar-menu">
          <li className="icon-bg">
            <img src={home} alt="Home" className="home-icon" />
            <span>Repositories</span>
          </li>
          <li>
            <img src={code} alt="Code Review" className="menu-icon" />
            <span>AI Code Review</span>
          </li>
          <li>
            <img src={cloud} alt="Cloud Security" className="menu-icon" />
            <span>Cloud Security</span>
          </li>
          <li>
            <img src={use} alt="How to Use" className="menu-icon" />
            <span>How to Use</span>
          </li>
          <li>
            <img src={setting} alt="Settings" className="menu-icon" />
            <span>Settings</span>
          </li>
        </ul>
        <div className="sidebar-footer">
          <div className="footer-item">
            <img src={support} alt="Support" className="menu-icon" />
            <span>Support</span>
          </div>
          <div className="footer-item">
            <img src={logout} alt="Logout" className="menu-icon" />
            <span>Logout</span>
          </div>
        </div>
      </aside>
      </div>
      <div className={`content ${isSidebarOpen ? "sidebar-visible" : ""}`}>
        <div className="hamburger-menu" onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <header className="header">
          <div>
            <h1 className='rep'>Repositories</h1>
            <p className='total'>33 total repositories</p>
          </div>
          <div className="header-controls">
            <div className="refresh-section">
              <img src={refresh} alt="Refresh" className="refresh-icon" />
              <span>Refresh All</span>
            </div>
            <button className="add-repo-btn">+ Add Repository</button>
          </div>
        </header>

        <main className="main-content">
          <div className="repository-search">
            <input 
              type="text" 
              placeholder="Search Repositories" 
              className="search-bar" 
              value={searchQuery}
              onChange={handleSearchChange}
            />
         <img src={search} alt="Search Icon" className="search-icon" />

          </div>

          <ul className="repository-list">
            {filteredRepositories.map((repo, index) => (
              <li key={index} className="repository-item">
                <div className="repo-details">
                  <h2 className="repo-name">{repo.name}</h2>
                  <span className={`repo-type ${repo.type.toLowerCase()}`}>{repo.type}</span>
                </div>
                <div className="repository-content-alignment">
                  <p>{repo.language}</p>
                  <p className="repo-dot">•</p>
                  <div className="database-content-alignment">
                    <img src={database} alt="Database" className="database-image" />
                    <span>{repo.size}</span>
                  </div>
                  <p>Updated {repo.updated}</p>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
};

export default Home;


