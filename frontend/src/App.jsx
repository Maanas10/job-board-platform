import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import JobList from './components/JobList';
import JobForm from './components/JobForm';
import Footer from './components/Footer';

function HomePage() {
  return (
    <>
      <Hero />
      <JobList />
      <Footer />
    </>
  );
}

function PostJobPage() {
  return <JobForm />;
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post-job" element={<PostJobPage />} />
      </Routes>
    </Router>
  );
}

export default App;
