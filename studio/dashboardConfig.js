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
                  buildHookId: '632b93072cf1860091a9f351',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ggcotknu',
                  apiId: 'ab1eb89c-75fc-4b07-89af-909fb25fb18c'
                },
                {
                  buildHookId: '632b93077318780080c6aa50',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-myvs1r34',
                  apiId: 'df6498bb-f18d-4ba5-9c7d-b45ff2c5c18e'
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
            value: 'https://sanity-gatsby-portfolio-web-myvs1r34.netlify.app',
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
