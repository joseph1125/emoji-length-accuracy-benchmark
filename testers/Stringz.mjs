import stringz from "stringz";

export default class StringZTester {
  name = "stringz";

  getLength(text) {
    return stringz.length(text);
  }
}
