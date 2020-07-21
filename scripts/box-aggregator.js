class BoxAggregator {

  contentColorMap = [];

  constructor(options) {

    this.contentColorMap = options;

  }

  /**
   * 
   * Binds the aggregated array to the DOM.
   * 
   */
  bind() {

    document.querySelectorAll('.box-container [class*="col-"]').forEach((box, index) => {

      box.textContent = this.contentColorMap[index].text;

      const classExists = /box-color-[1-4]/g.test(box.className);

      if (!classExists) {

        box.classList.add(this.contentColorMap[index].style);

      } else {

        box.className = box.className.replace(/box-color-[1-4]/g, this.contentColorMap[index].style);

      }
    });

  }

  /**
   * 
   * Shuffles the list of items in a random order.
   * 
   */
  shuffle() {

    let currentIndex = this.contentColorMap.length;

    let bufferObjectValue;

    let nextIndex;

    while (0 !== currentIndex) {

      nextIndex = Math.floor(Math.random() * currentIndex);

      currentIndex -= 1;

      bufferObjectValue = this.contentColorMap[currentIndex];

      this.contentColorMap[currentIndex] = this.contentColorMap[nextIndex];

      this.contentColorMap[nextIndex] = bufferObjectValue;

    }

    this.bind();

  }

  /**
   * 
   * Ascending sorts the list of items.
   * 
   */
  sort() {

    this.contentColorMap.sort((a, b) => {
      return a.text - b.text;
    });

    this.bind();
  }
}
