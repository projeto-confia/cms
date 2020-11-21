module.exports = ({ env }) => ({
  clientDeployWebhook: env("CLIENT_DEPLOY_WEBHOOK", ""),
});
