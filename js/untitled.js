/***************** 
 * Untitled (CDN対応版)
 *****************/

// --- import 削除 ---
// import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';

// PsychoJS のモジュールをグローバル psychoJS から参照
const { PsychoJS } = psychoJS.core;
const { TrialHandler, MultiStairHandler } = psychoJS.data;
const { Scheduler } = psychoJS.util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = psychoJS.util;

// store info about the experiment session:
let expName = 'untitled';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${psychoJS.util.pad(Number.parseFloat(psychoJS.util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new psychoJS.util.Color([0,0,0]),
  units: 'pix',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instRoutineBegin());
flowScheduler.add(instRoutineEachFrame());
flowScheduler.add(instRoutineEnd());
flowScheduler.add(restRoutineBegin());
flowScheduler.add(restRoutineEachFrame());
flowScheduler.add(restRoutineEnd());
flowScheduler.add(inst2RoutineBegin());
flowScheduler.add(inst2RoutineEachFrame());
flowScheduler.add(inst2RoutineEnd());
flowScheduler.add(startRoutineBegin());
flowScheduler.add(startRoutineEachFrame());
flowScheduler.add(startRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);

flowScheduler.add(instRoutineBegin());
flowScheduler.add(instRoutineEachFrame());
flowScheduler.add(instRoutineEnd());
flowScheduler.add(restRoutineBegin());
flowScheduler.add(restRoutineEachFrame());
flowScheduler.add(restRoutineEnd());
flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
  ]
});

psychoJS.experimentLogger.setLevel(psychoJS.core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = psychoJS.util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  psychoJS.util.addInfoFromUrl(expInfo);

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';

  return Scheduler.Event.NEXT;
}

var instClock;
var text;
var restClock;
var polygon;
var inst2Clock;
var text_3;
var key_resp;
var startClock;
var text3;
var text2;
var text1;
var startmsg;
var nongame_taskClock;
var number_list;
var pos;
var checklist_number;
var checklist_pos;
var answer_checklist;
var key_3;
var matrix_ur_3;
var matrix_ul_3;
var matrix_dr_3;
var matrix_dl_3;
var circle_2;
var thanksClock;
var text_2;
var globalClock;
var routineTimer;

