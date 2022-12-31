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

      <DividerHeading>Education</DividerHeading>
      <Text fontSize="sm">{resumeData.education}</Text>

      <DividerHeading>Experience</DividerHeading>
      {resumeData.jobHistory.map((job) => (
        <ListCard
          heading={job.company}
          subtitle={`${job.title} / ${job.time}`}
          list={job.responsibilities}
        />
      ))}

      <DividerHeading>Strengths</DividerHeading>
      {resumeData.strengths.map((strength) => (
        <ListCard heading={strength.name} list={strength.items} />
      ))}
    </VStack>
  );
}

const DividerHeading = ({children}: {children: string}) => {
  return (
    <>
      <Divider />
      <Heading fontSize="lg">{children}</Heading>
    </>
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
