import runes from "runes";

export default class RunesTester {
  name = "runes";

  getLength(text) {
    return runes(text).length;
  }
}
