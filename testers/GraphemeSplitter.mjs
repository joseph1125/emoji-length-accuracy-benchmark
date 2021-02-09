import GraphemeSplitter from "grapheme-splitter";

export default class GraphemeSplitterTester {
  name = "grapheme-splitter";

  constructor() {
    this.splitter = new GraphemeSplitter();
  }

  getLength(text) {
    return this.splitter.countGraphemes(text);
  }
}
