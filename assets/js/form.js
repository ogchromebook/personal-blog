// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element using its class name 'formEntry'
    const form = document.getElementById('blogForm')[0];

    // Add an event listener to handle the form submission
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior to handle it with JavaScript
        event.preventDefault();

        // Get the values from the form fields
        const username = document.getElementById('username').value;
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        // Create a blog post object with the form values
        const blogPost = {
            title: title,
            author: username,
            content: content
        };

        // Save the blog post to local storage
        saveBlogPost(blogPost);

        // Reset the form fields after submission
        form.reset();
        
        // Redirect to the display page to show the saved blog posts
        window.location.href = "blog.html";
    });

    // Function to save the blog post object to local storage
    function saveBlogPost(post) {
        // Retrieve existing blog data from local storage, or initialize an empty array if none exists
        let blogData = JSON.parse(localStorage.getItem('blogData')) || [];

        // Add the new blog post to the existing blog data array
        blogData.push(post);

        // Save the updated blog data array back to local storage
        localStorage.setItem('blogData', JSON.stringify(blogData));
    }
});

    