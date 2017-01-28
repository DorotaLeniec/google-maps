var regions = [
  {
    name: 'dolnośląskie',
    id: 1
  },
  {
    name: 'kujawsko-pomorskie',
    id: 2
  },
  {
    name: 'lubelskie',
    id: 3
  },
  {
    name: 'lubuskie',
    id: 4
  },
  {
    name: 'łódzkie',
    id: 5
  },
  {
    name: 'małopolskie',
    id: 6
  },
  {
    name: 'mazowieckie',
    id: 7
  },
  {
    name: 'opolskie',
    id: 8
  },
  {
    name: 'podkarpackie',
    id: 9
  },
  {
    name: 'podlaskie',
    id: 10
  },
  {
    name: 'pomorskie',
    id: 11
  },
  {
    name: 'śląskie',
    id: 12
  },
  {
    name: 'świętokrzyskie',
    id: 13
  },

  {
    name: 'warmińsko-mazurskie',
    id: 14
  },

  {
    name: 'wielkopolskie',
    id: 15
  }
];

var towns = [
  {
    name: 'Wrocław',
    regionId: 1
  },
  {
    name: 'Wrocław-2',
    regionId: 1
  },
  {
    name: 'Wrocław-3',
    regionId: 1
  },
  {
    name: 'Bydgoszcz',
    regionId: 2
  },
  {
    name: 'Toruń',
    regionId: 2
  }, {
    name: 'Kutno',
    regionId: 2
  },
  {
    name: 'Lublin',
    regionId: 3
  }, {
    name: 'Lublin-2',
    regionId: 3
  },
  {
    name: 'Lublin-3',
    regionId: 3
  },
  {
    name: 'Gorzów Wielkopolski',
    regionId: 4
  },
  {
    name: 'Zielona Góra',
    regionId: 4
  },
  {
    name: 'Łódź',
    regionId: 5
  },

  {
    name: 'Łódź-2',
    regionId: 5
  },

  {
    name: 'Kraków',
    regionId: 6
  },

  {
    name: 'Kraków-2',
    regionId: 6
  },

  {
    name: 'Warszawa',
    regionId: 7
  },

  {
    name: 'Warszawka',
    regionId: 7
  },

  {
    name: 'Opole',
    regionId: 8
  },

  {
    name: 'Opole-2',
    regionId: 8
  },
  {
    name: 'Rzeszów',
    regionId: 9
  },
  {
    name: 'Rzeszów-2',
    regionId: 9
  },

  {
    name: 'Białystok',
    regionId: 10
  },
  {
    name: 'Białystok-2',
    regionId: 10
  },
  {
    name: 'Gdańsk',
    regionId: 11
  },
  {
    name: 'Sopot',
    regionId: 11
  },
  {
    name: 'Gdynia',
    regionId: 11
  },
  {
    name: 'Katowice',
    regionId: 12
  },
  {
    name: 'Katowice-2',
    regionId: 12
  },
  {
    name: 'Kielce',
    regionId: 13
  },
  {
    name: 'Kielce-2',
    regionId: 13
  },
  {
    name: 'Olsztyn',
    regionId: 14
  },

  {
    name: 'Olsztynek',
    regionId: 14
  },

  {
    name: 'Poznań',
    regionId: 13
  },

  {
    name: 'Poznań-2',
    regionId: 13
  }
]


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


