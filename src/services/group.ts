import groupDb from '../db';

const getGroup = async (user, context) => {
    try {
        return await groupDb();
    } catch(e) {
        throw new Error(e.message);
    };
};

export default getGroup;