// const hexagonLi = document.getElementsByTagName('li');
// console.log('L2 === hexagonLi', hexagonLi);

const hexagonChild = document.getElementsByClassName('hex');

// Iterate to create 12 li's to create the grid
for (var i = 0; i < 12; i++) {
  let newClone = hexagonChild[0].cloneNode();
  console.log('L9 === newClone', newClone);
};
