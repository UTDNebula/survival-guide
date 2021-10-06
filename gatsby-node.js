const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const ENTRIES_QUERY = `
query AllEntries {
  allMarkdownRemark(
    sort: {
      fields: [frontmatter___date],
      order: ASC
    }
  ) {
      nodes {
        id
        fields {
          slug
        }
      }
    }
}`;

const FAQ_QUERY = `
{
  allMarkdownRmark(
    sort: {
      fields: [frontmatter___question],
      order: ASC
    }
  )
}`;

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const guideEntry = path.resolve('./src/templates/guide-entry.tsx');

  const entriesResult = await graphql(ENTRIES_QUERY);

  if (entriesResult.errors) {
    reporter.panicOnBuild('There was an error fetching guide entries', result.errors);
    return;
  }

  const entries = entriesResult.data.allMarkdownRemark.nodes;

  // Create all guide entries if at least one exists in "content/entries" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL
  if (entries.length > 0) {
    entries.forEach((entry, index) => {
      const previousEntryId = index === 0 ? null : entries[index - 1].id;
      const nextEntryId = index === entries.length - 1 ? null : entries[index + 1].id;

      createPage({
        path: `/entries${entry.fields.slug}`,
        component: guideEntry,
        context: {
          id: entry.id,
          previousEntryId,
          nextEntryId,
        },
      });
    });
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `);
};
