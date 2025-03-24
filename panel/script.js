Script.js 
document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    const navLinks = document.querySelectorAll('nav a');
    const contentSections = document.querySelectorAll('.content-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Update active nav link
            navLinks.forEach(navLink => {
                navLink.parentElement.classList.remove('active');
            });
            this.parentElement.classList.add('active');
            
            // Show corresponding section
            contentSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });
        });
    });
    
    // Modal handling
    const createServerBtn = document.getElementById('create-server');
    const modal = document.getElementById('create-server-modal');
    const closeBtn = document.querySelector('.close');
    
    createServerBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Form submissions
    document.getElementById('server-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Server creation would be sent to API here');
        modal.style.display = 'none';
    });
    
    document.getElementById('settings-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Settings saved (in a real app, this would persist)');
    });
    
    // Sample data population
    populateActivityLog();
    populateServersTable();
    populateUsersTable();
});

function populateActivityLog() {
    const activities = [
        { action: 'Server "Minecraft 1" started', time: '2 minutes ago' },
        { action: 'User "player2" created', time: '15 minutes ago' },
        { action: 'Server "ARK Survival" stopped', time: '1 hour ago' },
        { action: 'Panel updated to v1.0.0', time: '2 days ago' }
    ];
    
    const activityList = document.getElementById('activity-list');
    
    activities.forEach(activity => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${activity.action}</span><span class="time">${activity.time}</span>`;
        activityList.appendChild(li);
    });
}

function populateServersTable() {
    const servers = [
        { id: 1, name: 'Minecraft 1', status: 'online', node: 'Node 1' },
        { id: 2, name: 'ARK Survival', status: 'offline', node: 'Node 2' },
        { id: 3, name: 'CS:GO Competitive', status: 'online', node: 'Node 1' },
        { id: 4, name: 'Rust Wipe Day', status: 'starting', node: 'Node 2' },
        { id: 5, name: 'Valheim Vikings', status: 'online', node: 'Node 1' }
    ];
    
    const tableBody = document.querySelector('#servers-table tbody');
    
    servers.forEach(server => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${server.id}</td>
            <td>${server.name}</td>
            <td><span class="status-${server.status}">${server.status}</span></td>
            <td>${server.node}</td>
            <td>
                <button class="btn btn-primary btn-sm"><i class="fas fa-play"></i></button>
                <button class="btn btn-danger btn-sm"><i class="fas fa-stop"></i></button>
                <button class="btn btn-secondary btn-sm"><i class="fas fa-cog"></i></button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function populateUsersTable() {
    const users = [
        { id: 1, username: 'admin', email: 'admin@example.com', role: 'Administrator' },
        { id: 2, username: 'moderator1', email: 'mod1@example.com', role: 'Moderator' },
        { id: 3, username: 'player1', email: 'player1@example.com', role: 'User' },
        { id: 4, username: 'player2', email: 'player2@example.com', role: 'User' }
    ];
    
    const tableBody = document.querySelector('#users-table tbody');
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>
                <button class="btn btn-primary btn-sm"><i class="fas fa-edit"></i></button>
                <button class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Refresh servers button
document.getElementById('refresh-servers').addEventListener('click', function() {
    const tableBody = document.querySelector('#servers-table tbody');
    tableBody.innerHTML = ''; // Clear current data
    populateServersTable(); // Repopulate
    alert('Servers list refreshed');
});
