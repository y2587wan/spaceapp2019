

function processData(allText) {
    var record_num = 5;  // or however many elements there are in each row
    var allTextLines = allText.split(/\r\n|\n/);
    var entries = allTextLines[0].split(',');
    var lines = [];

    var headings = entries.splice(0,record_num);
    while (entries.length>0) {
        var tarr = [];
        for (var j=0; j<record_num; j++) {
            tarr.push(headings[j]+":"+entries.shift());
        }
        lines.push(tarr);
    }
    // alert(lines);
}

var InforObj = [];

// Initialize and add the map
function initMap() {
  var infos = [
'Number of bubbles                    4'+'<br>Sensitivity (b/mrem)           42.4667'+'<br>Calculated Exposure (mrem)    0.115406',
'Number of bubbles                     2'+'<br>Sensitivity (b/mrem)                 47'+'<br>Calculated Exposure (mrem)    0.0553191',
'Number of bubbles                     2'+'<br>Sensitivity (b/mrem)                 53'+'<br>Calculated Exposure (mrem)    0.0471698',
'Number of bubbles                    6'+'<br>Sensitivity (b/mrem)                52'+'<br>Calculated Exposure (mrem)    0.121624',
'Number of bubbles                     1'+'<br>Sensitivity (b/mrem)                 55'+'<br>Calculated Exposure (mrem)    0.0343415',
'Number of bubbles                     2'+'<br>Sensitivity (b/mrem)                 46'+'<br>Calculated Exposure (mrem)    0.0521739',
'Number of bubbles                    8'+'<br>Sensitivity (b/mrem)           51.8286'+'<br>Calculated Exposure (mrem)    0.165942',
'Number of bubbles                     1'+'<br>Sensitivity (b/mrem)                 48'+'<br>Calculated Exposure (mrem)    0.0277778',
'Number of bubbles                   4'+'<br>Sensitivity (b/mrem)               49'+'<br>Calculated Exposure (mrem)    0.10034',
'Number of bubbles                    2'+'<br>Sensitivity (b/mrem)           54.6667'+'<br>Calculated Exposure (mrem)    0.042543',
'Number of bubbles                     1'+'<br>Sensitivity (b/mrem)                 47'+'<br>Calculated Exposure (mrem)    0.0212766',
'Number of bubbles                    6'+'<br>Sensitivity (b/mrem)                54'+'<br>Calculated Exposure (mrem)    0.111111',
'Number of bubbles                     1'+'<br>Sensitivity (b/mrem)                 46'+'<br>Calculated Exposure (mrem)    0.0429607',
'Number of bubbles                     2'+'<br>Sensitivity (b/mrem)                 50'+'<br>Calculated Exposure (mrem)    0.0517241',
'Number of bubbles                    1'+'<br>Sensitivity (b/mrem)              52.6'+'<br>Calculated Exposure (mrem)    0.030479',
'Number of bubbles                     1'+'<br>Sensitivity (b/mrem)            48.3333'+'<br>Calculated Exposure (mrem)    0.0301113',
'Number of bubbles                     1'+'<br>Sensitivity (b/mrem)                 56'+'<br>Calculated Exposure (mrem)    0.0297762',
'Number of bubbles                    5'+'<br>Sensitivity (b/mrem)                54'+'<br>Calculated Exposure (mrem)    0.104944',
'Number of bubbles                    3'+'<br>Sensitivity (b/mrem)                61'+'<br>Calculated Exposure (mrem)    0.052459',
'Number of bubbles                   1'+'<br>Sensitivity (b/mrem)               56'+'<br>Calculated Exposure (mrem)    0.02381',
'Number of bubbles                     1'+'<br>Sensitivity (b/mrem)                 52'+'<br>Calculated Exposure (mrem)    0.0320513',
'Number of bubbles                     1'+'<br>Sensitivity (b/mrem)                 53'+'<br>Calculated Exposure (mrem)    0.0251572',
'Number of bubbles                     2'+'<br>Sensitivity (b/mrem)            49.1951'+'<br>Calculated Exposure (mrem)    0.0412709',
'Number of bubbles                    2'+'<br>Sensitivity (b/mrem)                45'+'<br>Calculated Exposure (mrem)    0.047619',
'Number of bubbles                    2'+'<br>Sensitivity (b/mrem)                58'+'<br>Calculated Exposure (mrem)    0.037931',
'Number of bubbles                     1'+'<br>Sensitivity (b/mrem)                 48'+'<br>Calculated Exposure (mrem)    0.0208333',
'Number of bubbles                     2'+'<br>Sensitivity (b/mrem)            52.8889'+'<br>Calculated Exposure (mrem)    0.0514836',
'Number of bubbles                     1'+'<br>Sensitivity (b/mrem)                 47'+'<br>Calculated Exposure (mrem)    0.0212766',
'Number of bubbles                     1'+'<br>Sensitivity (b/mrem)            54.7143'+'<br>Calculated Exposure (mrem)    0.0351202',
'Number of bubbles                     3'+'<br>Sensitivity (b/mrem)                 54'+'<br>Calculated Exposure (mrem)    0.0694444',
'Number of bubbles                   2'+'<br>Sensitivity (b/mrem)               55'+'<br>Calculated Exposure (mrem)    0.04075',
'Number of bubbles                    7'+'<br>Sensitivity (b/mrem)                49'+'<br>Calculated Exposure (mrem)    0.153061',
'Number of bubbles                     1'+'<br>Sensitivity (b/mrem)                 54'+'<br>Calculated Exposure (mrem)    0.0238095',
'Number of bubbles                  6'+'<br>Sensitivity (b/mrem)              52'+'<br>Calculated Exposure (mrem)    0.1202',
'Number of bubbles                 3'+'<br>Sensitivity (b/mrem)           48.4'+'<br>Calculated Exposure (mrem)    0.062',
'Number of bubbles                     2'+'<br>Sensitivity (b/mrem)                 52'+'<br>Calculated Exposure (mrem)    0.0521978',
'Number of bubbles                    1'+'<br>Sensitivity (b/mrem)                42'+'<br>Calculated Exposure (mrem)    0.031746',
'Number of bubbles                     2'+'<br>Sensitivity (b/mrem)                 52'+'<br>Calculated Exposure (mrem)    0.0439551',
'Number of bubbles                    1'+'<br>Sensitivity (b/mrem)                56'+'<br>Calculated Exposure (mrem)    0.022275',
'Number of bubbles                3'+'<br>Sensitivity (b/mrem)            68'+'<br>Calculated Exposure (mrem)    0.04',
'Number of bubbles                   2'+'<br>Sensitivity (b/mrem)               67'+'<br>Calculated Exposure (mrem)    0.03485',
'Number of bubbles                    1'+'<br>Sensitivity (b/mrem)                45'+'<br>Calculated Exposure (mrem)    0.021752',
'Number of bubbles                 1'+'<br>Sensitivity (b/mrem)             54'+'<br>Calculated Exposure (mrem)    0.036',
'Number of bubbles                    4'+'<br>Sensitivity (b/mrem)                49'+'<br>Calculated Exposure (mrem)    0.083375',
'Number of bubbles                2'+'<br>Sensitivity (b/mrem)            54'+'<br>Calculated Exposure (mrem)    0.04',
'Number of bubbles                     1'+'<br>Sensitivity (b/mrem)                 51'+'<br>Calculated Exposure (mrem)    0.0269607',
'Number of bubbles                3'+'<br>Sensitivity (b/mrem)            58'+'<br>Calculated Exposure (mrem)    0.05',
'Number of bubbles                1'+'<br>Sensitivity (b/mrem)            45'+'<br>Calculated Exposure (mrem)    0.02',
'Number of bubbles                     5'+'<br>Sensitivity (b/mrem)                 57'+'<br>Calculated Exposure (mrem)    0.0877193',
'Number of bubbles                   1'+'<br>Sensitivity (b/mrem)               55'+'<br>Calculated Exposure (mrem)    0.03434',
'Number of bubbles                  1'+'<br>Sensitivity (b/mrem)              59'+'<br>Calculated Exposure (mrem)    0.0306',
'Number of bubbles                    9'+'<br>Sensitivity (b/mrem)                44'+'<br>Calculated Exposure (mrem)    0.221591',
'Number of bubbles                     1'+'<br>Sensitivity (b/mrem)            58.6923'+'<br>Calculated Exposure (mrem)    0.0292661',
'Number of bubbles                     3'+'<br>Sensitivity (b/mrem)                 52'+'<br>Calculated Exposure (mrem)    0.0576923',
'Number of bubbles                     3'+'<br>Sensitivity (b/mrem)                 53'+'<br>Calculated Exposure (mrem)    0.0742645',
'Number of bubbles                 16'+'<br>Sensitivity (b/mrem)            51.5'+'<br>Calculated Exposure (mrem)    0.3115',
'Number of bubbles                    9'+'<br>Sensitivity (b/mrem)                48'+'<br>Calculated Exposure (mrem)    0.197917',
'Number of bubbles                     1'+'<br>Sensitivity (b/mrem)                 43'+'<br>Calculated Exposure (mrem)    0.0232558',
'Number of bubbles                     1'+'<br>Sensitivity (b/mrem)                 53'+'<br>Calculated Exposure (mrem)    0.0188679',
'Number of bubbles                   6'+'<br>Sensitivity (b/mrem)               49'+'<br>Calculated Exposure (mrem)    0.12638',
'Number of bubbles                  5'+'<br>Sensitivity (b/mrem)              56'+'<br>Calculated Exposure (mrem)    0.1034',
'Number of bubbles                     2'+'<br>Sensitivity (b/mrem)            58.8889'+'<br>Calculated Exposure (mrem)    0.0483737',
'Number of bubbles                     2'+'<br>Sensitivity (b/mrem)                 51'+'<br>Calculated Exposure (mrem)    0.0457517',
'Number of bubbles                     2'+'<br>Sensitivity (b/mrem)                 44'+'<br>Calculated Exposure (mrem)    0.0530307',
'Number of bubbles                     2'+'<br>Sensitivity (b/mrem)                 47'+'<br>Calculated Exposure (mrem)    0.0510638',
'Number of bubbles                    1'+'<br>Sensitivity (b/mrem)                52'+'<br>Calculated Exposure (mrem)    0.019231',
'Number of bubbles                3'+'<br>Sensitivity (b/mrem)            50'+'<br>Calculated Exposure (mrem)    0.06',
'Number of bubbles                   15'+'<br>Sensitivity (b/mrem)                44'+'<br>Calculated Exposure (mrem)    0.340909'];

var cities = [
'London',
'Florenceville-Bristol',
'Salmon Arm',
'Stonewall',
'Amqui',
'Strathroy',
'Montreal',
'LaSalle',
'Port Dover',
'Bridgewater',
'Camrose',
'Sainte-Marie',
'Port Hardy',
'Sechelt',
'Innisfail',
'East Angus',
'Whitecourt',
'Channel-Port Aux Basques',
'Deep River',
'Petawawa',
'Trenton',
'Saguenay',
'Ottawa',
'Coquitlam',
'Chilliwack',
'Tsawwassen',
'Calgary',
'Longueuil',
'Vancouver',
'Grand Falls-Windsor',
'Mississauga',
'Thornhill',
'St. Albert',
'Dryden',
'Toronto',
'Hanover',
'Headingley',
'Brampton',
'Winnipeg',
'Gloucester',
'Terrace Bay',
'Saint-Jerome',
'Grimsby',
'Kleinburg',
'Richmond Hill',
'Belleville',
'Dartmouth',
'Eganville',
'Limoges',
'Whitchurch-Stouffville',
'Newmarket',
'St-Felix-de-Valois',
'Stouffville',
'St-Jean-sur-Richelieu',
'Oakville',
'Saskatoon',
'Lachine',
'Sherbrooke',
'Sainte-Catherine-de-la-Jacques-Cartier',
'Markham',
'Nepean',
'Waterloo',
'Hamilton',
'Kelowna',
'Ottawa (Cumberland)',
'Guelph',
'Lindsay',
'Embrun']
        
var exp = [
0.11540637146666667,
0.05531914880000001,
0.047169811642857155,
0.12162365897297298,
0.034341515111111116,
0.052173912899999994,
0.16594229025714283,
0.027777777666666666,
0.10034016841666667,
0.04254299993333334,
0.021276596000000002,
0.111111111,
0.04296066230952383,
0.051724137931034496,
0.030478955000000002,
0.03011126922222222,
0.029776190666666664,
0.104943858,
0.05245896860000001,
0.023809999999999998,
0.03205128183333333,
0.025157233,
0.04127092226829269,
0.04761904742857143,
0.037931034599999996,
0.020833333,
0.051483631722222235,
0.021276596000000005,
0.03512020823809524,
0.06944444475,
0.04075000000000001,
0.1530612245,
0.023809499999999994,
0.1202,
0.062,
0.05219780242857143,
0.03174603,
0.04395505485714286,
0.022275000000000003,
0.04,
0.03485,
0.021752000000000004,
0.036,
0.083375,
0.04,
0.026960737500000005,
0.05,
0.02,
0.08771929849999999,
0.034339999999999996,
0.0306,
0.22159090412500002,
0.029266083846153847,
0.057692307600000006,
0.07426450313333335,
0.3115,
0.197917,
0.023255814,
0.018867925,
0.12638,
0.1034,
0.04837373733333333,
0.04575166666666667,
0.05303066666666667,
0.051063800000000006,
0.019231,
0.06,
0.340909]

var latlngs = [
[42.9537654, -81.2291529],
[46.4531007, -67.6068386],
[50.7005059, -119.2790529],
[50.1342275, -97.3287254],
[48.4656706, -67.4315171],
[42.9584644, -81.6232326],
[45.4972159, -73.6103642],
[45.4325141, -73.6292667],
[42.787339, -80.200195],
[44.3774134, -64.5193946],
[53.013131, -112.840576],
[46.450395, -71.030731],
[50.7244402, -127.4976081],
[49.4721147, -123.7631244],
[52.0200845, -113.9494301],
[45.4828558, -71.6594817],
[54.12738935, -115.651597513717],
[47.5945065, -59.1325297610744],
[46.101328, -77.487602],
[45.8866349, -77.2654786],
[45.6140166, -62.6331223],
[48.405959, -71.069183],
[45.421106, -75.690308],
[49.2842958, -122.793281],
[49.157677, -121.9514307],
[49.016667, -123.083333],
[51.02532675, -114.049868485806],
[45.5172382, -73.4467466],
[49.2608724, -123.1139529],
[48.944151, -55.652618],
[43.590338, -79.645729],
[43.8161477, -79.4245925],
[53.633239, -113.628845],
[49.785698, -92.835846],
[43.653963, -79.387207],
[44.150062, -81.024009],
[49.868087, -97.391052],
[43.6858146, -79.7599337],
[49.884017, -97.168579],
[47.6138405, -65.2210757],
[48.4959153, -87.115403506857],
[45.775426, -74.013176],
[43.19116, -79.556465],
[43.844184, -79.628906],
[43.880078, -79.439392],
[44.2436328, -77.3607597],
[44.6799707, -63.5720232],
[45.5406943, -77.1004317],
[45.3341367, -75.2519986],
[43.9715452, -79.2467398],
[44.056258, -79.461708],
[46.1700019, -73.4246401],
[43.967349, -79.2473758],
[45.3056879, -73.2533401],
[43.447436, -79.666672],
[52.131802, -106.660767],
[45.4486969, -73.7110536],
[45.403271, -71.889038],
[46.84493, -71.615067],
[43.854336, -79.326782],
[45.2885815, -75.7339698],
[43.466874, -80.524635],
[43.2425289, -79.9470423],
[49.889326, -119.498291],
[45.415347, -75.4387915],
[43.533783, -80.2306337],
[44.3551266, -78.7369939],
[45.2742012, -75.2749125]];

  // The location of Uluru
  var uluru = {lat: 55.344, lng: -100.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: uluru});

  //var marker = new google.maps.Marker({position: uluru, map: map});
  for (var i = 0; i < latlngs.length; i++) {
      var latLng = new google.maps.LatLng(latlngs[i][0],latlngs[i][1]);
      const marker = new google.maps.Marker({
          position: latLng,
          map: map,
          icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 10.5 / 0.06661237970017944 * exp[i],
              fillColor: "#F00",
              fillOpacity: 0.4,
              strokeWeight: 0.4
          },
      });

      var cityname = 'Waterloo';
      var contentString = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">'+ cities[i] +'</h1>'+
          '<div id="bodyContent">'+
          '<p style=>' +  infos[i] +'</p>'+
          '</div>'+
          '</div>';
      const infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 300
      });

      marker.addListener('click', function () {
          closeOtherInfo();
          infowindow.open(marker.get('map'), marker);
          InforObj[0] = infowindow;
      });
  }
}


function closeOtherInfo() {
    if (InforObj.length > 0) {
        /* detach the info-window from the marker ... undocumented in the API docs */
        InforObj[0].set("marker", null);
        /* and close it */
        InforObj[0].close();
        /* blank the array */
        InforObj.length = 0;
    }
}