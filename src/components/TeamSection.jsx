import React from 'react';
import { motion } from 'framer-motion';

const TeamSection = ({ team }) => {
  return (
    <section id="equipe" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Quem somos</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Time de estudantes de elite das melhores universidades do mundo, unidos pela paixão por resolver problemas complexos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="gradient-card rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-sky-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 shadow-md">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
              <p className="text-blue-600 font-semibold mb-1">{member.role}</p>
              <p className="text-gray-600 text-sm mb-2">{member.institution}</p>
              <p className="text-gray-500 text-sm">{member.specialty}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;