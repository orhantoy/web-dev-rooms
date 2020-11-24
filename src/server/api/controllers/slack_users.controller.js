const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
const moment = require('moment-timezone');

const getModules = async () => {
  try {
    return await knex('slack').select('slack.id', 'slack.userName');
  } catch (error) {
    return error.message;
  }
};

const getModuleById = async (id) => {
  try {
    const modules = await knex('slack')
      .select('slack.id as id', 'userName')
      .where({ id });
    if (modules.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return modules;
  } catch (error) {
    return error.message;
  }
};

const editModule = async (moduleId, updatedModule) => {
  return knex('slack')
    .where({ id: moduleId })
    .update({
      title: updatedModule.title,
      startDate: moment(updatedModule.startDate).format(),
      endDate: moment(updatedModule.endDate).format(),
      classId: updatedModule.classId,
      updatedAt: moment().format(),
    });
};

const deleteModule = async (modulesId) => {
  return knex('slack')
    .where({ id: modulesId })
    .del();
};

const createModule = async (body) => {
  await knex('slack').insert({
    title: body.title,
    startDate: moment(body.startDate).format(),
    endDate: moment(body.endDate).format(),
    classId: body.classId,
  });

  return {
    successful: true,
  };
};

module.exports = {
  getModules,
  getModuleById,
  deleteModule,
  createModule,
  editModule,
};
