const mdx = require('@mdx-js/mdx')
const fs = require('fs')
fs.writeFileSync(
  'index.js',
  `import React from 'react';
  import {MDXTag} from '@mdx-js/tag';
  ${mdx.sync(`
export const frontmatter = {
  someKey: something
};

## a title

~~strikethrough~~

export const description = <p>
  some multi-line content
</p>

`)}`,
)
