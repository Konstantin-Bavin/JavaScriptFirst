const getDomainInfo = (str) => {
    const domain = {};

    if (str.startsWith('http')) {
        const parts = str.split('://');
        domain.scheme = parts[0];
        domain.name = parts[1];
    } else {
        domain.scheme = 'http';
        domain.name = str;
    }

    return console.log(domain);
};

getDomainInfo('yandex.ru');
getDomainInfo('https://hexlet.io');
getDomainInfo('http://google.com');