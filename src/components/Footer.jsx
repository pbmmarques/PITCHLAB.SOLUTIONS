import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-3xl font-bold gradient-text mb-4">
            Pitchlab Solutions
          </div>
          <p className="text-gray-400 mb-8">
            Soluções Inteligentes. Resultados Reais.
          </p>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Pitchlab Solutions. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;