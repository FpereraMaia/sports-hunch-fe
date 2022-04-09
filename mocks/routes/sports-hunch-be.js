const mockedTeamsResponse =  [
        {
            "team_id": 33,
            "name": "América-MG",
            "abbreviation": "AMG",
            "crest": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999cac0b5cc.svg"
        },
        {
            "team_id": 185,
            "name": "Athletico-PR",
            "abbreviation": "CAP",
            "crest": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999e2864a27.svg"
        },
        {
            "team_id": 98,
            "name": "Atlético-GO",
            "abbreviation": "ACG",
            "crest": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999db078911.svg"
        },
        {
            "team_id": 30,
            "name": "Atlético-MG",
            "abbreviation": "CAM",
            "crest": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999ca6bfd30.svg"
        },
        {
            "team_id": 6,
            "name": "Avaí",
            "abbreviation": "AVA",
            "crest": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999c8488adb.svg"
        },
        {
            "team_id": 22,
            "name": "Botafogo",
            "abbreviation": "BOT",
            "crest": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999c9b06760.svg"
        },
        {
            "team_id": 64,
            "name": "Bragantino",
            "abbreviation": "BGT",
            "crest": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999d770dbb2.svg"
        },
        {
            "team_id": 105,
            "name": "Ceará",
            "abbreviation": "CEA",
            "crest": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999dba767ba.svg"
        },
        {
            "team_id": 65,
            "name": "Corinthians",
            "abbreviation": "COR",
            "crest": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999d7ab48fa.svg"
        },
        {
            "team_id": 84,
            "name": "Coritiba",
            "abbreviation": "CFC",
            "crest": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999d991e8b8.svg"
        },
        {
            "team_id": 204,
            "name": "Cuiabá",
            "abbreviation": "CUI",
            "crest": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999e4424264.svg"
        },
        {
            "team_id": 18,
            "name": "Flamengo",
            "abbreviation": "FLA",
            "crest": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999c95084cb.svg"
        },
        {
            "team_id": 26,
            "name": "Fluminense",
            "abbreviation": "FLU",
            "crest": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999ca0e01e3.svg"
        },
        {
            "team_id": 131,
            "name": "Fortaleza",
            "abbreviation": "FOR",
            "crest": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999ddaa261b.svg"
        },
        {
            "team_id": 115,
            "name": "Goiás",
            "abbreviation": "GOI",
            "crest": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999dc97b4e2.svg"
        },
        {
            "team_id": 44,
            "name": "Internacional",
            "abbreviation": "INT",
            "crest": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999cbb0b297.svg"
        },
        {
            "team_id": 43,
            "name": "Juventude",
            "abbreviation": "JUV",
            "crest": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999cb997a01.svg"
        },
        {
            "team_id": 56,
            "name": "Palmeiras",
            "abbreviation": "PAL",
            "crest": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999ccc90039.svg"
        },
        {
            "team_id": 63,
            "name": "Santos",
            "abbreviation": "SAN",
            "crest": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999d7525121.svg"
        },
        {
            "team_id": 57,
            "name": "São Paulo",
            "abbreviation": "SAO",
            "crest": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999ccdc1656.svg"
        }
    ];

module.exports = [
    {
        id: 'get-teams',
        url: '/api/teams',
        method: 'GET',
        variants: [
          {
            id: 'success',
            response: (req, res) => {
              res.status(200);
              res.send(mockedTeamsResponse);
            },
          },
        ],
      },
      {
        id: 'post-bets',
        url: '/api/bets',
        method: 'POST',
        variants: [
          {
            id: 'success',
            response: (req, res) => {
              req.body["id"] = 1;
              res.status(400);
              res.send(req.body);
            },
          },
        ],
      },
  ];
