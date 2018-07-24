import React from 'react';
  import {MDXTag} from '@mdx-js/tag';
  
export const frontmatter = {
  someKey: something
};
export const description = <p>
  some multi-line content
</p>
export default ({components}) => <MDXTag name="wrapper"  components={components}>
<MDXTag name="h2" components={components}>{`a title`}</MDXTag>
<MDXTag name="p" components={components}><MDXTag name="del" components={components} parentName="p">{`strikethrough`}</MDXTag></MDXTag>
</MDXTag>