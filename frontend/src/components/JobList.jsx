import { useEffect, useState } from "react";
import axios from "axios";

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    axios.get("http://localhost:5000/jobs").then(res => setJobs(res.data));
  }, []);

  const filteredJobs = filter === "All" ? jobs : jobs.filter(job => job.category === filter);

  return (
    <section className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800"> Job Listings</h2>

      <div className="mb-6 flex flex-wrap gap-3">
        {["All", "Design", "Development", "Marketing"].map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border transition-all duration-300 
              ${filter === cat ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 hover:bg-blue-50"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map((job, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{job.title}</h3>
            <p className="text-gray-600 mb-2">{job.company}</p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-3 inline-block bg-gray-100 px-3 py-1 rounded-full">{job.category}</span>
              <span className="inline-block bg-gray-100 px-3 py-1 rounded-full">{job.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