async function experimentInit() {
  // Initialize components for Routine "inst"
  instClock = new psychoJS.util.Clock();
  text = new psychoJS.visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Rest for 2 minutes.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 100.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new psychoJS.util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "rest"
  restClock = new psychoJS.util.Clock();
  polygon = new psychoJS.visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon', 
    vertices: 'cross', size:[100, 100],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new psychoJS.util.Color('white'), 
    fillColor: new psychoJS.util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "inst2"
  inst2Clock = new psychoJS.util.Clock();
  text_3 = new visual.TextStim({
  win: psychoJS.window,
  name: 'text_3',
  text: "This is '2-back'\ncondition\n\nPlease enter '1', \nif the target is same \nto the target n before\n\nPlease enter 'Q', \nif the target is not same \nto the target n before\n\nIf you understand, please press the space key.",
  font: 'Open Sans',
  pos: [0, 0],
  height: 36.0,
  color: new util.Color('white')
});

  
  key_resp = new psychoJS.core.Keyboard({psychoJS: psychoJS, clock: new psychoJS.util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "start"
  startClock = new psychoJS.util.Clock();
  text3 = new psychoJS.visual.TextStim({
    win: psychoJS.window,
    name: 'text3',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 100.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new psychoJS.util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text2 = new psychoJS.visual.TextStim({
    win: psychoJS.window,
    name: 'text2',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 100.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new psychoJS.util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text1 = new psychoJS.visual.TextStim({
    win: psychoJS.window,
    name: 'text1',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 100.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new psychoJS.util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  startmsg = new psychoJS.visual.TextStim({
    win: psychoJS.window,
    name: 'startmsg',
    text: 'START',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 100.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new psychoJS.util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });


  // Initialize components for Routine "nongame_task"
  nongame_taskClock = new psychoJS.util.Clock();
  number_list = new psychoJS.data.TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: psychoJS.data.TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'number_list.xlsx',
    seed: undefined, name: 'number_list'
  });
  psychoJS.experiment.addLoop(number_list); // add the loop to the experiment

  pos = new psychoJS.data.TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: psychoJS.data.TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'pos.xlsx',
    seed: undefined, name: 'pos'
  });
  psychoJS.experiment.addLoop(pos);

  checklist_number = [];
  checklist_pos = [];
  answer_checklist = [];

  key_3 = new psychoJS.core.Keyboard({psychoJS: psychoJS, clock: new psychoJS.util.Clock(), waitForStart: true});

  matrix_ur_3 = new psychoJS.visual.Rect({
    win: psychoJS.window, name: 'matrix_ur_3',
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0.0, pos: [0.3, 0.3],
    lineWidth: 1.0, lineColor: new psychoJS.util.Color('white'),
    fillColor: new psychoJS.util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true
  });

  matrix_ul_3 = new psychoJS.visual.Rect({
    win: psychoJS.window, name: 'matrix_ul_3',
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0.0, pos: [-0.3, 0.3],
    lineWidth: 1.0, lineColor: new psychoJS.util.Color('white'),
    fillColor: new psychoJS.util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true
  });

  matrix_dr_3 = new psychoJS.visual.Rect({
    win: psychoJS.window, name: 'matrix_dr_3',
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0.0, pos: [0.3, -0.3],
    lineWidth: 1.0, lineColor: new psychoJS.util.Color('white'),
    fillColor: new psychoJS.util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true
  });

  matrix_dl_3 = new psychoJS.visual.Rect({
    win: psychoJS.window, name: 'matrix_dl_3',
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0.0, pos: [-0.3, -0.3],
    lineWidth: 1.0, lineColor: new psychoJS.util.Color('white'),
    fillColor: new psychoJS.util.Color('white'),
    opacity: undefined, depth: -5, interpolate: true
  });

  circle_2 = new psychoJS.visual.Polygon({
    win: psychoJS.window, name: 'circle_2',
    edges: 100, size: [0.15, 0.15],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new psychoJS.util.Color('white'),
    fillColor: new psychoJS.util.Color('white'),
    opacity: undefined, depth: -6, interpolate: true
  });

  // Initialize components for Routine "thanks"
  thanksClock = new psychoJS.util.Clock();
  text_2 = new psychoJS.visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Thank you for participating!',
    font: 'Arial',
    units: undefined,
    pos: [0, 0], draggable: false, height: 0.05, wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new psychoJS.util.Color('white'), opacity: undefined,
    depth: 0.0
  });

  // global clocks
  globalClock = new psychoJS.util.Clock();  // to track the time since experiment started
  routineTimer = new psychoJS.core.CountdownTimer();  // to track time remaining of each routine
}


// Routine "inst" functions:
var t;
var frameN;
var instComponents;
function instRoutineBegin(snapshot) {
  return async function () {
    t = 0;
    instClock.reset();
    frameN = -1;
    instComponents = [text];
    for (const thisComponent of instComponents)
      if ('status' in thisComponent)
        thisComponent.status = psychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  };
}

function instRoutineEachFrame(snapshot) {
  return async function () {
    t = instClock.getTime();
    frameN++;
    if (t >= 0.0 && text.status === psychoJS.Status.NOT_STARTED) {
      text.tStart = t;
      text.frameNStart = frameN;
      text.setAutoDraw(true);
    }
    if (t >= 2.0 && text.status === psychoJS.Status.STARTED) {
      text.setAutoDraw(false);
    }
    if (!psychoJS.window.mousePressed && t >= 2.0) {
      return Scheduler.Event.NEXT;
    }
    return Scheduler.Event.FLIP_REPEAT;
  };
}

function instRoutineEnd(snapshot) {
  return async function () {
    for (const thisComponent of instComponents)
      if (typeof thisComponent.setAutoDraw === 'function')
        thisComponent.setAutoDraw(false);
    return Scheduler.Event.NEXT;
  };
}

// Routine "rest" functions:
var restComponents;
function restRoutineBegin(snapshot) {
  return async function () {
    t = 0;
    restClock.reset();
    frameN = -1;
    restComponents = [polygon];
    for (const thisComponent of restComponents)
      if ('status' in thisComponent)
        thisComponent.status = psychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  };
}

function restRoutineEachFrame(snapshot) {
  return async function () {
    t = restClock.getTime();
    frameN++;
    if (t >= 0.0 && polygon.status === psychoJS.Status.NOT_STARTED) {
      polygon.tStart = t;
      polygon.frameNStart = frameN;
      polygon.setAutoDraw(true);
    }
    if (t >= 120.0 && polygon.status === psychoJS.Status.STARTED) {
      polygon.setAutoDraw(false);
    }
    if (t >= 120.0) {
      return Scheduler.Event.NEXT;
    }
    return Scheduler.Event.FLIP_REPEAT;
  };
}

function restRoutineEnd(snapshot) {
  return async function () {
    for (const thisComponent of restComponents)
      if (typeof thisComponent.setAutoDraw === 'function')
        thisComponent.setAutoDraw(false);
    return Scheduler.Event.NEXT;
  };
}

// Routine "inst2" functions:
var inst2Components;
function inst2RoutineBegin(snapshot) {
  return async function () {
    t = 0;
    inst2Clock.reset();
    frameN = -1;
    inst2Components = [text_3, key_resp];
    for (const thisComponent of inst2Components)
      if ('status' in thisComponent)
        thisComponent.status = psychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  };
}

function inst2RoutineEachFrame(snapshot) {
  return async function () {
    t = inst2Clock.getTime();
    frameN++;
    if (t >= 0.0 && text_3.status === psychoJS.Status.NOT_STARTED) {
      text_3.tStart = t;
      text_3.frameNStart = frameN;
      text_3.setAutoDraw(true);
    }
    if (t >= 0.0 && key_resp.status === psychoJS.Status.NOT_STARTED) {
      key_resp.tStart = t;
      key_resp.frameNStart = frameN;
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });
      psychoJS.window.callOnFlip(function() { key_resp.start(); });
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    if (key_resp.status === psychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      if (theseKeys.length > 0) {
        return Scheduler.Event.NEXT;
      }
    }
    return Scheduler.Event.FLIP_REPEAT;
  };
}

function inst2RoutineEnd(snapshot) {
  return async function () {
    for (const thisComponent of inst2Components)
      if (typeof thisComponent.setAutoDraw === 'function')
        thisComponent.setAutoDraw(false);
    key_resp.stop();
    return Scheduler.Event.NEXT;
  };
}


// Routine "start" functions:
var startComponents;
function startRoutineBegin(snapshot) {
  return async function () {
    t = 0;
    startClock.reset();
    frameN = -1;
    startComponents = [text3, text2, text1, startmsg];
    for (const thisComponent of startComponents)
      if ('status' in thisComponent)
        thisComponent.status = psychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  };
}

function startRoutineEachFrame(snapshot) {
  return async function () {
    t = startClock.getTime();
    frameN++;

    if (t >= 0.0 && text3.status === psychoJS.Status.NOT_STARTED) {
      text3.setAutoDraw(true);
    }
    if (t >= 1.0 && text2.status === psychoJS.Status.NOT_STARTED) {
      text2.setAutoDraw(true);
      text3.setAutoDraw(false);
    }
    if (t >= 2.0 && text1.status === psychoJS.Status.NOT_STARTED) {
      text1.setAutoDraw(true);
      text2.setAutoDraw(false);
    }
    if (t >= 3.0 && startmsg.status === psychoJS.Status.NOT_STARTED) {
      startmsg.setAutoDraw(true);
      text1.setAutoDraw(false);
    }
    if (t >= 4.0) {
      return Scheduler.Event.NEXT;
    }
    return Scheduler.Event.FLIP_REPEAT;
  };
}

function startRoutineEnd(snapshot) {
  return async function () {
    for (const thisComponent of startComponents)
      if (typeof thisComponent.setAutoDraw === 'function')
        thisComponent.setAutoDraw(false);
    return Scheduler.Event.NEXT;
  };
}

// Routine "nongame_task" (2-back trials):
var nongame_taskComponents;
function nongame_taskRoutineBegin(snapshot) {
  return async function () {
    t = 0;
    nongame_taskClock.reset();
    frameN = -1;
    nongame_taskComponents = [matrix_ur_3, matrix_ul_3, matrix_dr_3, matrix_dl_3, circle_2, key_3];
    for (const thisComponent of nongame_taskComponents)
      if ('status' in thisComponent)
        thisComponent.status = psychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  };
}

function nongame_taskRoutineEachFrame(snapshot) {
  return async function () {
    t = nongame_taskClock.getTime();
    frameN++;

    // draw stimuli
    for (const stim of [matrix_ur_3, matrix_ul_3, matrix_dr_3, matrix_dl_3, circle_2]) {
      if (t >= 0.0 && stim.status === psychoJS.Status.NOT_STARTED) {
        stim.setAutoDraw(true);
      }
    }

    if (t >= 0.0 && key_3.status === psychoJS.Status.NOT_STARTED) {
      key_3.clock.reset();
      key_3.start();
      key_3.clearEvents();
      key_3.status = psychoJS.Status.STARTED;
    }

    if (key_3.status === psychoJS.Status.STARTED) {
      let theseKeys = key_3.getKeys({keyList: ['1','q'], waitRelease: false});
      if (theseKeys.length > 0) {
        psychoJS.experiment.addData('response', theseKeys[0].name);
        return Scheduler.Event.NEXT;
      }
    }
    return Scheduler.Event.FLIP_REPEAT;
  };
}

function nongame_taskRoutineEnd(snapshot) {
  return async function () {
    for (const thisComponent of nongame_taskComponents)
      if (typeof thisComponent.setAutoDraw === 'function')
        thisComponent.setAutoDraw(false);
    key_3.stop();
    return Scheduler.Event.NEXT;
  };
}

// Routine "thanks":
var thanksComponents;
function thanksRoutineBegin(snapshot) {
  return async function () {
    t = 0;
    thanksClock.reset();
    frameN = -1;
    thanksComponents = [text_2];
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent)
        thisComponent.status = psychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  };
}

function thanksRoutineEachFrame(snapshot) {
  return async function () {
    t = thanksClock.getTime();
    frameN++;
    if (t >= 0.0 && text_2.status === psychoJS.Status.NOT_STARTED) {
      text_2.setAutoDraw(true);
    }
    if (t >= 5.0) {
      return Scheduler.Event.NEXT;
    }
    return Scheduler.Event.FLIP_REPEAT;
  };
}

function thanksRoutineEnd(snapshot) {
  return async function () {
    for (const thisComponent of thanksComponents)
      if (typeof thisComponent.setAutoDraw === 'function')
        thisComponent.setAutoDraw(false);
    return Scheduler.Event.NEXT;
  };
}

// quit function:
function quitPsychoJS(message, isCompleted) {
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  return Scheduler.Event.QUIT;
}



