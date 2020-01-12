const Stats = require('./Stats');
const Images = require('./Images');
const Comments = require('./Comments');

module.exports = async viewModel => {
    
    const results = await Promise.all([
        Stats(),
        Images.popular(),
        Comments.newest()]);

    viewModel.sidebar = {
        stats: results[0],
        popular: results[1],
        comments: results[2]
    }

    return viewModel
}