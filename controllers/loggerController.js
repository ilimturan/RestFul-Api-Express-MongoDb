var loggerModel = require('../models/loggerModel.js');

/**
 * loggerController.js
 *
 * @description :: Server-side logic for managing loggers.
 */
module.exports = {

    /**
     * loggerController.list()
     */
    list: function (req, res) {
        loggerModel.find(function (err, loggers) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting logger.',
                    error: err
                });
            }
            return res.json(loggers);
        });
    },

    /**
     * loggerController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        loggerModel.findOne({_id: id}, function (err, logger) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting logger.',
                    error: err
                });
            }
            if (!logger) {
                return res.status(404).json({
                    message: 'No such logger'
                });
            }
            return res.json(logger);
        });
    },

    /**
     * loggerController.create()
     */
    create: function (req, res) {
        var logger = new loggerModel({
			user_id : req.body.user_id,
			user_session : req.body.user_session,
			url : req.body.url,
			action_type : req.body.action_type,
			entity : req.body.entity,
			entity_data : req.body.entity_data,
            status : req.body.status,
			created_at : req.body.created_at,
			updated_at : req.body.updated_at
        });

        logger.save(function (err, logger) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating logger',
                    error: err
                });
            }
            return res.status(201).json(logger);
        });
    },

    /**
     * loggerController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        loggerModel.findOne({_id: id}, function (err, logger) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting logger',
                    error: err
                });
            }
            if (!logger) {
                return res.status(404).json({
                    message: 'No such logger'
                });
            }

            logger.user_id = req.body.user_id ? req.body.user_id : logger.user_id;
			logger.user_session = req.body.user_session ? req.body.user_session : logger.user_session;
			logger.url = req.body.url ? req.body.url : logger.url;
			logger.action_type = req.body.action_type ? req.body.action_type : logger.action_type;
			logger.entity = req.body.entity ? req.body.entity : logger.entity;
			logger.entity_data = req.body.entity_data ? req.body.entity_data : logger.entity_data;
			logger.created_at = req.body.created_at ? req.body.created_at : logger.created_at;
			logger.updated_at = req.body.updated_at ? req.body.updated_at : logger.updated_at;
			logger.status = req.body.status ? req.body.status : logger.status;
			
            logger.save(function (err, logger) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating logger.',
                        error: err
                    });
                }

                return res.json(logger);
            });
        });
    },

    /**
     * loggerController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        loggerModel.findByIdAndRemove(id, function (err, logger) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the logger.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
