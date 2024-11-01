function addGoal() {
    const goalInput = document.getElementById("goalInput");
    const goalList = document.getElementById("goalList");
    
    if (goalInput.value) {
        const li = document.createElement("li");
        li.textContent = goalInput.value;
        goalList.appendChild(li);
        goalInput.value = ""; // Clear the input
    }
}

function addReflection() {
    const reflectionInput = document.getElementById("reflectionInput");
    const reflectionList = document.getElementById("reflectionList");
    
    if (reflectionInput.value) {
        const li = document.createElement("li");
        li.textContent = reflectionInput.value;
        reflectionList.appendChild(li);
        reflectionInput.value = ""; // Clear the input
    }
}
