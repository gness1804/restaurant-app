const checkForDupes = async (slug, con) => {
  const slugRegex = new RegExp(`^(${slug})((-[0-9]*$)?)$`, 'i');
  const storesWithSlug = await con.find({
    slug: slugRegex,
  });
  if (storesWithSlug.length) {
    return `${slug}-${storesWithSlug.length + 1}`;
  }
  return slug;
};

module.exports = checkForDupes;

