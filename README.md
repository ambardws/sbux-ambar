# Meteor Nextjs Boilerplate

a meteor nextjs boilerplate app, this code was builded using this versions :

- node v18.13.0
- npm 8.19.3

stacks

- react 18.2.0
- next 13.4.19
- zustand 4.4.1
- tailwindcss 3.3.3
- daisyui 3.7.4
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Folder Structure
```bash
|-- project-name
    |-- .eslintrc.json
    |-- .gitignore
    |-- README.md
    |-- next-env.d.ts
    |-- next.config.js
    |-- package-lock.json
    |-- package.json
    |-- postcss.config.js
    |-- tailwind.config.ts
    |-- tsconfig.json
    |-- public
    |   |-- next.svg
    |   |-- vercel.svg
    |   |-- assets
    |-- src
        |-- app
        |   |-- favicon.ico
        |   |-- globals.css
        |   |-- layout.tsx
        |   |-- page.tsx
        |   |-- auth
        |   |   |-- term-n-service
        |   |   |   |-- page.tsx
        |   |   |-- welcome
        |   |       |-- page.tsx
        |   |-- dashboard
        |       |-- checkout
        |       |   |-- checkout-data-form
        |       |       |-- components
        |       |-- home
        |           |-- components
        |-- assets
        |   |-- index.ts
        |   |-- icons
        |   |   |-- cart.svg
        |   |   |-- menu-hamburger.svg
        |   |-- images
        |       |-- logo.png
        |-- components
        |   |-- ThemePreview.tsx
        |   |-- index.ts
        |   |-- footer
        |   |   |-- Footer.tsx
        |   |   |-- index.ts
        |   |-- header
        |   |   |-- HeaderChild.tsx
        |   |   |-- HeaderHome.tsx
        |   |   |-- HeaderPure.tsx
        |   |   |-- index.ts
        |   |-- input
        |   |   |-- Input.tsx
        |   |   |-- InputCurrency.tsx
        |   |   |-- InputPhoneNumber.tsx
        |   |   |-- index.ts
        |   |-- modal
        |       |-- ModalSelect.tsx
        |       |-- ModalSelectSearch.tsx
        |       |-- ModalUploadFile.tsx
        |       |-- index.ts
        |-- constants
        |   |-- env.ts
        |-- hooks
        |   |-- useHydrated.ts
        |-- services
        |   |-- api.ts
        |   |-- client.ts
        |-- stores
        |   |-- auth
        |       |-- actions.ts
        |       |-- index.ts
        |-- types
        |   |-- user.d.ts
        |-- utils
            |-- helpers.ts
            |-- logger.ts
            |-- storage.ts
            |-- toast.tsx
```