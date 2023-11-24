const array = [
  {
    text: "Letter Two: 相信",
    id: "line-h3",
  },
  {
    text: "Hey My Dear",
    id: "line-head",
  },
  {
    text: "&#10084;",
    id: "line-0",
  },
  {
    text: "I Trust You, May be it might sound artificial for You.",
    id: "line-1",
  },
  {
    text: "Ask the things around Me, they would say how confused/worried/nervous I was when You didn't speak well with Me a day.",
    id: "line-2",
  },
  {
    text: "Bad Inner Me said don't anything/ping/call Her till she realizes what You meant.",
    id: "line-3",
  },
  {
    text: "But somewhere the Good Inner Me said, Trust Her She will get back to You as Yours.",
    id: "line-4",
  },
  {
    text: "So, I followed My Good One, I did believed Your feelings. then went onto do whatever I did.",
    id: "line-5",
  },
  {
    text: "He was correct, I trusted Mine",
    id: "line-6",
  },
  {
    text: "&#10084;",
    id: "line-7",
  },
  {
    text: "So, I got back Mine",
    id: "line-8",
  },
  {
    text: "&#10084;",
    id: "line-9",
  },
  {
    text: "You know what, we were fighting with our alter-ego( Not between Us ) to get back to Mine/You/Me/Us",
    id: "line-10",
  },
  {
    text: "&#10084;",
    id: "line-11",
  },
  {
    text: "So, let's keep fighting with our alter-ego to eventually get back to Us",
    id: "line-12",
  },
  {
    text: "&#10084;",
    id: "line-13",
  },
  {
    text: "Forever Your Nerdy ",
    id: "line-16",
  },
  {
    text: "&#10084;",
    id: "line-17",
  },
  {
    text: "hoping,",
    id: "line-18",
  },
  {
    text: "'I Trust You'",
    id: "line-19",
  },{
    text: " turns to ",
    id: "line-20",
  },{
    text: "'We Trust Us'",
    id: "line-21",
  },{
    text: "To My Dear ",
    id: "line-22",
  },{
    text: "&#10084;",
    id: "line-23",
  },{
    text: "Anitha aka Meena aka Pondatti",
    id: "line-24",
  },{
    text: "பின் குறிப்பு:",
    id: "line-25",
  },
  {
    text: "I strongly ",
    id: "line-26",
  },
  {
    text: "'Trust Our feelings'",
    id: "line-27",
  },
  {
    text: ", not easily ",
    id: "line-28",
  },
  {
    text: "'anything'",
    id: "line-29",
  },
];
async function displayTextOneLetterAtATime(text, outputElement) {
  let index = 0;
  const resolvePromise = new Promise((resolve) => {
    displayNextLetter(resolve);
  });
  function displayNextLetter(resolve) {
    if (index < text.length) {
      outputElement.textContent += text.charAt(index);
      index++;
      setTimeout(() => displayNextLetter(resolve), 100); // Adjust the delay (in milliseconds) between letters
    } else {
      resolve();
    }
  }
  return resolvePromise;
}

let i = 0;

const doOperation = async () => {
  while (i < array.length) {
    const { text, id } = array[i];
    if (text === '&#10084;') {
      document.getElementById(id).innerHTML = text;
    } else 
      await displayTextOneLetterAtATime(text, document.getElementById(id));
    i++;
  }
};

doOperation();
