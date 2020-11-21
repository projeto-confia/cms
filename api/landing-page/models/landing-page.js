"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

const axios = require("axios");
const clientDeployWebhook = strapi.config.get("custom.clientDeployWebhook");

const triggeClientDeployHook = () =>
  clientDeployWebhook && axios.post(clientDeployWebhook);

module.exports = {
  lifecycles: {
    async afterCreate(_, __) {
      triggeClientDeployHook();
    },
    async afterUpdate(_, __, ___) {
      triggeClientDeployHook();
    },
    async afterDelete(_, __) {
      triggeClientDeployHook();
    },
  },
};
