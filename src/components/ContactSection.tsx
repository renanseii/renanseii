import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Send,
  Copy,
  Check,
  MessageCircle,
} from 'lucide-react';
import { Language, resumeData } from '../data/resumeData';

interface ContactSectionProps {
  language: Language;
  onCopyText: (text: string, label: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  language,
  onCopyText,
}) => {
  const isPt = language === 'pt';
  const { personal } = resumeData;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<{
    name: string;
    email: string;
    company: string;
    message: string;
    date: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    const newMsg = {
      name: formState.name,
      email: formState.email,
      company: formState.company || '',
      message: formState.message,
      date: new Date().toLocaleDateString(isPt ? 'pt-BR' : 'en-US'),
    };

    setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
        stored.push(newMsg);
        localStorage.setItem('portfolio_messages', JSON.stringify(stored));
      } catch {
        // Fallback
      }
      setSubmittedMessage(newMsg);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 300);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      isPt
        ? `Olá Emerson! Meu nome é ${formState.name || 'um visitante do seu portfólio'}${
            formState.company ? ` da ${formState.company}` : ''
          }.${formState.message ? `\n\nMensagem: ${formState.message}` : ' Gostaria de conversar sobre oportunidades em Business Intelligence e Power Platform.'}`
        : `Hello Emerson! My name is ${formState.name || 'a visitor from your portfolio'}${
            formState.company ? ` from ${formState.company}` : ''
          }.${formState.message ? `\n\nMessage: ${formState.message}` : ' I would like to connect regarding opportunities in Business Intelligence and Power Platform.'}`
    );
    window.open(`https://wa.me/${personal.phoneRaw}?text=${text}`, '_blank');
  };

  const submittedWhatsAppUrl = submittedMessage
    ? `https://wa.me/${personal.phoneRaw}?text=${encodeURIComponent(
        isPt
          ? `Olá Emerson! Sou ${submittedMessage.name}${
              submittedMessage.company ? ` da ${submittedMessage.company}` : ''
            }.\n\nMensagem enviada pelo seu portfólio:\n"${submittedMessage.message}"\n\nE-mail para resposta: ${submittedMessage.email}`
          : `Hello Emerson! I am ${submittedMessage.name}${
              submittedMessage.company ? ` from ${submittedMessage.company}` : ''
            }.\n\nMessage sent from your portfolio:\n"${submittedMessage.message}"\n\nReply email: ${submittedMessage.email}`
      )}`
    : '';

  const gmailWebUrl = submittedMessage
    ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        personal.email
      )}&su=${encodeURIComponent(
        `[Contato Portfólio] ${submittedMessage.name} - ${submittedMessage.company || 'Oportunidade BI'}`
      )}&body=${encodeURIComponent(
        `Nome: ${submittedMessage.name}\nEmail: ${submittedMessage.email}\nEmpresa: ${submittedMessage.company}\n\nMensagem:\n${submittedMessage.message}`
      )}`
    : '';

  return (
    <section id="contact" className="border-t border-[#6c6aab]/15 bg-white/70 py-16 sm:py-20 backdrop-blur-xs">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-[#6c6aab] uppercase">
            {isPt ? 'Canais de Conexão' : 'Direct Connection'}
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#2d2b52] sm:text-3xl">
            {isPt ? 'Vamos Conversar sobre Projetos & Oportunidades?' : "Let's Connect & Discuss Opportunities"}
          </h2>
          <p className="mt-3 text-sm text-[#4a4768]">
            {isPt
              ? 'Interessado em soluções analíticas, otimização de pipelines de dados ou automação de processos? Envie uma mensagem pelo formulário, converse diretamente no WhatsApp ou utilize os contatos ao lado.'
              : 'Interested in analytical solutions, data pipeline engineering, or process automation? Send a message via the form below, chat directly on WhatsApp, or reach out using the verified contact details.'}
          </p>
        </div>

        {/* 2 Column: Form + Direct Contact Cards */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left Column: Interactive Contact Form (Col 7) */}
          <div className="rounded-2xl border border-[#6c6aab]/20 bg-white p-6 shadow-sm sm:p-8 lg:col-span-7">
            <h3 className="text-lg font-bold text-[#2d2b52]">
              {isPt ? 'Enviar Mensagem Direta' : 'Send Direct Message'}
            </h3>

            {submitted && submittedMessage ? (
              <div className="mt-6 rounded-xl border border-[#6c6aab]/30 bg-[#f5f5ff] p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#6c6aab] text-white shadow-xs">
                  <Check className="h-6 w-6" />
                </div>
                <h4 className="mt-3 text-base font-bold text-[#2d2b52]">
                  {isPt ? 'Mensagem Registrada com Sucesso!' : 'Message Recorded Successfully!'}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[#4a4768]">
                  {isPt
                    ? `Obrigado pelo contato, ${submittedMessage.name}! Para envio instantâneo sem depender de clientes locais, você pode abrir diretamente no WhatsApp ou no Gmail Web abaixo:`
                    : `Thank you for reaching out, ${submittedMessage.name}! For instant dispatch without relying on local email clients, you can open directly via WhatsApp or Web Gmail below:`}
                </p>

                {/* Submitted summary box */}
                <div className="mt-4 rounded-lg bg-white p-3.5 text-left text-xs border border-[#6c6aab]/15 space-y-1">
                  <div className="flex justify-between text-[#6c6aab] font-medium text-[11px]">
                    <span>{submittedMessage.email}</span>
                    <span>{submittedMessage.company || (isPt ? 'Empresa não informada' : 'No company')}</span>
                  </div>
                  <p className="text-[#2d2b52] font-normal italic pt-1 border-t border-[#6c6aab]/10">
                    "{submittedMessage.message}"
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap justify-center gap-3">
                  <a
                    href={submittedWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-[#20ba59] cursor-pointer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>{isPt ? 'Enviar no WhatsApp' : 'Send via WhatsApp'}</span>
                  </a>

                  <a
                    href={gmailWebUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-[#EA4335]/30 bg-[#EA4335]/10 px-4 py-2 text-xs font-semibold text-[#EA4335] shadow-xs hover:bg-[#EA4335]/20 cursor-pointer"
                    title={isPt ? 'Abrir cópia no Gmail Web (Navegador)' : 'Open in Gmail Web'}
                  >
                    <Mail className="h-4 w-4 text-[#EA4335]" />
                    <span>{isPt ? 'Abrir no Gmail Web' : 'Open in Web Gmail'}</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onCopyText(personal.phone, isPt ? 'Telefone copiado!' : 'Phone copied!')}
                    className="flex items-center gap-2 rounded-lg border border-[#6c6aab] bg-white px-4 py-2 text-xs font-semibold text-[#6c6aab] shadow-xs hover:bg-[#6c6aab]/10 cursor-pointer"
                  >
                    <Copy className="h-4 w-4" />
                    <span>{isPt ? 'Copiar Telefone' : 'Copy Phone'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setSubmittedMessage(null);
                      setFormState({ name: '', email: '', company: '', message: '' });
                    }}
                    className="rounded-lg bg-[#6c6aab] px-4 py-2 text-xs font-semibold text-white hover:bg-[#5b5996] cursor-pointer"
                  >
                    {isPt ? 'Enviar Outra Mensagem' : 'Send Another Message'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-[#2d2b52]">
                      {isPt ? 'Seu Nome *' : 'Your Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder={isPt ? 'Ex: Carlos Silva' : 'e.g. John Doe'}
                      className="mt-1 w-full rounded-lg border border-[#6c6aab]/25 bg-[#f5f5ff]/40 px-3.5 py-2 text-sm text-[#2d2b52] placeholder-[#6c6aab]/50 focus:border-[#6c6aab] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#6c6aab]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2d2b52]">
                      {isPt ? 'Seu E-mail *' : 'Your Email *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="nome@empresa.com"
                      className="mt-1 w-full rounded-lg border border-[#6c6aab]/25 bg-[#f5f5ff]/40 px-3.5 py-2 text-sm text-[#2d2b52] placeholder-[#6c6aab]/50 focus:border-[#6c6aab] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#6c6aab]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2d2b52]">
                    {isPt ? 'Empresa ou Projeto' : 'Company or Project'}
                  </label>
                  <input
                    type="text"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    placeholder={isPt ? 'Ex: Ajinomoto / Projeto BI' : 'e.g. Enterprise BI project'}
                    className="mt-1 w-full rounded-lg border border-[#6c6aab]/25 bg-[#f5f5ff]/40 px-3.5 py-2 text-sm text-[#2d2b52] placeholder-[#6c6aab]/50 focus:border-[#6c6aab] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#6c6aab]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2d2b52]">
                    {isPt ? 'Mensagem *' : 'Message *'}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder={
                      isPt
                        ? 'Descreva a oportunidade, desafio de engenharia de dados ou projeto...'
                        : 'Describe the opportunity, data challenge, or project...'
                    }
                    className="mt-1 w-full rounded-lg border border-[#6c6aab]/25 bg-[#f5f5ff]/40 px-3.5 py-2 text-sm text-[#2d2b52] placeholder-[#6c6aab]/50 focus:border-[#6c6aab] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#6c6aab]"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 rounded-lg bg-[#6c6aab] px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition-all hover:bg-[#5b5996] active:scale-98 sm:text-sm cursor-pointer disabled:opacity-60"
                  >
                    <Send className="h-4 w-4" />
                    <span>
                      {isSubmitting
                        ? (isPt ? 'Enviando...' : 'Sending...')
                        : (isPt ? 'Enviar Mensagem' : 'Send Message')}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="flex items-center gap-2 rounded-lg border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-2.5 text-xs font-semibold text-[#128C7E] transition-all hover:bg-[#25D366]/20 active:scale-98 sm:text-sm cursor-pointer"
                    title={isPt ? 'Enviar mensagem direta pelo WhatsApp' : 'Send message via WhatsApp'}
                  >
                    <MessageCircle className="h-4 w-4 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onCopyText(personal.phone, isPt ? 'Telefone copiado!' : 'Phone copied!')}
                    className="flex items-center gap-2 rounded-lg border border-[#6c6aab]/30 bg-white px-4 py-2.5 text-xs font-semibold text-[#6c6aab] shadow-xs transition-all hover:bg-[#6c6aab]/10 active:scale-98 sm:text-sm cursor-pointer"
                    title={isPt ? 'Clique para copiar telefone' : 'Click to copy phone'}
                  >
                    <Copy className="h-4 w-4" />
                    <span>{isPt ? 'Copiar Telefone' : 'Copy Phone'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Verified Contact Information & Quick Actions (Col 5) */}
          <div className="space-y-4 lg:col-span-5">
            {/* Email Card */}
            <div className="flex items-center justify-between rounded-xl border border-[#6c6aab]/20 bg-white p-5 shadow-xs">
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6c6aab]/10 text-[#6c6aab]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-[#6c6aab]">
                    {isPt ? 'E-mail Principal' : 'Primary Email'}
                  </span>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-sm font-bold text-[#2d2b52] hover:underline"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onCopyText(personal.email, isPt ? 'E-mail copiado!' : 'Email copied!')}
                className="rounded-lg p-2 text-[#6c6aab] hover:bg-[#6c6aab]/10 hover:text-[#2d2b52] transition-colors cursor-pointer"
                title={isPt ? 'Copiar e-mail' : 'Copy email'}
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="flex items-center justify-between rounded-xl border border-[#6c6aab]/20 bg-white p-5 shadow-xs">
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/15 text-[#128C7E]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-[#6c6aab]">
                    {isPt ? 'Telefone & WhatsApp' : 'Phone & WhatsApp'}
                  </span>
                  <a
                    href={`https://wa.me/${personal.phoneRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#2d2b52] hover:underline cursor-pointer"
                  >
                    +55 {personal.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <a
                  href={`https://wa.me/${personal.phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-[#25D366] hover:bg-[#25D366]/10 transition-colors cursor-pointer"
                  title={isPt ? 'Conversar no WhatsApp' : 'Chat on WhatsApp'}
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
                <button
                  type="button"
                  onClick={() => onCopyText(personal.phone, isPt ? 'Telefone copiado!' : 'Phone copied!')}
                  className="rounded-lg p-2 text-[#6c6aab] hover:bg-[#6c6aab]/10 hover:text-[#2d2b52] transition-colors cursor-pointer"
                  title={isPt ? 'Copiar telefone' : 'Copy phone'}
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="flex items-center justify-between rounded-xl border border-[#6c6aab]/20 bg-white p-5 shadow-xs">
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0A66C2]/10 text-[#0A66C2]">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-[#6c6aab]">
                    LinkedIn
                  </span>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#2d2b52] hover:underline"
                  >
                    {personal.linkedinDisplay}
                  </a>
                </div>
              </div>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-[#6c6aab] hover:bg-[#6c6aab]/10 hover:text-[#2d2b52] transition-colors"
              >
                <Send className="h-4 w-4" />
              </a>
            </div>

            {/* Location Card */}
            <div className="flex items-center gap-3.5 rounded-xl border border-[#6c6aab]/20 bg-[#f5f5ff] p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6c6aab]/10 text-[#6c6aab]">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-[#6c6aab]">
                  {isPt ? 'Localização' : 'Location'}
                </span>
                <span className="text-sm font-bold text-[#2d2b52]">
                  {personal.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
