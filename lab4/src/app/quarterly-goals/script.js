document.addEventListener('DOMContentLoaded', function() {
    // Pencil Icon and "Add a quarter goal" button
    const pencilIcon = document.querySelector('.edit-icon');
    const addGoalBtn = document.querySelector('.add-goal');

    // Event listener for the "Add a quarter goal" button
    addGoalBtn.addEventListener('click', function() {
        addOrEditGoal();
    });

    // Event listener for pencil icon to trigger browser dialog
    pencilIcon.addEventListener('click', function() {
        addOrEditGoal();
    });

    // Function to add or edit a quarter goal
    function addOrEditGoal() {
        let goal = prompt("Enter a new quarter goal:");
        if (goal === null || goal.trim() === "") return;  // Exit if nothing entered
        
        let hashtag = prompt("Enter a goal hashtag:");
        if (hashtag === null || hashtag.trim() === "") return;

        let completion = prompt("Enter goal completion status:");
        if (completion === null || completion.trim() === "") return;

        // New goal HTML
        const goalTemplate = `
            <div class="goal">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="goal-icon">
                    <rect x="1.54917" y="1.03273" width="19.3525" height="19.3707" rx="3.37037" stroke="#2DBDB1" stroke-width="1.68519"/>
                </svg>
                <div class="goal-content">
                    <span class="task">${goal}</span>
                    <div class="hashtags-progress">
                        <span class="hashtag">#${hashtag}</span>
                        <span class="progress">${completion}</span>
                    </div>
                </div>
            </div>
            <hr>
        `;

        // Insert the new goal before the "Add a quarter goal" button
        addGoalBtn.insertAdjacentHTML('beforebegin', goalTemplate);
    }
});