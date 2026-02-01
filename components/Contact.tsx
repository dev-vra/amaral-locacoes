
import React, { useState } from 'react';

interface ContactProps {
  whatsappLink: string;
}

const Contact: React.FC<ContactProps> = ({ whatsappLink }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    machine: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá Gislene, meu nome é ${formData.name}. Interesse em: ${formData.machine}. Mensagem: ${formData.message}`;
    window.open(`https://wa.me/5515991939449?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Contato e <span className="text-amaral-yellow">Localização</span></h2>
            
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-amaral-yellow flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-location-dot text-2xl text-slate-900"></i>
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase tracking-widest text-sm mb-1">Sede Administrativa</h4>
                  <p className="text-gray-600">Rua Rio Branco, nº 105 – Centro</p>
                  <p className="text-gray-600">Rondonópolis - MT | CEP: 78.780-180</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-amaral-yellow flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-phone text-2xl text-slate-900"></i>
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase tracking-widest text-sm mb-1">Canais de Atendimento</h4>
                  <p className="text-gray-600 font-bold">WhatsApp: (15) 9 9193-9449</p>
                  <p className="text-gray-600">financeiro@amarallocacoes.com</p>
                </div>
              </div>

              <div className="bg-slate-50 p-6 border-l-4 border-amaral-yellow">
                <p className="text-sm font-bold text-slate-900 uppercase mb-2 italic">Prontos para ser seu parceiro estratégico</p>
                <p className="text-xs text-gray-500">Entre em contato e solicite um orçamento personalizado para o seu próximo projeto.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-8 md:p-12 shadow-2xl">
            <h4 className="text-2xl font-black text-white mb-8 uppercase tracking-widest border-b border-white/10 pb-4">Orçamento Express</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input 
                type="text" 
                placeholder="NOME COMPLETO"
                className="w-full bg-white/5 border border-white/10 p-4 text-white outline-none focus:border-amaral-yellow transition-all"
                required
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
              <input 
                type="tel" 
                placeholder="WHATSAPP (DDD)"
                className="w-full bg-white/5 border border-white/10 p-4 text-white outline-none focus:border-amaral-yellow transition-all"
                required
              />
              <select 
                className="w-full bg-white/5 border border-white/10 p-4 text-gray-400 outline-none focus:border-amaral-yellow transition-all"
                onChange={e => setFormData({...formData, machine: e.target.value})}
              >
                <option value="">EQUIPAMENTO DE INTERESSE</option>
                <option value="Empilhadeira">EMPILHADEIRAS</option>
                <option value="Escavadeira">ESCAVADEIRAS HIDRÁULICAS</option>
                <option value="Pá Carregadeira">PÁS CARREGADEIRAS</option>
                <option value="Mini Retro">MINI RETO ESCAVADEIRAS</option>
              </select>
              <textarea 
                placeholder="DETALHES DO PROJETO"
                rows={3}
                className="w-full bg-white/5 border border-white/10 p-4 text-white outline-none focus:border-amaral-yellow transition-all"
                onChange={e => setFormData({...formData, message: e.target.value})}
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-amaral-yellow hover:bg-white text-slate-900 font-black py-5 uppercase tracking-widest transition-all shadow-lg"
              >
                Enviar para Gislene
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
