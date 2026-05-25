/* ============================================================
   Tutor — Learn mode bootstrap
   Each learn/<course>.js file assigns content into LEARN_DATA[<id>].
   ============================================================ */

var LEARN_DATA = {};

/* Helper for course files — call as LEARN(courseId, { intro, chapters }) */
function LEARN(id, data) { LEARN_DATA[id] = data; }
