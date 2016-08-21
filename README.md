# openmrs-appstore-httpclient

### Content Table
- [Description](#description)
- [Setting Up](#setting-up)
- [Code Structure](#code-structure)
- [Contribute](#contribute)
- [External Links](#external-links)

###Description:

openmrs-appstore-httpclient is a proxy server for the openmrs-contrib-appstore which adds the CORS headers to the incoming responses from [Bintray](https://bintray.com)

###Setting Up

1.Install stable version of Node.js from https://nodejs.org/en/download/.
- Node Pacakage Manager(npm) comes bundled with Node.js

2.Clone the repo
```
$ git clone https://github.com/vishnuraom/openmrs-appstore-httpclient.git
$ cd openmrs-appstore-httpclient
```

3.Install dependencies
```
$ npm install
```

4.Open Git Bash and create a .env file
```
$ touch .env
```

5.Update the .env file with your [Bintray](https://bintray.com) credentials.
[Where do I find the Bintray API key?](https://talk.openmrs.org/t/bintray-better-method-of-distributing-apps/5606/18?u=vishnurao)

Example .env file
```
BINTRAY_USERNAME=vishnuraom
BINTRAY_APIKEY=4462404b9c3d2ce2dabcee2c467a9157973d543a
#Obviously replace the above key with your own apikey
```

6.Start the server
```
$ nodemon
```

###Code Structure:

<table>
 <tr>
  <td>bin/www.js</td>
  <td>Script for running the server</td>
 </tr>
  <tr>
   <td>node_modules</td>
   <td>Contains  dependencies </td>
  </tr>
 <tr>
  <td>public/images</td>
  <td>favicon.ico</td>
 </tr>
 <tr>
  <td>routes/</td>
  <td>All the available routes</td>
 </tr> 
 <tr>
  <td>.env</td>
  <td>Should create the file after cloning the repo,contains Bintray username and apikey</td>
 </tr>
 <tr>
  <td>package.json</td>
  <td>Manifest file used to manage project dependencies.</td>
 </tr>
</table>

###External Links

- [openmrs-appstore-httpclient-docs](https://github.com/vishnuraom/openmrs-appstore-httpclient-docs)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [async](https://www.npmjs.com/package/async)