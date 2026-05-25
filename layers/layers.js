var wms_layers = [];

var lyr_GoogleSatellite_0 = new ol.layer.Tile({
    'title': 'Google Satellite',
    'opacity': 1.000000,
    source: new ol.source.XYZ({
        attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
        url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
    })
});

var format_ChirisaSengwa_1 = new ol.format.GeoJSON();
var features_ChirisaSengwa_1 = format_ChirisaSengwa_1.readFeatures(json_ChirisaSengwa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChirisaSengwa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChirisaSengwa_1.addFeatures(features_ChirisaSengwa_1);
var lyr_ChirisaSengwa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChirisaSengwa_1, 
                style: style_ChirisaSengwa_1,
                popuplayertitle: 'Chirisa-Sengwa',
                interactive: false,
                title: '<img src="styles/legend/ChirisaSengwa_1.png" /> Chirisa-Sengwa'
            });

var format_4756DrySeasons_2 = new ol.format.GeoJSON();
var features_4756DrySeasons_2 = format_4756DrySeasons_2.readFeatures(json_4756DrySeasons_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4756DrySeasons_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4756DrySeasons_2.addFeatures(features_4756DrySeasons_2);
var lyr_4756DrySeasons_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4756DrySeasons_2, 
                style: style_4756DrySeasons_2,
                popuplayertitle: '4756 Dry Seasons',
                interactive: true,
                title: '<img src="styles/legend/4756DrySeasons_2.png" /> 4756 Dry Seasons'
            });

var format_4756WetSeasons_3 = new ol.format.GeoJSON();
var features_4756WetSeasons_3 = format_4756WetSeasons_3.readFeatures(json_4756WetSeasons_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4756WetSeasons_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4756WetSeasons_3.addFeatures(features_4756WetSeasons_3);
var lyr_4756WetSeasons_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4756WetSeasons_3, 
                style: style_4756WetSeasons_3,
                popuplayertitle: '4756 Wet Seasons',
                interactive: true,
                title: '<img src="styles/legend/4756WetSeasons_3.png" /> 4756 Wet Seasons'
            });

var format_4757DrySeasons_4 = new ol.format.GeoJSON();
var features_4757DrySeasons_4 = format_4757DrySeasons_4.readFeatures(json_4757DrySeasons_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4757DrySeasons_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4757DrySeasons_4.addFeatures(features_4757DrySeasons_4);
var lyr_4757DrySeasons_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4757DrySeasons_4, 
                style: style_4757DrySeasons_4,
                popuplayertitle: '4757 Dry Seasons',
                interactive: true,
                title: '<img src="styles/legend/4757DrySeasons_4.png" /> 4757 Dry Seasons'
            });

var format_4757WetSeasons_5 = new ol.format.GeoJSON();
var features_4757WetSeasons_5 = format_4757WetSeasons_5.readFeatures(json_4757WetSeasons_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4757WetSeasons_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4757WetSeasons_5.addFeatures(features_4757WetSeasons_5);
var lyr_4757WetSeasons_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4757WetSeasons_5, 
                style: style_4757WetSeasons_5,
                popuplayertitle: '4757 Wet Seasons',
                interactive: true,
                title: '<img src="styles/legend/4757WetSeasons_5.png" /> 4757 Wet Seasons'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ChirisaSengwa_1.setVisible(true);lyr_4756DrySeasons_2.setVisible(true);lyr_4756WetSeasons_3.setVisible(true);lyr_4757DrySeasons_4.setVisible(true);lyr_4757WetSeasons_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ChirisaSengwa_1,lyr_4756DrySeasons_2,lyr_4756WetSeasons_3,lyr_4757DrySeasons_4,lyr_4757WetSeasons_5];

