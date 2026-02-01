const questions = [
  {
    q: "เจอกันครั้งแรกที่ไหน ? ",
    c: ["1.โรงพยาบาลมหาราช", "2.ร้านมอนิ่งทูไนท์", "3.ร้าน เยสบาร์"],
    correct: 1,
  },
  {
    q: "เราชอบจุ๊บกันทุกครั้งเช้า กลางวัน เย็น แบบไหน",
    c: ["1.หน้าผาก แก้ม ปาก", "2.แก้มซ้าย ปาก แก้มขวา", "3.แก้มซ้าย แก้มขวา ปาก"],
    correct: 2,
  },
  {
    q: "ถ้ามีวันว่างด้วยกัน 1 วัน อยากทำอะไร",
    c: ["1.ดูหนัง", "2.อยู่ด้วยกันเฉยๆ", "3.ขับรถเล่น"],
    correct: 1,

  },
  {
    q: "เจอกันที่ไหนถึงได้รู้จักกัน",
    c: ["1.instagram ", "2.Facebook ", "3.tinder"],
    correct: 2,

  },
  {
    q: "คิดว่าอยากให้เราจะรักกันไปได้นานแค่ไหน",
    c: ["1.อีกหลายปี", "2.ตลอดไป", "3.ตลอดกาล"],
    correct: 2,
  }
];

let index = 0;
let score = 0;

const questionText = document.getElementById("questionText");
const choicesBox = document.getElementById("choices");
const answerHint = document.getElementById("answerHint");
const gameCard = document.getElementById("gameCard");

function renderQuestion() {
  const q = questions[index];
  questionText.textContent = `${index + 1}. ${q.q}`;
  answerHint.textContent = "";
  choicesBox.innerHTML = "";

  q.c.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(i);
    choicesBox.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const q = questions[index];

  if (selected === q.correct) {
    score++;
    answerHint.textContent = " ตอบได้ตรงใจ";
  } else {
    answerHint.textContent = " ไม่เป็นไรนะ";
  }

  answerHint.textContent += " — " + q.explain;

  index++;

  setTimeout(() => {
    if (index < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 1200);
}

function showResult() {
  gameCard.innerHTML = `
    <h2>เล่นจบแล้ว </h2>
    <p class="subtle">คุณได้</p>
    <h6>${score} / ${questions.length} คะแนน</h6>
    <p class="subtle">${resultMessage()}</p>
  `;
}

function resultMessage() {
  if (score === 5) return "เข้ากันได้ดีมาก เหมือนเกิดมาเพื่อกันเลย ";
  if (score >= 3) return "หวานกำลังดี น่ารักมาก ";
  return "ความรักไม่ได้วัดที่คะแนน แต่หัวใจ ";
}

renderQuestion();
