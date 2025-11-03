---
title: "Control your browser with Raycast and Applescript"
pubDate: 2025-11-03
description: "Using Raycast with Applescript for some quality of life improvements to automate some basic browser workflows"
tags: ["raycast", "dev setup"]
---

I've been using [Raycast](https://raycast.com) for about 18 months to help improve my developer workflow. If you don't know, Raycast is an always available productivity tool for Mac that lets you do all sorts of things. For example, it can launch and control apps, manage window layouts, expand snippets, take notes, run scripts, convert stuff, insert emojis, do AI stuff (of course it can), and so much more. Raycast comes with a bunch of stuff built in and free to use, but it also has a plugin system where developers can build apps to integrate with all sorts of things.

I was first introduced to it by somebody at work and have had it in my workflow for a while now. There is a free and a paid version and the free one is pretty fully featured and is the one I use. The paid one has some AI stuff and some syncing and some extra bits and bobs. I'm far from a power user but I utilize it in my workflow for the following features:

- App switching
- Window management
- Launcher - to open apps
- The odd quick calculation

## App switching

This is probably the thing I use multiple times per day. My general dev setup is pretty minimal and I get through most of my day as a Frontend Developer using mainly 2 apps - the browser and the terminal. I use Neovim in the terminal (by the way) as my editor of choice and I currently use [Brave](https://brave.com) as my default browser.

I am constantly flipping between these 2 applications and that is where Raycast comes in. When you open Raycast with a key combination you can just type into the textfield to launch / switch to a running program. This is useful but the more powerful feature is to assign that same operation to a hotkey combo. So for example in my case I have assigned the "hyper" key, which is a combination of `Ctrl` + `Shift` + `Option` & `Cmd` plus `B` (for browser, but you can choose whatever you like here). Now that might sound like a mouthful but I have a programmable keyboard that lets you assign hyper to a single key so this, for me is `Hyper` + `b` - it can literally be anything you like that's not going to conflict with keyboard shortcuts you might already be using in your application.

For the terminal (I use [Ghostty](https://ghostty.org)) - I have it as `Hyper` + `t` (for terminal) - I find it helps to use the key with the same letter as a mnemonic. So with just these 2 combinations I can switch backwards and forwards between my 2 most used apps.

Now that is great but obviously you will probably have multiple tabs running in your browser so what do you do here. For a minute I used to just switch to the browser using the Raycast shortcut and then use the browser's built in shortcuts to select the tab I wanted. For me in Brave I have the same 5 tabs pinned in the browser in the same place so I can use positional arguments to access those - for example 1 is GitHub, 2 is my local dev server, 3 is Slack etc.

So if I want to create a shortcut to focus the Slack tab I could trigger the `Cmd` + `3` shortcut in Brave. While this works fine and means I don't need to take my fingers off of the keyboard to switch to the browser tabs I use regularly, there is a better way using a little bit of AppleScript. (Note: I've only gotten this to work in chromium based browsers so far as I think Firefox has some restrictions when it comes to AppleScript).

1. First I created a new shortcut in Raycast at `hyper` + `s` (for slack)
2. Create a new script command in Raycast and select AppleScript as the type, name it something useful and put it in a place where you'll find it later, I use a dotfiles directory that I sync to github so I can share this between my work and home machines.
3. Create the following AppleScript:

```AppleScript
#!/usr/bin/osascript

# @raycast.schemaVersion 1
# @raycast.title Brave focus slack tab
# @raycast.mode silent

tell application "Brave Browser"
	activate
	tell window 1
		set active tab index to 3
	end tell
end tell
```

Now I do find AppleScript to have some unconventional syntax and I've not found a great source so far for learning what options are available for different applications but there are normally some examples on the web to copy from and adapt to your liking.

This essentially just says get the browser, you can change "Brave Browser" to something like "Google Chrome" here if you use that, grab the first window - now I only ever have one window running and am pretty good at tidying up my tabs but I have seen people write a loop here to select the correct one if you embrace the tab chaos, and focus the 3rd tab, that for me is always Slack in position 3. And that's all there is to it.

I have a similar one for `Hyper` + `d` (dev server) too.

## Window management

Raycast has a nice simple window management solution built in to the free version and I think it might have more features in the Pro version. There are a whole bunch of things for moving the current window like moving to different portions of the screen, e.g. left half, top right, middle third etc - when you open Raycast and open `window management` you are presented with lots of options. I really only use a handful so you can just hide the ones you don't use often in Raycast settings. My main ones are left and right half of the screen as well as moving the current window back and forwards between monitors. I have a couple of external monitors hooked up to my MacBook Pro to make 3 in total (including the laptop screen). Each day when I have a video call in Google Meet I would need to move my main browser window from my external monitor to the laptop screen so I'm looking at the camera and can see everyone else. For the longest time I would focus the browser with `Hyper` + `b` then `Hyper` `n` (for next screen) or `Hyper` + `p` for previous screen to move the browser from one screen to the other.

Even though I do this daily I can never remember which is my next screen and which is my previous one. From what I could see Raycast didn't have the option to just put the application on the screen I wanted without needing to cycle through them. But I managed to solve this today with a bit more AppleScript.

```AppleScript

#!/usr/bin/osascript

# @raycast.schemaVersion 1
# @raycast.title Browser Laptop Screen
# @raycast.mode silent

# Documentation:
# @raycast.description Moves the browser window to the main laptop screen

tell application "Brave Browser"
	activate
	set bounds of window 1 to {0, 34, 1512, 982}
end tell
```

The key was to set the position of the window on the screen: x, y, width and height. To get these values I first put the app into its correct place using the next and previous screen commands and then temporarily used this script to get the window coordinates:

```AppleScript
#!/usr/bin/osascript

# @raycast.schemaVersion 1
# @raycast.title Get Window Bounds
# @raycast.mode inline

tell application "Brave Browser"
	activate
	get bounds of window 1
end tell
```

This printed the values back to Raycast (see [getting-started-with-script-commands](https://www.raycast.com/blog/getting-started-with-script-commands) for more details on available settings). I then hardcoded those positions into the script above. Now I just run this command to put my browser into my main laptop screen and I have a 2nd one of this to put it back to my external monitor.

So with these 2 small AppleScripts integrated with Raycast I have a bit more of a seamless automation for things I do every day.
