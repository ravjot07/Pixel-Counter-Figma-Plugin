// This file will communicate with Figma's API and your UI

// Main function to count pixels

function countPixels() {
    let totalPixels = 0;
    let frameCount = 0;

    const topLevelNodes = figma.currentPage.children;
    topLevelNodes.forEach(node => {
        if (node.type === "FRAME" || node.type === "SECTION") {
            let nodeArea = node.width * node.height;
            totalPixels += nodeArea;
            frameCount++;
        }
    });

    console.log(`Total nodes (frames/sections) counted: ${frameCount}`);
    console.log(`Total area covered by frames/sections: ${totalPixels}`);
    updateUI(frameCount, totalPixels);
}
function updateUI(frameCount, totalPixels) {
    if (figma.ui) {
        figma.ui.postMessage({
            type: 'update-counts',
            frameCount: frameCount,
            totalPixels: totalPixels
        });
    } else {
        console.error("UI not created yet. Unable to send message.");
    }
}
figma.showUI(__html__, { width: 340, height: 558 });


// Set up an event listener for changes in the document
figma.on('documentchange', () => {
    countPixels();
});

// Initial call to count pixels and sections
countPixels();


// Listen for when the UI is ready
figma.ui.onmessage = msg => {
    if (msg.type === 'calculate-pixels') {
        countPixels();
    }
};

// Initial call or setup instructions go here
countPixels();
