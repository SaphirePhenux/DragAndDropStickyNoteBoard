var task_id = 0;
var story_id = 0;
var dependancy_id = 0;
var blocker_id = 0;

function create_new_task() {
  // alert("test!");
  var new_task = document.createElement('div');
  new_task.id = "task_" + task_id;
  task_id++;
  // alert(new_task.id + ", " + task_id);
  new_task.className = 'task_note';
  var candragya = document.createAttribute("draggable");
  var dragstart = document.createAttribute("ondragstart");
  candragya.value = "true";
  dragstart.value = "drag(event)";
// isdraggable
// isdragstart
  new_task.setAttributeNode(candragya);
  new_task.setAttributeNode(dragstart);
  // document.getElementById("note_holder").appendChild(new_task);
  document.getElementById("committed_tasks").appendChild(new_task);
  var new_task_title = document.createElement('p');
  new_task.appendChild(new_task_title);
  new_task_title.textContent = "Task: "; // + Date();
  var new_task_story = document.createElement('p');
  var new_task_owner = document.createElement('p');
  var new_task_id = document.createElement('p');
  new_task.appendChild(new_task_story);
  new_task.appendChild(new_task_owner);
  new_task.appendChild(new_task_id);
  new_task_story.textContent = "Story: "; // + Date();
  new_task_owner.textContent = "Owner: "; // + Date();
  new_task_id.textContent = "ID: " + new_task.id;
  // + ', ' + new_task.className);
  // body...
}

function create_new_story() {
  // alert("test!");
  var new_story = document.createElement('div');
  new_story.id = "story_" + story_id;
  story_id++;
  new_story.className = 'story_note';
  var candragya = document.createAttribute("draggable");
  var dragstart = document.createAttribute("ondragstart");
  candragya.value = "true";
  dragstart.value = "drag(event)";
// isdraggable
// isdragstart
  new_story.setAttributeNode(candragya);
  new_story.setAttributeNode(dragstart);
  // document.getElementById("note_holder").appendChild(new_story);
  document.getElementById("backlog").appendChild(new_story);
  var new_story_title = document.createElement('p');
  new_story.appendChild(new_story_title);
  new_story_title.textContent = "Story: "; // + Date();
  var new_story_story = document.createElement('p');
  var new_story_owner = document.createElement('p');
  new_story.appendChild(new_story_story);
  new_story.appendChild(new_story_owner);
  new_story_story.textContent = "Desc: "; // + Date();
  new_story_owner.textContent = "Owner: "; // + Date();
  // + ', ' + new_story.className);
  // body...

}

function create_new_dependancy() {
  // alert("test!");
  var new_dependancy = document.createElement('div');
  new_dependancy.id = "dependancy_" + dependancy_id;
  dependancy_id++;
  // alert(new_dependancy.id + ", " + dependancy_id);
  new_dependancy.className = 'dependancy_note';
  var candragya = document.createAttribute("draggable");
  var dragstart = document.createAttribute("ondragstart");
  candragya.value = "true";
  dragstart.value = "drag(event)";
// isdraggable
// isdragstart
  new_dependancy.setAttributeNode(candragya);
  new_dependancy.setAttributeNode(dragstart);
  // get element id based on where it needs to be and what it needs to be attached to.
  document.getElementById("backlog").appendChild(new_dependancy);
  var new_dependancy_title = document.createElement('p');
  new_dependancy.appendChild(new_dependancy_title);
  new_dependancy_title.textContent = "Dependancy: "; // + Date();
  var new_dependancy_story = document.createElement('p');
  var new_dependancy_owner = document.createElement('p');
  new_dependancy.appendChild(new_dependancy_story);
  new_dependancy.appendChild(new_dependancy_owner);
  new_dependancy_story.textContent = "Story or Task: "; // + Date();
  new_dependancy_owner.textContent = "Owner: "; // + Date();
}

