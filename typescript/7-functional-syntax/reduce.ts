const prices = [10, 20, 30, 40, 50];

const total = prices.reduce((total, price) => {
    return total + price;
}, 0);

console.log(total);

const avg = prices.reduce((total, price) => {
    total += price;
    return total / prices.length;
});

console.log(avg);

