/*
|-------------------------------------------------------------------------------
| Development config               https://maizzle.com/docs/environments/#local
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run `maizzle build` or `maizzle serve` and it has
| the fastest build time, since most transformations are disabled.
|
*/

module.exports = {
  build: {
    templates: {
      source: 'src/templates',
      destination: {
        path: 'build_local',
      },
    },
  },

  // some mock variables
  githubId: "Sorosliu1029",
  totalCount: 100,
  followers: [
    {
      "login": "Sorosliu1029",
      "name": "Soros Liu",
      "avatarUrl": "https://avatars.githubusercontent.com/u/8862646?u=c349de2aab6b76b5108dc6992eee2140a53cdb85&v=4",
      "url": "https://github.com/Sorosliu1029",
      "bio": "Mediocre Engineer",
      "company": "@jike-engineering",
      "location": "Shanghai, China"
    },
    {
      "login": "ashtom",
      "name": "Thomas Dohmke",
      "avatarUrl": "https://avatars.githubusercontent.com/u/70720?u=5210ac874456eed768fe8b537322c1798acb9917&v=4",
      "url": "https://github.com/ashtom",
      "bio": "CEO @github",
      "company": "@github",
      "location": null,
    },
    {
      "login": "matthewmccullough",
      "name": "Matthew J. McCullough",
      "url": "https://github.com/matthewmccullough",
      "avatarUrl": "https://avatars.githubusercontent.com/u/24734?v=4",
      "bio": "Open source advocate, veteran software dev, teacher of Git version control, CI/CD techniques, VP of Global GTM and Field Services at GitHub",
      "company": null,
      "location": "Olympia, WA, USA"
    }
  ],
  unfollowers: [
    {
      "login": "keithballinger",
      "name": "Keith Ballinger",
      "avatarUrl": "https://avatars.githubusercontent.com/u/481108?u=f1f170d7ca9af1871fed3d29fcdd912da79ff61f&v=4",
      "url": "https://github.com/keithballinger",
      "bio": "SVP of Engineering @github. Before that: @microsoft, Xamarin, and many startups.",
      "company": null,
      "location": null,
    }
  ],
  timeChange: "3 days"
}
