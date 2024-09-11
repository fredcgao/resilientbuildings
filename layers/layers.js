var wms_layers = [];

var lyr_CountofHotDaysin2050RCP85_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Count of Hot Days in 2050 (RCP8.5)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CountofHotDaysin2050RCP85_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12464999.981577, -5547049.878133, 17396453.423719, -1116064.164138]
                            })
                        });
var lyr_CountofHotDaysin20202030_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Count of Hot Days in 2020-2030",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CountofHotDaysin20202030_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12464999.981577, -5547049.878133, 17396453.423719, -1116064.164138]
                            })
                        });
var format_Police_Facilities_2 = new ol.format.GeoJSON();
var features_Police_Facilities_2 = format_Police_Facilities_2.readFeatures(json_Police_Facilities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Police_Facilities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Police_Facilities_2.addFeatures(features_Police_Facilities_2);
var lyr_Police_Facilities_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Police_Facilities_2, 
                style: style_Police_Facilities_2,
                popuplayertitle: "Police_Facilities",
                interactive: true,
                title: '<img src="styles/legend/Police_Facilities_2.png" /> Police_Facilities'
            });
var format_HealthcareFacilities_3 = new ol.format.GeoJSON();
var features_HealthcareFacilities_3 = format_HealthcareFacilities_3.readFeatures(json_HealthcareFacilities_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HealthcareFacilities_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HealthcareFacilities_3.addFeatures(features_HealthcareFacilities_3);
var lyr_HealthcareFacilities_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HealthcareFacilities_3, 
                style: style_HealthcareFacilities_3,
                popuplayertitle: "Healthcare Facilities",
                interactive: true,
                title: '<img src="styles/legend/HealthcareFacilities_3.png" /> Healthcare Facilities'
            });
var format_Schools_4 = new ol.format.GeoJSON();
var features_Schools_4 = format_Schools_4.readFeatures(json_Schools_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schools_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schools_4.addFeatures(features_Schools_4);
var lyr_Schools_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Schools_4, 
                style: style_Schools_4,
                popuplayertitle: "Schools",
                interactive: true,
                title: '<img src="styles/legend/Schools_4.png" /> Schools'
            });

