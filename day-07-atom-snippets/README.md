# Day 7: Atom snippets

Example of snippet creating a simple React component:

```
'.source.js':
  'React component boilerplate':
    'prefix': 'rcomp'
    'body': """
      import React from 'react';

      class ${1:Comp} extends React.Component {
        render() {
          return <div></div>;
        }
      }

      export default ${1:Comp}
    """
```
