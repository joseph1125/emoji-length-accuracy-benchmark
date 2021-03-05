import dartText from "dart-text";

export default class DartTextTester {
  name = "dart-text";

  getLength(text) {
    return dartText.length(text);
  }
}
