import AboutSection from '@/components/partials/AboutSection';
import BlogSection from '@/components/partials/BlogSection';
import ContactSection from '@/components/partials/ContactSection';
import EducationSection from '@/components/partials/EducationSection';
import ExperienceSection from '@/components/partials/ExperienceSection';
import HeroSection from '@/components/partials/HeroSection';
import RecentProjectSection from '@/components/partials/RecentProjectSection';
import SkillsSection from '@/components/partials/SkillsSection';
import TestimonialSection from '@/components/partials/TestimonialSection';
import AppLayout from '@/layouts/AppLayout';
import { api } from '@/lib/api';
import type { GetServerSideProps, NextPage } from 'next';

// type Props = {
//   experiences: ;
// }

const Home: NextPage = () => {
  return (
    <AppLayout title="Home">
      <HeroSection />
      <section className="container pt-20 pb-10">
        <AboutSection />
      </section>
      <section className="container py-16">
        <EducationSection />
      </section>
      <section className="container py-16">
        <ExperienceSection />
      </section>
      <section className="container py-16">
        <SkillsSection />
      </section>
      <section className="container py-16">
        <RecentProjectSection />
      </section>
      <section className="container py-16">
        <BlogSection />
      </section>
      <section className="container py-16">
        <ContactSection />
      </section>
    </AppLayout>
  );
};

// export const getServerSideProps: GetServerSideProps = async ({}) => {
//   const getExperiences = api.get('/experiences').then((res) => res.data.data);
//   const getEducations = api.get('/educations').then((res) => res.data.data);
//   const profile = api.get('/profile').then((res) => res.data.data);
//   const result = await Promise.all([getExperiences, getEducations, profile]);
//   return {
//     props: {
//       experiences: result[0],
//       educations: result[1],
//       profile: result[2],
//     },
//   };
// };

export default Home;
