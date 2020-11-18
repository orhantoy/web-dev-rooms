/* TODO: This is an example controller to illustrate a server side controller.
Can be deleted as soon as the first real controller is added. */
const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
// const moment = require('moment-timezone');

const getClasses = async () => {
  try {
    return await knex('classes').select('classes.id', 'classes.title');
  } catch (error) {
    return error.message;
  }
};

const getClassById = async (id) => {
  try {
    const classes = await knex('classes')
      .select('classes.id as id', 'title')
      .where({ id });
    if (classes.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return classes;
  } catch (error) {
    return error.message;
  }
};

const editClass = async (classId, updatedClass) => {
  return knex('classes')
    .where({ id: classId })
    .update({
      title: updatedClass.title,
    });
};

const deleteClass = async (classesId) => {
  return knex('classes')
    .where({ id: classesId })
    .del();
};

const createClass = async (body) => {
  await knex('classes').insert({
    title: body.title,
  });

  return {
    successful: true,
  };
};

module.exports = {
  getClasses,
  getClassById,
  editClass,
  deleteClass,
  createClass,
};
