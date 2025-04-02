// force update

export default function Home() {
  return (
    <main>
      {/* Header Section */}
      <header>
        <h1>Welcome to the Strata Management Portal</h1>
        <p>
          As a member of the Strata Committee, you help manage the building’s maintenance, levies, and insurance
          in line with the <a href="https://classic.austlii.edu.au/au/legis/nsw/consol_act/ssma2015242/" target="_blank" rel="noopener noreferrer">Strata Schemes Management Act (2015)</a>.
        </p>
      </header>

      {/* Main Sections */}
      <section>
        {/* Maintenance of Common Areas Section */}
        <div>
          <h2>Maintenance of Common Areas</h2>
          <img src="/assets/maintenance.jpg" alt="Maintenance of Common Areas" />
          <p>
            The Strata Committee is responsible for maintaining all common areas, including hallways, elevators, and gardens.
            Annual inspections are conducted to ensure safety and longevity. Regular cleaning schedules are also in place.
          </p>
          <ul>
            <li>Annual inspections of all common areas.</li>
            <li>Repairs and maintenance for damaged areas.</li>
            <li>Regular cleaning of shared spaces to ensure hygiene.</li>
          </ul>
        </div>

        {/* Levies and Fund Management Section */}
        <div>
          <h2>Levies and Fund Management</h2>
          <img src="/assets/levies.jpg" alt="Levies and Fund Management" />
          <p>
            Owners contribute to the Administration Fund and Capital Works Fund. These funds are used to cover repairs,
            insurance, and ongoing maintenance for the building’s common areas.
          </p>
          <ul>
            <li>Administration Fund: Covers ongoing expenses (e.g., cleaning, security, management fees).</li>
            <li>Capital Works Fund: Reserved for significant repairs or upgrades (e.g., roof replacement, elevator overhaul).</li>
          </ul>
        </div>

        {/* Committee Responsibilities Section */}
        <div>
          <h2>Committee Responsibilities</h2>
          <img src="/assets/committee.jpg" alt="Committee Responsibilities" />
          <p>
            The Strata Committee is made up of elected members who handle decisions about building maintenance, fund allocation,
            and communication with owners. Members can serve in roles such as Treasurer, Secretary, and Chairperson.
          </p>
        </div>

        {/* Owner Notices Section */}
        <div>
          <h2>Owner Notices</h2>
          <img src="/assets/notices.jpg" alt="Owner Notices" />
          <p>
            Notices will be shared to keep all owners informed. This includes updates on building maintenance, levy changes,
            and upcoming meetings.
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <p>For inquiries, contact the Strata Committee at <a href="mailto:info@stratacorp.com">info@stratacorp.com</a>.</p>
      </footer>
    </main>
  );
}