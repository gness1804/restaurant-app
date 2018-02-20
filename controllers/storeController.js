exports.firstMiddleware = (req, res, next) => {
  req.name = 'Graham';
  next();
};

exports.homePage = (req, res) => {
  console.log(`The user's name is ${req.name}.`);
  res.render('index', {
    user: req.name,
  });
};
