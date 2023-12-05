export async function navQuery(lang) {
  const response = await fetch(import.meta.env.WORDPRESS_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
              menuItems(where: {location: ${lang}}) {
    nodes {
      parentId
      label
      uri
      childItems {
        nodes {
          label
          uri                       
        }
      }
    }
  }
            }
            `
    })
  });
  const { data } = await response.json();
  const menuItems = Object.values(data)[0].nodes.filter(node => node.parentId === null);
  return menuItems;
}


export async function getNodeByURI(uri) {
  const response = await fetch(import.meta.env.WORDPRESS_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query GetNodeByURI($uri: String!) {
                  nodeByUri(uri: $uri) {
                    __typename
                    isContentNode
                    isTermNode
                    ... on Post {
                      id
                      title
                      date
                      permalink: uri
                      excerpt
                      content
                      categories {
                        nodes {
                          name
                          permalink: uri
                          slug
                        }
                      }
                      terms {
                        nodes {
                          name
                          slug
                          permalink:uri
                        }
                      }
                      featuredImage {
                        node {
                          srcSet
                          sourceUrl
                          altText
                          mediaDetails {
                            height
                            width
                          }
                        }
                      }
                    }
                    ... on Page {
                      id
                      title
                      permalink: uri
                      date
                      content
                      featuredImage {
                        node {
                          srcSet
                          sourceUrl
                          altText
                          mediaDetails {
                            height
                            width
                          }
                        }
                      }
                    }
                    ... on Category {
                      id
                      name
                      posts {
                        nodes {
                          date
                          title
                          excerpt
                          permalink: uri
                          categories {
                            nodes {
                              name
                              permalink: uri
                            }
                          }
                          featuredImage {
                            node {
                              srcSet
                              sourceUrl
                              altText
                              mediaDetails {
                                height
                                width
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              `,
      variables: {
        uri: uri
      }
    })
  });
  const { data } = await response.json();
  return data;
}
export async function getAllUris() {
  const response = await fetch(import.meta.env.WORDPRESS_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query GetAllUris {
            posts(first: 100) {
              nodes {
                uri
              }
            }
            pages {
              nodes {
                uri
              }
            }
          }
          `
    })
  });
  const { data } = await response.json();
  const uris = Object.values(data)
    .reduce(function (acc, currentValue) {
      return acc.concat(currentValue.nodes)
    }, [])
    .filter(node => node.uri !== null)
    .map(node => {
      let trimmedURI = node.uri.substring(1);
      trimmedURI = trimmedURI.substring(0, trimmedURI.length - 1)
      return {
        params: {
          uri: decodeURI(trimmedURI)
        }
      }
    })
    return uris;
}

export async function findLatestPostsAPI() {
  const response = await fetch(import.meta.env.WORDPRESS_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
                  posts(first: 8) {
                    nodes {
                      date
                      permalink: uri
                      title
                      categories {
                        nodes {
                          name
                          permalink: uri
                        }
                      }
                      terms {
                        nodes {
                          name
                          slug
                        }
                      }
                      commentCount
                      excerpt
                      featuredImage {
                        node {
                          mediaItemUrl
                          altText
                        }
                      }
                    }
                  }
                }
              `
    })
  });
  const { data } = await response.json();
  return data.posts.nodes;
}
export async function newsPagePostsQuery() {
  const response = await fetch(import.meta.env.WORDPRESS_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
                  posts(first:1000) {
                    nodes {
                      date
                      permalink: uri
                      title
                      commentCount
                      excerpt
                      categories {
                        nodes {
                          name
                          permalink: uri
                        }
                      }
                       terms {
                        nodes {
                          name
                          slug
                          permalink:uri
                        }
                      }
                      featuredImage {
                        node {
                          mediaItemUrl
                          altText
                        }
                      }
                    }
                  }
                }
              `
    })
  });
  const { data } = await response.json();
  return data.posts.nodes;
}

export async function getAllMembers() {
  const response = await fetch(import.meta.env.WORDPRESS_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
        equipes (where: {status: PUBLISH}, first: 100) {
                nodes {
                      featuredImage {
                            node {
                              altText
                              mediaItemUrl
                      }
                      }
                      title
                      fonctions {
                        equipe
                        fonction
                      }
                      social {
                        facebook
                        instagram
                        linkedin
                        twitter
                      }
                  }
        }
        }     
      `

    })
  });
  const { data } = await response.json();
  return data.equipes.nodes;
}