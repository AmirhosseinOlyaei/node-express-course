const auth = (req, res, next) => {
  if (req.cookies.name) {
    req.user = req.cookies.name;
    next();
  } else {
    res.status(401).json({ message: "unauthorized" });
  }
};

const logon = (req, res) => {
  if (req.body.name) {
    res.cookie("name", req.body.name);
    res.status(201).json({ message: `Hello, ${req.body.name}` });
  } else {
    res.status(400).json({ message: "Error: Name is required" });
  }
};

const logoff = (req, res) => {
  res.clearCookie("name");
  res.status(200).json({ message: "Logged off" });
};

const test = (req, res) => {
  res.status(200).json({ message: `Welcome, ${req.user}` });
};

module.exports = { auth, logon, logoff, test };
