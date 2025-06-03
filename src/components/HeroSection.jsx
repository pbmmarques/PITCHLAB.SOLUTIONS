import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroSection = ({ scrollToSection, ArrowRight }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.2], ['0%', '20%']);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <motion.div
        className="absolute inset-0 gradient-bg opacity-80"
        style={{ y }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="gradient-text">Soluções Inteligentes.</span>
          <br />
          <span className="text-gray-800">Resultados Reais.</span>
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Consultoria moderna focada em transformação digital, eficiência operacional e crescimento sustentável para empresas que querem liderar o futuro.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg pulse-glow"
            onClick={() => scrollToSection('contato')}
          >
            Fale com um Consultor
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg"
            onClick={() => scrollToSection('servicos')}
          >
            Conheça Nossos Serviços
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center pt-1"
        >
          <div className="w-1 h-3 bg-blue-600 rounded-full"></div>
        </motion.div>
      </div>
      
      <div className="absolute top-20 right-10 md:right-20 floating-animation hidden md:block">
        <div className="w-32 h-32 md:w-48 md:h-48 bg-blue-500 opacity-20 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-20 left-10 md:left-20 floating-animation hidden md:block" style={{animationDelay: '2s'}}>
        <div className="w-24 h-24 md:w-36 md:h-36 bg-sky-400 opacity-20 rounded-full blur-lg"></div>
      </div>
    </section>
  );
};

export default HeroSection;