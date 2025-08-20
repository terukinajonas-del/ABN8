
import React from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-gray-400 hover:text-amber-500 transition-colors">
    <span className="sr-only">Social Media</span>
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 border-t border-slate-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
                <h3 className="text-white text-xl font-bold">ABN8</h3>
                <p className="mt-2 text-sm text-gray-400">Importação e exportação sob medida.</p>
            </div>
            <div>
                <h4 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Institucional</h4>
                <ul className="mt-4 space-y-2">
                    <li><a href="#about" className="text-base text-gray-400 hover:text-white">Quem Somos</a></li>
                    <li><a href="#services" className="text-base text-gray-400 hover:text-white">Serviços</a></li>
                    <li><a href="#contact" className="text-base text-gray-400 hover:text-white">Contato</a></li>
                    <li><a href="#" className="text-base text-gray-400 hover:text-white">Política de Privacidade</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Contato</h4>
                <ul className="mt-4 space-y-2 text-base text-gray-400">
                    <li>(11) 99999-9999</li>
                    <li>contato@abn8.com.br</li>
                    <li>Rua Exemplo, 123, São Paulo - SP</li>
                </ul>
            </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} ABN8. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <SocialIcon href="#">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </SocialIcon>
            <SocialIcon href="#">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 013.45 2.525c.636-.247 1.363-.416 2.427-.465C7.216 2.013 7.57 2 9.685 2h2.63zM12 9.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm0 6a3.75 3.75 0 110-7.5 3.75 3.75 0 010 7.5z" clipRule="evenodd" /></svg>
            </SocialIcon>
             <SocialIcon href="#">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.94 21.03c-.27-.01-.54-.03-.8-.06l-.06-.01c-3.13-.33-6.1-2.31-7.85-4.88-1.33-1.94-2.01-4.2-2.03-6.52-.02-2.43.68-4.78 2.02-6.75 1.57-2.27 3.86-3.96 6.55-4.74.83-.24 1.68-.38 2.53-.4.85-.02 1.7.07 2.53.25.83.17 1.64.44 2.4.8.76.36 1.48.83 2.12 1.39.64.56 1.18 1.2 1.62 1.9.44.7.77 1.46.99 2.26.22.8.33 1.63.33 2.46s-.11 1.66-.33 2.46c-.22.8-.55 1.56-.99 2.26-.44.7-1 1.34-1.62 1.9-.64.56-1.36 1.03-2.12 1.39-.76.36-1.57.63-2.4.8-.83.19-1.68.27-2.53.25zM9.46 9.3c.63-.64 1.67-.65 2.31-.02.64.63.65 1.67.02 2.31s-1.67.65-2.31.02c-.64-.63-.65-1.67-.02-2.31zm4.07 0c.63-.64 1.67-.65 2.31-.02.64.63.65 1.67.02 2.31s-1.67.65-2.31.02c-.64-.63-.65-1.67-.02-2.31z"/></svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
