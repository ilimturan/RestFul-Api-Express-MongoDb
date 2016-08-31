var userActionModel = require('../models/userActionModel.js');

/**
 * userActionController.js
 *
 * @description :: Server-side logic for managing userActions.
 */
module.exports = {

    /**
     * userActionController.list()
     */
    list: function (req, res) {
        userActionModel.find(function (err, userActions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting userAction.',
                    error: err
                });
            }
            return res.json(userActions);
        });
    },

    /**
     * userActionController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        userActionModel.findOne({_id: id}, function (err, userAction) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting userAction.',
                    error: err
                });
            }
            if (!userAction) {
                return res.status(404).json({
                    message: 'No such userAction'
                });
            }
            return res.json(userAction);
        });
    },

    /**
     * userActionController.create()
     */
    create: function (req, res) {
        var userAction = new userActionModel({
			user_id : req.body.user_id,
			action_type : req.body.action_type,
			action_id : req.body.action_id,
			created_at : req.body.created_at,
			updated_at : req.body.updated_at
        });

        userAction.save(function (err, userAction) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating userAction',
                    error: err
                });
            }
            return res.status(201).json(userAction);
        });
    },

    /**
     * userActionController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        userActionModel.findOne({_id: id}, function (err, userAction) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting userAction',
                    error: err
                });
            }
            if (!userAction) {
                return res.status(404).json({
                    message: 'No such userAction'
                });
            }

            userAction.user_id = req.body.user_id ? req.body.user_id : userAction.user_id;
			userAction.action_type = req.body.action_type ? req.body.action_type : userAction.action_type;
			userAction.action_id = req.body.action_id ? req.body.action_id : userAction.action_id;
			userAction.created_at = req.body.created_at ? req.body.created_at : userAction.created_at;
			userAction.updated_at = req.body.updated_at ? req.body.updated_at : userAction.updated_at;
			
            userAction.save(function (err, userAction) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating userAction.',
                        error: err
                    });
                }

                return res.json(userAction);
            });
        });
    },

    /**
     * userActionController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        userActionModel.findByIdAndRemove(id, function (err, userAction) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the userAction.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
