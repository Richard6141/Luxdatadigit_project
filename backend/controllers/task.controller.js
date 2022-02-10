function index(req, res) {
    const tasks = "Tasks lists";
    res.send(tasks);
}

module.exports = {
    index: index
}