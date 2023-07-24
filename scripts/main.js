function downloadFile(cr, fn) {
  const link = document.createElement("a");
  let content = cr;
  const file = new Blob([content], { type: "text/plain" });
  link.href = URL.createObjectURL(file);
  link.download = fn;
  link.click();
  URL.revokeObjectURL(link.href);
}

function sampleFile() {
  downloadFile(
    JSON.stringify(
      fileTypesTemplates[document.getElementById("fileType").value]
    ),
    document.getElementById("fileType").value
  );
}

function filledFile() {
  let sd = document.getElementById("fileType").value;
  if (sd != "full") {
    downloadFile(
      JSON.stringify(setDownloadValues()),
      document.getElementById("fileType").value
    );
  } else {
    let all = setDownloadValues();
    downloadFile(JSON.stringify(all[0]), "terrain_texture.json");
    downloadFile(JSON.stringify(all[1]), "blocks.json");
    downloadFile(JSON.stringify(all[2]), "flipbook_textures.json");
  }
}

function setDownloadValues() {
  let sd = document.getElementById("fileType").value;
  if (sd == "terrain_texture.json") {
    let dataName = document.getElementById("ftexturedef").value;
    let dataPath = document.getElementById("ftexturepath").value;
    var downloadFile1 = fileTypesTemplates["terrain_texture.json"];
    let receive = '{"' + dataName + '": {"textures":"' + dataPath + '"}}';
    downloadFile1.texture_data = JSON.parse(receive);
    return downloadFile1;
  } else if (sd == "flipbook_textures.json") {
    let dataPath = document.getElementById("ftexturepath").value;
    let dataAtlas = document.getElementById("fatlastexture").value;
    let dataFrameOrder = document.getElementById("fanimtextureorder").value;
    let dataTicks = document.getElementById("fanimtexturetick").value;
    let dataBlend = document.getElementById("fanimtextureblend").checked;
    var downloadFile2 = fileTypesTemplates["flipbook_textures.json"];
    downloadFile2[0].flipbook_texture = dataPath;
    downloadFile2[0].atlas_tile = dataAtlas;
    downloadFile2[0].blend_frames = dataBlend;
    downloadFile2[0].frames = stringToNumArray(dataFrameOrder);
    downloadFile2[0].ticks_per_frame = parseInt(dataTicks);
    return downloadFile2;
  } else if (sd == "blocks.json") {
    let dataName = document.getElementById("ftexturedef").value;
    let dataTUp = document.getElementById("fblockfaceUP").value;
    let dataTDOWN = document.getElementById("fblockfaceDOWN").value;
    let dataTNORTH = document.getElementById("fblockfaceNORTH").value;
    let dataTEAST = document.getElementById("fblockfaceEAST").value;
    let dataTSOUTH = document.getElementById("fblockfaceSOUTH").value;
    let dataTWEST = document.getElementById("fblockfaceWEST").value;
    var downloadFile3 = fileTypesTemplates["blocks.json"];

    let receive3 =
      '{"' +
      dataName +
      '":{"textures": {"up":"' +
      dataTUp +
      '","down":"' +
      dataTDOWN +
      '","north":"' +
      dataTNORTH +
      '","east":"' +
      dataTEAST +
      '","south":"' +
      dataTSOUTH +
      '","west":"' +
      dataTWEST +
      '"}}}';
    downloadFile3.DONOTREADTHIS = JSON.parse(receive3);

    return downloadFile3.DONOTREADTHIS;
  } else if (sd == "full") {
    let dataName = document.getElementById("ftexturedef").value;
    let dataPath = document.getElementById("ftexturepath").value;
    var downloadFile1 = fileTypesTemplates["terrain_texture.json"];
    let receive = '{"' + dataName + '": {"textures":"' + dataPath + '"}}';
    downloadFile1.texture_data = JSON.parse(receive);

    let dataAtlas = document.getElementById("fatlastexture").value;
    let dataFrameOrder = document.getElementById("fanimtextureorder").value;
    let dataTicks = document.getElementById("fanimtexturetick").value;
    let dataBlend = document.getElementById("fanimtextureblend").checked;
    var downloadFile2 = fileTypesTemplates["flipbook_textures.json"];
    downloadFile2[0].flipbook_texture = dataPath;
    downloadFile2[0].atlas_tile = dataAtlas;
    downloadFile2[0].blend_frames = dataBlend;
    downloadFile2[0].frames = stringToNumArray(dataFrameOrder);
    downloadFile2[0].ticks_per_frame = parseInt(dataTicks);

    let dataTUp = document.getElementById("fblockfaceUP").value;
    let dataTDOWN = document.getElementById("fblockfaceDOWN").value;
    let dataTNORTH = document.getElementById("fblockfaceNORTH").value;
    let dataTEAST = document.getElementById("fblockfaceEAST").value;
    let dataTSOUTH = document.getElementById("fblockfaceSOUTH").value;
    let dataTWEST = document.getElementById("fblockfaceWEST").value;
    var downloadFile3 = fileTypesTemplates["blocks.json"];

    let receive3 =
      '{"' +
      dataName +
      '":{"textures": {"up":"' +
      dataTUp +
      '","down":"' +
      dataTDOWN +
      '","north":"' +
      dataTNORTH +
      '","east":"' +
      dataTEAST +
      '","south":"' +
      dataTSOUTH +
      '","west":"' +
      dataTWEST +
      '"}}}';
    downloadFile3.DONOTREADTHIS = JSON.parse(receive3);

    let output = [downloadFile1,downloadFile3.DONOTREADTHIS, downloadFile2];
    return output;
  }
}

function stringToNumArray(array) {
  let z = [];
  for (let i = 0; i < array.split(",").length; i++) {
    z[i] = parseInt(array.split(",")[i]);
  }
  return z;
}
