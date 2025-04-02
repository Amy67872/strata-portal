// force update

export default function Home() {
    return (
      <main className="min-h-screen bg-gray-50 text-gray-800 px-6 py-10 font-sans">
        <header className="text-center mb-10">
          <img
            src="/assets/building.jpg"
            alt="Our Building"
            className="rounded-xl mx-auto w-full max-w-4xl shadow-md mb-6"
          />
          <h1 className="text-4xl font-bold mb-3">Welcome to the NEW Strata Portal</h1>
          <p className="text-lg max-w-2xl mx-auto">
            As a member of our building's Strata Committee, I manage day-to-day operations in line with the
            <a
              href="https://classic.austlii.edu.au/au/legis/nsw/consol_act/ssma2015242/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline mx-1"
            >
              Strata Schemes Management Act (2015)
            </a>.
          </p>
        </header>
  
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <img
              src="/assets/levies.jpg"
              alt="Levies"
              className="rounded-lg w-full mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Levy Contributions</h2>
            <p>
              Owners contribute to the <strong>Administration Fund</strong> and <strong>Capital Works Fund</strong> to support
              ongoing expenses like repairs, insurance, and upgrades. This section helps monitor and update levy records.
            </p>
          </div>
  
          <div className="bg-white p-6 rounded-xl shadow-md">
            <img
              src="/assets/maintenance.jpg"
              alt="Maintenance"
              className="rounded-lg w-full mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Maintenance Requests</h2>
            <p>
              Stay on top of building repairs and requests from lot owners. Use this area to track issues, assign tasks,
              and confirm completions.
            </p>
          </div>
  
          <div className="bg-white p-6 rounded-xl shadow-md">
            <img
              src="/assets/committee.jpg"
              alt="Committee"
              className="rounded-lg w-full mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Committee Documents</h2>
            <p>
              Access minutes from meetings, upcoming agendas, and voting decisions. Keep all owners informed and aligned
              with our responsibilities.
            </p>
          </div>
  
          <div className="bg-white p-6 rounded-xl shadow-md">
            <img
              src="/assets/notices.jpg"
              alt="Notices"
              className="rounded-lg w-full mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Owner Notices</h2>
            <p>
              Share announcements, updates, and by-law changes with all lot owners. Transparency helps maintain a strong,
              cooperative community.
            </p>
          </div>
        </section>
      </main>
    );
  }