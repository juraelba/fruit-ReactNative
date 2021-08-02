# React Native project template

| WARNING: It is always recommended to create a new project, the versions change and it is possible that the objects in the libraries. If we create the new project following a base, we will guarantee a cleaner process |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

| WARNING: for handling dates it is not recommended to handle moment.js [moment status](https://momentjs.com/docs/#/-project-status/) |
| ----------------------------------------------------------------------------------------------------------------------------------- |

The main characteristics of the project are the following

- React native [Typescript](https://reactnative.dev/docs/typescript)
- Eslint template [Airbnb](https://github.com/airbnb/javascript)
- Firebase connection with [React Native Firebase](https://rnfirebase.io/)
- Navigation with [React Navigation](https://reactnavigation.org/)
- Form management with [React Hook Form](https://react-hook-form.com/)

## Create a typescript project

Follow steps of the official documentation [React native typescript](https://reactnative.dev/docs/typescript)

## Configuring Eslint

Rename .eslintrc.js to .eslintrc.json. If you don't have a file named .eslintrc.js, just create .eslintrc.json. In this flile we need to add this code.

Exec

```bash
> npx eslint --init
```

The eslint CLI show you a menu, in this case i select the next options

```bash
? How would you like to use ESLint? ...
  To check syntax only
  To check syntax and find problems
> To check syntax, find problems, and enforce code style

? What type of modules does your project use? ...
> JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these

? Which framework does your project use? ...
> React
  Vue.js
  None of these

? Does your project use TypeScript? » No / Yes*

? Where does your code run? ...
√ Browser
() Node

? How would you like to define a style for your project? ...
> Use a popular style guide
  Answer questions about your style
  Inspect your JavaScript file(s)

? Which style guide do you want to follow? ...
> Airbnb: https://github.com/airbnb/javascript
  Standard: https://github.com/standard/standard
  Google: https://github.com/google/eslint-config-google

? What format do you want your config file to be in? ...
> JavaScript
  YAML
  JSON

? Would you like to install them now with npm? » No / Yes*
```

Verify the next fields in eslint.json

```json
{
  "extends": ["airbnb"],
  "plugins": ["@typescript-eslint", "react"],
  "parser": "@typescript-eslint/parser",
  "rules": {
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".jsx", ".tsx"]
      }
    ]
  }
}
```

These options are intended for production and development compiles respectively. Often, the options from one can extend from the other. For example, a tsconfig.json for production builds might look like the following:

```json
// ./src/tsconfig.json
{
  "compilerOptions": {
    "module": "esnext",
    "target": "es2015",
    "jsx": "react-jsx",
    "strict": true
  },
  "include": ["./**/*"]
}
```

and one for development builds might look like the following:

```json
// ./src/tsconfig.dev.json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "jsx": "react-jsxdev"
  }
}
```

In your .prettierrc.js the property bracketSpacing: true, resolve conflict with airbnb eslint

finally you must choose eslint as the formatter in your IDE

## Init git repository

First you must the edit the .gitignore file, [Gitignore IO](https://www.toptal.com/developers/gitignore) this is an option where we generate the complete values

After this you should start the repository

## Config android flavors

Here are some resources so you can guide yourself
[Configure multiple flavor/schema for React Native Apps](http://blog.logicwind.com/adding-multiple-target/)

First we must edit the android/app/buildgradle and add

```json
 flavorDimensions "default"

    productFlavors {
        dev {
            applicationIdSuffix ".dev"
            versionNameSuffix applicationIdSuffix
        }
        prod {
        }
    }

```

To make it easier to execute, we will configure the scripts in package.json

```json
"adev": "react-native run-android --variant=devDebug --appIdSuffix=dev",
"aprod": "react-native run-android --variant=prodDebug",
```

For run we only need

```bash
> npm run adev
```

Now, we need create some folder in android/app/src, we config the environment folders as indicated in the [tutorial](http://blog.logicwind.com/adding-multiple-target/)

## Config IOS environments

not configured yet

## Config firebase with Android flavors

you must follow the instructions of the official firebase library for react native [HERE](https://rnfirebase.io/)

A firebase project must be created for each environment

in firebase when the app is linked to the firebase project, in the app package field you must put the com. [appname]. [env] for prod it is not necessary, you just have to put com. [appname]

The google-service.json must be saved in the folders of the environments created [env, prod] in android/app/scr

## Best practices

Since we handle the airbnb structure, it is good to read the good code practices that they put into eslint

[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

We recommend you read the following blogs, where you show us good code practices, it is important from the beginning to have good management

- [clean-code-javascript](https://github.com/ryanmcdermott/clean-code-javascript)

## Global styles

Styles must be handled with styled component

there are files in common / styles from which we must take the padding, margin, colors, etc.

We should not leave fixed values, unless they are in these style files

## Variable naming

Variables must be named in English, and English grammar must be verified

BAD: colorPrimary
GOOD: primaryColor

## Import order

The inports must be ordered as follows

1. Imports of react

2. Imports libraries

3. Imports of internal profits

4. Component Imports

5. Imports of screens

The imports must be organized in alphabetical order

Example

import React, {a, b, c, d} from 'react-native';

import React, {useEffect, useState} from 'react-native';

import {Button, Text, View} from 'react-native';
