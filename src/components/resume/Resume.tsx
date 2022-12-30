import {
  Box,
  Card,
  Divider,
  Heading,
  HStack,
  ListItem,
  StackDivider,
  UnorderedList,
  VStack,
  Text,
  Stack,
} from '@chakra-ui/react';
import { resumeData, Job, Strength } from './resumeData';

export default function Home() {
  return (
    <VStack spacing="2" align="flex-start">
      <Heading>{resumeData.name}</Heading>

      <Divider />
      <Text>Experience</Text>
      {resumeData.jobHistory.map((job) => (
        <ShowJob job={job} />
      ))}

      <Divider />
      <Text>Strengths</Text>
      {resumeData.strengths.map((strength) => (
        <ShowStrength strength={strength} />
      ))}
    </VStack>
  );
}

const ShowJob = ({ job }: { job: Job }) => {
  return (
    <Stack direction="row" borderWidth="1px" shadow="sm">
      <Box p={5} w="60">
        <Heading fontSize="xl">{job.company}</Heading>
        <Text>{job.title}</Text>
        <Text>{job.time}</Text>
      </Box>

      <Box p={5}>
        <UnorderedList>
          {job.responsibilities.map((r) => (
            <ListItem>{r}</ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Stack>
  );
};

const ShowStrength = ({ strength }: { strength: Strength }) => {
  return (
    <>
      <Text>{strength.name}</Text>
      {strength.items.map((i) => <Text>{i}</Text>)}
    </>
  );
};
