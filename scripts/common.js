let boxAggregator;

const BOX_CONTENT_COLOR_MAP = [
  {
    text: 1,
    style: 'box-color-4'
  },
  {
    text: 2,
    style: 'box-color-1'
  },
  {
    text: 3,
    style: 'box-color-2'
  },
  {
    text: 4,
    style: 'box-color-1'
  },
  {
    text: 5,
    style: 'box-color-2'
  },
  {
    text: 6,
    style: 'box-color-3'
  },
  {
    text: 7,
    style: 'box-color-3'
  },
  {
    text: 8,
    style: 'box-color-4'
  },
  {
    text: 9,
    style: 'box-color-2'
  }
];

/**
 * 
 * Class initializer
 * 
 */
document.addEventListener('DOMContentLoaded', () => {

  boxAggregator = new BoxAggregator(BOX_CONTENT_COLOR_MAP);

  boxAggregator.bind()

});
