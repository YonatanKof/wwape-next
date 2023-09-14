---
title: Nuxt content
---
# Structure 

## `frontmatter` in `md` file

```md
---
color: blond
feeling: snappy
title: Bulla
---
```

# Filter

## `script` tag 

In this example we see two filter on the same folder, one is filtering by `color` and the other by `feeling`. Add this to the `script` tag in the page/component you want the filter to happen

### this code 

```js
const { data: queryColor } = await useAsyncData('color', () => {
	return queryContent('try-me').where({ color: 'blond' }).find();
});
const { data: queryFeeling } = await useAsyncData('feeling', () => {
	return queryContent('try-me').where({ feeling: 'cheeky' }).find();
});
```

The `queryContent('try-me')`{lang="js"} is the folder in which to look in the content folder. 

Leave it to `queryContent('/')`{lang="js"} so it will start at the root of your `content/` directory.

## `template` tag 

```html
<ul v-if="queryColor">
    <li v-for="color in queryColor" :key="color.title">{{ color.title }}'s color is {{ color.color }} and it feels {{ color.feeling }}</li>
</ul>
```