lyr_CountofHotDaysin2050RCP85_0.setVisible(true);lyr_CountofHotDaysin20202030_1.setVisible(true);lyr_Police_Facilities_2.setVisible(true);lyr_HealthcareFacilities_3.setVisible(true);lyr_Schools_4.setVisible(true);
var layersList = [lyr_CountofHotDaysin2050RCP85_0,lyr_CountofHotDaysin20202030_1,lyr_Police_Facilities_2,lyr_HealthcareFacilities_3,lyr_Schools_4];
lyr_Police_Facilities_2.set('fieldAliases', {'NAME': 'NAME', 'DESCRIPTIO': 'DESCRIPTIO', 'ADDRESS': 'ADDRESS', 'POSTCODE': 'POSTCODE', 'OPENHRS': 'OPENHRS', 'MAP_LABEL': 'MAP_LABEL', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'REGION': 'REGION', 'DISTRICT': 'DISTRICT', 'SUBDISTRIC': 'SUBDISTRIC', });
lyr_HealthcareFacilities_3.set('fieldAliases', {'id': 'id', 'estab_id': 'estab_id', 'establishment_name': 'establishment_name', 'address': 'address', 'suburb': 'suburb', 'postcode': 'postcode', 'type': 'type', 'object_id': 'object_id', });
lyr_Schools_4.set('fieldAliases', {'Code': 'Code', 'field_2': 'field_2', 'School Name': 'School Name', 'Street': 'Street', 'field_5': 'field_5', 'Suburb': 'Suburb', 'State': 'State', 'Postcode': 'Postcode', 'field_9': 'field_9', 'Postal Street': 'Postal Street', 'Postal Suburb': 'Postal Suburb', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'Postal State': 'Postal State', 'Postal Postcode': 'Postal Postcode', 'Latitude': 'Latitude', 'field_18': 'field_18', 'Longitude': 'Longitude', 'field_20': 'field_20', 'Phone': 'Phone', 'field_22': 'field_22', 'field_23': 'field_23', 'field_24': 'field_24', 'Education Region': 'Education Region', 'field_26': 'field_26', 'field_27': 'field_27', 'Broad Classification': 'Broad Classification', 'field_29': 'field_29', 'field_30': 'field_30', 'Classification Group': 'Classification Group', 'field_32': 'field_32', 'Low Year': 'Low Year', 'High Year': 'High Year', 'field_35': 'field_35', 'KIN': 'KIN', 'field_37': 'field_37', 'PPR': 'PPR', 'field_39': 'field_39', 'Y01': 'Y01', 'field_41': 'field_41', 'Y02': 'Y02', 'field_43': 'field_43', 'Y03': 'Y03', 'field_45': 'field_45', 'Y04': 'Y04', 'field_47': 'field_47', 'Y05': 'Y05', 'field_49': 'field_49', 'Y06': 'Y06', 'field_51': 'field_51', 'UPR': 'UPR', 'field_53': 'field_53', 'Y07': 'Y07', 'field_55': 'field_55', 'Y08': 'Y08', 'field_57': 'field_57', 'Y09': 'Y09', 'field_59': 'field_59', 'Y10': 'Y10', 'field_61': 'field_61', 'Y11': 'Y11', 'field_63': 'field_63', 'Y12': 'Y12', 'USE': 'USE', 'Total Students': 'Total Students', 'field_67': 'field_67', });
lyr_Police_Facilities_2.set('fieldImages', {'NAME': '', 'DESCRIPTIO': '', 'ADDRESS': '', 'POSTCODE': '', 'OPENHRS': '', 'MAP_LABEL': '', 'LONGITUDE': '', 'LATITUDE': '', 'REGION': '', 'DISTRICT': '', 'SUBDISTRIC': '', });
lyr_HealthcareFacilities_3.set('fieldImages', {'id': '', 'estab_id': '', 'establishment_name': '', 'address': '', 'suburb': '', 'postcode': '', 'type': '', 'object_id': '', });
lyr_Schools_4.set('fieldImages', {'Code': '', 'field_2': '', 'School Name': '', 'Street': '', 'field_5': '', 'Suburb': '', 'State': '', 'Postcode': '', 'field_9': '', 'Postal Street': '', 'Postal Suburb': '', 'field_12': '', 'field_13': '', 'field_14': '', 'Postal State': '', 'Postal Postcode': '', 'Latitude': '', 'field_18': '', 'Longitude': '', 'field_20': '', 'Phone': '', 'field_22': '', 'field_23': '', 'field_24': '', 'Education Region': '', 'field_26': '', 'field_27': '', 'Broad Classification': '', 'field_29': '', 'field_30': '', 'Classification Group': '', 'field_32': '', 'Low Year': '', 'High Year': '', 'field_35': '', 'KIN': '', 'field_37': '', 'PPR': '', 'field_39': '', 'Y01': '', 'field_41': '', 'Y02': '', 'field_43': '', 'Y03': '', 'field_45': '', 'Y04': '', 'field_47': '', 'Y05': '', 'field_49': '', 'Y06': '', 'field_51': '', 'UPR': '', 'field_53': '', 'Y07': '', 'field_55': '', 'Y08': '', 'field_57': '', 'Y09': '', 'field_59': '', 'Y10': '', 'field_61': '', 'Y11': '', 'field_63': '', 'Y12': '', 'USE': '', 'Total Students': '', 'field_67': '', });
lyr_Police_Facilities_2.set('fieldLabels', {'NAME': 'no label', 'DESCRIPTIO': 'no label', 'ADDRESS': 'no label', 'POSTCODE': 'no label', 'OPENHRS': 'no label', 'MAP_LABEL': 'no label', 'LONGITUDE': 'no label', 'LATITUDE': 'no label', 'REGION': 'no label', 'DISTRICT': 'no label', 'SUBDISTRIC': 'no label', });
lyr_HealthcareFacilities_3.set('fieldLabels', {'id': 'no label', 'estab_id': 'no label', 'establishment_name': 'no label', 'address': 'no label', 'suburb': 'no label', 'postcode': 'no label', 'type': 'no label', 'object_id': 'no label', });
lyr_Schools_4.set('fieldLabels', {'Code': 'no label', 'field_2': 'no label', 'School Name': 'no label', 'Street': 'no label', 'field_5': 'no label', 'Suburb': 'no label', 'State': 'no label', 'Postcode': 'no label', 'field_9': 'no label', 'Postal Street': 'no label', 'Postal Suburb': 'no label', 'field_12': 'no label', 'field_13': 'no label', 'field_14': 'no label', 'Postal State': 'no label', 'Postal Postcode': 'no label', 'Latitude': 'no label', 'field_18': 'no label', 'Longitude': 'no label', 'field_20': 'no label', 'Phone': 'no label', 'field_22': 'no label', 'field_23': 'no label', 'field_24': 'no label', 'Education Region': 'no label', 'field_26': 'no label', 'field_27': 'no label', 'Broad Classification': 'no label', 'field_29': 'no label', 'field_30': 'no label', 'Classification Group': 'no label', 'field_32': 'no label', 'Low Year': 'no label', 'High Year': 'no label', 'field_35': 'no label', 'KIN': 'no label', 'field_37': 'no label', 'PPR': 'no label', 'field_39': 'no label', 'Y01': 'no label', 'field_41': 'no label', 'Y02': 'no label', 'field_43': 'no label', 'Y03': 'no label', 'field_45': 'no label', 'Y04': 'no label', 'field_47': 'no label', 'Y05': 'no label', 'field_49': 'no label', 'Y06': 'no label', 'field_51': 'no label', 'UPR': 'no label', 'field_53': 'no label', 'Y07': 'no label', 'field_55': 'no label', 'Y08': 'no label', 'field_57': 'no label', 'Y09': 'no label', 'field_59': 'no label', 'Y10': 'no label', 'field_61': 'no label', 'Y11': 'no label', 'field_63': 'no label', 'Y12': 'no label', 'USE': 'no label', 'Total Students': 'no label', 'field_67': 'no label', });
lyr_Schools_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});