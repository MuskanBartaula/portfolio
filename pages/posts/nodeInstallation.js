import { Container, Heading, Text, Code  } from "@chakra-ui/react";
import CopyCommandButton from '../../components/CopyCommandButton'
import Section from "../../components/section";

const Post = () => {
  return (
    <Container maxW={700} mt={8}>
      <Heading as="h3" variant="page-title" fontSize={24} mb={6}>
        How to Install Node.js in Linux Using Tar File
      </Heading>
      <Section>
        <Text fontSize={16} mb={4}>
          To install Node.js in the Linux environment, follow these steps:
        </Text>

        <Text fontSize={16} mb={2}>
          <strong>Step 1:</strong> Update the system
        </Text>
        <CopyCommandButton command='sudo apt update' />
        <Text fontSize={16} mb={2}>
          <strong>Step 2:</strong> Download the tar file from the Node.js official site.
        </Text>
        <CopyCommandButton command='wget https://nodejs.org/dist/v20.10.0/node-v20.10.0-linux-x64.tar.xz' />

        <Text fontSize={16} mb={2}>
          <strong>Step 3:</strong> Extract the tar file
        </Text>
        <CopyCommandButton command='sudo tar -xvf node-v21.x.x-linux-x64.tar.xz' />

        <Text fontSize={16} mb={2}>
          <strong>Step 4:</strong> Copy the extracted files to /usr/
        </Text>
        <CopyCommandButton command='sudo cp -r node-v21.x.x-linux-x64/\{bin,include,lib,share\} /usr/' />

        <Text fontSize={16} mb={2}>
          <strong>Step 5:</strong> Export the path
        </Text>
        <CopyCommandButton command='export PATH=/usr/node-v21.x.x-linux-x64/bin:$PATH' />

        <Text fontSize={18} mt={6}>
          {`Let's check the node version by running the command`}
          <Code fontSize={14} mb={2} colorScheme="cyan" ml={2}>
            node -v
          </Code>
        </Text>

        <Text fontSize={18} mt={6}>
          Congratulations! You have successfully installed Node.js on your Linux system.
        </Text>

      </Section>
    </Container>
  );
};

export default Post;
