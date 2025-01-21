# [lamemakes.com](https://lamemakes.com) Ghost Theme 👻

🏗️ **This theme is a WIP and will likely be ugly in both code & UI until finished** 🏗️

This theme is based off of the [Ghost Starter Theme](https://github.com/TryGhost/Starter), utilizing icons from [Heroicons](https://heroicons.com)

## TODO

- [X] No script friendly
  - [X] Mobile menu is JS-free
  - [X] Ghost search is hidden when JS is disabled
  - [X] Only used minimally to enhance non-mission critical pieces of the site (ie. pics view)
  - [ ] Handle pagination
- [ ] Add linting
  - [X] Uses [rustywind](https://github.com/avencera/rustywind) to sort tailwind classes
  - [ ] Other linters? most don't seem to play well with handlebars
- [ ] Post formatting
- [ ] Add new logo
- [ ] Pics page
- [ ] Auto deploy pipeline
- [ ] Mobile version
  - [X] Mobile menu implemented
- [ ] Accessibility improvements
  - [X] Color contrast
  - [X] Ensure tabability through site
  - [ ] More alt text/better ARIA
- [X] Add link to RSS
- [ ] Build about page
- [ ] Reduce load time from large background images
- [ ] Pagination/infinite scroll


## Routing

This theme uses a custom `routes.yaml` to accomodate the custom views of blog/pics, which is the following:

```yaml
  /pics/:
    controller: channel
    filter: tag:[pics,pic]
    template: pics
  /blog/:
    controller: channel
    filter: primary_tag:-pic
    template: blog


collections:
  /:
    permalink: /{slug}/
    template: index
    filter: primary_tag:-pic


taxonomies:
  tag: /tag/{slug}/
  author: /author/{slug}/

```

Here, only posts with tags of `pic` & `pics` will show under `/pics/` while everything that doesn't have a **primary** tag of `pic` will show under `/blog/`. I manually tag all photos that have a gallery with `pics`, and any random individual picture I want to upload are tagged with `pic`