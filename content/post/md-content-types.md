---
title: MD Content Types
author_name: Yonatan Ben Knaan
date: '2020-11-12'
updated: ''
cover_image: '/posts/md-content-types/md-content-types.webp'
cover_image_height: '450'
cover_image_thumbhash: 'rUcCDYTnaWZ3iHePYol4cxd4cH74'
social_image: /posts/md-content-types/md-content-types.webp
image_alt: 'Logo of the Markdown syntax'
description: 'Just a friendly goto place for me to review all the MD types I use in this website'
tags: ['yo']
---

Hi all 👋  

Just a boring page to review all the *Markdown* styles for this *Nuxt* website.

> Markdown is a lightweight markup language that uses plain text formatting syntax, making it easy to write and read formatted documents.

## Titles 

How to write titles.

> `id`s are auto generated, so ***Boring Title***, will be `id="boring-title"`. 
> 
> In regular MD, If you'd like a custom id the do this → `# Boring Title {#boring}`.
> 
> But in *Nuxt Content* you'll need to warp in brackets → `# [Boring Title]{#boring}`.

# Boring H1 Title
`# Boring H1 Title`
## [Humdrum H2 Title]{#custom-id}
`## Humdrum H2 Title`
### Dull H3 Title
`### Dull H3 Title`
#### Monotonous H4 Title
`#### Monotonous H4 Title`
##### Stale H5 Title
`##### Stale H5 Title`
###### Tiresome H6 Title
`###### Tiresome H6 Title`

## Basic formatting  

[Input →]{.dimmed} \**This is Strong Text**  
[Output →]{.dimmed} **This is Strong Text**  

[Input →]{.dimmed} \*This is Emphasized Text*  
[Output →]{.dimmed} *This is Emphasized Text*  

[Input →]{.dimmed} \~~This is Strikethrough~~  
[Output →]{.dimmed} ~~This is Strikethrough~~  

[Input →]{.dimmed} \`This is code\`  
[Output →]{.dimmed} `This is code`  

[Input →]{.dimmed} \*\*\`This\`\*\* \~~is \*\*combo\*\*\~\~ \*\*\*formatting***   
[Output →]{.dimmed} **`This`** ~~`is` **combo**~~ ***formatting***  


## Blockquotes 

`> This is a *Blockquote*. Write > to use it`

> This is a *Blockquote*. Write `>` to use it


::gridBlock{colNum="2" gap="var(--space-m);"}
:::grid-unit
###### [Input ↓]{.dimmed}
```md
> Cruelty has a human heart,  
> And Jealousy a human face;  
> Terror the human form divine,  
> And Secresy the human dress.
> 
>> The human dress is forged iron,
>>
>>> The human form a fiery forge,
>>
>> The human face a furnace sealed,
>>
> The human heart its hungry gorge.
```
:::
:::grid-unit
###### [Output ↓]{.dimmed}
> Cruelty has a human heart,  
> And Jealousy a human face;  
> Terror the human form divine,  
> And Secresy the human dress.
> 
>> The human dress is forged iron,
>>
>>> The human form a fiery forge,
>>
>> The human face a furnace sealed,
>>
> The human heart its hungry gorge.
:::
::

> [A Divine Image](https://public-domain-poetry.com/william-blake/divine-image-9201) By William Blake 

<!-- ## And with three types of *hints* 

!> **Tip** Blockquote, generates class `hint` & `tip`. Write `!>` to use

?> **Attention** Blockquote, generates class `hint` & `waring`. Write `?>` to use

x> **Error** Blockquote, generates class `hint` & `error`. Write `x>` to use

This is a paragraph -> The time has come for you to destroy Mephisto's Soulstone! Take the Stone to the Hellforge. Place it upon the forge and strike it soundly with the Hammer. Only by doing this can you prevent Mephisto from manifesting in this world ever again. 1/6 3/4 3/4 -->

## Lists

### Ordered List

1. Ordered list item
2. Another ordered list item
   1. Indented item
      - The First 
      - The Second 
   2. Another indented item.
   
    Additional text for indented item

3. Yet another ordered list item [^footnote].
   
   Additional text for item

### Unordered List

- Ordered list item

- Another ordered list item
  
  - Indented item.

    - Another indent
        1. The First 
        2. The Second 
    - Another item in that indent

  - Another indented item.
  
  ```
  Love is all you need
  ```

  Text for indented item

- Yet another ordered list item [^footnote].

   !> Blockquote in a list

## Code Snippets

[Input ↓]{.dimmed}

```md
    ```
    This is a Preformatted tag (pre). Warp with ``` to use
    ```

    Or just use a tab indent
```

