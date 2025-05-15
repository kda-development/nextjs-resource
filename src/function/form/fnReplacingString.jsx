export default function fnReplaceString(text, replacements) {
  let result = text;
  for (const key in replacements) {
    if (replacements.hasOwnProperty(key)) {
      const placeholder = new RegExp("\\$" + key, "g");
      result = result.replace(placeholder, replacements[key]);
    }
  }

  return result;
}
