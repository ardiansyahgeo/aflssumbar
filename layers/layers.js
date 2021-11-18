var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_google_1 = new ol.layer.Tile({
            'title': 'google',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KARAKTERISTIK_2 = new ol.format.GeoJSON();
var features_KARAKTERISTIK_2 = format_KARAKTERISTIK_2.readFeatures(json_KARAKTERISTIK_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KARAKTERISTIK_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KARAKTERISTIK_2.addFeatures(features_KARAKTERISTIK_2);
var lyr_KARAKTERISTIK_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KARAKTERISTIK_2, 
                style: style_KARAKTERISTIK_2,
                interactive: true,
                title: '<img src="styles/legend/KARAKTERISTIK_2.png" /> KARAKTERISTIK'
            });
var format_PRIORITAS_TITIK_3 = new ol.format.GeoJSON();
var features_PRIORITAS_TITIK_3 = format_PRIORITAS_TITIK_3.readFeatures(json_PRIORITAS_TITIK_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PRIORITAS_TITIK_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRIORITAS_TITIK_3.addFeatures(features_PRIORITAS_TITIK_3);
var lyr_PRIORITAS_TITIK_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PRIORITAS_TITIK_3, 
                style: style_PRIORITAS_TITIK_3,
                interactive: true,
                title: '<img src="styles/legend/PRIORITAS_TITIK_3.png" /> PRIORITAS_TITIK'
            });
var format_PT2_Asuransi_pertanian_4 = new ol.format.GeoJSON();
var features_PT2_Asuransi_pertanian_4 = format_PT2_Asuransi_pertanian_4.readFeatures(json_PT2_Asuransi_pertanian_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PT2_Asuransi_pertanian_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PT2_Asuransi_pertanian_4.addFeatures(features_PT2_Asuransi_pertanian_4);
var lyr_PT2_Asuransi_pertanian_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PT2_Asuransi_pertanian_4, 
                style: style_PT2_Asuransi_pertanian_4,
                interactive: true,
                title: '<img src="styles/legend/PT2_Asuransi_pertanian_4.png" /> PT2_Asuransi_pertanian'
            });
var format_PT1_Bantuan_usaha_pertanian_5 = new ol.format.GeoJSON();
var features_PT1_Bantuan_usaha_pertanian_5 = format_PT1_Bantuan_usaha_pertanian_5.readFeatures(json_PT1_Bantuan_usaha_pertanian_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PT1_Bantuan_usaha_pertanian_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PT1_Bantuan_usaha_pertanian_5.addFeatures(features_PT1_Bantuan_usaha_pertanian_5);
var lyr_PT1_Bantuan_usaha_pertanian_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PT1_Bantuan_usaha_pertanian_5, 
                style: style_PT1_Bantuan_usaha_pertanian_5,
                interactive: true,
                title: '<img src="styles/legend/PT1_Bantuan_usaha_pertanian_5.png" /> PT1_Bantuan_usaha_pertanian'
            });
var format_KP2_Kerja_sama_pengelolaan_6 = new ol.format.GeoJSON();
var features_KP2_Kerja_sama_pengelolaan_6 = format_KP2_Kerja_sama_pengelolaan_6.readFeatures(json_KP2_Kerja_sama_pengelolaan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KP2_Kerja_sama_pengelolaan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KP2_Kerja_sama_pengelolaan_6.addFeatures(features_KP2_Kerja_sama_pengelolaan_6);
var lyr_KP2_Kerja_sama_pengelolaan_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KP2_Kerja_sama_pengelolaan_6, 
                style: style_KP2_Kerja_sama_pengelolaan_6,
                interactive: true,
                title: '<img src="styles/legend/KP2_Kerja_sama_pengelolaan_6.png" /> KP2_Kerja_sama_pengelolaan'
            });
var format_KP3_Peningkatan_Kapasitas_7 = new ol.format.GeoJSON();
var features_KP3_Peningkatan_Kapasitas_7 = format_KP3_Peningkatan_Kapasitas_7.readFeatures(json_KP3_Peningkatan_Kapasitas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KP3_Peningkatan_Kapasitas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KP3_Peningkatan_Kapasitas_7.addFeatures(features_KP3_Peningkatan_Kapasitas_7);
var lyr_KP3_Peningkatan_Kapasitas_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KP3_Peningkatan_Kapasitas_7, 
                style: style_KP3_Peningkatan_Kapasitas_7,
                interactive: true,
                title: '<img src="styles/legend/KP3_Peningkatan_Kapasitas_7.png" /> KP3_Peningkatan_Kapasitas'
            });
var format_KP1_Sosialisasi_dan_Informasi_8 = new ol.format.GeoJSON();
var features_KP1_Sosialisasi_dan_Informasi_8 = format_KP1_Sosialisasi_dan_Informasi_8.readFeatures(json_KP1_Sosialisasi_dan_Informasi_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KP1_Sosialisasi_dan_Informasi_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KP1_Sosialisasi_dan_Informasi_8.addFeatures(features_KP1_Sosialisasi_dan_Informasi_8);
var lyr_KP1_Sosialisasi_dan_Informasi_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KP1_Sosialisasi_dan_Informasi_8, 
                style: style_KP1_Sosialisasi_dan_Informasi_8,
                interactive: true,
                title: '<img src="styles/legend/KP1_Sosialisasi_dan_Informasi_8.png" /> KP1_Sosialisasi_dan_Informasi'
            });
var format_TN5_Pengurangan_PBB_9 = new ol.format.GeoJSON();
var features_TN5_Pengurangan_PBB_9 = format_TN5_Pengurangan_PBB_9.readFeatures(json_TN5_Pengurangan_PBB_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TN5_Pengurangan_PBB_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TN5_Pengurangan_PBB_9.addFeatures(features_TN5_Pengurangan_PBB_9);
var lyr_TN5_Pengurangan_PBB_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TN5_Pengurangan_PBB_9, 
                style: style_TN5_Pengurangan_PBB_9,
                interactive: true,
                title: '<img src="styles/legend/TN5_Pengurangan_PBB_9.png" /> TN5_Pengurangan_PBB'
            });
