# Simple DynamoDB CRUD

A simple CRUD for DynamoDB using NodeJS

## Getting Started

These instructions will set you up to get you up and running on your local machine in no time!

### Prerequisites

You will need NodeJS to run this project. Go to [their download section][nodejs-download-section] to get it. In this project, we used version `v14.0.0` to be precise.

### Installing

After installing NodeJS, you can use either `npm` or `yarn` to install dependencies. Just run

```
npm i
```

or

```
yarn install
```

on root directory to install all dependencies and you are good to go!

### Setting up environment variables

This is kinda of important, so listen up!

You have to set a `.env` file on the root of the project having, at least, this parameters

```
region= ...
endpoint= ...
table= ...
access_key_id= ...
secret_access_key= ...
```

`region` corresponds to where you DynamoDB is located. You can found this on your Dynamo service, in the table overview.

`endpoint` is the database endpoint. If local, it will probably be something like `http://localhost:8000`. In case you are using a remote server, it will be related to your `region`.

`table` is the table name you want access to.

`access_key_id` and `secret_access_key` are, respectively, your access key id and you secret access key. To get this, you need to [create your own credentials on AWS website][getting-aws-access-key]

## Running the tests

We use Jest for testing, which is specified in the project dependency file. All you need to do to run it is type

```
npm test
```

for `npm` or

```
yarn test
```

for `yarn`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details


<!-- external links -->
[nodejs-download-section]: https://nodejs.org/en/download/
[getting-aws-access-key]: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SettingUp.DynamoWebService.html#SettingUp.DynamoWebService.GetCredentials