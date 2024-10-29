# module-federation-with-config-bug

### Prerequisites

* You need to install [yalc](https://github.com/wclr/yalc)

## Steps to reproduce

```
$ cd example-styled-components-package && yarn && yarn build && yalc publish
$ cd vite-remote && yarn && yarn dev
$ cd vite-host && yalc add example-styled-components-package && yarn && yarn dev
```
