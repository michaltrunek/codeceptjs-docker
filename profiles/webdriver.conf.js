module.exports = {
    profiles : {
        normal: 'normal',
        smart: 'smart'
    },
    normal: {
        url: "0.0.0.0",
        browser: "chrome",
        restart: false,
        waitForTimeout: 5000,
        port: 4445,
        host: "127.0.0.1",
        timeouts: {
            "script": 60000,
            "page load": 60000
        },
        coloredLogs: true
    },
    smart: {
        url: "localhost",
        browser: "chrome",
        restart: true,
        waitForTimeout: 10000,
        smartWait: 10000,
        port: 4445,
        timeouts: {
            "script": 60000,
            "page load": 60000
        },
        coloredLogs: true
    },
    loadProfile() {
    const profile = process.env.profile;

    switch(profile) {
        case this.profiles.normal:
            return this.normal;
        case this.profiles.smart:
            return this.smart;
        default:
            return this.normal;
    }
}
};