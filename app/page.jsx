// force update

export default function Home() {
  return (
    <main>
      {/* Header with Navigation */}
      <header style={styles.header}>
        <nav style={styles.navbar}>
          <ul style={styles.navList}>
            <li><a href="#maintenance" style={styles.navLink}>Maintenance</a></li>
            <li><a href="#levies" style={styles.navLink}>Levies</a></li>
            <li><a href="#committee" style={styles.navLink}>Committee</a></li>
            <li><a href="#notices" style={styles.navLink}>Notices</a></li>
          </ul>
        </nav>
        <div style={styles.headerContent}>
          <img
            src="/assets/building.jpg"
            alt="Our Building"
            style={styles.headerImage}
          />
          <h1 style={styles.title}>Welcome to the Strata Management Portal</h1>
          <p style={styles.text}>
            As a member of the Strata Committee, I manage the building’s common areas, maintenance, and insurance in line with the
            <a href="https://classic.austlii.edu.au/au/legis/nsw/consol_act/ssma2015242/" target="_blank" rel="noopener noreferrer" style={styles.link}>Strata Schemes Management Act (2015)</a>.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section style={styles.section}>
        <div id="maintenance" style={styles.card}>
          <h2 style={styles.sectionTitle}>Maintenance of Common Areas</h2>
          <img src="/assets/maintenance.jpg" alt="Maintenance" style={styles.image} />
          <p style={styles.text}>
            The Strata Committee is responsible for maintaining common areas like hallways, elevators, gardens, and roofs. Regular maintenance is required to ensure safety.
          </p>
          <p style={styles.text}>
            The Committee plans to:
            <ul style={styles.list}>
              <li>Conduct annual inspections of common areas.</li>
              <li>Repair damages like leaks, broken fixtures, and elevator malfunctions.</li>
              <li>Clean communal spaces to maintain hygiene and safety.</li>
            </ul>
          </p>
          <p style={styles.text}>
            The capital works and administration funds will cover these costs, with annual adjustments based on maintenance requirements.
          </p>
        </div>

        <div id="levies" style={styles.card}>
          <h2 style={styles.sectionTitle}>Levies and Fund Management</h2>
          <img src="/assets/levies.jpg" alt="Levies" style={styles.image} />
          <p style={styles.text}>
            Owners contribute to the <strong>Administration Fund</strong> and <strong>Capital Works Fund</strong> to cover ongoing maintenance, repairs, and long-term improvements.
          </p>
          <p style={styles.text}>
            The Administration Fund handles day-to-day operational expenses like cleaning, security, and management. The Capital Works Fund covers large-scale repairs and renovations.
          </p>
          <p style={styles.text}>
            The Committee ensures transparency and accountability in managing these funds, providing clear financial reports and regular audits.
          </p>
        </div>

        <div id="committee" style={styles.card}>
          <h2 style={styles.sectionTitle}>Committee Responsibilities</h2>
          <img src="/assets/committee.jpg" alt="Committee" style={styles.image} />
          <p style={styles.text}>
            The Strata Committee manages the body corporate, ensuring the building’s operations run smoothly. The Committee is composed of:
            <ul style={styles.list}>
              <li><strong>Treasurer</strong> – Manages finances and levy collection.</li>
              <li><strong>Secretary</strong> – Handles communications and meeting records.</li>
              <li><strong>Chairperson</strong> – Leads meetings and implements decisions.</li>
              <li><strong>Other Members</strong> – Contribute to decision-making.</li>
            </ul>
          </p>
        </div>

        <div id="notices" style={styles.card}>
          <h2 style={styles.sectionTitle}>Owner Notices</h2>
          <img src="/assets/notices.jpg" alt="Notices" style={styles.image} />
          <p style={styles.text}>
            Maintaining clear communication with owners is essential. Notices are sent about:
            <ul style={styles.list}>
              <li>Upcoming meetings and events.</li>
              <li>Changes in levies or funds.</li>
              <li>Maintenance schedules and by-law updates.</li>
            </ul>
          </p>
          <p style={styles.text}>
            All notices are posted here, and owners will be notified via email about urgent updates.
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>Contact the Strata Committee: <a href="mailto:info@stratacorp.com" style={styles.link}>info@stratacorp.com</a></p>
      </footer>
    </main>
  );
}

// Simple inline styles for layout with darker text
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
  navLink: {
    color: '#000',  // Dark text color for navigation links
    textDecoration: 'none',
    fontWeight: 'bold',
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
    color: '#000',  // Dark text color for title
  },
  text: {
    color: '#000',  // Dark text color for all paragraphs and descriptions
    fontSize: '1rem',
    lineHeight: '1.5',
  },
  link: {
    color: '#0066cc',  // Link color
    textDecoration: 'underline',
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
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#000',
    marginBottom: '10px',
  },
  image: {
    width: '100%',
    height: 'auto',
    marginBottom: '20px',
  },
  list: {
    paddingLeft: '20px',
    color: '#000',
  },
  footer: {
    backgroundColor: '#2a2a2a',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
    marginTop: '40px',
  },
  footerText: {
    fontSize: '1rem',
  },
};