
import React from 'react';

const StatItem: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="text-center">
        <p className="text-4xl lg:text-5xl font-extrabold text-amber-500">{value}</p>
        <p className="mt-1 text-lg font-medium text-gray-300">{label}</p>
    </div>
);

const SocialProof: React.FC = () => {
  return (
    <section id="social-proof" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="bg-slate-900 rounded-lg shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-700">
                <StatItem value="+16" label="anos de mercado" />
                <StatItem value="+100" label="operações internacionais" />
                <StatItem value="Globais" label="Parceiros consolidados" />
            </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-20 text-center">
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                O que nossos clientes dizem
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
                Confiança e resultados que falam por si.
            </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            <div className="bg-slate-700 p-8 rounded-lg shadow-lg">
                <blockquote className="text-lg text-gray-300">
                    “A ABN8 transformou nossa operação de importação. O processo foi transparente, rápido e com uma redução de custos que não esperávamos. São verdadeiros parceiros.”
                </blockquote>
                <footer className="mt-4">
                    <p className="text-base font-medium text-white">João Silva</p>
                    <p className="text-base text-amber-400">CEO, Tech Parts Inc.</p>
                </footer>
            </div>
            <div className="bg-slate-700 p-8 rounded-lg shadow-lg">
                <blockquote className="text-lg text-gray-300">
                    “Exportar parecia um desafio gigante até encontrarmos a ABN8. Eles cuidaram de tudo, desde a documentação até a logística, nos permitindo focar no nosso produto.”
                </blockquote>
                <footer className="mt-4">
                    <p className="text-base font-medium text-white">Maria Oliveira</p>
                    <p className="text-base text-amber-400">Diretora, Vinhos da Serra</p>
                </footer>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
