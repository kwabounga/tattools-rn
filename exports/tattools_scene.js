import { Color3 } from "@babylonjs/core/Maths/math.color";
import { HighlightLayer } from "@babylonjs/core/Layers/highlightLayer";
import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader.js";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { Texture } from '@babylonjs/core/Materials/Textures/texture';
import { StackPanel, Control, TextBlock, Line, ImageBasedSlider,ColorPicker,Image,AdvancedDynamicTexture } from '@babylonjs/gui';
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { Space } from "@babylonjs/core/Maths/math.axis";

const fs = require('fs');
const helpers = require('.helpers.js');
const mod_def_path = './html/mod_def/';

function TattoolsEnv() {
  // public
  this.title = 'monProjet';
  this.scene = null;
  this.engine = null;
  this.camera = null;
  this.project = null;
  this.models = null;
  this.modelsDef = {};
  this.UiPanels = {};
  this.UiLinks = {};
  this.skeletons = {};
  this.materials = {};
  // this.skeletonsViewer = {};
  this.hl = null;
  this.hl2 = null;
  this.color = null;
  this.lightcolor = null;
  this.colorPicker = null;
  this.dimensions = {};
  // private
  this._advancedTexture = null;
}

// methodes publiques

TattoolsEnv.prototype.initEnv = function(scene, engine, camera, dimensions) {
  this.scene = scene;
  this.engine = engine;
  this.camera = camera;
  this.dimensions = dimensions;
  this.models = fs.readdirSync(mod_def_path);
  let t = this;
  this.models.forEach((model) => {
    t.modelsDef[model] = t._getModelInfos(mod_def_path + '/' + model)
  })
  this.color = new Color3(0.7, 0.5, 0.3);
  this.lightcolor = new Color3(0.5, 0.3, 0.2);
  /// 176, 129, 77
  // pickInfo.pickedMesh.material = this.material;

  // creation du surligneur noir
  this.hl2 = new HighlightLayer("hl2", this.scene);
  this.hl2.outerGlow = false;
  this.hl2.innerGlow = true;

  // creation de l'highlighter
  this.hl = new HighlightLayer("hl1", this.scene);
  this.hl.outerGlow = true;
  this.hl.innerGlow = false;

  // creation de l'ui FG
  if (t._advancedTexture === null) {
    t._advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI");
  }

  return this
}