var format_TN4_Sertifikasi_lahan_sawah_10 = new ol.format.GeoJSON();
var features_TN4_Sertifikasi_lahan_sawah_10 = format_TN4_Sertifikasi_lahan_sawah_10.readFeatures(json_TN4_Sertifikasi_lahan_sawah_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TN4_Sertifikasi_lahan_sawah_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TN4_Sertifikasi_lahan_sawah_10.addFeatures(features_TN4_Sertifikasi_lahan_sawah_10);
var lyr_TN4_Sertifikasi_lahan_sawah_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TN4_Sertifikasi_lahan_sawah_10, 
                style: style_TN4_Sertifikasi_lahan_sawah_10,
                interactive: true,
                title: '<img src="styles/legend/TN4_Sertifikasi_lahan_sawah_10.png" /> TN4_Sertifikasi_lahan_sawah'
            });
var format_TN3_Pembelian_Hak_Membangun_11 = new ol.format.GeoJSON();
var features_TN3_Pembelian_Hak_Membangun_11 = format_TN3_Pembelian_Hak_Membangun_11.readFeatures(json_TN3_Pembelian_Hak_Membangun_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TN3_Pembelian_Hak_Membangun_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TN3_Pembelian_Hak_Membangun_11.addFeatures(features_TN3_Pembelian_Hak_Membangun_11);
var lyr_TN3_Pembelian_Hak_Membangun_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TN3_Pembelian_Hak_Membangun_11, 
                style: style_TN3_Pembelian_Hak_Membangun_11,
                interactive: true,
                title: '<img src="styles/legend/TN3_Pembelian_Hak_Membangun_11.png" /> TN3_Pembelian_Hak_Membangun'
            });
var format_TN2_Transfer_Hak_MembangunTransfer_of_Development_Right_12 = new ol.format.GeoJSON();
var features_TN2_Transfer_Hak_MembangunTransfer_of_Development_Right_12 = format_TN2_Transfer_Hak_MembangunTransfer_of_Development_Right_12.readFeatures(json_TN2_Transfer_Hak_MembangunTransfer_of_Development_Right_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TN2_Transfer_Hak_MembangunTransfer_of_Development_Right_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TN2_Transfer_Hak_MembangunTransfer_of_Development_Right_12.addFeatures(features_TN2_Transfer_Hak_MembangunTransfer_of_Development_Right_12);
var lyr_TN2_Transfer_Hak_MembangunTransfer_of_Development_Right_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TN2_Transfer_Hak_MembangunTransfer_of_Development_Right_12, 
                style: style_TN2_Transfer_Hak_MembangunTransfer_of_Development_Right_12,
                interactive: true,
                title: '<img src="styles/legend/TN2_Transfer_Hak_MembangunTransfer_of_Development_Right_12.png" /> TN2_Transfer_Hak_Membangun (Transfer_of_Development_Right)'
            });
var format_TN1_Pembelian_dan_pengalihan_hak_sawah_oleh_pemerintah_13 = new ol.format.GeoJSON();
var features_TN1_Pembelian_dan_pengalihan_hak_sawah_oleh_pemerintah_13 = format_TN1_Pembelian_dan_pengalihan_hak_sawah_oleh_pemerintah_13.readFeatures(json_TN1_Pembelian_dan_pengalihan_hak_sawah_oleh_pemerintah_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TN1_Pembelian_dan_pengalihan_hak_sawah_oleh_pemerintah_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TN1_Pembelian_dan_pengalihan_hak_sawah_oleh_pemerintah_13.addFeatures(features_TN1_Pembelian_dan_pengalihan_hak_sawah_oleh_pemerintah_13);
var lyr_TN1_Pembelian_dan_pengalihan_hak_sawah_oleh_pemerintah_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TN1_Pembelian_dan_pengalihan_hak_sawah_oleh_pemerintah_13, 
                style: style_TN1_Pembelian_dan_pengalihan_hak_sawah_oleh_pemerintah_13,
                interactive: true,
                title: '<img src="styles/legend/TN1_Pembelian_dan_pengalihan_hak_sawah_oleh_pemerintah_13.png" /> TN1_Pembelian_dan_pengalihan_hak_sawah_oleh_pemerintah'
            });
var format_TR11_Disinsentif_Kegiatan_Pengganggu_di_Sekitar_LSD_14 = new ol.format.GeoJSON();
var features_TR11_Disinsentif_Kegiatan_Pengganggu_di_Sekitar_LSD_14 = format_TR11_Disinsentif_Kegiatan_Pengganggu_di_Sekitar_LSD_14.readFeatures(json_TR11_Disinsentif_Kegiatan_Pengganggu_di_Sekitar_LSD_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TR11_Disinsentif_Kegiatan_Pengganggu_di_Sekitar_LSD_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TR11_Disinsentif_Kegiatan_Pengganggu_di_Sekitar_LSD_14.addFeatures(features_TR11_Disinsentif_Kegiatan_Pengganggu_di_Sekitar_LSD_14);
var lyr_TR11_Disinsentif_Kegiatan_Pengganggu_di_Sekitar_LSD_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TR11_Disinsentif_Kegiatan_Pengganggu_di_Sekitar_LSD_14, 
                style: style_TR11_Disinsentif_Kegiatan_Pengganggu_di_Sekitar_LSD_14,
                interactive: true,
                title: '<img src="styles/legend/TR11_Disinsentif_Kegiatan_Pengganggu_di_Sekitar_LSD_14.png" /> TR11_Disinsentif_Kegiatan_Pengganggu_di_Sekitar_LSD'
            });
