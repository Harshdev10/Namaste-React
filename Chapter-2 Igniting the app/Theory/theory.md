# Chapter 2 - Igniting our app

## Theory Assignment

- Q.1 What is `NPM`?
Ans: NPM is a package manager which stores the packages online  and we can use these npm packages in our project.NPM is used when you have `node` installed on our machine. It uses CLI to get the packages from the database. The database is known as `NPM registry`. <br>
Alternative of `npm` is `yarn`.

- ##### How to initialise NPM?
- To initialize `npm` in our project we should use the command `npm init ` and then fill all the details it ask for .After that a `package.json` file is created in our working directory.

- Q.2 What is `Parcel/Webpack` ? Why `do we need it`? <br>
Ans: `Parcel/Webpack` are the bundlers used mostly for javascript and typescript code , that help you minify, clean and make your code compact so that it become easier to send a request or receive the response from the server when it usually takes you to transfer multiple files without using any bundler for loading the page of your application. Both of these bundlers substantially reduce the time it takes for the transfer of data and files to the server from the application. Along with that both bundlers parcel and webpack remove the unnecessary comments, new lines, any kind of block delimiters, and white spaces while the functionality of the code remains unchanged.

**Parcel Features:**
* HMR (Hot Module Replacement)- parcel keeps track of file changes via file watcher algorithm and renders the changes in files . Basicall a feature that allows developers to update modules in a running application without requiring a full page reload.

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

