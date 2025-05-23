export default function fnGetMonth(id, lang, params) {
  let monthIndo = [
    {
      id: 1,
      name: 'Januari',
      short: 'Jan',
    },
    {
      id: 2,
      name: 'Februari',
      short: 'Feb',
    },
    {
      id: 3,
      name: 'Maret',
      short: 'Mar',
    },
    {
      id: 4,
      name: 'April',
      short: 'Apr',
    },
    {
      id: 5,
      name: 'Mei',
      short: 'Mei',
    },
    {
      id: 6,
      name: 'Juni',
      short: 'Jun',
    },
    {
      id: 7,
      name: 'Juli',
      short: 'Jul',
    },
    {
      id: 8,
      name: 'Agustus',
      short: 'Agu',
    },
    {
      id: 9,
      name: 'September',
      short: 'Sep',
    },
    {
      id: 10,
      name: 'Oktober',
      short: 'Okt',
    },
    {
      id: 11,
      name: 'November',
      short: 'Nov',
    },
    {
      id: 12,
      name: 'Desember',
      short: 'Des',
    },
  ];

  let monthEng = [
    {
      id: 1,
      name: 'January',
      short: 'Jan',
    },
    {
      id: 2,
      name: 'February',
      short: 'Feb',
    },
    {
      id: 3,
      name: 'March',
      short: 'Mar',
    },
    {
      id: 4,
      name: 'April',
      short: 'Apr',
    },
    {
      id: 5,
      name: 'May',
      short: 'May',
    },
    {
      id: 6,
      name: 'June',
      short: 'Jun',
    },
    {
      id: 7,
      name: 'July',
      short: 'Jul',
    },
    {
      id: 8,
      name: 'August',
      short: 'Aug',
    },
    {
      id: 9,
      name: 'September',
      short: 'Sep',
    },
    {
      id: 10,
      name: 'October',
      short: 'Oct',
    },
    {
      id: 11,
      name: 'November',
      short: 'Nov',
    },
    {
      id: 12,
      name: 'December',
      short: 'Dec',
    },
  ];

  let month = lang === 'id' ? monthIndo : monthEng;
  let result = month.find(item => item.id === id);
  return result?.[params] ? result[params] : result.name;
}
