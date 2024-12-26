import React, { useState } from "react";
import "./Signin.css";
import icon from '../assets/icon.svg';
import github from "../assets/github.svg";
import bitbucket from "../assets/bitbucket.svg";
import devops from "../assets/devops.svg";
import gitlab from "../assets/gitlab.svg";
import sso from "../assets/sso.svg";
import group from '../assets/groups.svg';
import subtract from '../assets/subtract.svg';
import line from '../assets/line.svg';

function Signin() {
  const [activeTab, setActiveTab] = useState("SAAS");

  return (
    <div className="container-fluid signin-container">
      <div className="row">
        {/* Left Section */}
        <div className="col-md-6 left-section">
          {/* First Card */}
          <div className="card first-card">
            <div className="header-section d-flex align-items-center">
              <img
                src={icon}
                alt="AI Logo"
                className="ai-logo"
                style={{  marginRight: "10px" }}
              />
              <h5 className="card-title">AI to Detect & Autofix Bad Code</h5>
              {/* <img src={line} alt="horizontal Line" className="line"/> */}
            </div>
            <img src={line} alt="horizontal Line" className="line"/>
            <div className="stats-row">
              <div className="stat">
                <h6>30+</h6>
                <p>Language Support</p>
              </div>
              <div className="stat">
                <h6>10K+</h6>
                <p>Developers</p>
              </div>
              <div className="stat">
                <h6>100K+</h6>
                <p>Hours Saved</p>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="card second-card">
            <div className="growth-info d-flex align-items-center">
              <img src={group} alt="group" className="me-2" width={40} />
              <div>
              <p className="growth-percentage">↑ 14%</p>
              <p className="growth-text">This week</p>
              </div>
            
            </div>
            <div className="growth ">
            <h6>Issues Fixed</h6>
            <h2 className="increase">500K+</h2>
            </div>
          </div>
          <img src={subtract} alt="subtract" className="sub"/>
        </div>

        {/* Right Section */}
        <div className="col-md-6 right-section">
            <div className="enter">
            <div className="center">
                <div className=" code d-flex align-items-center">
                <img src={icon} alt="CodeAnt AI Logo" className="mb-3" width={35} />
                 <h3 className="ai">CodeAnt AI</h3>
                </div>
                <h3 className="welcome">Welcome to CodeAnt AI</h3>
            </div>
          <div className="tab-buttons">
            <button
              className={`btn ${activeTab === "SAAS" ? "btn-primary" : "btn-light"}`}
              onClick={() => setActiveTab("SAAS")}
            >
              SAAS
            </button>
            <button
              className={`btn ${activeTab === "Self Hosted" ? "btn-primary" : "btn-light"}`}
              onClick={() => setActiveTab("Self Hosted")}
            >
              Self Hosted
            </button>
          </div>

          {/* Dynamic Content Based on Active Tab */}
          {activeTab === "SAAS" && (
            <div className="auth-buttons">
              <button className="btn btn-outline-primary w-75 mb-3 d-flex align-items-center">
                <img src={github} alt="GitHub" className="me-2" width={20} />
                Sign in with GitHub
              </button>
              <button className="btn btn-outline-secondary w-75 mb-3 d-flex align-items-center">
                <img src={bitbucket} alt="Bitbucket" className="me-2" width={20} />
                Sign in with Bitbucket
              </button>
              <button className="btn btn-outline-info w-75 mb-3 d-flex align-items-center">
                <img src={devops} alt="Azure DevOps" className="me-2" width={20} />
                Sign in with Azure DevOps
              </button>
              <button className="btn btn-outline-danger w-75 mb-3 d-flex align-items-center">
                <img src={gitlab} alt="GitLab" className="me-2" width={20} />
                Sign in with GitLab
              </button>
            </div>
          )}
          {activeTab === "Self Hosted" && (
            <div className="auth-buttons">
              <button className="btn btn-outline-danger w-75 mb-3 d-flex align-items-center ">
                <img src={gitlab} alt="GitLab" className="me-2" width={20} />
                Self Hosted GitLab
              </button>
              <button className="btn btn-outline-dark w-75 mb-3 d-flex align-items-center">
                <img src={sso} alt="SSO" className="me-2" width={20} />
                Sign in with SSO
              </button>
            </div>
          )}

          
          </div>
          <p className="mt-4 text-center">
            By signing up, you agree to the <a href="#privacy">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