var format_TR10_Disinsentif_Kegiatan_Pengganggu_di_dalam_LSD_15 = new ol.format.GeoJSON();
var features_TR10_Disinsentif_Kegiatan_Pengganggu_di_dalam_LSD_15 = format_TR10_Disinsentif_Kegiatan_Pengganggu_di_dalam_LSD_15.readFeatures(json_TR10_Disinsentif_Kegiatan_Pengganggu_di_dalam_LSD_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TR10_Disinsentif_Kegiatan_Pengganggu_di_dalam_LSD_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TR10_Disinsentif_Kegiatan_Pengganggu_di_dalam_LSD_15.addFeatures(features_TR10_Disinsentif_Kegiatan_Pengganggu_di_dalam_LSD_15);
var lyr_TR10_Disinsentif_Kegiatan_Pengganggu_di_dalam_LSD_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TR10_Disinsentif_Kegiatan_Pengganggu_di_dalam_LSD_15, 
                style: style_TR10_Disinsentif_Kegiatan_Pengganggu_di_dalam_LSD_15,
                interactive: true,
                title: '<img src="styles/legend/TR10_Disinsentif_Kegiatan_Pengganggu_di_dalam_LSD_15.png" /> TR10_Disinsentif_Kegiatan_Pengganggu_di_dalam_LSD'
            });
var format_TR9_Insentif_Bantuan_pasarana_infrastruktur_pertanian_16 = new ol.format.GeoJSON();
var features_TR9_Insentif_Bantuan_pasarana_infrastruktur_pertanian_16 = format_TR9_Insentif_Bantuan_pasarana_infrastruktur_pertanian_16.readFeatures(json_TR9_Insentif_Bantuan_pasarana_infrastruktur_pertanian_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TR9_Insentif_Bantuan_pasarana_infrastruktur_pertanian_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TR9_Insentif_Bantuan_pasarana_infrastruktur_pertanian_16.addFeatures(features_TR9_Insentif_Bantuan_pasarana_infrastruktur_pertanian_16);
var lyr_TR9_Insentif_Bantuan_pasarana_infrastruktur_pertanian_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TR9_Insentif_Bantuan_pasarana_infrastruktur_pertanian_16, 
                style: style_TR9_Insentif_Bantuan_pasarana_infrastruktur_pertanian_16,
                interactive: true,
                title: '<img src="styles/legend/TR9_Insentif_Bantuan_pasarana_infrastruktur_pertanian_16.png" /> TR9_Insentif_Bantuan_pasarana_infrastruktur_pertanian'
            });
var format_TR8_Insentif_imbalan_17 = new ol.format.GeoJSON();
var features_TR8_Insentif_imbalan_17 = format_TR8_Insentif_imbalan_17.readFeatures(json_TR8_Insentif_imbalan_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TR8_Insentif_imbalan_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TR8_Insentif_imbalan_17.addFeatures(features_TR8_Insentif_imbalan_17);
var lyr_TR8_Insentif_imbalan_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TR8_Insentif_imbalan_17, 
                style: style_TR8_Insentif_imbalan_17,
                interactive: true,
                title: '<img src="styles/legend/TR8_Insentif_imbalan_17.png" /> TR8_Insentif_imbalan'
            });
var format_TR7_Insentif_Penghargaan_kepada_Petani_18 = new ol.format.GeoJSON();
var features_TR7_Insentif_Penghargaan_kepada_Petani_18 = format_TR7_Insentif_Penghargaan_kepada_Petani_18.readFeatures(json_TR7_Insentif_Penghargaan_kepada_Petani_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TR7_Insentif_Penghargaan_kepada_Petani_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TR7_Insentif_Penghargaan_kepada_Petani_18.addFeatures(features_TR7_Insentif_Penghargaan_kepada_Petani_18);
var lyr_TR7_Insentif_Penghargaan_kepada_Petani_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TR7_Insentif_Penghargaan_kepada_Petani_18, 
                style: style_TR7_Insentif_Penghargaan_kepada_Petani_18,
                interactive: true,
                title: '<img src="styles/legend/TR7_Insentif_Penghargaan_kepada_Petani_18.png" /> TR7_Insentif_Penghargaan_kepada_Petani'
            });
var format_TR6_Pemulihan_dan_Revitalisasi_fungsi_sawah_19 = new ol.format.GeoJSON();
var features_TR6_Pemulihan_dan_Revitalisasi_fungsi_sawah_19 = format_TR6_Pemulihan_dan_Revitalisasi_fungsi_sawah_19.readFeatures(json_TR6_Pemulihan_dan_Revitalisasi_fungsi_sawah_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TR6_Pemulihan_dan_Revitalisasi_fungsi_sawah_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TR6_Pemulihan_dan_Revitalisasi_fungsi_sawah_19.addFeatures(features_TR6_Pemulihan_dan_Revitalisasi_fungsi_sawah_19);
var lyr_TR6_Pemulihan_dan_Revitalisasi_fungsi_sawah_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TR6_Pemulihan_dan_Revitalisasi_fungsi_sawah_19, 
                style: style_TR6_Pemulihan_dan_Revitalisasi_fungsi_sawah_19,
                interactive: true,
                title: '<img src="styles/legend/TR6_Pemulihan_dan_Revitalisasi_fungsi_sawah_19.png" /> TR6_Pemulihan_dan_Revitalisasi_fungsi_sawah'
            });
var format_TR5_Penertiban_Sanksi_20 = new ol.format.GeoJSON();
var features_TR5_Penertiban_Sanksi_20 = format_TR5_Penertiban_Sanksi_20.readFeatures(json_TR5_Penertiban_Sanksi_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TR5_Penertiban_Sanksi_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TR5_Penertiban_Sanksi_20.addFeatures(features_TR5_Penertiban_Sanksi_20);
var lyr_TR5_Penertiban_Sanksi_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TR5_Penertiban_Sanksi_20, 
                style: style_TR5_Penertiban_Sanksi_20,
                interactive: true,
                title: '<img src="styles/legend/TR5_Penertiban_Sanksi_20.png" /> TR5_Penertiban_Sanksi'
            });
var format_TR4_Audit_LSD_21 = new ol.format.GeoJSON();
var features_TR4_Audit_LSD_21 = format_TR4_Audit_LSD_21.readFeatures(json_TR4_Audit_LSD_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TR4_Audit_LSD_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TR4_Audit_LSD_21.addFeatures(features_TR4_Audit_LSD_21);
var lyr_TR4_Audit_LSD_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TR4_Audit_LSD_21, 
                style: style_TR4_Audit_LSD_21,
                interactive: true,
                title: '<img src="styles/legend/TR4_Audit_LSD_21.png" /> TR4_Audit_LSD'
            });
