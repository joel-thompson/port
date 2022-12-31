export const resumeData: Resume = {
  name: 'Joel Thompson',
  education:
    'B.S. in Computer Engineering  - UC Santa Cruz, Jack Baskin School of Engineering',
  jobHistory: [
    {
      company: 'CircleCI',
      title: 'Senior Software Engineer',
      time: 'September 2020 - Current',
      responsibilities: [
        'Worked on experiments',
        'Worked on primary frontend react repos',
      ],
    },
    {
      company: 'Intercom',
      title: 'Product Engineer',
      time: 'August 2018 - August 2020',
      responsibilities: [
        'Organized and led an A/B test to improve new user onboarding within Intercom’s Inbox product.',
        "Planned and implemented our team's part of a major pricing model product update. This involved working with multiple teams in engineering, marketing, and design.",
        'Led technical planning and execution to extend our marketing site experimentation framework in Optimizely. This added support for running experiments based on visitor behavior.',
        'Ran weekly planning, retro, and daily stand up as part of a rotation.',
      ],
    },

    {
      company: 'Intercom',
      title: 'Product Support Engineer',
      time: 'August 2017 - August 2018',
      responsibilities: [
        'Served as the primary point of communication between the customer support team and engineering team.',
        'Built and shipped code changes to fix issues.',
        'Responsible for issue triage for my engineering team.',
        'Responsible for maintaining internal tools, documentation, and processes between my engineering team and the customer support team.',
      ],
    },

    {
      company: 'Intercom',
      title: 'Support Engineer',
      time: 'March 2016 - July 2017',
      responsibilities: [
        "Resolved Intercom integration/installation issues on customers' web sites.",
        'Debugged and resolved API issues experienced by customers.',
        'Interviewed, hired, and trained new team members on product knowledge and team workflows.',
      ],
    },

    {
      company: 'FileOpen Systems',
      title: 'Software Engineer',
      time: 'September 2012 - February 2016',
      responsibilities: [
        'Performed maintenance and management of SQL Databases.',
        'Contributed to existing C#/.NET code base.',
        'Automated product build using MSBuild.',
      ],
    },
  ],
  strengths: [
    {
      name: 'Languages',
      items: ['Typescript', 'Javascript', 'Ruby', 'HTML/CSS'],
    },
    { name: 'Frameworks', items: ['React', 'Ruby on Rails'] },
    {
      name: 'Applications',
      items: ['Git/Github', 'CircleCI', 'Optimizely', 'Heroku', 'Datadog'],
    },
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
