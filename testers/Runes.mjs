import runes from "../lib/runes.mjs";

export default class CustomRunesTester {
  name = "custom-runes";

  getLength(text) {
    return runes(text).length;
  }
}
