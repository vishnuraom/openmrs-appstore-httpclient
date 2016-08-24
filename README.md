# openmrs-appstore-httpclient

[![OpenMRS Talk](https://omrs-shields.psbrandt.io/custom/openmrs/talk/F26522?logo=openmrs)](https://talk.openmrs.org/t/owa-store-project/6255) [![OpenMRS IRC](https://img.shields.io/badge/openmrs-irc-EEA616.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MTIiIGhlaWdodD0iNjEyIiB2aWV3Qm94PSIwIDAgNjEyIDYxMiI%2BPHBhdGggZD0iTTE1MyAyMjkuNWMtMjEuMTMzIDAtMzguMjUgMTcuMTE3LTM4LjI1IDM4LjI1UzEzMS44NjcgMzA2IDE1MyAzMDZjMjEuMTE0IDAgMzguMjUtMTcuMTE3IDM4LjI1LTM4LjI1UzE3NC4xMzMgMjI5LjUgMTUzIDIyOS41em0xNTMgMGMtMjEuMTMzIDAtMzguMjUgMTcuMTE3LTM4LjI1IDM4LjI1UzI4NC44NjcgMzA2IDMwNiAzMDZjMjEuMTE0IDAgMzguMjUtMTcuMTE3IDM4LjI1LTM4LjI1UzMyNy4xMzMgMjI5LjUgMzA2IDIyOS41em0xNTMgMGMtMjEuMTMzIDAtMzguMjUgMTcuMTE3LTM4LjI1IDM4LjI1UzQzNy44NjcgMzA2IDQ1OSAzMDZzMzguMjUtMTcuMTE3IDM4LjI1LTM4LjI1UzQ4MC4xMzMgMjI5LjUgNDU5IDIyOS41ek0zMDYgMEMxMzcuMDEyIDAgMCAxMTkuODc1IDAgMjY3Ljc1YzAgODQuNTE0IDQ0Ljg0OCAxNTkuNzUgMTE0Ljc1IDIwOC44MjZWNjEybDEzNC4wNDctODEuMzRjMTguNTUyIDMuMDYyIDM3LjYzOCA0Ljg0IDU3LjIwMyA0Ljg0IDE2OS4wMDggMCAzMDYtMTE5Ljg3NSAzMDYtMjY3Ljc1UzQ3NS4wMDggMCAzMDYgMHptMCA0OTcuMjVjLTIyLjMzOCAwLTQzLjkxLTIuNi02NC42NDMtNy4wMmwtOTAuMDQgNTQuMTI0IDEuMjA0LTg4LjdDODMuNSA0MTQuMTMzIDM4LjI1IDM0NS41MTMgMzguMjUgMjY3Ljc1YzAtMTI2Ljc0IDExOS44NzUtMjI5LjUgMjY3Ljc1LTIyOS41czI2Ny43NSAxMDIuNzYgMjY3Ljc1IDIyOS41UzQ1My44NzUgNDk3LjI1IDMwNiA0OTcuMjV6IiBmaWxsPSIjZmZmIi8%2BPC9zdmc%2B)](http://irc.openmrs.org) [![OpenMRS Telegram](https://img.shields.io/badge/openmrs-telegram-009384.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDAgMjQwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIuNjY3IiB5MT0iLjE2NyIgeDI9Ii40MTciIHkyPSIuNzUiPjxzdG9wIHN0b3AtY29sb3I9IiMzN2FlZTIiIG9mZnNldD0iMCIvPjxzdG9wIHN0b3AtY29sb3I9IiMxZTk2YzgiIG9mZnNldD0iMSIvPjwvbGluZWFyR3JhZGllbnQ%2BPGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iLjY2IiB5MT0iLjQzNyIgeDI9Ii44NTEiIHkyPSIuODAyIj48c3RvcCBzdG9wLWNvbG9yPSIjZWZmN2ZjIiBvZmZzZXQ9IjAiLz48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBvZmZzZXQ9IjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48Y2lyY2xlIGN4PSIxMjAiIGN5PSIxMjAiIHI9IjEyMCIgZmlsbD0idXJsKCNhKSIvPjxwYXRoIGZpbGw9IiNjOGRhZWEiIGQ9Ik05OCAxNzVjLTMuODg4IDAtMy4yMjctMS40NjgtNC41NjgtNS4xN0w4MiAxMzIuMjA3IDE3MCA4MCIvPjxwYXRoIGZpbGw9IiNhOWM5ZGQiIGQ9Ik05OCAxNzVjMyAwIDQuMzI1LTEuMzcyIDYtM2wxNi0xNS41NTgtMTkuOTU4LTEyLjAzNSIvPjxwYXRoIGZpbGw9InVybCgjYikiIGQ9Ik0xMDAuMDQgMTQ0LjQxbDQ4LjM2IDM1LjczYzUuNTIgMy4wNDQgOS41IDEuNDY3IDEwLjg3Ni01LjEyNGwxOS42ODUtOTIuNzYzYzIuMDE2LTguMDgtMy4wOC0xMS43NDYtOC4zNTgtOS4zNWwtMTE1LjU5IDQ0LjU3MmMtNy44OSAzLjE2NS03Ljg0NCA3LjU2Ny0xLjQ0IDkuNTI4bDI5LjY2NCA5LjI2IDY4LjY3My00My4zMjZjMy4yNC0xLjk2NiA2LjIxNy0uOTEgMy43NzUgMS4yNTgiLz48L3N2Zz4%3D)](https://telegram.me/openmrs) [![devDependencies Status](https://david-dm.org/alanshaw/david-www/dev-status.svg)](https://david-dm.org/alanshaw/david-www?type=dev) [![Dependencies Status](https://david-dm.org/vishnuraom/openmrs-appstore-httpclient.svg)](https://github.com/vishnuraom/openmrs-appstore-httpclient/blob/master/package.json)

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