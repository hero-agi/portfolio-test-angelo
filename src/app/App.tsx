import { MidnightNav } from './components/midnight-nav';
import { MidnightSocial } from './components/midnight-social';
import { MidnightHero } from './components/midnight-hero';
import { MidnightAbout } from './components/midnight-about';
import { MidnightProjects } from './components/midnight-projects';
import { MidnightExperience } from './components/midnight-experience';
import { MidnightContact } from './components/midnight-contact';
import { usePortfolioData } from './data/usePortfolioData';

export default function App() {
  const { data, loading } = usePortfolioData();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#050816' }}>
        <div className="w-8 h-8 rounded-full border-2 border-violet-500 border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div
      className="min-h-screen w-full text-white relative overflow-x-hidden"
      style={{ backgroundColor: '#050816', fontFamily: 'Inter, sans-serif' }}
    >
      <MidnightNav name={data.profile.name} />
      <MidnightSocial contact={data.contact} />
      <main>
        <MidnightHero profile={data.profile} contact={data.contact} />
        <MidnightAbout profile={data.profile} contact={data.contact} />
        <MidnightProjects projects={data.projects} />
        <MidnightExperience experience={data.experience} />
        <MidnightContact profile={data.profile} contact={data.contact} />
      </main>
    </div>
  );
}
