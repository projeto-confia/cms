'use strict';
const { sanitizeEntity } = require('strapi-utils')

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findBySlug(context) {
    const { _slug: slug } = context.params;

    const entity = await strapi.services.events.findOne({ slug });
    return sanitizeEntity(entity, { model: strapi.models.events });
  },
  async count() {
    return await strapi.services.events.count();
  },
};

