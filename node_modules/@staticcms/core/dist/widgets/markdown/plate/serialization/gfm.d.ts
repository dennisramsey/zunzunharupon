import type { Root } from 'mdast';
import type { Plugin } from 'unified';
declare module 'unified' {
    interface Data {
        toMarkdownExtensions?: Array<any>;
    }
}
/**
 * Plugin to support GFM (footnotes, strikethrough, tables, tasklists).
 */
declare const remarkGfm: Plugin<void[], Root>;
export default remarkGfm;
