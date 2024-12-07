# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

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

##TODO:
create building block: https://ui.shadcn.com/blocks#blocks
figma reference: 
- https://www.figma.com/community/file/1294259723229617122/doctor-patient-dashboard
- https://www.figma.com/community/file/1171394209400750256/medical-dashboard


backend: nodejs with typeorm and typescript
https://medium.com/@christianinyekaka/building-a-rest-api-with-typescript-express-typeorm-authentication-authorization-and-postgres-e87d07d1af08
https://github.com/chrisBokotaII/typeOrm-api


## Tanstack Query
https://dev.to/samuel_kinuthia/mastering-tanstack-query-a-comprehensive-guide-to-efficient-data-fetching-in-react-508p
https://tanstack.com/query/latest/docs/framework/react/examples/basic

https://www.quantizeanalytics.co.uk/tableau-healthcare-dashboard-examples/
https://fuselabcreative.com/healthcare-dashboard-design-best-practices/

https://github.com/shadcn-ui/ui/discussions/3244
https://v0.dev/t/lOQujREAOrk

# Simulate trigger websocket using CURL
curl -X POST http://localhost:3001/broadcast