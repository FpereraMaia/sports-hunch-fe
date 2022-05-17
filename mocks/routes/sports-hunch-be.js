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

const mockedUserResponse = [
	{
		"id" : 4,
		"name" : "felipepqm@gmail.com",
		"email" : "Felipe",
		"created_at" : "2022-04-09 02:40:33.683174000",
		"updated_at" : "2022-04-09 02:42:13.928268000"
	},
	{
		"id" : 14,
		"name" : "felipepqm@gmail.com",
		"email" : "teste maia",
		"created_at" : "2022-04-09 02:53:24.559117000",
		"updated_at" : "2022-04-09 02:56:11.928329000"
	},
	{
		"id" : 24,
		"name" : "Perera",
		"email" : "felipepqm@gmail.com",
		"created_at" : "2022-04-09 03:01:37.220118000",
		"updated_at" : "2022-04-09 03:13:44.600033000"
	},
	{
		"id" : 34,
		"name" : "Aaaa",
		"email" : "teste@teste.com",
		"created_at" : "2022-04-09 04:37:38.480318000",
		"updated_at" : "2022-04-09 06:31:16.403277000"
	},
	{
		"id" : 44,
		"name" : "Hugo Leon",
		"email" : "hugoleonruas@gmail.com",
		"created_at" : "2022-04-09 04:59:12.307783000",
		"updated_at" : "2022-04-09 04:59:12.307844000"
	},
	{
		"id" : 54,
		"name" : "Teste cel",
		"email" : "Testecel@vish.com",
		"created_at" : "2022-04-09 05:20:42.281697000",
		"updated_at" : "2022-04-09 05:20:42.281735000"
	},
	{
		"id" : 64,
		"name" : "Teste",
		"email" : "Aaaa@aaa.com",
		"created_at" : "2022-04-09 06:16:05.888983000",
		"updated_at" : "2022-04-09 06:16:05.889023000"
	},
	{
		"id" : 74,
		"name" : "Randolpho",
		"email" : "ranrandolpho@hotmail.com",
		"created_at" : "2022-04-09 10:32:45.820717000",
		"updated_at" : "2022-04-09 10:32:45.820775000"
	},
	{
		"id" : 84,
		"name" : "Anderson",
		"email" : "andersonzgabbardo@gmail.com",
		"created_at" : "2022-04-09 10:44:18.018808000",
		"updated_at" : "2022-04-09 10:44:18.018869000"
	},
	{
		"id" : 94,
		"name" : "Virgínia",
		"email" : "vivibraga2010@gmail.com",
		"created_at" : "2022-04-09 13:32:07.822777000",
		"updated_at" : "2022-04-09 13:32:07.822819000"
	},
	{
		"id" : 104,
		"name" : "Mateus",
		"email" : "mateusaugustosilva@outlook.com",
		"created_at" : "2022-04-09 13:35:54.428781000",
		"updated_at" : "2022-04-09 13:35:54.428842000"
	},
	{
		"id" : 114,
		"name" : "Raphael Martins",
		"email" : "raphaelpmartins7@hotmail.com",
		"created_at" : "2022-04-09 14:09:08.398619000",
		"updated_at" : "2022-04-09 14:09:08.398678000"
	},
	{
		"id" : 124,
		"name" : "Yan Suzano",
		"email" : "yan_suzano@outlook.com",
		"created_at" : "2022-04-09 15:41:54.055339000",
		"updated_at" : "2022-04-09 15:41:54.055390000"
	},
	{
		"id" : 134,
		"name" : "André Leopoldo",
		"email" : "andreleo88@gmail.com",
		"created_at" : "2022-04-09 15:57:13.220621000",
		"updated_at" : "2022-04-09 15:57:13.220667000"
	},
	{
		"id" : 144,
		"name" : "Diego Suzano",
		"email" : "diegosuzano@live.com",
		"created_at" : "2022-04-09 17:42:53.180600000",
		"updated_at" : "2022-04-09 17:42:53.180641000"
	},
	{
		"id" : 154,
		"name" : "Açucena",
		"email" : "acucenadrv@gmail.com",
		"created_at" : "2022-04-09 17:56:16.009878000",
		"updated_at" : "2022-04-09 17:56:16.009922000"
	},
	{
		"id" : 164,
		"name" : "Hugo Haran Marinho",
		"email" : "hugoharan@gmail.com",
		"created_at" : "2022-04-09 18:22:46.208135000",
		"updated_at" : "2022-04-09 18:22:46.208175000"
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
              res.status(200);
              res.send(req.body);
            },
          },
        ],
      },
      {
        id: 'get-users',
        url: '/api/users',
        method: 'GET',
        variants: [
          {
            id: 'success',
            response: (req, res) => {
              res.status(200);
              res.send(mockedUserResponse);
            },
          },
        ],
      },
  ];