var format_TR3_Monitoring_dan_Evaluasi_22 = new ol.format.GeoJSON();
var features_TR3_Monitoring_dan_Evaluasi_22 = format_TR3_Monitoring_dan_Evaluasi_22.readFeatures(json_TR3_Monitoring_dan_Evaluasi_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TR3_Monitoring_dan_Evaluasi_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TR3_Monitoring_dan_Evaluasi_22.addFeatures(features_TR3_Monitoring_dan_Evaluasi_22);
var lyr_TR3_Monitoring_dan_Evaluasi_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TR3_Monitoring_dan_Evaluasi_22, 
                style: style_TR3_Monitoring_dan_Evaluasi_22,
                interactive: true,
                title: '<img src="styles/legend/TR3_Monitoring_dan_Evaluasi_22.png" /> TR3_Monitoring_dan_Evaluasi'
            });
var format_TR2_Peraturan_Zonasi_dalam_penerapan_overlay_zone_dan_spot_zoning_23 = new ol.format.GeoJSON();
var features_TR2_Peraturan_Zonasi_dalam_penerapan_overlay_zone_dan_spot_zoning_23 = format_TR2_Peraturan_Zonasi_dalam_penerapan_overlay_zone_dan_spot_zoning_23.readFeatures(json_TR2_Peraturan_Zonasi_dalam_penerapan_overlay_zone_dan_spot_zoning_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TR2_Peraturan_Zonasi_dalam_penerapan_overlay_zone_dan_spot_zoning_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TR2_Peraturan_Zonasi_dalam_penerapan_overlay_zone_dan_spot_zoning_23.addFeatures(features_TR2_Peraturan_Zonasi_dalam_penerapan_overlay_zone_dan_spot_zoning_23);
var lyr_TR2_Peraturan_Zonasi_dalam_penerapan_overlay_zone_dan_spot_zoning_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TR2_Peraturan_Zonasi_dalam_penerapan_overlay_zone_dan_spot_zoning_23, 
                style: style_TR2_Peraturan_Zonasi_dalam_penerapan_overlay_zone_dan_spot_zoning_23,
                interactive: true,
                title: '<img src="styles/legend/TR2_Peraturan_Zonasi_dalam_penerapan_overlay_zone_dan_spot_zoning_23.png" /> TR2_Peraturan_Zonasi_dalam_penerapan_overlay_zone_dan_spot_zoning'
            });
var format_TR1_Peninjauan_Kembali_RTR_24 = new ol.format.GeoJSON();
var features_TR1_Peninjauan_Kembali_RTR_24 = format_TR1_Peninjauan_Kembali_RTR_24.readFeatures(json_TR1_Peninjauan_Kembali_RTR_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TR1_Peninjauan_Kembali_RTR_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TR1_Peninjauan_Kembali_RTR_24.addFeatures(features_TR1_Peninjauan_Kembali_RTR_24);
var lyr_TR1_Peninjauan_Kembali_RTR_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TR1_Peninjauan_Kembali_RTR_24, 
                style: style_TR1_Peninjauan_Kembali_RTR_24,
                interactive: true,
                title: '<img src="styles/legend/TR1_Peninjauan_Kembali_RTR_24.png" /> TR1_Peninjauan_Kembali_RTR'
            });
var format_NILAITAMBAH_25 = new ol.format.GeoJSON();
var features_NILAITAMBAH_25 = format_NILAITAMBAH_25.readFeatures(json_NILAITAMBAH_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NILAITAMBAH_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NILAITAMBAH_25.addFeatures(features_NILAITAMBAH_25);
var lyr_NILAITAMBAH_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NILAITAMBAH_25, 
                style: style_NILAITAMBAH_25,
                interactive: true,
    title: 'NILAI TAMBAH<br />\
    <img src="styles/legend/NILAITAMBAH_25_0.png" /> Rendah<br />\
    <img src="styles/legend/NILAITAMBAH_25_1.png" /> Sedang<br />\
    <img src="styles/legend/NILAITAMBAH_25_2.png" /> Tinggi<br />'
        });
var format_TINGKATKESULITAN_26 = new ol.format.GeoJSON();
var features_TINGKATKESULITAN_26 = format_TINGKATKESULITAN_26.readFeatures(json_TINGKATKESULITAN_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TINGKATKESULITAN_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TINGKATKESULITAN_26.addFeatures(features_TINGKATKESULITAN_26);
var lyr_TINGKATKESULITAN_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TINGKATKESULITAN_26, 
                style: style_TINGKATKESULITAN_26,
                interactive: true,
    title: 'TINGKAT KESULITAN<br />\
    <img src="styles/legend/TINGKATKESULITAN_26_0.png" /> Rendah<br />\
    <img src="styles/legend/TINGKATKESULITAN_26_1.png" /> Sedang<br />\
    <img src="styles/legend/TINGKATKESULITAN_26_2.png" /> Tinggi<br />'
        });
var format_KETERANCAMAN_27 = new ol.format.GeoJSON();
var features_KETERANCAMAN_27 = format_KETERANCAMAN_27.readFeatures(json_KETERANCAMAN_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KETERANCAMAN_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KETERANCAMAN_27.addFeatures(features_KETERANCAMAN_27);
var lyr_KETERANCAMAN_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KETERANCAMAN_27, 
                style: style_KETERANCAMAN_27,
                interactive: true,
    title: 'KETERANCAMAN<br />\
    <img src="styles/legend/KETERANCAMAN_27_0.png" /> Rendah<br />\
    <img src="styles/legend/KETERANCAMAN_27_1.png" /> Sedang<br />\
    <img src="styles/legend/KETERANCAMAN_27_2.png" /> Tinggi<br />'
        });
