import React from 'react';

const CourseModules = () => {
  const modules = [
    { title: 'Introducción a la Toma de Medidas', description: 'Herramientas y conceptos básicos.' },
    { title: 'Medidas Corporales Específicas', description: 'Torso, extremidades y medidas complejas.' },
    { title: 'Técnicas de Precisión', description: 'Consejos para medidas precisas.' },
    { title: 'Aplicación Práctica', description: 'Ejercicios y ejemplos prácticos.' },
  ];

  return (
    <section>
      <h3>Módulos del Curso</h3>
      <ul>
        {modules.map((module, index) => (
          <li key={index}>
            <h4>{module.title}</h4>
            <p>{module.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CourseModules;
