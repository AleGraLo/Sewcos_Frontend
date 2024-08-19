import React from 'react';

const FutureCourses = () => {
  const futureCourses = [
    { title: 'Patronaje de Camisas', date: 'Próximamente' },
    { title: 'Patronaje de Pantalones', date: 'Próximamente' },
  ];

  return (
    <section>
      <h3>Cursos Futuros</h3>
      <ul>
        {futureCourses.map((course, index) => (
          <li key={index}>
            <h4>{course.title}</h4>
            <p>{course.date}</p>
            <button>Pre-inscribirse</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FutureCourses;
