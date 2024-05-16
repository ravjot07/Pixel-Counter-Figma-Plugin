# README

## Pixel Counting Plugin for Figma

This plugin counts the total pixels covered by frames and sections in the current Figma document and updates the UI accordingly.

## Prerequisites

-   Figma account
-   Node.js installed
-   npm installed

## Setup and Installation
**Clone the repository**:
```
git clone <repository-url>
cd <repository-directory>
```
**Install dependencies**:
```
npm install
```
## Running the Plugin

1.  **Open Figma**: Open your Figma account and the desired document where you want to use the plugin.
    
2.  **Load the Plugin**:
    
    -   Open the Figma desktop app.
    -   Go to `Plugins` > `Development` > `Import plugin from manifest...`.
    -   Select the `manifest.json` file from your project directory.
3.  **Activate the Plugin**:
    
    -   Once imported, activate the plugin from the Figma Plugins menu.
## Usage

-   **Initial Count**: When the plugin is activated, it will automatically count the pixels covered by frames and sections in the current document and update the UI.
    
-   **Real-time Updates**: Any changes in the document will trigger an update, recalculating the pixel counts and updating the UI.
    
-   **Manual Recount**: The user can request a recount by sending a `'calculate-pixels'` message from the UI.
