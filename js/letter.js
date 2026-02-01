const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const hintText = document.getElementById("hintText");

const modalBackdrop = document.getElementById("modalBackdrop");
const closeModalBtn = document.getElementById("closeModalBtn");
const letterText = document.getElementById("letterText");

let opening = false;
let letterOpened = false;

const MESSAGE = `
สุขสันต์วันแห่งความรักนะคะ ขอบคุณป่ะป๊านะที่เข้ามาเป็นความสบายใจให้หนู 
ขอบคุณที่รักและเอ็นดูหนูมาตลอด ขอบคุณที่ทำทุกๆอย่างให้หนูโดยที่บางอย่างหนูไม่ต้องร้องขอเลย 
ขอบคุณที่ทำให้หนูรู้สึกว่าเป็นคนพิเศษของป่ะป๊าในทุกๆวัน ขอให้เราเป็นพื้นที่ที่พิเศษของกันและกันแบบนี้ตลอดไปนะ 
ปีนี้พิเศษหน่อยมีเคโระเข้ามาอยู่ในชีวิตของเราด้วย ช่วยกันดูแลเคโระไปด้วยกันนะ เบบี๋รักป่ะป๊านะคะ
`;

// 📨 คลิกที่ซองจดหมาย
openLetter.addEventListener("click", () => {

  // ถ้าเปิดแล้ว → คลิกเพื่ออ่านจดหมาย
  if (letterOpened) {
    openModal();
    return;
  }

  if (opening) return;
  opening = true;

  // ซ่อนคำแนะนำ
  hintText.style.display = "none";

  // ปรับปุ่ม
  readBtn.textContent = "กำลังเปิดจดหมาย...";

  // letter2
  openLetter.classList.remove("letter-closed");
  openLetter.src = "assets/letter2.png";

  // ไป letter3
  setTimeout(() => {
    openLetter.src = "assets/letter3.png";
    letterOpened = true;
    opening = false;

    readBtn.textContent = "อ่านจดหมาย";
  }, 600);
});

// ปุ่มอ่านจดหมาย
readBtn.addEventListener("click", () => {
  if (!letterOpened) return;
  openModal();
});

// เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ปิด modal
closeModalBtn.addEventListener("click", () => {
  modalBackdrop.style.display = "none";
});

modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) {
    modalBackdrop.style.display = "none";
  }
});
