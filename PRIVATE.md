## README for the private EdEHR Technologies repo

## Make EHR defs process

See  https://github.com/edehr/makeEhrV2 

Run the script
```shell
./deploy.sh
```
This pulls from google sheets. You need to be auth'd on the project.
```shell
Authorize this app by visiting this url:
https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fspreadsheets.readonly&response_type=code&client_id=939731074967-8du9ab67cgv3kq0map7dd81pq3j3dhi5.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost
Enter the code from that page here: 
```

Go through the process, and you'll get a "Site can not be reached" message.  Look at the URL and extract the code.  E.g.
```
http://localhost/?code=4/0AQlEd8ykji8yYXVD43azl6LAkmEMDg3fj3E1VJqAqRaEAlqMXGmebk0AqiZEtvlDB_4qfA&scope=https://www.googleapis.com/auth/spreadsheets.readonly

```

The code is ```4/0AQlEd8ykji8yYXVD43azl6LAkmEMDg3fj3E1VJqAqRaEAlqMXGmebk0AqiZEtvlDB_4qfA```
