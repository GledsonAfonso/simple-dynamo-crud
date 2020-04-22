const { environment } = require('../configuration/environment');
const AWS = require('aws-sdk');

const DbClient = (() => {
    let instance;

    const getClientInstance = () => {
        try {
            if (!!!instance) {
                let configuration = { ...environment };
                AWS.config.update(configuration);
        
                instance = new AWS.DynamoDB.DocumentClient();
            }
        } catch (error) {
            console.log(error);
        }

        return instance;
    };

    return {
        getClientInstance,
    };
})();

module.exports = { DbClient };