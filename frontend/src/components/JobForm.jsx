import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function JobForm({ onJobPosted }) {
  const [form, setForm] = useState({
    title: "", company: "", category: "Design", location: "", description: ""
  });

  const navigate = useNavigate(); // <-- Add this

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/jobs", form);
    setForm({ title: "", company: "", category: "Design", location: "", description: "" });
    if (onJobPosted) onJobPosted(); // optional callback
    navigate('/'); // <-- Redirect to home after post
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow mt-8">
      <h2 className="text-xl mb-4">Post a Job</h2>
      <input name="title" placeholder="Job Title" value={form.title} onChange={handleChange} className="block w-full p-2 mb-2 border rounded" required />
      <input name="company" placeholder="Company Name" value={form.company} onChange={handleChange} className="block w-full p-2 mb-2 border rounded"  required/>
      <select name="category" value={form.category} onChange={handleChange} className="block w-full p-2 mb-2 border rounded">
        <option>Design</option>
        <option>Development</option>
        <option>Marketing</option>
      </select>
      <input name="location" placeholder="Location" value={form.location} onChange={handleChange} className="block w-full p-2 mb-2 border rounded" required/>
      <textarea name="description" placeholder="Job Description" value={form.description} onChange={handleChange} className="block w-full p-2 mb-2 border rounded" required />
      <button className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
}
