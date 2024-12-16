// ฟังก์ชันเพื่อจับเหตุการณ์เมื่อฟอร์มถูกส่ง
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // ป้องกันไม่ให้ฟอร์มถูกส่งไปที่เซิร์ฟเวอร์

    // รับข้อมูลจากฟอร์ม
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // แสดงข้อความตอบกลับ
    alert(`ขอบคุณ, ${name}! เราได้รับข้อความจากคุณแล้ว.`); // แสดงข้อความขอบคุณ

    // แสดงข้อความสำเร็จบนหน้าเว็บ
    const successMessage = document.createElement('div');  // สร้าง div ใหม่
    successMessage.textContent = "ส่งข้อความสำเร็จ! ขอบคุณที่ติดต่อเรา.";  // ข้อความที่จะแสดง
    successMessage.style.color = 'green';  // เปลี่ยนสีข้อความเป็นสีเขียว
    successMessage.style.fontSize = '18px';
    successMessage.style.fontWeight = 'bold';
    successMessage.style.textAlign = 'center';
    successMessage.style.marginTop = '20px';

    // เพิ่มข้อความสำเร็จหลังจากฟอร์ม
    document.querySelector('form').appendChild(successMessage);

    // ล้างฟอร์มหลังจากการส่ง
    document.querySelector('form').reset();
});
