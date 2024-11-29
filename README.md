# SOEN-357 Project: UI Design Research for Smart Parking Application 

### Authors:
| Name    | Student ID | GitHub Username |
| -------- | ------- | ------- |
| Scott McDonald | 40211626 | Millow02 |
| Angelo Reoligio | 40191187 | Angewoah |
| Rihazul Islam | 40212505 | Rihazul |


## Description:
This is a research project that enables the purpose of making a smart parking management application for commuters with cars. This application will be a web-based application that will help frustrated commuters who want a better experience at finding parking rather than getting stuck in traffic and losing their valuable time. The web application will be delivered with the use of TypeScript, CSS, HTML and JavaScript. With all the approaches considered, this repository includes the final mockup design.  

## How to run the code:

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
