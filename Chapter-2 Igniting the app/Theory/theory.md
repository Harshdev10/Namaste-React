# Chapter 2 - Igniting our app

## Theory Assignment

## Q.1 What is `NPM`?
Ans: NPM is a package manager which stores the packages online  and we can use these npm packages in our project.NPM is used when you have `node` installed on our machine. It uses CLI to get the packages from the database. The database is known as `NPM registry`. <br>
Alternative of `npm` is `yarn`.

* ##### How to initialise NPM?
```
npm init
```
To initialize `npm` in our project we should use the command `npm init ` and then fill all the details it ask for .After that a `package.json` file is created in our working directory.

## Q.2 What is `Parcel/Webpack` ? Why `do we need it`? <br>
Ans: `Parcel/Webpack` are the bundlers used mostly for javascript and typescript code , that help you minify, clean and make your code compact so that it become easier to send a request or receive the response from the server when it usually takes you to transfer multiple files without using any bundler for loading the page of your application. Both of these bundlers substantially reduce the time it takes for the transfer of data and files to the server from the application. Along with that both bundlers parcel and webpack remove the unnecessary comments, new lines, any kind of block delimiters, and white spaces while the functionality of the code remains unchanged.

### Parcel Features:
* HMR (Hot Module Replacement)- parcel keeps track of file changes via file watcher algorithm and renders the changes in files . Basically a feature that allows developers to update modules in a running application without requiring a full page reload.

* File Watcher Algorithm - This algorithm is written in C++. As the name suggest it keeps a watch on the file and look for any changes.
* Minification
* CLeaning your code.
* DEV and production Build
* Super fast building algorithm
* Image optimization
* Caching with development
* Compresses
* Compatible with older version of browser
* HTTPS in dev
* Port number classification
* Consisistent Hashing Algorithm
* Automatic code splitting


### installation command

### installation commands:
- Install:
```
npm install -D parcel
```
`-D` is used for development and as a development dependency.

- Parcel Commands :
    - For development build:
    ```
    npx parcel <entry_point> 
    ```
    - For production build :
    ```
    npx parcel build <entry_point> 
    ```
## Q: What is `.parcel-cache`?
A: `.parcel-cache` is used by parcel(bundler) to reduce the building time.
It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.


## Q: What is `npx`?
A: `npx` is a command-line tool primarily used for executing Node. js packages without installing them. It simplifies the development process by allowing developers to test new packages and experiment with different package versions without cluttering their systems with too many installations.

## Q: What is difference between `dependencies` vs `devDependencies`?
A: `Dependencies`is a library that a project needs to function effectively. Whereas A `devdependency` is a package that a developer needs during development.
`Dependencies`
These are the packages that are required for your application to run properly. They are essential packages for your project's runtime.
`Devdependencies`
These are the packages that are required for development and testing purposes only. They are needed during development but not for production.

## Q: What is `Tree Shaking`?
A: `Tree shaking` is a technique used in JavaScript to remove unused code or modules from a bundle during the build process. It's a part of the bundling process in JavaScript-based development. 
Tree shaking is a dead code elimination process that helps you remove unused or redundant code from your app. Dead code refers to the code that is not executed or used during runtime. 
Tree shaking makes JavaScript bundles smaller and faster to load. It can help you optimize your web performance and reduce your carbon footprint. 

## Q: What is `Hot Module Replacement`?
A: `Hot Module Replacement (HMR)`is a powerful feature designed to enhance the development process by providing real-time updates to modules within a running application. The beauty of HMR lies in its ability to make these updates without requiring a full page reload, thereby saving valuable time during development.

## Q: List down your favorite `5 superpowers of Parcel` and describe any 3 of them in your own words.
A: `5 superpowers of Parcel`:
* `HMR (Hot Module Replacement)` - adds, or removes modules while an application is running, without a full reload.
* `File watcher algorithm` - File Watchers monitor directories on the file system and perform specific actions when desired files appear.
* `Minification` - Minification is the process of minimizing code and markup in your web pages and script files.
* `Image optimization`
* `Caching while development`

## Q: What is `.gitignore`? What should we `add and not add` into it?
A: The `.gitignore file` is a text file that tells `Git` which files or folders to `ignore` in a project during `commit to the repository`.
The types of files you should consider adding to a .gitignore file are any files that do not need to get committed. for example, For security, the security key files and API keys should get added to the gitignore.
`package-lock.json` should `not add` into your `.gitignore` file.

## Q: What is the difference between `package.json` and `package-lock.json`?
A: `package.json`:
* This file is mandatory for every project
* It contains basic information about the project
* Application name/version/scripts

`package-lock.json`:
* This file is automatically generated for those operations where npm modifies either the node_module tree or package-json.
* It is generated after an npm install
* It allows future devs & automated systems to download the same dependencies as the project.
* it also allows to go back to the past version of the dependencies without actual
‘committing the node_modules folder.
* It records the same version of the installed packages which allows to reinstall them.
Future installs will be capable of building identical description tree.

**~** or **^** in `package.json` file :
These are used with the versions of the package installed.

For example  in `package.json` file:
```
"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
```

* **~** : `Approximately equivalent to version`, will update you to all future patch versions, without incrementing the minor version.
* **^** : `Compatible with version`, will update you to all future minor/patch versions, without incrementing the major version.

> If none of them is present, that means only the version specified in `package.json` file is used in the development.

## Q: Why should I not modify `package-lock.json`?
A: `package-lock.json` file contains the information about the dependencies and their versions used in the project. Deleting it would cause dependencies issues in the production environment. So don't modify it, It's being handled automatically by NPM.

## Q: What is `node_modules` ? Is it a good idea to push that on git?
A: `node_modules` folder like a cache for the external modules that your project depends upon. When you npm install them, they are downloaded from the web and copied into the node_modules folder and Nodejs is trained to look for them there when you import them (without a specific path).
`Don't push node_modules`in github because it contains lots of files(more than 100 MB), it will cost you memory space.

## Q: What is the `dist` folder?
A: The `/dist` folder contains the minimized version of the source code. The code present in the `/dist` folder is actually the code which is used on production web applications. Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.


## Q: What is `browserslist`?
A: `Browserslist` is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.
