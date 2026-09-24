import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Smile,
  HeartHandshake,
  Check,
  Copy,
  Menu,
  X,
  ArrowRight,
  Stethoscope,
  Info,
  ExternalLink,
  Instagram
} from 'lucide-react';

import heroImg from './assets/images/hero_dental_care_1790261513793.jpg';
import aboutImg from './assets/images/about_dental_office_1790261525637.jpg';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);
  const [showVextroInfo, setShowVextroInfo] = useState(false);
  const [selectedService, setSelectedService] = useState('Avaliação odontológica');
  const [formName, setFormName] = useState('');
  const [formTimePreference, setFormTimePreference] = useState('Manhã (08h às 12h)');

  const whatsappNumberRaw = '5591999999999';
  const whatsappDisplay = '(91) 99999-9999';
  const phoneDisplay = '(91) 3333-3333';
  const clinicAddress = 'Av. Exemplo, 100 — Belém, PA';
  const clinicHours = 'Segunda a sexta, 8h às 18h';

  const generateWhatsAppLink = (customText?: string) => {
    const defaultMsg = customText || 'Olá! Gostaria de agendar uma consulta na Sorriso Prime Odontologia.';
    return `https://wa.me/${whatsappNumberRaw}?text=${encodeURIComponent(defaultMsg)}`;
  };

  const handleCopy = (text: string, label: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedPhone(label);
      setTimeout(() => setCopiedPhone(null), 2500);
    }
  };

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${formName || 'um paciente'} e gostaria de agendar uma consulta na Sorriso Prime Odontologia.\n\n• Serviço de interesse: ${selectedService}\n• Preferência de horário: ${formTimePreference}\n\nComo podemos proceder com o agendamento?`;
    window.open(generateWhatsAppLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-sky-100 selection:text-sky-900">
      {/* 0. Top Demonstration Notice Banner (Agency Vextro Model - R$ 197) */}
      <div className="bg-slate-900 text-slate-200 text-xs px-4 py-2 border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-medium text-white">Demonstração Vextro:</span>
            <span className="text-slate-300">Modelo para o Plano Básico de R$ 197</span>
          </div>
          <button
            onClick={() => setShowVextroInfo(true)}
            className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-medium transition-colors cursor-pointer text-xs"
          >
            <Info className="w-3.5 h-3.5" />
            <span>Ver detalhes do plano demonstrativo</span>
          </button>
        </div>
      </div>

      {/* 1. Header / Cabeçalho (Fixed on desktop & adapted for mobile) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-shadow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Zone 1: Brand Title (Strict One-Line Wordmark) */}
          <a
            href="#inicio"
            className="group flex items-center gap-2 text-slate-900 hover:text-sky-600 transition-colors"
          >
            <div className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="leading-tight">
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Sorriso <span className="text-sky-600">Prime</span>
              </span>
              <span className="block text-[11px] font-medium tracking-wide text-slate-600 uppercase">
                Odontologia
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Clean text navigation) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a
              href="#inicio"
              className="hover:text-sky-600 transition-colors py-1"
            >
              Início
            </a>
            <a
              href="#sobre"
              className="hover:text-sky-600 transition-colors py-1"
            >
              Sobre
            </a>
            <a
              href="#servicos"
              className="hover:text-sky-600 transition-colors py-1"
            >
              Serviços
            </a>
            <a
              href="#diferenciais"
              className="hover:text-sky-600 transition-colors py-1"
            >
              Diferenciais
            </a>
            <a
              href="#contato"
              className="hover:text-sky-600 transition-colors py-1"
            >
              Contato
            </a>
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 rounded-lg shadow-sm hover:shadow transition-all duration-150 whitespace-nowrap shrink-0"
            >
              Agendar consulta
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <nav className="flex flex-col space-y-2 text-base font-medium text-slate-700">
              <a
                href="#inicio"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-sky-50 hover:text-sky-600 transition-colors"
              >
                Início
              </a>
              <a
                href="#sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-sky-50 hover:text-sky-600 transition-colors"
              >
                Sobre
              </a>
              <a
                href="#servicos"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-sky-50 hover:text-sky-600 transition-colors"
              >
                Serviços
              </a>
              <a
                href="#diferenciais"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-sky-50 hover:text-sky-600 transition-colors"
              >
                Diferenciais
              </a>
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-sky-50 hover:text-sky-600 transition-colors"
              >
                Contato
              </a>
            </nav>
            <div className="pt-2 border-t border-slate-100">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar pelo WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. Hero Section / Seção inicial */}
      <section id="inicio" className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-sky-50/40 via-white to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Text column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 tracking-wide uppercase">
                <span>Sorriso Prime Odontologia</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>Belém, PA</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.18] text-balance">
                Seu sorriso merece um cuidado especial
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Atendimento odontológico humanizado e profissional para você e sua família, em um ambiente planejado para o seu conforto e bem-estar.
              </p>

              {/* Action buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 whitespace-nowrap"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20" />
                  <span>Agendar pelo WhatsApp</span>
                </a>
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-base font-medium text-slate-700 hover:text-sky-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors whitespace-nowrap"
                >
                  <span>Conhecer nossos serviços</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Trust Indicators (Quiet textual metadata, no pills or fake stats) */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Atendimento com hora marcada</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Ambiente acolhedor e seguro</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Fácil contato via WhatsApp</span>
                </div>
              </div>
            </div>

            {/* Visual Hero Image column (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100 aspect-[16/11] sm:aspect-[4/3] lg:aspect-[16/12]">
                <img
                  src={heroImg}
                  alt="Profissional de odontologia acolhendo paciente na clínica Sorriso Prime"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none"></div>
              </div>

              {/* Discreet floating consultation card */}
              <div className="mt-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900">Horário de funcionamento</p>
                    <p className="text-xs text-slate-500">{clinicHours}</p>
                  </div>
                </div>
                <a
                  href="#contato"
                  className="text-xs font-semibold text-sky-600 hover:text-sky-700 whitespace-nowrap"
                >
                  Ver local &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sobre / About */}
      <section id="sobre" className="py-16 lg:py-20 bg-slate-50/50 border-t border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 aspect-[4/3]">
                <img
                  src={aboutImg}
                  alt="Consultório odontológico moderno e acolhedor da Sorriso Prime"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none"></div>
              </div>
              <p className="mt-3 text-xs text-slate-600 text-center sm:text-left">
                Estrutura pensada para oferecer tranquilidade e cuidado desde o primeiro momento.
              </p>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <div className="text-xs font-semibold text-sky-600 uppercase tracking-wider">
                Sobre a clínica
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-snug">
                Cuidando do seu sorriso com dedicação
              </h2>
              <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                <p>
                  A <strong className="text-slate-900 font-semibold">Sorriso Prime Odontologia</strong> nasceu com o compromisso de proporcionar um atendimento odontológico que une técnica cuidadosa e relacionamento próximo com cada paciente.
                </p>
                <p>
                  Nosso consultório foi estruturado para ser um espaço calmo e higienizado, onde você pode realizar suas consultas e procedimentos com conforto e total transparência.
                </p>
                <p>
                  Acreditamos que a saúde bucal reflete diretamente no seu bem-estar diário e na sua autoestima. Por isso, orientamos com clareza todas as etapas do atendimento para que você tenha a melhor experiência possível.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors"
                >
                  <span>Venha conhecer o nosso espaço</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Serviços / Services */}
      <section id="servicos" className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-center sm:text-left mb-12">
            <div className="text-xs font-semibold text-sky-600 uppercase tracking-wider">
              Nossas especialidades
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
              Serviços para o cuidado do seu sorriso
            </h2>
            <p className="text-base text-slate-600 mt-2">
              Procedimentos essenciais realizados com materiais de alta qualidade e foco no seu conforto.
            </p>
          </div>

          {/* 4 Cards simples */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Avaliação odontológica */}
            <div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Avaliação odontológica
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Exame clínico detalhado para diagnosticar a saúde dos dentes e gengivas, planejando o tratamento ideal para você.
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-slate-100">
                <a
                  href={generateWhatsAppLink('Olá! Gostaria de agendar uma Avaliação Odontológica na Sorriso Prime.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:text-sky-700"
                >
                  <span>Agendar avaliação</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 2: Limpeza e prevenção */}
            <div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Limpeza e prevenção
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Profilaxia profissional e remoção de placa e tártaro para prevenir cáries, gengivite e manter o hálito saudável.
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-slate-100">
                <a
                  href={generateWhatsAppLink('Olá! Gostaria de agendar uma Limpeza e Prevenção na Sorriso Prime.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:text-sky-700"
                >
                  <span>Agendar limpeza</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 3: Clareamento dental */}
            <div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  <Smile className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Clareamento dental
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Técnicas seguras e modernas para devolver a luminosidade natural dos seus dentes de forma harmônica e estética.
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-slate-100">
                <a
                  href={generateWhatsAppLink('Olá! Gostaria de saber mais e agendar Clareamento Dental na Sorriso Prime.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:text-sky-700"
                >
                  <span>Saber sobre clareamento</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 4: Restauração */}
            <div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Restauração
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Recuperação da forma, função mastigatória e estética de dentes danificados por cárie ou fratura com resinas modernas.
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-slate-100">
                <a
                  href={generateWhatsAppLink('Olá! Gostaria de agendar uma consulta para Restauração na Sorriso Prime.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:text-sky-700"
                >
                  <span>Agendar restauração</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Diferenciais / Differentials (3 items) */}
      <section id="diferenciais" className="py-16 lg:py-20 bg-slate-50/70 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-semibold text-sky-600 uppercase tracking-wider">
              Por que nos escolher
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
              Diferenciais do nosso atendimento
            </h2>
            <p className="text-base text-slate-600 mt-2">
              Priorizamos o respeito, o tempo e a tranquilidade de cada pessoa que nos procura.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Item 1: Atendimento humanizado */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5">
                <Smile className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Atendimento humanizado
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ouvimos suas queixas e desejos com empatia e calma, esclarecendo qualquer dúvida antes de qualquer procedimento.
              </p>
            </div>

            {/* Item 2: Ambiente confortável */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Ambiente confortável
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Espaço climatizado, limpo e pensado nos mínimos detalhes para que você relaxe e sinta total segurança na sua consulta.
              </p>
            </div>

            {/* Item 3: Cuidado em cada etapa */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Cuidado em cada etapa
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Acompanhamento atencioso desde o primeiro contato até o pós-atendimento, com orientações precisas para a sua saúde bucal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contato / Contact */}
      <section id="contato" className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-semibold text-sky-600 uppercase tracking-wider">
              Fale com a clínica
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
              Agende sua consulta
            </h2>
            <p className="text-base text-slate-600 mt-2">
              Estamos prontos para atender você. Entre em contato diretamente pelo WhatsApp, ligue para nosso consultório ou envie seus dados abaixo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Contact Information & Channels (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200 space-y-6">
                {/* WhatsApp */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">WhatsApp</p>
                      <p className="text-base font-bold text-slate-900">{whatsappDisplay}</p>
                      <p className="text-xs text-slate-500 mt-0.5">Atendimento ágil para agendamentos</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(whatsappDisplay, 'whatsapp')}
                    className="text-slate-400 hover:text-slate-700 p-1.5 rounded hover:bg-slate-200 transition-colors"
                    title="Copiar número do WhatsApp"
                  >
                    {copiedPhone === 'whatsapp' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Telefone */}
                <div className="flex items-start justify-between gap-4 pt-4 border-t border-slate-200/60">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Telefone Fixo</p>
                      <p className="text-base font-bold text-slate-900">{phoneDisplay}</p>
                      <p className="text-xs text-slate-500 mt-0.5">Recepção do consultório</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(phoneDisplay, 'phone')}
                    className="text-slate-400 hover:text-slate-700 p-1.5 rounded hover:bg-slate-200 transition-colors"
                    title="Copiar número do telefone"
                  >
                    {copiedPhone === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Endereço */}
                <div className="flex items-start gap-3.5 pt-4 border-t border-slate-200/60">
                  <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Endereço</p>
                    <p className="text-sm font-semibold text-slate-900">{clinicAddress}</p>
                    <p className="text-xs text-slate-500 mt-0.5">Localização de fácil acesso e estacionamento próximo</p>
                  </div>
                </div>

                {/* Horário */}
                <div className="flex items-start gap-3.5 pt-4 border-t border-slate-200/60">
                  <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Horário de Atendimento</p>
                    <p className="text-sm font-semibold text-slate-900">{clinicHours}</p>
                    <p className="text-xs text-slate-500 mt-0.5">Atendimento pontual com horário agendado</p>
                  </div>
                </div>
              </div>

              {/* Botão Direto Falar no WhatsApp */}
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-150"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Falar no WhatsApp</span>
              </a>

              {/* Disclaimer obrigatório sobre dados fictícios */}
              <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs leading-relaxed">
                <p className="font-semibold mb-0.5">Aviso de Demonstração:</p>
                <p className="text-amber-800">
                  Os números de telefone, WhatsApp, endereço e horários acima são fictícios e utilizados apenas para demonstrar a estrutura do site.
                </p>
              </div>
            </div>

            {/* Simulated Lead / Quick Booking Form (7 cols) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="border-b border-slate-100 pb-4 mb-6">
                <h3 className="text-lg font-bold text-slate-900">
                  Solicitação Rápida de Agendamento
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Preencha os campos abaixo para iniciar a conversa no WhatsApp já com suas preferências organizadas.
                </p>
              </div>

              <form onSubmit={handleScheduleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Seu nome completo
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Ex: Maria de Souza"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-sm outline-none transition"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Serviço de interesse
                    </label>
                    <select
                      id="service"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-sm outline-none bg-white transition cursor-pointer"
                    >
                      <option value="Avaliação odontológica">Avaliação odontológica</option>
                      <option value="Limpeza e prevenção">Limpeza e prevenção</option>
                      <option value="Clareamento dental">Clareamento dental</option>
                      <option value="Restauração">Restauração</option>
                      <option value="Outro assunto">Outro assunto</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="shift" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Melhor turno para contato
                    </label>
                    <select
                      id="shift"
                      value={formTimePreference}
                      onChange={(e) => setFormTimePreference(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-sm outline-none bg-white transition cursor-pointer"
                    >
                      <option value="Manhã (08h às 12h)">Manhã (08h às 12h)</option>
                      <option value="Tarde (13h às 18h)">Tarde (13h às 18h)</option>
                      <option value="Qualquer horário">Qualquer horário comercial</option>
                    </select>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 rounded-lg shadow-sm transition-colors cursor-pointer"
                  >
                    <span>Enviar solicitação e abrir WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-[11px] text-slate-600 text-center pt-1">
                  Ao clicar, uma mensagem pré-formatada será aberta diretamente no WhatsApp com os dados informados.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Rodapé / Footer */}
      <footer className="mt-auto bg-slate-900 text-slate-400 border-t border-slate-800 text-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800 items-start">
            {/* Brand column */}
            <div className="md:col-span-6 space-y-3">
              <div className="flex items-center gap-2 text-white">
                <div className="w-7 h-7 rounded-md bg-sky-600 flex items-center justify-center text-white">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-lg font-bold text-white tracking-tight">
                  Sorriso Prime Odontologia
                </span>
              </div>
              <p className="text-xs text-slate-400 max-w-md leading-relaxed">
                Atendimento odontológico humanizado e responsável. Cuidando da saúde e da beleza do seu sorriso com total dedicação e respeito.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
                <span>Belém, PA</span>
                <span aria-hidden="true">·</span>
                <span>(91) 99999-9999</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 space-y-3">
              <p className="text-xs font-semibold text-white uppercase tracking-wider">
                Navegação
              </p>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#inicio" className="hover:text-white transition-colors">Início</a>
                </li>
                <li>
                  <a href="#sobre" className="hover:text-white transition-colors">Sobre a clínica</a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-white transition-colors">Nossos serviços</a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-white transition-colors">Contato & Agendamento</a>
                </li>
              </ul>
            </div>

            {/* Social & Contact */}
            <div className="md:col-span-3 space-y-3">
              <p className="text-xs font-semibold text-white uppercase tracking-wider">
                Canais de Contato
              </p>
              <div className="flex flex-col space-y-2 text-xs">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp: {whatsappDisplay}</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Instagram: @sorrisoprime.odonto</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Vextro Agency Attribution & Mandatory Disclaimer */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs">
            <div>
              <p className="text-slate-300 font-medium">
                Site demonstrativo desenvolvido pela <span className="text-sky-400 font-semibold">Vextro</span>
              </p>
              <p className="text-slate-500 text-[11px] mt-0.5">
                Plano Básico de Criação de Sites • R$ 197
              </p>
            </div>

            <div className="max-w-xl text-center md:text-right">
              <p className="text-amber-300/90 text-[11px] leading-relaxed">
                ⚠️ Site demonstrativo — informações, imagens e contatos utilizados neste projeto são fictícios.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button (Brazilian dental standard) */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href={generateWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          aria-label="Agendar pelo WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white/20" />
          <span className="hidden sm:inline-block text-xs font-semibold tracking-wide">
            Falar no WhatsApp
          </span>
        </a>
      </div>

      {/* Vextro Details Modal */}
      {showVextroInfo && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setShowVextroInfo(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-sm">
                V
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  Demonstração Agência Vextro
                </h4>
                <p className="text-xs text-sky-600 font-medium">
                  Plano Básico de Criação de Sites • R$ 197
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Este projeto é um exemplo real do formato entregue no plano essencial de <strong>R$ 197</strong>. Ideal para consultórios, profissionais autônomos e pequenos negócios que precisam de presença online profissional e direta.
            </p>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-2 mb-5 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Página única institucional com navegação por âncoras</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Integração com botões diretos de WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Layout responsivo de alta velocidade para celular, tablet e computador</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Apresentação clara de serviços, diferenciais e informações de contato</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 mb-5">
              ⚠️ Lembramos que todos os dados, marcas e contatos deste projeto são fictícios e utilizados apenas com finalidade demonstrativa.
            </p>

            <button
              onClick={() => setShowVextroInfo(false)}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
            >
              Fechar demonstração
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
