import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import MethodologySection from '@/components/MethodologySection';
import DifferentialsSection from '@/components/DifferentialsSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import {
  ArrowRight,
  Zap,
  Target,
  Lightbulb,
  Rocket,
  BarChart3,
  Cog,
  Brain,
  Mail,
  Phone,
  Send
} from 'lucide-react';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve."
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Estratégia Empresarial",
      problem: "Falta de direcionamento estratégico",
      solution: "Planejamento estratégico orientado por dados",
      result: "Crescimento sustentável e competitividade"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Transformação Digital",
      problem: "Processos obsoletos e ineficientes",
      solution: "Digitalização inteligente e automação",
      result: "Aumento da produtividade"
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Eficiência Operacional",
      problem: "Desperdícios e gargalos operacionais",
      solution: "Otimização de processos e lean management",
      result: "Redução dos custos operacionais"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Criação de Valor e Inovação",
      problem: "Estagnação e falta de inovação",
      solution: "Metodologias ágeis e design thinking",
      result: "Novos produtos e mercados"
    }
  ];

  const methodology = [
    {
      step: "01",
      title: "Diagnóstico Ágil",
      description: "Análise aprofundada utilizando ferramentas modernas e dados."
    },
    {
      step: "02",
      title: "Sprint Consultivo",
      description: "Desenvolvimento de soluções em ciclos curtos e focados."
    },
    {
      step: "03",
      title: "Implementação Estratégica",
      description: "Execução com acompanhamento contínuo e ajustes flexíveis."
    },
    {
      step: "04",
      title: "Resultados Tangíveis",
      description: "Foco em métricas claras e impacto real no seu negócio."
    }
  ];

  const differentials = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Agilidade com Profundidade",
      description: "Entregas rápidas embasadas em análises robustas."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Orientação por Dados",
      description: "Decisões estratégicas baseadas em evidências e analytics."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Customização Inteligente",
      description: "Soluções adaptadas para os desafios únicos de cada cliente."
    }
  ];

  const team = [
    { name: "Felipe Sanches", role: "Engenharia de Produção", institution: "Politécnica USP", specialty: "Otimização de Processos" },
    { name: "Felipe Lenza", role: "Engenharia Naval", institution: "Politécnica USP", specialty: "Gestão de Projetos" },
    { name: "Francisco Bresser", role: "Ciências Políticas e Economia", institution: "King's College", specialty: "Estratégia e Análise" },
    { name: "Max Nickerson", role: "Engenharia Naval", institution: "Politécnica USP", specialty: "Inovação Tecnológica" },
    { name: "Pedro Marques", role: "Engenharia Civil", institution: "Politécnica USP", specialty: "Gestão Operacional" }
  ];

  const navItems = ['Início', 'Serviços', 'Metodologia', 'Diferenciais', 'Equipe', 'Contato'];

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Toaster />
      <Navbar navItems={navItems} scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} ArrowRight={ArrowRight} />
      <ServicesSection services={services} />
      <MethodologySection methodology={methodology} />
      <DifferentialsSection differentials={differentials} />
      <TeamSection team={team} />
      <ContactSection 
        formData={formData} 
        setFormData={setFormData} 
        handleSubmit={handleSubmit} 
        MailIcon={Mail}
        PhoneIcon={Phone}
        SendIcon={Send}
        ButtonComponent={Button}
      />
      <Footer />
    </div>
  );
};

export default App;