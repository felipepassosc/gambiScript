var data = {
    title: "Celta Preto 2004",
    model: "celta",
    brand: "Chevrolet",
    year: "2004",
    color: "Branco",
    km: "212343",
    price: "70000,00"
};

fetch('https://private-anon-966e848c3a-tradersclubapi.apiary-mock.com/api/cars', {
    method: 'post',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}).then(res => res.json())
    .then(res => console.log(res));