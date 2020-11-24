const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const slackUsersController = require('../controllers/slack_users.controller');

/**
 * @swagger
 * /slack_users:
 *  get:
 *    summary: Get all users
 *    description:
 *      Will return all users.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  slackUsersController
    .getModules()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /slack_users/{ID}:
 *  get:
 *    summary: Get slack users by ID
 *    description:
 *      Will return single slack user with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the slack users to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  slackUsersController
    .getModuleById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /slack_users:
 *  post:
 *    summary: Create a user
 *    description:
 *      Will create a user.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: module
 *        description: The user to create.
 *        schema:
 *          type: object
 *          required:
 *            - title
 *            - startDate
 *            - endDate
 *             - classId
 *          properties:
 *            title:
 *              type: string
 *            startDate:
 *              type: string
 *              format: date-time
 *            endDate:
 *              type: string
 *              format: date-time
 *            classId:
 *              type: string
 *    responses:
 *      201:
 *        description: Module created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res) => {
  slackUsersController
    .createModule(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      console.log(error);

      res
        .status(400)
        .send('Bad request')
        .end();
    });
});

/**
 * @swagger
 * /slack_users/{ID}:
 *  patch:
 *    summary: Create a user
 *    description:
 *      Will create a module.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the module to patch.
 *      - in: body
 *        name: module
 *        description: The module to create.
 *        schema:
 *          type: object
 *          properties:
 *            title:
 *              type: string
 *            startDate:
 *              type: string
 *              format: date-time
 *            endDate:
 *              type: string
 *              format: date-time
 *            classId:
 *              type: string
 *    responses:
 *      200:
 *        description: Module was patched
 *      5XX:
 *        description: Unexpected error.
 */
router.patch('/:id', (req, res, next) => {
  slackUsersController
    .editModule(req.params.id, req.body)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /slack_users/{ID}:
 *  delete:
 *    summary: Delete a user
 *    description:
 *      Will delete a user with a given ID.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the user to delete.
 *    responses:
 *      200:
 *        description: user deleted
 *      5XX:
 *        description: Unexpected error.
 */
router.delete('/:id', (req, res) => {
  slackUsersController
    .deleteModule(req.params.id, req)
    .then((result) => {
      // If result is equal to 0, then that means the module id does not exist
      if (result === 0) {
        res.status(404).send('The module ID you provided does not exist.');
      } else {
        res.json({ success: true });
      }
    })
    .catch((error) => console.log(error));
});

module.exports = router;
