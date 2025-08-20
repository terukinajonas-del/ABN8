
import React from 'react';

const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);


const About: React.FC = () => {
  const differentiators = [
    'Assessoria completa e transparente',
    'Rede global de fornecedores confiáveis',
    'Redução de custos logísticos e tributários',
    'Acompanhamento digital em tempo real',
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h2 className="text-base font-semibold tracking-wider text-amber-500 uppercase">Sobre a ABN8</h2>
            <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Mais de 10 anos de experiência no comércio internacional.
            </p>
            <p className="mt-4 text-lg text-gray-400">
              A ABN8 conecta empresas brasileiras ao mercado global com segurança e agilidade.
              Do desembaraço alfandegário à entrega final, nossa missão é simplificar a importação e exportação, garantindo economia e previsibilidade para o seu negócio.
            </p>
          </div>
          <div className="mt-12 lg:mt-0">
            <dl className="space-y-6">
              {differentiators.map((text, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-white">{text}</dt>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
