document.addEventListener('DOMContentLoaded', function() {
    const blogContainer = document.getElementById('blogContainer');

    function loadBlogData() {
        const blogData = JSON.parse(localStorage.getItem('blogData')) || [];

        blogData.forEach(blog => {
            console.log(blog)
            const blogCard = document.createElement('div');
            blogCard.className = 'blogCard'

            const blogTitle = document.createElement('div');
            blogTitle.className = 'blogTitle';
            blogTitle.textContent = blog.title

            const blogAuthor = document.createElement('div');
            blogAuthor.className = 'blogAuthor';
            blogAuthor.textContent = blog.author

            const blogContent = document.createElement('div');
            blogContent.className = 'blogContent';
            blogContent.textContent = blog.content

            blogCard.appendChild(blogTitle);
            blogCard.appendChild(blogAuthor);
            blogCard.appendChild(blogContent);

            blogContainer.appendChild(blogCard);
        });
    }

    loadBlogData()
});