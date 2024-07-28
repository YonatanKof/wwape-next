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

> `id`s are auto generated so ***Boring H1 Title***, will be `id="boring-h1-title"`

# Boring H1 Title
`# Boring H1 Title`
## Humdrum H2 Title
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

### Regular stuff

> This is *Blockquote*. Write `>` to use

`> This is *Blockquote*. Write > to use`

> 
> With multi paragraph
> 
>> With nested blockquote
>> 
>>> Another nested blockquote
>
> #### Welcome to the desert of the real 🏖
>
> - Quickly in and quickly out is all the advice I can give you.
> - I believe that stopping the siege on Harrogath is the only way for you to earn the trust of these people.  

>  Very nice – *Everything* is going according to **plan**.

## And with three types of *hints* 

!> **Tip** Blockquote, generates class `hint` & `tip`. Write `!>` to use

?> **Attention** Blockquote, generates class `hint` & `waring`. Write `?>` to use

x> **Error** Blockquote, generates class `hint` & `error`. Write `x>` to use

This is a paragraph -> The time has come for you to destroy Mephisto's Soulstone! Take the Stone to the Hellforge. Place it upon the forge and strike it soundly with the Hammer. Only by doing this can you prevent Mephisto from manifesting in this world ever again. 1/6 3/4 3/4

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


## Preformatted tag

```
This is a Preformatted tag (pre). Warp with ``` to use
```

    Or just use a tab indent

<!-- You acn use a comment markup to separate elements -->
    <html>
        <body>
            <h1>You acn use a comment markup to separate elements</h1>
        </body>
    </html>  


## Code Snippets

### HTML
<!-- html formatting  -->
```html
<html> 
    <body>
        <h1>You acn use a comment markup to separate elements</h1>
    </body>
</html> 
```

### CSS

```css
/* css formatting */
strong { 
    font-weight: var(--font-wight--bolder);
}

ul {
    list-style-type: disc;
    margin-left: 1rem;
    margin-bottom: 2rem;
}

```

### Javascript

```javascript
// javascript formatting
export default { 
    props: {
        showLogo: { default: true },
        isSelected: { default: false },
        showPosts: { default: true },
        value: {"As a token of my gratitude, I will identify items for you at no charge."}
    }
};
```
#### In order to have the image caption right there should be 2 things:

- No space between the image and the caption 
- The caption should have an `*`, i.e be an `em` tag
> 
![image](md-content-types/Yonatan_Kof.png)
*Now that's one good looking Kof*

`Use code in your Markdown file.`

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

### Add a Youtube Embed

!> Don't forget to add `import YouTubePlayer from '~/components/YouTubePlayer.vue` at the top for the `md` file

### Add a Sketch Embed

::SketchEmbed{src="84463519-df2a-475d-b8d2-bd250755763d/p/3195B629-1FA9-4D9B-9AB6-BEA52F6DC7A8/canvas" height="var(--space-7xl)"}
::

::YouTubePlayer{videoId="E86gWQs-ios" title="Kill All Hippies"}
::

## Footnotes 

[^footnote]: I'm a footnote!