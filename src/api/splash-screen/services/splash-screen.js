'use strict';

/**
 * splash-screen service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::splash-screen.splash-screen');
