// force update

export default function Home() {
  return (
    <main>
      <header>
        <img
          src="/assets/building.jpg" 
          alt="Our Building"
        />
        <h1>Welcome to Strata Management Portal</h1>
        <p>
          As a member of our building's Strata Committee, I manage day-to-day operations in line with the
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
          <img
            src="/assets/levies.jpg"  
            alt="Levies"
          />
          <h2>Levy Contributions</h2>
          <p>
            Owners contribute to the <strong>Administration Fund</strong> and <strong>Capital Works Fund</strong> to support
            ongoing expenses like repairs, insurance, and upgrades. This section helps monitor and update levy records.
          </p>
        </div>

        <div>
          <img
            src="/assets/maintenance.jpg"  
            alt="Maintenance"
          />
          <h2>Maintenance Requests</h2>
          <p>
            Stay on top of building repairs and requests from lot owners. Use this area to track issues, assign tasks,
            and confirm completions.
          </p>
        </div>

        <div>
          <img
            src="/assets/committee.jpg"  
            alt="Committee"
          />
          <h2>Committee Documents</h2>
          <p>
            Access meetings, upcoming agendas, and voting decisions. Keep all owners informed and aligned
            with our responsibilities.
          </p>
        </div>

        <div>
          <img
            src="/assets/notices.jpg"  
            alt="Notices"
          />
          <h2>Owner Notices</h2>
          <p>
            Share announcements, updates, and by-law changes with all owners. Transparency helps maintain a strong,
            cooperative community.
          </p>
        </div>
      </section>
    </main>
  );
}

