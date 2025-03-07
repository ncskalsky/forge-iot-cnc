# ForgeIoTDemo

![Platforms](https://img.shields.io/badge/platform-Windows|MacOS-lightgray.svg)
![Node.js](https://img.shields.io/badge/node-%3E%3D%2010.0.0-brightgreen.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

[![Viewer](https://img.shields.io/badge/Viewer-v7-green.svg)](http://developer.autodesk.com/)
[![Data-Management](https://img.shields.io/badge/Data%20Management-v1-green.svg)](http://autodesk-forge.github.io)
[![OSS](https://img.shields.io/badge/OSS-v2-green.svg)](http://autodesk-forge.github.io)
[![Model-Derivative](https://img.shields.io/badge/Model%20Derivative-v2-green.svg)](http://autodesk-forge.github.io)

![Intermediate](https://img.shields.io/badge/Level-Intermediate-blue.svg)

Autodesk University 2020 IoT Demo: An IoT data visualization example made by extending the forge-digital-twin sample project, a Database, MQTT bridge, and some IoT sensors!

![Screenshot](thumbnail.png)

## Development

### Prerequisites

- Node.js v10+
- [Forge](https://forge.autodesk.com) application credentials,
  and an _urn_ of a model processed with [Model Derivative APIs](https://forge.autodesk.com/en/docs/model-derivative/v2)
- MongoDB database
  - for example, use the free tier of [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
  - or run it locally: https://docs.mongodb.com/manual/installation

### Setup

- clone this repository
- install dependencies: `npm install`
- run server with all the required env. variables
  - for example, on macOS:
    ```bash
    export FORGE_CLIENT_ID=<client-id>
    export FORGE_CLIENT_SECRET=<client-secret>
    export FORGE_MODEL_URN=<model-urn>
    export MONGODB_URL=<mongodb-connection-string>
    npm start
    ```
  - or, when using [Visual Studio Code](https://code.visualstudio.com), add this configuration to your _.vscode/launch.json_:
  ```json
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Express Server",
            "program": "${workspaceFolder}/server.js",
            "env": {
                "FORGE_CLIENT_ID": "<client-id>",
                "FORGE_CLIENT_SECRET": "<client-secret>",
                "FORGE_MODEL_URN": "<model-urn>",
                "MONGODB_URL": "<mongodb-connection-string>"
            }
        }
  ```
- go to http://localhost:3000

### Bootstrap theme

The project uses a custom Bootstrap theme. In order to customize it:

- modify _tools/bootstrap-theme/custom.scss_
- run `npm build:client` to update _public/stylesheets/bootstrap.css_
- commit the new version of the CSS file

### Deployment

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Sample data

Expected Database collection schema
  when: new Date()
  temperature: // Sensor value, in this case (Temp), it will be degrees celsius (float)
  sensor_type: // sensor type is only 'Temp' presently
  sensor_name: // sensor name can be 'StockMaterial', 'Tool', 'Spindle', 'StepperX', etc.


## Features

- Current Part, tool, and machine temperatures
- Temperature History
- Temperature Heat Map
- CNC Machine and Part visualization

## Support

For support, please contact forge.help@autodesk.com.

## License

This sample is licensed under the terms of the [MIT License](https://tldrlegal.com/license/mit-license).
Please refer to [LICENSE](LICENSE) for more details.

## Written by

Petr Broz ([@ipetrbroz](https://twitter.com/ipetrbroz)), Varun Patil, Forge Partner Development Group with additional IoT code from Nathan Skalsky, Forge Senior Product Manager. 
