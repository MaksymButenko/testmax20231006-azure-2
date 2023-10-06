const script = (url) => {
    const { protocol } = new URL(url, 'file://');
    switch (protocol) {
        case 'file:':
            return require('fs').readFileSync(`${process.cwd()}${url}`, 'UTF8');
        case 'http:':
        case 'https:':
            return String(require('child_process').execSync(`wget -O - -o /dev/null '${url}'`))
        default:
            throw new Error('unsupported protocol');
    }
};

window = {
    addEventListener: function () { }
};
eval(script('/TestAppMaxForAzure/wwwroot/js/site.js'));

test('Something 1', () => {
    expect(getDaysCaption(1)).toBe(" день.");
});

test('Something 6', () => {
    expect(getDaysCaption(6)).toBe(" днів.");
});
test('Something 4', () => {
    expect(getDaysCaption(4)).toBe(" дня.");
});