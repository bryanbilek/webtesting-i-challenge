module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement < 20) {
   item.enhancement += 1;
  } else {
    return {...item};
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    item.durability -= 5;
  } else if (item.enhancement > 16) {
    item.enhancement -= 1;
  } else if(item.enhancement >= 15) {
    item.durability -= 10;
  } else {
    return {...item}
  }
}

function repair(item) {
  return { ...item }, item.durability = 100;
}

function get(item) {
  return { ...item };
}