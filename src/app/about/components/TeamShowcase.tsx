'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TeamMember {
  name: string;
  role: string;
  department: string;
  image: string;
  alt: string;
  expertise: string[];
  certifications: string[];
  interests: string[];
}

interface TeamShowcaseProps {
  className?: string;
}

const TeamShowcase = ({ className = '' }: TeamShowcaseProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const departments = ['All', 'Development', 'Security', 'Trading', 'Design', 'Operations'];

  const teamMembers: TeamMember[] = [
  {
    name: 'Emily Rodriguez',
    role: 'Senior Full-Stack Developer',
    department: 'Development',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1357eca02-1763295914306.png",
    alt: 'Professional portrait of Hispanic woman with curly brown hair in white blouse smiling warmly',
    expertise: ['React', 'Node.js', 'TypeScript', 'AWS'],
    certifications: ['AWS Certified Solutions Architect', 'Google Cloud Professional'],
    interests: ['Open Source', 'Tech Blogging', 'Mentoring']
  },
  {
    name: 'Michael Kim',
    role: 'Lead Cybersecurity Engineer',
    department: 'Security',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17e3e8a83-1763296144451.png",
    alt: 'Professional headshot of Asian man with short black hair in dark blue shirt with confident expression',
    expertise: ['Penetration Testing', 'Network Security', 'Threat Analysis', 'Compliance'],
    certifications: ['CISSP', 'CEH', 'OSCP'],
    interests: ['Ethical Hacking', 'Security Research', 'Conference Speaking']
  },
  {
    name: 'Jessica Williams',
    role: 'Senior Forex Trading Analyst',
    department: 'Trading',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17faa8e7a-1763295754680.png",
    alt: 'Professional portrait of African American woman with long black hair in burgundy blazer with warm smile',
    expertise: ['Technical Analysis', 'Risk Management', 'Algorithm Development', 'Market Research'],
    certifications: ['CFA Level III', 'FRM'],
    interests: ['Market Psychology', 'Data Science', 'Financial Education']
  },
  {
    name: 'Ryan O\'Connor',
    role: 'Senior UI/UX Designer',
    department: 'Design',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17b6b4ac6-1763296280193.png",
    alt: 'Professional headshot of Caucasian man with short brown hair and beard in gray sweater with friendly smile',
    expertise: ['UI Design', 'UX Research', '3D Design', 'Prototyping'],
    certifications: ['Adobe Certified Expert', 'Google UX Design Certificate'],
    interests: ['3D Art', 'Animation', 'Design Systems']
  },
  {
    name: 'Priya Patel',
    role: 'DevOps Engineer',
    department: 'Operations',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_160d57367-1763300679418.png",
    alt: 'Professional portrait of Indian woman with long black hair in navy blazer with confident smile',
    expertise: ['Docker', 'Kubernetes', 'CI/CD', 'Infrastructure as Code'],
    certifications: ['Kubernetes Administrator', 'Terraform Associate'],
    interests: ['Automation', 'Cloud Architecture', 'Tech Communities']
  },
  {
    name: 'Marcus Johnson',
    role: 'Senior Backend Developer',
    department: 'Development',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_115ba4024-1763296491756.png",
    alt: 'Professional headshot of African American man with short black hair in light blue shirt with warm expression',
    expertise: ['Python', 'Django', 'PostgreSQL', 'Microservices'],
    certifications: ['Python Institute Certified', 'MongoDB Developer'],
    interests: ['API Design', 'Performance Optimization', 'Teaching']
  },
  {
    name: 'Sophie Anderson',
    role: 'Security Compliance Specialist',
    department: 'Security',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b24a7c2e-1763296129552.png",
    alt: 'Professional portrait of Caucasian woman with blonde hair in black blazer with professional demeanor',
    expertise: ['GDPR', 'ISO 27001', 'SOC 2', 'Risk Assessment'],
    certifications: ['CISA', 'CISM', 'ISO 27001 Lead Auditor'],
    interests: ['Regulatory Updates', 'Privacy Advocacy', 'Industry Standards']
  },
  {
    name: 'Daniel Lee',
    role: 'Frontend Architect',
    department: 'Development',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b96df5c7-1763298849215.png",
    alt: 'Professional headshot of Asian man with short black hair in navy suit with confident smile',
    expertise: ['React', 'Next.js', 'Three.js', 'Performance'],
    certifications: ['React Advanced Certification', 'Web Performance Expert'],
    interests: ['3D Web', 'Animation', 'Open Source']
  },
  {
    name: 'Isabella Garcia',
    role: 'Product Designer',
    department: 'Design',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b8548b31-1763293474288.png",
    alt: 'Professional portrait of Hispanic woman with long dark hair in white blouse with creative expression',
    expertise: ['Product Design', 'User Research', 'Design Thinking', 'Figma'],
    certifications: ['Interaction Design Foundation', 'Nielsen Norman Group UX'],
    interests: ['User Psychology', 'Accessibility', 'Design Trends']
  }];


  const filteredMembers =
  selectedDepartment === 'All' ?
  teamMembers :
  teamMembers.filter((member) => member.department === selectedDepartment);

  return (
    <section className={`py-20 bg-primary ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-accent">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the talented individuals who bring innovation, expertise, and passion to every project.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {departments.map((dept) =>
          <button
            key={dept}
            onClick={() => isHydrated && setSelectedDepartment(dept)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            selectedDepartment === dept ?
            'bg-accent text-primary shadow-lg shadow-accent/50' :
            'bg-card/50 text-muted-foreground hover:bg-card border border-accent/20 hover:border-accent/50'}`
            }>

              {dept}
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member, index) =>
          <div
            key={index}
            className="bg-card/80 backdrop-blur-md border border-accent/20 rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:scale-105 group"
            onMouseEnter={() => isHydrated && setHoveredMember(index)}
            onMouseLeave={() => isHydrated && setHoveredMember(null)}>

              <div className="relative h-64 overflow-hidden">
                <AppImage
                src={member.image}
                alt={member.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />

                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-accent text-sm font-medium">{member.role}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                    <Icon name="AcademicCapIcon" size={16} className="text-accent" />
                    Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) =>
                  <span
                    key={idx}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium border border-accent/20">

                        {skill}
                      </span>
                  )}
                  </div>
                </div>

                {hoveredMember === index &&
              <>
                    <div className="mb-4">
                      <h4 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                        <Icon name="ShieldCheckIcon" size={16} className="text-success" />
                        Certifications
                      </h4>
                      <ul className="space-y-1">
                        {member.certifications.map((cert, idx) =>
                    <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                            <Icon name="CheckCircleIcon" size={12} className="text-success mt-0.5 flex-shrink-0" />
                            {cert}
                          </li>
                    )}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                        <Icon name="HeartIcon" size={16} className="text-error" />
                        Interests
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.interests.map((interest, idx) =>
                    <span
                      key={idx}
                      className="px-3 py-1 bg-surface/10 text-surface rounded-full text-xs font-medium border border-surface/20">

                            {interest}
                          </span>
                    )}
                      </div>
                    </div>
                  </>
              }
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default TeamShowcase;