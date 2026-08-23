import { FiTerminal } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import BlogLayoutContainer from '../../components/blogs/BlogLayoutContainer';
import {
  BlogTitle,
  BlogHeader,
  BlogDesc,
  BlogParagraph,
  WhiteBoldHighlight,
  NormalHighlight,
  BlogTip,
  BlogWarn,
  BlogDontDo,
  BlogOrderedList,
  BlogUnorderedList,
  BlogTerminal,
  BlogCodeBlock,
  BlogTextLine,
  BlogLink,
  BlogButton,
  BlogButtonsContainer,
  BlogAuthor,
} from '../../components/blogs/components';

const toolDefinition = `{
  "name": "design_email",
  "description": "Generate a responsive, brand-aware email from a short brief.",
  "inputSchema": {
    "type": "object",
    "properties": {
      "brief": { "type": "string" },
      "brand": { "type": "string", "description": "Hex color or brand name" },
      "layout": { "enum": ["newsletter", "announcement", "receipt"] }
    },
    "required": ["brief"]
  }
}`;

const ShippingAnMcpServer = () => {
  return (
    <BlogLayoutContainer>
      <BlogTitle>Shipping an MCP server that people actually install</BlogTitle>

      <BlogDesc>
        I published <NormalHighlight>email-design-mcp</NormalHighlight> so an AI assistant could
        design responsive email templates without me hand-writing MJML again. The protocol work was
        the easy part — the hard part was deciding what the tool surface should be.
      </BlogDesc>

      <BlogHeader>Start from the job, not the API</BlogHeader>

      <BlogParagraph>
        My first draft exposed eleven tools: one per MJML component. It technically worked, and it
        was useless. The model had to orchestrate a whole layout from primitives, and every
        conversation burned tokens describing structure instead of content.
      </BlogParagraph>

      <BlogParagraph>
        The version people actually use exposes three tools. The one that matters takes a brief and
        returns a finished template:
      </BlogParagraph>

      <BlogCodeBlock code={toolDefinition} filename="tools/design-email.json" language="JSON" />

      <BlogTip title="Rule of thumb">
        If a caller needs three of your tools to do one obvious thing, that's one tool with three
        parameters.
      </BlogTip>

      <BlogHeader>No API keys, or no installs</BlogHeader>

      <BlogParagraph>
        Every key you require is a step where someone abandons setup. MJML compiles locally, so the
        server ships with <WhiteBoldHighlight>zero required credentials</WhiteBoldHighlight> — the
        install is one command and the first result arrives seconds later.
      </BlogParagraph>

      <BlogTerminal commands={['npx email-design-mcp']} title="Install" />

      <BlogDontDo title="Don't gate the first run">
        Asking for an API key before the user has seen a single output inverts the order of trust.
        Earn the key with a working demo.
      </BlogDontDo>

      <BlogHeader>What the protocol doesn't tell you</BlogHeader>

      <BlogOrderedList
        items={[
          <>
            <WhiteBoldHighlight>Descriptions are prompts.</WhiteBoldHighlight> The model picks tools
            by reading them. Vague descriptions produce wrong calls, and no amount of schema
            strictness saves you.
          </>,
          <>
            <WhiteBoldHighlight>Return text, not blobs.</WhiteBoldHighlight> A tool that answers
            with a 40KB base64 payload wrecks the context window. Write to a file, return the path.
          </>,
          <>
            <WhiteBoldHighlight>Fail loudly and specifically.</WhiteBoldHighlight> "Invalid input"
            teaches the model nothing. "layout must be one of newsletter, announcement, receipt"
            gets a correct retry on the next turn.
          </>,
        ]}
      />

      <BlogWarn title="Watch your stdout">
        On a stdio transport, anything you print to stdout is protocol traffic. One stray{' '}
        <NormalHighlight>console.log</NormalHighlight> corrupts the stream and the client
        disconnects with no useful error. Log to stderr.
      </BlogWarn>

      <BlogHeader>What I'd keep for the next one</BlogHeader>

      <BlogUnorderedList
        items={[
          'Ship the smallest tool surface that does the whole job.',
          'Treat the README as the onboarding path — most people never open the source.',
          'Version the schema early; renaming a parameter after release breaks silently.',
          'Test against more than one client. Behaviour differs more than the spec implies.',
        ]}
      />

      <BlogTextLine icon={<FiTerminal />}>
        Roughly 70 monthly installs so far — small, but every one of them skipped writing MJML by
        hand.
      </BlogTextLine>

      <BlogParagraph>
        The source is on GitHub, and it's small enough to read in one sitting. If you're building
        your own server, the <BlogLink href="https://modelcontextprotocol.io">MCP docs</BlogLink>{' '}
        are the right starting point.
      </BlogParagraph>

      <BlogButtonsContainer>
        <BlogButton
          href="https://github.com/harikrishna8121999/email-design-mcp"
          icon={<FaGithub />}
        >
          View source
        </BlogButton>
        <BlogButton href="https://www.npmjs.com/package/email-design-mcp">npm package</BlogButton>
      </BlogButtonsContainer>

      <BlogAuthor>
        Building email infrastructure at Poppulo by day, and small developer tools the rest of the
        time. Happy to talk through MCP design decisions if you're stuck on one.
      </BlogAuthor>
    </BlogLayoutContainer>
  );
};

export default ShippingAnMcpServer;
