import React from 'react';
import { Button } from './ui/button';

const IconCard = () => {
  const techStack = [
    {
      name: 'Next.js',
      icon: 'https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png'
    },
    {
      name: 'Tailwind CSS',
      icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'
    },
    {
      name: 'TypeScript',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'
    },
    {
      name: 'JavaScript',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
    },
    {
      name: 'HTML',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg'
    },
    {
      name: 'CSS',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg'
    },
    {
      name: 'Python',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'
    }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {techStack.map((tech) => (
        <Button 
          key={tech.name} 
          variant="outline" 
          className="h-auto w-32 p-4 flex flex-col items-center justify-center"
        >
          <div className="mb-2">
            <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
          </div>
          <span className="text-sm text-gray-700">{tech.name}</span>
        </Button>
      ))}
    </div>
  );
};

export default IconCard;