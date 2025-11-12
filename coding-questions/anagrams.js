/**
 * Anagrams are words that contain the exact same letters with the same frequency, just rearranged. By sorting both strings:
 * All identical letters are grouped together
 * The order becomes standardized
 * If two strings are anagrams, their sorted versions will be identical
 */
function areAnagrams(str1, str2) {
  let isAnagram = true;
  if (!str1 || !str2 || str1?.length !== str2?.length) {
    return false;
  }
  const str1StringArr = [...str1];
  [...str2]?.forEach((char) => {
    if (!str1StringArr?.includes(char)) {
      isAnagram = false;
    }
  });
  return isAnagram;
}
console.log(areAnagrams("race", "acer"));

// Test: areAnagrams("listen", "silent") should return true
