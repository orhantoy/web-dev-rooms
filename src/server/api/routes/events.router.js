/* The API routing for events */

const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const eventsController = require('../controllers/events.controller');

/**
 * @swagger
 * /events:
 *  get:
 *    summary: Get all events
 *    description:
 *      Will return all events.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  eventsController
    .getEvents()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /events/{ID}:
 *  get:
 *    summary: Get events by ID
 *    description:
 *      Will return single event with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the event to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  eventsController
    .geteventById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /events:
 *  post:
 *    summary: Create a event
 *    description:
 *      Will create a event.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: event
 *        description: The event to create.
 *        schema:
 *          type: object
 *          required:
 *            - event_type
 *            - event_date
 *            - venue
 *             - maxParticipants
 *          properties:
 *            event_type:
 *              type: enum
 *            event_date:
 *              type: string
 *              format: date-time
 *            venue:
 *              type: string
 *
 *            maxParticipants:
 *              type: int
 *    responses:
 *      201:
 *        description: event created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res) => {
  eventsController
    .createevent(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      console.log(error);

      res.status(400).send('Bad request').end();
    });
});

/**
 * @swagger
 * /events/{ID}:
 *  patch:
 *    summary: Edit a event
 *    description:
 *      Will edit a event.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the event to edit.
 *      - in: body
 *        name: event
 *        description: The event to patch.
 *        schema:
 *          type: object
 *            event_date:
 *              type: string
 *              format: date-time
 *            venue:
 *              type: string
 *
 *            maxParticipants:
 *              type: int
 *    responses:
 *      200:
 *        description: event was patched
 *      5XX:
 *        description: Unexpected error.
 */
router.patch('/:id', (req, res, next) => {
  eventsController
    .editevent(req.params.id, req.body)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /events/{ID}:
 *  delete:
 *    summary: Delete a event
 *    description:
 *      Will delete a event with a given ID.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the event to delete.
 *    responses:
 *      200:
 *        description: Event deleted
 *      5XX:
 *        description: Unexpected error.
 */
router.delete('/:id', (req, res) => {
  eventsController
    .deleteevent(req.params.id, req)
    .then((result) => {
      // If result is equal to 0, then that means the event id does not exist
      if (result === 0) {
        res.status(404).send('The event ID you provided does not exist.');
      } else {
        res.json({ success: true });
      }
    })
    .catch((error) => console.log(error));
});

module.exports = router;
