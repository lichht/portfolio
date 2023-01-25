import HomeFirstSection from '../components/module/HomeFirstSection';
import SectionHeader from '../components/SectionHeader';

export default function Home() {
  return (
    <div>
      {/* first */}
      <HomeFirstSection />
      <SectionHeader title="Project" />
      <SectionHeader title="Skills" />
      {/* quote */}
      <section></section>
    </div>
  );
}
