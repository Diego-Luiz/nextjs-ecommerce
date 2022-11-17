const slugify = require('slugify');

const slugifyFunc = (str, options) => {
  let slugifyOptions = options ? options: { lower: true };
  return slugify(str, slugifyOptions);
}

export default slugifyFunc;