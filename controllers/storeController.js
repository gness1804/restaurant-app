exports.homePage = (req, res) => {
  res.render('index', {
    user: 'Graham',
  });
};

exports.addStore = (req, res) => {
  res.render('editStore', {
    title: 'Add Store',
  });
};
