export const resumeData: Resume = {
  name: 'Joel Thompson',
  jobHistory: [
    {
      company: 'CircleCI',
      title: 'Senior Software Engineer',
      time: '2020 - Current',
      responsibilities: [
        'Typed on a computer',
        'Looked at screen',
        'Looked at screen',
        'Looked at screen',
      ],
    },
    {
      company: 'Intercom',
      title: 'Software Engineer',
      time: '2016 - 2020',
      responsibilities: ['Typed on a computer'],
    },
  ],
  strengths: [
    { name: 'Languages', items: ['Typescript', 'React'] },
    { name: 'Applications', items: ['Github', 'CircleCI'] },
  ],
};

interface Resume {
  name: string;
  jobHistory: Job[];
  strengths: Strength[];
}

export interface Job {
  company: string;
  title: string;
  time: string;
  responsibilities: string[];
}

export interface Strength {
  name: string;
  items: string[];
}
