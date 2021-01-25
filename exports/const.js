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
    },
    ui: {
      sizes:{
        BUTTON_SIZE: 60,
        BUTTON_MARGIN: 3,
        ICON_SIZE: 40,
        THUMBNAILS_SIZE: 80,
        THUMBNAILS_MARGIN: 2,
        INPUT_TEXT_HEIGHT: 40,
        INPUT_TEXT_MARGIN: 3,
        SMALL_BORDER: 2,
        BIG_BORDER: 3,
        SMALL_MARGIN: 2,
        BIG_MARGIN: 5,
      },
      colors:{
        COLOR_APP:"#3C3C3C",
        COLOR_MENU:"#2E2E2E",
        COLOR_MENU_BACKGROUND:"#323232",
        COLOR_PRIMARY:"#E3E3E3",
        COLOR_SECONDARY:"#696969",
        COLOR_SECONDARY_ALT:"#5D5A56",
        COLOR_TEXT:"#FFF",
        COLOR_HIGHLIGHT:"#FA8900",
        COLOR_INPUT:"#464040",
      }
    },
    locales:{
      fr_FR:{
        placeHolders:{
          fileTitle:"Sans titre",
        },
        topMenu:{
          rightTitle:"Informations sur le Fichier",
          leftTitle:"Modèles",
        }
      },
      en_US:{
        placeHolders:{
          fileTitle:"Untitled",
        },
        topMenu:{
          rightTitle:"File Infos",
          leftTitle:"Models",
        }
      },
    }
  }

