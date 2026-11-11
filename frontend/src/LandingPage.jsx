
import React from 'react';

export default function LandingPage({ onLogin }) {

  const features = [
    {
      icon: '📁',
      title: 'Unified Patient Records',
      description:
        'Access patient information, medical reports, previous consultations and history in one organized workspace.'
    },
    {
      icon: '✦',
      title: 'AI-Powered Report Analysis',
      description:
        'Use AI to analyse uploaded medical reports and generate structured summaries to assist doctors.'
    },
    {
      icon: '✓',
      title: 'Doctor Verification',
      description:
        'Doctors remain in control. Every AI-generated summary must be reviewed and approved before finalization.'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Doctor Login',
      description: 'Doctors securely access their personalized workspace.'
    },
    {
      number: '02',
      title: 'Access Patient Records',
      description: 'View patient information, medical history and previous reports.'
    },
    {
      number: '03',
      title: 'Upload & Analyse Reports',
      description: 'Upload X-rays, CT scans and other medical documents for AI-assisted analysis.'
    },
    {
      number: '04',
      title: 'Review & Approve',
      description: 'Review, edit, accept or reject the AI-generated summary before it is saved.'
    }
  ];

  return (
    <div className="landing-page">

      {/* NAVIGATION */}
      <nav className="home-navbar">

        <a href="#home" className="home-logo">
          <span className="logo-icon">✚</span>
          <span>Med Review <strong>AI</strong></span>
        </a>

        <div className="home-nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#workflow">How It Works</a>
        </div>

        <button
          className="nav-login-btn"
          onClick={onLogin}
        >
          Doctor Portal →
        </button>

      </nav>


      {/* SECTION 1: HERO / HOME */}
      <section className="home-hero" id="home">

        <div className="hero-content">

          <span className="hero-tag">
            CLINICAL WORKFLOW, SIMPLIFIED
          </span>

          <h1>
            Smarter Medical
            <br />
            Reviews.
            <br />
            <span>Better Patient Care.</span>
          </h1>

          <p>
            Bringing patient records, medical reports and
            AI-assisted analysis together in one intelligent
            platform. Helping doctors make informed decisions
            with greater clarity and efficiency.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={onLogin}
            >
              Access Doctor Portal →
            </button>

            <a href="#about" className="secondary-btn">
              Explore Platform
            </a>

          </div>

          <div className="hero-trust">
            ✓ AI assistance with doctor-led verification
          </div>

        </div>


        {/* HERO VISUAL */}
        <div className="hero-visual">

          <div className="hero-circle"></div>

          <div className="medical-card">

            <div className="medical-card-header">
              <div>
                <span className="mini-logo">✚</span>
                <strong>Med Review AI</strong>
              </div>

              <span className="online-status">
                ● Active
              </span>
            </div>

            <div className="medical-card-body">

              <span className="card-label">
                PATIENT OVERVIEW
              </span>

              <div className="patient-preview">

                <div className="patient-avatar">P</div>

                <div>
                  <strong>Patient Records</strong>
                  <small>Medical History & Reports</small>
                </div>

              </div>

              <span className="card-label">
                AI REVIEW PROCESS
              </span>

              <div className="preview-item">
                <span className="preview-icon">📄</span>
                <div>
                  <strong>Report Uploaded</strong>
                  <small>Medical document received</small>
                </div>
                <span className="check">✓</span>
              </div>

              <div className="preview-item">
                <span className="preview-icon ai-icon">✦</span>
                <div>
                  <strong>AI Analysis</strong>
                  <small>Summary generated</small>
                </div>
                <span className="review-status">Review</span>
              </div>

              <div className="approval-box">
                <span>✓</span>
                <div>
                  <strong>Doctor Verification</strong>
                  <small>Approval required before saving</small>
                </div>
              </div>

            </div>

          </div>

          <div className="floating-label">
            ✦ Human-guided AI assistance
          </div>

        </div>

      </section>


      {/* SECTION 2: ABOUT */}
      <section className="home-about" id="about">

        <div className="section-label">
          ABOUT MED REVIEW AI
        </div>

        <div className="about-content">

          <h2>
            Medical Information.
            <br />
            <span>One Connected Platform.</span>
          </h2>

          <p>
            Med Review AI is a doctor-focused medical report
            management and AI-assisted analysis platform.
            It provides doctors with centralized access to
            patient records, previous consultations and
            medical documents.

            <br /><br />

            By integrating artificial intelligence into the
            report review process, the platform helps doctors
            understand medical information more efficiently
            while keeping final clinical decisions in human hands.
          </p>

        </div>

      </section>


      {/* SECTION 3: FEATURES */}
      <section className="home-features" id="features">

        <div className="section-label">
          PLATFORM FEATURES
        </div>

        <h2>
          Everything You Need.
          <br />
          <span>All in One Place.</span>
        </h2>

        <div className="feature-grid">

          {features.map((feature, index) => (

            <div className="feature-card" key={index}>

              <div className="feature-icon">
                {feature.icon}
              </div>

              <span className="feature-number">
                0{index + 1}
              </span>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

            </div>

          ))}

        </div>

      </section>


      {/* SECTION 4: WORKFLOW */}
      <section className="home-workflow" id="workflow">

        <div className="workflow-intro">

          <div className="section-label">
            HOW IT WORKS
          </div>

          <h2>
            A Simple Workflow.
            <br />
            <span>Smarter Reviews.</span>
          </h2>

          <p>
            From accessing patient records to approving AI-generated
            summaries, every step is designed to support doctors
            throughout the review process.
          </p>

        </div>

        <div className="workflow-steps">

          {steps.map((step, index) => (

            <div className="workflow-step" key={index}>

              <span className="step-number">
                {step.number}
              </span>

              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="home-cta">

        <div>
          <span className="section-label">
            MED REVIEW AI
          </span>

          <h2>
            Your Medical Workspace
            <br />
            <span>Starts Here.</span>
          </h2>

          <p>
            Access your doctor portal and manage patient
            reports with AI-assisted support.
          </p>
        </div>

        <button
          className="primary-btn"
          onClick={onLogin}
        >
          Enter Doctor Portal →
        </button>

      </section>


      {/* FOOTER */}
      <footer className="home-footer">

        <a href="#home" className="home-logo">
          <span className="logo-icon">✚</span>
          <span>Med Review <strong>AI</strong></span>
        </a>

        <p>
          AI-assisted documentation. Doctor-led decisions.
        </p>

        <a href="#home">Back to Top ↑</a>

      </footer>

    </div>
  );
}