lyr_ChirisaSengwa_1.set('fieldAliases', {'id': 'id', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'NATIONAL_': 'NATIONAL_', 'NATIONAL_I': 'NATIONAL_I', 'SITE_CODE': 'SITE_CODE', 'GISNAME': 'GISNAME', 'GISISO3': 'GISISO3', 'EDITEDBY': 'EDITEDBY', 'EDITDATE': 'EDITDATE', 'SOURCE_ID': 'SOURCE_ID', 'ACRES': 'ACRES', 'Park': 'Park', 'Categories': 'Categories', 'layer': 'layer', 'path': 'path', });
lyr_4756DrySeasons_2.set('fieldAliases', {'TagId': 'TagId', 'Software Version': 'Software Version', 'Timestamp': 'Timestamp', 'LogInterval': 'LogInterval', 'latitude': 'latitude', 'longitude': 'longitude', 'altitude': 'altitude', 'speed': 'speed', 'battery': 'battery', 'temperature': 'temperature', 'lightIntensity': 'lightIntensity', 'movement': 'movement', 'accelerometer': 'accelerometer', 'rssi': 'rssi', 'coverage': 'coverage', 'retries': 'retries', 'deviceType': 'deviceType', 'alarm': 'alarm', });
lyr_4756WetSeasons_3.set('fieldAliases', {'TagId': 'TagId', 'Software Version': 'Software Version', 'Timestamp': 'Timestamp', 'LogInterval': 'LogInterval', 'latitude': 'latitude', 'longitude': 'longitude', 'altitude': 'altitude', 'speed': 'speed', 'battery': 'battery', 'temperature': 'temperature', 'lightIntensity': 'lightIntensity', 'movement': 'movement', 'accelerometer': 'accelerometer', 'rssi': 'rssi', 'coverage': 'coverage', 'retries': 'retries', 'deviceType': 'deviceType', 'alarm': 'alarm', });
lyr_4757DrySeasons_4.set('fieldAliases', {'TagId': 'TagId', 'Software Version': 'Software Version', 'Timestamp': 'Timestamp', 'LogInterval': 'LogInterval', 'latitude': 'latitude', 'longitude': 'longitude', 'altitude': 'altitude', 'speed': 'speed', 'battery': 'battery', 'temperature': 'temperature', 'lightIntensity': 'lightIntensity', 'movement': 'movement', 'accelerometer': 'accelerometer', 'rssi': 'rssi', 'coverage': 'coverage', 'retries': 'retries', 'deviceType': 'deviceType', 'alarm': 'alarm', });
lyr_4757WetSeasons_5.set('fieldAliases', {'TagId': 'TagId', 'Software Version': 'Software Version', 'Timestamp': 'Timestamp', 'LogInterval': 'LogInterval', 'latitude': 'latitude', 'longitude': 'longitude', 'altitude': 'altitude', 'speed': 'speed', 'battery': 'battery', 'temperature': 'temperature', 'lightIntensity': 'lightIntensity', 'movement': 'movement', 'accelerometer': 'accelerometer', 'rssi': 'rssi', 'coverage': 'coverage', 'retries': 'retries', 'deviceType': 'deviceType', 'alarm': 'alarm', });

