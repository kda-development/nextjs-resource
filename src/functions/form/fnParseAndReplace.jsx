import HTMLReactParser from 'html-react-parser';
import fnReplaceString from './fnReplacingString';

export default function fnParseAndReplace(text, replace) {
  return HTMLReactParser(fnReplaceString(text, replace));
}
