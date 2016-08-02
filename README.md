# openmrs-appstore-httpclient
Description:
openmrs-appstore-httpclient is a proxy server for the openmrs-contrib-appstore which adds the CORS headers to the incoming responses from [Bintray](https://bintray.com)

#Setting Up

1.Install stable version of Node.js from https://nodejs.org/en/download/.
Node Pacakage Manager(npm) comes bundled with Node.js

2.Clone the repo
```
$ git clone https://github.com/vishnuraom/openmrs-appstore-httpclient.git
```

3.Go to the project folder and install dependencies
```
$ npm install
```

4.Open Git Bash and create a .env file
```
$ touch .env
```

5.Update the .env file with your [Bintray](https://bintray.com) credentials.
[Where do I find the Bintray API key?](https://talk.openmrs.org/t/bintray-better-method-of-distributing-apps/5606/18?u=vishnurao)
Eg:.env file
```
BINTRAY_USERNAME=vishnuraom
BINTRAY_APIKEY=44your4api3d2ce2dab1232c467a915797key43a
```

6.Start the server
```
$ nodemon
```
