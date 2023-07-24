function createFormItem(item) {
    if (item == "block_id") {
      let nE1T = document.createElement("label");
      nE1T.innerHTML = "Block ID:";
      nE1T.setAttribute("name", "fblockid");
      nE1T.setAttribute("for", "fblockid");
      cOF.appendChild(nE1T);
      let nEP1 = document.createElement("br");
      nEP1.setAttribute("name", "fblockid");
      cOF.appendChild(nEP1);
      let nE1I = document.createElement("input");
      nE1I.id = "fblockid";
      nE1I.type = "text";
      nE1I.name = "fblockid";
      nE1I.value = "example:example_block";
      cOF.appendChild(nE1I);
      let nEP2 = document.createElement("br");
      nEP2.setAttribute("name", "fblockid");
      cOF.appendChild(nEP2);
    } else if (item == "texture_path") {
      let nE1T = document.createElement("label");
      nE1T.innerHTML = "Block's texture file path:";
      nE1T.setAttribute("name", "ftexturepath");
      nE1T.setAttribute("for", "ftexturepath");
      cOF.appendChild(nE1T);
      let nEP1 = document.createElement("br");
      nEP1.setAttribute("name", "ftexturepath");
      cOF.appendChild(nEP1);
      let nE1I = document.createElement("input");
      nE1I.id = "ftexturepath";
      nE1I.type = "text";
      nE1I.name = "ftexturepath";
      nE1I.value = "textures/blocks/example_block.png";
      cOF.appendChild(nE1I);
      let nEP2 = document.createElement("br");
      nEP2.setAttribute("name", "ftexturepath");
      cOF.appendChild(nEP2);
    } else if (item == "texture_definition") {
      let nE1T = document.createElement("label");
      nE1T.innerHTML = "Texture's definition:";
      nE1T.setAttribute("name", "ftexturedef");
      nE1T.setAttribute("for", "ftexturedef");
      cOF.appendChild(nE1T);
      let nEP1 = document.createElement("br");
      nEP1.setAttribute("name", "ftexturedef");
      cOF.appendChild(nEP1);
      let nE1I = document.createElement("input");
      nE1I.id = "ftexturedef";
      nE1I.type = "text";
      nE1I.name = "ftexturedef";
      nE1I.value = "example_block_face";
      cOF.appendChild(nE1I);
      let nEP2 = document.createElement("br");
      nEP2.setAttribute("name", "ftexturedef");
      cOF.appendChild(nEP2);
    } else if (item == "anim_textures_frames_order") {
      let nE1T = document.createElement("label");
      nE1T.innerHTML = "Animated texture's frames order:";
      nE1T.setAttribute("name", "fanimtextureorder");
      nE1T.setAttribute("for", "fanimtextureorder");
      nE1T.name = "fanimtextureorder";
      cOF.appendChild(nE1T);
      let nEP1 = document.createElement("br");
      nEP1.setAttribute("name", "fanimtextureorder");
      cOF.appendChild(nEP1);
      let nE1I = document.createElement("input");
      nE1I.id = "fanimtextureorder";
      nE1I.type = "text";
      nE1I.name = "fanimtextureorder";
      nE1I.value = "0, 1, 2, 3";
      cOF.appendChild(nE1I);
      let nEP2 = document.createElement("br");
      nEP2.setAttribute("name", "fanimtextureorder");
      cOF.appendChild(nEP2);
    } else if (item == "anim_textures_ticks") {
      let nE1T = document.createElement("label");
      nE1T.innerHTML = "Animated texture's ticks per frame:";
      nE1T.setAttribute("name", "fanimtexturetick");
      nE1T.setAttribute("for", "fanimtexturetick");
      cOF.appendChild(nE1T);
      let nEP1 = document.createElement("br");
      nEP1.setAttribute("name", "fanimtexturetick");
      cOF.appendChild(nEP1);
      let nE1I = document.createElement("input");
      nE1I.id = "fanimtexturetick";
      nE1I.type = "text";
      nE1I.name = "fanimtexturetick";
      nE1I.value = "10";
      cOF.appendChild(nE1I);
      let nEP2 = document.createElement("br");
      nEP2.setAttribute("name", "fanimtexturetick");
      cOF.appendChild(nEP2);
    } else if (item == "anim_textures_blend") {
      let nE1T = document.createElement("label");
      nE1T.innerHTML = "Animated texture's frame blending:";
      nE1T.setAttribute("name", "fanimtextureblend");
      nE1T.setAttribute("for", "fanimtextureblend");
      cOF.appendChild(nE1T);
      let nE1I = document.createElement("input");
      nE1I.id = "fanimtextureblend";
      nE1I.type = "checkbox";
      nE1I.name = "fanimtextureblend";
      cOF.appendChild(nE1I);
      let nEP2 = document.createElement("br");
      nEP2.setAttribute("name", "fanimtextureblend");
      cOF.appendChild(nEP2);
    } else if (item == "texture_atlas") {
      let nE1T = document.createElement("label");
      nE1T.innerHTML = "Atlas texture:";
      nE1T.setAttribute("name", "fatlastexture");
      nE1T.setAttribute("for", "fatlastexture");
      cOF.appendChild(nE1T);
      let nEP1 = document.createElement("br");
      nEP1.setAttribute("name", "fatlastexture");
      cOF.appendChild(nEP1);
      let nE1I = document.createElement("input");
      nE1I.id = "fatlastexture";
      nE1I.type = "text";
      nE1I.name = "fatlastexture";
      nE1I.value = "example_block_face";
      cOF.appendChild(nE1I);
      let nEP2 = document.createElement("br");
      nEP2.setAttribute("name", "fatlastexture");
      cOF.appendChild(nEP2);
    } else if (item == "texture_faces") {
      let nE1T = document.createElement("label");
      nE1T.innerHTML = "Block textures for faces:";
      nE1T.setAttribute("name", "fblockface");
      nE1T.setAttribute("for", "fblockface");
      cOF.appendChild(nE1T);
      let nEP1 = document.createElement("br");
      nEP1.setAttribute("name", "fblockface");
      cOF.appendChild(nEP1);
      let nE1I = document.createElement("input");
      nE1I.id = "fblockfaceUP";
      nE1I.type = "text";
      nE1I.name = "fblockface";
      nE1I.value = "example_block_faceUP";
      cOF.appendChild(nE1I);
      let nEP2 = document.createElement("br");
      nEP2.setAttribute("name", "fblockface");
      cOF.appendChild(nEP2);
      let nE2I = document.createElement("input");
      nE2I.id = "fblockfaceDOWN";
      nE2I.type = "text";
      nE2I.name = "fblockface";
      nE2I.value = "example_block_faceDOWN";
      cOF.appendChild(nE2I);
      let nEP3 = document.createElement("br");
      nEP3.setAttribute("name", "fblockface");
      cOF.appendChild(nEP3);
      let nE3I = document.createElement("input");
      nE3I.id = "fblockfaceNORTH";
      nE3I.type = "text";
      nE3I.name = "fblockface";
      nE3I.value = "example_block_faceNORTH";
      cOF.appendChild(nE3I);
      let nEP4 = document.createElement("br");
      nEP4.setAttribute("name", "fblockface");
      cOF.appendChild(nEP4);
      let nE4I = document.createElement("input");
      nE4I.id = "fblockfaceEAST";
      nE4I.type = "text";
      nE4I.name = "fblockface";
      nE4I.value = "example_block_faceEAST";
      cOF.appendChild(nE4I);
      let nEP5 = document.createElement("br");
      nEP5.setAttribute("name", "fblockface");
      cOF.appendChild(nEP5);
      let nE5I = document.createElement("input");
      nE5I.id = "fblockfaceSOUTH";
      nE5I.type = "text";
      nE5I.name = "fblockface";
      nE5I.value = "example_block_faceSOUTH";
      cOF.appendChild(nE5I);
      let nEP6 = document.createElement("br");
      nEP6.setAttribute("name", "fblockface");
      cOF.appendChild(nEP6);
      let nE6I = document.createElement("input");
      nE6I.id = "fblockfaceWEST";
      nE6I.type = "text";
      nE6I.name = "fblockface";
      nE6I.value = "example_block_faceWEST";
      cOF.appendChild(nE6I);
      let nEP7 = document.createElement("br");
      nEP7.setAttribute("name", "fblockface");
      cOF.appendChild(nEP7);
    }
  }
  
  function changeTemplate() {
    let rT = document.getElementById("fileType");
    let cOF = document.getElementById("cOF");
    if (rT.selectedIndex == 0) {
      //terrain_texture.json
      // remove old nodes
      cOF.innerHTML = "";
      // add needed nodes
      createFormItem("texture_definition");
      createFormItem("texture_path");
    } else if (rT.selectedIndex == 1) {
      cOF.innerHTML = "";
  
      createFormItem("texture_definition");
      createFormItem("texture_faces");
    } else if (rT.selectedIndex == 2) {
      cOF.innerHTML = "";
  
      createFormItem("texture_path");
      createFormItem("texture_atlas");
      createFormItem("anim_textures_frames_order");
      createFormItem("anim_textures_ticks");
      createFormItem("anim_textures_blend");
    } else if (rT.selectedIndex == 3) {
      cOF.innerHTML = "";
  
      createFormItem("texture_definition");
      createFormItem("texture_path");
  
      createFormItem("texture_atlas");
      createFormItem("anim_textures_frames_order");
      createFormItem("anim_textures_ticks");
      createFormItem("anim_textures_blend");
    }
    let x = document.getElementById("onetime");
    if (x) {
      x.remove();
    } else {
      return;
    }
  }
  
  function setToDocumentString(obj) {
    let newObj = JSON.stringify(obj);
    return newObj;
  }
  