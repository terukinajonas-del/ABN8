
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="bg-amber-500">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-20 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Pronto para importar ou exportar sem dor de cabeça?
            </h2>
            <p className="mt-4 text-lg text-slate-800">
                Fale agora com um especialista da ABN8 e descubra como reduzir custos e crescer sem burocracia.
            </p>
        </div>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-amber-600 bg-white hover:bg-amber-50 transition-transform transform hover:scale-105"
            >
              Solicitar contato agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
