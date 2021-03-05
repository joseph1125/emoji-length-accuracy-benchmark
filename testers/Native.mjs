export default class NativeTester {
  name = "native";

  getLength(text) {
    return Array.from(text).length;
  }
}
