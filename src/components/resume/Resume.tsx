import { resumeData } from './resumeData';

export default function Home() {
  return (
    <>
      <p>{resumeData.name}</p>
      {resumeData.jobHistory.map((job) => (
        <>
          <p>{job.company}</p>
          <p>{job.title}</p>
          <p>{job.time}</p>
        </>
      ))}
    </>
  );
}
