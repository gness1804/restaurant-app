const verifyNode = () => {
  const [major, minor] = process.versions.node.split('.').map(parseFloat);

  if (major < 7 || (major === 7 && minor <= 5)) {
    console.log('Oops, you need to be on Node v.7.6.0 or greater to use this app. Please change your node version now.');
    process.exit(1);
  } else {
    console.log('Appropriate Node version verified.');
  }
};

module.exports = verifyNode;
