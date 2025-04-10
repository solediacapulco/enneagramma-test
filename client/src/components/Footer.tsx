const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Test Enneagramma. Tutti i diritti riservati.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <span className="sr-only">Privacy</span>
              <span role="img" aria-hidden="true">🔒</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <span className="sr-only">Termini</span>
              <span role="img" aria-hidden="true">📜</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <span className="sr-only">Aiuto</span>
              <span role="img" aria-hidden="true">❓</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
