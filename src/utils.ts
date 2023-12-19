import { transform } from 'sucrase';

const muiStyleFix = `
// This is a specific 'fix' for the notebook only, since its fontsize is non-16
import React from 'react';
// import PropTypes from 'prop-types';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    // Tell Material-UI what the font-size on the html element is.
    htmlFontSize: 10,
    useNextVariants: true,
},
});

function FontSizeTheme({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <Typography component="span">{children}</Typography>
        </ThemeProvider>
    );
}

// FontSizeTheme.propTypes = {
//     children: PropTypes.node.isRequired,
// };

export
function styleWrapper(element) {
    if(window.Jupyter) {
        return <FontSizeTheme>{element}</FontSizeTheme>;
    } else {
        return element;
    }
}
`

export async function setUpMuiFixModule() {
  const code = transform(muiStyleFix, {transforms: ["jsx", "typescript"], filePath: "muifix.tsx"}).code;
  let url = URL.createObjectURL(new Blob([code], { type: 'text/javascript' }));
  // @ts-ignore
  return await importShim(url);
}

export function expose(module: any) {
    const id = "_ipyreact_" + (Math.random()).toString(36);
    // @ts-ignore
    window[id] = module;
    const names = Object.keys(module).filter(n => n !== "default").join(", ")
    return toModuleUrl(`
        const { ${names} } = window["${id}"];
        export default window["${id}"].default;
        delete window["${id}"];
        export { ${names} };`)
}

export function toModuleUrl(code: string) {
    return URL.createObjectURL(new Blob([code], { type: "text/javascript" }));
}

export async function loadScript(type: string, src: string) {
    const script = document.createElement("script")
    script.type = type
    script.src = src
    script.defer = true
    document.head.appendChild(script)
    return new Promise<void>((resolve, reject) => {
      script.onload = () => {
        resolve()
      }
      script.onerror = () => {
        reject()
      }
    })
  }

