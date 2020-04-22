const { environment } = require('../configuration/environment');
const { DbClient } = require('../repository/database-client');

const _getClient = () => DbClient.getClientInstance();

const insert = async (item) => {
    try {
        const params = {
            TableName: environment.table,
            Item: item,
        };

        await _getClient().put(params).promise();
    } catch (error) {
        console.log(error);
    }
};

const find = async () => {
    let result = [];

    try {
        const params = {
            TableName: environment.table,
        };

        result = [...(await _getClient().scan(params).promise()).Items];
    } catch (error) {
        console.log(error);
    }

    return result;
};

const findById = async (filter = {}) => {
    let result;

    try {
        const params = {
            TableName: environment.table,
            Key: filter,
        };

        result = (await _getClient().get(params).promise()).Item;
    } catch (error) {
        console.log(error);
    }

    return result;
};

const updateById = async (item, expression, attributes) => {
    let result;

    try {
        const params = {
            TableName: environment.table,
            Key: { id: item.id },
            UpdateExpression: expression,
            ExpressionAttributeValues: attributes,
            ReturnValues: "UPDATED_NEW"
        };

        result = (await _getClient().update(params).promise()).Attributes;
    } catch (error) {
        console.log(error);
    }

    return result;
};

const deleteById = async (filter) => {
    try {
        const params = {
            TableName: environment.table,
            Key: { id: filter.id },
        };

        await _getClient().delete(params).promise();
    } catch (error) {
        console.log(error);
    }
};

module.exports = { insert, find, findById, updateById, deleteById };