lyr_ChirisaSengwa_1.set('fieldImages', {'id': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'NATIONAL_': 'TextEdit', 'NATIONAL_I': 'TextEdit', 'SITE_CODE': 'Range', 'GISNAME': 'TextEdit', 'GISISO3': 'TextEdit', 'EDITEDBY': 'TextEdit', 'EDITDATE': 'DateTime', 'SOURCE_ID': 'TextEdit', 'ACRES': 'TextEdit', 'Park': 'TextEdit', 'Categories': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_4756DrySeasons_2.set('fieldImages', {'TagId': 'Range', 'Software Version': 'Range', 'Timestamp': 'TextEdit', 'LogInterval': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'altitude': 'TextEdit', 'speed': 'Range', 'battery': 'TextEdit', 'temperature': 'Range', 'lightIntensity': 'TextEdit', 'movement': 'TextEdit', 'accelerometer': 'TextEdit', 'rssi': 'TextEdit', 'coverage': 'TextEdit', 'retries': 'Range', 'deviceType': 'TextEdit', 'alarm': 'TextEdit', });
lyr_4756WetSeasons_3.set('fieldImages', {'TagId': 'Range', 'Software Version': 'Range', 'Timestamp': 'TextEdit', 'LogInterval': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'altitude': 'TextEdit', 'speed': 'Range', 'battery': 'TextEdit', 'temperature': 'Range', 'lightIntensity': 'TextEdit', 'movement': 'TextEdit', 'accelerometer': 'TextEdit', 'rssi': 'TextEdit', 'coverage': 'TextEdit', 'retries': 'Range', 'deviceType': 'TextEdit', 'alarm': 'TextEdit', });
lyr_4757DrySeasons_4.set('fieldImages', {'TagId': 'Range', 'Software Version': 'Range', 'Timestamp': 'TextEdit', 'LogInterval': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'altitude': 'TextEdit', 'speed': 'Range', 'battery': 'TextEdit', 'temperature': 'Range', 'lightIntensity': 'TextEdit', 'movement': 'TextEdit', 'accelerometer': 'TextEdit', 'rssi': 'TextEdit', 'coverage': 'TextEdit', 'retries': 'Range', 'deviceType': 'TextEdit', 'alarm': 'TextEdit', });
lyr_4757WetSeasons_5.set('fieldImages', {'TagId': 'Range', 'Software Version': 'Range', 'Timestamp': 'TextEdit', 'LogInterval': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'altitude': 'TextEdit', 'speed': 'Range', 'battery': 'TextEdit', 'temperature': 'Range', 'lightIntensity': 'TextEdit', 'movement': 'TextEdit', 'accelerometer': 'TextEdit', 'rssi': 'TextEdit', 'coverage': 'TextEdit', 'retries': 'Range', 'deviceType': 'TextEdit', 'alarm': 'TextEdit', });

lyr_ChirisaSengwa_1.set('fieldLabels', {'id': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'NATIONAL_': 'no label', 'NATIONAL_I': 'no label', 'SITE_CODE': 'no label', 'GISNAME': 'no label', 'GISISO3': 'no label', 'EDITEDBY': 'no label', 'EDITDATE': 'no label', 'SOURCE_ID': 'no label', 'ACRES': 'no label', 'Park': 'no label', 'Categories': 'no label', 'layer': 'no label', 'path': 'no label', });

// Clean Popups Configured Below
lyr_4756DrySeasons_2.set('fieldLabels', {'TagId': 'inline label - always visible', 'Software Version': 'hidden field', 'Timestamp': 'inline label - always visible', 'LogInterval': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'altitude': 'hidden field', 'speed': 'hidden field', 'battery': 'hidden field', 'temperature': 'hidden field', 'lightIntensity': 'hidden field', 'movement': 'hidden field', 'accelerometer': 'hidden field', 'rssi': 'hidden field', 'coverage': 'hidden field', 'retries': 'hidden field', 'deviceType': 'hidden field', 'alarm': 'hidden field', });
lyr_4756WetSeasons_3.set('fieldLabels', {'TagId': 'inline label - always visible', 'Software Version': 'hidden field', 'Timestamp': 'inline label - always visible', 'LogInterval': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'altitude': 'hidden field', 'speed': 'hidden field', 'battery': 'hidden field', 'temperature': 'hidden field', 'lightIntensity': 'hidden field', 'movement': 'hidden field', 'accelerometer': 'hidden field', 'rssi': 'hidden field', 'coverage': 'hidden field', 'retries': 'hidden field', 'deviceType': 'hidden field', 'alarm': 'hidden field', });
lyr_4757DrySeasons_4.set('fieldLabels', {'TagId': 'inline label - always visible', 'Software Version': 'hidden field', 'Timestamp': 'inline label - always visible', 'LogInterval': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'altitude': 'hidden field', 'speed': 'hidden field', 'battery': 'hidden field', 'temperature': 'hidden field', 'lightIntensity': 'hidden field', 'movement': 'hidden field', 'accelerometer': 'hidden field', 'rssi': 'hidden field', 'coverage': 'hidden field', 'retries': 'hidden field', 'deviceType': 'hidden field', 'alarm': 'hidden field', });
lyr_4757WetSeasons_5.set('fieldLabels', {'TagId': 'inline label - always visible', 'Software Version': 'hidden field', 'Timestamp': 'inline label - always visible', 'LogInterval': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'altitude': 'hidden field', 'speed': 'hidden field', 'battery': 'hidden field', 'temperature': 'hidden field', 'lightIntensity': 'hidden field', 'movement': 'hidden field', 'accelerometer': 'hidden field', 'rssi': 'hidden field', 'coverage': 'hidden field', 'retries': 'hidden field', 'deviceType': 'hidden field', 'alarm': 'hidden field', });

lyr_4757WetSeasons_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});