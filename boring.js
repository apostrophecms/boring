module.exports = function() {
  const args = process.argv.slice(2);
  const result = {
    _: []
  };
  for (let i = 0; (i < args.length); i++) {
    let matches = args[i].match(/^--([^\s\=]+)=(.*)$/);
    if (matches) {
      result[matches[1]] = matches[2];
      continue;
    }
    matches = args[i].match(/^--(\S+)$/);
    if (matches) {
      result[matches[1]] = true;
      continue;
    }
    result._.push(args[i]);
  }
  return result;
};
