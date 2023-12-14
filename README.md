Link deploy vercel : [Starbuck-App](sbux-ambar.vercel.app)
Link Record : [Vidyard Recording Sbux](https://share.vidyard.com/watch/5kevm7RfHgmSB6DeN9SK25?);

# Meteor Nextjs Boilerplate

a meteor nextjs boilerplate app, this code was builded using this versions :

- node v18.13.0
- npm 8.19.3

## Stack Resources

- react 18.2.0
  - [React.js Documentation](https://react.dev/learn/thinking-in-react) - learn about React.js features and API.
- next 13.4.19
  - [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
  - [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- zustand 4.4.1
  - [Zustand Documentation](https://zustand-demo.pmnd.rs/) - learn about zustand, elegant state management tool
- tailwindcss 3.3.3
  - [Tailwind CSS](https://tailwindcss.com/) - a utility-first CSS framework for rapidly building modern websites
- daisyui 3.7.4
  - [Daisy UI](https://daisyui.com/) - a component plugin for Tailwind CSS

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

## Folder Structure

```bash
|-- project-name
    |-- public                              // Public static resource of project
    |   |-- next.svg
    |   |-- vercel.svg
    |   |-- assets
    |-- src                                 // Project directory: your working area 🤘
        |-- app
        |   |-- favicon.ico
        |   |-- globals.css                 // global css override
        |   |-- layout.tsx                  // root layout
        |   |-- page.tsx                    // root page -> /
        |   |-- auth                        // auth page group -> /auth/ -> usually for authetication page groups like signin, signup and reset password
        |   |   |-- signin                  // signin page -> /auth/signin
        |   |       |-- page.tsx
        |   |-- dashboard                   // dashboard page group -> /dashboard/ -> usually for main app or protected (logged user screen) route application
        |       |-- checkout                // signin page -> /dashboard/signin
        |       |   |-- checkout-data-form
        |       |       |-- components
        |       |-- home                    // home page -> /dashboard/home
        |           |-- components
        |-- assets                          // assets dir for application
        |   |-- index.ts
        |   |-- icons
        |   |   |-- cart.svg
        |   |   |-- menu-hamburger.svg
        |   |-- images
        |       |-- logo.png
        |-- components                      // global reusable component
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
        |-- constants                        // constants for application
        |   |-- env.ts
        |-- hooks                            // reusable hooks function
        |   |-- useHydrated.ts
        |-- services                         // remote service to API or firebase or other clients
        |   |-- api.ts
        |   |-- client.ts
        |-- stores                           // zustand directory to manage global state and action
        |   |-- auth                         // zustand for auth
        |       |-- actions.ts               // zustand action, usually has action from calling api from clients/api.ts
        |       |-- index.ts                 // zustand state, your state of the app
        |-- types                            // modelin ts types
        |   |-- user.d.ts
        |-- utils                            // reusable primitive function
            |-- helpers.ts
            |-- logger.ts
            |-- storage.ts
            |-- toast.tsx
    |-- .eslintrc.json
    |-- .gitignore
    |-- README.md
    |-- next.config.js
    |-- package-lock.json
    |-- package.json
    |-- postcss.config.js
    |-- tailwind.config.ts                   // theming and tailwind setup
    |-- tsconfig.json
```
