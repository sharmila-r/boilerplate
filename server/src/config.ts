const config = {
    databaseUrl: process.env.DATABASE_URL || 'mongodb://rootuser:rootpass@mongo:27017',
    googleSecret: process.env.GOOGE_SECRET || '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',
    googleKey: process.env.GOOGLE_KEY || '553285537569-50idenmn4eft0dr5be7ssvpstd102i5d.apps.googleusercontent.com',
    hostname: process.env.BASE_URL || 'http://localhost:5001',
    react_app_url: process.env.REACT_APP_URL || 'http://localhost:3000',
    port: process.env.PORT || 5001,
};

export default config;
