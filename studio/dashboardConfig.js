export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f67f348b87d149f3a52a28a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-uehgyzxr',
                  apiId: '696a480e-0af1-4c94-a90f-8ca69be44ddb'
                },
                {
                  buildHookId: '5f67f34816d9f2bfa63d53a8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-5ho4qkn3',
                  apiId: '1a743139-8db7-49dc-a86c-30a8dca61912'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/geethikasimhadri/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-5ho4qkn3.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
