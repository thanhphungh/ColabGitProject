document.querySelector('button').addEventListener('click', function() {
    const members = ['Tom', 'Jerry', 'Spike'];
    const memberList = document.createElement('p');
    memberList.textContent = 'Team Members: ' + members.join(', ');
    document.body.appendChild(memberList);
});