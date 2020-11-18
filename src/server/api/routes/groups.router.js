const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const groupsController = require('../controllers/groups.controller');

/**
 * @swagger
 * /groups:
 *  get:
 *    summary: Get all groups
 *    description:
 *      Will return all groups.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  groupsController
    .getClasses()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /groups/{ID}:
 *  get:
 *    summary: Get group by ID
 *    description:
 *      Will return single group with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the group to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  groupsController
    .getClassById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
