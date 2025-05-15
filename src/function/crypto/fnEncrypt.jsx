export default function fnEncrypt(params, key = "abogoboga") {
  if (params) {
    let text = JSON.stringify(params);
    let result = "";
    key = key.toLowerCase();
    let keyIndex = 0;

    for (let i = 0; i < text?.length; i++) {
      let charCode = text.charCodeAt(i);

      // Uppercase letters
      if (charCode >= 65 && charCode <= 90) {
        let shift = key.charCodeAt(keyIndex % key?.length) - 97;
        result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        keyIndex++;
      }
      // Lowercase letters
      else if (charCode >= 97 && charCode <= 122) {
        let shift = key.charCodeAt(keyIndex % key?.length) - 97;
        result += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        keyIndex++;
      }
      // Other characters (punctuation, spaces, etc.)
      else {
        result += text[i];
      }
    }

    return result;
  } else {
    return "";
  }
}
