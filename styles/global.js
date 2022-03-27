import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --electronext-purple: #574AE8;
  --electronext-blue-light: #55b2fd;

  --electronext-border: #63636347;
  --electronext-overlay: #231f1f4f;

  --electronext-button-hover: #63636347;
  --electronext-button-active: #63636333;
  --electronext-button-default: #63636347;
  --electronext-button-gray: #454545;
  --electronext-button-dark: #171717;
  --electronext-button-info: #55b2fd;
  --electronext-button-succ: #4edc8d;
  --electronext-button-warn: #f1b444;
  --electronext-button-dang: #f54340;

  --electronext-button-primary: #574AE8;
  --electronext-button-secondary: #574AE8;

  --electronext-icon: #999;

  --electronext-font-primary: #cfcfcf;
  --electronext-font-secondary: #F9F9F9;
  
  --header-color: #0e0d0dd4;
}
html.light {
  --header-color: #f6f6f6cf;
}

html, body {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
  background-color: transparent;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
html {
  background: #111;
}
html.light {
  background: transparent;
}
.dark body {
  background: linear-gradient(180deg,transparent 0,#111 300px),fixed 0 0 /20px 20px radial-gradient(#313131 1px,transparent 0),fixed 10px 10px /20px 20px radial-gradient(#313131 1px,transparent 0);
}
*::selection {
  background: var(--electronext-purple);
  color: var(--electronext-font-secondary);
}
*::-webkit-scrollbar {
  width: 0.9rem;
  background-color: transparent;
}
*::-webkit-scrollbar-thumb {
  border-radius: 0.5rem;
  background-color:  #22222299;
  border: 3px solid transparent;
  background-clip: content-box;
}
*:focus-visible {
  outline-width: 2px;
  outline-color: var(--electronext-purple);
  outline-style: solid;
}
a {
  text-decoration: none;
  color: var(--electronext-blue-light);
  transition: ease 0.2s;
}
p a:hover {
  text-decoration: underline;
}
button, input, select, option {
  border: 0;
  margin: 0;
  /*background: var(--electronext-button-gray);*/
  color: var(--electronext-font-primary);
  border-radius: 0.2rem;
  padding: 0.3rem 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

p[align="custom-center"], p[align="custom-start"] {
  display: flex;
  justify-content: center;
}
p[align="custom-start"] {
  justify-content: flex-start;
}
p[align="custom-center"] p, p[align="custom-start"] p {
  margin: 0;
  display: flex;
  justify-content: center;
}
p[align="custom-center"] img, p[align="custom-start"] img {
  display: inline;
  height: fit-content;
}

.ch-codeblock {
  box-shadow: none;
}
code.ch-code-scroll-parent {
  overflow: initial!important;
  border-radius: 0.375rem;
}
article code.ch-code-scroll-parent {
  background-color: rgb(255 255 255/0.1);
}
.ch-editor-frame {
  & .ch-frame-title-bar {
    background-color: rgb(255 255 255/0.1);
  }
  & .ch-code-scroll-parent {
    border: none;
    border-radius: 0;
  }
  & .ch-editor-tab {
    border-radius: 5px 5px 0 0;
    position: relative;
    overflow: hidden;
    ::before {
      content: '';
      width: 100%;
      height: 2px;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  & .ch-editor-tab-active {
    background-color: rgb(255 255 255/0.1)!important;
    border-color: rgb(38 41 47)!important;
    ::before {
      background-color: #4edc8d;
    }
  }
  & .ch-editor-tab-inactive {
    background-color: rgb(255 255 255/0.1)!important;
    border-color: rgb(38 41 47)!important;
    opacity: 0.6;
  }

  & .ch-code-scroll-parent {
    overflow-x: hidden!important;
    overflow-y: auto!important;
  }
}

.disabled {
  pointer-events: none;
}
`

export default GlobalStyle