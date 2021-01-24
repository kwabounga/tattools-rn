// Give info from mesh for prog
exports.debug = function(mesh){
  // console.log(mesh.name);
  // console.log(mesh.position);
  // console.log(mesh.rotation);
  // console.log(mesh.scaling);
}


exports.log = function(...rest){
  console.group("");
  rest.forEach((msg)=>{
    console.log(msg);
  })
  console.groupEnd();
}
// return a babylon mesh from his name
exports.getMesh = function(meshName,scene){
  let m = null;
  scene.meshes.forEach((mesh) =>{
    if(mesh.name === meshName){
      m = mesh;
    }
  })
return m
}
// display an outline on a mesh
exports.showOutline = function(mesh, show = true) {
  mesh.renderOutline = true;
  mesh.outlineWidth = 0.007;
  mesh.outlineColor = BABYLON.Color3.Black();
}

// return the screen dementions
exports.winSize = function() {
  /*
  Screen { availWidth: 1536, availHeight: 824, width: 1536, height: 864, colorDepth: 24, pixelDepth: 24, top: 0, left: 0, availTop: 0, availLeft: 0 }
  */
  let winWidth = window.screen.width;
  let winHeight = window.screen.height;
  return {
    width: winWidth,
    height: winHeight
  }
}

// return the correct bone from his name
exports.getInitialBoneParam= function(boneName, modDef){
  let bInfos= null;
  modDef.bones.forEach((bone)=>{
    console.log('getInitialBoneParam?',boneName, bone.name);
    if(boneName === bone.name){
      bInfos = bone
    }
  })
  return bInfos;
}

// format the title ( remove all no-Word caracteres)
exports.formatTitle= function(title) {
  const formatedTitle = title.replace(/\W+/gm, '')
  return formatedTitle;
}
exports.giveUniqueID = function(){
  let code = {}
  code.tools = {
    padZeros: function(num, nbZeros ){
      var numSize = num.toString().length
      var result = ''
      for (var i = 0; i < (nbZeros - numSize); i++) {
        result += '0'
      }
      result += num.toString()
      return result
    },
    date: function(){
      let dt = new Date(Date.now() + (new Date().getTimezoneOffset() * 60000 ))
      return dt
    }
  }
  let code_session = ''
  let encryption =  ''
                  + (Math.floor(code.tools.date().getMinutes() / 4))
                  + code.tools.padZeros(code.tools.date().getSeconds(),2)
                  + code.tools.padZeros(code.tools.date().getMinutes(),2)
                  + code.tools.padZeros(code.tools.date().getMilliseconds(),2)
                  + code.tools.date().getFullYear();


  code_session = Math.floor(encryption / 53);
  return code_session;
}

exports.cropText = function(txt, size = 9){
  let cTxt = ''
  if(txt.length > size){
    cTxt = txt.slice(0,5) + '...';
  } else {
    cTxt = txt
  }
  return cTxt;
}
