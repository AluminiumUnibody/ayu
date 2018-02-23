const $ = require('./color')

const common = {
  accent: $`F29718`,
  bg: $.base`000000`,
  fg: $`AAAAAA`,
  ui: $`AAAAAA`
}

const syntax = {
  tag: $`FFCC66`,
  func: $`6699CC`,
  entity: $`6699CC`,
  string: $`99CC99`,
  regexp: $`FFCC66`,
  markup: $`EE5566`,
  keyword: $`CC99CC`,
  special: $`88CCCC`,
  comment: $`6C6C6C`,
  constant: $`FFCC66`,
  operator: $`AAAAAA`,
  error: $`EE5566`
}

const ui = {
  panel: {
    bg: common.fg.darken95,
    shadow: common.bg.darken30,
    border: common.bg.darken80,
    row: common.fg.darken90
  },
  icon: common.ui.fade55,
  scrollbar: { puck: $`FFFFFF` },
  separator: common.fg.darken90,
  minimap: common.fg.darken70,
  opacity: 1.0
}

const editor = {
  line: common.fg.fade10,
  gutter: common.ui.fade30,
  selection: {
    bg: common.fg.fade10,
    inactive: common.fg.fade5,
    border: common.fg.fade15
  },
  guide: {
    stack: common.ui.fade30,
    active: common.ui.fade70,
    normal: common.ui.fade30
  },
}

module.exports = {
  theme: 'dark',
  common,
  syntax,
  ui,
  editor
}
