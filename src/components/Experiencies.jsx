import React from 'react';
import { motion } from 'framer-motion';
import CrianzaSanaCuyo from '../assets/CrianzaSanaCuyo.jpg';
import soyHenry from '../assets/henryok_logo.jpeg';
import swagelok from '../assets/swagelok_logo.jpeg';
import bonafide from '../assets/bonafidesaic_logo.jpeg';


const experiences = [
  {
    img: CrianzaSanaCuyo,
    title: 'Directora regional',
    company: 'Crianza Sana Cuyo · Jornada parcial',
    duration: 'mar. 2023 - actualidad · 1 año 3 meses',
    location: 'Mendoza, Argentina',
    description: 'Asistencia técnica legal a personas víctimas de falsas denuncias, obstrucción de vínculo parental, impedimento de contacto.',
    skills: 'gestión de proyectos, adaptabilidad, metodologías ágiles, ética profesional, resolución de conflictos, comunicación efectiva, escucha activa',
  },
  
  {
    img: soyHenry,
    title: 'Full Stack Developer',
    company: 'PinkPanther - indumentaria deportiva · Profesional independiente',
    duration: 'may. 2024 - may. 2024 · 1 mes',
    location: 'Godoy Cruz, Mendoza, Argentina · En remoto',
    description: 'E-commerce para un emprendimiento de ropa deportiva.',
    skills: 'desarrollo front end y back end, programación orientada a objetos (POO)',
  },

  {
    img: swagelok,
    title: 'Jefa de operaciones',
    company: 'Swagelok · Jornada completa',
    duration: 'abr. 2019 - ago. 2022 · 3 años 5 meses',
    location: 'Mendoza, Argentina · Presencial',
    description: 'Responsable de la operación de la empresa en la Provincia. A cargo de las principales cuentas, YPF, Central Puerto, IMPSA, Fuesmen, Petroquímica de Cuyo, Holcim, Bodegas varias, Empresas de Minería de Cuyo, Ecogas, Flowserve etc.',
    skills: 'planificación de negocios, atención al cliente, gestión operativa y de proyectos, administración de operaciones, gestión de tiempos',
  },

    {
    img: bonafide,
    title: 'Jefe de sucursal',
    company: 'Bonafide Argentina · Jornada completa',
    duration: 'jul. 2017 - mar. 2019 · 1 año 9 meses',
    location: 'Mendoza, Argentina · Presencial',
    description: 'Responsable de la gestión del negocio, implementación de políticas comerciales establecidas por la marca.',
  }
];

const Experiencies = () => (
  <div className="flex flex-col items-center">
    
    {experiences.map((exp, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.3 }}
        className="mt-4 flex items-center w-full max-w-3xl"
      >
        <img 
          src={exp.img} 
          alt={exp.title} 
          className="w-16 h-16 mr-4"
        />
        <div>
          <p className="text-lg font-bold">{exp.title}</p>
          <p>{exp.company}</p>
          <p>{exp.duration}</p>
          <p>{exp.location}</p>
          <p>{exp.description}</p>
          {exp.skills && <p>Aptitudes: {exp.skills}</p>}
        </div>
      </motion.div>
    ))}
  </div>
);

export default Experiencies;
