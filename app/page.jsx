// force update

export default function Home() {
  return (
    <main>
      {/* Header with Navigation */}
      <header style={styles.header}>
        <nav style={styles.navbar}>
          <ul style={styles.navList}>
            <li><a href="#maintenance">Maintenance</a></li>
            <li><a href="#levies">Levies</a></li>
            <li><a href="#committee">Committee</a></li>
            <li><a href="#notices">Notices</a></li>
          </ul>
        </nav>
        <div style={styles.headerContent}>
          <img
            src="/assets/building.jpg"
            alt="Our Building"
            style={styles.headerImage}
          />
          <h1 style={styles.title}>Welcome to the Strata Management Portal</h1>
          <p>
            As a member of the Strata Committee, I manage the building’s common areas, maintenance, and insurance in line with the
            <a href="https://classic.austlii.edu.au/au/legis/nsw/consol_act/ssma2015242/" target="_blank" rel="noopener noreferrer">Strata Schemes Management Act (2015)</a>.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section style={styles.section}>
        <div id="maintenance" style={styles.card}>
          <h2>Maintenance of Common Areas</h2>
          <img src="/assets/maintenance.jpg" alt="Maintenance" style={styles.image} />
          <p>
            The Strata Committee is responsible for maintaining common areas like hallways, elevators, gardens, and roofs. Regular maintenance is required to ensure safety.
          </p>
          <p>
            The Committee plans to:
            <ul>
              <li>Conduct annual inspections of common areas.</li>
              <li>Repair damages like leaks, broken fixtures, and elevator malfunctions.</li>
              <li>Clean communal spaces to maintain hygiene and safety.</li>
            </ul>
          </p>
          <p>
            The capital works and administration funds will cover these costs, with annual adjustments based on maintenance requirements.
          </p>
        </div>

        <div id="levies" style={styles.card}>
          <h2>Levies and Fund Management</h2>
          <img src="/assets/levies.jpg" alt="Levies" style={styles.image} />
          <p>
            Owners contribute to the <strong>Administration Fund</strong> and <strong>Capital Works Fund</strong> to cover ongoing maintenance, repairs, and long-term improvements.
          </p>
          <p>
            The Administration Fund handles day-to-day operational expenses like cleaning, security, and management. The Capital Works Fund covers large-scale repairs and renovations.
          </p>
          <p>
            The Committee ensures transparency and accountability in managing these funds, providing clear financial reports and regular audits.
          </p>
        </div>

        <div id="committee" style={styles.card}>
          <h2>Committee Responsibilities</h2>
          <img src="/assets/committee.jpg" alt="Committee" style={styles.image} />
          <p>
            The Strata Committee manages the body corporate, ensuring the building’s operations run smoothly. The Committee is composed of:
            <ul>
              <li><strong>Treasurer</strong> – Manages finances and levy collection.</li>
              <li><strong>Secretary</strong> – Handles communications and meeting records.</li>
              <li><strong>Chairperson</strong> – Leads meetings and implements decisions.</li>
              <li><strong>Other Members</strong> – Contribute to decision-making.</li>
            </ul>
          </p>
        </div>

        <div id="notices" style={styles.card}>
          <h2>Owner Notices</h2>
          <img src="/assets/notices.jpg" alt="Notices" style={styles.image} />
          <p>
            Maintaining clear communication with owners is essential. Notices are sent about:
            <ul>
              <li>Upcoming meetings and events.</li>
              <li>Changes in levies or funds.</li>
              <li>Maintenance schedules and by-law updates.</li>
            </ul>
          </p>
          <p>
            All notices are posted here, and owners will be notified via email about urgent updates.
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <p>Contact the Strata Committee: <a href="mailto:info@stratacorp.com">info@stratacorp.com</a></p>
      </footer>
    </main>
  );
}

// Simple inline styles for layout
const styles = {
  header: {
    backgroundColor: '#f0f4f8',
    padding: '20px',
    textAlign: 'center',
  },
  navbar: {
    marginBottom: '20px',
  },
  navList: {
    listStyleType: 'none',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  headerContent: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  headerImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '600',
    marginTop: '20px',
  },
  section: {
    padding: '40px 20px',
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: '20px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: 'auto',
    marginBottom: '20px',
  },
  footer: {
    backgroundColor: '#2a2a2a',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
    marginTop: '40px',
  },
};