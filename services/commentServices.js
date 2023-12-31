const commentModel = require('../model/commentModel')

const getAll = () => {
    return commentModel.getAll();
};

const insertComment = (comment) => {
    commentModel.insert(comment);
};


module.exports = { getAll, insertComment };