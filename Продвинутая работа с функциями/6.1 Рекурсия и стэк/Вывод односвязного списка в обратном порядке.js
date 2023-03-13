const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

const printReverseList = (list) => {
  if (list.next) {
    printReverseList(list.next);
  }

  alert(list.value);
};

printReverseList(list);
