require('react')
var e = require('@mdx-js/tag'),
  t = { someKey: something },
  n = h('p', null, 'some multi-line content')
;(exports.frontmatter = t),
  (exports.description = n),
  (exports.default = function(t) {
    var n = t.components
    return h(
      e.MDXTag,
      { name: 'wrapper', components: n },
      h(e.MDXTag, { name: 'h2', components: n }, 'a title'),
      h(
        e.MDXTag,
        { name: 'p', components: n },
        h(
          e.MDXTag,
          { name: 'del', components: n, parentName: 'p' },
          'strikethrough',
        ),
      ),
    )
  })
//# sourceMappingURL=out.js.map
