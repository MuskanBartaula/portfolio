import { CopyIcon } from "@chakra-ui/icons"
import { Button, Code } from "@chakra-ui/react"

const renderCommandWithCopyButton = ({command}) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  }
  return (
    <div>
      <Code
        fontSize={14}
        mb={2}
        colorScheme="cyan"
        whiteSpace="pre-wrap"
        ml={12}
      >
        {command}
      </Code>
      <Button
        ml={2}
        size="xs"
        leftIcon={<CopyIcon />}
        onClick={() => copyToClipboard(command)}
      ></Button>
    </div>
  )
}

export default renderCommandWithCopyButton
