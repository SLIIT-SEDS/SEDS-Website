async function fetchBlogs() {
    const query = encodeURIComponent(`*[_type == "blogs"]{
      title,
      description,
      "imageUrl": image.asset->url,
      active
    }`);
    
    const url = `https://flk256bs.api.sanity.io/v1/data/query/production?query=${query}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.result); // Log the data to console
      displayBlogs(data.result); // Display blogs on the page
    } catch (error) {
      console.error('Fetch failed:', error);
    }
}

function truncateDescription(description, maxWords) {
    const words = description.split(' ');
    if (words.length > maxWords) {
        return words.slice(0, maxWords).join(' ') + '...';
    }
    return description;
}

function displayBlogs(blogs) {
    const container = document.getElementById('blog-container');

    if (blogs.length === 0) {
        container.innerHTML = '<p>No blogs available.</p>';
        return;
    }

    let blogElements = '<div class="row">'; // Start with a row

    blogs.forEach((blog, index) => {
        const truncatedDescription = truncateDescription(blog.description, 27);

        // Add a column for each blog
        blogElements += `
            <div class="col-md-6 mb-3">
                <div class="card blog-card">
                    <img src="${blog.imageUrl}" class="card-img-top" alt="${blog.title}">
                    <div class="card-body">
                        <h5 class="card-title seds-blog-title alg-text-h2 passion-one-regular">${blog.title}</h5>
                        <div class="card-text-container">
                            <p class="card-text truncated alg-text-h3 ">${truncatedDescription}</p>
                            <p class="card-text full alg-text-h3 ">${blog.description}</p>
                            <button class="btn alg-secondary-gradient-hori alg-text-light toggle-btn">Show More</button>
                        </div>
                        ${blog.active ? '<p class="text-success">Active</p>' : '<p class="text-danger">Inactive</p>'}
                    </div>
                </div>
            </div>
        `;
        // Close the row if two columns have been added
        if ((index + 1) % 2 === 0) {
            blogElements += '</div><div class="row">'; // Start a new row
        }
    });

    blogElements += '</div>'; // Close the last row
    container.innerHTML = blogElements;

    // Add event listeners for "Show More" / "Show Less" buttons
    document.querySelectorAll('.toggle-btn').forEach(button => {
        button.addEventListener('click', function() {
            const cardBody = this.closest('.card-body');
            const fullText = cardBody.querySelector('.full');
            const truncatedText = cardBody.querySelector('.truncated');

            if (this.textContent === 'Show More') {
                fullText.style.display = 'block'; // Show full description
                truncatedText.style.display = 'none'; // Hide truncated description
                this.textContent = 'Show Less'; // Change button text
            } else {
                fullText.style.display = 'none'; // Hide full description
                truncatedText.style.display = 'block'; // Show truncated description
                this.textContent = 'Show More'; // Change button text
            }
        });
    });
}
fetchBlogs();

// divisions

async function fetchdivisions() {
    const query = encodeURIComponent(`*[_type == "divisions"]{
      title,
      description,
      "imageUrl": image.asset->url,
      active
    }`);
    
    const url = `https://flk256bs.api.sanity.io/v1/data/query/production?query=${query}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.result); // Log the data to console
      displaydivisions(data.result); // Display blogs on the page
    } catch (error) {
      console.error('Fetch failed:', error);
    }
}

function truncateDescription(description, maxWords) {
    const words = description.split(' ');
    if (words.length > maxWords) {
        return words.slice(0, maxWords).join(' ') + '...';
    }
    return description;
}

