var wms_layers = [];

var format_uppercode_beck_area_0 = new ol.format.GeoJSON();
var features_uppercode_beck_area_0 = format_uppercode_beck_area_0.readFeatures(json_uppercode_beck_area_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_uppercode_beck_area_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_uppercode_beck_area_0.addFeatures(features_uppercode_beck_area_0);
var lyr_uppercode_beck_area_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_uppercode_beck_area_0, 
                style: style_uppercode_beck_area_0,
                popuplayertitle: 'upper code_beck_area',
                interactive: false,
                title: 'upper code_beck_area'
            });
var format_clippedcontours_1 = new ol.format.GeoJSON();
var features_clippedcontours_1 = format_clippedcontours_1.readFeatures(json_clippedcontours_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedcontours_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedcontours_1.addFeatures(features_clippedcontours_1);
var lyr_clippedcontours_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedcontours_1, 
                style: style_clippedcontours_1,
                popuplayertitle: 'clipped contours',
                interactive: false,
                title: '<img src="styles/legend/clippedcontours_1.png" /> clipped contours'
            });
var format_clippedwoodland_2 = new ol.format.GeoJSON();
var features_clippedwoodland_2 = format_clippedwoodland_2.readFeatures(json_clippedwoodland_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedwoodland_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedwoodland_2.addFeatures(features_clippedwoodland_2);
var lyr_clippedwoodland_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedwoodland_2, 
                style: style_clippedwoodland_2,
                popuplayertitle: 'clipped woodland',
                interactive: false,
                title: '<img src="styles/legend/clippedwoodland_2.png" /> clipped woodland'
            });
var format_codbeckareapolygon_3 = new ol.format.GeoJSON();
var features_codbeckareapolygon_3 = format_codbeckareapolygon_3.readFeatures(json_codbeckareapolygon_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_codbeckareapolygon_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_codbeckareapolygon_3.addFeatures(features_codbeckareapolygon_3);
var lyr_codbeckareapolygon_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_codbeckareapolygon_3, 
                style: style_codbeckareapolygon_3,
                popuplayertitle: 'cod beck area polygon',
                interactive: false,
                title: '<img src="styles/legend/codbeckareapolygon_3.png" /> cod beck area polygon'
            });
var format_clippedlocal_buildings_4 = new ol.format.GeoJSON();
var features_clippedlocal_buildings_4 = format_clippedlocal_buildings_4.readFeatures(json_clippedlocal_buildings_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedlocal_buildings_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedlocal_buildings_4.addFeatures(features_clippedlocal_buildings_4);
var lyr_clippedlocal_buildings_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedlocal_buildings_4, 
                style: style_clippedlocal_buildings_4,
                popuplayertitle: 'clipped local_buildings',
                interactive: false,
                title: '<img src="styles/legend/clippedlocal_buildings_4.png" /> clipped local_buildings'
            });
var format_clippedwaterlines_5 = new ol.format.GeoJSON();
var features_clippedwaterlines_5 = format_clippedwaterlines_5.readFeatures(json_clippedwaterlines_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedwaterlines_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedwaterlines_5.addFeatures(features_clippedwaterlines_5);
var lyr_clippedwaterlines_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedwaterlines_5, 
                style: style_clippedwaterlines_5,
                popuplayertitle: 'clipped waterlines',
                interactive: false,
                title: '<img src="styles/legend/clippedwaterlines_5.png" /> clipped waterlines'
            });
var format_clippedsurface_water_6 = new ol.format.GeoJSON();
var features_clippedsurface_water_6 = format_clippedsurface_water_6.readFeatures(json_clippedsurface_water_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedsurface_water_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedsurface_water_6.addFeatures(features_clippedsurface_water_6);
var lyr_clippedsurface_water_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedsurface_water_6, 
                style: style_clippedsurface_water_6,
                popuplayertitle: 'clipped surface_water',
                interactive: false,
                title: '<img src="styles/legend/clippedsurface_water_6.png" /> clipped surface_water'
            });
