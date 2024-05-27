const mergeSortedArrays = (arr1, arr2) => {
  if (!arr1.length && !arr2.length) return [];
  const arrayMerge = [];

  let step1 = 0;
  let step2 = 0;
  while (true) {
    let char1 = arr1[step1];
    let char2 = arr2[step2];

    if (char1 === undefined || char2 === undefined) {
      let subArray = char1 === undefined ? arr2.slice(step2,) : arr1.slice(step1,);

      arrayMerge.push(...subArray);
      return arrayMerge;
    }

    const item = char1 > char2 ? char2 : char1;
    char1 > char2 ? step2++ : step1++;
    arrayMerge.push(item);
  }
}
