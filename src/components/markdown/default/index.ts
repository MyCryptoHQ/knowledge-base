import Paragraph from './Paragraph';
import UnorderedList from './List/UnorderedList';
import OrderedList from './List/OrderedList';
import ListItem from './List/ListItem';
import H1 from './H1';
import H2 from './H2';
import H3 from './H3';
import H4 from './H4';
import H5 from './H5';
import H6 from './H6';
import StrongText from './StrongText';
import EmphasizedText from './EmphasizedText';
import DeletedText from './DeletedText';
import Blockquote from './Blockquote';
import KeyboardInput from './KeyboardInput';
import InlineCode from './InlineCode';
import PreformattedText from './PreformattedText';
import Code from './Code';
import Table from './Table';
import TableHead from './Table/TableHead';
import TableRow from './Table/TableRow';
import TableHeading from './Table/TableHeading';
import TableCell from './Table/TableCell';
import ThematicBreak from './ThematicBreak';
import Link from './Link';
import Image from './Image';

/**
 * List of components that will be used when rendering markdown.
 */
export default {
  p: Paragraph,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  strong: StrongText,
  em: EmphasizedText,
  del: DeletedText,
  blockquote: Blockquote,
  kbd: KeyboardInput,
  inlineCode: InlineCode,
  pre: PreformattedText,
  code: Code,
  table: Table,
  thead: TableHead,
  tr: TableRow,
  th: TableHeading,
  td: TableCell,
  thematicBreak: ThematicBreak,
  hr: ThematicBreak,
  a: Link,
  img: Image
};