function create_new_blocker() {
  // alert("test!");
  var new_blocker = document.createElement('div');
  new_blocker.id = "blocker_" + blocker_id;
  blocker_id++;
  // alert(new_blocker.id + ", " + blocker_id);
  new_blocker.className = 'blocker_note';
  var candragya = document.createAttribute("draggable");
  var dragstart = document.createAttribute("ondragstart");
  candragya.value = "true";
  dragstart.value = "drag(event)";
// isdraggable
// isdragstart
  new_blocker.setAttributeNode(candragya);
  new_blocker.setAttributeNode(dragstart);
  // Place according to the needed location.
  document.getElementById("backlog").appendChild(new_blocker);
  var new_blocker_title = document.createElement('p');
  new_blocker.appendChild(new_blocker_title);
  new_blocker_title.textContent = "Blocker: "; // + Date();
  var new_blocker_story = document.createElement('p');
  var new_blocker_owner = document.createElement('p');
  new_blocker.appendChild(new_blocker_story);
  new_blocker.appendChild(new_blocker_owner);
  new_blocker_story.textContent = "Story or Task: "; // + Date();
  new_blocker_owner.textContent = "Owner: "; // + Date();

}

// =================================================================

function create_new_task_small() {
  // alert("test!");
  var new_task = document.createElement('div');
  new_task.id = "task_" + task_id;
  task_id++;
  // alert(new_task.id + ", " + task_id);
  new_task.className = 'task_note_small';
  var candragya = document.createAttribute("draggable");
  var dragstart = document.createAttribute("ondragstart");
  candragya.value = "true";
  dragstart.value = "drag(event)";
// isdraggable
// isdragstart
  new_task.setAttributeNode(candragya);
  new_task.setAttributeNode(dragstart);
  // document.getElementById("note_holder").appendChild(new_task);
  document.getElementById("div1").appendChild(new_task);
  var new_task_id = document.createElement('p');
  new_task.appendChild(new_task_id);
  new_task_id.textContent = "ID: " + new_task.id;
}

function create_new_story_small() {
  // alert("test!");
  var new_story = document.createElement('div');
  new_story.id = "story_" + story_id;
  story_id++;
  new_story.className = 'story_note_small';
  var candragya = document.createAttribute("draggable");
  var dragstart = document.createAttribute("ondragstart");
  candragya.value = "true";
  dragstart.value = "drag(event)";
// isdraggable
// isdragstart
  new_story.setAttributeNode(candragya);
  new_story.setAttributeNode(dragstart);
  // document.getElementById("note_holder").appendChild(new_story);
  document.getElementById("div1").appendChild(new_story);
  var new_story_id = document.createElement('p');
  new_story.appendChild(new_story_id);
  new_story_id.textContent = "ID: " + new_story.id;
}

}

function create_new_dependancy_small() {
  // alert("test!");
  var new_dependancy = document.createElement('div');
  new_dependancy.id = "dependancy_" + dependancy_id;
  dependancy_id++;
  // alert(new_dependancy.id + ", " + dependancy_id);
  new_dependancy.className = 'dependancy_note_small';
  var candragya = document.createAttribute("draggable");
  var dragstart = document.createAttribute("ondragstart");
  candragya.value = "true";
  dragstart.value = "drag(event)";
// isdraggable
// isdragstart
  new_dependancy.setAttributeNode(candragya);
  new_dependancy.setAttributeNode(dragstart);
  // get element id based on where it needs to be and what it needs to be attached to.
  document.getElementById("div1").appendChild(new_dependancy);
  var new_dependancy_id = document.createElement('p');
  new_dependancy.appendChild(new_dependancy_id);
  new_dependancy_id.textContent = "ID: " + new_dependancy.id;
}

function create_new_blocker_small() {
  // alert("test!");
  var new_blocker = document.createElement('div');
  new_blocker.id = "blocker_" + blocker_id;
  blocker_id++;
  // alert(new_blocker.id + ", " + blocker_id);
  new_blocker.className = 'blocker_note_small';
  var candragya = document.createAttribute("draggable");
  var dragstart = document.createAttribute("ondragstart");
  candragya.value = "true";
  dragstart.value = "drag(event)";
// isdraggable
// isdragstart
  new_blocker.setAttributeNode(candragya);
  new_blocker.setAttributeNode(dragstart);
  // Place according to the needed location.
  document.getElementById("div1").appendChild(new_blocker);
  var new_blocker_id = document.createElement('p');
  new_blocker.appendChild(new_blocker_id);
  new_blocker_id.textContent = "ID: " + new_blocker.id;
}




