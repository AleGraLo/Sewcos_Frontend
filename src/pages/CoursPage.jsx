import React from 'react';
import CourseOverview from '../components/course/CourseOverview';
import CourseModules from '../components/course/CourseModules';
import FutureCourses from '../components/course/CourseFuture';
import CommunitySection from '../components/course/CommunitySection';
import Testimonials from '../components/course/Testimonials';
import '../css/coursePage.css'

const CoursePage = () => {
  return (
    <div>
      <header>
        <h1>Escuela Sewcos</h1>
        <p>Aprende las habilidades necesarias para convertirte en un Sewcoser.</p>
      </header>

      <CourseOverview />
      <CourseModules />
      <FutureCourses />
      <CommunitySection />
      <Testimonials />

    </div>
  );
};

export default CoursePage;
