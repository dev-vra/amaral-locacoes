
import React from 'react';

interface FooterProps {
  whatsappLink: string;
}

const Footer: React.FC<FooterProps> = ({ whatsappLink }) => {
  return (
    <footer className="bg-slate-950 text-gray-500 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-white/5 pb-12">
          
          <div className="flex flex-col gap-6">
            <img 
              src="https://i.imgur.com/AEuPFPf.png" 
              alt="Amaral Locações" 
              className="h-14 w-auto object-contain self-start"
            />
            <p className="text-sm leading-relaxed max-w-xs">
              Especialistas em locação de maquinário pesado para indústrias e grandes obras. Mais de 19 anos movendo o progresso.
            </p>
          </div>

          <div className="space-y-4">
            <h5 className="text-white font-black uppercase tracking-widest text-xs">Localização MT</h5>
            <p className="text-sm">Rua Rio Branco, nº 105 – Centro</p>
            <p className="text-sm">Rondonópolis - MT | CEP: 78.780-180</p>
          </div>

          <div className="space-y-4">
            <h5 className="text-white font-black uppercase tracking-widest text-xs">Canais Corporativos</h5>
            <div className="flex flex-col gap-2">
              <a href={whatsappLink} className="text-white font-bold hover:text-amaral-yellow transition-colors">(15) 9 9193-9449</a>
              <a href="mailto:financeiro@amarallocacoes.com" className="hover:text-white transition-colors">financeiro@amarallocacoes.com</a>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} AMARAL E FERREIRA LTDA - CNPJ: 08.929.172/0001-56</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#home" className="hover:text-white transition-colors">Início</a>
             <a href="#maquinas" className="hover:text-white transition-colors">Frota 2026</a>
             <a href="#contato" className="hover:text-white transition-colors">Solicitar Orçamento</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
