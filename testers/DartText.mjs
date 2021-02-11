import dartText from "dart_text";

export default class DartTextTester {
  name = "dart_text";

  getLength(text) {
    return dartText.getTextLength(text);
  }
}
