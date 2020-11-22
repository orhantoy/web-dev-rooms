/* TODO: This is just an example file to illustrate API routing and
documentation. Can be deleted when the first real route is added. */

const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const topicsController = require('../controllers/topics.controller');

router.get('/', (req, res, next) => {
  topicsController
    .getTopics()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /topics/{ID}:
 *  get:
 *    summary: Get topic by ID
 *    description:
 *      Will return single topic with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the topic to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  topicsController
    .getTopicById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /topics:
 *  post:
 *    summary: Create a topic
 *    description:
 *      Will create a topic.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: module
 *        description: The topic to create.
 *        schema:
 *          type: object
 *          required:
 *            - title
 *          properties:
 *            title:
 *              type: string
 *    responses:
 *      201:
 *        description: topic created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res) => {
  topicsController
    .createTopic(req.body)
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
 * /topics/{ID}:
 *  patch:
 *    summary: edit a topic
 *    description:
 *      Will edit a topic.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the topic to patch.
 *      - in: body
 *        name: topic
 *        description: The topic to edit.
 *        schema:
 *          type: object
 *          properties:
 *            title:
 *              type: string
 *    responses:
 *      200:
 *        description: topic was patched
 *      5XX:
 *        description: Unexpected error.
 */
router.patch('/:id', (req, res, next) => {
  topicsController
    .editTopic(req.params.id, req.body)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /topics/{ID}:
 *  delete:
 *    summary: Delete a topic
 *    description:
 *      Will delete a topic with a given ID.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the topic to delete.
 *    responses:
 *      200:
 *        description: topic deleted
 *      5XX:
 *        description: Unexpected error.
 */
router.delete('/:id', (req, res) => {
  topicsController
    .deleteTopic(req.params.id, req)
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
