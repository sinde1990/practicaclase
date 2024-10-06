window.onload = init;

function init(){
	const map = new ol.Map({	
		view: new ol.View ({
			center: ol.proj.transform([-78.4800,-0.1480], 'EPSG:4326', 'EPSG:3857' ),
			zoom: 13.9,
			minZoom: 10
			
		}),
		layers: [
			new ol.layer.Tile({
				source: new ol.source.OSM()
			})
		],
		target:"js-map"
	})
	
	const ortoIGM = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url:"https://www.geoportaligm.gob.ec/orto/wms?",
			params:{
				LAYERS: "quito 2019",
				FORMAT:"image/png",
				TRANSPARENT: true
			},
			attributions: '<a href=https://www.geoportaligm.gob.ec/portal/index.php/descarga-de-servicios-wms-del-igm/>IGM</a>'
			
			
			
		})
	})
	map.addLayer(ortoIGM);
	
		const recorridos = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url:"https://geoserver.idesinde.com:8443/geoserver/ows?",
			params:{
				LAYERS: "Lopez:Recorrido_manual",
				FORMAT:"image/png",
				TRANSPARENT: true
			},
			attributions: '<a href=https://www.geoportaligm.gob.ec/portal/index.php/descarga-de-servicios-wms-del-igm/>IGM</a>'
			
			
			
		})
	})
	map.addLayer(recorridos);
	
	
	
}