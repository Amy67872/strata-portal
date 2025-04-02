// force update

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 px-6 py-10 font-sans">
      <header className="text-center mb-10">
        <img
          src="/assets/building.jpg" 
          alt="Our Building"
        />
        <h1>Welcome to the Strata Management Portal</h1>
        <p>
          As a member of the Strata Committee, I manage the building’s common areas, maintenance, and insurance in line with the
          <a
            href="https://classic.austlii.edu.au/au/legis/nsw/consol_act/ssma2015242/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Strata Schemes Management Act (2015)
          </a>.
        </p>
      </header>

      <section>
        <div>
          <h2>Maintenance of Common Areas</h2>
          <img
            src="/assets/maintenance.jpg"
            alt="Maintenance of Common Areas"
          />
          <p>
            The Strata Committee is responsible for maintaining common areas of the building, which includes areas like hallways,
            elevators, gardens, and roofs. Regular maintenance is needed to ensure the safety and well-being of all residents.
          </p>
          <p>
            For this, a detailed plan will be created, focusing on the following:
            <ul>
              <li>Annual inspections of all common areas to identify wear and tear.</li>
              <li>Repairs of common area damages, such as leaks, broken fixtures, and damaged elevators.</li>
              <li>Regular cleaning of communal spaces, ensuring safety and hygiene.</li>
            </ul>
          </p>
          <p>
            The Committee will allocate a portion of the capital works fund and the administration fund to cover maintenance costs.
            The levy contributions will be reviewed and adjusted yearly based on the estimated costs of maintenance and repairs.
          </p>
        </div>

        <div>
          <h2>Levies and Fund Management</h2>
          <img
            src="/assets/levies.jpg"
            alt="Levies and Fund Management"
          />
          <p>
            Owners contribute to two primary funds: the <strong>Administration Fund</strong> and the <strong>Capital Works Fund</strong>.
            These funds cover ongoing maintenance expenses, repairs, insurance, and long-term capital improvements.
          </p>
          <p>
            The Administration Fund covers day-to-day operational expenses, such as cleaning, security, and management fees. The Capital Works Fund
            is reserved for significant repairs and renovations, such as replacing roofs or upgrading elevators.
          </p>
          <p>
            The Committee will ensure these funds are managed responsibly, with clear records and reports provided to all owners.
            Regular audits and financial reviews will be conducted to ensure that the funds are used properly.
          </p>
        </div>

        <div>
          <h2>Committee Responsibilities</h2>
          <img
            src="/assets/committee.jpg"
            alt="Strata Committee"
          />
          <p>
            The Strata Committee is responsible for managing the body corporate, including overseeing the collection of levies, managing maintenance,
            and ensuring that all legal requirements are met. The Committee consists of elected owners who may serve in the following roles:
            <ul>
              <li><strong>Treasurer</strong> – Manages the finances and ensures levy collection.</li>
              <li><strong>Secretary</strong> – Handles communications and meeting records.</li>
              <li><strong>Chairperson</strong> – Leads meetings and ensures the Committee's decisions are implemented.</li>
              <li><strong>Other Members</strong> – Contribute to decision-making and provide support to the Committee.</li>
            </ul>
          </p>
          <p>
            The Committee works closely with professional managers, contractors, and service providers to ensure that the building runs smoothly.
          </p>
        </div>

        <div>
          <h2>Owner Notices</h2>
          <img
            src="/assets/notices.jpg"
            alt="Owner Notices"
          />
          <p>
            A key aspect of effective strata management is maintaining clear communication with owners. The Committee uses notices to update owners
            on important matters, such as upcoming meetings, levy changes, maintenance schedules, and by-law modifications.
          </p>
          <p>
            All notices will be posted on this portal, and owners will be notified via email about any urgent updates. This ensures transparency
            and keeps all owners informed about the management of the building.
          </p>
        </div>
      </section>
    </main>
  );
}