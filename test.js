x = [1, 2, 3, 4, 5];

y = x.reduce((acc, item) => {
    q = acc + item;
    return q;
});

console.log(y);