[Output ↓]{.dimmed}

```
This is a Preformatted tag (pre). Warp with ``` to use
```

    Or just use a tab indent



### CSS

[Input ↓]{.dimmed}

```md
    ```css
    /* css comment */
    p { 
        color: red;
    }
    ```
```

[Output ↓]{.dimmed}

```css
/* css comment */
p { 
    color: red;
}
```

### Javascript

[Input ↓]{.dimmed}

```md
    ```js
    // js comment
    export default { 
        props: {
            showMeLove: { default: true },
        }
    };
    ```
```

[Output ↓]{.dimmed}

```js
// js comment
export default { 
    props: {
        showMeLove: { default: true },
    }
};
```

## Images

> In order to have the image caption right there should be 2 things:

[Syntax ↓]{.dimmed}

`![alt](src)`

[Input ↓]{.dimmed}

`![Night Thoughts](/misc/night-thoughts.webp)`

[Output ↓]{.dimmed}

![Night Thoughts](/misc/night-thoughts.webp)

##### To add a nice looking subtitle


- No space between the image and the caption 
- The caption should have an `*`, i.e be an `em` tag

[Input ↓]{.dimmed}
```md
![Night Thoughts](/misc/night-thoughts.webp)
*Night Thoughts by William Blake, Watercolor*
```

[Output ↓]{.dimmed}
![Night Thoughts](/misc/night-thoughts.webp)
*Night Thoughts by William Blake, Watercolor*

## Links

Visit my website [Yonatan Kof](https://yonatankof.com "The best designer in Israel").

Visit my website [Yonatan Kof][mywebsite].

IDs to heading are being generate automatically, [You can link to them like so](#footnotes), by referring to [their id](#tertiary-title)

<https://yonatankof.com>

Sandy hole with nothing in it to sit down on or to eat: it was a [hobbit-hole][1], and that means comfort.

[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"
[mywebsite]: <https://yonatankof.com> "The best designer in Israel"

## Tables

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

| Syntax    | Description |   Test Text |
| :-------- | :---------: | ----------: |
| Header    |    Title    | Here's this |
| Paragraph |    Text     |    And more |

## Checkbox – MIA

Missing in Action is design for the Checkbox  
It looks bad and right now I don't really know how to manipulate its CSS

  - [x] ~~Write the press release~~
  - [ ] Me not done
- [ ] Update the website
- [ ] Contact the media

## Custom components  

### Add a Youtube Embed

[Input option 1 ↓]{.dimmed}

```md
::YouTubePlayer{videoId="Bwe5Msh75eY" title="'Night' by William Blake" desc="Some description"}
::
```

[Input option 2 ↓]{.dimmed}

```md
:::YouTubePlayer
---
videoId: Bwe5Msh75eY
title: 'Night' by William Blake
desc: Some description
---
:::
```

[Output ↓]{.dimmed}

::YouTubePlayer{videoId="Bwe5Msh75eY" title="'Night' by William Blake"}
::


### Add a Sketch Embed

::SketchEmbed{src="84463519-df2a-475d-b8d2-bd250755763d/p/3195B629-1FA9-4D9B-9AB6-BEA52F6DC7A8/canvas" height="var(--space-7xl)"}
::

<!-- 
## Footnotes 

[^footnote]: I'm a footnote! -->