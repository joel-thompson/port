import {
  Box,
  Divider,
  Heading,
  ListItem,
  UnorderedList,
  VStack,
  Text,
  Stack,
} from '@chakra-ui/react';
import { resumeData } from './resumeData';

export default function Home() {
  return (
    <VStack spacing="2" align="flex-start" maxW="3xl">
      <Heading fontSize="2xl">{resumeData.name}</Heading>

      <Divider />
      <Heading fontSize="lg">Education</Heading>
      <Text fontSize="sm">{resumeData.education}</Text>

      <Divider />
      <Heading fontSize="lg">Experience</Heading>
      {resumeData.jobHistory.map((job) => (
        <ListCard
          heading={job.company}
          subtitle={`${job.title} / ${job.time}`}
          list={job.responsibilities}
        />
      ))}

      <Divider />
      <Heading fontSize="lg">Strengths</Heading>
      {resumeData.strengths.map((strength) => (
        <ListCard heading={strength.name} list={strength.items} />
      ))}
    </VStack>
  );
}

const ListCard = ({
  heading,
  subtitle,
  list,
}: {
  heading: string;
  subtitle?: string;
  list: string[];
}) => {
  return (
    <Stack direction="column" borderWidth="1px" shadow="sm" w="full">
      <Box p={2} w="100%">
        <Heading fontSize="sm">{heading}</Heading>
        {subtitle && <Text fontSize="sm">{subtitle}</Text>}
      </Box>

      <Box p={2} pt="0px">
        <UnorderedList>
          {list.map((i) => (
            <ListItem fontSize="sm">{i}</ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Stack>
  );
};
