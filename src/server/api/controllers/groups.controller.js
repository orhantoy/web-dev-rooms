/* TODO: This is an example controller to illustrate a server side controller.
Can be deleted as soon as the first real controller is added. */
const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
// const moment = require('moment-timezone');

const getGroups = async () => {
  try {
    return await knex('groups').select('groups.id', 'groups.title');
  } catch (error) {
    return error.message;
  }
};

const getGroupById = async (id) => {
  try {
    const groups = await knex('groups')
      .select('groups.id as id', 'title')
      .where({ id });
    if (groups.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return groups;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getGroups,
  getGroupById,
};
