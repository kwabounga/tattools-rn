exports.cst = {
    actions: {
      MOVE: 'w',
      ROTATE: 'e',
      SCALE: 'r',
      OBJECT: 'y',
      UPDATE: 'u',
      TOGGLEVISION: 't',
      SHOWVISION: 's',
      COLORS: 'c',
      SNAPPING: 'm',
      LOCALGLOBAL: 'l',
      TOGGLERATIO: 'o',
      DELETE: 'd'
    },
    modes: {
      OBJECT: 'object',
      ROTATE: 'rotate',
      MOVE: 'move',
      SCALE: 'scale',
      NONE: 'none',
      VISIONON: 'vision-on',
      VISIONOFF: 'vision-off'
    },
    events: {
      WILLREZISE: 'will-resize',
      RESIZE: 'resize',
      BLUR: 'blur',
      FOCUS: 'focus',
      TOGGLEVISION: 'toggle-vision'
    },
    domObjIDs: {
      CANVAS: 'renderCanvas',
      MENU: 'menu',
      BUTTONS: 'btns',
      LOADINGSCREEN: 'loadingScreen',
      CONTROLS: 'ctrls'
    },
    colors: {
      BACKGROUND: {
        r: 0.25,
        v: 0.25,
        b: 0.25
      }
    },
    camera: {
      LWRRADLIMIT: 2,
      UPPRADLIMIT: 10,
      WHELLDELPER: 0.01
    }
  }