var format_clippedlocal_roads_7 = new ol.format.GeoJSON();
var features_clippedlocal_roads_7 = format_clippedlocal_roads_7.readFeatures(json_clippedlocal_roads_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedlocal_roads_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedlocal_roads_7.addFeatures(features_clippedlocal_roads_7);
var lyr_clippedlocal_roads_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedlocal_roads_7, 
                style: style_clippedlocal_roads_7,
                popuplayertitle: 'clipped local_roads',
                interactive: false,
                title: '<img src="styles/legend/clippedlocal_roads_7.png" /> clipped local_roads'
            });
var format_clippednames_8 = new ol.format.GeoJSON();
var features_clippednames_8 = format_clippednames_8.readFeatures(json_clippednames_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippednames_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippednames_8.addFeatures(features_clippednames_8);
var lyr_clippednames_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippednames_8, 
                style: style_clippednames_8,
                popuplayertitle: 'clipped names',
                interactive: false,
                title: 'clipped names'
            });
var format_inaturalistdownload261026_9 = new ol.format.GeoJSON();
var features_inaturalistdownload261026_9 = format_inaturalistdownload261026_9.readFeatures(json_inaturalistdownload261026_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_inaturalistdownload261026_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_inaturalistdownload261026_9.addFeatures(features_inaturalistdownload261026_9);
var lyr_inaturalistdownload261026_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_inaturalistdownload261026_9, 
                style: style_inaturalistdownload261026_9,
                popuplayertitle: 'inaturalist download 261026',
                interactive: true,
                title: '<img src="styles/legend/inaturalistdownload261026_9.png" /> inaturalist download 261026'
            });
var format_CodBeckAreaButterflyRecords2026withosconverttolatandlong_10 = new ol.format.GeoJSON();
var features_CodBeckAreaButterflyRecords2026withosconverttolatandlong_10 = format_CodBeckAreaButterflyRecords2026withosconverttolatandlong_10.readFeatures(json_CodBeckAreaButterflyRecords2026withosconverttolatandlong_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CodBeckAreaButterflyRecords2026withosconverttolatandlong_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CodBeckAreaButterflyRecords2026withosconverttolatandlong_10.addFeatures(features_CodBeckAreaButterflyRecords2026withosconverttolatandlong_10);
var lyr_CodBeckAreaButterflyRecords2026withosconverttolatandlong_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CodBeckAreaButterflyRecords2026withosconverttolatandlong_10, 
                style: style_CodBeckAreaButterflyRecords2026withosconverttolatandlong_10,
                popuplayertitle: 'Cod Beck Area Butterfly Records 2026 with os convert to lat and long',
                interactive: true,
                title: '<img src="styles/legend/CodBeckAreaButterflyRecords2026withosconverttolatandlong_10.png" /> Cod Beck Area Butterfly Records 2026 with os convert to lat and long'
            });
var format_CodBeckPlantList32convertedv2_11 = new ol.format.GeoJSON();
var features_CodBeckPlantList32convertedv2_11 = format_CodBeckPlantList32convertedv2_11.readFeatures(json_CodBeckPlantList32convertedv2_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CodBeckPlantList32convertedv2_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CodBeckPlantList32convertedv2_11.addFeatures(features_CodBeckPlantList32convertedv2_11);
var lyr_CodBeckPlantList32convertedv2_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CodBeckPlantList32convertedv2_11, 
                style: style_CodBeckPlantList32convertedv2_11,
                popuplayertitle: 'Cod Beck Plant List 3-2 converted v2',
                interactive: true,
                title: '<img src="styles/legend/CodBeckPlantList32convertedv2_11.png" /> Cod Beck Plant List 3-2 converted v2'
            });
