module.exports = {
  template({ template }, _, { componentName, jsx }) {
    const typeScriptTpl = template.smart({ plugins: ['typescript'] })
    return typeScriptTpl.ast`
    import * as React from 'react';
    const ${componentName} = (props: React.SVGProps<SVGSVGElement> & { fill: string }) => ${jsx};
    export default ${componentName};
  `
  }
}
