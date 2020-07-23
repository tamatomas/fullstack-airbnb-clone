# Yarn-Workspace-Expo-CRA
Simple Yarn Workspace setup with Expo React Native, React.js and Apollo Server.

##  Workspace:
The package folder contains the web, app, server, and common folders. There you can find the Apollo server with TypeGraphQL and TypeORM configurated with an auth API that is in development to be used in further projects. Also, it contains app and web folders where you can find React.js and Expo React Native ready to start.

## Installation:
You can follow this guide in how to set up a yarn workspace: [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)
Create react app and express guide: [Monorepo](https://www.smashingmagazine.com/2019/07/yarn-workspaces-organize-project-codebase-pro/)
To add expo you have to follow these steps: [dev.to](https://dev.to/expolovers/how-to-insert-an-expo-project-in-a-monorepo-5ab0)
If you are using Windows you will have to use [Windows Linux Subsystem](https://docs.microsoft.com/en-us/windows/wsl/install-win10) and [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) extension from Visual Studio Code extensions because the [expo-yarn-workspaces](https://github.com/expo/expo/tree/master/packages/expo-yarn-workspaces) package is only working on macOS and Linux.

##  Usage:
1. Clone the repo.
2. Execute yarn install
3. Run start-expo or start-web to start the clients.
