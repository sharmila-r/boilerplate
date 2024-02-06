import config from './config';
console.log(config);

export default {
    "defaults": {
        "origin": config.hostname,
        "transport": "session",
        "state": true
    },
    "google": {
        "key": config.googleKey,
        "secret": config.googleSecret,
        "callback": "/handle/google/callback",
        "scope": [
            "profile",
            "email"
        ]
    }
}