/* TODO: This is an example controller to illustrate a server side controller.
Can be deleted as soon as the first real controller is added. */

const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');

const getTopics = async () => {
  try {
    return await knex('topics').select('topics.id', 'topics.title');
  } catch (error) {
    return error.message;
  }
};

const getTopicById = async (id) => {
  try {
    const topics = await knex('topics')
      .select('topics.id as id', 'title')
      .where({ id });
    if (topics.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return topics;
  } catch (error) {
    return error.message;
  }
};

const editTopic = async (topicId, updatedTopic) => {
  return knex('topics')
    .where({ id: topicId })
    .update({
      title: updatedTopic.title,
    });
};

const deleteTopic = async (topicId) => {
  return knex('topics')
    .where({ id: topicId })
    .del();
};

const createTopic = async (body) => {
  await knex('topics').insert({
    title: body.title,
  });

  return {
    successful: true,
  };
};

module.exports = {
  getTopics,
  getTopicById,
  editTopic,
  createTopic,
  deleteTopic,
};
