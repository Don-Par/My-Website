document.addEventListener('DOMContentLoaded', function() {
const timelineData = [
    {
        date: 'Dec 2022 - Aug 2024',
        title: 'IT Support Technician',
        description: 'As an IT Support Technician at the Canadian Food Inspection Agency, I was involved in \
         various tasks. I provided comprehensive technical support for hardware and software issues, managed user\
          accounts and permissions in Active Directory, and conducted routine maintenance and updates on systems and\
           applications. I was responsible for installing, configuring, and maintaining computer systems, setting up \
           video conferencing technology, and assisting with network troubleshooting. I efficiently resolved support\
            tickets by utilizing IT services ticketing systems such as Assyst and ServiceNow. I contributed to\
             various IT projects, including system upgrades and migrations. I also created and maintained IT\
              procedure documentation and knowledge base articles and provided user training to enhance software \
              application proficiency.'
    }
    // {
    //     date: 'Aug 2019 - Jan 2022',
    //     title: 'Freelance Sarcasm Specialist',
    //     description: 'Offered a wide range of sarcasm consulting services. Helped clients understand the fine line between a hilarious email and an HR issue.'
    // }
];

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        let entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        let date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        let content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = item.title;

        let description = document.createElement('p');
        description.textContent = item.description;
        description.style.display = 'none'; // Initially hide the description

        // Click event to toggle the description visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(description);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });
});

var vr = document.registerElement('v-r'); // vertical rule please, yes!
