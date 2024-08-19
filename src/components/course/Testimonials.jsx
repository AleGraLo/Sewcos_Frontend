import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { name: 'Maria P.', feedback: '¡El curso de toma de medidas cambió mi forma de ver la moda!' },
    { name: 'Juan R.', feedback: 'Ahora puedo crear ropa que me queda perfecta gracias a Sewcos.' },
  ];

  return (
    <section>
      <h3>Testimonios</h3>
      <ul>
        {testimonials.map((testimonial, index) => (
          <li key={index}>
            <p>"{testimonial.feedback}"</p>
            <p>- {testimonial.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Testimonials;
