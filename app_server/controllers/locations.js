const homelist=(req, res) => {
  res.render('index', { title: ' Name:Manas. Roll:23EG107E09' });
}
const locationInfo=(req, res) => {
  res.render('index', { title: 'Location Info' });
}
const addReview=(req, res) => {
  res.render('index', { title: 'addReview' });
}

module.exports = {
  homelist,
  locationInfo,
  addReview
}