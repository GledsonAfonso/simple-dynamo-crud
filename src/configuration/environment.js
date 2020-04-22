if (!!!process || !!!process.env) {
    throw new Error('⚠️  Could not find .env file  ⚠️');
}

const environment = {
    region: process.env.region,
    endpoint: process.env.endpoint,
    table: process.env.table,
    accessKeyId: process.env.access_key_id,
    secretAccessKey: process.env.secret_access_key,
};

module.exports = { environment };