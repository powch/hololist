export const JP_GEN_0 = [
  "tokino_sora",
  "robocosan",
  "suisei_hosimati",
  "sakuramiko35",
  "AZKi_VDiVA",
];

export const JP_GEN_1 = [
  "yozoramel",
  "shirakamifubuki",
  "akaihaato",
  "akirosenthal",
  "natsuiromatsuri",
];

export const JP_GEN_2 = [
  "minatoaqua",
  "murasakishionch",
  "nakiriayame",
  "yuzukichococh",
  "oozorasubaru",
];

export const JP_GEN_GAMERS = ["ookamimio", "nekomataokayu", "inugamikorone"];

export const JP_GEN_3 = [
  "usadapekora",
  "uruharushia",
  "houshoumarine",
  "shiranuiflare",
  "shiroganenoel",
];

export const JP_GEN_4 = [
  "tokoyamitowa",
  "amanekanatach",
  "himemoriluna",
  "kiryucoco",
  "tsunomakiwatame",
];

export const JP_GEN_5 = [
  "yukihanalamy",
  "shishirobotan",
  "momosuzunene",
  "omarupolka",
];

export const JP_HOLOSTARS = [
  "miyabihanasaki",
  "kagamikirach",
  "kanadeizuru",
  "arurandeisu",
  "rikkaroid",
  "astelleda",
  "kishidotemma",
  "yukokuroberu",
  "kageyamashien",
  "aragamioga",
];

export const ID_GEN_1 = ["ayunda_risu", "moonahoshinova", "airaniiofifteen"];

export const ID_GEN_2 = ["pavoliareine", "anyamelfissa", "kureijiollie"];

export const EN_GEN_1 = [
  "takanashikiara",
  "ninomaeinanis",
  "moricalliope",
  "watsonameliaEN",
  "gawrgura",
];

export const JP_REGION_FILTER = {
  title: "JP",
  talents: [
    ...JP_GEN_0,
    ...JP_GEN_1,
    ...JP_GEN_2,
    ...JP_GEN_GAMERS,
    ...JP_GEN_3,
    ...JP_GEN_4,
    ...JP_GEN_5,
    ...JP_HOLOSTARS,
  ],
};

export const ID_REGION_FILTER = {
  title: "ID",
  talents: [...ID_GEN_1, ...ID_GEN_2],
};

export const EN_REGION_FILTER = {
  title: "EN",
  talents: [...EN_GEN_1],
};

export const JP_BRANCH_FILTER = [
  {
    title: "Generation 0",
    talents: JP_GEN_0,
  },
  {
    title: "Generation 1",
    talents: JP_GEN_1,
  },
  {
    title: "Generation 2",
    talents: JP_GEN_2,
  },
  {
    title: "Hololive Gamers",
    talents: JP_GEN_GAMERS,
  },
  {
    title: "Generation 3",
    talents: JP_GEN_3,
  },
  {
    title: "Generation 4",
    talents: JP_GEN_4,
  },
  {
    title: "Generation 5",
    talents: JP_GEN_5,
  },
];

export const ID_BRANCH_FILTER = [
  {
    title: "Generation 1",
    talents: ID_GEN_1,
  },
  {
    title: "Generation 2",
    talents: ID_GEN_2,
  },
];

export const EN_BRANCH_FILTER = [
  {
    title: "Generation 1",
    talents: EN_GEN_1,
  },
];
