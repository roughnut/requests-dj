const router = require('express').Router();
const { Event } = require('../../models');
const withAuth = require('../../utils/auth');

// Creating a new Event
router.post('/', withAuth, async (req, res) => {
    try {
      const newEvent = await Event.create({
        ...req.body,
        dj_id: req.session.user_id, //Might need to be changed to dj_id
      });
  
      res.status(200).json(newEvent);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// Deleting an Event
router.delete('/:id', withAuth, async (req, res) => {
    try {
      const eventData = await Event.destroy({
        where: {
          id: req.params.id,
          dj_id: req.session.user_id, //Might need to be changed to dj_id
        },
      });
  
      if (!eventData) {
        res.status(404).json({ message: '404: Event ID not found' });
        return;
      }
  
      res.status(200).json(eventData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Updating an event
router.put('/:id', withAuth, async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description, date } = req.body; // Depenging on the Event structure, most likely will have a title, desc, and the date of the event.
  
      const [updated] = await Event.update(
        { title, description, date, dj_id: req.session.user_id }, //Might need to be changed to dj_id
        { where: { id } }
      );
  
      if (updated) {
        const updatedEvent = await Event.findOne({ where: { id } });
        res.status(200).json(updatedEvent);
      } else {
        res.status(404).json({ message: '404: Event not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to update event' });
    }
  });

module.exports = router;