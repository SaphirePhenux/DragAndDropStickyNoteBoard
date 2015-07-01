# DragAndDropStickyNoteBoard
This is a project to create an interactive kanban "sticky note" whiteboard where users can create "stick notes" for tasks and stories and "stick" them on a "whiteboard".

# Why?
You might be wondering why on earth I am creating this kanban-esque web interface when there are so many other lean and agile development tracking and planning programs out there. Well, the <i>REALLY</i> simple answer it that I was bored and wanted a fun personal project to do. The slightly more complicated, but still realively simple answer was it was suggested during a daily standup (scrum) meeting and that was talk about having a board of somekind that we could display on the wall (like a kanban signboard) that we could use as a simpler and easier way of "viewing" our tasks without having to either stayed logged into or having to constantly relog into our VersionOne client that we were using. In case you were wondering, VersionOne was a company wide thing and they wanted everyone to use it. So, at that particular meeting, it was suggested that we have something on the wall to display our current tasks and stories. I thought, 'why not create an interactive "stickynote board" that has drag and drop capability?'. So! I set out to create one. A really simple stickynote board that can be used on a local network relatively easily, can be displayed on the wall (either via wall-mounted screen or projector) and can be updated by anyone who needs to by going to the stickynote url? I hope to later set it up so that if you have it displayed on a large touchscreen, you will be able to intact with it via the drag and drop functionality of the "StickyNotes", but that's further down the road.

# To Do List:
+ Add the ability to create and remove new columns as needed (I'm thinking of doing something with the z-index, but I'm not sure yet.)
+ Add the ability to save sprints, stories and tasks so that no matter who accesses it in the office, it will show the current data rather than the default data that comes on a fresh install. Currently, I am planning on using AJAX to do this.

## Maybe Items:
+ Add the ability to track story points. - Not sure if I will do this. It feels like it might take away from the simplicity of the project and make it more complicated (visually speaking) than it needs to be.
+ Possibly add the ability for it to interact with (pull and send data) to a VersionOne server. - I'm still debating, as it would be nice for it to be able to do this, since my team does currently use VersionOne after, but I'm not sure if I was to spend the time and effort to do so, especially if not everyone who uses this will even need or want it.

# Contact
Author/Creator: SaphirePhenux
Email: aphenux@gmail.com