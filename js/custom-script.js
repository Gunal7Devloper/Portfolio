function takeSnapshot() {
    // Here you can add the logic to take a snapshot
    const div = document.getElementById("capture-template");
    html2canvas(div).then(canvas => {
        // Create image from canvas
        const imgData = canvas.toDataURL("image/png");
        // Optional: Download the image
        const link = document.createElement("a");
        link.href = imgData;
        link.download = "screenshot.png";
        link.click();
    });
}