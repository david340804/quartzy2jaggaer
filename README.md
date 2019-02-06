[TOC]

# Quartzy 2 Jaggaer (q2j)
Previously called Quartzy2Buzzmart because this project was built for Georgia Tech's rebranded install of Jaggaer called Buzzmart
Chrome extension for batch data copying from Quartzy Lab Management to Jaggaer NonCatalog Ordering Form

### What is this?

q2j is a tool for quickly copying data from a Quartzy Item Request into the Jaggaer NonCatalog Ordering Form

I made this during my time as Shop Manager at the Invention Studio at Georgia Tech after the first couple times I had to copy-paste values across tabs for orders with 50+ line items.

### Installation
 This is an *unpacked* extension which means you need to install it via developer mode. Maybe I'll put it in the Chrome Web Store, but until then, developer mode installation is the only way.

Point your browser unpacked extension installer to the unzipped source folder to add the extension.

### How do I use it?
1. Open a Jaggaer NonCatalog Form Tab/WIndow
2. In a new tab, open Quartzy and select an Item
3. With the Item Detail View open, click the Quartzy2Jaggaer browser extension button
4. Enjoy the experience of not copy-pasting all those values one by one


### Components

##### Content Scripts
 NonCatalog Form Data Insertion Script
- Runs on Jaggaer NonCatalog Form tab
- Listens for background script messages

Active Tab (Quartzy Item View)
- Bound to OnClick of browser extension button (Browser Action)
- Runs on active tab
- Scrapes out item data from DOM using css class identification
- Bundles data into JSON object *item*
- Transmits *item* to background script

##### Background Script
- Listens for extension button click (called Browser Action in Chrome)
- Locates open NonCatalog Form tabs
- Acts as data router for *items* between active tabs (Quartzy Item View) and NonCatalog Form tabs