---
title: 'Shortcuts for macOS'
author_name: 'Yonatan Ben Knaan'
date: '2020-09-20'
updated: ''
cover_image: '/posts/shortcuts-for-macos/shortcuts-for-macos.svg'
cover_image_height: '400'
cover_image_thumbhash: 'dAkGHILeuKiLd3ePhniQhapUBw'
social_image: '/posts/shortcuts-for-macos/cover-shortcuts-for-macos-social.jpg'
image_alt: 'Screen shot of Mac keyboard shortcuts page on Apple support'
description: 'How to create, edit or remove shortcuts for a macOS'
tags: ['macOS', 'Shortcuts', 'Sketch', 'Productivity']
---

The macOS and the apps installed comes pack with sweet shortcuts but not all is perfect. You can easily find yourself doing the same task over and over again by navigating and clicking items in menus unfitting to [Fitts’s Law](https:/www.notion.so/yonatankof/Fitts-law-062770ad1eff4310aff2a6814467647c). 

Even worse, you didn't click that command because you where too damn lazy navigating them menus. Thus hindering your workflow — which is already quite crippled. Such a shame.

## This article will help you!

If you don't know how to create shortcuts for mac, this article will help you by learning:

1. How to set up a shortcut on *macOS*
2. How to create a shortcut for a specific app
3. How to override exciting shortcuts
4. Some advance shortcut methods 
 
## Jobs to be done

Here are two use cases where custom shortcuts will improve your workflow:

1. **Merge All Windows** - This command is relevant for **all** apps that are multi window: Let's say you find yourself with 7 open *Sketch* files and 6 *Finder* windows, and you're clicking like crazy trying to find the window you're looking for. What an hassle. 

   The `Merge all window` command is a great cleaner upper – It will merge all of your open windows into one window to be shown as tabs.
   
   ![Image of the Merge All Windows command in action](/posts/shortcuts-for-macos/Merge_All_Windows.webp)
   *The Merge All Windows command in action ☝️*

2. **Collapse All Groups** - This command is app specific, this case *Sketch App*, and it deals with the issue when reviewing the *Layers* or *Components* panel on a big file. Of course you can scroll or close groups and layers manually, but sometimes you'd like the get an overview at a glance. That's where this command comes in handy 🤲

   ![Image of the Collapse All Groups command in action](/posts/shortcuts-for-macos/Collapse_All_Groups.webp)
   *The Collapse All Groups command in action ☝️*

Now let's learn how **solve these problems** and have a better workflow 🎉

## Custom macOS shortcut 

We'll start with the *Merge All Windows* command.

1. Open the *Keyboard* preferences in the *System Settings*
   
   You can use the macOS *Spotlight* search with the `control` + `spacebar`, which is a great shortcut by itself, and start typing what your looking for. We're looking for the *Keyboard* preferences found in the *System Settings*, so I'll start typing `key`, then I'll see it as an option, click it! BTW, I'm using [Raycast](https://www.raycast.com/) instead of the default *Spotlight* search.

   ![Raycast search in action](/posts/shortcuts-for-macos/Extra-Spotlight_Search.webp)
   *Raycast search in action ☝️*
   
   You can also just look for it in the `System Preferences`, found in the Apple menu.

   ![The Apple menu - You can fine the preferences menu here](/posts/shortcuts-for-macos/Extra-Apple_Menu.webp){style="max-width: 28ch;"}
   *The Apple menu - You can fine the preferences menu here*

2. Select the *Shortcut* tab and click the *App Shortcut* on left panel
   ![macOS Keyboard Shortcut Manager](/posts/shortcuts-for-macos/MasOS-Shortcut_Manager.png)
   *macOS Keyboard Shortcut Manager*
3. At the bottom of the right panel you'll see `+` and `-` buttons. Clicking the `+` button will open a prompt window.
      ![A prompt widow to add command to an app](/posts/shortcuts-for-macos/MasOS-Add_Shortcut_Prompt.png)
      *A prompt widow to add command to an app*
4. In the prompt window you'll see a few inputs, leave the default `All Applications` in the *Application* dropdown.
5. Type in the `Merge all window ` command in Menu Title input. 
   
   !> Note that you'll have to type the command name verbatim, **exactly** as it appears in the app's menu, including capital letters and spacing.
   
6. Type the shortcut you want into the *Keyboard Shortcut* input. You'll have to use a combination of a modifier key/s and a regular key.

   For this shortcut I'll use the `ctrl` `option` `cmd` + `m` combination by typing them while in the input.

   ![Added the command name and shortcut in the prompt](/posts/shortcuts-for-macos/MasOS-Filled_Prompt.png)
   *Added the command name and shortcut in the prompt*

   !> Just making sure where on the same page... Modifier keys change the normal behavior of a key, like turing a `1` into a `!`.  
   
   > The available modifiers are; `ctrl`, `option`, `cmd` & `shift`. Regular keys are the reset of them; `A` to `Z`, `1` to `0` and the special characters `!@#$%^&*()_+[];',./`.
   
7. Click `Add` button and there you have it! You've just created a costume shortcut for macOS 🧨 

Nice! now you can warp scatted windows like a boss and eliminate that document mess you call a desktop 🧹 

# Custom shortcut for Sketch

To do the `Collapse All Groups` command just repeat the previous flow with an exception on item number 4, which is: Pick *Sketch* at the Application dropdown.

![Make the shortcut specific by selecting an app](/posts/shortcuts-for-macos/MasOS-Shortcut_Pick_App.png)
*Make the shortcut specific by selecting an app*

Obviously you'll need to type in the relevant command name and shortcut combination (I'm using  `ctrl` `option` `cmd` + `c`), but other then that the 2 use cases are the same. 

