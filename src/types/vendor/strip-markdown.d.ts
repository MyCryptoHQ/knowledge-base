declare module 'strip-markdown' {
  import { Processor, Transformer } from 'unified';

  export default function <S, P>(this: Processor<P>, ...settings: S): Transformer | void;
}
