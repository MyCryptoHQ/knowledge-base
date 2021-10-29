import { titleCase } from 'title-case';
import { Node } from 'unist';
import visit from 'unist-util-visit';

interface TextNode extends Node {
  value: string;
}

const capitalize =
  () =>
  (tree: Node): void => {
    visit(tree, 'heading', (node) => {
      visit<TextNode>(node, 'text', (textNode) => {
        const text = textNode.value ?? '';
        textNode.value = titleCase(text);
      });
    });
  };

export default capitalize;
