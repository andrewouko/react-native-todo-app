# Introduction
This is a [ReactNative] Typescript project to showcase the navigation, statement management and API fetching.
It uses the [https://jsonplaceholder.typicode.com] open API as the backend.

## Prerequisites
- Android SDK Platform 33
- React native cli
- NodeJS & Npm (LTS preferred)

## Dependencies
- @react-navigation/native: For screen navigation
- @react-native-community/checkbox: closest we can get to native checkbox component
- ZOD: validation tool
- Redux Toolkit: API slices & middleware for queries and mutations to https://jsonplaceholder.typicode.com
- Redux: state management
- react-hook-form: form builder
- @hookform/resolvers: zodResolver to validate zod schemas for the forms

## Getting Started

1. Install the dependencies
```bash
npm i
```
2. Test the application:
```bash
npm run test
```
3. Run the application if tests are successful:
```bash
npm run android 
```
3. Run the application in a dev environment:
```bash
npm run start 
```

NB: You need an emulator or physical device to run the application. See instructions here [https://reactnative.dev/docs/running-on-device]

## TODO:
1. Testing