function put_new_task (argument) {
   // body...
 }
function put_new_owner (argument) {
   // body...
 }
function put_new_story (argument) {
   // body...
 }
function put_new_dependancy (argument) {
   // body...
 }
function put_new_blocker (argument) {
   // body...
 }
function put_new_column (argument) {
   // body...
 }

// =================================================================
/*
function create_new_task_small() {
  // alert("test!");
  var new_task = document.createElement('div');
  new_task.id = "task_" + task_id;
  task_id++;
  // alert(new_task.id + ", " + task_id);
  new_task.className = 'task_note_small';
  var candragya = document.createAttribute("draggable");
  var dragstart = document.createAttribute("ondragstart");
  candragya.value = "true";
  dragstart.value = "drag(event)";
// isdraggable
// isdragstart
  new_task.setAttributeNode(candragya);
  new_task.setAttributeNode(dragstart);
  // document.getElementById("note_holder").appendChild(new_task);
  document.getElementById("div1").appendChild(new_task);
  var new_task_id = document.createElement('p');
  new_task.appendChild(new_task_id);
  new_task_id.textContent = "ID: " + new_task.id;
}

function create_new_story_small() {
  // alert("test!");
  var new_story = document.createElement('div');
  new_story.id = "story_" + story_id;
  story_id++;
  new_story.className = 'story_note_small';
  var candragya = document.createAttribute("draggable");
  var dragstart = document.createAttribute("ondragstart");
  candragya.value = "true";
  dragstart.value = "drag(event)";
// isdraggable
// isdragstart
  new_story.setAttributeNode(candragya);
  new_story.setAttributeNode(dragstart);
  // document.getElementById("note_holder").appendChild(new_story);
  document.getElementById("div1").appendChild(new_story);
  var new_story_id = document.createElement('p');
  new_story.appendChild(new_story_id);
  new_story_id.textContent = "ID: " + new_story.id;
}

//}

function create_new_dependancy_small() {
  // alert("test!");
  var new_dependancy = document.createElement('div');
  new_dependancy.id = "dependancy_" + dependancy_id;
  dependancy_id++;
  // alert(new_dependancy.id + ", " + dependancy_id);
  new_dependancy.className = 'dependancy_note_small';
  var candragya = document.createAttribute("draggable");
  var dragstart = document.createAttribute("ondragstart");
  candragya.value = "true";
  dragstart.value = "drag(event)";
// isdraggable
// isdragstart
  new_dependancy.setAttributeNode(candragya);
  new_dependancy.setAttributeNode(dragstart);
  // get element id based on where it needs to be and what it needs to be attached to.
  document.getElementById("div1").appendChild(new_dependancy);
  var new_dependancy_id = document.createElement('p');
  new_dependancy.appendChild(new_dependancy_id);
  new_dependancy_id.textContent = "ID: " + new_dependancy.id;
}

function create_new_blocker_small() {
  // alert("test!");
  var new_blocker = document.createElement('div');
  new_blocker.id = "blocker_" + blocker_id;
  blocker_id++;
  // alert(new_blocker.id + ", " + blocker_id);
  new_blocker.className = 'blocker_note_small';
  var candragya = document.createAttribute("draggable");
  var dragstart = document.createAttribute("ondragstart");
  candragya.value = "true";
  dragstart.value = "drag(event)";
// isdraggable
// isdragstart
  new_blocker.setAttributeNode(candragya);
  new_blocker.setAttributeNode(dragstart);
  // Place according to the needed location.
  document.getElementById("div1").appendChild(new_blocker);
  var new_blocker_id = document.createElement('p');
  new_blocker.appendChild(new_blocker_id);
  new_blocker_id.textContent = "ID: " + new_blocker.id;
}
*/

// =============================================================================

