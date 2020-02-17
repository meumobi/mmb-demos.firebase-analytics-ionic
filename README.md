# mmb-demos.firebase-analytics-ionic
**Tutorial** [Add Firebase Analytics on Native Ionic App](http://meumobi.github.io/ionic/2019/02/17/firebase-analytics-ionic.html)

## Getting started

### Prerequisites
[Download the installer](https://nodejs.org/) for Node.js 6 or greater.
Install both [Ionic].

```terminal
$ npm install cordova @ionic/cli typescript -g
...
$ npm ls -g cordova @ionic/cli npm typescript --depth 0
/Users/vdias/.nvm/versions/node/v12.11.0/lib
├── @ionic/cli@6.1.0 
├── cordova@9.0.0 
├── npm@6.13.6 
├── phonegap@9.0.0
└── typescript@3.7.5
```

### Usage
1. Run

- `git clone https://github.com/meumobi/mmb-demos.firebase-analytics-ionic`.
- `cd mmb-demos.firebase-analytics-ionic`
- `npm install`

2.  Change the package ID in the config.xml to another package ID.

  - which is associated with your Apple Developer Team if you pretend to run it on iOS

3.  Create a project at https://firebase.google.com/ and add an Android and iOS app which are configured for your package ID.

 - Download the `google-services.json` and `GoogleService-info.plist` for your apps, save them on root of project.

5. Build and run your project.
6. Profit. :tada:

## Todo
- [ ] Add Firebase Analytics support on web app.
  - include a "switch" service to inject native or web service.
- [ ] Extend witch cloud function.
- [ ] Export Firebase Analytics data to BigQuery for detailed analyse.

## Deploying

### Progressive Web App

1. Run `npm run ionic:build --prod`
2. Push the `www` folder to your hosting service

### Android

1. Run `ionic cordova run android --prod`

### iOS

1. Run `ionic cordova run ios --prod`
