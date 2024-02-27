---
title: 'Shortcuts on macOS'
author_name: 'Yonatan Ben Knaan'
date: '2020-09-20'
updated: ''
cover_image: '/posts/shortcuts-on-macos/shortcuts-for-macos.svg'
cover_image_height: '400'
cover_image_thumbhash: 'dAkGHILeuKiLd3ePhniQhapUBw'
social_image: '/posts/shortcuts-on-macos/cover-shortcuts-for-macos-social.jpg'
image_alt: 'Screen shot of Mac keyboard shortcuts page on Apple support'
description: 'How to create, edit or remove shortcuts for a macOS'
tags: ['macOS', 'Shortcuts', 'Sketch', 'Productivity']
---

The macOS and its apps comes packed with sweet and effective commands like the awesome `Merge All Windows` that helps you declutter your desktop 👌 

But not all is good, you can easily find yourself doing the same task, navigating and clicking items over and over again, in menus unfitting to [Fitts’s Law](https:/www.notion.so/yonatankof/Fitts-law-062770ad1eff4310aff2a6814467647c). 

This can lead to frustration, and even worse – not executing the command because you where too damn lazy navigating them damn menus. 
<!-- thus hindering your already crippled workflow. Such a shame. -->

![The Merge All Windows command in action triggered manually from the menu](/posts/shortcuts-on-macos/Merge_All_Windows_Example.webp)
*The `Merge All Windows` command in action triggered manually from the menu ☝️*

## How will this article help you?

If you don't know how to create shortcuts for mac, with this article will you'll learn:

1. How to set up shortcuts on the *macOS*
2. How to create shortcuts for a specific app
3. How to override exciting shortcuts
4. Some advance shortcut methods 
 
<!-- ## Jobs to be done -->
## The two examples 

Here are two use cases where custom shortcuts will improve your workflow:

1. **Merge All Windows** 
   
   This command is relevant for **all** apps that are multi window: Let's say you find yourself with 7 open *Sketch* files and 6 *Finder* windows, and you're clicking like crazy trying to find the window you're looking for. What an hassle. 

   The `Merge All Window` command is a great cleaner upper and I use it all over the place – It will merge all of your open windows into one window to be shown as tabs.
   
   ![Image of the Merge All Windows command in action](/posts/shortcuts-on-macos/Merge_All_Windows.webp)
   *The Merge All Windows command in action ☝️*

2. **Collapse All Groups**
   
   This command is app specific, this case *Sketch App* (and I also find myself do it a lot in *VS Code*) and it deals with viewing the side panel on a big file or project. Of course you can scroll or close groups and layers manually, but sometimes you'd like the get an overview at a glance. That's where this command comes in handy 🤲

   ![Image of the Collapse All Groups command in action](/posts/shortcuts-on-macos/Collapse_All_Groups.webp){style="max-width: calc(var(--space-8xl) * 3)"}
   *The Collapse All Groups command in action ☝️*

Now let's learn how **solve these problems** and have a better workflow 🎉


## Merge All Windows – a custom macOS shortcut 

