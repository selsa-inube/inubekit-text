# IDS - inube-kit/text

This project is a starter repository that can be used to develop and publish new Inube Design System components. With this repository the intention is that any design-system team member can start to develop a new component without starting from scratch.

## Readme

This readme contains the details of usage of the starter. Once you create a new repo based in this template in github, please change the content of the README and make it relatable to the component you are creating.

## Instructions of usage

### Package.json

1. **name**: As you can see in the package.json file, the name of this package is "ids-starter". Please rename the name when you start your new project. Remember that all components are publish by the @inubekit organization in npm, so rename the package as @inubekit/{new-component-name}
2. **description**: Complete the description about the component you are creating.

### Environment variables

1. In order to control releases and package publishing, you will need to have a .env file with some environment variables.
2. `GH_TOKEN`: Create this token in github.com, using your profile settings. This token requires the **repo** scope.
3. `NPM_TOKEN`: Create this token in npmjs.com. You must ask the admin to add you as a organization admin prior to publish the package in npm.
