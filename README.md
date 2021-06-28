# Learner Lerna


## Steps taken:

* [x] new NPM app
* [x] install lerna as Dev Dependency
* [x] git init
* [x] lerna init
* [ ] lerna create 2 (private) app packages (eg alpha/beta) - in this case SPA/ViteJS/Vanilla React app should be fine
* [ ] lerna create a (private) "common" package (this idea is to import a file or 2 from here into alpha/beta)
* [ ] for now keep all dependencies within each package (no hoisting)
* [ ] ensure common is a dependency of alpha/beta
* [ ] understand what lerna publish/version/changed


## Interesting things

*  https://github.com/lerna/lerna#git-hosted-dependencies - could other repos also use lerna and reference other GH repos as a dependency (thinking pinata here)
