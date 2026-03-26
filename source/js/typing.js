export function startTyping(part1, part2, texts) {
  let textIndex = 0;
  let i = 0;
  let j = 0;
  let isDeleting = false;

  function type() {
    const current = texts[textIndex];

    if (!isDeleting) {
      if (i < current.t1.length) {
        part1.innerHTML += current.t1.charAt(i);
        i++;
      } else if (j < current.t2.length) {
        part2.innerHTML += current.t2.charAt(j);
        j++;
      } else {
        isDeleting = true;
        setTimeout(type, 1200);
        return;
      }
    } else {
      if (j > 0) {
        part2.innerHTML = current.t2.substring(0, j - 1);
        j--;
      } else if (i > 0) {
        part1.innerHTML = current.t1.substring(0, i - 1);
        i--;
      } else {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    }

    setTimeout(type, isDeleting ? 50 : 100);
  }

  return type();
}
