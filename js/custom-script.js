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
function copyToClipboard() {
    // Copy the content of the div to clipboard
    const div = document.getElementById("copy-contents");
    const range = document.createRange();
    range.selectNode(div);
    window.getSelection().removeAllRanges(); // Clear previous selections
    window.getSelection().addRange(range); // Select the content
    try {
        document.execCommand("copy"); // Copy to clipboard
        showToast();
    } catch (err) {
        console.error("Failed to copy: ", err);
    }
    window.getSelection().removeAllRanges(); // Clear selection after copying
}
function showToast() {
    const toastEl = document.getElementById('liveToast');
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
  }