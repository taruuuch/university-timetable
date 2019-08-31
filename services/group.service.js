const { groupDb } = require('../db');

const getGroup = async (user, context) => {
    try {
        return await groupDb();
    } catch(e) {
        throw new Error(e.message);
    };
};

module.exports = {
    getGroup
};