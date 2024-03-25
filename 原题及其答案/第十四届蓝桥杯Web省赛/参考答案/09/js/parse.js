class Parser {
  constructor() {
    this.heading = /^(#{1,6}\s+)/;
    this.blockQuote = /^(\>\s+)/;
    this.unorderedList = /^((\*|-){1}\s+)/;
    this.image = /\!\[(.*?)\]\((.*?)\)/g;
    this.strongText = /\*{2}(.*?)\*{2}/g;
    this.codeLine = /\`{1}(.*?)\`{1}/g;
    // TODO: 补充分割符正则
    this.hr = /^-{3}-*$/;
  }

  // 获取单行内容
  parseLineText(lineText) {
    this.lineText = lineText;
  }

  // 是否是空行
  isEmptyLine() {
    return this.lineText === "";
  }

  // 是否为符合标题规范
  isHeading() {
    return this.heading.test(this.lineText);
  }
  
  // 是否为分割线
  isHr() {
    return this.hr.test(this.lineText);
  }

  // 解析标题
  parseHeading() {
    const temp = this.lineText.split(" ");
    const headingLevel = temp[0].length;
    const title = temp[1].trim();
    return `<h${headingLevel}>${title}</h${headingLevel}>`;
  }

  isBlockQuote() {
    return this.blockQuote.test(this.lineText);
  }

  parseBlockQuote() {
    const p = this.lineText.slice(2);
    return `<p>${p}</P>`;
  }

  isUnorderedList() {
    return this.unorderedList.test(this.lineText);
  }

  parseUnorderedList() {
    const temp = this.lineText.split(" ");
    const p = temp[1].trim();
    return `<li>${p}</li>`;
  }

  isImage() {
    return this.image.test(this.lineText);
  }

  parseImage() {
    const temp = this.lineText.slice(6, -1);
    return `<img src="${temp}" alt="图⽚" />`;
  }

  parseText() {
    let temp = this.lineText
    // 实在是不知道replace第二个参数可以传一个函数,所以这是我的解决方法
    // while(this.strongText.test(this.lineText)) {
    //   this.strongText.lastIndex = 0
    //   temp = temp.replace(/\*{2}(.*?)\*{2}/, `<b>${this.strongText.exec(temp)[1]}</b>`)
    // }
    // while(this.codeLine.test(this.lineText)) {
    //   this.codeLine.lastIndex = 0
    //   temp = temp.replace(/\`{1}(.*?)\`{1}/, `<code>${this.codeLine.exec(temp)[1]}</code>`)
    // }
    temp = temp.replace(this.strongText, (match, p1) => {
      return `<b>${p1}</b>`
    })
    temp = temp.replace(this.codeLine, (match, p1) => {
      return `<code>${p1}</code>`
    })
    return temp
  }



  /**
   * TODO: 请完成剩余各种语法的解析
   *   1. 完成对分隔符的解析
   *   2. 完成对引用区块的解析
   *   3. 完成对图片，和文字效果的解析
   *   4. 完成对无序列表的解析
   */
}

class Reader {
  constructor(text) {
    //获取全部原始文本
    this.text = text;
    this.lines = this.getLines();
    this.parser = new Parser();
    this.pending = false
  }

  runParser() {
    let currentLine = 0;
    let hasParsed = [];

    while (!this.reachToEndLine(currentLine)) {
      // 获取行文本
      this.parser.parseLineText(this.getLineText(currentLine));

      // 判断空白行
      if (this.parser.isEmptyLine()) {
        currentLine++;
        continue;
      }

      if (this.parser.isHeading()) {
        hasParsed.push(this.parser.parseHeading());
        currentLine++;
        continue;
      }
      // TODO: 请完成剩余各种语法的解析
      if(this.parser.isHr()) {
        hasParsed.push(`<hr />`);
        currentLine++;
        continue;
      }

      if(this.parser.isBlockQuote()) {
        // 表示准备开始了
        if(!this.pending) {
          hasParsed.push(`<blockquote>`);
        }
        this.pending = true
        hasParsed.push(this.parser.parseBlockQuote());
        const _parser = new Parser()
        _parser.parseLineText(this.getLineText(currentLine + 1));
        if(!_parser.isBlockQuote()) {
          this.pending = false
          hasParsed.push(`</blockquote>`);
        }
        currentLine++;
        continue;
      }

      if(this.parser.isUnorderedList()) {
        if(!this.pending) {
          hasParsed.push(`<ul>`);
        }
        this.pending = true
        hasParsed.push(this.parser.parseUnorderedList());
        const _parser = new Parser()
        _parser.parseLineText(this.getLineText(currentLine + 1));
        if(!_parser.isUnorderedList()) {
          this.pending = false
          hasParsed.push(`</ul>`);
        }
        currentLine++;
        continue;
      }
      // 图片
      if(this.parser.isImage()) {
        hasParsed.push(this.parser.parseImage());
        currentLine++;
        continue;
      }
      hasParsed.push(this.parser.parseText());
      currentLine++;
      continue;
      currentLine++;
    }
    return hasParsed.join("");
  }

  getLineText(lineNum) {
    return this.lines[lineNum];
  }

  getLines() {
    this.lines = this.text.split("\n");
    return this.lines;
  }

  reachToEndLine(line) {
    return line >= this.lines.length;
  }
}

module.exports = function parseMarkdown(markdownContent) {
  return new Reader(markdownContent).runParser();
};