Once you've clicked Add you can get back to sketch and use this short cut to make your panel views look tidy and hospitable 🤓

---

# Pro tips

## Wildcard Shortcuts

There are shitloads of commands we use and obviously you won't set them all up as shortcuts, and there are still better ways to look them up then going through the menus. So here are some handy wildcard shortcuts you can use instead.

### Using the Help Menu

Most apps on the macOS has a wildcard shortcut that allows to fussy search for you command just by typing it and return to it. It's the [Help Menu](https:/support.apple.com/guide/mac-help/get-help-on-your-mac-hlpvw003/mac) available at the... wait for it... at the help menu. Just click `shift` + `control` + `\` and the search will be waiting for your quick action which ever the app you're at 🏃

### Using Sketch Runner

You can also locate and run commands (and much more) in *Sketch* using a plugin called [SketchRunner](https:/sketchrunner.com/). That's a good one and it does a lot; it *Inserts* symbols, *Goes to* pages, **artboards** or symbols, *Creates* symbols or styles, *Applies* styles and *Installs* plugins — but for the sake of this article — it runs commands (just like the *Help Menu*) but with a nicer UI **and** while showing your latest actions.

![This is the Sketch Runner modal window to Run commands](/posts/shortcuts-for-macos/SketchRunner.png)
*This is the Sketch Runner modal window to Run commands*

## Resolving Identical Commands Conflicts

Shortcuts in mac need to be unique. Let's take for example the *Bottom* command in *Sketch*, if you'll ever create a shortcut for it as explain above, it won't work. The reason is, this command ain't unique. You can find it both under `Text` and under `Arrange`. The app won't know which *Bottom* you're referring to, so it will make a decision for you and it might not be the one you wanted 😒 

You'll have to make it unique for it to work, one way to do so is by adding its location. Let's brake it down:
- `Text → Align → Bottom`
- `Arrange → Align → Bottom`

![The two Left commands](/posts/shortcuts-for-macos/Sketch_Menu_Left.png)
*The two Left commands*
  
`Bottom` and `Align` are identical at both command — `Text` and `Arrange` are unique. So let's say you wanna shortcut the `Arrange` bit, so you'll need to copy the complete path by using the `dash` + `greater than` pattern to mark nest descent. So the Bottom align arrange command needs to look like this: 
```
Arrange->Align->Bottom
``` 
There you have it, a command the is unique as a snowflake ❄️

I'll make sure the Application is on *Sketch* and for the shortcut I'll use the `ctrl` + `option` + `cmd` + `shift` + `→` and voila — a unique shortcut is born 👶 

## Create memorial shortcut

Most probably that most of the short and "good" shortcuts are already taken by the OS, by the app you use or by the app's plugins (like in Sketch or VScode). 

Have a look at the Comma plugging for Sketch, all of its commands are using a 3 modifier key combos. It' s taking up namespace and you can easily find yourself overriding or overwritten by some other shortcuts. 

![Comma plugin banner taken form their Github Page](/posts/shortcuts-for-macos/Comma_plugin.png) 
*Comma plugin banner taken form their Github Page*

A brut force way of dealing with this nuisance is using a 4 modifier key combo... `command`+`option`+`alt`+`shift` something — that ain't being used, thought I might by a nuisance by itself and is an extreme finger stretch for sure 🖖
    
Well, you're not the first to feel pain missing keys combos. Someone felt it before you and has created an app that will reassign the forgotten and mostly unused *Caps lock* key to emulate that 4 key press mentions above, effectively creating a brand new modifier key -> `tab` + key — Now that's easy to remember!

The app is called [Karabiner-Elements](https:/karabiner-elements.pqrs.org) and it does much more then hacking the *Caps lock* key, but that’s why I'm using it for. Anyways, the reassigning the is quite easy. Let's see how its done: 

1. Install the app

2. Got the the *Complex modification* tab
   
   ![The Karabiner app on the Complex modification tab - An Empty state](/posts/shortcuts-for-macos/Karabiner_Elements-01-Complex_modification_tab.png)
   *The Karabiner app on the Complex modification tab - An Empty state*

3. Click the *Add rule* button

4. In the prompt window click *Enable* on the 1st item from the example list called Change the caps_lock to command + control + option + shift
   
   ![A prompt window to enable the command+control+option+shift as Caps lock on Karabiner](/posts/shortcuts-for-macos/Karabiner_Elements-02-Add_rule.png)
   *A prompt window to enable the command+control+option+shift as `Caps lock` on Karabiner*

That's it, you have it! Now you can add a command using all for 4 keys but clicking just the one key. So now, if you'd like to have the *Collapse All Groups* with `Caps lock` + `c`. Try it, it's nice.

Well, that's all for today. See you in the next post when we'll deal with the Sketch plugin short cuts