function displaydivisions(divisions) {
    const container = document.getElementById('divisions-container');

    if (divisions.length === 0) {
        container.innerHTML = '<p>No divisions available.</p>';
        return;
    }

    let divisionElements = '<div class="row">'; // Start with a row

    divisions.forEach((division, index) => {
        const truncatedDescription = truncateDescription(division.description, 27);

        // Add a column for each blog
        divisionElements += `
            <div class="col-md-6 mb-3">
                <div class="card blog-card">
                    <img src="${division.imageUrl}" class="card-img-top" alt="${division.title}">
                    <div class="card-body">
                        <h5 class="card-title seds-blog-title alg-text-h2 passion-one-regular">${division.title}</h5>
                        <div class="card-text-container">
                            <p class="card-text truncated alg-text-h3 ">${truncatedDescription}</p>
                            <p class="card-text full alg-text-h3 ">${division.description}</p>
                            <button class="btn alg-secondary-gradient-hori alg-text-light toggle-btn">Show More</button>
                        </div>
                        ${division.active ? '<p class="text-success">Active</p>' : '<p class="text-danger">Inactive</p>'}
                    </div>
                </div>
            </div>
        `;
        // Close the row if two columns have been added
        if ((index + 1) % 2 === 0) {
            divisionElements += '</div><div class="row">'; // Start a new row
        }
    });

    divisionElements += '</div>'; // Close the last row
    container.innerHTML = divisionElements;

    // Add event listeners for "Show More" / "Show Less" buttons
    document.querySelectorAll('.toggle-btn').forEach(button => {
        button.addEventListener('click', function() {
            const cardBody = this.closest('.card-body');
            const fullText = cardBody.querySelector('.full');
            const truncatedText = cardBody.querySelector('.truncated');

            if (this.textContent === 'Show More') {
                fullText.style.display = 'block'; // Show full description
                truncatedText.style.display = 'none'; // Hide truncated description
                this.textContent = 'Show Less'; // Change button text
            } else {
                fullText.style.display = 'none'; // Hide full description
                truncatedText.style.display = 'block'; // Show truncated description
                this.textContent = 'Show More'; // Change button text
            }
        });
    });
}
fetchdivisions();
async function fetchDindex() {
    const query = encodeURIComponent(`*[_type == "divisions"]{
      title,
      description,
      "imageUrl": image.asset->url,
      active
    }`);
    
    const url = `https://flk256bs.api.sanity.io/v1/data/query/production?query=${query}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.result); // Log the data to console
      displayDindexs(data.result); // Display blogs on the page
    } catch (error) {
      console.error('Fetch failed:', error);
    }
}

function truncateDescription(description, maxWords) {
    const words = description.split(' ');
    if (words.length > maxWords) {
        return words.slice(0, maxWords).join(' ') + '...';
    }
    return description;
}

function displayDindexs(Dindexs) {
    const Dindexcontainer = document.getElementById('dIndex-container');

    if (Dindexs.length === 0) {
        Dindexcontainer.innerHTML = '<p>No divisions available.</p>';
        return;
    }

    let DindexElements = '<div class="row">'; // Start with a row

    // Limit the display to 2 divisions
    Dindexs.slice(0, 2).forEach((dIndex, index) => {
        const truncatedDescription = truncateDescription(dIndex.description, 27);

        // Add a column for each division
        DindexElements += `
            <div class="col-md-6 mb-3">
                <div class="card blog-card">
                    <img src="${dIndex.imageUrl}" class="card-img-top" alt="${dIndex.title}">
                    <div class="card-body">
                        <h5 class="card-title seds-blog-title alg-text-h2 passion-one-regular">${dIndex.title}</h5>
                        <div class="card-text-container">
                            <p class="card-text truncated alg-text-h3 ">${truncatedDescription}</p>
                            <p class="card-text full alg-text-h3 ">${dIndex.description}</p>
                            <button class="btn alg-secondary-gradient-hori alg-text-light toggle-btn">Show More</button>
                        </div>
                        ${dIndex.active ? '<p class="text-success">Active</p>' : '<p class="text-danger">Inactive</p>'}
                    </div>
                </div>
            </div>
        `;
    });

    DindexElements += '</div>'; // Close the row
    Dindexcontainer.innerHTML = DindexElements;

    // Add event listeners for "Show More" / "Show Less" buttons
    document.querySelectorAll('.toggle-btn').forEach(button => {
        button.addEventListener('click', function() {
            const cardBody = this.closest('.card-body');
            const fullText = cardBody.querySelector('.full');
            const truncatedText = cardBody.querySelector('.truncated');

            if (this.textContent === 'Show More') {
                fullText.style.display = 'block'; // Show full description
                truncatedText.style.display = 'none'; // Hide truncated description
                this.textContent = 'Show Less'; // Change button text
            } else {
                fullText.style.display = 'none'; // Hide full description
                truncatedText.style.display = 'block'; // Show truncated description
                this.textContent = 'Show More'; // Change button text
            }
        });
    });
}

// Fetch and display divisions when the page loads
fetchDindex();




 // Function to load header content
 function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            // Insert the content into the container
            document.getElementById('header-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
}

// Load the header content when the page loads
document.addEventListener('DOMContentLoaded', loadHeader);


  // Function to load footer content
  function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

// Load the header and footer content when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
});