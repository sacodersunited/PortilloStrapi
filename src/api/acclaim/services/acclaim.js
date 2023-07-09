'use strict';

/**
 * acclaim service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::acclaim.acclaim');