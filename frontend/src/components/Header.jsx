
export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      <div className="text-2xl font-extrabold text-blue-600 tracking-wide">JobBoard</div>
      <nav className="flex items-center space-x-6">
        <a
          href="/"
          className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
        >
          Home
        </a>
        <a
          href="/"
          className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
        >
          Jobs
        </a>
        <a
          href="/"
          className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
        >
          Contact
        </a>
        <button
  onClick={() => window.location.href = '/post-job'}
  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
>
  Post a job
</button>

       
      </nav>
    </header>
  );
}

