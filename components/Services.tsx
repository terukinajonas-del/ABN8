
import React from 'react';

// Icon components (could be in separate files)
const GlobeAltIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" /></svg>
);
const ArrowTrendingUpIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.75-.625m3.75.625V3.375" /></svg>
);
const TruckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h2a1 1 0 001-1V7.828a1 1 0 00-.293-.707l-2.828-2.828A1 1 0 009.172 4H4a1 1 0 00-1 1v10h10z" /></svg>
);
const ClipboardDocumentListIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
);
const WrenchScrewdriverIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.472-2.472a3.375 3.375 0 00-4.773-4.773L6.75 5.25l-1.5 1.5 2.472 2.472a3.375 3.375 0 004.773 4.773z" /></svg>
);


const services = [
  {
    icon: <GlobeAltIcon className="h-8 w-8 text-amber-500" />,
    title: 'Importação sob medida',
    description: 'Gerenciamos todo o processo de importação, da busca por fornecedores à nacionalização do produto.'
  },
  {
    icon: <ArrowTrendingUpIcon className="h-8 w-8 text-amber-500" />,
    title: 'Exportação com segurança',
    description: 'Expandimos seus horizontes, levando seu produto ao mercado internacional com agilidade e conformidade.'
  },
  {
    icon: <ClipboardDocumentListIcon className="h-8 w-8 text-amber-500" />,
    title: 'Consultoria estratégica',
    description: 'Análise de viabilidade, planejamento tributário e inteligência de mercado para otimizar suas operações.'
  },
  {
    icon: <TruckIcon className="h-8 w-8 text-amber-500" />,
    title: 'Logística integrada',
    description: 'Otimizamos rotas, fretes e armazenagem para garantir a melhor relação custo-benefício em sua cadeia logística.'
  },
   {
    icon: <WrenchScrewdriverIcon className="h-8 w-8 text-amber-500" />,
    title: 'Soluções personalizadas',
    description: 'Desenvolvemos projetos customizados para segmentos específicos como alimentos, moda, esportes e mais.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wider text-amber-500 uppercase">Nossos Serviços</h2>
          <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Soluções completas para o seu negócio
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Simplificamos o comércio exterior para que você possa focar no crescimento da sua empresa.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-800 p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-slate-700 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
