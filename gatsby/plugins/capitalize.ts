import { titleCase } from 'title-case';
import { Node } from 'unist';
import visit from 'unist-util-visit';

const capitalize = () => (tree: Node) => {
  visit(tree, 'heading', node => {
    visit(node, 'text', textNode => {
      const text = textNode.value ? (textNode.value as string).trim() : '';
      textNode.value = titleCase(text);
    });
  });
};

export default capitalize;
