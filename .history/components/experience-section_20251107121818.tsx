import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, Sparkles, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
    {
      title: 'frontend Developer ',
      company: 'Bluestock Fintech',
      period: 'May 2025 – July 2025',
      description: 'Developing responsive web applications using React and TypeScript. Collaborating with design team to implement pixel-perfect UIs.',
      achievements: [
        ' Built responsive financial dashboards using Python and React.js and Tailwind CSS',
        'Collaborating with cross-functional teams to design and implement robust RESTful APIs ensuring seamless frontend-backend integration',
        'Optimized UI performance and improved user experience across devices.',
        
      ],
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50',
    },
    {
      title: 'AI/ML Certification Program',
      company: 'GOOGLE-AIML Virtual Internship',
      period: 'Jul 2024 – Sep 2024',
      description: 'Gained in-depth understanding of machine learning, deep learning, and NLP techniques.',
      achievements: [
        'Built and deployed ML models for real-world problems using Python and TensorFlow',
        'Evaluated ML model predictions, tested accuracy across datasets, and suggested improvements',
        'Collaborated with peers on AI projects, sharing insights and best practices',
        'Developed solutions for data analysis, model tuning, and performance evaluation',
      ],
      tags: ['Python', 'TensorFlow', 'NLP'],
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50',
    },
    {
      title: 'Front-end Web Development',
      company: 'internship with Suvidha Foundation',
      period: 'Aug 2025 - Sep 2025',
      description: 'Completed a 1‐month online Front-end Web Development & Fundraising internship with Suvidha Foundation, where I collaborated with their team to build responsive user-interfaces',
      achievements: [
        'Gained practical experience working remotely on a real-world NGO project: developed interactive UI components, debugged cross-browser issues, and contributed to outreach efforts that raised funds for community-driven initiatives',
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      bgGradient: 'from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50',
    },
  ];

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-purple-900/10 dark:to-blue-900/10 relative overflow-hidden"
    >
      <div className="absolute top-10 right-10 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">
            Experience
          </h2>
          <p className="text-center text-gray-700 dark:text-gray-300 mb-16 text-xl font-medium">
            My professional journey and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-bold">key achievements</span>
          </p>

          <div className="max-w-5xl mx-auto relative">
            <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block shadow-lg"></div>
            
            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 250}ms` }}
                >
                  <div className={`hidden md:block absolute left-6 top-8 w-9 h-9 rounded-full bg-gradient-to-br ${exp.gradient} border-4 border-white dark:border-gray-800 shadow-xl animate-pulse-glow z-10`}>
                    <TrendingUp className="h-5 w-5 text-white m-auto mt-1.5" />
                  </div>
                  
                  <Card className={`md:ml-24 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border-4 border-transparent hover:border-current bg-gradient-to-br ${exp.bgGradient} overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    <CardHeader className="relative">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                        <div className="flex-1">
                          <CardTitle className={`text-3xl font-black mb-3 bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}>
                            {exp.title}
                          </CardTitle>
                          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                            <Briefcase className="h-5 w-5" />
                            <span className="font-bold text-lg">{exp.company}</span>
                          </div>
                        </div>
                        <Badge variant="outline" className={`flex items-center gap-2 px-4 py-2 border-3 bg-gradient-to-r ${exp.gradient} text-white font-bold text-base shadow-lg`}>
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{exp.description}</p>
                      <Sparkles className="absolute top-4 right-4 h-7 w-7 text-yellow-400 fill-yellow-400 animate-pulse" />
                    </CardHeader>
                    <CardContent className="p-6 relative">
                      <h4 className="font-black mb-4 text-gray-900 dark:text-gray-100 text-xl flex items-center gap-2">
                        <span className={`text-2xl bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}>✨</span>
                        Key Achievements:
                      </h4>
                      <ul className="space-y-3 mb-5">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-800 dark:text-gray-200 text-base">
                            <span className={`text-2xl font-bold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent mt-0.5`}>▸</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-3">
                        {exp.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-sm font-bold px-4 py-2 hover:scale-110 transition-transform">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
