# Documentation

> About these documentation pages

The essential elements of the directory structure are below.  At the top is the root README which becomes the
home page. Then, in order of application structure, is the LMS, outside, and inside.  This is followed by technical 
documentation about how to deploy this application on a server and other DevOp information.

```
.
├─ README.md
├─ lms/
│  ├─ README.md
│  └─ LTI.md
├─ outside/
│  ├─ assignments.md
│  └─ README.md
├─ inside/
│  └─ README.md
├─ inside-custom/
│  ├─ Med-Admin-Records.md
│  └─ README.md
├─ inside-generator/
│  ├─ Ehr-Calculated-Values.md
│  ├─ Ehr-Defs-Input-Types.md
│  ├─ Ehr-Defs-Keys.md
│  ├─ Ehr-Defs-Location.md
│  ├─ Ehr-Defs-Pages.md
│  └─ README.md
└─ devop/
   ├─ deploy.md
   ├─ technical-architecture.md
   └─ README.md
```

The documentation system is build with [VuePress](https://vuepress.vuejs.org/).  The menu configuration is located
in ```./vuepress/config.js```.   Images placed into the ```images``` folder are automatically copied to a
public directory when the documentation is published.

## Publish

To publish the documentation to the publicly available github pages repository just run the ```docDeploy.sh``` script
in the root directory of this project.  

Public docs are currently placed here [https://bryan-gilbert.github.io/edehr/](https://bryan-gilbert.github.io/edehr/)
