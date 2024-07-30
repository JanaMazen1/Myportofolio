document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'cv.pdf';  // Replace with the actual path to your CV file
    link.download = 'cv.pdf'; // The name the file will be saved as
    link.click();
});
