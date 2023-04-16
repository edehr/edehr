# Project - EdEHR
> Educational Electronic Health Record system: a [BCcampus](https://bccampus.ca) project.

This project aims to create a student-focused Eletronic Health System where students and professors would be able to keep track of their 
assessments. For more information on the project and it's guidelines, please refer to the [About](./about.md) section.


## Documentation

We encourage developers to read the documentation before contributing. Understanding the definitions and the architecture of the project will help you understand the codebase and make it easier for you to contribute to the project.

For more details about this project, [view the documentation](https://edehr.github.io/edehr/)

Alternatively, you can run a local documentation server by running the following command in your terminal:
```
npm run docs:dev
```
Then visit  [http://localhost:8080/edehr](http://localhost:8080/edehr) See documentation in the ```docs``` directory.



## Development setup

The following section will walk you through the process of installing and running the project in your local machine. It will also guide you on how to run the tests and how to run the project in a docker container.


## Pre-requisites

* In order to be able to run this project, you will need to do some simple set-up. This section will guide you on everything that will be expected in order to run it.

* The first step is making sure you have a working version of git installed on your machine. You can find the installation instructions [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

* The second step is to make sure you have a working version of npm and Node.js installed on your machine. You can find the installation instructions [here](https://nodejs.org/en/download/).

* (Optional) The third step is to make sure you have a working version of Docker installed on your machine. You can find the installation instructions [here](https://docs.docker.com/engine/install/).

    Keep in mind that the third step is optional, in case you want the project to run in a locally installed mongodb instance, make sure to follow these steps alternatively to the third one. You can find instructions for it here [here](https://docs.mongodb.com/manual/installation/).


## Clone the repository

You will need to clone the repository in order to be able to run the project. You can do so by running the following command in your terminal:


```
cd /your/development/area
git clone https://github.com/edehr/edehr.git
```

If you want to contribute to the project, you will need to fork the repository first and then clone it. You can find instructions on how to do so [here](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo).

After cloning the repository, you can install the dependencies for the project by running the following command:

```
cd edehr
npm run install
```

By running this command in the root of the repository, you will install all the client and server-side dependencies needed to run the project. Feel free to run them separately as well, in case it fits your needs better. 


## Starting your development server

In order to run the project, you will need to set it up in different terminal instances. The first one will be the server-side, which will be running the API and the database. The second one will be the client-side, which will be running the Vue.js application.

Start the API server. From project root:
```
npm run start:server
```
In another terminal session start the client. From project root:
```
npm run start:client
```

If you have a mongodb server instance running locally in your machine and listening to port 27017, then the following step can be skipped. However, in case you are running the project in a docker-powered mongodb instance, you can start and stop it by running the following commands:


Start the database server (in docker container)
```
npm run start:db
```

When done stop the database server. From project root:
```
npm run stop:db
```


### Lint

We currently use linting to assure that the code is clean and consistent. We ESLint for the client-side and ESlint for the server-side. 

It is recommended to set-up a linter on save in your IDE.

Instructions for VSCode can be found [here](https://code.visualstudio.com/docs/languages/javascript#_formatting).
For WebStorm, you can read more [here](https://www.jetbrains.com/help/webstorm/eslint.html).

Alternatively, you can run the linter from the project root by running:
```
npm run lint
```

Before pushing the code, you need to run the linter and making sure there are no errors. If there are any errors, you will need to fix them before pushing the code.

### Test
Run tests on both the client and server code base. From project root:
```
npm run test
```

It is strongly encouraged to write tests for any new code that you introduce as well as making sure your changes won't break existing tests (please update and extend them as you go).

When contributing, you will need to make sure that all the tests are passing. If there are any failing tests, you will need to fix them before pushing the code.

## Backing Up and Restoring a docker-powered MongoDB instance

The MongoDB database is running in a Docker container, and you need to be inside this container to run the database backup tools.  We have a npm script to make this step easy.
```
npm run shell:mongo
```
Restore and backup scripts are located in the /data/scripts directory, inside the docker container and in the  `$../database/scripts` outside the container.

Inside the Mongo Shell, run:
 ```
 cd data/scripts
 ```
Run the backup script `./backup.sh` and all the dump data will be placed in `data/dump/`  

A restore script, `./restore.sh`  restores based on the contents in the `dump/`. 

``Note``: It might be needed to change the permissions of the script files to be able to execute them. You can find more information on permissions for a docker-instance bash shell [here](https://stackoverflow.com/questions/39223249/how-to-run-a-shell-script-inside-a-docker-container).
```
chmod +x *.sh 
```

You may wish to tar zip the results
```bash

tar -czvf edehr.org-<date>.tar.gz /data/dump
```


## Contributing
EdEHR is an open source project, and we encourage contributions. Please read [the contributing guidelines](./CONTRIBUTING.md) before contributing.

