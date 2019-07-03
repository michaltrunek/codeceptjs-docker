module.exports = {
    profiles : {
        normal: 'normal',
        local: 'local'
    },
    normal: {
        url: 'http://localhost:3000/',
        browser: "chrome",
        restart: false,
        waitForTimeout: 5000,
        //port: 4445,
        //host: "172.20.0.2",
        host: process.env.HOST,
        timeouts: {
            "script": 60000,
            "page load": 60000
        },
        coloredLogs: true
    },
    local: {
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
        case this.profiles.local:
            return this.local;
        default:
            return this.normal;
    }
}
};