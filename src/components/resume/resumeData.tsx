export const resumeData: Resume = {
  name: 'Joel Thompson',
  education: 'B.S. in Computer Engineering  - UC Santa Cruz, Jack Baskin School of Engineering',
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
      title: 'Product Engineer',
      time: '2016 - 2020',
      responsibilities: ['Typed on a computer', "Planned and implemented our team's part of a major pricing model product update. This involved working with multiple teams in engineering, marketing, and design."],
    },
  ],
  strengths: [
    { name: 'Languages', items: ['Typescript', 'React'] },
    { name: 'Applications', items: ['Github', 'CircleCI'] },
  ],
};

interface Resume {
  name: string;
  education: string;
  jobHistory: JobHistory;
  strengths: Strengths;
}

interface Job {
  company: string;
  title: string;
  time: string;
  responsibilities: string[];
}

type JobHistory = Job[];

interface Strength {
  name: string;
  items: string[];
}

type Strengths = Strength[];