1. Open the *Keyboard* preferences in the *System Settings*. You can use the macOS *Spotlight* search by clicking `control` `spacebar` (a great shortcut by itself) and start typing what your looking for. We're looking for the *Keyboard* preferences, so I'll start typing `key`, then I'll see it as an option, click it! BTW, I'm using [Raycast](https://www.raycast.com/) instead of the default *Spotlight* search.

   ![Raycast search in action](/posts/shortcuts-on-macos/Extra-Spotlight_Search.webp){style="max-width: calc(var(--space-8xl) * 3)"}
   *Raycast search in action ☝️*
   
   You can also just look for it in the `System Preferences`, found in the Apple menu.

   ![The Apple menu - You can fine the preferences menu here](/posts/shortcuts-on-macos/Extra-Apple_Menu.webp){style="max-width: calc(var(--space-8xl) * 2)"}
   *The Apple menu - You can fine the preferences menu here*

2. In the *Keyboard* pane click the *Keyboard Shortcuts…* button.
   
   ![The Keyboard pane on the System Settings, showing the `Keyboard Shortcuts…` button](/posts/shortcuts-on-macos/Keyboard_Pane.webp){style="max-width: calc(var(--space-8xl) * 3)"}
   *The Keyboard pane on the System Settings, showing the `Keyboard Shortcuts…` button*
   
3. This will open a new window, in it select the *App Shortcut* tab. At the bottom of the right panel you'll see `+` and `-` buttons. Clicking the `+` button will open a prompt window.
   
   ![macOS Keyboard Shortcut Manager](/posts/shortcuts-on-macos/App_Shortcuts_Tab.webp){style="max-width: calc(var(--space-8xl) * 3)"}
   *macOS Keyboard Shortcut Manager*

4. In the prompt window you'll see a few inputs. In the first input, *Application*, leave the default option `All Applications` as is. In the *Menu Title* input, type in the `Merge all window` command. And lastly type the shortcut you want to init the command into the *Keyboard Shortcut* input by hitting the actual shortcut you wanna use.
   
   For this shortcut I'll use the `ctrl` `option` `cmd` `m` combination by typing them while in the input.
   
   ![macOS Keyboard Shortcut Manager](/posts/shortcuts-on-macos/Prompt_Window.webp){style="max-width: calc(var(--space-8xl) * 3)"}
   *macOS Keyboard Shortcut Manager*
   
   ### Keep in mind!

   > Shortcut is a combination of modifier keys and a character key. 
   
   > Just making sure where on the same page – Modifier keys change the normal behavior of a key, like turing a `1` into a `!`.  
   
   > The available modifiers are; `ctrl`, `option`, `cmd` & `shift`. Regular keys are the rest of them; `A` to `Z`, `1` to `0` and some special characters `-+[]\;§,./`.

   > You have to type the command name verbatim – **exactly** as it appears in the app's menu – capital letters and spacing.

   
   
5.  Click `Add` button and there you have it! You've just created a costume shortcut for macOS 🧨 

Nice! now you can warp scatted windows like a boss and eliminate that document mess you call a desktop 🧹 

## Collapse All Groups – Custom shortcut for Sketch

For the `Collapse All Groups` command just repeat the previous flow with an exception on item number 4, which is: Pick *Sketch* at the Application dropdown.

![Make the shortcut specific by selecting an app](/posts/shortcuts-on-macos/Custom_Shortcut.webp){style="max-width: calc(var(--space-8xl) * 3)"}
*Make the shortcut specific by selecting an app*

Obviously you'll need to type in the relevant command name and shortcut combination (I'm using  `ctrl` `option` `cmd` `c`), but other then that the 2 use cases are the same. 

Once you've clicked `Add` you can get back to sketch and use this short cut to make your panel views look tidy and hospitable 🤓

---

## Pro tips

There are shitloads of commands and obviously you won't use them all as shortcuts. But there are still better ways to look them up other then going through the menus. So here are some handy wildcard shortcuts you can use instead.

### The Help Menu

Most apps on the macOS has the [Help Menu](https:/support.apple.com/guide/mac-help/get-help-on-your-mac-hlpvw003/mac) which allows to fussy search for you command just by typing it. Just click `command` `shift` `/` and the search will be waiting for a quick search 🏃

![Look for a command using the Help Menu](/posts/shortcuts-on-macos/HelpMenu.webp)
*Look for a command using the `Help Menu`*

### Using Sketch Runner

You can also locate and run commands (and much more) in *Sketch* using a plugin called [SketchRunner](https:/sketchrunner.com/). It's a good one and it does a lot – it *Inserts* symbols, *Goes to* pages, **artboards** or symbols, *Creates* symbols or styles, *Applies* styles and *Installs* plugins — but for the sake of this article — it runs commands (just like the *Help Menu*) but with a nicer UI **and** while showing your latest actions.

