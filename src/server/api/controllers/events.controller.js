const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');

const getEvents = async () => {
  try {
    return await knex('events').select('events.id', 'event.event_type');
  } catch (error) {
    return error.message;
  }
};

const getEventById = async (id) => {
  try {
    const events = await knex('events')
      .select('events.id as id', 'event_type')
      .where({ id });
    if (events.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return events;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getEvents,
  getEventById,
};
