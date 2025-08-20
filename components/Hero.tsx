
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center text-center text-white">
      <div className="p-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4">
          Importação e exportação sob medida, com <span className="text-amber-400">transparência</span>, <span className="text-amber-400">segurança</span> e <span className="text-amber-400">redução de custos.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Cresça sua empresa sem burocracia. Cuidamos de todo o processo — do fornecedor internacional até a sua porta.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-amber-500 text-slate-900 hover:bg-amber-400 font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg"
          >
            Fale com um especialista
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto bg-transparent border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900 font-bold py-3 px-8 rounded-lg text-lg transition-colors shadow-lg"
          >
            Conheça nossos serviços
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
