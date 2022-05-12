var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.3877539195534112,
        "pitch": -0.02776570731388084,
        "fov": 1.290348174345596
      },
      "linkHotspots": [
        {
          "yaw": -0.9045304815167103,
          "pitch": 0.029794888534008024,
          "rotation": 19.63495408493622,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.706319171995812,
          "pitch": -0.0011978666488108303,
          "title": "Welcome!",
          "text": "You're now at the Faculty of Engineering of the College of Design and Engineering!<br>"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.22819854311715382,
        "pitch": -0.20731273877332868,
        "fov": 1.290348174345596
      },
      "linkHotspots": [
        {
          "yaw": -1.7660161489160515,
          "pitch": -0.04166469535433848,
          "rotation": 10.210176124166829,
          "target": "0-along-engineering-drive-1"
        },
        {
          "yaw": -0.033067144851761654,
          "pitch": -0.014740394226965492,
          "rotation": 0.7853981633974483,
          "target": "2-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.237604396835744,
          "pitch": -0.6971970758695285,
          "title": "Corkscrew<br>",
          "text": "A scupture of sorts<br>"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.2100945577270643,
        "pitch": -0.10305754588829785,
        "fov": 1.290348174345596
      },
      "linkHotspots": [
        {
          "yaw": -2.7397882789578762,
          "pitch": 0.11199831604617927,
          "rotation": 11.780972450961727,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.31343997859232964,
          "pitch": -0.42231127768348387,
          "title": "Broccoli wall<br>",
          "text": "A nice study spot (:<br>"
        }
      ]
    }
  ],
  "name": "engin tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
