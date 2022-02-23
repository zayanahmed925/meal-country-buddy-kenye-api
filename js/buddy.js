const loadBuddy = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => dispalyBuddy(data))
}
loadBuddy();
const dispalyBuddy = (buddy) => {
    const buddys = buddy.results;
    const buddysArea = document.getElementById('buddy-area');
    for (const buddy of buddys) {
        const p = document.createElement('p');
        p.innerText = `Gender: ${buddy.gender}  Name: ${buddy.name.title} ${buddy.name.first}
        `
        buddysArea.appendChild(p);
        console.log(buddy);
    }

}