const mockedCurrentRanking = require("../data/current-ranking");
const mockedCurrentStandings = require("../data/current-standings");
const mockedRankingHistory = require("../data/ranking-history");
const mockedBetDetails = require("../data/bet-details");
const mockedRankingHistoryByUser = require("../data/ranking-history-by-user");

module.exports = [
    {
        id: 'get-current-ranking',
        url: '/v1/bet/ranking/current/',
        method: 'GET',
        variants: [
          {
            id: 'success',
            response: (req, res) => {
              res.status(200);
              res.send(mockedCurrentRanking);
            },
          },
        ],
      },
      {
        id: 'get-current-standings',
        url: '/v1/championship/standings/current/',
        method: 'GET',
        variants: [
          {
            id: 'success',
            response: (req, res) => {
              res.status(200);
              res.send(mockedCurrentStandings);
            },
          },
        ],
      },
      {
        id: 'get-ranking-history',
        url: '/v1/bet/ranking/history/',
        method: 'GET',
        variants: [
          {
            id: 'success',
            response: (req, res) => {
              res.status(200);
              res.send(mockedRankingHistory);
            },
          },
        ],
      },
      {
        id: 'get-bet-details',
        url: '/v1/bet/details/user/:userId/',
        method: 'GET',
        variants: [
          {
            id: 'success',
            response: (req, res) => {
              res.status(200);
              res.send(mockedBetDetails);
            },
          },
        ],
      },
      {
        id: 'get-ranking-history-by-user',
        url: '/v1/bet/ranking/history/:userId/',
        method: 'GET',
        variants: [
          {
            id: 'success',
            response: (req, res) => {
              res.status(200);
              res.send(mockedRankingHistoryByUser);
            },
          },
        ],
      },
  ];
