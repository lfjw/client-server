import 'vue';
import { VNodeChild } from '@vue/runtime-core';
import { HTMLAttributes } from '@vue/runtime-dom';

/**
 * jsx component compatible template
 */

export type JsxNode = VNodeChild | JSX.Element;

export interface SlotDirective {
  [name: string]: () => JsxNode;
}

type JsxComponentCustomProps = {
  vModel?: unknown;
  vModels?: unknown[];
  vCustom?: unknown[];
  vShow?: boolean;
  vHtml?: JsxNode;
  vSlots?: SlotDirective;
} & Omit<HTMLAttributes, 'innerHTML'> & {
  innerHTML?: JsxNode;
};

declare module 'vue' {
  interface ComponentCustomProps extends JsxComponentCustomProps {
    [elemName: string]: unknown;
  }
}