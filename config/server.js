module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '797dd9c705f7ed2b3bba9f02b4bb0a5d'),
    },
  },
});