var format_LSD_TERDAPAT_BANGUNAN_28 = new ol.format.GeoJSON();
var features_LSD_TERDAPAT_BANGUNAN_28 = format_LSD_TERDAPAT_BANGUNAN_28.readFeatures(json_LSD_TERDAPAT_BANGUNAN_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LSD_TERDAPAT_BANGUNAN_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LSD_TERDAPAT_BANGUNAN_28.addFeatures(features_LSD_TERDAPAT_BANGUNAN_28);
var lyr_LSD_TERDAPAT_BANGUNAN_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LSD_TERDAPAT_BANGUNAN_28, 
                style: style_LSD_TERDAPAT_BANGUNAN_28,
                interactive: true,
                title: '<img src="styles/legend/LSD_TERDAPAT_BANGUNAN_28.png" /> LSD_TERDAPAT_BANGUNAN'
            });

lyr_OpenStreetMap_0.setVisible(false);lyr_google_1.setVisible(true);lyr_KARAKTERISTIK_2.setVisible(true);lyr_PRIORITAS_TITIK_3.setVisible(false);lyr_PT2_Asuransi_pertanian_4.setVisible(false);lyr_PT1_Bantuan_usaha_pertanian_5.setVisible(false);lyr_KP2_Kerja_sama_pengelolaan_6.setVisible(false);lyr_KP3_Peningkatan_Kapasitas_7.setVisible(false);lyr_KP1_Sosialisasi_dan_Informasi_8.setVisible(false);lyr_TN5_Pengurangan_PBB_9.setVisible(false);lyr_TN4_Sertifikasi_lahan_sawah_10.setVisible(false);lyr_TN3_Pembelian_Hak_Membangun_11.setVisible(false);lyr_TN2_Transfer_Hak_MembangunTransfer_of_Development_Right_12.setVisible(false);lyr_TN1_Pembelian_dan_pengalihan_hak_sawah_oleh_pemerintah_13.setVisible(false);lyr_TR11_Disinsentif_Kegiatan_Pengganggu_di_Sekitar_LSD_14.setVisible(false);lyr_TR10_Disinsentif_Kegiatan_Pengganggu_di_dalam_LSD_15.setVisible(false);lyr_TR9_Insentif_Bantuan_pasarana_infrastruktur_pertanian_16.setVisible(false);lyr_TR8_Insentif_imbalan_17.setVisible(false);lyr_TR7_Insentif_Penghargaan_kepada_Petani_18.setVisible(false);lyr_TR6_Pemulihan_dan_Revitalisasi_fungsi_sawah_19.setVisible(false);lyr_TR5_Penertiban_Sanksi_20.setVisible(false);lyr_TR4_Audit_LSD_21.setVisible(false);lyr_TR3_Monitoring_dan_Evaluasi_22.setVisible(false);lyr_TR2_Peraturan_Zonasi_dalam_penerapan_overlay_zone_dan_spot_zoning_23.setVisible(false);lyr_TR1_Peninjauan_Kembali_RTR_24.setVisible(false);lyr_NILAITAMBAH_25.setVisible(false);lyr_TINGKATKESULITAN_26.setVisible(false);lyr_KETERANCAMAN_27.setVisible(false);lyr_LSD_TERDAPAT_BANGUNAN_28.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_google_1,lyr_KARAKTERISTIK_2,lyr_PRIORITAS_TITIK_3,lyr_PT2_Asuransi_pertanian_4,lyr_PT1_Bantuan_usaha_pertanian_5,lyr_KP2_Kerja_sama_pengelolaan_6,lyr_KP3_Peningkatan_Kapasitas_7,lyr_KP1_Sosialisasi_dan_Informasi_8,lyr_TN5_Pengurangan_PBB_9,lyr_TN4_Sertifikasi_lahan_sawah_10,lyr_TN3_Pembelian_Hak_Membangun_11,lyr_TN2_Transfer_Hak_MembangunTransfer_of_Development_Right_12,lyr_TN1_Pembelian_dan_pengalihan_hak_sawah_oleh_pemerintah_13,lyr_TR11_Disinsentif_Kegiatan_Pengganggu_di_Sekitar_LSD_14,lyr_TR10_Disinsentif_Kegiatan_Pengganggu_di_dalam_LSD_15,lyr_TR9_Insentif_Bantuan_pasarana_infrastruktur_pertanian_16,lyr_TR8_Insentif_imbalan_17,lyr_TR7_Insentif_Penghargaan_kepada_Petani_18,lyr_TR6_Pemulihan_dan_Revitalisasi_fungsi_sawah_19,lyr_TR5_Penertiban_Sanksi_20,lyr_TR4_Audit_LSD_21,lyr_TR3_Monitoring_dan_Evaluasi_22,lyr_TR2_Peraturan_Zonasi_dalam_penerapan_overlay_zone_dan_spot_zoning_23,lyr_TR1_Peninjauan_Kembali_RTR_24,lyr_NILAITAMBAH_25,lyr_TINGKATKESULITAN_26,lyr_KETERANCAMAN_27,lyr_LSD_TERDAPAT_BANGUNAN_28];
lyr_KARAKTERISTIK_2.set('fieldAliases', {'wadmkk': 'kabupaten', 'wadmpr': 'Provinsi', 'luas_ha': 'Luas (Ha)', 'ket': 'LSD', 'kode_sawah': 'kode Sawah', 'Kewenangan': 'Kewenangan Daerah Irigasi', 'Irigasi_09': 'jenis Sawah', 'Prsn_pmuki': 'Persentase Lahan Terbangun', 'sum_fasos': 'Jumlah Fasilitas', 'JALAN_AKSE': 'Jalan Disekitar Sawah', 'Prsn_AFLT': 'Trend Alihfungsi lahan disekitar sawah selama 5 tahun', 'BBT_GANGGU': 'Skor Gangguan', 'BBT_RENTAN': 'Skor Kerentanan', 'BBT_ANCAMA': 'Skor Keterancaman', 'T_KETERANC': 'Tingkat Keterancaman', 'KESUBURAN': 'kesuburan Lahan', 'WET__200MM': 'Bulan Basah', 'KET_CH': 'Curah Hujan', 'BANJIR': 'Rawan Banjir', 'LONGSOR': 'Rawan Longsor', 'KEKERINGAN': 'Rawan Kekeringan', 'KLS_PROD': 'Produktivitas', 'KLS_LERENG': 'Lereng', 'NT_FISIK': 'KATEGORI NILAI TAMBAH FISIK', 'R811D': 'Jumlah Poktan', 'JML_BANTU': 'Jumlah Bantuan', 'TK_TANI': 'Jumlah Petani', 'POKTAN': 'Keberadaan Poktan', 'PENGHASILN': 'Jenis Penghasilan', 'BANTUAN': 'Bantuan', 'KLS_TANI': 'Persentase Petani/Penduduk', 'NT_SOSIAL': 'SKOR NILAI TAMBAH SOSIAL', 'SKOR_NT': 'SKOR NILAI TAMBAH', 'OUTPUT_NT': 'TINGKAT NILAI TAMBAH', 'KESULITAN': 'TINGKAT KESULITAN', 'bth_pengen': 'bth_pengen', 'RTRW': 'RTRW', 'KLAS_RTRW': 'KLAS_RTRW', 'ins2': 'TIPOLOGI', 'TR1': 'INSTRUMENT TATA RUANG 1', 'TR2': 'INSTRUMENT TATA RUANG 2', 'TR3': 'INSTRUMENT TATA RUANG 3', 'TR4': 'INSTRUMENT TATA RUANG 4', 'TR5': 'INSTRUMENT TATA RUANG 5', 'TR6': 'INSTRUMENT TATA RUANG 6', 'TR7': 'INSTRUMENT TATA RUANG 7', 'TR8': 'INSTRUMENT TATA RUANG 8', 'TR9': 'INSTRUMENT TATA RUANG 9', 'TR10': 'INSTRUMENT TATA RUANG 10', 'TR11': 'INSTRUMENT TATA RUANG 11', 'TN1': 'INSTRUMENT PERTANAHAN DAN MANAJEMEN LAHAN 1', 'TN2': 'INSTRUMENT PERTANAHAN DAN MANAJEMEN LAHAN 2', 'TN3': 'INSTRUMENT PERTANAHAN DAN MANAJEMEN LAHAN 3', 'TN4': 'INSTRUMENT PERTANAHAN DAN MANAJEMEN LAHAN 4', 'TN5': 'INSTRUMENT PERTANAHAN DAN MANAJEMEN LAHAN 5', 'KP1': 'INSTRUMENT KELEMBAGAAN DAN PENGELOLAAN 1', 'KP2': 'INSTRUMENT KELEMBAGAAN DAN PENGELOLAAN 2', 'KP3': 'INSTRUMENT KELEMBAGAAN DAN PENGELOLAAN 3', 'PT1': 'INSTRUMENT PERTANIAN 1', 'PT2': 'INSTRUMENT PERTANIAN 2', });
lyr_PRIORITAS_TITIK_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'kode_sawah': 'kode_sawah', 'ORIG_FID': 'ORIG_FID', 'FOTO': 'FOTO', });
lyr_PT2_Asuransi_pertanian_4.set('fieldAliases', {'PT2': 'PT2', });
lyr_PT1_Bantuan_usaha_pertanian_5.set('fieldAliases', {'PT1': 'PT1', });
lyr_KP2_Kerja_sama_pengelolaan_6.set('fieldAliases', {'KP2': 'KP2', });
lyr_KP3_Peningkatan_Kapasitas_7.set('fieldAliases', {'KP3': 'KP3', });
lyr_KP1_Sosialisasi_dan_Informasi_8.set('fieldAliases', {'KP1': 'KP1', });
lyr_TN5_Pengurangan_PBB_9.set('fieldAliases', {'TN5': 'TN5', });
lyr_TN4_Sertifikasi_lahan_sawah_10.set('fieldAliases', {'TN4': 'TN4', });
lyr_TN3_Pembelian_Hak_Membangun_11.set('fieldAliases', {'TN3': 'TN3', });
lyr_TN2_Transfer_Hak_MembangunTransfer_of_Development_Right_12.set('fieldAliases', {'TN2': 'TN2', });
lyr_TN1_Pembelian_dan_pengalihan_hak_sawah_oleh_pemerintah_13.set('fieldAliases', {'TN1': 'TN1', });
lyr_TR11_Disinsentif_Kegiatan_Pengganggu_di_Sekitar_LSD_14.set('fieldAliases', {'TR11': 'TR11', });
lyr_TR10_Disinsentif_Kegiatan_Pengganggu_di_dalam_LSD_15.set('fieldAliases', {'TR10': 'TR10', });
lyr_TR9_Insentif_Bantuan_pasarana_infrastruktur_pertanian_16.set('fieldAliases', {'TR9': 'TR9', });
lyr_TR8_Insentif_imbalan_17.set('fieldAliases', {'TR8': 'TR8', });
lyr_TR7_Insentif_Penghargaan_kepada_Petani_18.set('fieldAliases', {'TR7': 'TR7', });
lyr_TR6_Pemulihan_dan_Revitalisasi_fungsi_sawah_19.set('fieldAliases', {'TR6': 'TR6', });
lyr_TR5_Penertiban_Sanksi_20.set('fieldAliases', {'TR5': 'TR5', });
lyr_TR4_Audit_LSD_21.set('fieldAliases', {'TR4': 'TR4', });
lyr_TR3_Monitoring_dan_Evaluasi_22.set('fieldAliases', {'TR3': 'TR3', });
lyr_TR2_Peraturan_Zonasi_dalam_penerapan_overlay_zone_dan_spot_zoning_23.set('fieldAliases', {'TR2': 'TR2', });
lyr_TR1_Peninjauan_Kembali_RTR_24.set('fieldAliases', {'TR1': 'TR1', });
lyr_NILAITAMBAH_25.set('fieldAliases', {'OUTPUT_NT': 'OUTPUT_NT', });
lyr_TINGKATKESULITAN_26.set('fieldAliases', {'KESULITAN': 'KESULITAN', });
lyr_KETERANCAMAN_27.set('fieldAliases', {'T_KETERANC': 'T_KETERANC', });
lyr_LSD_TERDAPAT_BANGUNAN_28.set('fieldAliases', {'provinsi': 'provinsi', 'kabkot': 'kabkot', 'kecamatan': 'kecamatan', 'desa': 'desa', 'Alihfungsi': 'Alihfungsi', 'Prsn_pmuki': 'Persentase Lahan Terbangun', });
lyr_KARAKTERISTIK_2.set('fieldImages', {'wadmkk': 'TextEdit', 'wadmpr': 'TextEdit', 'luas_ha': 'TextEdit', 'ket': 'TextEdit', 'kode_sawah': 'TextEdit', 'Kewenangan': 'TextEdit', 'Irigasi_09': 'TextEdit', 'Prsn_pmuki': 'TextEdit', 'sum_fasos': 'TextEdit', 'JALAN_AKSE': 'TextEdit', 'Prsn_AFLT': 'TextEdit', 'BBT_GANGGU': 'TextEdit', 'BBT_RENTAN': 'TextEdit', 'BBT_ANCAMA': 'TextEdit', 'T_KETERANC': 'TextEdit', 'KESUBURAN': 'TextEdit', 'WET__200MM': 'TextEdit', 'KET_CH': 'TextEdit', 'BANJIR': 'TextEdit', 'LONGSOR': 'TextEdit', 'KEKERINGAN': 'TextEdit', 'KLS_PROD': 'TextEdit', 'KLS_LERENG': 'TextEdit', 'NT_FISIK': 'TextEdit', 'R811D': 'TextEdit', 'JML_BANTU': 'TextEdit', 'TK_TANI': 'TextEdit', 'POKTAN': 'TextEdit', 'PENGHASILN': 'TextEdit', 'BANTUAN': 'TextEdit', 'KLS_TANI': 'TextEdit', 'NT_SOSIAL': 'TextEdit', 'SKOR_NT': 'TextEdit', 'OUTPUT_NT': 'TextEdit', 'KESULITAN': 'TextEdit', 'bth_pengen': 'TextEdit', 'RTRW': 'TextEdit', 'KLAS_RTRW': 'TextEdit', 'ins2': 'TextEdit', 'TR1': 'TextEdit', 'TR2': 'TextEdit', 'TR3': 'TextEdit', 'TR4': 'TextEdit', 'TR5': 'TextEdit', 'TR6': 'TextEdit', 'TR7': 'TextEdit', 'TR8': 'TextEdit', 'TR9': 'TextEdit', 'TR10': 'TextEdit', 'TR11': 'TextEdit', 'TN1': 'TextEdit', 'TN2': 'TextEdit', 'TN3': 'TextEdit', 'TN4': 'TextEdit', 'TN5': 'TextEdit', 'KP1': 'TextEdit', 'KP2': 'TextEdit', 'KP3': 'TextEdit', 'PT1': 'TextEdit', 'PT2': 'TextEdit', });
lyr_PRIORITAS_TITIK_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'kode_sawah': 'TextEdit', 'ORIG_FID': 'TextEdit', 'FOTO': 'ExternalResource', });
lyr_PT2_Asuransi_pertanian_4.set('fieldImages', {'PT2': '', });
lyr_PT1_Bantuan_usaha_pertanian_5.set('fieldImages', {'PT1': '', });
lyr_KP2_Kerja_sama_pengelolaan_6.set('fieldImages', {'KP2': '', });
lyr_KP3_Peningkatan_Kapasitas_7.set('fieldImages', {'KP3': '', });
lyr_KP1_Sosialisasi_dan_Informasi_8.set('fieldImages', {'KP1': '', });
lyr_TN5_Pengurangan_PBB_9.set('fieldImages', {'TN5': '', });
lyr_TN4_Sertifikasi_lahan_sawah_10.set('fieldImages', {'TN4': '', });
lyr_TN3_Pembelian_Hak_Membangun_11.set('fieldImages', {'TN3': 'TextEdit', });
lyr_TN2_Transfer_Hak_MembangunTransfer_of_Development_Right_12.set('fieldImages', {'TN2': 'TextEdit', });
lyr_TN1_Pembelian_dan_pengalihan_hak_sawah_oleh_pemerintah_13.set('fieldImages', {'TN1': '', });
lyr_TR11_Disinsentif_Kegiatan_Pengganggu_di_Sekitar_LSD_14.set('fieldImages', {'TR11': '', });
lyr_TR10_Disinsentif_Kegiatan_Pengganggu_di_dalam_LSD_15.set('fieldImages', {'TR10': '', });
lyr_TR9_Insentif_Bantuan_pasarana_infrastruktur_pertanian_16.set('fieldImages', {'TR9': '', });
lyr_TR8_Insentif_imbalan_17.set('fieldImages', {'TR8': 'TextEdit', });
lyr_TR7_Insentif_Penghargaan_kepada_Petani_18.set('fieldImages', {'TR7': 'TextEdit', });
lyr_TR6_Pemulihan_dan_Revitalisasi_fungsi_sawah_19.set('fieldImages', {'TR6': '', });
lyr_TR5_Penertiban_Sanksi_20.set('fieldImages', {'TR5': '', });
lyr_TR4_Audit_LSD_21.set('fieldImages', {'TR4': '', });
lyr_TR3_Monitoring_dan_Evaluasi_22.set('fieldImages', {'TR3': '', });
lyr_TR2_Peraturan_Zonasi_dalam_penerapan_overlay_zone_dan_spot_zoning_23.set('fieldImages', {'TR2': '', });
lyr_TR1_Peninjauan_Kembali_RTR_24.set('fieldImages', {'TR1': 'TextEdit', });
lyr_NILAITAMBAH_25.set('fieldImages', {'OUTPUT_NT': 'TextEdit', });
lyr_TINGKATKESULITAN_26.set('fieldImages', {'KESULITAN': 'TextEdit', });
lyr_KETERANCAMAN_27.set('fieldImages', {'T_KETERANC': 'TextEdit', });
lyr_LSD_TERDAPAT_BANGUNAN_28.set('fieldImages', {'provinsi': 'TextEdit', 'kabkot': 'TextEdit', 'kecamatan': 'TextEdit', 'desa': 'TextEdit', 'Alihfungsi': 'TextEdit', 'Prsn_pmuki': 'TextEdit', });
lyr_KARAKTERISTIK_2.set('fieldLabels', {'wadmkk': 'inline label', 'wadmpr': 'inline label', 'luas_ha': 'inline label', 'ket': 'inline label', 'kode_sawah': 'inline label', 'Kewenangan': 'inline label', 'Irigasi_09': 'inline label', 'Prsn_pmuki': 'inline label', 'sum_fasos': 'inline label', 'JALAN_AKSE': 'inline label', 'Prsn_AFLT': 'inline label', 'BBT_GANGGU': 'inline label', 'BBT_RENTAN': 'inline label', 'BBT_ANCAMA': 'inline label', 'T_KETERANC': 'inline label', 'KESUBURAN': 'inline label', 'WET__200MM': 'inline label', 'KET_CH': 'inline label', 'BANJIR': 'inline label', 'LONGSOR': 'inline label', 'KEKERINGAN': 'inline label', 'KLS_PROD': 'inline label', 'KLS_LERENG': 'inline label', 'NT_FISIK': 'inline label', 'R811D': 'inline label', 'JML_BANTU': 'inline label', 'TK_TANI': 'inline label', 'POKTAN': 'inline label', 'PENGHASILN': 'inline label', 'BANTUAN': 'inline label', 'KLS_TANI': 'inline label', 'NT_SOSIAL': 'inline label', 'SKOR_NT': 'inline label', 'OUTPUT_NT': 'inline label', 'KESULITAN': 'inline label', 'bth_pengen': 'inline label', 'RTRW': 'inline label', 'KLAS_RTRW': 'inline label', 'ins2': 'inline label', 'TR1': 'inline label', 'TR2': 'inline label', 'TR3': 'inline label', 'TR4': 'inline label', 'TR5': 'inline label', 'TR6': 'inline label', 'TR7': 'inline label', 'TR8': 'inline label', 'TR9': 'inline label', 'TR10': 'inline label', 'TR11': 'inline label', 'TN1': 'inline label', 'TN2': 'inline label', 'TN3': 'inline label', 'TN4': 'inline label', 'TN5': 'inline label', 'KP1': 'inline label', 'KP2': 'inline label', 'KP3': 'inline label', 'PT1': 'inline label', 'PT2': 'inline label', });
lyr_PRIORITAS_TITIK_3.set('fieldLabels', {'OBJECTID': 'no label', 'kode_sawah': 'no label', 'ORIG_FID': 'no label', 'FOTO': 'no label', });
lyr_PT2_Asuransi_pertanian_4.set('fieldLabels', {'PT2': 'inline label', });
lyr_PT1_Bantuan_usaha_pertanian_5.set('fieldLabels', {'PT1': 'inline label', });
lyr_KP2_Kerja_sama_pengelolaan_6.set('fieldLabels', {'KP2': 'inline label', });
lyr_KP3_Peningkatan_Kapasitas_7.set('fieldLabels', {'KP3': 'inline label', });
lyr_KP1_Sosialisasi_dan_Informasi_8.set('fieldLabels', {'KP1': 'inline label', });
lyr_TN5_Pengurangan_PBB_9.set('fieldLabels', {'TN5': 'inline label', });
lyr_TN4_Sertifikasi_lahan_sawah_10.set('fieldLabels', {'TN4': 'inline label', });
lyr_TN3_Pembelian_Hak_Membangun_11.set('fieldLabels', {'TN3': 'inline label', });
lyr_TN2_Transfer_Hak_MembangunTransfer_of_Development_Right_12.set('fieldLabels', {'TN2': 'inline label', });
lyr_TN1_Pembelian_dan_pengalihan_hak_sawah_oleh_pemerintah_13.set('fieldLabels', {'TN1': 'inline label', });
lyr_TR11_Disinsentif_Kegiatan_Pengganggu_di_Sekitar_LSD_14.set('fieldLabels', {'TR11': 'inline label', });
lyr_TR10_Disinsentif_Kegiatan_Pengganggu_di_dalam_LSD_15.set('fieldLabels', {'TR10': 'inline label', });
lyr_TR9_Insentif_Bantuan_pasarana_infrastruktur_pertanian_16.set('fieldLabels', {'TR9': 'inline label', });
lyr_TR8_Insentif_imbalan_17.set('fieldLabels', {'TR8': 'inline label', });
lyr_TR7_Insentif_Penghargaan_kepada_Petani_18.set('fieldLabels', {'TR7': 'inline label', });
lyr_TR6_Pemulihan_dan_Revitalisasi_fungsi_sawah_19.set('fieldLabels', {'TR6': 'inline label', });
lyr_TR5_Penertiban_Sanksi_20.set('fieldLabels', {'TR5': 'inline label', });
lyr_TR4_Audit_LSD_21.set('fieldLabels', {'TR4': 'inline label', });
lyr_TR3_Monitoring_dan_Evaluasi_22.set('fieldLabels', {'TR3': 'inline label', });
lyr_TR2_Peraturan_Zonasi_dalam_penerapan_overlay_zone_dan_spot_zoning_23.set('fieldLabels', {'TR2': 'inline label', });
lyr_TR1_Peninjauan_Kembali_RTR_24.set('fieldLabels', {'TR1': 'inline label', });
lyr_NILAITAMBAH_25.set('fieldLabels', {'OUTPUT_NT': 'no label', });
lyr_TINGKATKESULITAN_26.set('fieldLabels', {'KESULITAN': 'no label', });
lyr_KETERANCAMAN_27.set('fieldLabels', {'T_KETERANC': 'no label', });
lyr_LSD_TERDAPAT_BANGUNAN_28.set('fieldLabels', {'provinsi': 'inline label', 'kabkot': 'inline label', 'kecamatan': 'inline label', 'desa': 'inline label', 'Alihfungsi': 'inline label', 'Prsn_pmuki': 'inline label', });
lyr_LSD_TERDAPAT_BANGUNAN_28.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});