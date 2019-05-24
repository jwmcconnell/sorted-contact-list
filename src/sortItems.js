function sortItems(items, properties) {
  const sorted = items.slice().sort((a, b) => {
    if(a[properties.type] > b[properties.type]) {
      return 1 * properties.direction;
    }
    if(a[properties.type] < b[properties.type]) {
      return -1 * properties.direction;
    }
    return 0;
  });

  return sorted;
}

export default sortItems;