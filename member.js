function skillsMember() {
    var skills = document.getElementById("skills");
    var member = document.getElementById("member");
    var memberName = member.options[member.selectedIndex].value;
    var memberSkills = members[memberName].skills;
    skills.innerHTML = "";
    for (var i = 0; i < memberSkills.length; i++) {
        var skill = document.createElement("option");
        skill.value = memberSkills[i];
        skill.innerHTML = memberSkills[i];
        skills.appendChild(skill);
    }
}