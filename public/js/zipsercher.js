const setData = (results) => {
    document.getElementsByClassName('address')[0].textContent = results.address1 + results.address2 + results.address3;
    document.getElementsByClassName('kana')[0].textContent = results.kana1 + results.kana2 + results.kana3;
    document.getElementsByClassName('prefcode')[0].textContent = results.prefcode;
    document.getElementsByClassName('zipcode')[0].textContent = results.zipcode;
};

const getJson = async (postalCode) => {
    const data = await (await fetch(`/?code=${postalCode}`)).json();
    console.log(data.data.results[0]);

    setData(data.data.results[0]);
};

document.getElementsByClassName('btn')[0].addEventListener('click', (params) => {
    const postalCode = document.getElementsByClassName('postalcode')[0].value;
    getJson(postalCode);
});

