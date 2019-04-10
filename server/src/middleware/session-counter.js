function sessionCounter () {
  return (req, res, next) => {
    if (req.session) {
      var session = req.session
      if (session.visits) {
        session.visits++
      } else {
        session.visits = 1
      }
    }
  }
}

module.exports = sessionCounter