![This is the Sketch Runner modal window to Run commands](/posts/shortcuts-on-macos/SketchRunner.webp){style="max-width: calc(var(--space-8xl) * 4)"}
*This is the Sketch Runner modal window to Run commands*

### Resolving Identical Commands Conflicts

Shortcuts in mac need to be unique. Let's take for example the *Align Left* commands in *Affinity Photo*, if you'll ever create a shortcut for it, it won't work. The reason is, this command ain't unique – you can find the same commands both under the `Text` and the `Arrange` menu items. The app won't know which *Align Left* you're referring to, so it might keep the default or have no affect at all 😒 

To resolve it you'll need to make the command unique, and the way to do it is by adding its exact path. Here's the path for these two commands:
- Text → Alignment → Align Centre
- Arrange → Align Centre

As seen in the image below 👇

![The two Align Left commands](/posts/shortcuts-on-macos/IdenticalCommands.webp)
*The two `Align Left` commands ☝️*
  
So is you want the `Arrange`'s `Align Left` command, you should type it like that `Arrange->Align Left`

![The resolved two Align commands in the shortcuts menu](/posts/shortcuts-on-macos/IdenticalCommandsResolved.webp){style="max-width: calc(var(--space-8xl) * 3)"}
*The resolved two Align commands in the shortcuts menu ☝️*

There you have it, a command the is unique as a snowflake ❄️

<!-- I'll make sure the Application is on *Sketch* and for the shortcut I'll use the `ctrl` + `option` + `cmd` + `shift` + `→` and voila — a unique shortcut is born 👶 

## Create memorial shortcut

Most probably that most of the short and "good" shortcuts are already taken by the OS, by the app you use or by the app's plugins (like in Sketch or VScode). 

Have a look at the Comma plugging for Sketch, all of its commands are using a 3 modifier key combos. It' s taking up namespace and you can easily find yourself overriding or overwritten by some other shortcuts. 

![Comma plugin banner taken form their Github Page](/posts/shortcuts-on-macos/Comma_plugin.png) 
*Comma plugin banner taken form their Github Page*

A brut force way of dealing with this nuisance is using a 4 modifier key combo... `command`+`option`+`alt`+`shift` something — that ain't being used, thought I might by a nuisance by itself and is an extreme finger stretch for sure 🖖
    
Well, you're not the first to feel pain missing keys combos. Someone felt it before you and has created an app that will reassign the forgotten and mostly unused *Caps lock* key to emulate that 4 key press mentions above, effectively creating a brand new modifier key -> `tab` + key — Now that's easy to remember!

The app is called [Karabiner-Elements](https:/karabiner-elements.pqrs.org) and it does much more then hacking the *Caps lock* key, but that’s why I'm using it for. Anyways, the reassigning the is quite easy. Let's see how its done: 

1. Install the app

2. Got the the *Complex modification* tab
   
   ![The Karabiner app on the Complex modification tab - An Empty state](/posts/shortcuts-on-macos/Karabiner_Elements-01-Complex_modification_tab.png)
   *The Karabiner app on the Complex modification tab - An Empty state*

3. Click the *Add rule* button

4. In the prompt window click *Enable* on the 1st item from the example list called Change the caps_lock to command + control + option + shift
   
   ![A prompt window to enable the command+control+option+shift as Caps lock on Karabiner](/posts/shortcuts-on-macos/Karabiner_Elements-02-Add_rule.png)
   *A prompt window to enable the command+control+option+shift as `Caps lock` on Karabiner*

That's it, you have it! Now you can add a command using all for 4 keys but clicking just the one key. So now, if you'd like to have the *Collapse All Groups* with `Caps lock` + `c`. Try it, it's nice.  -->

## Well, that's all for today!

See you in the next post 👋