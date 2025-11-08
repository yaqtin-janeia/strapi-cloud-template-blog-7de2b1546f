'use strict';

/**
 * about-the-app service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::about-the-app.about-the-app');
