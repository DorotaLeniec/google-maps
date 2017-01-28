var $regionSelect = $('#region-input')
var $townSelect = $('#town-input')

regions.map(function (region) {
  $regionSelect.append('<option>' + region.name + '</option>')
})

towns.map(function (town) {
  $townSelect.append('<option>' + town.name + '</option>')
})

function selectRegion() {
  $townSelect.empty();
  var presentRegionName = $('#region-input').val();
  var presentRegion = regions.find(function (region) {
    return ( region.name === presentRegionName)
  })
  var presentTowns = towns.filter(function (town) {
    return (
      town.regionId === presentRegion.id
    )
  })
  presentTowns.map(function (town) {
    $townSelect.append('<option>' + town.name + '</option>')
  })
}


