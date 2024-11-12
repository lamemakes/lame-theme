# [lamemakes.com](https://lamemakes.com) Ghost Theme 👻

🏗️ **This theme is a WIP and will likely be ugly in both code & UI until finished** 🏗️

This theme is based off of the [Ghost Starter Theme](https://github.com/TryGhost/Starter), utilizing icons from [Heroicons](https://heroicons.com)

## TODO

- [ ] No script friendly
- [ ] Add linting
- [ ] Post formatting
- [ ] Add new logo
- [ ] Pics page
- [ ] Auto deploy pipeline
- [ ] Mobile version
- [ ] Accessibility improvements
  - [ ] Color contrast
  - [ ] Ensure tabability through site
- [ ] Add link to RSS


## Routing

This theme uses a custom `routes.yaml` to accomodate the custom views of blog/pics, which is the following:

```yaml
routes:
  /pics/:
    controller: channel
    filter: tag:[pics,art]
    template: pics
  /blog/:
    controller: channel
    filter: primary_tag:-pics
    template: blog

collections:
  /:
    permalink: /{slug}/
    template: index


taxonomies:
  tag: /tag/{slug}/
  author: /author/{slug}/
```

Here, only posts with tags of `pics` & `art` will show under `/pics/` while everything that doesn't have a **primary** tag of `pics` will show under `/blog/` (so art posts will still show even being tagged pics).