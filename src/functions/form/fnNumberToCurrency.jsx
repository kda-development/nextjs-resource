export default function fnNumberCurrency(numb, decimal = false) {
  let result = '';
  if (numb) {
    if (numb?.toString().split('.')?.length >= 2) {
      result =
        numb
          .toString()
          .split('.')?.[0]
          ?.replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
        (numb.toString().split('.')?.[1]
          ? '.' +
            (numb.toString().split('.')?.[1] > 10
              ? numb.toString().split('.')?.[1]
              : numb.toString().split('.')?.[1] + '0')
          : '');
    } else {
      result =
        numb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
        (decimal ? '.00' : '');
    }

    return result;
  } else {
    return '';
  }
}
