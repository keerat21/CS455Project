
# CS455Project -react native mobile computing
<h1 align="center"> Recursive note maker </h1> <br>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents


 
 
 
 
 
 Troubleshooting tips
 Credits and acknowledgments
 - [Introduction](#Introduction)
- [Configuration and Installation instructions](#Configuration-and-Installation-instructions)
- [Operating instructions](#Operating-instructions)
- [Manifest (list of files)](#Manifest-(list-of-files))
- [Copyright information](#Copyright information)
- [Contact information](#Contact information-)
- [Bug list](#Bug list)
- [Acknowledgments](#acknowledgments)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

<p align="center">
    <a href="https://ibb.co/6sv24tb"><img src="https://i.ibb.co/6sv24tb/mig.jpg" alt="mig" border="0"></a>
</p>

View repository and user information, control your notifications and even manage your issues and pull requests. Built with React Native, GitPoint is one of the most feature-rich unofficial GitHub clients that is 100% free.


## Configuration and Installation instructions

**Expo Go app Required on the smartphone.**<br>

**Make sure to have NodeJS installed on your system** <br>

Go to <a href="https://reactnative.dev/docs/environment-setup">React native set up</a> to get more info on how to install Expo CLI on the system. <br>

```
npm install -g expo-cli
expo init <project-name>

cd <project-name>
npm start  # you can also use: expo start
```
<br>
Inside the project folder, replace the default App.js file with the provided App.js file <br>
Add the other .js files in the same location as the App.js file.<br>
After saving the files, in the command prompt, in folder location type ```npm start``` or ```expo start``` <br>
Scan the QR code

**Available for both iOS and Android.**


## Operating instructions

The things you can do with Recrsive Note Maker:

* Add notes to homescreen
* click on note which opens up a new screen which furthur can be opened to another screen.
* Camera for each deatils/note screen
* press and hold the note to delete it
* Restart from home button
* go back button

https://i.ibb.co/WPxz4GF/IMG-0173.png


https://i.ibb.co/GsJqxF7/IMG-0170.png






<p align="center">
  <img src = "https://i.ibb.co/6DNqhDY/IMG-0169.png"  width=290>
</p>
<p align="center">
  <img src = "https://i.ibb.co/gb1xH3p/IMG-0172-min.png"  width=290>
</p>
<p align="center">
  <img src = "https://i.ibb.co/SP105tY/IMG-0168.png"  width=290>
</p>


## Manifest (list of files)
* App.js
* todoItem.js
* camera.js
* ListRender.js



## Feedback

Feel free to send us feedback on [Twitter](https://twitter.com/gitpointapp) or [file an issue](https://github.com/gitpoint/git-point/issues/new). Feature requests are always welcome. If you wish to contribute, please take a quick look at the [guidelines](./CONTRIBUTING.md)!

If there's anything you'd like to chat about, please feel free to join our [Gitter chat](https://gitter.im/git-point)!

## Contributors

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification and is brought to you by these [awesome contributors](./CONTRIBUTORS.md).

## Build Process

- Follow the [React Native Guide](https://facebook.github.io/react-native/docs/getting-started.html) for getting started building a project with native code. **A Mac is required if you wish to develop for iOS.**
- Clone or download the repo
- `yarn` to install dependencies
- `yarn run link` to link react-native dependencies
- `yarn start:ios` to start the packager and run the app in the iOS simulator (`yarn start:ios:logger` will boot the application with [redux-logger](<https://github.com/evgenyrodionov/redux-logger>))
- `yarn start:android` to start the packager and run the app in the the Android device/emulator (`yarn start:android:logger` will boot the application with [redux-logger](https://github.com/evgenyrodionov/redux-logger))

Please take a look at the [contributing guidelines](./CONTRIBUTING.md) for a detailed process on how to build your application as well as troubleshooting information.

**Development Keys**: The `CLIENT_ID` and `CLIENT_SECRET` in `api/index.js` are for development purposes and do not represent the actual application keys. Feel free to use them or use a new set of keys by creating an [OAuth application](https://github.com/settings/applications/new) of your own. Set the "Authorization callback URL" to `gitpoint://welcome`.

## Backers [![Backers on Open Collective](https://opencollective.com/git-point/backers/badge.svg)](#backers)

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/git-point#backer)]

<a href="https://opencollective.com/git-point#backers" target="_blank"><img src="https://opencollective.com/git-point/backers.svg?width=890"></a>

## Sponsors [![Sponsors on Open Collective](https://opencollective.com/git-point/sponsors/badge.svg)](#sponsors)

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/git-point#sponsor)]

<a href="https://opencollective.com/git-point/sponsor/0/website" target="_blank"><img src="https://opencollective.com/git-point/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/git-point/sponsor/1/website" target="_blank"><img src="https://opencollective.com/git-point/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/git-point/sponsor/2/website" target="_blank"><img src="https://opencollective.com/git-point/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/git-point/sponsor/3/website" target="_blank"><img src="https://opencollective.com/git-point/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/git-point/sponsor/4/website" target="_blank"><img src="https://opencollective.com/git-point/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/git-point/sponsor/5/website" target="_blank"><img src="https://opencollective.com/git-point/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/git-point/sponsor/6/website" target="_blank"><img src="https://opencollective.com/git-point/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/git-point/sponsor/7/website" target="_blank"><img src="https://opencollective.com/git-point/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/git-point/sponsor/8/website" target="_blank"><img src="https://opencollective.com/git-point/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/git-point/sponsor/9/website" target="_blank"><img src="https://opencollective.com/git-point/sponsor/9/avatar.svg"></a>

## Acknowledgments

Thanks to [JetBrains](https://www.jetbrains.com) for supporting us with a [free Open Source License](https://www.jetbrains.com/buy/opensource).
