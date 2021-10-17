module.exports = {
  query: "eventBySlug(slug: String!): Events",
  resolver: {
    Query: {
      eventBySlug: {
        description: "Return event with given slug",
        resolver: 'application::events.events.findBySlug'
      },
    },
  },
};