TattoolsEnv.prototype.removeObjFromScene = function(mesh) {
  let id = mesh.id;
  // this.modelsDef[id] = null;
  this.UiPanels[id] = null;
  this.UiLinks[id] = null;
  this.skeletons[id] = null;
  this.materials[id] = null;
  mesh.dispose();
}
TattoolsEnv.prototype.addObjInScene = function(modelName) {
  let t = this;
  let modDef = t._getModDefByName(modelName);
  helpers.log(modDef);
  if (modDef === null) {
    return
  } else {
    helpers.log("", modDef.path, modDef.file, this.scene);
  }
  let m;
  SceneLoader.ImportMesh([modDef.id], modDef.path, modDef.file, this.scene, function(newMeshes, particleSystems, skeletons) {

    var skeleton = skeletons[0];
    // TODO: generer un identifiant unique pour importer plusieurs fois la meme mesh ds la scenes
    // m = helpers.getMesh(modDef.id, t.scene);
    m = newMeshes[0];
    m.id = m.id + '_' + helpers.giveUniqueID();
    helpers.log('HERE: ', m);
    // m.skeleton.enableBlending(0.01);
    helpers.showOutline(m);

    var material = new StandardMaterial((m.id + '_mat'), t.scene);
    material.diffuseColor = t.color;
    // material.specularColor = t.lightcolor;
    // material.diffuseTexture = new Texture("./Skull.jpg", t.scene);
    material.bumpTexture = new Texture(modDef.texture, t.scene);
    // TODO: Ajouter et verifier: diffuse / bump / spéculaire
    // material.bumpTexture.hasAlpha = false;
    material.backFaceCulling = m.material.backFaceCulling;
    material.invertNormalMapX = true;
    material.invertNormalMapY = true;

    // material.diffuseTexture.hasAlpha = false;
    // material.backFaceCulling = false;
    m.material = material;
    t.materials[m.id] = material;
    // displaying dark highlight
    t.hl2.addMesh(m, Color3.Black());
    // displaying skeleton
    t.skeletons[m.id] = skeleton;


    // Obj UI (bones)

    var UiPanel = new StackPanel();
    UiPanel.width = "350px";
    UiPanel.fontSize = "14px";
    UiPanel.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT;
    UiPanel.verticalAlignment = Control.VERTICAL_ALIGNMENT_CENTER;
    UiPanel.paddingRight = '100px';
    t._advancedTexture.addControl(UiPanel);
    UiPanel.isVisible = false;
    t.UiPanels[m.id] = UiPanel;
    // UIsModels[m.name] = UiPanel;



    // // titre Element
    var label = new TextBlock();
    label.text = m.name;
    label.height = "50px";
    label.color = "white";
    UiPanel.addControl(label);

    // visual link
    var line = new Line();
    line.alpha = 0.5;
    line.lineWidth = 5;
    line.dash = [5, 10];
    t._advancedTexture.addControl(line);
    line.linkWithMesh(m);
    line.connectedControl = label;
    line.isVisible = false;
    t.UiLinks[m.id] = line;


    //skeleton.bones[1].rotate(BABYLON.Axis.Z, .01);
    skeleton.bones.forEach((bone) => {
      // var bone = skeleton.bones[i];
      // skeleton.bones[i].rotate(BABYLON.Axis.Z, .01);
      helpers.log(bone.name);
      helpers.log(modDef);
      let initialBoneParam = helpers.getInitialBoneParam(bone.name, modDef)
      if (initialBoneParam) {
        helpers.log('Bone setted', bone.name, bone.id, initialBoneParam);

        var rotation = new Vector3(bone.rotation.x, bone.rotation.y, bone.rotation.z);

        var header = new TextBlock();
        header.text = bone.name // + ":" + bone.rotation.x;
        header.height = "40px";
        header.color = "green";
        header.textHorizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
        header.paddingTop = "10px";
        UiPanel.addControl(header);

        // ici une boucle pour rotation x, y , z X slider
        var boneAxes = ['x', 'y', 'z'];
        boneAxes.forEach((axe) => {
          if (initialBoneParam.rotation[axe] != null) {
            helpers.log('direction setted!');

            var slider = new ImageBasedSlider();
            slider.minimum = initialBoneParam.minRotation[axe];
            slider.maximum = initialBoneParam.maxRotation[axe];
            slider.isThumbClamped = true; // ?
            // slider.displayThumb = displayThumb; // true

            // voir la taille en fonction de l'ecran ?
            slider.height = '50px';
            slider.width = '220px';

            slider.backgroundImage = new Image("back", "./img/ui/slider_bg.png");
            slider.valueBarImage = new Image("value", "./img/ui/slider_fg.png");
            slider.thumbImage = new Image("thumb", "./img/ui/slider_bt.png");

            slider.value = bone.rotation[axe];

            UiPanel.addControl(slider);
            slider.onValueChangedObservable.add((val) => {
              rotation[axe] = val;
              // bone.setAxisAngle(BABYLON.Axis[axe.toUpperCase()], val);
              bone.setRotation(rotation, Space.LOCAL, m);
              // bone.rotation.z = v;
              header.text = bone.name + ':' + val.toFixed(2);
            })
            bone['_slider' + axe] = slider;
          } else {
            helpers.log('direction not display');
          }
        });
      } else {
        helpers.log('Bone not display', bone.name);
      }
    });

    t.engine.hideLoadingUI();
  }, function(evt) {});

  return m
}

TattoolsEnv.prototype.showColorPicker = function() {
  const t = this;

  if (t.colorPicker === null) {
    t.colorPicker = new StackPanel();
    t.colorPicker.width = "350px";
    t.colorPicker.fontSize = "14px";
    t.colorPicker.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
    t.colorPicker.verticalAlignment = Control.VERTICAL_ALIGNMENT_CENTER;
    t.colorPicker.paddingLeft = '100px';
    t._advancedTexture.addControl(t.colorPicker);

    var picker = new ColorPicker();
    picker.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
    picker.value = t.color;
    picker.height = "200px";
    picker.width = "200px";
    picker.onValueChangedObservable.add(function(value) { // value is a color3
      t.color = value;
      for (var mat in t.materials) {
        t.materials[mat].diffuseColor = t.color;
      }
      let clrBt = document.getElementById('btCol').firstChild
      clrBt.style.color = value.toHexString();
    });
    t.colorPicker.addControl(picker);
  } else {
    if (t.colorPicker.isVisible) {
      // le cacher
      t.colorPicker.isVisible = false;
    } else {
      // juste le montrer
      t.colorPicker.isVisible = true;
    }
  }


}

// methodes privées
TattoolsEnv.prototype._getModelInfos = function(filepath) {
  let mod_def_file = fs.readFileSync(filepath, {
    encoding: 'utf-8'
  });
  return JSON.parse(mod_def_file);
}

TattoolsEnv.prototype._getModDefByName = function(name) {
  var md = null;
  for (let modDef in this.modelsDef) {
    const mdt = this.modelsDef[modDef];
    if (mdt.id.trim() === name.trim()) {
      helpers.log('OK');
      md = mdt
    }
  }
  return md
}


// export obj
module.exports = TattoolsEnv;