var format_codbeckplantlistcrabdalebeckv2_12 = new ol.format.GeoJSON();
var features_codbeckplantlistcrabdalebeckv2_12 = format_codbeckplantlistcrabdalebeckv2_12.readFeatures(json_codbeckplantlistcrabdalebeckv2_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_codbeckplantlistcrabdalebeckv2_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_codbeckplantlistcrabdalebeckv2_12.addFeatures(features_codbeckplantlistcrabdalebeckv2_12);
var lyr_codbeckplantlistcrabdalebeckv2_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_codbeckplantlistcrabdalebeckv2_12, 
                style: style_codbeckplantlistcrabdalebeckv2_12,
                popuplayertitle: 'cod beck plant list crabdale beck v2',
                interactive: true,
                title: '<img src="styles/legend/codbeckplantlistcrabdalebeckv2_12.png" /> cod beck plant list crabdale beck v2'
            });

lyr_uppercode_beck_area_0.setVisible(true);lyr_clippedcontours_1.setVisible(true);lyr_clippedwoodland_2.setVisible(true);lyr_codbeckareapolygon_3.setVisible(true);lyr_clippedlocal_buildings_4.setVisible(true);lyr_clippedwaterlines_5.setVisible(true);lyr_clippedsurface_water_6.setVisible(true);lyr_clippedlocal_roads_7.setVisible(true);lyr_clippednames_8.setVisible(true);lyr_inaturalistdownload261026_9.setVisible(true);lyr_CodBeckAreaButterflyRecords2026withosconverttolatandlong_10.setVisible(true);lyr_CodBeckPlantList32convertedv2_11.setVisible(true);lyr_codbeckplantlistcrabdalebeckv2_12.setVisible(true);
var layersList = [lyr_uppercode_beck_area_0,lyr_clippedcontours_1,lyr_clippedwoodland_2,lyr_codbeckareapolygon_3,lyr_clippedlocal_buildings_4,lyr_clippedwaterlines_5,lyr_clippedsurface_water_6,lyr_clippedlocal_roads_7,lyr_clippednames_8,lyr_inaturalistdownload261026_9,lyr_CodBeckAreaButterflyRecords2026withosconverttolatandlong_10,lyr_CodBeckPlantList32convertedv2_11,lyr_codbeckplantlistcrabdalebeckv2_12];
lyr_uppercode_beck_area_0.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_clippedcontours_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'type': 'type', 'height': 'height', });
lyr_clippedwoodland_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'type': 'type', });
lyr_codbeckareapolygon_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_clippedlocal_buildings_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'uuid': 'uuid', });
lyr_clippedwaterlines_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'type': 'type', });
lyr_clippedsurface_water_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'type': 'type', });
lyr_clippedlocal_roads_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'type': 'type', 'name': 'name', 'number': 'number', 'level': 'level', });
lyr_clippednames_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'type': 'type', 'name1': 'name1', 'name1language': 'name1language', 'name2': 'name2', 'name2language': 'name2language', });
lyr_inaturalistdownload261026_9.set('fieldAliases', {'id': 'id', 'uuid': 'uuid', 'observed_on_string': 'observed_on_string', 'observed_on': 'observed_on', 'time_observed_at': 'time_observed_at', 'time_zone': 'time_zone', 'user_id': 'user_id', 'user_login': 'user_login', 'user_name': 'user_name', 'created_at': 'created_at', 'updated_at': 'updated_at', 'quality_grade': 'quality_grade', 'license': 'license', 'url': 'url', 'image_url': 'image_url', 'sound_url': 'sound_url', 'tag_list': 'tag_list', 'description': 'description', 'num_identification_agreements': 'num_identification_agreements', 'num_identification_disagreements': 'num_identification_disagreements', 'captive_cultivated': 'captive_cultivated', 'oauth_application_id': 'oauth_application_id', 'place_guess': 'place_guess', 'latitude': 'latitude', 'longitude': 'longitude', 'positional_accuracy': 'positional_accuracy', 'private_place_guess': 'private_place_guess', 'private_latitude': 'private_latitude', 'private_longitude': 'private_longitude', 'public_positional_accuracy': 'public_positional_accuracy', 'geoprivacy': 'geoprivacy', 'taxon_geoprivacy': 'taxon_geoprivacy', 'coordinates_obscured': 'coordinates_obscured', 'positioning_method': 'positioning_method', 'positioning_device': 'positioning_device', 'species_guess': 'species_guess', 'scientific_name': 'scientific_name', 'common_name': 'common_name', 'iconic_taxon_name': 'iconic_taxon_name', 'taxon_id': 'taxon_id', });
lyr_CodBeckAreaButterflyRecords2026withosconverttolatandlong_10.set('fieldAliases', {'Species': 'Species', 'Common name': 'Common name', 'Location': 'Location', 'Map ref.': 'Map ref.', 'Latitude': 'Latitude', 'Longiture': 'Longiture', 'Date': 'Date', 'field_8': 'field_8', 'Map ref converted using https://gridreferencefinder.com/batchConvert/batchConvert.php': 'Map ref converted using https://gridreferencefinder.com/batchConvert/batchConvert.php', });
lyr_CodBeckPlantList32convertedv2_11.set('fieldAliases', {'Species Common Name*': 'Species Common Name*', 'Species Latin Name': 'Species Latin Name', 'Count': 'Count', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Date Recorded*': 'Date Recorded*', 'Recorder Name(s)*': 'Recorder Name(s)*', 'Verifier': 'Verifier', 'Sex/Life Stage': 'Sex/Life Stage', 'Record type/Recording method': 'Record type/Recording method', 'Habitat': 'Habitat', 'Image_url': 'Image_url', 'Sound_url': 'Sound_url', 'Taxon name': 'Taxon name', 'Comment': 'Comment', });
lyr_codbeckplantlistcrabdalebeckv2_12.set('fieldAliases', {'Species Common Name*': 'Species Common Name*', 'Species Latin Name': 'Species Latin Name', 'Count': 'Count', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Date Recorded*': 'Date Recorded*', 'Recorder Name(s)*': 'Recorder Name(s)*', 'Verifier': 'Verifier', 'Sex/Life Stage': 'Sex/Life Stage', 'Record type/Recording method': 'Record type/Recording method', 'Habitat': 'Habitat', 'Image_url': 'Image_url', 'Audio_url': 'Audio_url', 'Taxon name': 'Taxon name', 'Comment': 'Comment', });
lyr_uppercode_beck_area_0.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_clippedcontours_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'type': 'TextEdit', 'height': 'TextEdit', });
lyr_clippedwoodland_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'type': 'TextEdit', });
lyr_codbeckareapolygon_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_clippedlocal_buildings_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'uuid': 'TextEdit', });
lyr_clippedwaterlines_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'type': 'TextEdit', });
lyr_clippedsurface_water_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'type': 'TextEdit', });
lyr_clippedlocal_roads_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'number': 'TextEdit', 'level': 'Range', });
lyr_clippednames_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'type': 'TextEdit', 'name1': 'TextEdit', 'name1language': 'TextEdit', 'name2': 'TextEdit', 'name2language': 'TextEdit', });
lyr_inaturalistdownload261026_9.set('fieldImages', {'id': 'Hidden', 'uuid': 'Hidden', 'observed_on_string': 'Hidden', 'observed_on': 'Hidden', 'time_observed_at': 'Hidden', 'time_zone': 'Hidden', 'user_id': 'Hidden', 'user_login': 'Hidden', 'user_name': 'Hidden', 'created_at': 'Hidden', 'updated_at': 'Hidden', 'quality_grade': 'Hidden', 'license': 'Hidden', 'url': 'Hidden', 'image_url': 'TextEdit', 'sound_url': 'Hidden', 'tag_list': 'Hidden', 'description': 'Hidden', 'num_identification_agreements': 'Hidden', 'num_identification_disagreements': 'Hidden', 'captive_cultivated': 'Hidden', 'oauth_application_id': 'Hidden', 'place_guess': 'Hidden', 'latitude': 'Hidden', 'longitude': 'Hidden', 'positional_accuracy': 'Hidden', 'private_place_guess': 'Hidden', 'private_latitude': 'Hidden', 'private_longitude': 'Hidden', 'public_positional_accuracy': 'Hidden', 'geoprivacy': 'Hidden', 'taxon_geoprivacy': 'Hidden', 'coordinates_obscured': 'Hidden', 'positioning_method': 'Hidden', 'positioning_device': 'Hidden', 'species_guess': 'Hidden', 'scientific_name': 'Hidden', 'common_name': 'TextEdit', 'iconic_taxon_name': 'Hidden', 'taxon_id': 'Hidden', });
lyr_CodBeckAreaButterflyRecords2026withosconverttolatandlong_10.set('fieldImages', {'Species': 'Hidden', 'Common name': 'TextEdit', 'Location': 'Hidden', 'Map ref.': 'Hidden', 'Latitude': 'Hidden', 'Longiture': 'Hidden', 'Date': 'Hidden', 'field_8': 'Hidden', 'Map ref converted using https://gridreferencefinder.com/batchConvert/batchConvert.php': 'Hidden', });
lyr_CodBeckPlantList32convertedv2_11.set('fieldImages', {'Species Common Name*': 'TextEdit', 'Species Latin Name': 'Hidden', 'Count': 'Hidden', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Date Recorded*': 'Hidden', 'Recorder Name(s)*': 'Hidden', 'Verifier': 'Hidden', 'Sex/Life Stage': 'Hidden', 'Record type/Recording method': 'Hidden', 'Habitat': 'Hidden', 'Image_url': 'Hidden', 'Sound_url': 'Hidden', 'Taxon name': 'Hidden', 'Comment': 'Hidden', });
lyr_codbeckplantlistcrabdalebeckv2_12.set('fieldImages', {'Species Common Name*': 'TextEdit', 'Species Latin Name': 'Hidden', 'Count': 'Hidden', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Date Recorded*': 'Hidden', 'Recorder Name(s)*': 'Hidden', 'Verifier': 'Hidden', 'Sex/Life Stage': 'Hidden', 'Record type/Recording method': 'Hidden', 'Habitat': 'Hidden', 'Image_url': 'Hidden', 'Audio_url': 'Hidden', 'Taxon name': 'Hidden', 'Comment': 'Hidden', });
lyr_uppercode_beck_area_0.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_clippedcontours_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'type': 'no label', 'height': 'no label', });
lyr_clippedwoodland_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'type': 'no label', });
lyr_codbeckareapolygon_3.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_clippedlocal_buildings_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'uuid': 'no label', });
lyr_clippedwaterlines_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'type': 'no label', });
lyr_clippedsurface_water_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'type': 'no label', });
lyr_clippedlocal_roads_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'type': 'no label', 'name': 'no label', 'number': 'no label', 'level': 'no label', });
lyr_clippednames_8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'type': 'no label', 'name1': 'no label', 'name1language': 'no label', 'name2': 'no label', 'name2language': 'no label', });
lyr_inaturalistdownload261026_9.set('fieldLabels', {'image_url': 'inline label - visible with data', 'common_name': 'inline label - visible with data', });
lyr_CodBeckAreaButterflyRecords2026withosconverttolatandlong_10.set('fieldLabels', {'Common name': 'no label', });
lyr_CodBeckPlantList32convertedv2_11.set('fieldLabels', {'Species Common Name*': 'no label', });
lyr_codbeckplantlistcrabdalebeckv2_12.set('fieldLabels', {'Species Common Name*': 'no label', });
lyr_codbeckplantlistcrabdalebeckv2_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});