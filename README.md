# Learner Lerna


## Steps taken:

* [x] new NPM app
* [x] install lerna as Dev Dependency
* [x] git init
* [x] lerna init
* [x] lerna create 2 (private) app packages (eg alpha/beta) - in this case SPA/ViteJS/Vanilla React app should be fine
  * finding: running `npm lerna run start` from root will run every package's `npm start` script.
  * finding: `npx lerna run start --stream -- --silent` removes a lot (not all) of the logging noise
  * finding: `npx lerna publish` (once pushed to GH) will prompt for what version to bump to (minor/patch/major/alpha/etc)
  * finding: attempted to publish to npm despite being flagged as private. (failed as I wasn't logged into NPM)
  * finding: this was made to both alpha and beta packages
  * finding: running `npm lerna version` at this point returned nothing - "No changed packages to version"
* [ ] make a change to just one package, push and version.
  * finding: `npx lerna version` will bump ALL packages to the latest.
* [ ] lerna create a (private) "common" package (this idea is to import a file or 2 from here into alpha/beta)
* [ ] for now keep all dependencies within each package (no hoisting)
* [ ] ensure common is a dependency of alpha/beta
* [ ] understand what lerna publish/version/changed


## Interesting things

*  https://github.com/lerna/lerna#git-hosted-dependencies - could other repos also use lerna and reference other GH repos as a dependency (thinking pinata here)
