import Portfolio from '@/components/shared/Portfolio';
import SectionTitle from '@/components/shared/SectionTitle';
import { projects } from '@/data/projects';
import Link from 'next/link';

const RecentProjectSection = () => {
  return (
    <>
      <SectionTitle>Projects</SectionTitle>
      <div className="mt-10 grid gap-4 xs:grid-cols-2 md:grid-cols-3 md:gap-8">
        {projects
          .filter((_, index) => index < 6)
          .map((project) => (
            <Portfolio
              key={project.id}
              imageUrl={project.thumbnailUrl}
              category={project.category}
              title={project.title}
              href={`/works/${project.id}`}
            />
          ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link href={'/works'}>
          <a className="btn">View All</a>
        </Link>
      </div>
    </>
  );
};

export default RecentProjectSection;
