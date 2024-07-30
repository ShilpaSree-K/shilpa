document.addEventListener('DOMContentLoaded', function() {
    const courses = [
        { id: 1, name: 'HTML & CSS' },
        { id: 2, name: 'JavaScript Basics' },
        { id: 3, name: 'React Development' },
        { id: 4, name: 'Node.js & Express' }
    ];

    const courseContainer = document.getElementById('courses');
    const courseSelect = document.getElementById('course');

    // Load courses dynamically
    courses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.className = 'course-item';
        courseItem.textContent = course.name;
        courseContainer.appendChild(courseItem);

        const option = document.createElement('option');
        option.value = course.id;
        option.textContent = course.name;
        courseSelect.appendChild(option);
    });

    // Form submission handler
    document.getElementById('registration-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const course = document.getElementById('course').value;

        if (name && email && course) {
            // Display success message
            const messageDiv = document.getElementById('message');
            messageDiv.className = 'message success';
            messageDiv.textContent = 'You have successfully registered for the course!';
            messageDiv.style.display = 'block';

            // Clear the form
            document.getElementById('registration-form').reset();
        } else {
            // Display error message
            const messageDiv = document.getElementById('message');
            messageDiv.className = 'message error';
            messageDiv.textContent = 'Please fill in all fields before submitting!';
            messageDiv.style.display = 'block';
        }
    });
});
